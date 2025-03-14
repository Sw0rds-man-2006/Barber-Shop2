import { useState } from "react";

const ImageUploader = ({ setImageData }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageData(imageUrl); // ارسال تصویر به والد
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        انتخاب عکس پروفایل
      </h2>

      {/* ورودی آپلود عکس */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
      />

      {/* نمایش عکس انتخاب‌شده */}
      {image && (
        <div className="mt-4">
          <img
            src={image}
            alt="پروفایل"
            className="w-32 h-32 object-cover rounded-full mx-auto border"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
