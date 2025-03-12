import React from "react";
import { useNavigate } from "react-router-dom";
const navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/panel");
  };
  return (
    <>
      <div className=" w-100vw h-8vh bg-gradient-to-r from-emerald-900 via-green-600 to-teal-500">
        <div className="m-0 p3 w-90% flex h-100% box-border justify-center mx-auto text-center justify-between">
          <div>
            <button
              onClick={handleNavigate}
              className="bg-transparent color-white rounded-3 p2 p-x4 loginbtn cursor-pointer"
            >
              ثبت نام / ورود
            </button>
          </div>
          <div> right</div>
        </div>
      </div>
    </>
  );
};

export default navbar;
