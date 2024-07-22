import { FileSpreadsheet, Gauge } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import video from "../assets/non-chrome.webm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Fast = () => {
  // useGSAP(() => {
  //   gsap.from(".video", {
  //     scale: 0.3,
  //     opacity: 0,
  //     diration: 0.5,
  //     scrollTrigger: {
  //       trigger: ".video",
  //       start: "20% center",
  //       end: "bottom 40%",
  //       // markers: true,
  //       pin: true,
  //       scrub: 3,
  //     },
  //   });
  // });

  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      scale: 1,
      opacity: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "top -150%",
        scrub: true,
      },
    });

    gsap.to(videoRef.current, {
      scale: 0.5,
      // opacity: 0,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "top -150%",
        scrub: 3,

   
      },
    });
  }, []);
  return (
    <section className="h-[50rem] lg:block sm:hidden">
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
      {/* <div className=" image w-[100%] flex justify-center items-center"> */}
      {/* <div className="w-[50rem] mt-[3rem]"> */}
      {/* <p className="lg:relative lg:block sm:hidden text-[1.5rem] font-medium w-[]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dicta aspernatur omnis quia hic inventore illo doloremque nulla
            necessitatibus, voluptatibus eum eaque esse praesentium explicabo
            voluptas molestias quam beatae est!
          </p> */}
      {/* </div> */}
      {/* <div> */}
      {/* <video
            ref={textRefs}
            loop autoPlay muted
            className="lg:left-[10rem] lg:top-[475rem] video lg:absolute rounded-xl w-[70rem] h-[35rem]"
            src={video}
          ></video> */}
      {/* </div> */}

      <div className="container w-[100%] mt-[6rem] ">
        <div className="video-container" ref={videoRef}>
          <video
            className=" z-10 absolute lg:w-full w-[80rem] h-[35rem] left-[10rem] "
            src={video}
            autoPlay
            loop
            muted
            width="100%"
          />
        </div>
        <div
          className="text-container m-auto w-[50rem] lg:ml-[20rem] flex justify-center items-center"
          ref={textRef}
        >
          <p className="lg:relative lg:block sm:hidden text-[1.5rem] font-medium w-full m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dicta aspernatur omnis quia hic inventore illo doloremque nulla
            necessitatibus, voluptatibus eum eaque esse praesentium explicabo
            voluptas molestias quam beatae est!
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Fast;
