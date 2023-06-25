import React from "react";
import img5 from "../../imgs/img5.png";
import Button from "../Button/Button";
import PricingCards from "./PricingCards";
const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pt-[10rem]  ">
        <div className="flex justify-start gap-[2rem] mx-[8rem]">
          <div className="w-[52rem]">
            {/* Title */}
            <div className="text-[76px] font-bold leading-tight">
              <span className="text-[#FBB042]">A melhor</span> <br />
              <span className="text-center">Escolha</span>
            </div>
            {/* SubTitle */}
            <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold">
              Nossos filhotes e outros cães muito ativos têm muito espaço para
              correr e brincar, além de cobertores confortáveis.
            </p>
            <Button text="Veja descontos" />
          </div>
          {/* PricingCards */}
          <PricingCards />
        </div>
      </section>
      <section className="mt-[10rem] relative section">
        <div className="flex gap-[2rem] items-center justify-between">
          <div className="w-[45rem]">
            {/* Title */}
            <div className="text-[76px] font-bold w-[60rem] leading-tight">
              <h2 className="">
                Hora do
                <span className="text-center text-[#FBB042]">
                  {" "}
                  <br />
                  Check In
                </span>
              </h2>
            </div>
            {/* Description */}
            <div className="flex gap-[2rem]  mt-[2.5rem]">
              <i class="fa-solid fa-clock text-[3.5rem]"></i>
              <div>
              <h2 className="font-bold text-[24px] leading-tight text-[#FBB042]">Das 8h até 22h</h2>
                <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold">
                Os horários para deixar as coisas são após as 8h da manhã e a coleta é feita antes das 10h da manhã no dia de retorno.
                </p>
              </div>
            </div>
            <div className="flex gap-[2rem]  mt-[2.5rem]">
              <i class="fa-solid fa-baseball text-[3.5rem]"></i>
              <div>
              <h2 className="font-bold text-[24px] leading-tight text-[#FBB042]">Brinquedos Favoritos</h2>
                <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold">
               Lembre-se de levar os brinquedos favoritos do seu animalzinho.
                </p>
              </div>
            </div>
            {/* Icons */}

            {/* Buttons */}
            <div className="flex gap-[2rem] mt-[2rem]">
              <Button text="Agende sua visita" />
              
            </div>
          </div>
          {/* Main Image */}
          <div className="">
            <img src={img5} alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
