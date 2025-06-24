import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">GemShine</h3>
                <p className="text-xs text-gray-400">Since 1998</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting beauty with the world's finest gemstones. Your trusted partner in luxury jewelry for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-navy-800 rounded-full hover:bg-primary-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-navy-800 rounded-full hover:bg-primary-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-navy-800 rounded-full hover:bg-primary-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Our Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/certification" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Certification
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Gemstone Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/sizing" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Diamond District</p>
                  <p className="text-gray-300">New York, NY 10036</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-400 transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@gemshine.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  info@gemshine.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GemShine. All rights reserved. Crafting beauty since 1998.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;