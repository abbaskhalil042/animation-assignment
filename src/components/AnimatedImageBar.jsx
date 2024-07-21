import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gallery1 from "../assets/chrome-gallery-1.webp";
import gallery2 from "../assets/chrome-gallery-2.webp";
import gallery3 from "../assets/chrome-gallery-3.webp";
import gallery4 from "../assets/chrome-gallery-4.webp";
import gallery5 from "../assets/chrome-gallery-5.webp";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedImageBar = () => {
  //   useEffect(() => {
  //     const images = document.querySelectorAll(".image");
  //     const totalWidth = (images.length - 1) * 65 * 16; // Assuming 65rem per image

  //     gsap.to("images", {
  //       transform: "trnaslateX(-500%)",

  //       scrollTrigger: {
  //         trigger: "#section",
  //         scroller: "body",
  //         start: "top  0%",
  //         end: "top -150%",
  //         scrub: 8,
  //         pin: true,
  //       },
  //     });
  //   }, []);

  useGSAP(() => {
    gsap.from(".image", {
      transform: "translateX(20%)",
      scrollTrigger: {
        trigger: "#section",
        scroller: "body",
        start: "top  center",
        end: "top -90%",
        scrub: 1,
        pin: true,
      },
      marginTop: "5rem",

    });
  });


  useGSAP(() => {
    gsap.from("#section", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    });
  });



  return (
    <section
      id="section"
      className="relative main   overflow-hidden overscroll-contain flex flex-grow lg:overflow-hidden "
    >
      <img
        src={gallery1}
        className="image z-10 left-[-60rem] h-[30rem]  absolute lg:right-[20rem] lg:w-[65rem] lg:h-[30rem] "
        alt=""
      />

      <img
        src={gallery2}
        className="image w-[15rem] h-[30rem] image-2 lg:w-full lg:h-[30rem] "
        alt=""
      />
      <img
        src={gallery3}
        className="image image-3 z-10 w-[50rem]  h-[30rem] lg:w-[65rem] lg:h-[30rem] lg:m-15rem]  "
        alt=""
      />
      <img
        src={gallery4}
        className="image image-4 ml-[1rem] h-[30rem] object-contain lg:w-full lg:h-[30rem] shadow shadow-gray-6 mb-10 rounded-lg mr-4 "
        alt=""
      />
      <img src={gallery5} className="image image-5 lg:w-full lg:h-[30rem]" alt="" />
    </section>
  );
};

export default AnimatedImageBar;
