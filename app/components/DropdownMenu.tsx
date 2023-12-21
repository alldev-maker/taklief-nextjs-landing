import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const DropdownMenu = ({ text }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event: any) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current!.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add a click event listener to the document
  useEffect(() => {
    document.addEventListener("click", closeMenu);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-sfpro text-[15px] text-sm font-bold  text-black ring-gray-300 ring-transparent hover:text-sky-400 focus:text-sky-400"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {text}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 min-w-[308px]  origin-top-right rounded-[10px] bg-white p-5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className=" flex flex-col items-start space-y-2 text-left">
            <Link
              href="/tasker-principle"
              className=" font-sfpro text-[15px] font-bold text-sky-400"
            >
              Tasker Principles
            </Link>
            <Link
              href="/poster-principle"
              className=" font-sfpro text-[15px] font-bold text-sky-400"
            >
              Poster Principles
            </Link>
            <Link
              href="/community-guideline"
              className=" font-sfpro text-[15px] font-bold text-sky-400"
            >
              Community Guidelines
            </Link>
            <Link
              href="/when-will-i-get-paid"
              className=" font-sfpro text-[15px] font-bold text-sky-400"
            >
              When will I get paid ?
            </Link>
            <Link
              href="/release-payment"
              className=" font-sfpro text-[15px] font-bold text-sky-400"
            >
              Client hasn't released payment yet!
            </Link>
            {/* <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </form> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
