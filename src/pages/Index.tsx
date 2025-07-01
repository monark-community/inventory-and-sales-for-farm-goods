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
                className="border-earthy-green-300 text-earthy-green-300 hover:bg-earthy-green-300 hover:text-earthy-green-900 px-8 py-4 text-lg"
              >
                I Want to Buy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-earthy-green-600 text-white py-20">
        <div 
          className="w-full relative"
          style={{
            backgroundImage: `linear-gradient(rgba(86, 130, 95, 0.8), rgba(86, 130, 95, 0.8)), url('https://images.unsplash.com/photo-1589894308598-8ddba0593e91?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How Bazarius Works</h2>
              <p className="text-xl text-earthy-green-100">Simple, transparent, and direct</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-earthy-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
                <p className="text-earthy-green-100">Find QR codes at participating farm stands and scan to see available products</p>
              </div>
              
              <div className="text-center">
                <div className="bg-earthy-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
                <p className="text-earthy-green-100">Securely connect your digital wallet for seamless payments</p>
              </div>
              
              <div className="text-center">
                <div className="bg-earthy-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Shop Direct</h3>
                <p className="text-earthy-green-100">Purchase fresh produce directly from farmers with transparent pricing</p>
              </div>
            </div>
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
              <Button size="lg" variant="outline" className="border-earthy-green-600 text-earthy-green-600 hover:bg-earthy-green-600 hover:text-white px-8 py-4 text-lg">
                <User className="mr-2 h-5 w-5" />
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
