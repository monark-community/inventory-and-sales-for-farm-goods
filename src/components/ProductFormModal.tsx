
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Edit, Trash2 } from 'lucide-react';

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

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  product?: Product | null;
  mode: 'add' | 'edit';
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  product,
  mode
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    quantity: '',
    unit: 'lb',
    category: 'Vegetables'
  });

  useEffect(() => {
    if (product && mode === 'edit') {
      setFormData({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price.toString(),
        quantity: product.quantity.toString(),
        unit: product.unit,
        category: product.category
      });
    } else {
      setFormData({
        title: '',
        description: '',
        image: '',
        price: '',
        quantity: '',
        unit: 'lb',
        category: 'Vegetables'
      });
    }
  }, [product, mode, isOpen]);

  const handleSave = () => {
    if (!formData.title || !formData.price || !formData.quantity) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const productData: Product = {
      id: product?.id || Date.now().toString(),
      title: formData.title,
      description: formData.description,
      image: formData.image || 'https://images.unsplash.com/photo-1546470427-e4c0de0b2b5e?w=300&h=200&fit=crop',
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity),
      unit: formData.unit,
      category: formData.category
    };

    onSave(productData);
    onClose();
    
    toast({
      title: "Success",
      description: `Product ${mode === 'add' ? 'added' : 'updated'} successfully`
    });
  };

  // Create preview product data
  const previewProduct = {
    id: 'preview',
    title: formData.title || 'Product Title',
    description: formData.description || 'Product description will appear here...',
    image: formData.image || 'https://images.unsplash.com/photo-1546470427-e4c0de0b2b5e?w=300&h=200&fit=crop',
    price: parseFloat(formData.price) || 0,
    quantity: parseInt(formData.quantity) || 0,
    unit: formData.unit,
    category: formData.category
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1000px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{mode === 'add' ? 'Add New Product' : 'Edit Product'}</DialogTitle>
          <DialogDescription>
            {mode === 'add' ? 'Add a new product to your shop' : 'Update product information'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="product-title">Product Title *</Label>
                <Input
                  id="product-title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g., Organic Tomatoes"
                />
              </div>
              <div>
                <Label htmlFor="product-price">Price (USDT) *</Label>
                <Input
                  id="product-price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label htmlFor="product-quantity">Quantity *</Label>
                <Input
                  id="product-quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="product-unit">Unit</Label>
                <select
                  id="product-unit"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.unit}
                  onChange={(e) => setFormData({...formData, unit: e.target.value})}
                >
                  <option value="lb">lb</option>
                  <option value="kg">kg</option>
                  <option value="dozen">dozen</option>
                  <option value="piece">piece</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="product-category">Category</Label>
              <select
                id="product-category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Herbs">Herbs</option>
                <option value="Dairy">Dairy</option>
                <option value="Grains">Grains</option>
              </select>
            </div>
            <div>
              <Label htmlFor="product-description">Description</Label>
              <Textarea
                id="product-description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe your product..."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="product-image">Image URL</Label>
              <Input
                id="product-image"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                placeholder="https://example.com/product.jpg"
              />
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-4">
            <div>
              <Label>Preview</Label>
              <p className="text-xs text-gray-500">This is how your product will appear to customers</p>
            </div>
            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img 
                  src={previewProduct.image} 
                  alt={previewProduct.title}
                  className="w-full h-full object-cover rounded-t-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1546470427-e4c0de0b2b5e?w=300&h=200&fit=crop';
                  }}
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{previewProduct.title}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary">{previewProduct.category}</Badge>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      disabled
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      disabled
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{previewProduct.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Price:</span>
                    <span className="font-semibold">{previewProduct.price.toFixed(2)} USDT/{previewProduct.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Available:</span>
                    <span className={`font-semibold ${previewProduct.quantity < 5 ? 'text-red-600' : 'text-green-600'}`}>
                      {previewProduct.quantity} {previewProduct.unit}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Value:</span>
                    <span className="font-semibold">{(previewProduct.price * previewProduct.quantity).toFixed(2)} USDT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-earthy-green-600 hover:bg-earthy-green-700">
            {mode === 'add' ? 'Add Product' : 'Update Product'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormModal;
