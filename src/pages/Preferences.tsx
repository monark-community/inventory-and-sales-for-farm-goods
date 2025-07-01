
import React, { useState } from 'react';
import { ArrowLeft, User, Store, Bell, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface PreferencesProps {
  onBack: () => void;
  mode: 'buyer' | 'seller';
}

const Preferences: React.FC<PreferencesProps> = ({ onBack, mode }) => {
  const { toast } = useToast();
  const [buyerPrefs, setBuyerPrefs] = useState({
    preferredCrypto: 'USDT'
  });
  const [sellerPrefs, setSellerPrefs] = useState({
    preferredCrypto: 'USDT',
    lowInventoryNotifications: true,
    emptyInventoryNotifications: true,
    notificationMethod: 'email'
  });

  const cryptoCurrencies = ['USDT', 'USDC', 'ETH', 'BTC', 'DAI', 'MATIC'];

  const handleSavePreferences = () => {
    toast({
      title: "Success",
      description: "Preferences saved successfully"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-[72rem] p-4 mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center text-earthy-green-600 hover:text-earthy-green-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Preferences</h1>
          <div></div>
        </div>
      </div>

      <div className="max-w-[72rem] mx-auto p-4 space-y-6">
        {/* Profile Mode Indicator */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              {mode === 'buyer' ? <User className="h-5 w-5" /> : <Store className="h-5 w-5" />}
              <CardTitle>
                {mode === 'buyer' ? 'Buyer Profile' : 'Seller Profile'} Preferences
              </CardTitle>
            </div>
            <CardDescription>
              Configure your preferences for {mode === 'buyer' ? 'purchasing' : 'selling'} on Bazarius
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Buyer Preferences */}
        {mode === 'buyer' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Buyer Settings</span>
              </CardTitle>
              <CardDescription>Configure your shopping preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="buyer-crypto">Preferred Cryptocurrency</Label>
                <Select 
                  value={buyerPrefs.preferredCrypto} 
                  onValueChange={(value) => setBuyerPrefs({...buyerPrefs, preferredCrypto: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select preferred crypto" />
                  </SelectTrigger>
                  <SelectContent>
                    {cryptoCurrencies.map(crypto => (
                      <SelectItem key={crypto} value={crypto}>
                        <div className="flex items-center">
                          <Badge variant="secondary" className="mr-2">{crypto}</Badge>
                          {crypto === 'USDT' && <span className="text-xs text-gray-500">(Default)</span>}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500 mt-1">
                  Prices will be displayed in your preferred cryptocurrency when available
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Seller Preferences */}
        {mode === 'seller' && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Store className="h-5 w-5" />
                  <span>Shop Settings</span>
                </CardTitle>
                <CardDescription>Configure your shop preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="seller-crypto">Preferred Cryptocurrency</Label>
                  <Select 
                    value={sellerPrefs.preferredCrypto} 
                    onValueChange={(value) => setSellerPrefs({...sellerPrefs, preferredCrypto: value})}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select preferred crypto" />
                    </SelectTrigger>
                    <SelectContent>
                      {cryptoCurrencies.map(crypto => (
                        <SelectItem key={crypto} value={crypto}>
                          <div className="flex items-center">
                            <Badge variant="secondary" className="mr-2">{crypto}</Badge>
                            {crypto === 'USDT' && <span className="text-xs text-gray-500">(Default)</span>}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    Your default cryptocurrency for pricing products
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Inventory Notifications</span>
                </CardTitle>
                <CardDescription>Manage your inventory alert preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="low-inventory">Low Inventory Alerts</Label>
                    <p className="text-sm text-gray-500">
                      Get notified when products are running low (less than 5 items)
                    </p>
                  </div>
                  <Switch
                    id="low-inventory"
                    checked={sellerPrefs.lowInventoryNotifications}
                    onCheckedChange={(checked) => 
                      setSellerPrefs({...sellerPrefs, lowInventoryNotifications: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="empty-inventory">Empty Inventory Alerts</Label>
                    <p className="text-sm text-gray-500">
                      Get notified when products are out of stock
                    </p>
                  </div>
                  <Switch
                    id="empty-inventory"
                    checked={sellerPrefs.emptyInventoryNotifications}
                    onCheckedChange={(checked) => 
                      setSellerPrefs({...sellerPrefs, emptyInventoryNotifications: checked})
                    }
                  />
                </div>

                {(sellerPrefs.lowInventoryNotifications || sellerPrefs.emptyInventoryNotifications) && (
                  <div>
                    <Label htmlFor="notification-method">Notification Method</Label>
                    <Select 
                      value={sellerPrefs.notificationMethod} 
                      onValueChange={(value) => 
                        setSellerPrefs({...sellerPrefs, notificationMethod: value})
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select notification method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">
                          <div className="flex items-center">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </div>
                        </SelectItem>
                        <SelectItem value="phone">
                          <div className="flex items-center">
                            <Phone className="mr-2 h-4 w-4" />
                            SMS/Phone
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}

        {/* Save Button */}
        <div className="flex justify-end">
          <Button 
            onClick={handleSavePreferences}
            className="bg-earthy-green-600 hover:bg-earthy-green-700"
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
