import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: [true, 'SKU is required'],
    unique: true,
    trim: true,
    uppercase: true
  },
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shape: {
    type: String,
    required: [true, 'Shape is required'],
    enum: ['Round', 'Princess', 'Emerald', 'Oval', 'Cushion', 'Pear', 'Marquise', 'Radiant', 'Heart']
  },
  carat: {
    type: Number,
    required: [true, 'Carat weight is required'],
    min: [0.01, 'Carat weight must be at least 0.01'],
    max: [50, 'Carat weight cannot exceed 50']
  },
  clarity: {
    type: String,
    required: [true, 'Clarity is required'],
    enum: ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1', 'I2', 'I3']
  },
  color: {
    type: String,
    required: [true, 'Color is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be positive']
  },
  images: [{
    type: String,
    required: true
  }],
  inStock: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['Diamond', 'Sapphire', 'Ruby', 'Emerald', 'Topaz', 'Tourmaline', 'Other'],
    default: 'Other'
  },
  origin: {
    type: String,
    trim: true
  },
  certification: {
    type: String,
    trim: true
  },
  dimensions: {
    length: Number,
    width: Number,
    depth: Number
  },
  fluorescence: {
    type: String,
    enum: ['None', 'Faint', 'Medium', 'Strong', 'Very Strong']
  },
  treatment: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Indexes for better query performance
productSchema.index({ sku: 1 });
productSchema.index({ shape: 1 });
productSchema.index({ price: 1 });
productSchema.index({ inStock: 1 });
productSchema.index({ featured: 1 });
productSchema.index({ category: 1 });

// Virtual for formatted price
productSchema.virtual('formattedPrice').get(function() {
  return `$${this.price.toLocaleString()}`;
});

// Virtual for main image
productSchema.virtual('mainImage').get(function() {
  return this.images && this.images.length > 0 ? this.images[0] : null;
});

const Product = mongoose.model('Product', productSchema);

export default Product;