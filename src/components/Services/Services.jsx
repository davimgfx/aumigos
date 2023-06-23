import React from "react";
import Button from "../Button/Button";
import { ServicesInfo } from "./ServicesInfos";
const Services = () => {
  return (
    <section className="flex justify-center align-center mt-[10rem]" id="services">
      <div className="flex justify-center items-center gap-[3rem] flex-wrap ">
        {ServicesInfo.map((value, index) => (
          <div className="h-[380px] rounded-[3rem] w-[320px] p-[4.2rem] border-[#838383] border-solid" key={index}>
            <i className={`fa-solid ${value.icon} text-[5rem]  text-[#FBB042]`}></i>
            <h2 className="font-bold text-[24px] mt-[2rem] leading-tight">
              {value.title}
            </h2>
            <p className="mt-[1rem] text-[16px]">
              {value.description}
            </p>
            <Button text="Veja mais"></Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
