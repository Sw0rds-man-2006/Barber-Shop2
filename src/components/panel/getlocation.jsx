import React, { useState, useEffect } from "react";

const provincesData = {
  تهران: ["تهران", "ری", "شمیرانات"],
  اصفهان: ["اصفهان", "کاشان", "خمینی‌شهر"],
  فارس: ["شیراز", "مرودشت", "لار"],
  خراسان_رضوی: ["سبزوار", "نیشابور", "مشهد"],
};

const citiesData = {
  تهران: ["1", "2", "3"],
  ری: ["1", "2", "3"],
  شمیرانات: ["1", "2", "3"],
  اصفهان: ["1", "2", "3"],
  کاشان: ["1", "2", "3"],
  خمینی‌شهر: ["1", "2", "3"],
  شیراز: ["1", "2", "3"],
  مرودشت: ["1", "2", "3"],
  لار: ["1", "2", "3"],
  مشهد: ["1", "2", "3"],
  نیشابور: ["1", "2", "3"],
  سبزوار: ["1", "2", "3"], // اصلاح مقدار تکراری
};

const Getlocation = ({ setLocationData }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    // ارسال مقادیر به والد هنگام تغییر
    setLocationData({ province, city, region });
  }, [province, city, region, setLocationData]);

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

  return (
    <div className="p-4 bg-white">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        انتخاب موقعیت مکانی
      </h2>

      {/* انتخاب استان */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">استان</label>
        <select
          value={province}
          onChange={handleProvinceChange}
          className="w-full p-2 border rounded-md shadow-sm"
        >
          <option value="">انتخاب استان</option>
          {Object.keys(provincesData).map((prov, index) => (
            <option key={index} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>

      {/* انتخاب شهر */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">شهر</label>
        <select
          value={city}
          onChange={handleCityChange}
          className="w-full p-2 border rounded-md shadow-sm"
          disabled={!province}
        >
          <option value="">انتخاب شهر</option>
          {province &&
            provincesData[province].map((ct, index) => (
              <option key={index} value={ct}>
                {ct}
              </option>
            ))}
        </select>
      </div>

      {/* انتخاب منطقه */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">منطقه</label>
        <select
          value={region}
          onChange={handleRegionChange}
          className="w-full p-2 border rounded-md shadow-sm"
          disabled={!city}
        >
          <option value="">انتخاب منطقه</option>
          {city &&
            [...new Set(citiesData[city])].map((rg, index) => (
              <option key={index} value={rg}>
                {rg}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Getlocation;
