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
    <div className="location-form">
      <h2 className="location-form__title">انتخاب موقعیت مکانی</h2>
      {error && <p className="location-form__error">{error}</p>}
      <form className="location-form__form" onSubmit={handleSubmit}>
        {/* انتخاب استان */}
        <select
          className="location-form__select"
          value={province}
          onChange={handleProvinceChange}
          required
        >
          <option value="">انتخاب استان</option>
          {Object.keys(provincesData).map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>

        {/* انتخاب شهر */}
        <select
          className="location-form__select"
          value={city}
          onChange={handleCityChange}
          required
          disabled={!province}
        >
          <option value="">انتخاب شهر</option>
          {province &&
            provincesData[province].map((ct) => (
              <option key={ct} value={ct}>
                {ct}
              </option>
            ))}
        </select>

        {/* انتخاب منطقه */}
        <select
          className="location-form__select"
          value={region}
          onChange={handleRegionChange}
          required
          disabled={!city}
        >
          <option value="">انتخاب منطقه</option>
          {city &&
            citiesData[city]?.map((rg) => (
              <option key={rg} value={rg}>
                {rg}
              </option>
            ))}
        </select>

        <button className="location-form__button" type="submit">
          ثبت موقعیت
        </button>
      </form>
    </div>
  );
};

export default LocationForm;
