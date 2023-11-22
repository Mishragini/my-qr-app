
import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div>
      <div>
        Welcome to the simple QR code generator and QR code scanner.
      </div>
      <div>
        <Link to="/addItem">Go to Qr code generator</Link>
      </div>
      <div>
        <Link to="/scanner">Go to QR Code Scanner</Link>
      </div>
    </div>
  );
};
