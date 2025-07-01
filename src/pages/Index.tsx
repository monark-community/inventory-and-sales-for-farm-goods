import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Users, ShoppingCart, QrCode, Wallet, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1589894308598-8ddba0593e91?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-green-900/80 to-green-800/80">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Sprout className="h-20 w-20 text-green-100" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bazarius
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Decentralized marketplace connecting local farmers with customers through trustless, self-serve kiosks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/farmer-info">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Users className="h-5 w-5 mr-2" />
                  I'm a Farmer
                </Button>
              </Link>
              <Link to="/buyer-info">
                <Button size="lg" variant="outline" className="border-white text-green-600 hover:bg-white hover:text-green-600 px-8 py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  I Want to Buy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Bazarius Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionary self-serve technology that enables farmers to sell 24/7 without being physically present
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <QrCode className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Scan & Shop</CardTitle>
                <CardDescription>
                  Customers scan QR codes at farm stands to instantly access available products and pricing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wallet className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Wallet Payments</CardTitle>
                <CardDescription>
                  Secure, trustless transactions using connected wallets - no cash handling required
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Smart Contracts</CardTitle>
                <CardDescription>
                  Automated inventory updates and instant fund transfers through blockchain technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Vendor Dashboard</CardTitle>
                <CardDescription>
                  Farmers manage inventory, pricing, and track sales remotely from anywhere
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Real-time Updates</CardTitle>
                <CardDescription>
                  Inventory automatically updates with each purchase, preventing overselling
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Fresh & Local</CardTitle>
                <CardDescription>
                  Support local agriculture while getting the freshest produce available
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perfect for Rural Communities
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bazarius enables farmers to serve customers 24/7 without staffing costs, while providing 
                transparent, secure transactions that benefit both buyers and sellers.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Reduce labor costs with automated sales</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Increase revenue with extended operating hours</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Build customer loyalty with convenience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Transparent pricing and inventory tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Start</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 font-bold text-sm min-w-[2rem] text-center">1</div>
                  <div>
                    <h4 className="font-semibold">Set Up Your Stand</h4>
                    <p className="text-gray-600">Create your vendor account and add your products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 font-bold text-sm min-w-[2rem] text-center">2</div>
                  <div>
                    <h4 className="font-semibold">Display QR Code</h4>
                    <p className="text-gray-600">Print and display your unique QR code at your stand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full p-2 font-bold text-sm min-w-[2rem] text-center">3</div>
                  <div>
                    <h4 className="font-semibold">Start Selling</h4>
                    <p className="text-gray-600">Customers can now purchase your products 24/7</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/farmer-info">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Started as Vendor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Try the QR Scanner
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Experience how easy it is to shop at a Bazarius farm stand
          </p>
          <Link to="/qr-scanner">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              <QrCode className="h-5 w-5 mr-2" />
              Try QR Scanner Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
