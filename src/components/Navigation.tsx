
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, QrCode, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Bazarius</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/vendor">
              <Button 
                variant={isActive('/vendor') ? 'default' : 'outline'} 
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Vendor</span>
              </Button>
            </Link>
            
            <Link to="/buyer">
              <Button 
                variant={isActive('/buyer') ? 'default' : 'outline'} 
                className="flex items-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Shop</span>
              </Button>
            </Link>
            
            <Link to="/qr-scanner">
              <Button 
                variant={isActive('/qr-scanner') ? 'default' : 'outline'} 
                className="flex items-center space-x-2"
              >
                <QrCode className="h-4 w-4" />
                <span>QR Scan</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
