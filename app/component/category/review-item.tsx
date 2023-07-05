import { default as ClockIcon } from "../../../assets/clock.svg";
import { default as CalendarIcon } from "../../../assets/calendar.svg";
import { default as LocationIcon } from "../../../assets/location.svg";
import { default as WingIcon } from "../../../assets/wing.svg";
import Image from "next/image";

const ReviewItem = () => {
  return (
    <div className="p-5 border border-1 border-slate-300 mx-2 rounded gap-y-[10px] flex flex-col w-[390px]">
      <div className="flex place-content-between w-full">
        <span className="font-medium text-base">Waiting Review</span>
        <span className="font-bold text-base">SR 35</span>
      </div>
      <div className="flex gap-1 items-center">
        <Image
          src={LocationIcon}
          className="w-4 h-4 text-slate-200"
          alt="location"
        />
        <span className="text-sm">Remote</span>
      </div>
      <div className="flex gap-1 items-center">
        <Image
          src={CalendarIcon}
          alt="calendar"
          className="w-4 h-4 text-slate-200"
        />
        <span className="text-sm">22/10/2022</span>
      </div>
      <div className="flex gap-1 items-center">
        <Image src={ClockIcon} alt="clock" className="w-4 h-4 text-slate-200" />
        <span className="text-sm">22/10/2022 03:21:08 PM</span>
      </div>
      <div className="flex place-content-between">
        <span className="py-[6px] px-5 text-sm font-bold text-[#7db343] rounded-3xl bg-[#F5F7FA]">
          OPEN
        </span>
        <Image src={WingIcon} alt="wing" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default ReviewItem;
