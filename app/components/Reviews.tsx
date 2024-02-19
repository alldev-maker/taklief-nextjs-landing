import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import ReviewItem from "./ReviewItem";

const Reviews = (props: any) => {
  const { tasks } = props;

  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    centerMode: true,
    variableWidth: true,
    cssEase: "linear",
  };

  return (
    <section>
      <div className="container text-center">
        <h2 className="mb-10 font-sfpro text-[15px] font-black leading-6 text-black">
          {t("browse_tasks")}
        </h2>
      </div>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {tasks?.map((val: Object, index: Number) => (
            <ReviewItem task={val} key={index} />
          ))}
        </Slider>
        <div className="mt-3" />
        <Slider {...settings} rtl>
          {tasks?.map((val: Object, index: Number) => (
            <ReviewItem task={val} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
