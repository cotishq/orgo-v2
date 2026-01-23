import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

export default function Projects() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="Projects Executed"
        subtitle="Our Portfolio"
        description="Explore our extensive portfolio of automation and SPM machine projects delivered across various industries."
      />

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Industries We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Diverse Industry Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our automation solutions and SPM machines serve clients across multiple industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Automotive',
              'Pharmaceutical',
              'Electronics',
              'Food & Beverage',
              'Packaging',
              'Manufacturing',
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="font-medium text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
