import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QRCodeDisplay = ({ itemId }) => {
  const [qrCode, setQRCode] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const response = await axios.get(`/generateQR/${itemId}`);
        setQRCode(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    generateQRCode();
  }, [itemId]);

  return <img src={qrCode} alt={`QR Code for Item ${itemId}`} />;
};

export default QRCodeDisplay;
