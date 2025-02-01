import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Magnetic } from '@/components/ui/magnetic';

const LogoHeartbeat = () => (
  <svg viewBox="0 0 100 40" className="w-full h-full">
    <path
      d="M20 20 L30 20 L35 10 L50 40 L60 0 L75 30 L80 25 L95 25"
      stroke="#00B2FF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="w-32 h-12">
              <LogoHeartbeat />
            </div>
            <p className="text-gray-600 max-w-xs">
              Your trusted AI-powered healthcare companion, available 24/7 to support your well-being journey.
            </p>
            <div className="flex gap-4">
              <Magnetic>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">
                  <Facebook size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">
                  <Twitter size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">
                  <Instagram size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">
                  <Linkedin size={20} />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">Blog & News</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00B2FF] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={18} className="text-[#00B2FF]" />
                <span>support@healthpilot.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={18} className="text-[#00B2FF]" />
                <span>+91 9962563686</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin size={18} className="text-[#00B2FF] mt-1 flex-shrink-0" />
                <span>BotCode Technologies</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} HealthPilot. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-[#00B2FF] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00B2FF] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00B2FF] text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}