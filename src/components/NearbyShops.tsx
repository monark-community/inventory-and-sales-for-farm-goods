
import React from 'react';
import { MapPin, Map, ArrowLeft, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface NearbyShop {
  id: number;
  name: string;
  description: string;
  distance: string;
  address: string;
  image: string;
  googleMapsUrl: string;
}

const NearbyShops = () => {
  const navigate = useNavigate();

  const nearbyShops: NearbyShop[] = [
    {
      id: 1,
      name: 'Green Valley Farm Stand',
      description: 'Fresh, locally grown produce and organic vegetables',
      distance: '0.2 miles',
      address: '123 Farm Road, Green Valley, CA',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=200&fit=crop',
      googleMapsUrl: 'https://maps.google.com/?q=123+Farm+Road+Green+Valley+CA'
    },
    {
      id: 2,
      name: 'Sunny Acres Market',
      description: 'Family-owned farm with seasonal fruits and vegetables',
      distance: '0.5 miles',
      address: '456 Harvest Lane, Sunny Acres, CA',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=200&fit=crop',
      googleMapsUrl: 'https://maps.google.com/?q=456+Harvest+Lane+Sunny+Acres+CA'
    },
    {
      id: 3,
      name: 'Mountain View Organics',
      description: 'Certified organic produce and fresh herbs',
      distance: '0.8 miles',
      address: '789 Organic Way, Mountain View, CA',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop',
      googleMapsUrl: 'https://maps.google.com/?q=789+Organic+Way+Mountain+View+CA'
    },
    {
      id: 4,
      name: 'Riverside Fresh',
      description: 'Waterfront farm stand with the freshest daily picks',
      distance: '1.2 miles',
      address: '321 River Road, Riverside, CA',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop',
      googleMapsUrl: 'https://maps.google.com/?q=321+River+Road+Riverside+CA'
    }
  ];

  const handleVisitShop = (shopId: number) => {
    // Navigate to the specific shop - in a real app this would route to the specific shop
    navigate('/shop');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/qr-scanner')}
            className="mb-4 flex items-center text-earthy-green-600 hover:text-earthy-green-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <QrCode className="h-4 w-4 mr-1" />
            Back to QR Scanner
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Nearby Farm Stands</h1>
          <p className="text-gray-600">Find fresh produce from local farmers near you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nearbyShops.map((shop) => (
            <Card key={shop.id} className="overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={shop.image} 
                  alt={shop.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{shop.name}</h3>
                  <span className="text-sm text-earthy-green-600 font-medium">{shop.distance}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{shop.description}</p>
                <div className="flex items-start space-x-2 mb-4">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-500">{shop.address}</span>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-earthy-green-600 hover:bg-earthy-green-700"
                    onClick={() => handleVisitShop(shop.id)}
                  >
                    Visit Shop
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(shop.googleMapsUrl, '_blank')}
                    className="border-earthy-green-600 text-earthy-green-600 hover:bg-earthy-green-50"
                  >
                    <Map className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyShops;
