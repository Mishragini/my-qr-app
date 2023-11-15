const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const qr = require('qrcode');
const app = express();
app.use(cors());

app.get('/generateQR/:itemId', async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const qrCode = await qr.toDataURL(itemId);
    res.send(qrCode);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/addItem', async (req, res) => {
  const { name } = req.body;

  try {
    const newItem = new Item({ name });
    const savedItem = await newItem.save();
    res.status(201).json({ itemId: savedItem._id }); // Send back the itemId in the response
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

const itemSchema = new mongoose.Schema({
  name: String,
  // other fields
});

const Item = mongoose.model('Item', itemSchema);

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
