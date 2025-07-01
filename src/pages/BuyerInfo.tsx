
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, QrCode, Smartphone, Leaf, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BuyerInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingCart className="h-16 w-16 text-blue-100 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shop Fresh, Local Produce Anytime
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover farm-fresh products from local farmers. Simply scan a QR code 
              at any participating farm stand and shop instantly.
            </p>
            <Link to="/qr-scanner">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Try QR Scanner Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Shop with Bazarius?
            </h2>
            <p className="text-xl text-gray-600">
              The future of farm-to-table shopping is here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Farm Fresh Quality</CardTitle>
                <CardDescription>
                  Get the freshest produce directly from local farmers. 
                  No middlemen, no long supply chains, just pure freshness.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Shop Anytime</CardTitle>
                <CardDescription>
                  Farm stands are open 24/7 with our self-serve technology. 
                  Shop when it's convenient for you, not just during market hours.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Support Local</CardTitle>
                <CardDescription>
                  Every purchase directly supports your local farming community. 
                  Build relationships with farmers in your area.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Shop with Bazarius
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-400 to-green-500 rounded-lg p-8 text-white">
              <Smartphone className="h-32 w-32 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold text-center mb-4">
                Your Phone is Your Shopping Cart
              </h3>
              <p className="text-center text-blue-100">
                No apps to download, no accounts to create. Just scan and shop 
                using your mobile wallet.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Find a Farm Stand</h3>
                  <p className="text-gray-600">
                    Look for participating Bazarius farm stands in your area. 
                    They're marked with our distinctive QR code displays.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scan the QR Code</h3>
                  <p className="text-gray-600">
                    Use your phone's camera to scan the QR code. This instantly 
                    opens the farmer's digital marketplace in your browser.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Browse & Select</h3>
                  <p className="text-gray-600">
                    View available products, prices, and details. Add items to your 
                    cart just like any online store.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pay with Your Wallet</h3>
                  <p className="text-gray-600">
                    Complete your purchase using your connected wallet. 
                    Payment is instant and secure through blockchain technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collect Your Items</h3>
                  <p className="text-gray-600">
                    Take your purchased items from the stand. The inventory 
                    updates automatically to prevent overselling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Shopping Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <QrCode className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Access</h3>
              <p className="text-gray-600">
                No apps to download or accounts to create. Your phone's camera 
                is all you need to start shopping.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <ShoppingCart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Inventory</h3>
              <p className="text-gray-600">
                See exactly what's available right now. Inventory updates 
                in real-time as other customers make purchases.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Product Information</h3>
              <p className="text-gray-600">
                Get detailed information about each product including origin, 
                harvest date, and growing methods.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <MapPin className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Discovery</h3>
              <p className="text-gray-600">
                Find participating farm stands in your area and discover 
                new local farmers and seasonal products.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <QrCode className="h-16 w-16 text-blue-100 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the future of farm-to-table shopping with our QR scanner demo
          </p>
          <Link to="/qr-scanner">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Try QR Scanner Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyerInfo;
