
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { QrCode, Sprout, ChevronDown, User, LogOut, Settings } from 'lucide-react';
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
  const navigate = useNavigate();
  const [userAlias] = useState('farmer.eth');
  const [userAddress] = useState('0x742d35Cc6Bf4532C1054...');
  
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
    
    // Navigate to appropriate profile page when switching modes
    if (location.pathname === '/seller-profile' || location.pathname === '/buyer-profile') {
      if (newMode === 'buyer') {
        navigate('/buyer-profile');
      } else {
        navigate('/seller-profile');
      }
    }
  };

  const handleProfileNavigation = () => {
    if (mode === 'buyer') {
      navigate('/buyer-profile');
    } else {
      navigate('/seller-profile');
    }
  };
  
  return (
    <nav className="bg-white shadow-lg border-b border-earthy-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to={isWalletConnected ? "/qr-scanner" : "/"} 
              className="flex items-center space-x-2"
            >
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
                  <Button variant="ghost" className="flex items-center space-x-3 px-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-earthy-green-600 text-white">
                        {userAlias.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">{userAlias}</span>
                      <span className="text-xs text-gray-500">{userAddress}</span>
                    </div>
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
                            <Sprout className="mr-2 h-4 w-4" />
                            Seller Profile
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <DropdownMenuSeparator />
                  <Link to="/preferences">
                    <DropdownMenuItem className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Preferences</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={handleProfileNavigation} className="flex items-center">
                    {mode === 'buyer' ? (
                      <>
                        <User className="mr-2 h-4 w-4" />
                        <span>Buyer Profile</span>
                      </>
                    ) : (
                      <>
                        <Sprout className="mr-2 h-4 w-4" />
                        <span>Seller Profile</span>
                      </>
                    )}
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
