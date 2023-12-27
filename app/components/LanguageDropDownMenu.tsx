import { useState, useEffect, useRef } from "react";
import { chooseLan } from "../i18n";

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
        className={`inline-flex items-center justify-center gap-x-1.5 rounded-[10px] bg-white px-3 py-2 font-sfpro text-[15px] text-sm font-bold ring-gray-300 ring-transparent ${
          isOpen ? "text-sky-400" : "text-black"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.19526 5.85194C4.04186 7.05044 3.33268 8.6795 3.33268 10.4742C3.33268 14.1561 6.31745 17.1409 9.99935 17.1409C10.9 17.1409 11.759 16.9623 12.5428 16.6385C12.6386 16.0131 12.4283 15.413 12.3423 15.203C12.151 14.7367 11.5194 13.9394 10.4651 12.8332C10.1837 12.5374 10.2018 12.3105 10.3023 11.6361L10.3139 11.56C10.3823 11.098 10.4969 10.825 12.0512 10.5782C12.8408 10.453 13.0484 10.7686 13.3363 11.2056C13.3681 11.254 13.3999 11.3015 13.4325 11.3491C13.7059 11.749 13.9085 11.8404 14.2145 11.9795C14.3516 12.0417 14.5227 12.1201 14.7519 12.2504C15.2953 12.5609 15.2953 12.9115 15.2953 13.6802V13.7674C15.2953 14.0937 15.2633 14.3802 15.2132 14.6291C16.1225 13.4896 16.666 12.0454 16.666 10.4742C16.666 7.72494 15.0018 5.36437 12.6259 4.34489C12.1649 4.65598 11.5325 5.09692 11.3118 5.3992C11.199 5.55369 11.0395 6.34225 10.5208 6.40734C10.3848 6.42439 10.2025 6.41244 10.0093 6.40001C9.49143 6.36635 8.78285 6.32092 8.55601 6.93666C8.41201 7.32687 8.38668 8.38624 8.8526 8.93612C8.92718 9.02395 8.9416 9.18645 8.89093 9.36878C8.82435 9.6082 8.68985 9.75387 8.64793 9.78395C8.5676 9.73778 8.40735 9.55178 8.29883 9.4252C8.0373 9.12128 7.71106 8.74281 7.28932 8.62567C7.13597 8.58323 6.9674 8.54809 6.80391 8.51367C6.34635 8.41776 5.82804 8.30865 5.70761 8.05172C5.6197 7.86354 5.62008 7.60438 5.62042 7.33057C5.62042 6.98354 5.62042 6.59111 5.45042 6.20967C5.38473 6.06204 5.29676 5.94459 5.19526 5.85194ZM9.99935 18.8075C5.39697 18.8075 1.66602 15.0765 1.66602 10.4742C1.66602 5.87183 5.39697 2.14087 9.99935 2.14087C14.6017 2.14087 18.3327 5.87183 18.3327 10.4742C18.3327 15.0765 14.6017 18.8075 9.99935 18.8075Z"
            fill={isOpen ? "#42ADE2" : "black"}
          />
        </svg>
        {selectedLang}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.4946 9.59077L19.4996 9.53277V9.41477L19.4946 9.35677L19.4856 9.29677L19.4756 9.24477L19.4436 9.13677L19.4166 9.06977L19.3466 8.93777L19.2816 8.84777L19.2086 8.76677L19.1146 8.68377L19.0376 8.62977L18.9416 8.57577L18.9056 8.55877L18.8386 8.53177L18.7306 8.49977L18.6776 8.48977L18.6176 8.47977L18.5606 8.47577L18.5016 8.47377L6.50163 8.47377C5.64963 8.47377 5.20463 9.45977 5.71863 10.0968L5.79463 10.1808L11.7946 16.1808C11.9668 16.3529 12.1959 16.4564 12.439 16.4717C12.682 16.4869 12.9222 16.413 13.1146 16.2638L13.2086 16.1808L19.2086 10.1808L19.2916 10.0868L19.3456 10.0098L19.3996 9.91377L19.4166 9.87777L19.4436 9.81077L19.4756 9.70277L19.4856 9.64977L19.4956 9.58977L19.4946 9.59077Z"
            fill={isOpen ? "#42ADE2" : "black"}
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
