import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star } from 'lucide-react';
import { productsAPI } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    shape: '',
    availability: '',
  });
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchTerm, filters, sortBy]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getAll();
      setProducts(response.data || []);
    } catch (error) {
      // Use mock data for demo
      const mockProducts = [
        {
          id: '1',
          name: 'Radiant Blue Sapphire',
          price: 15000,
          image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg',
          shape: 'Round',
          carat: 2.5,
          clarity: 'VS1',
          color: 'Blue',
          inStock: true
        },
        {
          id: '2',
          name: 'Brilliant Diamond',
          price: 25000,
          image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg',
          shape: 'Princess',
          carat: 1.8,
          clarity: 'VVS1',
          color: 'D',
          inStock: true
        },
        {
          id: '3',
          name: 'Emerald Elegance',
          price: 12000,
          image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg',
          shape: 'Emerald',
          carat: 3.2,
          clarity: 'SI1',
          color: 'Green',
          inStock: false
        },
        {
          id: '4',
          name: 'Ruby Passion',
          price: 18000,
          image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg',
          shape: 'Oval',
          carat: 2.1,
          clarity: 'VS2',
          color: 'Red',
          inStock: true
        },
        {
          id: '5',
          name: 'Golden Topaz',
          price: 8000,
          image: 'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg',
          shape: 'Cushion',
          carat: 4.0,
          clarity: 'VVS2',
          color: 'Yellow',
          inStock: true
        },
        {
          id: '6',
          name: 'Pink Tourmaline',
          price: 9500,
          image: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg',
          shape: 'Pear',
          carat: 2.8,
          clarity: 'VS1',
          color: 'Pink',
          inStock: true
        }
      ];
      setProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shape.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.color.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price filter
    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseInt(filters.maxPrice));
    }

    // Shape filter
    if (filters.shape) {
      filtered = filtered.filter(product => product.shape === filters.shape);
    }

    // Availability filter
    if (filters.availability) {
      filtered = filtered.filter(product => 
        filters.availability === 'in-stock' ? product.inStock : !product.inStock
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'carat':
          return b.carat - a.carat;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      shape: '',
      availability: '',
    });
    setSearchTerm('');
  };

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-navy-800 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-gray-600">
            Discover {products.length} exquisite gemstones in our curated collection
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search gemstones..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Price Range */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  placeholder="$0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  placeholder="$50,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Shape */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Shape</label>
              <select
                value={filters.shape}
                onChange={(e) => handleFilterChange('shape', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Shapes</option>
                <option value="Round">Round</option>
                <option value="Princess">Princess</option>
                <option value="Emerald">Emerald</option>
                <option value="Oval">Oval</option>
                <option value="Cushion">Cushion</option>
                <option value="Pear">Pear</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <select
                value={filters.availability}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">All Items</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear Filters
            </button>
            <p className="text-gray-600">
              Showing {displayedProducts.length} of {filteredProducts.length} results
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="carat">Carat</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid/List */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-12">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
          }>
            {displayedProducts.map((product) => (
              <div key={product.id} className={viewMode === 'grid' 
                ? 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group' 
                : 'bg-white rounded-xl shadow-lg p-6 flex items-center space-x-6 hover:shadow-xl transition-shadow duration-300'
              }>
                {viewMode === 'grid' ? (
                  <>
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Out of Stock
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-800 mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-primary-500 fill-current" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">(4.9)</span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p><span className="font-medium">Shape:</span> {product.shape}</p>
                        <p><span className="font-medium">Carat:</span> {product.carat}</p>
                        <p><span className="font-medium">Clarity:</span> {product.clarity}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary-600">
                          ${product.price.toLocaleString()}
                        </span>
                        <Link
                          to={`/products/${product.id}`}
                          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-navy-800 mb-2">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-primary-500 fill-current" />
                        ))}
                        <span className="text-gray-600 text-sm ml-2">(4.9)</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                        <p><span className="font-medium">Shape:</span> {product.shape}</p>
                        <p><span className="font-medium">Carat:</span> {product.carat}</p>
                        <p><span className="font-medium">Clarity:</span> {product.clarity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        ${product.price.toLocaleString()}
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                        >
                          View Details
                        </Link>
                        {!product.inStock && (
                          <span className="text-red-500 text-sm font-medium">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === i + 1
                    ? 'bg-primary-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;