import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Briefcase } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCards from '../components/ServiceCards';
import Customers from '../components/Customers';
import LocationMap from '../components/LocationMap';
import imgEngineering from '../assets/images/image34.JPG';
import imgAutomation from '../assets/images/image44.png';
import imgManufacturing from '../assets/images/image45.png';
import imgTechnology from '../assets/images/image68.png';
import imgHeroBg from '../assets/images/hero-cover.jpg';

const stats = [
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Briefcase, value: '350+', label: 'Projects Completed' },
  { icon: Users, value: '100+', label: 'Happy Clients' },
  { icon: CheckCircle, value: '50+', label: 'Team Members' },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="cover"
        subtitle="Welcome to OrGo Group"
        title="All the Solutions for your Automation and SPM Machines"
        description="We provide comprehensive automation solutions, SPM machines, and technical manpower services. Transform your manufacturing with cutting-edge technology and expert engineering."
        ctaText="Explore Our Services"
        ctaLink="/services"
        imageUrl={imgHeroBg}
        showDecorations={false}
      />

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="We deliver comprehensive automation and engineering solutions to help businesses optimize their manufacturing processes."
          />
          <ServiceCards limit={3} />
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <SectionHeading
                subtitle="Why Choose Us"
                title="Excellence in Engineering & Automation"
                description="With 5+ years of experience, we have established ourselves as a trusted partner for automation solutions."
                align="left"
              />
              <ul className="space-y-4 mb-8">
                {[
                  'Industry-leading automation expertise',
                  'Custom SPM machines for unique requirements',
                  'Skilled technical workforce',
                  'Comprehensive training programs',
                  '24/7 maintenance and support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={imgEngineering}
                    alt="Engineering"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={imgAutomation}
                    alt="Automation"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={imgManufacturing}
                    alt="Manufacturing"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={imgTechnology}
                    alt="Technology"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <Customers />

      {/* Location Section */}
      <LocationMap />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your automation needs and discover how we can help optimize your processes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919987274888"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold transition-all"
            >
              Call Us Now
            </a>
            <Link
              to="/career"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold transition-all"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
