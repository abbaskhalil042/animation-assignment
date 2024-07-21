import { Clock10 } from "lucide-react";
import React from "react";

const Built = () => {

  return (
    <div>
      <div>
        <div className="text flex flex-col justify-center sm:text-center sm:text-[1.5rem] lg:text-6xl font-bold mb-[4rem] items-center">
          <h1 className="flex ">
            discover the latest
            <span className="text-yellow-600 sm:px-[1rem] bg-blue-100 lg:px-[1.8rem] lg:py-[.6rem] rounded-full m-2 flex lg:text-5xl font-medium justify-center items-center  ">
              <Clock10 className="sm:w-[1rem] " size={35} /> update
            </span>
          </h1>
          from chrome
        </div>
      </div>
      <div className="bg-yellow-100 rounded-lg l sm:w-[95%] sm:m-auto">
        <div className="flex lg:pl-[10rem] justify-around items-center pt-[2rem] lg:flex-row sm:flex-col sm:items-center">
          <div>
            <p className="sm:ml-[4rem]">GOOGLE AI</p>{" "}
            <h1 className="lg:text-5xl sm:ml-[4rem] sm:text-[2rem] font-bold lg:w-[28rem]">
              Access AI superpowers while you browse.
            </h1>
          </div>
          <div className="w-[40rem] sm:w-[90%]">
            <p className="text-gray-600 text-1xl lg:w-[28rem] sm:ml-[3rem]">
           
              Google is integrating artificial intelligence to make our products
              more useful. We use AI for features like Search, Google Translate,
              and more, and we’re innovating new technologies responsibly.
            </p>
            <a href="#" className="text-1xl mt-[1rem] text-blue-600 font-medium py-4 sm:ml-[3rem] rounded-full"> Explore Google AI</a>
          </div>
        </div>
        <img
          src="https://www.google.com/chrome/static/images/v2/gallery/ai_desktop-2x.webp"
          alt=""
        />
      </div>

      <div className="mt-[3rem]">
        <div className="first lg:flex-row sm:flex-col flex justify-around ">
          <div className="relative sm:m-auto sm:w-[90%] bg-[#1A73E8] lg:w-[40%] h-[42rem] rounded-xl text-white p-[4rem]">
            {/* <div> */}

            <a className="text-lg " href="#">
              PASSWORD MANAGER
            </a>
            <h1 className="lg:text-3xl sm:text-[1.6rem] font-bold lg:w-[22rem] mt-4 mb-24">
              Use strong passwords on every site.
            </h1>
            {/* </div> */}
            <div className="flex justify-center items-center flex-col gap-1">
              <input
                className="w-[20rem] h-[3.6rem] p-6 rounded-xl"
                type="email"
                placeholder="elisa.backet"
              />

              <input
                className=" w-[20rem] h-[3.6rem] mb-2 p-6 rounded-xl"
                type="password"
                placeholder="........"
              />
            </div>
            {/* <div> */}
            <img
              className="absolute top-[14rem] left-[1rem] w-[50rem] h-[25rem] object-contain"
              src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2-2x.webp"
              alt=""
            />
            {/* </div> */}
            <div className="absolute bottom-[2rem] right-[2rem] bg-[#E8F0FE] w-[2rem] h-[2rem] flex items-center justify-center  rounded-full p-[2rem] text-center">
              <h1 className="text-3xl font-medium text-blue-600"> +</h1>
            </div>
          </div>
          <div className="relative sm:m-auto sm:w-[90%] sm:pl-[2rem] bg-[#E8F0FE] sm:mt-[2rem] sm:h-[25rem] lg:w-[40%] lg:h-[42rem] rounded-xl pt-[4rem] flex justify-center">
            <div className=" ">
              <p className="text-gray-600 font-medium">SAFETY CHECK</p>
              <h1 className="lg:text-5xl font-bold sm:text-[2rem] lg:w-[30rem] mt-4 mb-24 leading-14">
                Check your safety level in real time with just one click.
              </h1>
            </div>
            <div className="absolute bottom-[2rem] right-[2rem] bg-[#1A73E8] w-[2rem] h-[2rem] flex items-center justify-center  rounded-full p-[2rem] text-center">
              <h1 className="text-3xl font-medium text-gray-100"> +</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
