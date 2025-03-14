import React, { useState } from "react";
import Getlocation from "../components/panel/getlocation.jsx";
import Datepicker from "../components/panel/datepicker.jsx";
import ImageUploader from "../components/panel/imageuploader.jsx";

const Panel = () => {
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState({});
  const [imageData, setImageData] = useState(null);

  const submit = () => {
    const formdata = {
      storeName: storeName,
      storeDescription: storeDescription,
      startTime: startTime,
      endTime: endTime,
      location: location,
      imageData: imageData,
    };
    console.log(formdata);
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen flex justify-center items-center">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden w-full p-6">
        {/* ارسال تابع setLocation به Getlocation */}
        <Getlocation setLocationData={setLocation} />

        <div className="w-90% mx-auto">
          <div className="mb-4 box-border">
            <label className="block text-gray-700 font-medium mb-2">
              نام فروشگاه
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 box-border">
            <label className="block text-gray-700 font-medium mb-2">
              توضیحات فروشگاه
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={storeDescription}
              onChange={(e) => setStoreDescription(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        <ImageUploader setImageData={setImageData} />

        {/* ارسال توابع setStartTime و setEndTime به Datepicker */}
        <Datepicker setdate={setStartTime} setdate2={setEndTime} />

        <button
          onClick={submit}
          className="w-full bg-blue-500 text-white p-3 rounded-md mt-4 hover:bg-blue-600 transition duration-200"
        >
          ارسال اطلاعات
        </button>
      </div>
    </div>
  );
};

export default Panel;
