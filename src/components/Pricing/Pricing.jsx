import React from "react";
import Button from "../Button/Button";
import PricingCards from "./PricingCards";
import img5 from "../../imgs/img5.png"
const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pt-[10rem]  ">
        <div className="flex justify-start gap-[2rem] mx-[8rem]">
          <div className="w-[45rem]">
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
                Atividades e
                <span className="text-center text-[#FBB042]">
                  {" "}
                  <br />
                  Exercicios
                </span>
              </h2>
            </div>
            {/* Description */}
            <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold">
              Nossos filhotes e outros cães muito ativos têm muito espaço para
              correr e brincar, além de cobertores confortáveis.
            </p>
            {/* Icons */}
            
            {/* Buttons */}
            <div className="flex gap-[2rem] mt-[2rem]">
              <Button text="Veja mais" />
              <Button text="Reserve Agora" />
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
