import Image from "next/image";
import React from "react";

import { default as ClockIcon } from "../../assets/clock.svg";
import { default as CalendarIcon } from "../../assets/calendar.svg";
import { default as LocationIcon } from "../../assets/location.svg";
import { default as WingIcon } from "../../assets/wing.svg";

const ReviewItem = (props: any) => {
  const { task, bgColor = "bg-slate-100" } = props;

  return (
    <div
      className={`border-1 mx-2 flex w-[350px] flex-col gap-y-[10px] rounded-[10px] border border-slate-300 p-5 ${bgColor}`}
    >
      <div className="flex w-full place-content-between">
        <span className="text-[15px] font-medium leading-[25.5px]">
          {task?.taskTitle}
        </span>
        <span className="text-[17px] font-bold leading-[25.5px]">
          SR {task?.taskBudget}
        </span>
      </div>
      <div className="flex items-center gap-[5px]">
        <Image src={LocationIcon} className="h-4 w-4" alt="location" />
        <span className="text-[13px]">{task?.taskLocation}</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <Image src={CalendarIcon} alt="calendar" className="h-4 w-4" />
        <span className="text-[13px]">{task?.taskDate}</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <Image src={ClockIcon} alt="clock" className="h-4 w-4" />
        <span className="text-[13px]">{task.taskCompletionDate}</span>
      </div>
      <div className="flex items-center justify-between">
        {task?.taskStatus === "Open" ? (
          <span className="rounded-3xl bg-[#7db343] px-5 py-2 text-[13px] font-bold text-white">
            {task?.taskStatus}
          </span>
        ) : (
          <span className="rounded-3xl bg-black px-5 py-2 text-[13px] font-bold text-white">
            {task?.taskStatus}
          </span>
        )}
        <Image
          src={task?.taskUser.userImage}
          alt="wing"
          // className="h-10 w-10"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default ReviewItem;
