import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#f8f9fa] p-3 shadow-md flex  items-center justify-start  ">
      <div className="flex mr-10">
        <img
          className="w-[134px] h-[40px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Google_Chrome_logo_and_wordmark_%282015%29.png/640px-Google_Chrome_logo_and_wordmark_%282015%29.png"
          alt=""
        />
      </div>
      <div className="flex ">
        <ul className="flex gap-8 font-medium text-gray-700 ">
          <li>Home</li>
          <li className="tracking-tighter">
          The Browser by Google</li>
          <select id="dropdown" name="dropdown">
            <option value="option1">Features</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <li>
          
            <select id="dropdown" name="dropdown">
              <option value="option1">Support</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
