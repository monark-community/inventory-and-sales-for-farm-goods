
import React from 'react';
import { QrCode, ShoppingCart, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

const BuyerInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earthy-green-50 via-white to-earthy-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-earthy-green-600 to-earthy-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingCart className="h-16 w-16 mx-auto mb-6 text-earthy-green-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Shop Fresh, Shop Local
          </h1>
          <p className="text-xl md:text-2xl text-earthy-green-100 mb-8 max-w-2xl mx-auto">
            Discover the freshest produce from local farmers with our innovative QR-based shopping experience.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-earthy-green-700 hover:bg-earthy-green-50 px-8 py-3 text-lg"
          >
            Start Shopping
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bazarius?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of farm-to-table shopping with our cutting-edge platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-earthy-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="h-8 w-8 text-earthy-green-600" />
                </div>
                <CardTitle className="text-xl">Instant QR Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Simply scan a QR code at any participating farm stand to instantly browse their fresh inventory and make purchases.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-earthy-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-earthy-green-600" />
                </div>
                <CardTitle className="text-xl">Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Your transactions are secured by blockchain technology, ensuring transparency and traceability from farm to table.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-earthy-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-earthy-green-600" />
                </div>
                <CardTitle className="text-xl">Mobile-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Shop seamlessly on any device with our responsive design that works perfectly on your smartphone or tablet.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting fresh produce has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Find a Farm Stand",
                description: "Locate participating farmers' stands in your area or browse our directory."
              },
              {
                step: "02",
                title: "Scan QR Code",
                description: "Use your phone to scan the unique QR code displayed at the stand."
              },
              {
                step: "03",
                title: "Shop & Pay",
                description: "Browse available products, add to cart, and pay securely with your wallet."
              },
              {
                step: "04",
                title: "Collect & Enjoy",
                description: "Show your receipt and collect your fresh, local produce to take home."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-earthy-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-earthy-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-earthy-green-100 mb-8">
            Join thousands of customers who are already enjoying fresh, local produce.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-earthy-green-700 hover:bg-earthy-green-50 px-8 py-3 text-lg"
          >
            Get Started Today
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyerInfo;
