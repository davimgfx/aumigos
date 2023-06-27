import React from "react";
import img4 from "../../imgs/img4.png";
const Feedback = () => {
  return (
    <section id="feedback" className="pt-[6rem]">
      <div className="flex gap-[2rem]  items-center section-about md1090:flex-col">
        <div>
          <img src={img4} alt="" />
        </div>
        <div className="mb-[10rem] w-[80rem] pr-[8rem] md1090:w-[auto] md1090:pr-0 md1090:mb-0 md1090:mt-[1rem] md1090:mx-[2rem] md1090:text-center" >
          <i className="fa-solid fa-quote-right text-[8rem] text-[#FBB042] "></i>
          <h2 className="font-bold text-[24px] mt-[2rem] leading-tight min700:text-[2.4rem]">
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
