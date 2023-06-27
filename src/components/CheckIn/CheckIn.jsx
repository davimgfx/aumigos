import React from "react";
import img5 from "../../imgs/img5.png";
import Button from "../Button/Button";
const CheckIn = () => {
  return (
    <section className="mt-[10rem] relative section">
      <div className="flex gap-[2rem] items-center justify-between md1090:flex-col ">
        <div className="w-[45rem]  md1090:text-center ">
          {/* Title */}
          <div className="text-[76px] font-bold w-[60rem] leading-tight md1090:w-auto md1090:mx-[2rem]">
            <h2 className="">
              Hora <br className="hidden md1090:block"/>do
              <span className="text-center text-[#FBB042]">
                {" "}
                <br className="md1090:hidden"/>
                Check In
              </span>
            </h2>
          </div>
          {/* Description */}
          <div className="flex gap-[2rem]  mt-[2.5rem] md1090:justify-center md1090:mt-0">
            <i class="fa-solid fa-clock text-[3.5rem] md1090:hidden"></i>
            <div>
              <h2 className="font-bold text-[24px] leading-tight text-[#FBB042]">
                Das 8h até 22h
              </h2>
              <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold">
                Os horários para deixar as coisas são após as 8h da manhã e a
                coleta é feita antes das 10h da manhã no dia de retorno.
              </p>
            </div>
          </div>
          <div className="flex gap-[2rem]  mt-[2.5rem]">
            <i class="fa-solid fa-baseball text-[3.5rem] md1090:hidden"></i>
            <div>
              <h2 className="font-bold text-[24px] leading-tight text-[#FBB042]">
                Brinquedos Favoritos
              </h2>
              <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold">
                Lembre-se de levar os brinquedos favoritos do seu animalzinho.
              </p>
            </div>
          </div>
          {/* Icons */}

          {/* Buttons */}
          <div className="flex gap-[2rem] mt-[2rem] md1090:justify-center">
            <Button text="Agende sua visita" />
          </div>
        </div>
        {/* Main Image */}
        <div className="">
          <img src={img5} alt="" className="w-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default CheckIn;
