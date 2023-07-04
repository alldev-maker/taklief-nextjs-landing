"use client";
import "./globals.css";
import { Link as LinkScroll } from "react-scroll";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";

import i18n, { switchLan } from "./i18n";
import ButtonOutline from "./misc/ButtonOutline";
import navIcon from "../public/navIcon.png";
import saudiFlag from "../public/saudiFlag.png";

export const metadata = {
  title: "LandingPage",
  description: "Generated by create next app",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  const [scrollActive, setScrollActive] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const { i18n } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <html>
      <body>
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
                Home
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
                Tasker Principles
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
                Poster Principles
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
                Community Guidelines
              </Link>
            </ul>
            <div className="col-start-8 col-end-12 font-medium flex justify-end items-center">
              <div className="flex" onClick={switchLan}>
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
        {children}
      </body>
    </html>
  );
}

export default function RootLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
      </Head>
      <RootLayout>{children}</RootLayout>
    </I18nextProvider>
  );
}
