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

export default ReviewItem;
