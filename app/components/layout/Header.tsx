import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import i18n from "../../i18n";
import ButtonOutline from "../shared/ButtonOutline";
import navIcon from "../../../public/navIcon.png";
import arabicFl from "../../../public/arabic.png";
import englandFl from "../../../public/england.png";
import hambergerIcon from "../../../assets/hamberger.svg";
import closeIcon from "../../../assets/close.svg";
import DropdownMenu from "../DropdownMenu";
import LanguageDropdownMenu from "../LanguageDropDownMenu";
import Link from "next/link";

const navList = [
  "home",
  "tasker_principle",
  "poster_principle",
  "community_guideline",
];

const Header = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav
        className={
          "fixed top-0 z-30 w-full bg-white py-4 lg:py-5" +
          (scrollActive ? " shadow-md" : "")
        }
      >
        <div className="mx-auto flex max-w-7xl  flex-wrap items-center justify-between px-4">
          {/* <Image
            src={navIcon}
            className="mr-auto h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]"
            alt={"Logo"}
          /> */}

          <ul className="text-black-500 flex items-center ">
            {/* {navList.map((navItem: string) => (
              <li
                key={navItem}
                className={
                  "relative flex h-full cursor-pointer items-center px-3 text-[17px] text-base" +
                  (activeLink === navItem
                    ? " font-bold text-sky-400 "
                    : " text-black-500 ")
                }
              >
                {t(navItem)}
              </li>
            ))} */}
            <Link
              href="/"
              className={
                "relative flex h-full cursor-pointer items-center px-3 text-[17px] text-base" +
                (activeLink === "home"
                  ? " font-bold text-sky-400 "
                  : " text-black-500 ")
              }
            >
              {t("home")}
            </Link>
            <li
              className={
                "relative flex h-full cursor-pointer items-center px-3 text-[17px] text-base" +
                (activeLink === "home"
                  ? " font-bold text-sky-400 "
                  : " text-black-500 ")
              }
            >
              {/* {t("home")} */}
              <DropdownMenu text={t("more")} />
            </li>
          </ul>

          <div className="flex items-center justify-end font-medium sm:ml-4 lg:ml-8">
            {/* <div className="flex cursor-pointer" onClick={switchLan}>
              <p className="mr-2 hidden text-base font-bold lg:block">
                {i18n.language === "en" ? "عربي" : "en"}
              </p>
              <Image
                src={i18n.language === "en" ? arabicFl : englandFl}
                className="h-[24px] w-[24px]"
                alt={"Language"}
              />
            </div> */}
            <LanguageDropdownMenu
              lang={i18n.language}
              // chooseLanguage={switchLan}
            />
            {/* <div className="mx-4 my-auto hidden lg:ml-8 lg:flex">
              <ButtonOutline>iOS APP</ButtonOutline>
            </div>
            <div className="hidden lg:block">
              <ButtonOutline>WebApp</ButtonOutline>
            </div> */}
          </div>
          {/* <Image
            onClick={toggleMenu}
            src={!isMenuOpen ? hambergerIcon : closeIcon}
            alt="expand"
            className="my-auto ml-4 h-5 w-5 cursor-pointer items-center lg:hidden"
          /> */}

          <div
            className={`w-screen items-center justify-between overflow-hidden transition-all ${
              isMenuOpen ? "h-[100vh]" : "h-0"
            }`}
            id="navbar-sticky"
          >
            <ul className="mt-4 flex h-full w-full flex-col bg-white px-8 py-4 font-medium">
              {navList.map((navItem, index) => (
                <li key={index}>
                  <div
                    className={
                      "border-1 my-6 flex place-content-center	rounded-[50px] border border-[#C5CDD9] px-5 py-3 font-bold" +
                      (activeLink === navItem
                        ? " bg-[#6EB925] text-white"
                        : " text-black-500 bg-[#F5F7FA]")
                    }
                  >
                    {t(navItem)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
