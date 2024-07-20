import React from "react";
import chrome from "../assets/chrome.png";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-7">
      <div className="flex flex-col items-center">
        <img className="w-16 h-16" src={chrome} alt="" />
        <div className="text-[4rem] W-[2rem] text-center font-bold leading-[4.6rem]">
          The browser <br /> built to be yours
        </div>
      </div>
      <div className=" mt-10 w-[34%] border-none sticky">
        <ul className="flex border-t-1  shadow-custom justify-evenly items-center border-gray-300  font-medium p-2 rounded-full">
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
