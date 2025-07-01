
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MonarkBannerWrapper>
        <BrowserRouter>
          <div className="min-h-screen">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/vendor" element={<VendorDashboard />} />
              <Route path="/farmer-info" element={<FarmerInfo />} />
              <Route path="/buyer-info" element={<BuyerInfo />} />
              <Route path="/qr-scanner" element={<QRScanner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MonarkBannerWrapper>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
