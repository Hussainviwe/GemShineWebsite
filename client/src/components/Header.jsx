import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gem, ShoppingBag, User } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Gem className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-navy-800">
                GemShine
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Since 1998</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-primary-600 border-b-2 border-primary-600 pb-1"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                isActive("/about")
                  ? "text-primary-600 border-b-2 border-primary-600 pb-1"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`font-medium transition-colors duration-200 ${
                isActive("/products")
                  ? "text-primary-600 border-b-2 border-primary-600 pb-1"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Products
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-primary-600 border-b-2 border-primary-600 pb-1"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/admin/login"
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              title="Admin"
            >
              <User className="w-5 h-5" />
            </Link>
            <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-slide-up">
            <nav className="flex flex-col py-4">
              <Link
                to="/"
                className={`px-4 py-3 font-medium transition-colors ${
                  isActive("/")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-3 font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/products"
                className={`px-4 py-3 font-medium transition-colors ${
                  isActive("/products")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-3 font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
