import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const DropdownMenu = ({ text, isActive }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  const { t } = useTranslation();

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
        className={`inline-flex items-center justify-center gap-x-1.5 rounded-md bg-white py-2 font-sfpro text-base font-bold ring-gray-300 ring-transparent ${
          isOpen || isActive ? "text-sky-400" : "text-black"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
        >
          <path
            d="M19.4947 9.11665L19.4997 9.05865V8.94065L19.4947 8.88265L19.4857 8.82265L19.4757 8.77065L19.4437 8.66265L19.4167 8.59565L19.3467 8.46365L19.2817 8.37365L19.2087 8.29265L19.1147 8.20965L19.0377 8.15565L18.9417 8.10165L18.9057 8.08465L18.8387 8.05765L18.7307 8.02565L18.6777 8.01565L18.6177 8.00565L18.5607 8.00165L18.5017 7.99965L6.50169 7.99965C5.64969 7.99965 5.20469 8.98565 5.71869 9.62265L5.79469 9.70665L11.7947 15.7067C11.9669 15.8788 12.196 15.9823 12.439 15.9975C12.682 16.0128 12.9223 15.9389 13.1147 15.7897L13.2087 15.7067L19.2087 9.70665L19.2917 9.61265L19.3457 9.53565L19.3997 9.43965L19.4167 9.40365L19.4437 9.33665L19.4757 9.22865L19.4857 9.17565L19.4957 9.11565L19.4947 9.11665Z"
            fill={isOpen || isActive ? "#42ADE2" : "black"}
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute -left-5 z-10 mt-2 min-w-[300px] origin-top-right rounded-[10px] border border-[#C5CDD9] bg-white p-2.5 md:min-w-[320px] md:p-5">
          <div className="flex flex-col items-start gap-2.5 text-left">
            <a
              href="/tasker-principle"
              className="font-sfpro text-[15px] font-bold text-sky-400"
            >
              {t("tasker_principles")}
            </a>
            <a
              href="/poster-principle"
              className="font-sfpro text-[15px] font-bold text-sky-400"
            >
              {t("poster_principles")}
            </a>
            <a
              href="/community-guideline"
              className="font-sfpro text-[15px] font-bold text-sky-400"
            >
              {t("community_guidelines")}
            </a>
            <a
              href="/when-will-i-get-paid"
              className="font-sfpro text-[15px] font-bold text-sky-400"
            >
              {t("when_will_i_get_paid")}
            </a>
            <a
              href="/release-payment"
              className="font-sfpro text-[15px] font-bold text-sky-400"
            >
              {t("client_hasnt_released")}
            </a>
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
