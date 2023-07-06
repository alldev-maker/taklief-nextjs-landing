import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { default as ClockIcon } from "../../../assets/clock.svg";
import { default as CalendarIcon } from "../../../assets/calendar.svg";
import { default as LocationIcon } from "../../../assets/location.svg";
import { default as WingIcon } from "../../../assets/wing.svg";

const ReviewItem = () => {
  return (
    <div className="border-1 mx-2 flex w-[390px] flex-col gap-y-[10px] rounded border border-slate-300 p-5">
      <div className="flex w-full place-content-between">
        <span className="text-base font-medium">Waiting Review</span>
        <span className="text-base font-bold">SR 35</span>
      </div>
      <div className="flex items-center gap-1">
        <Image
          src={LocationIcon}
          className="h-4 w-4 text-slate-200"
          alt="location"
        />
        <span className="text-sm">Remote</span>
      </div>
      <div className="flex items-center gap-1">
        <Image
          src={CalendarIcon}
          alt="calendar"
          className="h-4 w-4 text-slate-200"
        />
        <span className="text-sm">22/10/2022</span>
      </div>
      <div className="flex items-center gap-1">
        <Image src={ClockIcon} alt="clock" className="h-4 w-4 text-slate-200" />
        <span className="text-sm">22/10/2022 03:21:08 PM</span>
      </div>
      <div className="flex place-content-between">
        <span className="rounded-3xl bg-[#F5F7FA] px-5 py-[6px] text-sm font-bold text-[#7db343]">
          OPEN
        </span>
        <Image src={WingIcon} alt="wing" className="h-10 w-10" />
      </div>
    </div>
  );
};

const Reviews = () => {
  const { t } = useTranslation();
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

  return (
    <section>
      <div className="container mx-auto px-6 pb-[45px] pt-[85px] text-center">
        <h4 className="font-display text-xl font-bold text-general-default">
          {t("labour_exchange")}
        </h4>
        <p className="mx-auto max-w-6xl font-display text-[17px] font-normal text-general-default">
          {t("about_taklief")}
        </p>
      </div>
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
    </section>
  );
};

export default Reviews;