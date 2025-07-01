
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QrCode, Sprout, ChevronDown, User, Store, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const location = useLocation();
  const [isConnected, setIsConnected] = useState(false);
  const [userAlias] = useState('farmer.eth');
  const [walletAddress] = useState('0x1234...5678');
  
  const isActive = (path: string) => location.pathname === path;

  const handleConnectWallet = () => {
    setIsConnected(true);
  };

  const handleLogout = () => {
    setIsConnected(false);
  };
  
  return (
    <nav className="bg-white shadow-lg border-b border-earthy-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-earthy-green-600" />
              <span className="text-2xl font-bold text-earthy-green-800">Bazarius</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/qr-scanner">
              <Button 
                variant={isActive('/qr-scanner') ? 'default' : 'outline'} 
                className={isActive('/qr-scanner') 
                  ? "bg-earthy-green-600 hover:bg-earthy-green-700" 
                  : "border-earthy-green-600 text-earthy-green-600 hover:bg-earthy-green-50"
                }
              >
                <QrCode className="h-4 w-4" />
                <span>QR Scan</span>
              </Button>
            </Link>

            {!isConnected ? (
              <Button onClick={handleConnectWallet} className="bg-earthy-green-600 hover:bg-earthy-green-700">
                Connect Wallet
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 px-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-earthy-green-600 text-white">
                        {userAlias.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">{userAlias}</span>
                      <span className="text-xs text-gray-500">{walletAddress}</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/buyer-info" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Buyer Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/vendor" className="flex items-center">
                      <Store className="mr-2 h-4 w-4" />
                      <span>Seller Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
