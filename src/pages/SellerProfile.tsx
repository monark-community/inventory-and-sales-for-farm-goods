
import React, { useState } from 'react';
import { ArrowLeft, Sprout, Upload, Plus, Edit, Trash2, DollarSign, Package, Settings, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  unit: string;
  category: string;
}

interface SellerProfileProps {
  onBack: () => void;
}

const SellerProfile: React.FC<SellerProfileProps> = ({ onBack }) => {
  const { toast } = useToast();
  const [shopConfig, setShopConfig] = useState({
    name: 'Green Valley Farm Stand',
    bannerImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop',
    welcomeMessage: "Welcome to our family farm! We've been growing fresh produce for over 30 years."
  });

  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      title: 'Organic Tomatoes',
      description: 'Fresh heirloom tomatoes, grown without pesticides',
      image: 'https://images.unsplash.com/photo-1546470427-e4c0de0b2b5e?w=300&h=200&fit=crop',
      price: 4.50,
      quantity: 12,
      unit: 'lb',
      category: 'Vegetables'
    },
    {
      id: '2',
      title: 'Sweet Corn',
      description: 'Just picked this morning, incredibly sweet',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=200&fit=crop',
      price: 6.00,
      quantity: 8,
      unit: 'dozen',
      category: 'Vegetables'
    },
    {
      id: '3',
      title: 'Farm Fresh Eggs',
      description: 'Free-range eggs from our happy hens',
      image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=300&h=200&fit=crop',
      price: 5.50,
      quantity: 15,
      unit: 'dozen',
      category: 'Dairy'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    quantity: '',
    unit: 'lb',
    category: 'Vegetables'
  });

  const handleShopConfigUpdate = (field: string, value: string) => {
    setShopConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.quantity) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const product: Product = {
      id: Date.now().toString(),
      title: newProduct.title,
      description: newProduct.description,
      image: newProduct.image || 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=300&h=200&fit=crop',
      price: parseFloat(newProduct.price),
      quantity: parseInt(newProduct.quantity),
      unit: newProduct.unit,
      category: newProduct.category
    };

    setProducts([...products, product]);
    setNewProduct({ title: '', description: '', image: '', price: '', quantity: '', unit: 'lb', category: 'Vegetables' });
    setShowAddForm(false);
    
    toast({
      title: "Success",
      description: "Product added successfully"
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Product removed"
    });
  };

  const handleSaveShop = () => {
    toast({
      title: "Success",
      description: "Shop configuration saved successfully"
    });
  };

  const totalValue = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center text-earthy-green-600 hover:text-earthy-green-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-earthy-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Seller Profile</h1>
          </div>
          <Button 
            onClick={handleSaveShop}
            className="bg-earthy-green-600 hover:bg-earthy-green-700"
          >
            Save Changes
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Shop Configuration */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <CardTitle>Shop Configuration</CardTitle>
            </div>
            <CardDescription>Configure your shop's appearance and messaging</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="shop-name">Shop Name</Label>
                  <Input
                    id="shop-name"
                    value={shopConfig.name}
                    onChange={(e) => handleShopConfigUpdate('name', e.target.value)}
                    placeholder="Your shop name"
                  />
                </div>
                <div>
                  <Label htmlFor="banner-image">Banner Image URL</Label>
                  <Input
                    id="banner-image"
                    value={shopConfig.bannerImage}
                    onChange={(e) => handleShopConfigUpdate('bannerImage', e.target.value)}
                    placeholder="https://example.com/banner.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">Recommended size: 800x400px</p>
                </div>
                <div>
                  <Label htmlFor="welcome-message">Welcome Message</Label>
                  <Textarea
                    id="welcome-message"
                    value={shopConfig.welcomeMessage}
                    onChange={(e) => handleShopConfigUpdate('welcomeMessage', e.target.value)}
                    placeholder="Write a warm welcome message for your customers"
                    rows={3}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label>Preview</Label>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-[2/1] relative">
                      <img
                        src={shopConfig.bannerImage}
                        alt="Shop banner"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-2xl font-bold mb-2">{shopConfig.name}</h3>
                          <p className="text-sm opacity-90">{shopConfig.welcomeMessage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Items</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalItems}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inventory Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalValue.toFixed(2)} USDT</div>
            </CardContent>
          </Card>
        </div>

        {/* Product Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Product Management</CardTitle>
                <CardDescription>Add and manage your products</CardDescription>
              </div>
              <Button 
                onClick={() => setShowAddForm(!showAddForm)} 
                className="bg-earthy-green-600 hover:bg-earthy-green-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          
          {showAddForm && (
            <CardContent className="border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="product-title">Product Title</Label>
                  <Input
                    id="product-title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                    placeholder="e.g., Organic Tomatoes"
                  />
                </div>
                <div>
                  <Label htmlFor="product-price">Price (USDT)</Label>
                  <Input
                    id="product-price"
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <Label htmlFor="product-quantity">Quantity</Label>
                  <Input
                    id="product-quantity"
                    type="number"
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="product-unit">Unit</Label>
                  <select
                    id="product-unit"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={newProduct.unit}
                    onChange={(e) => setNewProduct({...newProduct, unit: e.target.value})}
                  >
                    <option value="lb">lb</option>
                    <option value="kg">kg</option>
                    <option value="dozen">dozen</option>
                    <option value="piece">piece</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="product-description">Description</Label>
                  <Textarea
                    id="product-description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    placeholder="Describe your product..."
                    rows={2}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="product-image">Image URL</Label>
                  <Input
                    id="product-image"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    placeholder="https://example.com/product.jpg"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleAddProduct} className="bg-earthy-green-600 hover:bg-earthy-green-700">
                  Add Product
                </Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary">{product.category}</Badge>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Price:</span>
                    <span className="font-semibold">{product.price.toFixed(2)} USDT/{product.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Available:</span>
                    <span className={`font-semibold ${product.quantity < 5 ? 'text-red-600' : 'text-green-600'}`}>
                      {product.quantity} {product.unit}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Value:</span>
                    <span className="font-semibold">{(product.price * product.quantity).toFixed(2)} USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
