import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
function Home() {
  const location = useLocation();
  const [storeId, setStoreId] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    if (location.state?.storeId) {
      setStoreId(location.state.storeId);
    }
  }, [location]);

  const featureCards = [
    {
      title: "Navigate Product",
      icon: "fas fa-map-marker-alt",
      description: "Find products in store with turn-by-turn directions",
      bgColor: "bg-blue-50",
      iconColor: "text-[#0071DC]",
    },
    {
      title: "Check Live Stock",
      icon: "fas fa-box-open",
      description: "View real-time inventory for any product",
      bgColor: "bg-yellow-50",
      iconColor: "text-[#FFC220]",
      path: '/liveStockUpdate',
    },
    {
      title: "Self Billing",
      icon: "fas fa-receipt",
      description: "Scan and pay for items without waiting in line",
      bgColor: "bg-blue-50",
      iconColor: "text-[#0071DC]",
    },
    
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-[#0071DC] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-store text-2xl mr-3"></i>
            <h1 className="text-xl font-bold">WayIn</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <i className="fas fa-bell"></i>
            </button>
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#0071DC] to-[#0071DC]/90 text-white rounded-xl p-6 mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <img
              src="https://readdy.ai/api/search-image?query=abstract%20shopping%20banner&width=400&height=300"
              alt="Pattern"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">
              {storeId ? `Welcome to Walmart Store #${storeId}` : "Welcome!"}
            </h2>
            <p className="text-white/80 max-w-2xl">
              Your smart shopping assistant is ready to help you navigate the store,
              check inventory, and shop effortlessly.
            </p>
          </div>
        </div>

        {/* Store Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-store text-2xl text-[#0071DC]"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Walmart Supercenter #{storeId || "N/A"}
              </h3>
              <p className="text-gray-500">123 Retail Drive, Shoppingville</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center">
              <i className="fas fa-phone-alt mr-2 text-[#0071DC]"></i>Contact
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center">
              <i className="fas fa-directions mr-2 text-[#0071DC]"></i>Directions
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center">
              <i className="fas fa-clock mr-2 text-[#0071DC]"></i>Hours
            </button>
          </div>
        </div>

        {/* Store Features */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Store Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featureCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className={`w-14 h-14 ${card.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <i className={`${card.icon} text-2xl ${card.iconColor}`}></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button onClick={() => navigate(card.path)} className="text-[#0071DC] font-medium flex items-center">
                  Open <i className="fas fa-chevron-right ml-2 text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <button className="bg-[#0071DC] text-white p-4 rounded-xl shadow hover:bg-[#0065c3] flex flex-col items-center">
            <i className="fas fa-barcode text-2xl mb-2"></i>
            <span>Scan Product</span>
          </button>
          <button className="bg-[#FFC220] text-gray-800 p-4 rounded-xl shadow hover:bg-[#f0b620] flex flex-col items-center">
            <i className="fas fa-shopping-cart text-2xl mb-2"></i>
            <span>View Cart</span>
          </button>
          <button className="bg-white text-gray-800 border border-gray-200 p-4 rounded-xl shadow hover:bg-gray-50 flex flex-col items-center">
            <i className="fas fa-list-alt text-2xl mb-2 text-[#0071DC]"></i>
            <span>Shopping List</span>
          </button>
          <button className="bg-white text-gray-800 border border-gray-200 p-4 rounded-xl shadow hover:bg-gray-50 flex flex-col items-center">
            <i className="fas fa-headset text-2xl mb-2 text-[#0071DC]"></i>
            <span>Get Help</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 md:mb-0">
            © 2025 Smart Shopping Assistant
          </p>
          <div className="flex space-x-4">
            <i className="fab fa-facebook-f text-gray-400 hover:text-white cursor-pointer"></i>
            <i className="fab fa-twitter text-gray-400 hover:text-white cursor-pointer"></i>
            <i className="fab fa-instagram text-gray-400 hover:text-white cursor-pointer"></i> 
            </div> 
            </div> 
            </footer> 
            </div> ); 
            }
export default Home;