import SectionHeading from './SectionHeading';
import OptimizedImage from './OptimizedImage';

import logoJendamark from '../assets/images/jend.jpeg';
import logoMikro from '../assets/images/mikro.jpeg';
import logoTata from '../assets/images/tata.jpeg';
import logoSwastik from '../assets/images/swastik.jpeg';
import logoVenus from '../assets/images/venus.jpeg';
import logoKPI from '../assets/images/kpi.jpeg';
import logoChintamani from '../assets/images/chintamani.jpeg';
import logoHaosen from '../assets/images/kaosen.jpeg';
import logoTechEra from '../assets/images/tecchera.jpeg';

const customers = [
  {
    name: 'Jendamark India Pvt. Ltd.',
    location: 'Khed-Shivapur',
    logo: logoJendamark,
  },
  {
    name: 'Haosen Automation Pvt. Ltd.',
    location: 'Hinjewadi',
    logo: logoHaosen,
  },
  {
    name: 'Mikro Innotech India Pvt. Ltd.',
    location: 'Sasewadi',
    logo: logoMikro,
  },
  {
    name: 'Tata Autocomp Systems',
    location: 'Pune',
    logo: logoTata,
  },
  {
    name: 'Swastik Tins Pvt. Ltd.',
    location: 'New-Mumbai',
    logo: logoSwastik,
  },
  {
    name: 'TechEra Engineering Ltd.',
    location: 'Khed-Shivapur',
    logo: logoTechEra,
  },
  {
    name: 'Venus Automation Pvt. Ltd.',
    location: 'Warje',
    logo: logoVenus,
  },
  {
    name: 'KP Industries',
    location: 'Bhosari',
    logo: logoKPI,
  },
  {
    name: 'Chintamani Thermal',
    location: 'Handewadi Hadapsar',
    logo: logoChintamani,
  },
];

export default function Customers() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Trusted Partners"
          title="Our Customers"
          description="We are proud to work with leading companies across various industries, delivering excellence in automation and engineering solutions."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-full h-20 flex items-center justify-center mb-4">
                <OptimizedImage
                  src={customer.logo}
                  alt={customer.name}
                  className="max-h-full max-w-full grayscale group-hover:grayscale-0 transition-all duration-300"
                  objectFit="contain"
                  placeholder="skeleton"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                {customer.name}
              </h3>
              <p className="text-xs text-gray-500">{customer.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
