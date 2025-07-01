
import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, QrCode, User, Store } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earthy-green-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-earthy-green-300" />
              <span className="text-2xl font-bold">Bazarius</span>
            </div>
            <p className="text-earthy-green-200">
              Connecting farmers directly with consumers through blockchain technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-earthy-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/farmer-info" className="text-earthy-green-200 hover:text-white transition-colors">
                  For Farmers
                </Link>
              </li>
              <li>
                <Link to="/buyer-info" className="text-earthy-green-200 hover:text-white transition-colors">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link to="/qr-scanner" className="text-earthy-green-200 hover:text-white transition-colors">
                  QR Scanner
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <QrCode className="h-4 w-4 text-earthy-green-300" />
                <span className="text-earthy-green-200">QR Code Shopping</span>
              </li>
              <li className="flex items-center space-x-2">
                <User className="h-4 w-4 text-earthy-green-300" />
                <span className="text-earthy-green-200">Direct from Farmers</span>
              </li>
              <li className="flex items-center space-x-2">
                <Store className="h-4 w-4 text-earthy-green-300" />
                <span className="text-earthy-green-200">Farm Stand Network</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-earthy-green-200">
              <p>support@bazarius.com</p>
              <p>1-800-BAZARIUS</p>
              <p>Follow us on social media</p>
            </div>
          </div>
        </div>

        <div className="border-t border-earthy-green-700 mt-8 pt-8 text-center text-earthy-green-200">
          <p>&copy; 2024 Bazarius. All rights reserved. Built with blockchain technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
