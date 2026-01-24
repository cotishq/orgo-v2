import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Users, GraduationCap, Settings, Wrench, Cog } from 'lucide-react';
import imgAutomation from '../assets/images/image50.png';
import imgManpower from '../assets/images/image79.jpeg';
import imgTraining from '../assets/images/image19.jpeg';
import imgSPM from '../assets/images/image34.JPG';
import imgMaintenance from '../assets/images/maintenance-support.png';
import imgConsulting from '../assets/images/engineering-consulting.png';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: 'automation',
    title: 'Automation Solutions',
    description: 'Complete automation solutions for manufacturing and industrial processes. We design and implement cutting-edge automation systems.',
    icon: Cpu,
    imageUrl: imgAutomation,
  },
  {
    id: 'manpower',
    title: 'ManPower Services',
    description: 'Skilled technical workforce solutions for your automation and manufacturing needs. Expert engineers and technicians on demand.',
    icon: Users,
    imageUrl: imgManpower,
  },
  {
    id: 'institute',
    title: 'Training Institute',
    description: 'Professional training programs in automation, PLC programming, and industrial technologies. Build your career with us.',
    icon: GraduationCap,
    imageUrl: imgTraining,
  },
  {
    id: 'spm',
    title: 'SPM Machines',
    description: 'Custom Special Purpose Machines designed for your specific manufacturing requirements. Precision engineering at its best.',
    icon: Settings,
    imageUrl: imgSPM,
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance and support services to keep your automation systems running at peak performance.',
    icon: Wrench,
    imageUrl: imgMaintenance,
  },
  {
    id: 'consulting',
    title: 'Engineering Consulting',
    description: 'Expert consulting services for automation projects. From concept to completion, we guide your engineering journey.',
    icon: Cog,
    imageUrl: imgConsulting,
  },
];

interface ServiceCardsProps {
  limit?: number;
  showAll?: boolean;
}

export default function ServiceCards({ limit = 3, showAll = false }: ServiceCardsProps) {
  const displayedServices = showAll ? services : services.slice(0, limit);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {displayedServices.map((service) => (
        <article
          key={service.id}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <service.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <Link
              to={`/services#${service.id}`}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
