import React, { useState } from "react";
import Getlocation from "../components/getlocation";
import TimeSender from "../components/timesender.jsx";

const panel = () => {
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");

  const handleStoreNameChange = (e) => {
    setStoreName(e.target.value);
  };

  const handleStoreDescriptionChange = (e) => {
    setStoreDescription(e.target.value);
  };

  return (
    <div className="bg-gray-1 p-6">
      <div className=" max-w-md bg-white shadow-lg rounded-lg overflow-hidden  w-full mx-auto">
        <Getlocation />
        <div className="mx-auto w-80%">
          <div className="form-control">
            <label className="label">
              <span className="label-text my-3 text-right block text-gray-700">
                نام فروشگاه
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered box-border mb-3 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={storeName}
              onChange={handleStoreNameChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text mb-3 text-right block text-gray-700">
                توضیحات فروشگاه
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered box-border mb-3 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              value={storeDescription}
              onChange={handleStoreDescriptionChange}
              rows={3}
            />
          </div>
        </div>

        <TimeSender />
      </div>
    </div>
  );
};

export default panel;
