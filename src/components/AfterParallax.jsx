import React from "react";

const AfterParallax = () => {
  return (
    <section className="flex mt-16 items-center justify-around flex-col m-[2rem] gap-[2rem] sm:flex-col lg:flex-row ">
      <div className="lg:w-[40%] w-[90%] " >
        <img
          className="rounded-lg "
          src="https://www.google.com/chrome/static/images/v2/accordion-timed/tab-sync-2x.webp"
          alt=""
        />
      </div>
      <div className="accordian lg:w-[40%] flex flex-col ">
        <h2 className="text-3xl font-bold">Customise your Chrome</h2>
        <div className="mt-5">
          <h2 className="text-3xl font-bold" >Browse across devices</h2>
          <p className="mt-2 w-[19rem] font-medium text-gray-500">
            Sign in to Chrome on any device to access your bookmarks, saved
            passwords and more.
          </p>
          <h2 className="text-3xl font-bold">Browse across devices</h2>
          <p className="mt-2 w-[19rem] font-medium text-gray-500">
            Sign in to Chrome on any device to access your bookmarks, saved
            passwords and more.
          </p>
          <button className="text-blue-600 mt-5 bg-blue-100 p-[.7rem] rounded-full font-medium">Save time with autofill</button>
        </div>
      </div>
    </section>
  );
};

export default AfterParallax;
