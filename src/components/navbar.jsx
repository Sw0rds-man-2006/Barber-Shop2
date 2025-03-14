import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // مقدار پیش‌فرض ورود به سیستم

  return (
    <div className="w-full h-60px bg-gradient-to-r from-emerald-900 via-green-600 to-teal-500 flex justify-center items-center">
      <div className="w-90% flex justify-between items-center mx-auto">
        {/* دکمه ورود یا پنل کاربری */}
        <div>
          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/authentication")}
              className="bg-transparent text-white rounded-lg px-4 py-2 border border-white cursor-pointer transition hover:bg-white hover:text-green-600"
            >
              ثبت نام / ورود
            </button>
          ) : (
            <button
              onClick={() => navigate("/panel")}
              className="bg-transparent text-white rounded-lg px-4 py-2 border border-white cursor-pointer transition hover:bg-white hover:text-green-600"
            >
              پنل کاربری
            </button>
          )}
        </div>
        <div className="text-white">لوگو یا منو</div>
      </div>
    </div>
  );
};

export default Navbar;
