import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Cpu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects Executed' },
  { to: '/services', label: 'Services' },
  { to: '/career', label: 'Career' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-primary transition-colors"
            aria-label="OrGo Group Home"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="hidden sm:block">OrGo Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+919987274888"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="w-4 h-4" />
              <span>ENQUIRY: +91 9987274888</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="tel:+919987274888"
                className="mt-4 mx-4 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-full text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>ENQUIRY: +91 9987274888</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
