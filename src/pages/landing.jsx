import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/panel");
  };

  return (
    <div className="bg-gray-300 container w-100% mx-auto h-92vh">
      <button className="m-3 p-3" onClick={handleNavigate}>
        Click to navigate
      </button>
    </div>
  );
};

export default Landing;
