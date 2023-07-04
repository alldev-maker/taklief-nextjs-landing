import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import i18n, { switchLan } from "../../i18n";
import ButtonOutline from "../../misc/ButtonOutline";
import navIcon from "../../../public/navIcon.png";
import arabicFl from "../../../public/arabic.png";
import englandFl from "../../../public/england.png";

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

  return (
    <div
      className={
        "fixed top-0 w-full z-30 bg-white-500 transition-all " +
        (scrollActive ? " shadow-md py-3 bg-white" : " py-5")
      }
    >
      <nav className="max-w-7xl lg:px-8 sm:px-4 mx-auto flex">
        <div className="flex items-center w-[50px] h-[50px] mr-auto">
          <Image
            src={navIcon}
            className="h-8 w-auto w-[50px] h-[50px]"
            alt={"asdf"}
            width={50}
            height={50}
          />
        </div>
        <ul className="lg:flex text-black-500  items-center">
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
            <p className="font-bold text-base mr-2">
              {i18n.language === "en" ? "عربي" : "en"}
            </p>
            <Image
              src={i18n.language === "en" ? arabicFl : englandFl}
              className="w-[24px] h-[24px]"
              alt={"Language"}
            />
          </div>
          <div className="text-black-600 mx-2 sm:mx-4 lg:ml-14 capitalize tracking-wide hover:font-bold transition-all">
            <ButtonOutline>iOS APP</ButtonOutline> 
          </div>
          <ButtonOutline>WebApp</ButtonOutline>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
