
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  category: string;
  description?: string;
}

interface CartItem extends Product {
  cartQuantity: number;
}

const BuyerInterface = () => {
  const { toast } = useToast();
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 3.50,
      quantity: 25,
      unit: 'lb',
      category: 'Vegetables',
      description: 'Locally grown, vine-ripened tomatoes'
    },
    {
      id: '2',
      name: 'Organic Apples',
      price: 4.00,
      quantity: 15,
      unit: 'lb',
      category: 'Fruits',
      description: 'Sweet, crisp apples from our orchard'
    },
    {
      id: '3',
      name: 'Free Range Eggs',
      price: 6.00,
      quantity: 12,
      unit: 'dozen',
      category: 'Dairy',
      description: 'Fresh eggs from happy, free-range chickens'
    },
    {
      id: '4',
      name: 'Fresh Basil',
      price: 2.50,
      quantity: 8,
      unit: 'bunch',
      category: 'Herbs',
      description: 'Aromatic basil, perfect for cooking'
    }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      if (existingItem.cartQuantity < product.quantity) {
        setCart(cart.map(item => 
          item.id === product.id 
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        ));
      } else {
        toast({
          title: "Out of Stock",
          description: "No more items available",
          variant: "destructive"
        });
      }
    } else {
      setCart([...cart, { ...product, cartQuantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem && existingItem.cartQuantity > 1) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, cartQuantity: item.cartQuantity - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  const getCartItemQuantity = (productId: string) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.cartQuantity : 0;
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.cartQuantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.cartQuantity, 0);
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    toast({
      title: "Wallet Connected",
      description: "Successfully connected to your wallet"
    });
  };

  const handlePurchase = () => {
    if (!isWalletConnected) {
      toast({
        title: "Connect Wallet",
        description: "Please connect your wallet to make a purchase",
        variant: "destructive"
      });
      return;
    }

    if (cart.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart",
        variant: "destructive"
      });
      return;
    }

    // Simulate transaction
    toast({
      title: "Purchase Successful!",
      description: `Transaction completed for $${getCartTotal().toFixed(2)}`
    });
    
    setCart([]);
  };

  const categoryColors = {
    'Vegetables': 'bg-green-100 text-green-800',
    'Fruits': 'bg-red-100 text-red-800',
    'Dairy': 'bg-blue-100 text-blue-800',
    'Herbs': 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Fresh Farm Market</h1>
          <p className="text-green-600">Browse and purchase fresh, local produce</p>
        </div>

        {/* Wallet & Cart Status */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleConnectWallet}
              variant={isWalletConnected ? "outline" : "default"}
              className={isWalletConnected ? "border-green-500 text-green-600" : "bg-green-600 hover:bg-green-700"}
            >
              <Wallet className="h-4 w-4 mr-2" />
              {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
            </Button>
          </div>
          
          <Card className="w-full sm:w-auto">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">{getCartItemsCount()} items</span>
                </div>
                <div className="text-2xl font-bold text-green-800">
                  ${getCartTotal().toFixed(2)}
                </div>
                <Button 
                  onClick={handlePurchase}
                  disabled={cart.length === 0 || !isWalletConnected}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Purchase
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg mb-1">{product.name}</CardTitle>
                    <Badge className={categoryColors[product.category as keyof typeof categoryColors]}>
                      {product.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">per {product.unit}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {product.description}
                </CardDescription>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">Available:</span>
                  <span className={`font-semibold ${product.quantity < 5 ? 'text-red-600' : 'text-green-600'}`}>
                    {product.quantity} {product.unit}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeFromCart(product.id)}
                      disabled={getCartItemQuantity(product.id) === 0}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="w-8 text-center font-semibold">
                      {getCartItemQuantity(product.id)}
                    </span>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addToCart(product)}
                      disabled={getCartItemQuantity(product.id) >= product.quantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button
                    onClick={() => addToCart(product)}
                    disabled={getCartItemQuantity(product.id) >= product.quantity}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Summary (Mobile) */}
        {cart.length > 0 && (
          <Card className="fixed bottom-4 left-4 right-4 lg:hidden z-50">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">{getCartItemsCount()} items</div>
                  <div className="text-2xl font-bold text-green-600">
                    ${getCartTotal().toFixed(2)}
                  </div>
                </div>
                <Button 
                  onClick={handlePurchase}
                  disabled={!isWalletConnected}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Purchase
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BuyerInterface;
