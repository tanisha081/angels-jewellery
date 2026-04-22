const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: false },
  priceMin: { type: Number },
  priceMax: { type: Number },
  priceDisplay: { type: String },
  category: {
    type: String, required: true,
    enum: ['ornaments', 'hand-accessories', 'hair-accessories', 'shrifal', 'varmala', 'haldi-tiara', 'haldi-earrings', 'haldi-rings', 'tagar-ornaments', 'jipso-ornaments', 'veni', 'bridal-bun'],
  },
  images: [{ type: String }],
  features: [{ type: String }],
  inStock: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);