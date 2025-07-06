import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 relative px-4 py-8">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0071DC] mb-10 text-center">
          Welcome to WayIn
        </h1>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setIsLastSlide(swiper.isEnd)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full pb-10" // enough space for dots
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center px-4 sm:px-8">
              <div className="w-full max-w-[300px] md:max-w-[400px] mx-auto h-auto">
                <img
                  src="/navigation.png"
                  alt="Store Navigation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
                Smart Store Navigation
              </h2>
              <p className="text-center text-gray-600 max-w-lg text-sm sm:text-base">
                Experience seamless shopping with real-time indoor navigation.
                Find products quickly and efficiently with turn-by-turn directions.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center px-4 sm:px-8">
              <div className="w-full max-w-[300px] md:max-w-[400px] mx-auto h-auto">
                <img
                  src="./stockUpdate.jpeg"
                  alt="Stock Availability"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
                Real-time Stock Updates
              </h2>
              <p className="text-center text-gray-600 max-w-lg text-sm sm:text-base">
                Instantly check product availability and receive smart suggestions for alternatives.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center px-4 sm:px-8">
              <div className="w-full max-w-[300px] md:max-w-[400px] mx-auto h-auto">
                <img
                  src="./quickScan.jpeg"
                  alt="Quick Scan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
                Quick Scan & Go
              </h2>
              <p className="text-center text-gray-600 max-w-lg text-sm sm:text-base">
                Scan products while you shop and check out digitally—no lines, no wait.
              </p>
              {isLastSlide && (
                <button className="mt-6 px-8 py-3 bg-[#0071DC] text-white rounded-lg shadow-lg hover:shadow-xl transition-all" onClick={() => navigate("/store")}>
                  Get Started
                </button>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Gentle bottom decoration bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#0071DC] to-[#FFC220]"></div>

      {/* Show pagination dots properly above gradient */}
      <style>
        {`
          .swiper-pagination {
            bottom: 16px !important;
          }
        `}
      </style>
    </div>
  );
}

export default Info;
