interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses} ${className}`}>
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
