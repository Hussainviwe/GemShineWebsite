import React from 'react';
import { Gem, Award, Heart, Users, Star, ArrowRight, Play, Shield, Truck, Gift } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Our Story of
                  <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent block">
                    Brilliance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  For over three decades, GemShine has been crafting extraordinary jewelry pieces that celebrate life's most precious moments. Our passion for perfection and commitment to excellence makes every piece a masterpiece.
                </p>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">30+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">1000+</div>
                  <div className="text-sm text-gray-600">Unique Designs</div>
                </div>
              </div>
              
              <button className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Discover Our Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/gem4.jpg" 
                  alt="Luxury jewelry collection" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              
              <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-amber-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-orange-200 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-pink-200 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="font-bold text-amber-600">4.9★</div>
                    <div className="text-xs text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Makes Us Special</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence goes beyond creating beautiful jewelry. We believe in crafting experiences that last a lifetime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Complimentary shipping on all orders worldwide with secure packaging and tracking.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Gem className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Exclusive Design</h3>
              <p className="text-gray-600">Each piece is uniquely crafted by our master artisans with attention to every detail.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Gift className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Packaging</h3>
              <p className="text-gray-600">Beautiful presentation boxes that make every purchase feel like a special occasion.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lifetime Quality</h3>
              <p className="text-gray-600">Premium materials and craftsmanship backed by our lifetime quality guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <span className="text-gray-600">(4.9)</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                The Art Of Radiant
                <span className="block text-amber-600">Refinement</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1990 by master jeweler Elena Martinez, GemShine began as a small family workshop with a vision to create jewelry that tells stories. What started as a passion project has evolved into a globally recognized brand, trusted by discerning customers who appreciate the finest craftsmanship.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Every piece in our collection is thoughtfully designed and meticulously crafted using traditional techniques passed down through generations, combined with modern innovation to create timeless elegance that transcends trends.
              </p>
              
              <button className="bg-transparent border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-600 hover:text-white transition-all">
                Learn More
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Jewelry craftsmanship" 
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Featured jewelry" 
                  className="w-24 h-24 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Masterpieces</h2>
              <p className="text-gray-600 max-w-2xl">
                Discover our carefully curated collection of fine jewelry, each piece representing the pinnacle of craftsmanship and design excellence.
              </p>
            </div>
            <button className="hidden md:block bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors">
              See More
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Gold Earrings" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gold Earrings</h3>
                <p className="text-amber-600 font-bold text-lg">$240.00</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-4 w-4 text-gray-600" />
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Diamond Ring" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Diamond Ring</h3>
                <p className="text-amber-600 font-bold text-lg">$560.00</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-4 w-4 text-gray-600" />
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Gold Necklace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gold Necklace</h3>
                <p className="text-amber-600 font-bold text-lg">$380.00</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-600 via-orange-500 to-pink-500 rounded-3xl p-1">
                <div className="bg-black rounded-3xl overflow-hidden relative">
                  <img 
                    src="images/gem5.jpg" 
                    alt="Behind the scenes" 
                    className="w-full h-80 object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                Behind The Scenes
                <span className="block text-amber-600">Of Excellence</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Step into our world and witness the meticulous process behind every GemShine creation. From selecting the finest gemstones to the final polish, our master craftsmen pour their heart and soul into every piece.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to sustainable practices and ethical sourcing ensures that every piece not only looks beautiful but also represents our values of responsibility and integrity.
              </p>
              
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <Gem className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-800">Premium Materials</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-800">Expert Craftsmen</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-800">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Style</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Explore our diverse categories, each thoughtfully curated to match your unique style and personality.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Ring" 
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Rings</h3>
              <p className="text-gray-600">Engagement, wedding, and statement rings crafted to perfection</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Necklace" 
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Necklaces</h3>
              <p className="text-gray-600">Elegant chains and pendants for every occasion</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Bracelet" 
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bracelets</h3>
              <p className="text-gray-600">Delicate and bold bracelets to complement your style</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}