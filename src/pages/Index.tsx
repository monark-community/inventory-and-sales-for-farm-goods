
import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Users, ShoppingCart, QrCode, Wallet, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1589894308598-8ddba0593e91?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Farm Fresh, <span className="text-earthy-green-300">Direct to You</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Skip the middleman. Connect directly with local farmers using blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/qr-scanner">
              <Button size="lg" className="bg-earthy-green-600 hover:bg-earthy-green-700 text-white px-8 py-4 text-lg">
                <QrCode className="mr-2 h-5 w-5" />
                Scan & Shop
              </Button>
            </Link>
            <Link to="/buyer-info">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-earthy-green-600 text-earthy-green-600 hover:bg-earthy-green-600 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                I Want to Buy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-earthy-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Bazarius Works</h2>
            <p className="text-xl text-earthy-green-100">Simple, transparent, and direct</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-earthy-green-600 border-2 border-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
              <p className="text-earthy-green-100">Find QR codes at participating farm stands and scan to see available products</p>
            </div>
            
            <div className="text-center">
              <div className="bg-earthy-green-600 border-2 border-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
              <p className="text-earthy-green-100">Securely connect your digital wallet for seamless payments</p>
            </div>
            
            <div className="text-center">
              <div className="bg-earthy-green-600 border-2 border-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shop Direct</h3>
              <p className="text-earthy-green-100">Purchase fresh produce directly from farmers with transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Bazarius?</h2>
            <p className="text-xl text-gray-600">Experience the future of farm-to-table commerce</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-earthy-green-600 to-earthy-green-700 text-white border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Your Phone is Your Shopping Cart</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-earthy-green-100">
                  No need for physical shopping carts or baskets. Add items directly to your digital cart by scanning QR codes at farm stands.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-earthy-green-600 to-earthy-green-700 text-white border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Your Digital Farm Stand</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-earthy-green-100">
                  Transform any location into a farm stand. Farmers can set up QR codes anywhere and start selling immediately.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-earthy-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-earthy-green-600" />
                </div>
                <CardTitle>Secure Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Blockchain-powered payments ensure secure, transparent transactions between farmers and consumers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-earthy-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-earthy-green-600" />
                </div>
                <CardTitle>Instant Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  No waiting for payment processing. Farmers receive payments instantly when customers make purchases.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-earthy-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-earthy-green-600" />
                </div>
                <CardTitle>Direct Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cut out the middleman. Connect directly with local farmers and support your community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-earthy-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-earthy-green-600" />
                </div>
                <CardTitle>Fresh & Local</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get the freshest produce directly from local farms. Know exactly where your food comes from.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join the Farm-to-Table Revolution</h2>
          <p className="text-xl text-gray-600 mb-8">Whether you're a farmer or a conscious consumer, Bazarius connects you directly.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/farmer-info">
              <Button size="lg" className="bg-earthy-green-600 hover:bg-earthy-green-700 text-white px-8 py-4 text-lg">
                <Sprout className="mr-2 h-5 w-5" />
                I'm a Farmer
              </Button>
            </Link>
            <Link to="/buyer-info">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-earthy-green-600 text-earthy-green-600 hover:bg-earthy-green-600 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                I'm a Buyer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
