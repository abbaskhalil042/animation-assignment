import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <h1 className="text-6xl font-bold m-10 sm:text-[2.3rem] sm:text-center sm:w-[23rem]">
        Frequently asked questions
      </h1>

      <div className=" ">
        <div className="flex justify-between items-center sm:mb-[1rem] lg:mb-[6rem] gap-12 text-blue-500">
          <p className="text-3xl sm:text-[1.5rem] sm:w-[25rem] font-bold">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center  sm:mb-[1rem] lg:mb-[6rem] gap-12 text-blue-500">
          <p className="text-3xl font-bold sm:text-[1.5rem] sm:w-[25rem]">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center  sm:mb-[1rem] lg:mb-[6rem] gap-12 text-blue-500">
          <p className="text-3xl font-bold sm:text-[1.5rem]  sm:w-[25rem]">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-[6rem] gap-12 text-blue-500">
          <p className="text-3xl font-bold sm:text-[1.5rem] sm:w-[25rem]">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
