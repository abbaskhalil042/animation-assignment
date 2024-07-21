import React, { useEffect, useState } from "react";
import chrome from "../assets/chrome.png";
const Hero = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center  justify-center mt-24">
      <div className="flex flex-col items-center">
        <img className="w-16 h-16" src={chrome} alt="" />
        <div className="lg:text-[4rem] lg:W-[2rem] text-[2.8rem] leading-[3rem]  text-center font-bold lg:leading-[4.6rem]">
          The browser <br /> built to be yours
        </div>
      </div>
      <div
        className={`mt-10 w-[34%] border-none hidden lg:block ${
          isFixed
            ? "fixed top-9 left-1/2 transform -translate-x-1/2 z-40"
            : "mx-auto"
        }`}
      >
        <ul className="flex border-t-1 shadow-custom justify-evenly items-center border-gray-300 font-medium p-2 rounded-full bg-white">
          <li className="text-center hover:bg-gray-100 rounded-full p-2">
            <a href="#">Updates</a>
          </li>
          <li className="text-center hover:bg-gray-100 rounded-full p-2">
            <a href="#">Yours</a>
          </li>
          <li className="text-center hover:bg-gray-100 rounded-full p-2">
            <a href="#">Fast</a>
          </li>
          <li className="text-center hover:bg-gray-100 rounded-full p-2">
            <a href="#">By Google</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-6">
        <p>
          Need the Chrome installer?
          <span className="text-blue-600"> Download here </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
