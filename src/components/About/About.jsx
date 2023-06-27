import React from "react";
import ball from "../../imgs/ball.png";
import food from "../../imgs/food.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";
import toy from "../../imgs/toy.png";
import Button from "../Button/Button";
import { aboutAct } from "./aboutAct";
import "./style-about.css";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="section-about relative md1090:flex-col-reverse pt-[10rem]">
        <div className="mt-[10rem] relative md1300:mt-[15rem] md1090:mt-[0]">
          <div>
            <img
              src={toy}
              alt=""
              className="absolute bottom-[1%] left-[45%] md1300:left-[20%] md1300:bottom-[10%] md1300:w-[8rem]  md1090:hidden"
            />
          </div>
          <div>
            <img
              src={ball}
              alt=""
              className="absolute bottom-[60%] left-[60%] animate-spin infinite z-[10] md1090:hidden"
            />
          </div>
          <img
            src={food}
            alt=""
            className="absolute bottom-[10%] left-[60%]  md1300:left-[40%] md1300:-bottom-[10%] w-[30rem] md1300:w-[25rem]
            md1090:hidden"
          />
          <img src={img2} alt="" />
        </div>
        <div className="text-[76px] font-bold max-w-[60rem] leading-tight md1090:text-center md1090:w-[auto] min700:text-[5.2rem]">
          <h2>
            Nós fazemos <br />
            <span className="text-[#FBB042] min700:text-[4.8rem]">Eles felizes</span>
          </h2>
          <p className="text-[1.8rem] text-[#838383]  mt-[1rem] mr-[9rem] min1090:mr-0 min700:text-[1.5rem] min700:mx-[2rem]">
            Desde o momento em que nossos amigos farejam o caminho pela porta
            pela manhã até que abanam suas caudas cansadas, mas satisfeitas à
            tarde, nós atendemos à sua natureza.
          </p>
          <div className="flex md1090:justify-center">
            <Button text="Reserve Agora" />
          </div>
        </div>
      </section>
      <section className="mt-[10rem] relative section">
        <div className="flex gap-[2rem] items-center justify-between md1090:flex-col">
          <div className="w-[45rem] md1090:w-[auto] md1090:mx-[auto]">
            {/* Title */}
            <div className="text-[76px] font-bold w-[60rem] leading-tight md1090:text-center md1090:w-[auto] md1090:mx-[auto] min700:text-[5.2rem]">
              <h2 className="">
                Atividades e
                <span className="text-center text-[#FBB042]  min700:text-[4.8rem]">
                  {" "}
                  <br />
                  Exercicios
                </span>
              </h2>
            </div>
            {/* Description */}
            <p className="text-[16px] text-[#838383]  mt-[1rem] font-bold md1090:text-center md1090:w-[auto] md1090:mx-[auto] min700:text-[1.5rem] min700:mx-[2rem]">
              Nossos filhotes e outros cães muito ativos têm muito espaço para
              correr e brincar, além de cobertores confortáveis.
            </p>
            {/* Icons */}
            <div className=" flex gap-[6.5rem] justify-start my-auto flex-wrap mt-[4rem] md1090:justify-center min375:mx-[2rem] min375:flex-wrap">
              {aboutAct.map((value, index) => (
                <div
                  className="flex flex-col justify-center items-center gap-[0.5rem]"
                  key={index}>
                  <i className={`fa-solid ${value.icon}  text-[3.5rem] min700:text-[2.8rem]`}></i>
                  <p className="text-[2rem] min700:text-[1.6rem]">{value.title}</p>
                </div>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex gap-[2rem] mt-[2rem] md1090:justify-center min375:mx-[2rem] min375:flex-wrap">
              <Button text="Veja mais" />
              <Button text="Reserve Agora" />
            </div>
          </div>
          {/* Main Image */}
          <div className="">
            <img src={img3} alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
