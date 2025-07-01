
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, Eye, ShoppingCart, CreditCard } from 'lucide-react';

interface HowToUseProps {
  isWalletConnected: boolean;
  onConnectWallet: () => void;
}

const HowToUse = ({ isWalletConnected, onConnectWallet }: HowToUseProps) => {
  const steps = [
    {
      number: 1,
      icon: <Wallet className="h-6 w-6" />,
      title: 'Connect your wallet',
      description: 'Link your digital wallet to start shopping',
      action: !isWalletConnected ? (
        <Button 
          size="sm" 
          onClick={onConnectWallet}
          className="mt-2 bg-earthy-green-600 hover:bg-earthy-green-700 text-xs px-3 py-1 h-7"
        >
          Connect Wallet
        </Button>
      ) : (
        <div className="mt-2 text-xs text-earthy-green-600 font-medium">✓ Connected</div>
      )
    },
    {
      number: 2,
      icon: <Eye className="h-6 w-6" />,
      title: 'Browse available products',
      description: 'Explore fresh produce from this stand'
    },
    {
      number: 3,
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'Add items to your cart',
      description: 'Select quantities of your favorite items'
    },
    {
      number: 4,
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Pay and collect',
      description: 'Complete payment and pick up your fresh produce'
    }
  ];

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 text-center">How to Shop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full w-12 h-12 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="bg-earthy-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{step.description}</p>
                  {step.action}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HowToUse;
