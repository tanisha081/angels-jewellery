const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://angels-jewellery.vercel.app',
    'https://angels-jewellery-qor7ng84u-tks-projects-63bbb9f1.vercel.app',
  ],
  credentials: true,
}));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/upload', require('./routes/upload'));

app.get('/', (req, res) => {
  res.json({ message: '🌸 Angels Jewellery Backend is running!' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB error:', err));