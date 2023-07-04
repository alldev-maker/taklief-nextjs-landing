"use client";
import React, { useMemo } from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Landing from "../../public/landing.png";
import Community from "../../public/community.png";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";

const Header = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="container z-10 mx-auto mb-12">
        <section className="mt-60 px-52 text-center">
          <h1 className="text-charcoal-default font-semibold text-6xl font-display">
            {t("homepageHeadline")}
          </h1>
          <Image
            src={Landing}
            className="w-auto h-auto text-center mx-auto my-14"
            alt="No Img"
          />
          <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation}>
              <p className="text-3xl text-charcoal-default font-display font-bold leading-extra-large">
                {t("madeForCommunity")}
              </p>
              <Image
                src={Community}
                className="w-auto h-auto text-center mx-auto"
                alt="No Img"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </section>
      </div>
    </>
  );
};

export default Header;
