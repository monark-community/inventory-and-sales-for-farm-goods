
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{mode === 'add' ? 'Add New Product' : 'Edit Product'}</DialogTitle>
          <DialogDescription>
            {mode === 'add' ? 'Add a new product to your shop' : 'Update product information'}
          </DialogDescription>
        </DialogHeader>
        
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
          <div className="md:col-span-2">
            <Label htmlFor="product-description">Description</Label>
            <Textarea
              id="product-description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Describe your product..."
              rows={2}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="product-image">Image URL</Label>
            <Input
              id="product-image"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              placeholder="https://example.com/product.jpg"
            />
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
