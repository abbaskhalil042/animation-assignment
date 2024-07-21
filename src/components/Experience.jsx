import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Experience = () => {
  useGSAP(() => {
    gsap.from(".img-extension", {
      scale: 0.5,
      opacity: 0,
      diration: 4,

      scrollTrigger: {
        trigger: ".img-extension",
        scrub: true,
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        pin: true,
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <section className=" flex jusctify-between m-auto lg:flex-row sm:flex-col sm-m-auto  mt-16 ">
      <div className="lg:w-[30%] flex flex-col jusctify-start items-center flex-1 mt-16">
        <h1 className="text-5xl font-medium w-[19rem] tracking-wide  mb-5">
          Extend your experience
        </h1>
        <p className="mt-2 w-[20rem] font-medium text-gray-500 ">
          From shopping and entertainment to productivity, find extensions to
          improve your experience in the Chrome Web Store.
        </p>

        <button className="text-blue-600 mt-10 bg-blue-100 p-[.7rem] rounded-full font-medium">
          Explore extention
        </button>
      </div>
      <div className="lg:w-[60%]  ">
        <img
          id=""
          className="relative"
          src="https://www.google.com/chrome/static/images/dev-components/extensions-ui-2x.png"
          alt=""
        />
        <div className="lg:block sm:hidden">
          <img
            className="img-extension sm:left-[2rem] sm:top-[373rem] absolute lg:top-[303rem] lg:left-[37.8rem]"
            src="https://www.google.com/chrome/static/images/dev-components/extensions-shop.png"
            alt=""
          />
          <img
            className="img-extension absolute sm:left-[30rem] sm:top-[363rem] sm:w-[20%] lg:w-[10rem] lg:top-[295rem] lg:left-[70rem]"
            src="https://www.google.com/chrome/static/images/dev-components/extensions-icon.png"
            alt=""
          />
          <img
            className="img-extension absolute sm:top-[378rem] sm:right-[3rem] lg:top-[310rem] lg:right-[2rem]"
            src="https://www.google.com/chrome/static/images/dev-components/extensions-video.png"
            alt=""
          />
          <img
            className="img-extension absolute sm:top-[390rem] sm:right-[10rem] lg:top-[322rem] lg:right-[10rem]"
            src="https://www.google.com/chrome/static/images/dev-components/extensions-paint.png"
            alt=""
          />

          <img
            className="img-extension absolute sm:top-[390rem] sm:left-[10rem] lg:top-[322rem] lg:left-[45rem]"
            src="https://www.google.com/chrome/static/images/dev-components/extensions-person.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
