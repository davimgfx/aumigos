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
      <section id="about" className="section-about relative">
        <div className="mt-[10rem] relative md1300:mt-[15rem]">
          <div>
            <img
              src={toy}
              alt=""
              className="absolute bottom-[1%] left-[45%] md1300:left-[20%] md1300:bottom-[10%] md1300:w-[8rem]"
            />
          </div>
          <div>
            <img
              src={ball}
              alt=""
              className="absolute bottom-[60%] left-[60%] animate-spin infinite z-[10]"
            />
          </div>
          <img
            src={food}
            alt=""
            className="absolute bottom-[10%] left-[60%]  md1300:left-[40%] md1300:-bottom-[10%] w-[30rem] md1300:w-[25rem]"
          />
          <img src={img2} alt="" />
        </div>
        <div className="text-[76px] font-bold max-w-[60rem] leading-tight">
          <h2>
            Nós fazemos <br />
            <span className="text-[#FBB042]">eles felizes</span>
          </h2>
          <p className="text-[16px] text-[#838383]  mt-[1rem] ">
            Desde o momento em que nossos amigos farejam o caminho pela porta
            pela manhã até que abanam suas caudas cansadas, mas satisfeitas à
            tarde, nós atendemos à sua natureza.
          </p>
          <Button text="Reserve Agora" />
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
            <div className=" flex gap-[6.5rem] justify-start my-auto flex-wrap mt-[4rem]">
              {aboutAct.map((value, index) => (
                <div
                  className="flex flex-col justify-center items-center gap-[0.5rem]"
                  key={index}>
                  <i className={`fa-solid ${value.icon}  text-[3.5rem]`}></i>
                  <p className="text-[2rem]">{value.title}</p>
                </div>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex gap-[2rem] mt-[2rem]">
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
