import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import orgoLogo from '../assets/images/logo-orgo-new.png';

const services = [
  'Automation Solutions',
  'SPM Machines',
  'ManPower Services',
  'Training Institute',
  'Maintenance & Support',
];

const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/career', label: 'Career' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <img
                src={orgoLogo}
                alt="OrGo Group Logo"
                className="h-14 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Leading provider of automation solutions and SPM machines. We deliver excellence in engineering and manufacturing services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  At . Velu , Tal - Bhor Pune Maharashtra
                </span>
              </li>
              <li>
                <a
                  href="tel:+917666495294"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  +91 76664 95294
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@orgogroup.in"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  info@orgogroup.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} OrGo Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
