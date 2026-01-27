import { Target, Eye, Heart, CheckCircle, Award, Users, Briefcase } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import OptimizedImage from '../components/OptimizedImage';
import orgoFacility from '../assets/orgo-facility.png';
import orgoTeamCore from '../assets/orgo-team-core.png';
import imgProjects from '../assets/images/image7.jpeg';
import imgWhyChoose from '../assets/images/image10.jpeg';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To deliver innovative automation solutions and SPM machines that enhance manufacturing efficiency, reduce costs, and drive industrial growth for our clients.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'To be the leading provider of automation and engineering solutions in India, recognized for excellence, innovation, and customer satisfaction.',
  },
  {
    icon: Heart,
    title: 'Values',
    description:
      'Integrity, Innovation, Excellence, and Customer Focus guide everything we do. We believe in building lasting partnerships through trust and quality.',
  },
];

const teamStats = [
  { icon: Award, value: '5+', label: 'Years of Excellence' },
  { icon: Briefcase, value: '350+', label: 'Projects Delivered' },
  { icon: Users, value: '100+', label: 'Satisfied Clients' },
];

const milestones = [
  { year: '2021', title: 'Company Founded', description: 'OrGo Group was established with a vision to revolutionize industrial automation.' },
  { year: '2012', title: 'First Major Project', description: 'Successfully completed our first large-scale automation project for automotive industry.' },
  { year: '2015', title: 'Training Institute Launch', description: 'Launched our training institute to develop skilled automation professionals.' },
  { year: '2018', title: 'Expansion', description: 'Expanded operations with new facilities and increased team capacity.' },
  { year: '2022', title: 'Industry Recognition', description: 'Received multiple industry awards for innovation and excellence.' },
  { year: '2024', title: 'Continued Growth', description: 'Serving 100+ clients across various industries with cutting-edge solutions.' },
];

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-bg to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <OptimizedImage
                      src={orgoTeamCore}
                      alt="Our team"
                      className="w-full h-64"
                      objectFit="cover"
                      placeholder="skeleton"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <OptimizedImage
                      src={orgoFacility}
                      alt="Our facility"
                      className="w-full h-40"
                      objectFit="cover"
                      placeholder="skeleton"
                    />
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <OptimizedImage
                      src={imgProjects}
                      alt="Our projects"
                      className="w-full h-64"
                      objectFit="cover"
                      placeholder="skeleton"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                About OrGo Group
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering Excellence Since 2021
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                OrGo Group is a leading provider of automation solutions, SPM machines, and technical manpower services. With 5+ years of experience, we have helped hundreds of businesses transform their manufacturing processes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of expert engineers and technicians are dedicated to delivering innovative solutions that meet the unique needs of each client. We pride ourselves on our commitment to quality, reliability, and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-8">
                {teamStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Foundation"
            title="Mission, Vision & Values"
            description="The principles that guide our work and define our commitment to excellence."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Our Strengths"
                title="Why Choose OrGo Group?"
                align="left"
              />
              <ul className="space-y-4">
                {[
                  'Industry-leading expertise in automation and SPM machines',
                  'Customized solutions tailored to your specific needs',
                  'Experienced team of engineers and technicians',
                  'Comprehensive training and support services',
                  'Proven track record with 350+ successful projects',
                  'Commitment to quality and on-time delivery',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                src={imgWhyChoose}
                alt="Why choose us"
                className="w-full h-full"
                objectFit="cover"
                placeholder="skeleton"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones & Achievements"
            description="A timeline of our growth and key achievements over the years."
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 shadow-lg shadow-primary/30" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
