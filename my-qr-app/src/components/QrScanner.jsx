import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setError(null);
    }
  };

  const handleError = (err) => {
    console.error('Error while scanning QR code:', err);
    setError('Error while scanning QR code. Please try again.');
  };

  return (
    <div>
      <p>Current result: {result}</p>
      {error && <p>Error: {error}</p>}

      {/* Updated to use "onResult" instead of "onScan" */}
      <QrReader
        delay={300}
        onError={handleError}
        onResult={handleScan} // Use onResult instead of onScan
        style={{ width: '100%' }}
      />

      <p>Scanned result: {result}</p>
    </div>
  );
};

export default QRScanner;
