import { Link } from 'react-router-dom';
import { footerData } from '../../data/footerData';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './Button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 py-12 md:py-16 lg:py-20 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-8 lg:gap-12 mb-16">
          
          {/* Company Branding & Social */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="flex items-center leading-none w-max hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm" 
              aria-label="Infocera Home"
            >
              <span className="font-['Exo','Orbitron',sans-serif] text-[28px] tracking-[3px]">
                <span className="font-[900] text-white">INFO</span>
                <span className="font-[400] text-cyan-400">CERA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Empowering businesses with scalable software, cloud infrastructure, and data-driven strategies — engineered for performance, built for growth.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {footerData.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    href={item.href}
                    variant="ghost"
                    className="text-zinc-500 hover:text-white hover:-translate-y-1 hover:bg-transparent transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm p-1 w-auto h-auto min-h-0"
                    aria-label={`Visit our ${item.name} page`}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Services</h3>
            <ul className="flex flex-col space-y-3">
              {footerData.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Technologies</h3>
            <ul className="flex flex-col space-y-3">
              {footerData.technologies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Company</h3>
            <ul className="flex flex-col space-y-3">
              {footerData.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4 lg:col-span-1">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Contact</h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href={`mailto:${footerData.contact.email}`} className="flex items-center space-x-3 group focus:outline-none focus:ring-1 focus:ring-white/50 rounded-sm">
                  <Mail className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  <span className="text-sm text-zinc-500 group-hover:text-white transition-colors">{footerData.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center space-x-3 group focus:outline-none focus:ring-1 focus:ring-white/50 rounded-sm">
                  <Phone className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  <span className="text-sm text-zinc-500 group-hover:text-white transition-colors">{footerData.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-zinc-500 mt-1 shrink-0" />
                <span className="text-sm text-zinc-500 leading-relaxed">{footerData.contact.address}</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Footer Border & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} Infocera IT. All rights reserved.
          </p>
          <ul className="flex items-center space-x-6">
            {footerData.legal.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm text-zinc-500 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/50 rounded-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
