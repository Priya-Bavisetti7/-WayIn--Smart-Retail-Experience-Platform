import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const LiveStockUpdate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showToast, setShowToast] = useState(false);

  const categories = ['All', 'Fruits', 'Dairy', 'Snacks', 'Beverages' , 'Cleaning', 'Personal Care', 'Baby Care', 'Cooking Essentials', 'Grains'];

  const products = [
    {
      id: 1,
      name: 'Organic Bananas',
      category: 'Fruits',
      inStock: true,
      quantity: 24,
      image: '/bananas.jpg'
    },
    {
      id: 2,
      name: 'Whole Milk',
      category: 'Dairy',
      inStock: true,
      quantity: 15,
      image: '/milk.webp'
    },
    {
      id: 3,
      name: 'Lays',
      category: 'Snacks',
      inStock: false,
      image: '/lays.webp'
    },
    {
        id: 4,
        name: 'Mad Angles',
        category: 'Snacks',
        inStock: true,
        quantity: 15,
        image: '/mad angles.jpg'
    },
    {
        id: 5,
        name: '5 star',
        category: 'Snacks',
        inStock: true,
        quantity: 30,
        image: '/5 star.jpeg'
    },
    {
        id: 6,
        name: 'Dark Fantasy',
        category: 'Snacks',
        inStock: true,
        quantity: 23,
        image: '/darkfantasy.jpeg'
    },
    {
  id: 7,
  name: 'Bingo',
  category: 'Snacks',
  inStock: false,
  image: '/bingo.jpeg'
},
{
  id: 8,
  name: 'Dettol',
  category: 'Personal Care',
  inStock: true,
  quantity: 18,
  image: '/dettol.jpeg'
},
{
  id: 9,
  name: 'Freedom',
  category: 'Cooking Essentials',
  inStock: true,
  quantity: 35,
  image: '/oil.jpeg'
},
{
  id: 10,
  name: 'Harpic',
  category: 'Cleaning',
  inStock: false,
  image: '/harpic.jpeg'
},
{
  id: 11,
  name: 'Head & Shoulders',
  category: 'Personal Care',
  inStock: true,
  quantity: 9,
  image: '/head&shoulders.jpeg'
},
{
  id: 12,
  name: 'Hide & Seek',
  category: 'Snacks',
  inStock: true,
  quantity: 25,
  image: '/hide&seek.jpeg'
},
{
  id: 13,
  name: 'Johnson',
  category: 'Baby Care',
  inStock: true,
  quantity: 14,
  image: '/johnson.jpeg'
},
{
  id: 14,
  name: 'Magi',
  category: 'Snacks',
  inStock: false,
  image: '/magi.jpeg'
},
{
  id: 15,
  name: 'Mysore Sandal Soap',
  category: 'Personal Care',
  inStock: true,
  quantity: 16,
  image: '/mysoresoap.jpeg'
},
{
  id: 16,
  name: 'Oats',
  category: 'Grains',
  inStock: true,
  quantity: 22,
  image: '/oats.jpeg'
},
{
  id: 17,
  name: 'ThumbsUp',
  category: 'Beverages',
  inStock: true,
  quantity: 11,
  image:'/thumbsUp.jpeg'
},
{
  id: 18,
  name: 'Pampers',
  category: 'Baby Care',
  inStock: true,
  quantity: 17,
  image: '/pampers.jpeg'
},
{
  id: 19,
  name: 'Rice',
  category: 'Grains',
  inStock: false,
  image: '/rice.jpeg'
},
{
  id: 20,
  name: 'Salt',
  category: 'Cooking Essentials',
  inStock: true,
  quantity: 40,
  image: '/salt.jpeg'
},
{
  id: 21,
  name: 'Surf Excel',
  category: 'Cleaning',
  inStock: true,
  quantity: 19,
  image: '/surfexcel.jpeg'
},
{
  id: 22,
  name: 'Vim',
  category: 'Cleaning',
  inStock: true,
  quantity: 21,
  image: '/vim.jpeg'
},
{
  id: 23,
  name: 'Parachute',
  category: 'Personal Care',
  inStock: true,
  quantity: 15,
  image: '/parachute.jpeg'
},
{
      id: 24,
      name: 'Apples',
      category: 'Fruits',
      inStock: true,
      quantity: 28,
      image: '/apples.jpeg'
    },
    {
      id: 25,
      name: 'Dragon Fruit',
      category: 'Fruits',
      inStock: false,
      image: '/dragonFruit.jpeg'
    },
    // ... include all other products here
  ];

  useEffect(() => {
    const chartDom = document.getElementById('stock-chart');
    if (chartDom) {
      const chart = echarts.init(chartDom);
      const summary = {};

      products.forEach(p => {
        if (!summary[p.category]) summary[p.category] = { total: 0, inStock: 0 };
        summary[p.category].total += 1;
        if (p.inStock) summary[p.category].inStock += 1;
      });

      const cats = Object.keys(summary);
      const inStock = cats.map(c => summary[c].inStock);
      const outStock = cats.map(c => summary[c].total - summary[c].inStock);

      chart.setOption({
        title: { text: 'Stock by Category', left: 'center', top: 5 },
        legend: { bottom: 0 },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: { type: 'category', data: cats },
        yAxis: { type: 'value' },
        grid: { left: '3%', right: '4%', bottom: '15%', top: '20%', containLabel: true },
        series: [
          { name: 'In Stock', type: 'bar', stack: 'total', data: inStock, color: '#4ade80' },
          { name: 'Out of Stock', type: 'bar', stack: 'total', data: outStock, color: '#f87171' },
        ],
      });

      const resize = () => chart.resize();
      window.addEventListener('resize', resize);
      return () => {
        window.removeEventListener('resize', resize);
        chart.dispose();
      };
    }
  }, [products]);

  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const handleRequestRestock = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center mr-4">
            <i className="fas fa-store text-blue-600 text-2xl mr-2"></i>
            <span className="text-xl font-bold text-blue-600">WayIn</span>
          </div>
          <div className="flex-1 relative mx-4">
            <input
              type="text"
              className="w-full py-2 px-4 pr-10 border rounded-full text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-filter mr-2"></i> Filter
          </button>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white py-3 shadow-sm mb-6">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20">
        {/* Chart */}
        <div className="bg-white p-4 rounded shadow-sm mb-8">
          <div id="stock-chart" style={{ height: 300 }} className="w-full" />
        </div>

        {/* Products Grid */}
        <h2 className="text-2xl font-bold mb-6">Available Products</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-transform hover:-translate-y-1">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain p-2" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center mb-2 text-sm">
                  {product.inStock ? (
                    <span className="text-green-500 flex items-center">
                      <i className="fas fa-check-circle mr-1"></i> In Stock
                    </span>
                  ) : (
                    <span className="text-red-500 flex items-center">
                      <i className="fas fa-times-circle mr-1"></i> Out of Stock
                    </span>
                  )}
                  {product.inStock && (
                    <span className="ml-auto text-gray-500">{product.quantity} units</span>
                  )}
                </div>
                <div className="text-sm text-gray-600 flex items-center mb-3">
                  <i className="fas fa-tag mr-1"></i> {product.category}
                </div>
                {!product.inStock && (
                  <button
                    onClick={() => handleRequestRestock(product.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
                  >
                    <i className="fas fa-sync-alt mr-2"></i> Request Restock
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-gray-400 text-5xl mb-4"></i>
            <h3 className="text-xl text-gray-600">No products found</h3>
            <p className="text-gray-500">Try changing your search or filters</p>
          </div>
        )}
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-200 text-green-800 px-6 py-3 rounded-lg shadow-lg flex items-center">
          <i className="fas fa-check-circle text-green-600 mr-2"></i>
          Thanks! We’ll notify store staff about your request.
        </div>
      )}

      {/* Hide scrollbar styling */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default LiveStockUpdate;
