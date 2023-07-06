"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Landing from "../../public/landing.png";
import Community from "../../public/community.png";
import ButtonOutline from "./shared/ButtonOutline";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container z-10 mt-[90px]">
      <div className="flex flex-col text-center">
        <h1 className="mx-auto mt-[30px] max-w-[1495px] font-sfpro text-4xl font-semibold tracking-wide text-charcoal-default md:text-5xl lg:mt-[145px] lg:text-6xl lg:leading-[72px]">
          {t("homepage_headline")}
        </h1>

        <div className="mx-auto mt-4 flex w-full place-content-center items-center lg:hidden">
          <div className="mx-4 my-auto flex lg:ml-14">
            <ButtonOutline>iOS APP</ButtonOutline>
          </div>
          <div className="flex">
            <ButtonOutline>WebApp</ButtonOutline>
          </div>
        </div>
        <Image
          src={Landing}
          className="mx-auto my-14 h-auto max-h-[931px] w-full max-w-[931px] text-center"
          alt="No Img"
        />
      </div>
      <div>
        <p className="mx-auto max-w-6xl text-center font-sfpro text-3xl font-bold leading-extra-large text-charcoal-default">
          {t("made_for_community")}
        </p>
        <Image
          src={Community}
          className="mx-auto h-auto w-auto text-center"
          alt="No Img"
        />
      </div>
    </section>
  );
};

export default Hero;
