
import React from 'react';
import { QrCode, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const QRLanding = () => {
  const navigate = useNavigate();

  const handleScanClick = () => {
    // In a real app, this would trigger actual QR scanning
    // For now, we'll navigate directly to a sample shop
    navigate('/shop');
  };

  const handleBrowseShops = () => {
    navigate('/nearby-shops');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earthy-green-50 to-earthy-green-100">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-white rounded-full p-8 shadow-lg mb-8 mx-auto w-32 h-32 flex items-center justify-center">
          <QrCode className="h-16 w-16 text-earthy-green-600" />
        </div>
        <div className="space-y-4">
          <Button 
            onClick={handleScanClick}
            size="lg"
            className="w-full bg-earthy-green-600 hover:bg-earthy-green-700 text-white px-8 py-4"
          >
            Scan QR Code
          </Button>
          <Button 
            onClick={handleBrowseShops}
            variant="outline"
            size="lg"
            className="w-full border-earthy-green-600 text-earthy-green-600 hover:bg-earthy-green-50"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Browse Nearby Shops
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QRLanding;
