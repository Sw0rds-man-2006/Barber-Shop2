import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = ["#FF5733", "#33FF57", "#3357FF"];
  const [currentSlide, setCurrentSlide] = useState(0);

  // تابع برای رفتن به اسلاید بعدی
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // تابع برای رفتن به اسلاید قبلی
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // فقط یک‌بار اجرا شود

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex items-center justify-center"
            style={{ backgroundColor: slide, height: "400px" }}
          >
            <div className="text-center text-white text-4xl font-bold">
              اسلاید {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* دکمه‌های کنترلی */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={nextSlide}
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
