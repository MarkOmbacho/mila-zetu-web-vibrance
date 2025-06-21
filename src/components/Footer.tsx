import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Music2 } from "lucide-react"; // Added TikTok icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MZ</span>
              </div>
              <span className="text-orange-100 font-bold text-xl">Mila Zetu</span>
            </div>
            <p className="text-orange-200 italic text-sm leading-relaxed">
              "Preserving our past, inspiring our future"
            </p>
            <p className="text-orange-300 text-sm">
              Celebrating and preserving Swahili coast heritage through art, cuisine, crafts, and youth empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-orange-100 font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-orange-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-orange-100 font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-orange-200">
                <MapPin size={16} className="flex-shrink-0" />
                <span className="text-sm">Mombasa, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-orange-200">
                <Mail size={16} className="flex-shrink-0" />
                <a 
                  href="mailto:info@milazetu.org" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  info@milazetu.org
                </a>
              </div>
              <div className="flex items-center space-x-3 text-orange-200">
                <Phone size={16} className="flex-shrink-0" />
                <a 
                  href="tel:+254732889048" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  +254 732 889 048
                </a>
              </div>
            </div>
          </div>

          {/* Social Media - Updated with TikTok */}
          <div className="space-y-4">
            <h3 className="text-orange-100 font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1C5RB1jKuJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-800/50 rounded-full flex items-center justify-center text-orange-200 hover:bg-orange-700 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/mila.zetu?utm_source=qr&igsh=NWhhNWR0YnRvajZw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-800/50 rounded-full flex items-center justify-center text-orange-200 hover:bg-orange-700 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://vm.tiktok.com/ZMSmyYH2L/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-800/50 rounded-full flex items-center justify-center text-orange-200 hover:bg-orange-700 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                <Music2 size={18} />
              </a>
            </div>
            <p className="text-orange-300 text-sm">
              Stay connected with our cultural programs and community events.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-700/50 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-orange-300 text-sm">
            © {currentYear} Mila Zetu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;