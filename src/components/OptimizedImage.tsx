import { useState, useEffect, useRef, memo, useMemo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'skeleton';
  blurDataURL?: string;
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
}

// Image cache to prevent re-fetching
const imageCache = new Map<string, HTMLImageElement>();
const loadedImages = new Set<string>();

// Generate a simple blur placeholder (LQIP)
function generateBlurPlaceholder(width = 20, height = 20): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(0, 0, width, height);
  }
  return canvas.toDataURL();
}

function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  placeholder = 'skeleton',
  blurDataURL,
  width,
  height,
  objectFit = 'cover',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate or use provided blur placeholder
  const placeholderSrc = useMemo(() => {
    if (blurDataURL) return blurDataURL;
    if (placeholder === 'blur') {
      return generateBlurPlaceholder(width || 20, height || 20);
    }
    return undefined;
  }, [blurDataURL, placeholder, width, height]);

  // Preload image if priority or already cached
  useEffect(() => {
    if (priority || loadedImages.has(src)) {
      setShouldLoad(true);
      return;
    }

    // Check cache
    if (imageCache.has(src)) {
      setIsLoaded(true);
      setShouldLoad(true);
      return;
    }

    // Lazy load with Intersection Observer
    if (imgRef.current && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShouldLoad(true);
              observerRef.current?.disconnect();
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before image enters viewport
        }
      );

      observerRef.current.observe(imgRef.current);
    } else {
      // Fallback: load immediately if IntersectionObserver not supported
      setShouldLoad(true);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, priority]);

  // Load image when shouldLoad becomes true
  useEffect(() => {
    if (!shouldLoad) return;

    // Check if already loaded
    if (loadedImages.has(src)) {
      setIsLoaded(true);
      return;
    }

    // Check cache
    const cachedImg = imageCache.get(src);
    if (cachedImg && cachedImg.complete) {
      setIsLoaded(true);
      return;
    }

    // Preload image
    const img = new Image();
    img.src = src;

    img.onload = () => {
      imageCache.set(src, img);
      loadedImages.add(src);
      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      setIsError(true);
      onError?.();
    };

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, shouldLoad, onLoad, onError]);

  const imageClassName = `transition-opacity duration-300 ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  } ${className}`;

  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[objectFit];

  const containerStyle = useMemo(() => {
    const style: React.CSSProperties = {};
    if (width) style.width = width;
    if (height) style.height = height;
    return style;
  }, [width, height]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${width || height ? '' : 'w-full h-full'}`}
      style={containerStyle}
    >
      {/* Placeholder/Skeleton */}
      {!isLoaded && !isError && (
        <div
          className={`absolute inset-0 ${
            placeholder === 'blur' && placeholderSrc
              ? 'bg-gray-200'
              : 'bg-gray-200 animate-pulse'
          }`}
          style={
            placeholder === 'blur' && placeholderSrc
              ? {
                  backgroundImage: `url(${placeholderSrc})`,
                  backgroundSize: 'cover',
                  filter: 'blur(10px)',
                  transform: 'scale(1.1)',
                }
              : undefined
          }
        />
      )}

      {/* Error State */}
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-xs text-center px-2">
            Failed to load image
          </div>
        </div>
      )}

      {/* Actual Image */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          className={`${imageClassName} ${objectFitClass} w-full h-full`}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => {
            setIsLoaded(true);
            onLoad?.();
          }}
          onError={() => {
            setIsError(true);
            onError?.();
          }}
        />
      )}
    </div>
  );
}

export default memo(OptimizedImage);

