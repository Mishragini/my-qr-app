import React, { useState } from 'react';
import axios from 'axios';
import QRCodeDisplay from './QrDisplay';

const ItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemId, setItemId] = useState(null);

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAddItem = async () => {
    try {
      const response = await axios.post('/addItem', { name: itemName });
      setItemId(response.data.itemId); 
      setItemName('');
    } catch (error) {
      console.error(error);
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
      <button onClick={handleAddItem}>Add Item</button>
      {itemId && <QRCodeDisplay itemId={itemId} />}
    </div>
  );
};

export default ItemForm;
