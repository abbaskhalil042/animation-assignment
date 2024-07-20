import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`bg-[#f8f9fa] z-50 p-3 shadow-md flex items-center justify-start transition-transform duration-300 ease-in-out fixed top-0 left-0 w-full ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex mr-10">
        <img
          className="w-[134px] h-[40px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Google_Chrome_logo_and_wordmark_%282015%29.png/640px-Google_Chrome_logo_and_wordmark_%282015%29.png"
          alt="Google Chrome"
        />
      </div>
      <div className="flex flex-grow">
        <ul className="flex gap-8 font-medium text-gray-700 w-full">
          <li>Home</li>
          <li className="tracking-tighter">The Browser by Google</li>
          <li>
            <select id="features-dropdown" name="features-dropdown">
              <option value="features">Features</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </li>
          <li>
            <select id="support-dropdown" name="support-dropdown">
              <option value="support">Support</option>
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
