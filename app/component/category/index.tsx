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
            <h4 className="my-5 font-display text-xl font-bold text-general-default">
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
          className="container mx-auto px-6 pb-[45px] pt-[85px] text-center"
        >
          <h4 className="font-display text-xl font-bold text-general-default">
            {t("labour_exchange")}
          </h4>
          <p className="mx-auto max-w-6xl font-display text-[17px] font-normal text-general-default">
            {t("about_taklief")}
          </p>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="mb-16 w-full overflow-hidden">
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
