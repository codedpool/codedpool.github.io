"use client";
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function About() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="about" className="bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Portrait */}
          <div className="relative order-2 lg:order-1">

            {/* Portrait Image */}
            <div className="relative z-10 flex justify-center">
              <Image
                src="/portfolio2.png"
                alt="Romanch Roshan Singh - Developer Profile"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-sm font-light text-gray-400 mb-4 uppercase tracking-wider">ABOUT</p>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                Developer who loves to<br />
                build stuff
              </h1>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hey! I&apos;m Romanch, a developer who loves turning ideas into impactful products. I enjoy building applications that don&apos;t just work, but actually solve real problems.
                </p>
                <p>
                  I&apos;m always up for amazing projects—whether it&apos;s designing clean, user-friendly interfaces, scaling backend systems, or experimenting with new technologies. I pick things up fast, adapt quickly, and bring energy and precision to every line of code I write.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                variant="secondary" 
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md"
                onClick={() => scrollToSection('contact')}
              >
                Contact me
              </Button>
              <Button 
                variant="ghost" 
                className="text-white border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-md"
                onClick={() => scrollToSection('projects')}
              >
                View projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
