
import React from 'react';
import { Sprout, TrendingUp, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

const FarmerInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-earthy-green-50 via-white to-earthy-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-earthy-green-600 to-earthy-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sprout className="h-16 w-16 mx-auto mb-6 text-earthy-green-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Your Farm Business
          </h1>
          <p className="text-xl md:text-2xl text-earthy-green-100 mb-8 max-w-2xl mx-auto">
            Connect directly with customers and increase your sales with our innovative blockchain-powered marketplace.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-earthy-green-700 hover:bg-earthy-green-50 px-8 py-3 text-lg"
          >
            Join Bazarius
          </Button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a growing network of farmers who are revolutionizing how they sell their produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-earthy-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-earthy-green-600" />
                </div>
                <CardTitle className="text-xl">Increase Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Reach more customers and boost your revenue with our easy-to-use QR code system that brings customers right to your stand.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-earthy-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-earthy-green-600" />
                </div>
                <CardTitle className="text-xl">Direct Customer Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Build lasting relationships with your customers by selling directly to them without intermediaries taking a cut.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-earthy-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-earthy-green-600" />
                </div>
                <CardTitle className="text-xl">Blockchain Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Provide complete transparency about your farming practices and build trust with customers through blockchain verification.
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
              Getting Started is Simple
            </h2>
            <p className="text-xl text-gray-600">
              Join our platform and start selling in just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                description: "Create your farmer profile and connect your digital wallet to get started."
              },
              {
                step: "02",
                title: "List Products",
                description: "Add your fresh produce with photos, descriptions, and pricing information."
              },
              {
                step: "03",
                title: "Generate QR Code",
                description: "Get your unique QR code to display at your farm stand for customers to scan."
              },
              {
                step: "04",
                title: "Start Selling",
                description: "Watch as customers discover your products and place orders directly through their phones."
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

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Farmers
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage and grow your farm business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-earthy-green-600 rounded-full p-2 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Real-time Inventory Management</h3>
                  <p className="text-gray-600">Keep track of your stock levels and update availability instantly as products sell.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-earthy-green-600 rounded-full p-2 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
                  <p className="text-gray-600">Receive payments instantly and securely through blockchain technology.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-earthy-green-600 rounded-full p-2 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Customer Analytics</h3>
                  <p className="text-gray-600">Understand your customers better with detailed sales and preference analytics.</p>
                </div>
              </div>
            </div>
            <div className="bg-earthy-green-50 rounded-lg p-8 text-center">
              <Sprout className="h-24 w-24 text-earthy-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Grow?</h3>
              <p className="text-gray-600 mb-6">Join hundreds of farmers already using Bazarius to increase their sales and connect with customers.</p>
              <Button className="bg-earthy-green-600 hover:bg-earthy-green-700">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FarmerInfo;
