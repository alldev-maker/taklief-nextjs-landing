import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import i18n from "../../i18n";
import DropdownMenu from "../DropdownMenu";
import LanguageDropdownMenu from "../LanguageDropDownMenu";

const navList = [
  "home",
  "tasker_principle",
  "poster_principle",
  "community_guideline",
];

const Header = () => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <header>
      <nav className="fixed top-0 z-30 w-full border-b border-[#F5F7FA] bg-white py-4 lg:py-5">
        <div className="container flex flex-wrap items-center justify-between px-4">
          <ul className="text-black-500 flex items-center ">
            <Link
              href="/"
              className={
                "relative flex h-full cursor-pointer items-center text-[17px] text-base" +
                (pathname === "/"
                  ? " font-bold text-sky-400 "
                  : " text-black-500 ")
              }
            >
              {t("home")}
            </Link>
            <li
              className={
                "relative ml-[15px] flex h-full cursor-pointer items-center text-[17px] text-base" +
                (pathname === "/"
                  ? " font-bold text-sky-400 "
                  : " text-black-500 ")
              }
            >
              <DropdownMenu text={t("more")} />
            </li>
          </ul>

          <div className="flex items-center justify-end font-medium sm:ml-4 lg:ml-8">
            <LanguageDropdownMenu
              lang={i18n.language}
              // chooseLanguage={switchLan}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
