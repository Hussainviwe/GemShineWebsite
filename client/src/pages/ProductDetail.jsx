import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Award, Truck, Heart, Share2 } from 'lucide-react';
import { productsAPI } from '../services/api';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      loadProduct(id);
    }
  }, [id]);

  const loadProduct = async (productId) => {
    try {
      setLoading(true);
      const response = await productsAPI.getById(productId);
      setProduct(response.data);
    } catch (error) {
      // Use mock data for demo
      const mockProduct = {
        id: productId,
        name: 'Radiant Blue Sapphire',
        price: 15000,
        images: [
          'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg',
          'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg',
          'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg'
        ],
        shape: 'Round',
        carat: 2.5,
        clarity: 'VS1',
        color: 'Blue',
        description: 'A stunning blue sapphire with exceptional clarity and brilliance. This magnificent gemstone showcases the finest characteristics of premium sapphires, with a deep, saturated blue color that captures light beautifully. Expertly cut to maximize fire and scintillation, this piece represents the pinnacle of gemstone artistry.',
        inStock: true
      };
      setProduct(mockProduct);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
      toast.success('Added to cart successfully!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600">Product not found</h2>
          <Link to="/products" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          to="/products"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImageIndex === index ? 'border-primary-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-navy-800 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-500 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">(4.9 out of 5)</span>
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-6">
                ${product.price.toLocaleString()}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Shape:</span>
                  <span className="font-semibold ml-2">{product.shape}</span>
                </div>
                <div>
                  <span className="text-gray-600">Carat:</span>
                  <span className="font-semibold ml-2">{product.carat}</span>
                </div>
                <div>
                  <span className="text-gray-600">Clarity:</span>
                  <span className="font-semibold ml-2">{product.clarity}</span>
                </div>
                <div>
                  <span className="text-gray-600">Color:</span>
                  <span className="font-semibold ml-2">{product.color}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <label className="text-gray-700 font-medium">Quantity:</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {product.inStock ? (
                <div className="space-y-4">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Add to Cart - ${(product.price * quantity).toLocaleString()}
                  </button>
                  <button className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors">
                    Buy Now
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-red-600 font-semibold text-lg mb-4">Currently Out of Stock</p>
                  <button className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-lg font-semibold text-lg cursor-not-allowed">
                    Notify When Available
                  </button>
                </div>
              )}
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <Shield className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Authenticity</h4>
                  <p className="text-xs text-gray-600">Certified genuine</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <Award className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Quality</h4>
                  <p className="text-xs text-gray-600">Expert graded</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <Truck className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Shipping</h4>
                  <p className="text-xs text-gray-600">Free & insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;