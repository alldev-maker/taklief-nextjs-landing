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
    <>
      <div className="container z-10 mx-auto mb-12">
        <section className="mt-32 flex flex-col text-center lg:mt-60">
          <h1 className="h-[280px] px-2 font-display text-4xl font-semibold text-charcoal-default md:h-[320px] md:px-8 md:text-5xl lg:h-[350px] lg:px-20 lg:text-6xl">
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
            className="mx-auto my-14 h-auto w-full max-w-xl px-4 text-center"
            alt="No Img"
          />
        </section>
        <div>
          <p className="mx-auto max-w-6xl text-center font-display text-3xl font-bold leading-extra-large text-charcoal-default">
            {t("made_for_community")}
          </p>
          <Image
            src={Community}
            className="mx-auto h-auto w-auto text-center"
            alt="No Img"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
