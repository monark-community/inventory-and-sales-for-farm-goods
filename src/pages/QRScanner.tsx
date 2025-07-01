
import React, { useState } from 'react';
import { QrCode, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ShoppingCart from '@/components/ShoppingCart';

const QRScanner = () => {
  const [isScanned, setIsScanned] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: 4.50,
      unit: 'lb',
      inStock: 12,
      description: 'Fresh heirloom tomatoes, grown without pesticides',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Sweet Corn',
      price: 6.00,
      unit: 'dozen',
      inStock: 8,
      description: 'Just picked this morning, incredibly sweet',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Farm Fresh Eggs',
      price: 5.50,
      unit: 'dozen',
      inStock: 15,
      description: 'Free-range eggs from our happy hens',
      image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Organic Carrots',
      price: 3.25,
      unit: 'bunch',
      inStock: 6,
      description: 'Crisp and sweet, perfect for snacking',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Leafy Greens Mix',
      price: 4.75,
      unit: 'bag',
      inStock: 10,
      description: 'Fresh spinach, kale, and arugula blend',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=200&fit=crop'
    }
  ];

  const handleScanClick = () => {
    setIsScanned(true);
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  const addToCart = (product, quantity = 1) => {
    if (!isWalletConnected) return;
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } else {
      setCart(prevCart => 
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getProductQuantity = (productId) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with cart:', cart);
    // TODO: Implement checkout logic
  };

  if (!isScanned) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-earthy-green-50 to-earthy-green-100">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-white rounded-full p-8 shadow-lg mb-8 mx-auto w-32 h-32 flex items-center justify-center">
            <QrCode className="h-16 w-16 text-earthy-green-600" />
          </div>
          <Button 
            onClick={handleScanClick}
            size="lg"
            className="bg-earthy-green-600 hover:bg-earthy-green-700 text-white px-8 py-4"
          >
            Scan QR Code
          </Button>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => setIsScanned(false)}
              className="flex items-center text-earthy-green-600 hover:text-earthy-green-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <QrCode className="h-4 w-4 mr-1" />
              Scan Different Stand
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 pb-24">
          {/* Welcome Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-earthy-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome to Green Valley Farm Stand</h1>
                  <p className="text-gray-600">Fresh, locally grown produce available now</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Use */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">How to Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="bg-earthy-green-100 text-earthy-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                  <div className="flex flex-col">
                    <span>Connect your wallet</span>
                    {!isWalletConnected && (
                      <Button 
                        size="sm" 
                        onClick={handleConnectWallet}
                        className="mt-1 bg-earthy-green-600 hover:bg-earthy-green-700 text-xs px-2 py-1 h-6"
                      >
                        Connect Wallet
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-earthy-green-100 text-earthy-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                  <span>Browse available products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-earthy-green-100 text-earthy-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                  <span>Add items to your cart</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-earthy-green-100 text-earthy-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                  <span>Pay and collect your items</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const quantity = getProductQuantity(product.id);
              return (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-video">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <Badge variant={product.inStock > 0 ? "default" : "destructive"}>
                        {product.inStock > 0 ? `${product.inStock} left` : 'Out of stock'}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-earthy-green-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-gray-500">per {product.unit}</span>
                    </div>
                    
                    {quantity === 0 ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-full">
                            <Button 
                              onClick={() => addToCart(product)}
                              disabled={!isWalletConnected || product.inStock === 0}
                              className="w-full bg-earthy-green-600 hover:bg-earthy-green-700 disabled:opacity-50"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </TooltipTrigger>
                        {!isWalletConnected && (
                          <TooltipContent>
                            <p>Connect your wallet to add items to cart</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    ) : (
                      <div className="flex items-center justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="h-10 w-10 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold text-lg px-4">{quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          disabled={quantity >= product.inStock}
                          className="h-10 w-10 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Shopping Cart */}
        <ShoppingCart 
          items={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </TooltipProvider>
  );
};

export default QRScanner;
