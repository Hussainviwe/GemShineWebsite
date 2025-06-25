import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Product from '../models/Product.js';

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO || 'mongodb://localhost:27017/gemshine');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const adminUser = new User({
      email: 'admin@gemshine.com',
      password: adminPassword,
      role: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      isActive: true
    });
    await adminUser.save();
    console.log('Admin user created');

    // Create sample products
    const sampleProducts = [
      {
        sku: 'GS-SAP-001',
        name: 'Radiant Blue Sapphire',
        description: 'A stunning blue sapphire with exceptional clarity and brilliance. This magnificent gemstone showcases the finest characteristics of premium sapphires.',
        shape: 'Round',
        carat: 2.5,
        clarity: 'VS1',
        color: 'Blue',
        price: 15000,
        images: ['https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg'],
        inStock: true,
        featured: true,
        category: 'Sapphire',
        origin: 'Sri Lanka',
        certification: 'GIA Certified'
      },
      {
        sku: 'GS-DIA-002',
        name: 'Brilliant Diamond',
        description: 'Premium quality diamond with perfect cut and exceptional fire. A masterpiece of nature and craftsmanship.',
        shape: 'Princess',
        carat: 1.8,
        clarity: 'VVS1',
        color: 'D',
        price: 25000,
        images: ['https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg'],
        inStock: true,
        featured: true,
        category: 'Diamond',
        origin: 'Botswana',
        certification: 'GIA Certified'
      },
      {
        sku: 'GS-EME-003',
        name: 'Emerald Elegance',
        description: 'Rare emerald with deep green color and excellent transparency. A true collector\'s piece.',
        shape: 'Emerald',
        carat: 3.2,
        clarity: 'SI1',
        color: 'Green',
        price: 12000,
        images: ['https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg'],
        inStock: false,
        featured: false,
        category: 'Emerald',
        origin: 'Colombia',
        certification: 'GRS Certified'
      },
      {
        sku: 'GS-RUB-004',
        name: 'Ruby Passion',
        description: 'Vibrant red ruby with exceptional color saturation and clarity. Perfect for luxury jewelry.',
        shape: 'Oval',
        carat: 2.1,
        clarity: 'VS2',
        color: 'Red',
        price: 18000,
        images: ['https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg'],
        inStock: true,
        featured: true,
        category: 'Ruby',
        origin: 'Myanmar',
        certification: 'Gübelin Certified'
      },
      {
        sku: 'GS-TOP-005',
        name: 'Golden Topaz',
        description: 'Magnificent golden topaz with brilliant clarity and warm, rich color. Exceptional size and quality.',
        shape: 'Cushion',
        carat: 4.0,
        clarity: 'VVS2',
        color: 'Yellow',
        price: 8000,
        images: ['https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg'],
        inStock: true,
        featured: false,
        category: 'Topaz',
        origin: 'Brazil',
        certification: 'SSEF Certified'
      },
      {
        sku: 'GS-TOU-006',
        name: 'Pink Tourmaline',
        description: 'Beautiful pink tourmaline with excellent clarity and vibrant color. A rare and valuable gemstone.',
        shape: 'Pear',
        carat: 2.8,
        clarity: 'VS1',
        color: 'Pink',
        price: 9500,
        images: ['https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg'],
        inStock: true,
        featured: false,
        category: 'Tourmaline',
        origin: 'Madagascar',
        certification: 'GIA Certified'
      }
    ];

    await Product.insertMany(sampleProducts);
    console.log('Sample products created');

    console.log('Seed data completed successfully!');
    console.log('Admin credentials:');
    console.log('Email: admin@gemshine.com');
    console.log('Password: admin123');

    process.exit(0);
  } catch (error) {
    console.error('Seed data error:', error);
    process.exit(1);
  }
};

seedData();