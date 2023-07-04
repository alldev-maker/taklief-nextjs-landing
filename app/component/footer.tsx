"use client";
import React, { useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

const Footer = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();

  return (
    <>
      <ScrollAnimationWrapper>
        <motion.div
          className="container mx-auto text-center mb-[15px]"
          variants={scrollAnimation}
        >
          <div className="mt-[65px] mb-[15px] text-center">
            <h1 className="text-general-default text-xl font-display font-black mb-[13px]">
              {t("society_to_society")}
            </h1>
            <p className="text-[17px] text-general-default font-display font-normal">
              {t("about_taklief_short")}
            </p>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};
export default Footer;
