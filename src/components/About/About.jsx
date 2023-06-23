import React from "react";
import ball from "../../imgs/ball.png";
import food from "../../imgs/food.png";
import img2 from "../../imgs/img2.png";
import toy from "../../imgs/toy.png";
import "./style-about.css";
const About = () => {
  return (
    <section id="about" className="section-about relative">
      <div className="mt-[10rem] relative">
        <div >
          <img src={toy} alt="" className="absolute bottom-[30%] left-[45%] md1300:left-[20%] md1300:bottom-[10%] md1300:w-[8rem]" />
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
          Desde o momento em que nossos amigos farejam o caminho pela porta pela
          manhã até que abanam suas caudas cansadas, mas satisfeitas à tarde,
          nós atendemos à sua natureza.
        </p>

        <div className="flex items-center">
          <p className=" mt-[2rem] text-[1.4rem] btn btn-slide-about py-[1.2rem] px-[1.8rem] bg-[#FBB042] border-[#FBB042] border-solid font-[800] border-2 rounded-r-[2rem] rounded-b-[2rem] text-white">
            Reserve Agora
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
