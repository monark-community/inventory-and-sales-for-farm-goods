
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface QRScannerProps {
  isWalletConnected?: boolean;
  onConnectWallet?: () => void;
}

const QRScanner = ({ isWalletConnected = false, onConnectWallet }: QRScannerProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new QR landing page
    navigate('/qr-landing', { replace: true });
  }, [navigate]);

  return null;
};

export default QRScanner;
