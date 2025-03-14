import React from "react";

const Datepicker = ({ setdate, setdate2 }) => {
  const handleStartDateChange = (e) => {
    setdate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setdate2(e.target.value);
  };

  return (
    <div className="p-4 bg-white mt-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        انتخاب زمان کاری
      </h2>

      {/* انتخاب زمان شروع */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          زمان شروع
        </label>
        <input
          type="time"
          className="w-full p-2 border rounded-md shadow-sm"
          onChange={handleStartDateChange}
          required
        />
      </div>

      {/* انتخاب زمان پایان */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          زمان پایان
        </label>
        <input
          type="time"
          className="w-full p-2 border rounded-md shadow-sm"
          onChange={handleEndDateChange}
          required
        />
      </div>
    </div>
  );
};

export default Datepicker;
