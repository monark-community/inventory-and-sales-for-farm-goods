
import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Users, QrCode, BarChart, Clock, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FarmerInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earthy-green-50 to-earthy-green-100">
      {/* Hero Section */}
      <div className="bg-earthy-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Users className="h-16 w-16 text-earthy-green-100 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sell Your Farm Produce 24/7
            </h1>
            <p className="text-xl text-earthy-green-100 mb-8 max-w-3xl mx-auto">
              Transform your farm stand into an automated marketplace. No staff needed, 
              just place your products and let customers shop anytime.
            </p>
            <Button size="lg" className="bg-white text-earthy-green-600 hover:bg-gray-100">
              Connect Wallet to Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Farmers Choose Bazarius
            </h2>
            <p className="text-xl text-gray-600">
              Increase your revenue while reducing operational costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-earthy-green-600 mb-4" />
                <CardTitle>24/7 Sales</CardTitle>
                <CardDescription>
                  Your farm stand stays open all day, every day. Customers can shop 
                  at their convenience, increasing your potential sales window.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-earthy-green-500 mb-4" />
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>
                  All transactions are handled through blockchain technology. 
                  No cash handling, no payment disputes, just instant transfers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-earthy-green-700 mb-4" />
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Track your sales, inventory, and customer patterns from anywhere. 
                  Make data-driven decisions to optimize your business.
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
            How Bazarius Works for Farmers
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set Up Your Digital Stand</h3>
                  <p className="text-gray-600">
                    Connect your wallet and create your vendor profile. Add your products, 
                    set prices, and upload photos. It takes less than 10 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Display Your QR Code</h3>
                  <p className="text-gray-600">
                    Print and display your unique QR code at your farm stand. 
                    This is how customers will access your digital marketplace.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stock and Go</h3>
                  <p className="text-gray-600">
                    Keep your physical products stocked and let the system handle the rest. 
                    Customers scan, shop, and pay automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-3 font-bold text-lg min-w-[3rem] text-center">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monitor and Manage</h3>
                  <p className="text-gray-600">
                    Use your dashboard to track sales, update inventory, and manage 
                    your business from anywhere with an internet connection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-earthy-green-400 to-earthy-green-600 rounded-lg p-8 text-white">
              <QrCode className="h-32 w-32 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold text-center mb-4">
                Your Digital Farm Stand
              </h3>
              <p className="text-center text-earthy-green-100">
                One QR code connects your physical farm stand to unlimited 
                digital possibilities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-earthy-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Sprout className="h-16 w-16 text-earthy-green-100 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farm Business?
          </h2>
          <p className="text-xl text-earthy-green-100 mb-8">
            Join hundreds of farmers already using Bazarius to increase their revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-earthy-green-600 hover:bg-gray-100">
              Connect Wallet & Start Selling
            </Button>
            <Link to="/qr-scanner">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-earthy-green-600">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerInfo;
