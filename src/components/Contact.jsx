import { Phone, Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-light text-gray-400 mb-4 uppercase tracking-wider">CONTACT ME</p>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                Let's talk!
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-8">
                Feel free to reach out! I'm here to help and will respond within 24 hours. Your 
                questions matter to me!
              </p>
            </div>
          </div>

          {/* Right Content - Contact Information Card */}
          <div
            className="border border-gray-800 rounded-xl"
            style={{
              width: 592,
              height: 360,
              gap: 48,
              opacity: 1,
              borderWidth: '1px',
              borderRadius: '24px',
              paddingTop: '2rem',
              paddingBottom: '2rem',
              paddingLeft: '3rem',
              paddingRight: '3rem',
              background: 'linear-gradient(0deg, var(--base-muted, #262626), var(--base-muted, #262626)), linear-gradient(0deg, var(--alpha-40, rgba(10, 10, 10, 0.6)), var(--alpha-40, rgba(10, 10, 10, 0.6)))'
            }}
          >
            <div className="space-y-6 h-full flex flex-col justify-center">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Call me</p>
                  <a 
                    href="tel:+91 9155808901" 
                    className="text-gray-300 hover:text-white transition-colors underline"
                  >
                    +91 9155808901
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Write an email</p>
                  <a 
                    href="mailto:romanchacks@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors underline"
                  >
                    romanchacks@gmail.com
                  </a>
                </div>
              </div>

              {/* Linkedin */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Linkedin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Connect with me on Linkedin</p>
                  <a
                    href="https://www.linkedin.com/in/romanch11/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors underline"
                  >
                    linkedin.com/in/romanch11
                  </a>
                </div>
              </div>

              {/* Github */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Github className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Connect with me on Github</p>
                  <a
                    href="https://github.com/codedpool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors underline"
                  >
                    github.com/codedpool
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional geometric elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white opacity-30 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white opacity-50 rounded-full"></div>
    </section>
  )
}
