
import React, { useState } from 'react';
import { QrCode, Scan, Wallet, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const QRScanner = () => {
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<any>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const mockProductData = {
    standId: "farm-stand-001",
    standName: "Green Valley Farm Stand",
    location: "Main St & Oak Ave",
    products: [
      { id: "1", name: "Fresh Tomatoes", price: 3.50, available: 25, unit: "lb" },
      { id: "2", name: "Organic Apples", price: 4.00, available: 15, unit: "lb" },
      { id: "3", name: "Free Range Eggs", price: 6.00, available: 12, unit: "dozen" }
    ]
  };

  const handleScanQR = () => {
    setIsScanning(true);
    
    // Simulate QR code scanning
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

  const handleQuickPurchase = (product: any) => {
    if (!isWalletConnected) {
      toast({
        title: "Connect Wallet",
        description: "Please connect your wallet first",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Purchase Successful!",
      description: `Bought ${product.name} for $${product.price.toFixed(2)}`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-2">QR Scanner</h1>
          <p className="text-green-600">Scan QR codes at farm stands to shop instantly</p>
        </div>

        {!scannedData ? (
          <div className="flex flex-col items-center space-y-8">
            {/* QR Scanner Section */}
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <QrCode className="h-16 w-16 mx-auto text-green-600 mb-4" />
                <CardTitle>Scan Farm Stand QR Code</CardTitle>
                <CardDescription>
                  Point your camera at the QR code displayed at the farm stand
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  onClick={handleScanQR}
                  disabled={isScanning}
                  className="bg-green-600 hover:bg-green-700 w-full"
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
                    <div className="bg-green-100 text-green-600 rounded-full p-2 font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold">Find the QR Code</h3>
                      <p className="text-gray-600">Look for the Bazarius QR code displayed at the farm stand</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-600 rounded-full p-2 font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold">Scan the Code</h3>
                      <p className="text-gray-600">Use this scanner to connect to the stand's inventory</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-600 rounded-full p-2 font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold">Connect Your Wallet</h3>
                      <p className="text-gray-600">Connect your digital wallet for secure payments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-600 rounded-full p-2 font-bold text-sm">4</div>
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
            {/* Farm Stand Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle className="text-green-800">{scannedData.standName}</CardTitle>
                    <CardDescription>{scannedData.location}</CardDescription>
                  </div>
                </div>
              </CardHeader>
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
                    className={isWalletConnected ? "border-green-500 text-green-600" : "bg-green-600 hover:bg-green-700"}
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
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-2xl font-bold text-green-600">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500">per {product.unit}</span>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-600">Available:</span>
                          <span className="font-semibold text-green-600">
                            {product.available} {product.unit}
                          </span>
                        </div>
                        <Button
                          onClick={() => handleQuickPurchase(product)}
                          disabled={!isWalletConnected}
                          className="w-full bg-green-600 hover:bg-green-700"
                        >
                          Quick Buy (1 {product.unit})
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reset Scanner */}
            <div className="text-center">
              <Button
                onClick={() => {
                  setScannedData(null);
                  setIsWalletConnected(false);
                }}
                variant="outline"
              >
                Scan Different Stand
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
