
import React from 'react';
import { ArrowLeft, User, ShoppingBag, Star, TrendingUp, Calendar, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BuyerProfileProps {
  onBack: () => void;
}

const BuyerProfile: React.FC<BuyerProfileProps> = ({ onBack }) => {
  const recentTransactions = [
    {
      id: '1',
      shop: 'Green Valley Farm Stand',
      items: ['Organic Tomatoes', 'Sweet Corn'],
      total: 12.50,
      date: '2024-06-28',
      status: 'Completed'
    },
    {
      id: '2',
      shop: 'Sunshine Organics',
      items: ['Farm Fresh Eggs', 'Lettuce'],
      total: 8.75,
      date: '2024-06-25',
      status: 'Completed'
    },
    {
      id: '3',
      shop: 'Mountain View Produce',
      items: ['Apples', 'Carrots', 'Potatoes'],
      total: 15.30,
      date: '2024-06-22',
      status: 'Completed'
    }
  ];

  const topShops = [
    {
      name: 'Green Valley Farm Stand',
      rating: 4.9,
      visits: 12,
      totalSpent: 145.60
    },
    {
      name: 'Sunshine Organics',
      rating: 4.8,
      visits: 8,
      totalSpent: 98.45
    },
    {
      name: 'Mountain View Produce',
      rating: 4.7,
      visits: 6,
      totalSpent: 76.30
    }
  ];

  const totalSpent = recentTransactions.reduce((sum, tx) => sum + tx.total, 0);
  const totalTransactions = recentTransactions.length;
  const favoriteShop = topShops[0];

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
            <User className="h-6 w-6 text-earthy-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Buyer Profile</h1>
          </div>
          <div></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSpent.toFixed(2)} USDT</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTransactions}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favorite Shop</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-bold truncate">{favoriteShop.name}</div>
              <div className="text-xs text-gray-600">{favoriteShop.visits} visits</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-gray-600">purchases</div>
            </CardContent>
          </Card>
        </div>

        {/* Top Shops */}
        <Card>
          <CardHeader>
            <CardTitle>Your Top Shops</CardTitle>
            <CardDescription>Shops you visit most frequently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topShops.map((shop, index) => (
                <div key={shop.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-earthy-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{shop.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{shop.rating}</span>
                        <span>•</span>
                        <span>{shop.visits} visits</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{shop.totalSpent.toFixed(2)} USDT</p>
                    <p className="text-xs text-gray-600">total spent</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

       {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest purchases on Bazarius</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Package className="h-8 w-8 text-earthy-green-600" />
                    <div>
                      <h4 className="font-semibold">{transaction.shop}</h4>
                      <p className="text-sm text-gray-600">{transaction.items.join(', ')}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{transaction.total.toFixed(2)} USDT</p>
                    <p className="text-xs text-green-600">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default BuyerProfile;
