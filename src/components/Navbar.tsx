import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Linkedin, Instagram } from 'lucide-react';
import { HugeiconsIcon, WhatsappIcon } from './Hugeicons';
import orgoLogo from '../assets/images/LOGO ORGO.jpeg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects Executed' },
  { to: '/services', label: 'Services' },
  { to: '/career', label: 'Career' },
];

const WHATSAPP_WA_ME = 'https://wa.me/917709278809';
const PHONE_TEL = 'tel:+917709278809';

const socialLinks = [
  { label: 'WhatsApp', href: WHATSAPP_WA_ME, renderIcon: () => <HugeiconsIcon icon={WhatsappIcon} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/orgo-automation/', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/orgo_institute_25', icon: Instagram },
  { label: 'Call', href: PHONE_TEL, icon: Phone },
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
            <img
              src={orgoLogo}
              alt="OrGo Group Logo"
              className="h-10 w-10 p-1 object-contain"
              loading="eager"
              decoding="async"
            />
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
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  target={social.href.startsWith('tel:') ? undefined : '_blank'}
                  rel={social.href.startsWith('tel:') ? undefined : 'noreferrer'}
                >
                  {'renderIcon' in social && social.renderIcon
                    ? social.renderIcon()
                    : 'icon' in social && social.icon
                      ? <social.icon className="w-5 h-5" />
                      : null}
                </a>
              ))}
            </div>
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
              <div className="mt-4 mx-4 flex items-center justify-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                    target={social.href.startsWith('tel:') ? undefined : '_blank'}
                    rel={social.href.startsWith('tel:') ? undefined : 'noreferrer'}
                  >
                    {'renderIcon' in social && social.renderIcon
                      ? social.renderIcon()
                      : 'icon' in social && social.icon
                        ? <social.icon className="w-5 h-5" />
                        : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
