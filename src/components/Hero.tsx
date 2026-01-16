import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  showDecorations?: boolean;
  variant?: 'home' | 'page';
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
      <section className="bg-gradient-to-br from-mint-bg to-white py-16 lg:py-24">
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

  return (
    <section className="relative bg-gradient-to-br from-mint-bg via-white to-mint-bg overflow-hidden">
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
                <img
                  src={imageUrl}
                  alt="Hero"
                  className="w-full h-full object-cover"
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
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,#22c55e_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#22c55e_0%,transparent_50%)]" />
      </div>
    </section>
  );
}
