
import React, { useState } from 'react';
import { QrCode, Scan, Wallet, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ShoppingCart from '@/components/ShoppingCart';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

const QRScanner = () => {
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<any>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

  const mockProductData = {
    standId: "farm-stand-001",
    standName: "Green Valley Farm Stand",
    location: "Main St & Oak Ave",
    products: [
      { 
        id: "1", 
        name: "Fresh Tomatoes", 
        price: 3.50, 
        available: 25, 
        unit: "lb",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"
      },
      { 
        id: "2", 
        name: "Organic Apples", 
        price: 4.00, 
        available: 15, 
        unit: "lb",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=400&auto=format&fit=crop"
      },
      { 
        id: "3", 
        name: "Free Range Eggs", 
        price: 6.00, 
        available: 12, 
        unit: "dozen",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop"
      }
    ]
  };

  const handleScanQR = () => {
    setIsScanning(true);
    
    setTimeout(() => {
      setScannedData(mockProductData);
      setIsScanning(false);
      toast({
        title: "QR Code Scanned!",
        description: `Connected to ${mockProductData.standName}`
      });
    }, 2000);
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    toast({
      title: "Wallet Connected",
      description: "Ready to make purchases"
    });
  };

  const handleQuantityChange = (productId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const handleAddToCart = (product: any) => {
    if (!isWalletConnected) {
      toast({
        title: "Connect Wallet",
        description: "Please connect your wallet first",
        variant: "destructive"
      });
      return;
    }

    const quantity = quantities[product.id] || 1;
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(prev => prev.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart(prev => [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image,
        unit: product.unit
      }]);
    }

    setQuantities(prev => ({ ...prev, [product.id]: 0 }));
    
    toast({
      title: "Added to Cart",
      description: `${quantity} ${product.unit} of ${product.name} added`
    });
  };

  const handleCartQuantityUpdate = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: "Your order has been sent to the farmer"
    });
    setCart([]);
  };

  const handleBackToScanner = () => {
    setScannedData(null);
    setIsWalletConnected(false);
    setCart([]);
    setQuantities({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-earthy-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {!scannedData ? (
          <div className="flex flex-col items-center space-y-8">
            {/* QR Scanner Section */}
            <Card className="w-full max-w-2xl">
              <CardHeader className="text-center">
                <QrCode className="h-16 w-16 mx-auto text-earthy-green-600 mb-4" />
                <CardTitle>Scan Farm Stand QR Code</CardTitle>
                <CardDescription>
                  Point your camera at the QR code displayed at the farm stand
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  onClick={handleScanQR}
                  disabled={isScanning}
                  className="bg-earthy-green-600 hover:bg-earthy-green-700 w-full"
                  size="lg"
                >
                  {isScanning ? (
                    <>
                      <Scan className="h-5 w-5 mr-2 animate-pulse" />
                      Scanning...
                    </>
                  ) : (
                    <>
                      <Scan className="h-5 w-5 mr-2" />
                      Start Scanning
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>How to Use</CardTitle>
                <CardDescription>Follow these simple steps to purchase from any farm stand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-2 font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold">Find the QR Code</h3>
                      <p className="text-gray-600">Look for the Bazarius QR code displayed at the farm stand</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-2 font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold">Scan the Code</h3>
                      <p className="text-gray-600">Use this scanner to connect to the stand's inventory</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-2 font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold">Connect Your Wallet</h3>
                      <p className="text-gray-600">Connect your digital wallet for secure payments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-earthy-green-100 text-earthy-green-600 rounded-full p-2 font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold">Shop & Pay</h3>
                      <p className="text-gray-600">Browse available products and complete your purchase</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Back Button */}
            <div className="flex items-start">
              <Button
                onClick={handleBackToScanner}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <QrCode className="h-4 w-4" />
                <span>Scan Different Stand</span>
              </Button>
            </div>

            {/* Farm Stand Welcome */}
            <Card className="bg-earthy-green-50 border-earthy-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-earthy-green-800 mb-2">
                    Welcome to {scannedData.standName}!
                  </h2>
                  <p className="text-earthy-green-600 mb-4">{scannedData.location}</p>
                  <p className="text-gray-700">
                    Fresh, locally grown produce picked just for you. Support sustainable farming 
                    and enjoy the best flavors nature has to offer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Wallet Connection */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Wallet Status</h3>
                    <p className="text-gray-600">Connect your wallet to make purchases</p>
                  </div>
                  <Button
                    onClick={handleConnectWallet}
                    variant={isWalletConnected ? "outline" : "default"}
                    className={isWalletConnected 
                      ? "border-earthy-green-500 text-earthy-green-600" 
                      : "bg-earthy-green-600 hover:bg-earthy-green-700"
                    }
                  >
                    <Wallet className="h-4 w-4 mr-2" />
                    {isWalletConnected ? "Connected" : "Connect Wallet"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Products */}
            <Card>
              <CardHeader>
                <CardTitle>Available Products</CardTitle>
                <CardDescription>Fresh products available for purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {scannedData.products.map((product: any) => (
                    <Card key={product.id} className="border border-gray-200">
                      <CardContent className="p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-32 object-cover rounded mb-3"
                        />
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-2xl font-bold text-earthy-green-600">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500">per {product.unit}</span>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-600">Available:</span>
                          <span className="font-semibold text-earthy-green-600">
                            {product.available} {product.unit}
                          </span>
                        </div>
                        
                        {/* Quantity Picker */}
                        <div className="flex items-center justify-center space-x-3 mb-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleQuantityChange(product.id, -1)}
                            disabled={!quantities[product.id] || quantities[product.id] <= 0}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-lg font-semibold w-12 text-center">
                            {quantities[product.id] || 0}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          onClick={() => handleAddToCart(product)}
                          disabled={!isWalletConnected || !quantities[product.id]}
                          className="w-full bg-earthy-green-600 hover:bg-earthy-green-700"
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <ShoppingCart
        items={cart}
        onUpdateQuantity={handleCartQuantityUpdate}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default QRScanner;
