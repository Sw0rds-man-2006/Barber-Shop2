import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/slider";
import ShopCard from "../components/shopCard";

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/panel");
  };

  return (
    <div className="bg-gray-300 container w-100% mx-auto">
      <div className="w-100% bg-amber h-400px">blabla</div>
      <Slider />
      <ShopCard />
    </div>
  );
};

export default Landing;
