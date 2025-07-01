
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QrCode, Sprout, ChevronDown, User, Store, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  isWalletConnected?: boolean;
  onConnectWallet?: () => void;
  mode?: 'buyer' | 'seller';
  onModeChange?: (mode: 'buyer' | 'seller') => void;
}

const Navigation = ({ 
  isWalletConnected = false, 
  onConnectWallet, 
  mode = 'buyer', 
  onModeChange 
}: NavigationProps) => {
  const location = useLocation();
  const [userAlias] = useState('farmer.eth');
  
  const isActive = (path: string) => location.pathname === path;

  const handleConnectWallet = () => {
    if (onConnectWallet) {
      onConnectWallet();
    }
  };

  const handleLogout = () => {
    // Reset to disconnected state through parent component
    if (onConnectWallet) {
      onConnectWallet();
    }
  };

  const handleModeChange = (newMode: 'buyer' | 'seller') => {
    if (onModeChange) {
      onModeChange(newMode);
    }
  };
  
  return (
    <nav className="bg-white shadow-lg border-b border-earthy-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={isWalletConnected ? "/qr-scanner" : "/"} className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-earthy-green-600" />
              <span className="text-2xl font-bold text-earthy-green-800">Bazarius</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {isWalletConnected && (
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
            )}

            {!isWalletConnected ? (
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
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Profile Mode</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1">
                    <Select value={mode} onValueChange={handleModeChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buyer">
                          <div className="flex items-center">
                            <User className="mr-2 h-4 w-4" />
                            Buyer Profile
                          </div>
                        </SelectItem>
                        <SelectItem value="seller">
                          <div className="flex items-center">
                            <Store className="mr-2 h-4 w-4" />
                            Seller Dashboard
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={mode === 'buyer' ? "/buyer-info" : "/vendor"} className="flex items-center">
                      {mode === 'buyer' ? <User className="mr-2 h-4 w-4" /> : <Store className="mr-2 h-4 w-4" />}
                      <span>{mode === 'buyer' ? 'Buyer Profile' : 'Seller Dashboard'}</span>
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
