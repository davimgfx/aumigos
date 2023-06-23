import React from "react";
import img4 from "../../imgs/img4.png";
const Feedback = () => {
  return (
    <section id="feedback" className="mt-[5rem]">
      <div className="flex gap-[2rem]  items-center ">
        <div>
          <img src={img4} alt="" />
        </div>
        <div className="mb-[10rem] w-[80rem] pr-[8rem] ">
          <i className="fa-solid fa-quote-right text-[8rem] text-[#FBB042]"></i>
          <h2 className="font-bold text-[24px] mt-[2rem] leading-tight">
            Nós adoramos levar a Crystal para a Aumigos! A equipe é sempre tão
            amigavel e é tão conveniente para nossas agendas de viagentes!{" "}
          </h2>
          <h2 className="font-bold text-[24px] mt-[4rem] leading-tight text-[#FBB042]">
            Miguel Costa
          </h2>
          <p className="font-[600] text-[18px] mt-[2rem] leading-tight text-[#838383]">
            Tutor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
