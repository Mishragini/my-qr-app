import React, { useState } from 'react';
import axios from 'axios';
import QRCodeDisplay from './QrDisplay';

const ItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemId, setItemId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAddItem = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post('http://localhost:3001/addItem', { name: itemName });
      setItemId(response.data.itemId);
      setItemName('');
    } catch (error) {
      console.error('Error adding item:', error);
      setError('Error adding item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={handleItemNameChange}
      />
      <button onClick={handleAddItem} disabled={loading}>
        {loading ? 'Adding...' : 'Add Item'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br></br>
      <br></br>
      <br></br>

      {itemId && <QRCodeDisplay itemId={itemId} />}
    </div>
  );
};

export default ItemForm;
