import React from "react";
import logo from "../../imgs/logo.png";
import Button from "../Button/Button.jsx";
import { footerIcons } from "./footerInfo.js";
import "./style-footer.css";
const Footer = () => {
  return (
    <section className="mt-[5rem]" id="footer">
      <div className="flex justify-between flex-wrap mx-[8rem] md1300:gap-[4rem] md1300:justify-center min700:items-center min700:mx-[2rem]">
        <div className="flex flex-col gap-[2rem] items-center min700:items-start">
          <img src={logo} alt="logo" className="w-[22rem] mx-auto" />
          <div className="flex gap-[1.6rem] items-center min375:flex-wrap min375:justify-center">
            {footerIcons.map((icon, index) => (
              <i
                className={`fa-brands ${icon.icon} icon-footer`}
                key={index}></i>
            ))}
          </div>
        </div>
        <div className="min700:items-center min700:flex min700:flex-col min375:text-center">
          <h2 className="font-bold text-[24px] leading-tight text-[#FBB042] mt-[0.2rem]">
            Local
          </h2>
          <p className="font-[600] text-[18px]  leading-tight text-[#838383] mt-[2rem]">
            Av. Tancredo Neves, 3133
          </p>
          <p className="font-[600] text-[18px]  leading-tight text-[#838383]">
            Caminho das Árvores, <br className="hidden min375:block" />
            Salvador - BA,
          </p>
          <p className="font-[600] text-[18px]  leading-tight text-[#838383]">
            41820-021
          </p>
          <h2 className="font-bold text-[24px] mt-[2rem] leading-tight text-[#FBB042]">
            Aberto
          </h2>
          <p className="font-[600] text-[18px]  leading-tight text-[#838383] mt-[2rem] min375:text-center">
            Seg - Dom: <br className="hidden min375:block" />
            8:00h - 16:00h
          </p>
        </div>
        <div className="min700:items-center min700:flex min700:flex-col  min375:text-center">
          <h2 className="font-bold text-[24px] leading-tight text-[#FBB042]">
            Outros Links
          </h2>
          <p className="font-[600] text-[18px] mt-[1.3rem] leading-tight text-[#838383]">
            Hospedagem para Cães
          </p>
          <p className="font-[600] text-[18px] mt-[1.3rem] leading-tight text-[#838383]">
            Hospedagem para Gatos
          </p>
          <p className="font-[600] text-[18px] mt-[1.3rem] leading-tight text-[#838383]">
            Banho e Tossas Profissionais
          </p>
          <p className="font-[600] text-[18px] mt-[1.3rem] leading-tight text-[#838383]">
            Taxi Drivers para Pets
          </p>
          <p className="font-[600] text-[18px] mt-[1.3rem] leading-tight text-[#838383]">
            Itens para seu Pet
          </p>
        </div>
        <div className="min700:items-center min700:flex min700:flex-col">
          <h2 className="font-bold text-[24px] leading-tight text-[#FBB042] min375:text-center">
            Noticias <br className="hidden min375:block" />e Promoções
          </h2>
          <input
            type="text"
            className="border-solid border-[#838383] border-2 rounded-full w-[16rem] h-[4rem] mt-[1rem] indent-[2rem] text-[1.6rem] focus:border-[#FBB042]"
            placeholder="Seu email"
          />
          <Button text="Não Perca Isso" />
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9060539482575!2d-38.455251!3d-12.977860300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71616510cac211f%3A0xd5a41097a534a48b!2sSalvador%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1687543957589!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        loading="lazy"
        className="mt-[2rem]"></iframe>
    </section>
  );
};

export default Footer;
