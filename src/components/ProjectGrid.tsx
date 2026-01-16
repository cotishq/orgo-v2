import { ExternalLink } from 'lucide-react';

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
    title: 'Automated Assembly Line',
    category: 'Automation',
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    description: 'Complete automated assembly line for automotive components',
  },
  {
    id: '2',
    title: 'CNC Machine Integration',
    category: 'SPM',
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    description: 'CNC machine integration with robotic arm handling',
  },
  {
    id: '3',
    title: 'PLC Control System',
    category: 'Automation',
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    description: 'Industrial PLC control system for manufacturing plant',
  },
  {
    id: '4',
    title: 'Packaging Automation',
    category: 'Automation',
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
    description: 'High-speed packaging automation system',
  },
  {
    id: '5',
    title: 'Quality Inspection System',
    category: 'SPM',
    imageUrl: 'https://picsum.photos/seed/project5/400/300',
    description: 'Vision-based quality inspection system',
  },
  {
    id: '6',
    title: 'Material Handling Robot',
    category: 'Automation',
    imageUrl: 'https://picsum.photos/seed/project6/400/300',
    description: 'Automated material handling with robot integration',
  },
  {
    id: '7',
    title: 'Conveyor System',
    category: 'SPM',
    imageUrl: 'https://picsum.photos/seed/project7/400/300',
    description: 'Custom conveyor system for production line',
  },
  {
    id: '8',
    title: 'Welding Automation',
    category: 'Automation',
    imageUrl: 'https://picsum.photos/seed/project8/400/300',
    description: 'Robotic welding cell for heavy manufacturing',
  },
  {
    id: '9',
    title: 'Testing Equipment',
    category: 'SPM',
    imageUrl: 'https://picsum.photos/seed/project9/400/300',
    description: 'Automated testing and calibration equipment',
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
