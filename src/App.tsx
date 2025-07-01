import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonarkBannerWrapper from "./components/MonarkDemoWrapper";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import VendorDashboard from "./pages/VendorDashboard";
import QRScanner from "./pages/QRScanner";
import NotFound from "./pages/NotFound";
import FarmerInfo from "./pages/FarmerInfo";
import BuyerInfo from "./pages/BuyerInfo";
import Preferences from "./pages/Preferences";
import SellerProfile from "./pages/SellerProfile";

const queryClient = new QueryClient();

const App = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [userMode, setUserMode] = useState<'buyer' | 'seller'>('buyer');

  const handleConnectWallet = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const handleModeChange = (mode: 'buyer' | 'seller') => {
    setUserMode(mode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MonarkBannerWrapper>
          <BrowserRouter>
            <div className="min-h-screen">
              <Navigation 
                isWalletConnected={isWalletConnected}
                onConnectWallet={handleConnectWallet}
                mode={userMode}
                onModeChange={handleModeChange}
              />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/vendor" element={<VendorDashboard />} />
                <Route path="/farmer-info" element={<FarmerInfo />} />
                <Route path="/buyer-info" element={<BuyerInfo />} />
                <Route path="/preferences" element={
                  <Preferences 
                    onBack={() => window.history.back()} 
                    mode={userMode}
                  />
                } />
                <Route path="/seller-profile" element={
                  <SellerProfile onBack={() => window.history.back()} />
                } />
                <Route path="/qr-scanner" element={
                  <QRScanner 
                    isWalletConnected={isWalletConnected}
                    onConnectWallet={handleConnectWallet}
                  />
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </MonarkBannerWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
