"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import ReviewItem from "./review-item";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../utils/ScrollAnimationWrapper";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  centerMode: true,
  variableWidth: true,
  cssEase: "linear",
};
const Category = (props: any) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { category } = props;
  const { t } = useTranslation();

  return (
    <>
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <section className="container mx-auto text-center">
            <h4 className="text-general-default font-display font-bold text-xl my-5">
              {t("get_it_done")}
            </h4>
            {/* <div className="flex flex-row flex-wrap justify-center space-x-4">
              {category &&
                category?.map((item: any, index: number) => {
                  return (
                    <motion.div
                      className="space-y-3.5 text-center"
                      key={index}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          duration: 0.1,
                        },
                      }}
                    >
                      {" "}
                      <Image
                        src={Test1}
                        className="w-auto h-auto mx-auto"
                        alt={`${item.image} not find`}
                      />
                      <h1 className="font-display font-normal text-xs">
                        {item.title}
                      </h1>
                    </motion.div>
                  );
                })}
            </div> */}
          </section>
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          variants={scrollAnimation}
          className="pt-[85px] pb-[45px] text-center container mx-auto"
        >
          <h4 className="text-general-default text-xl font-display font-bold">
            {t("labour_exchange")}
          </h4>
          <p className="text-general-default text-[17px] font-display font-normal max-w-6xl mx-auto">
            {t("about_taklief")}
          </p>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="w-full overflow-hidden mb-16">
        <Slider {...settings}>
          {Array(10)
            .fill(0)
            .map((val, index) => (
              <ReviewItem key={index} />
            ))}
        </Slider>
        <div className="mt-3" />
        <Slider {...settings} rtl>
          {Array(10)
            .fill(0)
            .map((val, index) => (
              <ReviewItem key={index} />
            ))}
        </Slider>
      </div>
    </>
  );
};

export default Category;
