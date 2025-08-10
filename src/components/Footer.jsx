import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {/* Brand/Logo Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <span className="text-black text-sm font-bold">R</span>
                  </div>
                </div>
                <span className="text-xl font-light italic">Romanch Roshan Singh</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mx-auto lg:mx-0 max-w-sm">
                A passionate full-stack developer focused on creating innovative web solutions 
                with modern technologies and clean, efficient code.
              </p>
              {/* Social Media Links */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white font-medium text-lg">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Me
                </a>
                <a 
                  href="#projects" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
                <a 
                  href="#blog" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-white font-medium text-lg">Services</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Web Development
                </a>
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Next.js Applications
                </a>
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  React Development
                </a>
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  API Development
                </a>
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  UI/UX Design
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white font-medium text-lg">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:romanchacks@gmail.com" 
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    romanchacks@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a 
                    href="tel:+919155808901" 
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    +91 9155808901
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/romanch11/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    linkedin.com/in/romanch11
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800">
        <div className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0 text-center">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>Copyright 2024 © Romanch Roshan Singh. All rights reserved.</p>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a 
                  href="#privacy" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#terms" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a 
                  href="#cookies" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
