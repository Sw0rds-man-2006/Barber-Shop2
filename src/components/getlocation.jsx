import React, { useState } from "react";
import "../css/locationForm.css";

const provincesData = {
  تهران: ["تهران", "ری", "شمیرانات"],
  اصفهان: ["اصفهان", "کاشان", "خمینی‌شهر"],
  فارس: ["شیراز", "مرودشت", "لار"],
};

const citiesData = {
  تهران: ["مرکز", "شمال", "جنوب"],
  ری: ["منطقه 1", "منطقه 2"],
  شمیرانات: ["لواسان", "رودبار قصران"],
  اصفهان: ["مرکز", "جنوب", "شمال"],
  کاشان: ["ناحیه 1", "ناحیه 2"],
  خمینی‌شهر: ["منطقه مرکزی", "حاشیه‌ای"],
  شیراز: ["منطقه 1", "منطقه 2"],
  مرودشت: ["بخش مرکزی", "بخش جنوبی"],
  لار: ["بخش 1", "بخش 2"],
};

const LocationForm = ({ onSubmit }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [error, setError] = useState("");

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setCity("");
    setRegion("");
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setRegion("");
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!province || !city || !region) {
      setError("تمام فیلدها الزامی هستند!");
      return;
    }
    setError("");
    onSubmit({ province, city, region });
  };

  return (
    <div className="flex justify-center h-auto p-2 rtl">
      <div className="card">
        <div className="card-body p-3">
          <h2 className="card-title text-2xl font-bold text-center text-gray-800 mb-4">
            موقعیت خود را انتخاب کنید
          </h2>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* انتخاب استان */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-right block text-gray-700">
                  استان
                </span>
              </label>
              <select
                className="select select-bordered w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={province}
                onChange={handleProvinceChange}
                required
              >
                <option value="" disabled>
                  انتخاب استان
                </option>
                {Object.keys(provincesData).map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>

            {/* انتخاب شهر */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-right block text-gray-700">
                  شهر
                </span>
              </label>
              <select
                className="select select-bordered w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={city}
                onChange={handleCityChange}
                required
                disabled={!province}
              >
                <option value="" disabled>
                  انتخاب شهر
                </option>
                {province &&
                  provincesData[province].map((ct) => (
                    <option key={ct} value={ct}>
                      {ct}
                    </option>
                  ))}
              </select>
            </div>

            {/* انتخاب منطقه */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-right block text-gray-700">
                  منطقه
                </span>
              </label>
              <select
                className="select select-bordered w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={region}
                onChange={handleRegionChange}
                required
                disabled={!city}
              >
                <option value="" disabled>
                  انتخاب منطقه
                </option>
                {city &&
                  citiesData[city]?.map((rg) => (
                    <option key={rg} value={rg}>
                      {rg}
                    </option>
                  ))}
              </select>

              <hr className="w-90% mx-auto mt-30px" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
