import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import i18n, { switchLan } from "../../i18n";
import ButtonOutline from "../../misc/ButtonOutline";
import navIcon from "../../../public/navIcon.png";
import arabicFl from "../../../public/arabic.png";
import englandFl from "../../../public/england.png";
import hambergerIcon from "../../../assets/hamberger.svg";
import closeIcon from "../../../assets/close.svg";

const navList = [
  "home",
  "tasker_principle",
  "poster_principle",
  "community_guideline",
];

const Navbar = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState(navList[0]);
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
    <nav
      className={
        "fixed top-0 w-full z-30 bg-white" +
        (scrollActive ? " shadow-md py-5" : " py-5")
      }
    >
      <div className="max-w-7xl lg:px-8 px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center w-[50px] h-[50px] mr-auto">
          <Image
            src={navIcon}
            className="h-8 w-auto w-[50px] h-[50px]"
            alt={"Logo"}
            width={50}
            height={50}
          />
        </div>

        <ul className="hidden lg:flex text-black-500 items-center">
          {navList.map((navItem: string) => (
            <div
              key={navItem}
              className={
                "text-base px-4 cursor-pointer h-full flex items-center inline-block relative text-[17px]" +
                (activeLink === navItem
                  ? " font-bold animation-active "
                  : " text-black-500 ")
              }
            >
              {t(navItem)}
            </div>
          ))}
        </ul>

        <div className="font-medium flex justify-end items-center lg:ml-14 sm:ml-4">
          <div className="flex cursor-pointer" onClick={switchLan}>
            <p className="font-bold text-base mr-2 lg:block hidden">
              {i18n.language === "en" ? "عربي" : "en"}
            </p>
            <Image
              src={i18n.language === "en" ? arabicFl : englandFl}
              className="w-[24px] h-[24px]"
              alt={"Language"}
            />
          </div>
          <div className="lg:flex hidden mx-4 my-auto lg:ml-14">
            <ButtonOutline>iOS APP</ButtonOutline>
          </div>
          <div className="lg:block hidden">
            <ButtonOutline>WebApp</ButtonOutline>
          </div>
        </div>
        <Image
          onClick={toggleMenu}
          src={!isMenuOpen ? hambergerIcon : closeIcon}
          alt="expand"
          className="w-5 h-5 ml-4 items-center my-auto lg:hidden cursor-pointer"
        />

        <div
          className={`items-center justify-between w-screen transition-all overflow-hidden ${
            isMenuOpen ? "h-[100vh]" : "h-0"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex h-full w-full flex-col py-4 px-8 mt-4 font-medium bg-white">
            {navList.map((navItem, index) => (
              <li key={index}>
                <div
                  className={
                    "font-bold border border-1 border-[#C5CDD9]	rounded-[50px] flex my-6 px-5 py-3 place-content-center" +
                    (activeLink === navItem
                      ? " text-white bg-[#6EB925]"
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
  );
};

export default Navbar;
