import { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Award, TrendingUp, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import ApplicationModal from '../components/ApplicationModal';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobs: JobListing[] = [
  {
    id: '1',
    title: 'Automation Engineer',
    department: 'Engineering',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Design and implement automation solutions for manufacturing processes.',
  },
  {
    id: '2',
    title: 'PLC Programmer',
    department: 'Technical',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Develop and maintain PLC programs for industrial automation systems.',
  },
  {
    id: '3',
    title: 'Mechanical Design Engineer',
    department: 'Engineering',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Design mechanical components and systems for SPM machines.',
  },
  {
    id: '4',
    title: 'Project Manager',
    department: 'Management',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Lead and manage automation projects from concept to completion.',
  },
  {
    id: '5',
    title: 'Technical Trainer',
    department: 'Training',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Conduct training sessions on automation technologies and PLC programming.',
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  const openApplicationModal = (job: JobListing) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

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
              Current Job Openings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role for you.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {job.department}
                      </span>
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
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Posted recently
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openApplicationModal(job)}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@orgogroup.in"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold transition-all"
          >
            Send Your Resume
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={closeApplicationModal}
          jobTitle={selectedJob.title}
          jobDepartment={selectedJob.department}
        />
      )}
    </main>
  );
}
