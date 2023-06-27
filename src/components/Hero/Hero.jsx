import React from "react";
import img1 from "../../imgs/img1.png";
const Hero = () => {
  return (
    <section id="home" className="section section-hero">
      <div className="flex gap-[2rem] items-center justify-between md1090:flex-col md1090:gap-[0]">
        <div className="w-[43rem] md1090:w-[auto] md1090:mt-[10rem]">
          {/* Title */}
          <div className="text-[76px] font-bold w-[60rem]  md1090:w-[auto] md1090:text-center min700:text-[4.8rem]">
            <span className="text-[#FBB042]">Aproveite suas</span> <br />
            <span className="text-center min700:text-[5.2rem]">Férias</span>
          </div>
          {/* SubTitle */}
          <div className="text-[32px] text-[#838383] min700:text-[2.5rem] min700:text-center">
            Enquanto Cuidamos do seu animalzinho
          </div>
          <div className="flex justify-center gap-[2rem] mt-[3.5rem] md1090:mt-[2rem] min375:flex-col">
            <div className=" flex gap-[2rem] items-baseline  my-auto border-t-0 border-b-0 border-l-0  border-2 border-solid border-[#838383] min375:justify-center min375:border-0">
              <i class="fa-solid fa-dog text-[3rem] text-[#838383]  min700:text-[2.5rem]"></i>
              <i class="fa-solid fa-cat text-[5rem] text-[#FBB042] min700:text-[4.5rem]"></i>
              <i class="fa-solid fa-dog text-[8rem] mr-[2rem] min700:text-[6.5rem]"></i>
            </div>
            <div className="my-auto text-[20px] text-center font-[600] min700:text-[1.6rem] ">Aceitamos <br />todos os tamanhos</div>
          </div>
        </div>
        {/* Image */}
        <div className=" ">
          <img src={img1} alt="" className=" " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
