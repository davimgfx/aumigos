import React from "react";

const Button = ({ text }) => {
  return (
    <div className="flex items-center">
      <p className=" mt-[2rem] text-[1.4rem] btn btn-slide-about py-[1.2rem] px-[1.8rem] bg-[#FBB042] border-[#FBB042] border-solid font-[800] border-2 rounded-r-[2rem] rounded-b-[2rem] text-white">
        {text}
      </p>
    </div>
  );
};

export default Button;
