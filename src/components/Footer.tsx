import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react';
import { HugeiconsIcon, WhatsappIcon } from './Hugeicons';

function OrGoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="OrGo Group"
    >
      <defs>
        <linearGradient id="orgoMarkGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#orgoMarkGradient)" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
      <path
        d="M16 29.5c0-5.25 3.25-10 8.75-10 1.75 0 3.5.5 4.75 1.35v3.25c-1.2-1-2.75-1.6-4.55-1.6-3.35 0-5.55 2.85-5.55 6.95 0 4.05 2.1 6.95 5.55 6.95 1.55 0 2.95-.45 4.05-1.2v-3.8h-3.2v-2.75h6.35v7.9c-1.55 1.45-3.95 2.6-7.2 2.6-5.5 0-8.75-4.75-8.75-9.9Z"
        fill="#fff"
        opacity="0.95"
      />
    </svg>
  );
}

const WHATSAPP_WA_ME = 'https://wa.me/919987274888';

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

const socialLinks = [
  {
    href: WHATSAPP_WA_ME,
    label: 'WhatsApp',
    renderIcon: () => <HugeiconsIcon icon={WhatsappIcon} />,
  },
  { icon: Linkedin, href: 'https://linkedin.com/company/orgo-automation/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/orgo_institute_25', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <OrGoMark className="h-10 w-10" />
              <span className="text-xl font-bold tracking-tight">OrGo Group</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Leading provider of automation solutions and SPM machines. We deliver excellence in engineering and manufacturing services.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-dark-card border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                className="px-4 py-2.5 bg-primary hover:bg-primary-dark rounded-r-lg transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
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
                202, Ambegaon Valley, Oppo.Swami Narayan Mandir, Near CCD, Amebgaon KH. Pune , Maharashtra - 411046
                </span>
              </li>
              <li>
                <a
                  href="tel:+919987274888"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  +91 9987274888
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

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-dark-card hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
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
