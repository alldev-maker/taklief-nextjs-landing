"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Landing from "../../public/landing.png";
import Community from "../../public/community.png";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container z-10 mx-auto mb-12">
        <section className="lg:mt-60 mt-32 text-center">
          <h1 className="px-2 md:px-8 lg:px-20 text-charcoal-default font-semibold text-4xl md:text-5xl lg:text-6xl font-display h-[280px] md:h-[320px] lg:h-[350px]">
            {t("homepage_headline")}
          </h1>
          <Image
            src={Landing}
            className="max-w-xl w-full h-auto text-center mx-auto my-14 px-4"
            alt="No Img"
          />
        </section>
        <div>
          <p className="max-w-6xl text-3xl text-center mx-auto text-charcoal-default font-display font-bold leading-extra-large">
            {t("made_for_community")}
          </p>
          <Image
            src={Community}
            className="w-auto h-auto text-center mx-auto"
            alt="No Img"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
