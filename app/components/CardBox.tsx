"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Accomplish from "../../public/accormplish-task.png";
import TaskComplete from "../../public/task-completed.png";
import RightPerson from "../../public/right-person.png";

const Card = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto mb-20 text-center">
      <div className="mx-auto flex flex-col place-content-center items-center justify-center space-y-3.5 lg:flex-row lg:space-x-3.5 lg:space-y-0">
        <div className="flex h-auto max-w-[412px] flex-col rounded-[20px] border border-slate-300 bg-slate-100 pb-10 text-center lg:h-[627px] lg:w-1/3">
          <Image
            src={Accomplish}
            className="mx-auto mb-5 h-auto max-h-[370px] w-full max-w-[370px]"
            alt="no Img"
          />
          <div className="px-5 lg:text-left">
            <h4 className="mb-5 font-sfpro text-xl font-bold text-black">
              {t("what_do_you_need")}
            </h4>
            <p className="font-sfpro text-[17px] font-normal">
              {t("post_task_desc")}
            </p>
          </div>
        </div>

        <div className="flex h-auto max-w-[412px] flex-col rounded-[20px] border border-slate-300 bg-slate-100 pb-10 text-center lg:h-[672px] lg:w-1/3">
          <Image
            src={RightPerson}
            className="mx-auto mb-5 h-auto max-h-[370px] w-full max-w-[370px]"
            alt="no Img"
          />
          <div className="px-5 lg:text-left">
            <h4 className="mb-6 font-sfpro text-xl font-bold text-general-default lg:mb-[30px]">
              {t("assgin_person")}
            </h4>
            <p className="font-sfpro text-[17px] font-normal">
              {t("take_look")}
            </p>
          </div>
        </div>
        <div className="flex h-auto max-w-[412px] flex-col rounded-[20px] border border-slate-300 bg-slate-100 pb-10 text-center lg:h-[627px] lg:w-1/3">
          <Image
            src={TaskComplete}
            className="mx-auto mb-5 h-auto max-h-[370px] w-full max-w-[370px]"
            alt="no Img"
          />
          <div className="px-5 lg:text-left">
            <h4 className="mb-6 font-sfpro text-xl font-bold text-general-default lg:mb-[30px]">
              {t("task_completed")}
            </h4>
            <p className="font-sfpro text-[17px] font-normal">
              {t("task_completion_message")}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mb-[15px] mt-[65px] text-center">
        <h1 className="mb-[13px] font-sfpro text-xl font-black text-general-default">
          {t("society_to_society")}
        </h1>
        <p className="font-sfpro text-[17px] font-normal text-general-default">
          {t("about_taklief_short")}
        </p>
      </div> */}
    </section>
  );
};
export default Card;
