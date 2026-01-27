import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCards, { services } from '../components/ServiceCards';

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We begin by understanding your specific requirements and challenges through detailed consultation.',
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Our engineers design custom solutions and create detailed project plans tailored to your needs.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'We develop and manufacture the automation systems or SPM machines with precision engineering.',
  },
  {
    step: '04',
    title: 'Installation',
    description: 'Our team handles complete installation and integration with your existing systems.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Rigorous testing ensures everything works perfectly before handover.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance and support to keep your systems running at peak performance.',
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="Our Services"
        subtitle="What We Offer"
        description="Comprehensive automation solutions and engineering services to transform your manufacturing processes."
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCards showAll={true} />
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Service Details
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Expertise
            </h2>
          </div>

          <div className="space-y-16">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Customized solutions for your needs',
                      'Expert engineering team',
                      'Quality assurance at every step',
                      'Competitive pricing',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to deliver excellence in every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements. Our team is ready to help you achieve your automation goals.
          </p>
          <a
            href="tel:+917709278809"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
