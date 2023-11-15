import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error('Error while scanning QR code:', error);
    // Add additional handling if needed
  };

  return (
    <div>
      {/* Log information to console for debugging */}
      <p>Current result: {result}</p>
      
      {/* Render the QR code scanner */}
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />

      {/* Display the scanned result */}
      <p>Scanned result: {result}</p>
    </div>
  );
};

export default QRScanner;
