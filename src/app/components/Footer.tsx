import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10 mt-20">
      {/* Decorative gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-orange-500"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center sm:justify-start gap-3 group">
              <div className="group-hover:rotate-3 transition-transform duration-300">
                <Logo className="w-12 h-12" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-2xl font-bold tracking-wider">
                Reign Dev
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering young talent through education, mentorship, and hands-on experience in software development.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/thabang-sekgotodi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-400/50 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>
              <a
                href="https://www.instagram.com/reigndevsa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-400/50 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              <a
                href="https://www.facebook.com/reigndev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-700/20 hover:border-blue-500/50 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-500" />
              </a>
              <a
                href="https://wa.me/27680540434"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-600/20 hover:border-green-400/50 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/learning" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Web Design</li>
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">Mobile Apps</li>
              <li className="text-gray-400 text-sm">Hosting Services</li>
              <li className="text-gray-400 text-sm">Mentorship Programme</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0680540434"
                  className="flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">068 054 0434</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sekgotodit@outlook.com"
                  className="flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm break-all">sekgotodit@outlook.com</span>
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Reign Dev. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
    </footer>
  );
}
