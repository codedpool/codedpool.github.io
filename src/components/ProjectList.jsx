import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import projects from '@/data/projects.json';

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map(project => (
        <div key={project.id} className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col">
          <div className="w-full h-48 relative mb-4">
            <Image src={project.image} alt={project.title} fill className="object-cover rounded-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-gray-700 text-xs px-2 py-1 rounded">{tech}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <ExternalLink size={18} /> Demo
            </a>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 flex items-center gap-1">
              <Github size={18} /> Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
