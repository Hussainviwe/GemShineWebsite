import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Award, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { productsAPI } from '../services/api';

const Homepage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const response = await productsAPI.getAll({ featured: true, limit: 6 });
      setFeaturedProducts(response.data || []);
    } catch (error) {
      // Use mock data for demo
      setFeaturedProducts([
        {
          id: '1',
          name: 'Radiant Blue Sapphire',
          price: 15000,
          image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg',
          shape: 'Round',
          carat: 2.5
        },
        {
          id: '2',
          name: 'Brilliant Diamond',
          price: 25000,
          image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg',
          shape: 'Princess',
          carat: 1.8
        },
        {
          id: '3',
          name: 'Emerald Elegance',
          price: 12000,
          image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg',
          shape: 'Emerald',
          carat: 3.2
        }
      ]);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg)',
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            GemShine
          </h1>
          <p className="text-xl md:text-2xl mb-2 animate-slide-up opacity-90">
            Crafting Beauty Since 1998
          </p>
          <p className="text-lg md:text-xl mb-12 animate-slide-up opacity-80 max-w-2xl mx-auto">
            Discover the world's finest gemstones, expertly curated and ethically sourced for discerning collectors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/products"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Collection <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy-800 mb-4">
              Why Choose GemShine?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Over 25 years of expertise in bringing you the world's most exquisite gemstones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Certified Authentic</h3>
              <p className="text-gray-600 leading-relaxed">
                Every gemstone comes with professional certification and detailed documentation, ensuring authenticity and quality you can trust.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Expert Curation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our master gemologists hand-select each stone for exceptional clarity, color, and brilliance that exceeds industry standards.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-800 mb-4">White Glove Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Complimentary insured shipping, 30-day returns, and lifetime authenticity guarantee with personalized customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy-800 mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked masterpieces from our exclusive collection
            </p>
          </div>

          {featuredProducts.length > 0 && (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredProducts.map((product, index) => (
                    <div key={product.id} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 lg:p-16">
                        <div className="order-2 lg:order-1">
                          <h3 className="text-3xl font-serif font-bold text-navy-800 mb-4">
                            {product.name}
                          </h3>
                          <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-primary-500 fill-current" />
                            ))}
                            <span className="text-gray-600 ml-2">(4.9)</span>
                          </div>
                          <div className="space-y-2 mb-6">
                            <p className="text-gray-600"><span className="font-semibold">Shape:</span> {product.shape}</p>
                            <p className="text-gray-600"><span className="font-semibold">Carat:</span> {product.carat}</p>
                            <p className="text-2xl font-bold text-primary-600">${product.price.toLocaleString()}</p>
                          </div>
                          <div className="flex gap-4">
                            <Link
                              to={`/products/${product.id}`}
                              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                            >
                              View Details
                            </Link>
                            <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div className="order-1 lg:order-2">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-96 object-cover rounded-xl shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              {featuredProducts.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                </>
              )}

              {/* Dots indicator */}
              {featuredProducts.length > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {featuredProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to discover new arrivals, exclusive offers, and expert insights from the world of fine gemstones.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;