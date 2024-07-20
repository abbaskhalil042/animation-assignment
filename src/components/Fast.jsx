import { FileSpreadsheet, Gauge } from "lucide-react";
import React from "react";

import video from "../assets/non-chrome.webm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Fast = () => {
   
    useGSAP(() => {
        gsap.from(".video", {
          scale: 0.5,
          opacity: 0,
          diration: 0.5,
          scrollTrigger: {
            trigger: ".video",
            start: "top center",
            end: "bottom 100%",
            markers: true,
            pin: true,
            scrub: 1,
          },
        });
      });
  return (
    <section className="h-[700px]">
      <div className="text flex flex-col justify-center text-6xl font-bold mt-[5rem] items-center">
        <h1 className="flex ">
          The
          <span className="text-green-600 bg-green-100 px-[1.8rem] py-[.6rem] rounded-full m-2 flex text-5xl font-medium justify-center items-center  ">
            <Gauge className="mr-2" size={35} /> fast
          </span>
          way to do <br />
        </h1>
        things online
      </div>
      <div className="image mt-8 w-[100%] flex justify-center items-center">
        {/* <p className="relative">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nisi laborum laboriosam quod in distinctio corrupti, itaque cupiditate, eveniet veniam ullam. Obcaecati, quaerat tenetur. Facilis beatae sint rerum aspernatur animi.</p> */}
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
