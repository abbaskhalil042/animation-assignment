import { FileSpreadsheet, Gauge } from "lucide-react";
import React from "react";

import video from "../assets/non-chrome.webm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Fast = () => {
  useGSAP(() => {
    gsap.from(".video", {
      scale: 0.6,
      opacity: 0,
      diration: 0.5,
      scrollTrigger: {
        trigger: ".video",
        start: "20% center",
        end: "bottom 100%",
        // markers: true,
        pin: true,
        scrub: 2,
      },
    });
  });
  return (
    <section className="h-[1000px]">
      <div className="text flex flex-col  sm:text-[2.5rem] justify-center lg:text-6xl font-bold mt-[5rem] items-center">
        <h1 className="flex ">
          The
          <span className="text-green-600 bg-green-100 sm:px-[1rem] lg:px-[1.8rem] lg:py-[.6rem] rounded-full m-2 flex sm:text-3xl lg:text-5xl font-medium justify-center items-center  ">
            <Gauge className="mr-2 sm:w-[2rem]" size={35} /> fast
          </span>
          way to do <br />
        </h1>
        things online
      </div>
      <div className="image lg:mt-8 w-[100%] flex justify-center items-center">
        <video
          autoplay
          className="video rounded-xl w-[70rem] h-[35rem]"
          src={video}
        ></video>
      </div>
    </section>
  );
};

export default Fast;
