import { useState } from "react";
import { useNavigate } from "react-router-dom"; // add this at the top

function Store() {
  const [storeId, setStoreId] = useState("");
  const navigate = useNavigate();

const handleContinue = () => {
  const id = parseInt(storeId.trim());
  if (isNaN(id) || id < 1 || id > 10616) {
    alert("Please enter a valid Walmart Store ID between 1 and 10,616.");
    return;
  }

  console.log("Valid Store ID:", id);
  navigate("/home", { state: { storeId } });// 👈 route them to your actual homepage
};

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-xl shadow-lg">
        <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full bg-blue-50 flex items-center justify-center">
          <i className="fas fa-store text-3xl sm:text-4xl text-[#0071DC]"></i>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Enter Your Store
        </h1>

        <div className="w-full mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-map-marker-alt text-gray-400"></i>
          </div>
          <input
            type="text"
            value={storeId}
            onChange={(e) => setStoreId(e.target.value)}
            placeholder="Store ID"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071DC] text-gray-700 text-sm sm:text-base"
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <button onClick={handleContinue} className="w-full py-3 sm:py-4 bg-[#0071DC] text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center whitespace-nowrap">
            <i className="fas fa-arrow-right mr-2"></i>
            Continue
          </button>

          <div className="w-full flex items-center my-4">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <button className="w-full py-3 sm:py-4 bg-[#0071DC] text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center whitespace-nowrap">
            <i className="fas fa-qrcode mr-2"></i>
            Scan Store QR Code
          </button>
        </div>

        <div className="mt-6 sm:mt-8 text-sm text-gray-500 text-center">
          <p>
            Need help finding your store?{" "}
            <a
              href="#"
              className="text-[#0071DC] hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#0071DC] to-[#FFC220]"></div>
    </div>
  );
}

export default Store;
