import { Download } from "lucide-react";
import React from "react";

const TakeYourBrowser = () => {
  return (
    <div className="flex justify-center  items-center  lg:w-full">
      <div className="bg-blue-600 lg:w-[85%] h-[35rem] text-white flex flex-col p-[3rem] items-center justify-center rounded-lg ">
        <h1 className="lg:text-6xl lg:w-[35rem] sm:w-[23rem] sm:leading-9 sm:text-[2.5rem] text-center mb-6 font-bold">
          {" "}
          Take your browser with you{" "}
        </h1>
        <p className="lg:text-[1.2rem] sm:w-[20rem] mb-6 text-gray-300 text-center w-[45rem]">
          Download Chrome on your mobile device or tablet and sign into your
          account for the same browser experience, everywhere.
        </p>
        <button className="lg:text-2xl text-blue-600 bg-white flex items-center justify-center px-8 py-4 rounded-full">
          <Download /> Download chrome
        </button>
      </div>
    </div>
  );
};

export default TakeYourBrowser;
