import { Project } from '@/types/project';
import GlitterBorder from './GlitterBorder';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <td className="project-cell w-1/2">
      <div className="glitter-border p-3">
        <h3 className="font-pixel text-lg text-cyber-blue mb-2">✧ {project.title} ✧</h3>
        
        <div 
          className="mx-auto mb-2 border-2 border-neon-green bg-cover bg-center h-[200px]" 
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
        
        <p className="font-comic text-sm mb-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`${getColorForTech(index)} text-black px-2 py-1 text-xs rounded-full font-pixel-body`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href={project.link} 
            className="inline-block bg-lavender text-black px-3 py-1 rounded-full font-pixel-body hover:bg-bright-yellow"
          >
            View Project
          </a>
        </div>
      </div>
    </td>
  );
}

function getColorForTech(index: number): string {
  const colors = ['bg-hot-pink', 'bg-cyber-blue', 'bg-neon-green', 'bg-lavender', 'bg-bright-yellow'];
  return colors[index % colors.length];
}
