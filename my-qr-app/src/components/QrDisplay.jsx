import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

const QRCodeDisplay = ({ itemId }) => {
  const [qrCode, setQRCode] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/generateQR/${itemId}`);
        setQRCode(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    generateQRCode();
  }, [itemId]);

  return <QRCode value={qrCode} />;
};

export default QRCodeDisplay;
