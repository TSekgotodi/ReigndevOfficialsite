import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform group">
          <div className="group-hover:rotate-3 transition-transform duration-300">
            <Logo className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-xl sm:text-2xl font-bold tracking-wider">
            Reign Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link to="/services" className="text-gray-300 hover:text-white transition-all hover:scale-105 relative group text-sm">
            Our Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/mentors" className="text-gray-300 hover:text-white transition-all hover:scale-105 relative group text-sm">
            Find Mentors
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/learning" className="text-gray-300 hover:text-white transition-all hover:scale-105 relative group text-sm">
            Learning Paths
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-all hover:scale-105 relative group text-sm">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-all hover:scale-105 relative group text-sm">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all"></span>
          </Link>
          <a href="#members" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
            Members
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-xl bg-black/95 border-t border-white/10">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <Link
              to="/services"
              className="text-gray-300 hover:text-white transition-all py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              to="/mentors"
              className="text-gray-300 hover:text-white transition-all py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Mentors
            </Link>
            <Link
              to="/learning"
              className="text-gray-300 hover:text-white transition-all py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learning Paths
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-all py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-all py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="#members"
              className="px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Members
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
