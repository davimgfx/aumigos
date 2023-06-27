import React from "react";
import Button from "../Button/Button";
import PricingCards from "./PricingCards";
const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pt-[10rem]  ">
        <div className="flex justify-start gap-[2rem] mx-[8rem] md1300:flex-col  min600:mx-[2rem]">
          <div className="w-[52rem] md1300:mx-auto min600:w-[auto]">
            {/* Title */}
            <div className="text-[76px] font-bold leading-tight md1300:text-center min700:leading-[5rem]">
              <span className="text-[#FBB042] min700:text-[5.2rem]">A Melhor</span> <br />
              <span className="text-center min700:text-[4.8rem]">Escolha</span>
            </div>
            {/* SubTitle */}
            <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold md1300:text-center">
              Nossos filhotes e outros cães muito ativos têm muito espaço para
              correr e brincar, além de cobertores confortáveis.
            </p>
            <div className="flex justify-center">
              <Button text="Veja descontos" />
            </div>
          </div>
          {/* PricingCards */}
          <PricingCards />
        </div>
      </section>
    </>
  );
};

export default Pricing;
