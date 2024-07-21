import { ShieldCheck } from "lucide-react";
import React from "react";

const Safe = () => {
  return (
    <>
      <div className="flex flex-col sm:leading-3 items-center justify-center lg:mt-32 mb-18 ">
        <p className="sm:text-[2.5rem]  text-6xl font-bold flex justify-center items-center ">
         
          Stay
          <span className="text-[#1A73E8] text-3xl ml-3 flex bg-blue-100 justify-center items-center px-[1rem] py-[.5rem] rounded-full ">
            <ShieldCheck  size={35} className="text-[#1A73E8 ] align-middle m-2 "/> Safe
          </span>
        </p>

        <br />
        <p className="text-6xl font-bold sm:text-[2.5rem]"> while you browse</p>
      </div>

      <section className="mt-[3rem]">
        <div className="">
          <div className="first lg:flex-row flex justify-around sm:flex sm:flex-col ">
            <div className="relative sm:mb-[2rem] sm:w-[90%] sm:m-auto bg-[#1A73E8] lg:w-[40%] h-[42rem] rounded-xl text-white p-[4rem]">
              {/* <div> */}

              <a className="text-lg " href="#">
                PASSWORD MANAGER
              </a>
              <h1 className="lg:text-3xl sm:text-[2rem] sm:w-[20rem] font-bold w-[22rem] mt-4 mb-24">
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
                className="absolute lg:top-[14rem] lg:left-[1rem] w-[50rem] h-[25rem] sm:top-[16rem] sm:left-[2rem] object-contain"
                src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2-2x.webp"
                alt=""
              />
              {/* </div> */}
              <div className="absolute bottom-[2rem] right-[2rem] bg-[#E8F0FE] w-[2rem] h-[2rem] flex items-center justify-center  rounded-full p-[2rem] text-center">
                <h1 className="text-3xl font-medium text-blue-600"> +</h1>
              </div>
            </div>
            <div className="relative bg-[#E8F0FE] sm:mb-[2rem]  sm:w-[90%] sm:m-auto lg:w-[40%] lg:h-[36rem] rounded-xl pt-[4rem] flex justify-center">
              <div className="sm:ml-[1rem]  ">
                <p className="text-gray-600 font-medium">SAFETY CHECK</p>
                <h1 className="lg:text-5xl sm:text-[2rem]  font-bold lg:w-[30rem] mt-4 mb-24 sm:leading-10 lg:leading-14">
                  Check your safety level in real time with just one click.
                </h1>
              </div>
              <div className="absolute bottom-[2rem] right-[2rem] bg-[#1A73E8] w-[2rem] h-[2rem] flex items-center justify-center  rounded-full p-[2rem] text-center">
                <h1 className="text-3xl font-medium text-gray-100"> +</h1>
              </div>
            </div>
          </div>

          <div className=" second  lg:flex-row flex justify-around sm:flex-col">
            <div className="relative  mt-[6rem]   sm:w-[90%] sm:mb-[2rem] sm:m-auto lg:w-[40%] lg:h-[36rem] border p-[3rem] rounded-xl border-blue-600 ">
              <p className="text-gray-600  font-medium">
                ENHANCED SAFE BROWSING
              </p>
              <h1 className="lg:text-5xl sm:text-[2rem]  font-bold lg:w-[30rem] mt-4 mb-24 leading-14">
                Browse with the confidence that you're staying safer online.
              </h1>
              <div className="absolute bottom-[2rem] right-[2rem] bg-[#1A73E8] w-[2rem] h-[2rem] flex items-center justify-center  rounded-full p-[2rem] text-center">
                <h1 className="text-3xl font-medium text-gray-100"> +</h1>
              </div>
            </div>
            <div className="relative  sm:w-[90%] sm:h-[40rem] sm:m-auto bg-[#1A73E8] lg:w-[40%] lg:h-[42rem] p-[2rem] rounded-xl text-white">
              <p className="text-white-600 font-medium">PRIVACY GUIDE</p>
              <h1 className="lg:text-4xl sm:text-[2rem] font-bold lg:w-[30rem] mt-4 mb-24 leading-14">
                Keep your privacy under your control with easy-to-use settings.
              </h1>
              <img
                className="lg:w-[20rem] lg:h-[20rem] object-contain"
                src="https://www.google.com/chrome/static/images/v2/gallery/google-safety-2x.webp"
                alt=""
              />
              <div className="absolute bottom-[2rem] right-[2rem] bg-[#E8F0FE] w-[2rem] h-[2rem] flex items-center justify-center  rounded-full p-[2rem] text-center">
                <h1 className="text-3xl font-medium text-blue-600"> +</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Safe;
