import React from "react";
import img6 from "../../imgs/img6.png";
import Button from "../Button/Button";
const Plan = () => {
  return (
    <section className="pt-[10rem]">
      <div className="flex gap-[2rem]  items-center section-about md1090:flex-col-reverse">
        <div>
          <img src={img6} alt="" />
        </div>
        <div className="mb-[10rem] w-[60rem] pr-[8rem] md1090:pr-0 md1090:w-auto  ">
          <div className="text-[76px] font-bold w-[60rem] leading-tight md1090:text-center md1090:mx-[auto] md1090:w-auto">
            <h2 className="min700:text-[4.8rem]">
              Plenejando
              <span className="text-center text-[#FBB042] min700:text-[5.2rem] ">
                {" "}
                <br />
                Viajar?
              </span>
            </h2>
          </div>
          <h2 className="font-bold text-[24px] mt-[2rem] leading-tight md1090:text-center min700:text-[2.2rem] min700:mx-[2rem]">
            Estimule os preços para os dias que seus animalzinhos irá curtir com
            a gente :)
          </h2>

          {/* Forms */}
          <form className="flex flex-col gap-[2rem] mt-[2rem] md1090:justify-center md1090:items-center">
            {/* Pet */}
            <div className="md1090:w-[100%] md1090:flex md1090:justify-center md1090:flex-col md1090:items-center">
              <label className="font-[600] text-[18px] mt-[2rem] leading-tight text-[#838383]">
                Seu pet
              </label>
              <select className="border-solid border-[#838383]  text-black rounded-full focus:border-[#FBB042] w-[60%] p-[1.5rem] block text-[1.3rem] mt-[1rem] font-bold">
                <option>Selecione</option>
                <option value="dog">Cachorro</option>
                <option value="cat">Gato</option>
              </select>
            </div>

            {/* Services */}
            <div className="md1090:w-[100%] md1090:flex md1090:justify-center md1090:flex-col md1090:items-center">
              <label className="font-[600] text-[18px] leading-tight text-[#838383] ">
                Serviço
              </label>
              <select className="border-solid border-[#838383]  text-black rounded-full focus:border-[#FBB042] w-[60%] p-[1.5rem] block text-[1.3rem] mt-[1rem] font-bold">
                <option>Selecione</option>
                <option value="hosp">Hospedagem</option>
                <option value="shower">Banho</option>
                <option value="all">Hospedagem + Banho</option>
              </select>
            </div>

            {/* Days */}
            <div className="md1090:w-[100%] md1090:flex md1090:justify-center md1090:flex-col md1090:items-center">
              <label className="font-[600] text-[18px] leading-tight text-[#838383] ">
                Dias
              </label>
              <select className="border-solid border-[#838383]  text-black rounded-full focus:border-[#FBB042] w-[60%] p-[1.5rem] block text-[1.3rem] mt-[1rem] font-bold">
                <option>Selecione</option>
                <option value="1day">1 dia</option>
                <option value="2day">2 dias</option>
                <option value="3day">3 dias</option>
                <option value="4day">4 dias</option>
                <option value="5day">5 dias</option>
                <option value="6day">6 dias</option>
                <option value="7day">7 dias</option>
                <option value="8day">8 dias</option>
                <option value="9day">9 dias</option>
                <option value="10day">10 dias</option>
              </select>
            </div>
          </form>
          {/* Total + Button */}
          <div className="flex items-baseline gap-[3rem] md1090:justify-center  min450:flex-col min450:items-center">
            <div
              onClick={() => {
                alert("Hello");
              }}>
              <Button text="Veja os valores" />
            </div>
            <h2 className="font-bold text-[32px] leading-tight text-[#FBB042] ">
              Total: <span className="text-black">R$</span>{" "}
              <span className="text-black">...</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
