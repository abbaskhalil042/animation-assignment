import { ArrowDown01, Clock, Clock1 } from "lucide-react";
import React from "react";
import chrome from "../assets/chrome.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DiscoverSec = () => {
  useGSAP(() => {
    gsap.from(".icon-image", {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <section className="mt-10 ">
      <div className=" flex flex-col sm:m-auto justify-center lg:text-6xl font-bold mt-[5rem] items-center">
        <h1 className="flex sm:text-[2.5rem] flex-col text-center ">
          Discovery the latest
          <span className="text-green-600 bg-green-100  lg:px-[1.8rem] lg:py-[.6rem] rounded-full sm:h-[3rem] px-[1rem] py-[.3rem] lg:m-2 flex lg:text-5xl sm:w-fit md:w-fit  font-medium  sm:text-[2rem] justify-center items-center  ">
            <Clock1 className="mr-2" size={25} /> updates
          </span>
          from chrome <br />
        </h1>
    
      </div>

      <div className="flex sm:m-auto lg:flex-row sm:flex-col jusctify-center items-center mt-10">
        <div className="rounded-xl sm:mb-[1rem] sm:w-[90%]  sm:-auto relative right-card lg:w-[42%] m-auto h-[42rem] bg-[#E8F0FE] ">
          <div className=" pl-16 mt-10">
            <p className="mb-5 text-sm ">UPDATES</p>

            <h2 className="text-5xl font-bold">Automatic updates</h2>
            <p className="w-[89%] text-gray-500 text-lg mt-4 mb-4">
              There’s a new Chrome release every four weeks, making it easy to
              have the newest features and a faster, safer web browser.
            </p>
            <a className="text-blue-600 font-medium text-lg " href="#">
              Learn about automatic updates
            </a>
          </div>

          <div>
            <img
              className="icon-image absolute bottom-0 rounded-xl"
              src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates-2x.png"
              alt=""
            />
          </div>
        </div>
        <div className=" relative rounded-xl sm:w-[90%] left-card m-auto lg:w-[42%] flex flex-col float-start h-[42rem] bg-[#FEF7E0]">
          <div className="pl-16 mt-10">
            <p className="mb-5 text-sm">LATEST</p>
            <h2 className="text-5xl font-bold">New from Chrome</h2>
            <p className="w-[80%] text-gray-500 text-lg mt-4 mb-4 ">
              Chrome regularly updates with tools and features that make it
              faster and easier to use.
            </p>
            <a className="text-blue-600 font-medium text-lg " href="#">
              Learn what’s new on Chrome
            </a>
          </div>
          <div>
            <img
              className="absolute  bottom-16 right-14 w-[170px] h-[170px]"
              src={chrome}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSec;
