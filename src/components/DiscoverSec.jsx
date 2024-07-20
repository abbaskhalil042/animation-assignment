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
    <section className="mt-10">
      <div className="text flex flex-col justify-center text-6xl font-bold items-center">
        <h1 className="flex ">
          discover the latest
          <span className="text-blue-600 bg-blue-100 px-[1.8rem] py-[.6rem] rounded-full m-2 flex text-5xl font-medium justify-center items-center  ">
            <Clock1 className="mr-2" size={35} /> update
          </span>
        </h1>
        from chrome
      </div>

      <div className="flex jusctify-center items-center mt-10">
        <div className="rounded-xl relative right-card w-[42%] m-auto h-[42rem] bg-[#E8F0FE] ">
          <div className=" pl-16 mt-10">
            <p className="mb-5 text-sm">UPDATES</p>

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
        <div className=" relative rounded-xl left-card m-auto w-[42%] flex flex-col float-start h-[42rem] bg-[#FEF7E0]">
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
