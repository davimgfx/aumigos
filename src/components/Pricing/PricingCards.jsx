import React from "react";
import Button from "../Button/Button";
import "./style-pricingcards.css";
const PricingCards = () => {
  return (
    <div className="flex justify-center items-center mt-[1rem]">
      <div>
        <div className="justify-center flex-col text-center items-center py-[2rem]  min-w-[300px] h-[530px] bg-[#F2F2F4] rounded-[3rem]">
          <h2 className="text-[25px] font-bold leading-tight">
            Plano <br />
            <span className="text-[34px] text-[#FBB042]">Diário</span>
          </h2>
          <p className="text-[13px] text-[#838383] font-bold px-[1.5rem] py-[0.1]">
            Durante um dia inteiro, seus cães e gatos serão mimados e cuidados
            por nossa equipe dedicada.
          </p>
          <h2 className="text-[4rem] font-bold">R$ 50,00</h2>
          <div className="flex justify-center"></div>
          <ul className="my-[1rem] text-left flex items-center flex-col font-bold mx-[auto]">
            <li className="text-[14px] gap-[1rem] flex flex-col mr-[3.6rem]">
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Banho</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Comida</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Piscina</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Brincadeiras</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Das 9h até 16h</p>
              </div>
            </li>
            <Button text="Assine Agora" />
          </ul>
        </div>
      </div>

      <div>
        <div className="flex justify-center flex-col text-center items-center py-[2rem] min-w-[300px] h-[580px] bg-[#F2F2F4] rounded-[3rem] main-card">
          <h2 className="text-[25px] font-bold leading-tight">
            Plano <br />
            <span className="text-[34px] text-white">Mensal</span>
          </h2>
          <p className="text-[13px] text-[#d8d8d8] font-bold px-[1.5rem] py-[0.1]">
            Com nosso Plano Mensal, seu animal de estimação pode desfrutar de
            uma estadia prolongada com todo o conforto e cuidado necessário.
          </p>
          <h2 className="text-[4rem] font-bold text-white">R$ 250,00</h2>
          <div className="flex justify-center"></div>
          <ul className="my-[1rem] text-left flex items-center flex-col font-bold mx-[auto]">
            <li className="text-[14px] gap-[1rem] flex flex-col mr-[3.2rem]">
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[#FBB042] bg-[white] p-[0.5rem] rounded-full"></i>
                <p>Banho</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[#FBB042] bg-[white] p-[0.5rem] rounded-full"></i>
                <p>Comida</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[#FBB042] bg-[white] p-[0.5rem] rounded-full"></i>
                <p>Piscina</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[#FBB042] bg-[white] p-[0.5rem] rounded-full"></i>
                <p>Brincadeiras</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[#FBB042] bg-[white] p-[0.5rem] rounded-full"></i>
                <p>Das 8h até 16h</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[#FBB042] bg-[white] p-[0.5rem] rounded-full"></i>
                <p>2 vezes por semana</p>
              </div>
            </li>
            <div className="flex items-center">
              <p className=" mt-[2rem] text-[1.4rem] btn btn-main-price py-[1.2rem] px-[1.8rem] bg-white border-[white] border-solid font-[800] border-2 rounded-r-[2rem] rounded-b-[2rem] text-[#FBB042] ">
                Assine Agora
              </p>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <div className="justify-center flex-col text-center items-center py-[2rem]  min-w-[300px] h-[530px] bg-[#F2F2F4] rounded-[3rem]">
          <h2 className="text-[25px] font-bold leading-tight">
            Plano <br />
            <span className="text-[34px] text-[#FBB042]">3 Meses</span>
          </h2>
          <p className="text-[13px] text-[#838383] font-bold px-[1.5rem] py-[0.1]">
            É a escolha ideal para aqueles que desejam uma solução completa e
            conveniente para o cuidado de seus cães e gatos.
          </p>
          <h2 className="text-[4rem] font-bold">R$ 650,00</h2>
          <div className="flex justify-center"></div>
          <ul className="my-[1rem] text-left flex items-center flex-col font-bold mx-[auto]">
            <li className="text-[14px] gap-[1rem] flex flex-col mr-[3.6rem]">
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Banho</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Comida</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Piscina</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Brincadeiras</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>Das 8h até 16h</p>
              </div>
              <div className="flex gap-[0.5rem]">
                <i className="fa-solid fa-check text-[white] bg-[#FBB042] p-[0.5rem] rounded-full"></i>
                <p>2 vezes por semana</p>
              </div>
            </li>
            <Button text="Assine Agora" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
