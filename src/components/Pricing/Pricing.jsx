import React from "react";
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
    </>
  );
};

export default Pricing;
