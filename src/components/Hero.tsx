import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  showDecorations?: boolean;
  variant?: 'home' | 'page' | 'cover';
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = '/services',
  imageUrl = 'https://picsum.photos/seed/hero/600/600',
  showDecorations = true,
  variant = 'home',
}: HeroProps) {
  if (variant === 'page') {
    return (
      <section className="bg-linear-to-br from-accent-bg to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {subtitle && (
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </section>
    );
  }

  if (variant === 'cover') {
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="relative overflow-hidden rounded-3xl min-h-[520px] sm:min-h-[560px] flex items-center">
            {/* Background Image (contained) */}
            <div className="absolute inset-0 z-0">
              <OptimizedImage
                src={imageUrl}
                alt={title}
                className="w-full h-full"
                objectFit="cover"
                priority={true}
                placeholder="skeleton"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full text-center px-4 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
              {subtitle && (
                <span className="inline-block text-white/90 font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm">
                  {subtitle}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight max-w-5xl mx-auto drop-shadow-sm px-2 sm:px-6">
                {title}
              </h1>
              {description && (
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-2 sm:px-6">
                  {description}
                </p>
              )}

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <Link
                  to={ctaLink}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  {ctaText ?? 'Explore Our Services'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-linear-to-br from-accent-bg via-white to-accent-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {subtitle && (
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                {subtitle}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                {description}
              </p>
            )}
            {ctaText && (
              <Link
                to={ctaLink}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 group"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Image with Decorations */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Main Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
                <OptimizedImage
                  src={imageUrl}
                  alt="Hero"
                  className="w-full h-full"
                  objectFit="cover"
                  priority={true}
                  placeholder="blur"
                />
              </div>

              {/* Decorative Elements */}
              {showDecorations && (
                <>
                  {/* Floating dots */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float opacity-80" />
                  <div className="absolute top-12 -left-8 w-6 h-6 bg-primary-light rounded-full animate-float-delay opacity-60" />
                  <div className="absolute -bottom-4 right-12 w-10 h-10 bg-primary/30 rounded-full animate-float-delay-2" />
                  <div className="absolute bottom-16 -left-6 w-4 h-4 bg-primary rounded-full animate-float opacity-70" />
                  <div className="absolute top-1/2 -right-10 w-5 h-5 bg-primary-light/50 rounded-full animate-float-delay" />

                  {/* Dotted pattern */}
                  <div className="absolute -z-10 -right-16 -bottom-16 w-32 h-32 opacity-20">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#2563eb_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#2563eb_0%,transparent_50%)]" />
      </div>
    </section>
  );
}
