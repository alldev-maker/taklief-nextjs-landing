import React, { useState, useEffect, useRef } from "react";
import { chooseLan } from "../i18n";
import Image from "next/image";

const languages = [
  { name: "English", lang: "EN" },
  { name: "Arabic", lang: "عربي" },
  { name: "Hindi", lang: "HI" },
  { name: "Urdu", lang: "UR" },
];

const LanguageDropdownMenu = ({ lang }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  const [selectedLang, setSelectedLang] = useState("EN");

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
        className="inline-flex items-center justify-center gap-x-1.5 rounded-[10px] bg-white px-3 py-2 font-sfpro text-[15px] text-sm font-bold text-black ring-gray-300 ring-transparent hover:text-sky-400 focus:text-sky-400"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Image src="/earth-line 1.svg" alt="earth" width={20} height={20} />
        {selectedLang}
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
        <div className="absolute right-4 z-10 mt-2 min-w-[170px] origin-top-right rounded-[10px] border border-[#C5CDD9] bg-white sm:min-w-[308px]">
          <div className="grid h-full w-full grid-cols-2 items-start gap-5 px-5 py-2.5 text-left">
            {languages.map((language, index) => (
              <button
                key={index}
                className={`text-left font-sfpro text-[15px] font-normal ${
                  selectedLang === language.lang ? "text-black" : "text-sky-400"
                }`}
                onClick={() => {
                  chooseLan(language.lang);
                  setSelectedLang(language.lang);
                  toggleMenu();
                }}
              >
                {language.name}
              </button>
            ))}

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

export default LanguageDropdownMenu;
