import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <h1 className="lg:text-6xl lg:w-full font-bold m-10 sm:text-[2.3rem] sm:text-center sm:w-[23rem]">
        Frequently asked questions
      </h1>

      <div className="sm:p-[1rem]">
        <div className="flex justify-between items-center sm:mb-[1rem] lg:mb-[6rem] gap-12 text-blue-500">
          <p className="lg:text-3xl lg:w-full sm:text-[1.5rem] sm:w-[100%] font-bold">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
      <div className="sm:p-[1rem]">
        <div className="flex justify-between items-center  sm:mb-[1rem] lg:mb-[6rem] gap-12 text-blue-500">
          <p className="lg:text-3xl lg:w-full font-bold sm:text-[1.5rem] sm:w-[100%]">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
      <div className="sm:p-[1rem]">
        <div className="flex justify-between items-center  sm:mb-[1rem] lg:mb-[6rem] gap-12 text-blue-500">
          <p className="lg:text-3xl lg:w-full font-bold sm:text-[1.5rem]  sm:w-[100%]">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
      <div className="sm:p-[1rem]">
        <div className="flex justify-between items-center mb-[6rem] gap-12 text-blue-500">
          <p className="lg:text-3xl lg:w-full font-bold sm:text-[1.5rem] sm:w-[100%]">
            How do I make Chrome my default web browser?
          </p>
          <div className="text-3xl font-bold">+</div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
