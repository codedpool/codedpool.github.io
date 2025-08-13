import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import projects from '@/data/projects.json';

export default function Projects() {

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-light text-gray-400 mb-4 uppercase tracking-wider">PORTFOLIO</p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Discover what I've created
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Each piece reflects my passion for innovation and commitment to delivering 
            high-quality results. Feel free to explore and get inspired!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                {/* Sunburst Pattern Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    {/* Sunburst rays */}
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 origin-bottom bg-gradient-to-t from-gray-600 to-gray-400 opacity-60"
                        style={{
                          width: '2px',
                          height: '120px',
                          transform: `translate(-50%, -100%) rotate(${i * 22.5}deg)`,
                        }}
                      />
                    ))}
                    {/* Center circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-500 rounded-full opacity-80" />
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-black hover:bg-gray-200"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    asChild
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button
            variant="secondary"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md"
          >
            View All Projects
          </Button>
        </div>
      </div>

      {/* Additional geometric elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white opacity-30 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white opacity-50 rounded-full"></div>
    </section>
  )
}
