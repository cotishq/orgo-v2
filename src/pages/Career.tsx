import { Briefcase, MapPin, ArrowRight, Users, Award, TrendingUp, Heart } from 'lucide-react';
import Hero from '../components/Hero';

interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobs: JobListing[] = [
  {
    id: '1',
    title: 'Helper',
    location: 'Pune',
    type: 'Full-time',
    description:
      'Support shop-floor teams with daily tasks, material handling, and basic assembly work. A great entry role to grow with our automation and manufacturing operations.',
  },
  {
    id: '2',
    title: 'Milling Operator',
    location: 'Pune',
    type: 'Full-time',
    description:
      'Operate milling machines to produce precision components as per drawings and tolerances. Ensure quality checks, tool care, and safe machine operation.',
  },
  {
    id: '3',
    title: 'M1TR Operator',
    location: 'Pune',
    type: 'Full-time',
    description:
      'Run and monitor M1TR operations, ensuring consistent output and quality. Coordinate with supervisors for setup, maintenance checks, and production targets.',
  },
  {
    id: '4',
    title: 'Accountant',
    location: 'Pune',
    type: 'Full-time',
    description:
      'Handle billing, bookkeeping, and basic compliance documentation with accuracy. Work closely with the operations team to keep financial records organized and up to date.',
  },
  {
    id: '5',
    title: 'Office Boy',
    location: 'Pune',
    type: 'Full-time',
    description:
      'Support office operations including deliveries, documentation, and daily coordination. Keep the workplace organized and assist teams as needed.',
  },
  {
    id: '6',
    title: 'Store Assistant',
    location: 'Pune',
    type: 'Full-time',
    description:
      'Assist with inventory, inward/outward entries, and store organization for machine parts and materials. Ensure timely availability and accurate stock records.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear career paths and opportunities for advancement within the organization.',
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with experienced professionals in a collaborative environment.',
  },
  {
    icon: Award,
    title: 'Learning & Development',
    description: 'Continuous learning opportunities and professional development programs.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We value your personal time and promote healthy work-life balance.',
  },
];

export default function Career() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="Join Our Team"
        subtitle="Careers at OrGo Group"
        description="Build your career with us. We're looking for talented individuals who share our passion for engineering excellence."
      />

      {/* Why Join Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Why Join Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Working at OrGo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a supportive environment where you can grow, learn, and make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Open Positions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Job Openings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the job roles we are currently open for. Share your details with our HR team to enquire.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <article
                  key={job.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:info@orgogroup.in?subject=${encodeURIComponent(
                        `Job Enquiry: ${job.title}`
                      )}&body=${encodeURIComponent(
                        `Hello HR Team,%0D%0A%0D%0AI would like to enquire about the "${job.title}" role in Pune.%0D%0A%0D%0AName:%0D%0APhone:%0D%0AExperience:%0D%0AResume/Details:%0D%0A`
                      )}`}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
                    >
                      Enquire
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                  <Briefcase className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Open Positions</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We don't have any open roles right now, but we're always looking for talent.
                  Send us your resume below!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              How to Apply
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply', description: 'Submit your application online' },
              { step: '2', title: 'Review', description: 'We review your application' },
              { step: '3', title: 'Interview', description: 'Technical and HR interviews' },
              { step: '4', title: 'Offer', description: 'Receive and accept your offer' },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:info@orgogroup.in?subject=Resume%20Submission&body=Hello%20HR%20Team,%0D%0A%0D%0APlease%20find%20my%20resume%20details%20below:%0D%0A%0D%0AName:%0D%0APhone:%0D%0AExperience:%0D%0AResume%20link%20(or%20attach%20in%20email):%0D%0A"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold transition-all"
          >
            Send Your Resume
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
