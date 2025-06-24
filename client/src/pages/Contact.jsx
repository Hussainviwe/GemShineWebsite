import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Gem } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  We'd Love to
                  <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent block">
                    Hear From You
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Whether you have questions about our jewelry, need assistance with an order, or want to discuss a custom design, our team is here to help. Reach out and we'll respond promptly.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call us</div>
                    <div className="font-medium text-gray-800">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email us</div>
                    <div className="font-medium text-gray-800">hello@gemshine.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Customer service" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                Get In Touch
                <span className="block text-amber-600">With Our Team</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Have questions about our jewelry collections or need assistance with a purchase? Fill out the form and our dedicated team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Showroom</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full mt-1">
                      <MapPin className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Our Location</h4>
                      <p className="text-gray-600">123 Jewelry Lane, New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full mt-1">
                      <Clock className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Opening Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9am - 7pm</p>
                      <p className="text-gray-600">Saturday: 10am - 6pm</p>
                      <p className="text-gray-600">Sunday: 11am - 5pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full mt-1">
                      <Phone className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Appointments</h4>
                      <p className="text-gray-600">For private viewings or custom design consultations, please call to schedule an appointment.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256751198!2d-73.98784492401897!3d40.7484409713899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689874133599!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our jewelry, services, and policies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What materials do you use in your jewelry?</h3>
              <p className="text-gray-600">
                We use only the finest materials including 18K gold, platinum, and ethically sourced diamonds and gemstones. All our metals are nickel-free and hypoallergenic.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Do you offer custom jewelry design?</h3>
              <p className="text-gray-600">
                Yes! Our master jewelers would love to create a one-of-a-kind piece just for you. Schedule a consultation to discuss your vision.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for unworn jewelry in its original condition. Custom pieces and engraved items are final sale.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">How do I care for my jewelry?</h3>
              <p className="text-gray-600">
                We provide a detailed care guide with every purchase. Generally, store pieces separately, avoid chemicals, and clean with a soft cloth.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-600 hover:text-white transition-all">
              View All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Piece?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our jewelry specialists are standing by to help you select or create the perfect jewelry for any occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Browse Collections</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Book Appointment</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}