import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import i18n, { switchLan } from "../../i18n";
import ButtonOutline from "../../misc/ButtonOutline";
import navIcon from "../../../public/navIcon.png";
import saudiFlag from "../../../public/saudiFlag.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState("Home");
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
        (scrollActive ? " shadow-md py-2" : " py-4")
      }
    >
      <nav className="container px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col">
        <div className="col-start-1 col-end-2 flex items-center w-[50px] h-[50px]">
          <Image
            src={navIcon}
            className="h-8 w-auto w-[50px] h-[50px]"
            alt={"asdf"}
            width={50}
            height={50}
          />
        </div>
        <ul className="lg:flex col-start-6 col-end-8 text-black-500  items-center">
          <Link
            href="/"
            className={
              "text-base px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-[17px]" +
              (activeLink === "Home"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 a")
            }
          >
            {t("home")}
          </Link>
          <Link
            href="/"
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-[17px]" +
              (activeLink === "Tasker Principles"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            {t("tasker_principle")}
          </Link>
          <Link
            href="/"
            className={
              "text-[17px] px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "pricing"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            {t("poster_principle")}
          </Link>
          <Link
            href="/"
            className={
              "text-[17px] px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "testimoni"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            {t("community_guideline")}
          </Link>
        </ul>
        <div className="col-start-8 col-end-12 font-medium flex justify-end items-center">
          <div
            className="flex cursor-pointer"
            onClick={() => {
              console.log("clik");
              switchLan();
            }}
          >
            <p className="font-bold text-base mr-2">
              {i18n.language === "en" ? "عربي" : "en"}
            </p>
            <Image
              src={saudiFlag}
              className="w-auto h-auto"
              alt={"asdf"}
              width={24}
              height={24}
            />
          </div>
          <Link
            href="/"
            className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all"
          >
            <ButtonOutline>iOS APP</ButtonOutline> 
          </Link>
          <ButtonOutline>WebApp</ButtonOutline>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
