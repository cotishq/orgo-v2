import { ExternalLink } from 'lucide-react';
import imgConveyor from '../assets/images/conveyor-system.png';
import imgEngineTesting from '../assets/images/image38.png';
import imgEVCharging from '../assets/images/ev-charging-station.png';
import imgFixture from '../assets/images/image43.jpeg';
import imgGantry from '../assets/images/image47.png';
import imgGlassGluing from '../assets/images/image44.png';
import imgHeatChilling from '../assets/images/image45.png';
import imgServoCompression from '../assets/images/image39.png';
import imgTestingBed from '../assets/images/image37.jpeg';

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Glass Gluing Assembly Line',
    category: 'Automation',
    imageUrl: imgGlassGluing,
    description: 'Automated glass gluing assembly line for automotive components',
  },
  {
    id: '2',
    title: 'Rotating Fixture',
    category: 'SPM',
    imageUrl: imgFixture,
    description: 'Precision rotating fixture for complex machining operations',
  },
  {
    id: '3',
    title: 'EV Charging Station',
    category: 'Automation',
    imageUrl: imgEVCharging,
    description: 'Smart electric vehicle charging infrastructure solutions',
  },
  {
    id: '4',
    title: 'Overhead Gantry',
    category: 'Automation',
    imageUrl: imgGantry,
    description: 'Heavy-duty overhead gantry system for material handling',
  },
  {
    id: '5',
    title: 'Heat Chilling System',
    category: 'SPM',
    imageUrl: imgHeatChilling,
    description: 'Advanced heat chilling system for industrial cooling applications',
  },
  {
    id: '6',
    title: 'Belt Testing Bed',
    category: 'Automation',
    imageUrl: imgTestingBed,
    description: 'Automated test bed for verifying conveyor belt performance',
  },
  {
    id: '7',
    title: 'Conveyor System',
    category: 'Special Purpose Machines',
    imageUrl: imgConveyor,
    description: 'Custom conveyor system for production line',
  },
  {
    id: '8',
    title: 'Servo Compression Machine',
    category: 'Special Purpose Machines',
    imageUrl: imgServoCompression,
    description: 'High-precision servo compression machine for assembly',
  },
  {
    id: '9',
    title: 'Engine Testing Bed',
    category: 'SPM',
    imageUrl: imgEngineTesting,
    description: 'Automated engine testing and calibration bed',
  },
];

interface ProjectGridProps {
  limit?: number;
}

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {displayedProjects.map((project) => (
        <article
          key={project.id}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {project.category}
            </span>

            {/* View Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.description && (
              <p className="text-gray-600 text-sm line-clamp-2">
                {project.description}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
