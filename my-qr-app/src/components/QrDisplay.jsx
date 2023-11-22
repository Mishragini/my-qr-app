import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

const QRCodeDisplay = ({ itemId }) => {
  const [qrCode, setQRCode] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
       
        const response = await axios.get(`http://localhost:3001/generateQR/${itemId}`);
        const qrCodeData = response.data;

      
        const watermark = generateUniqueIdentifier();
        const watermarkedQRCode = `${qrCodeData}?watermark=${watermark}`;

        setQRCode(watermarkedQRCode);
      } catch (error) {
        console.error(error);
      }
    };

    generateQRCode();
  }, [itemId]);


  const generateUniqueIdentifier = () => {
    
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  return <QRCode value={qrCode} />;
};

export default QRCodeDisplay;
