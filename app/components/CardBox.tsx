"use client";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto py-5 text-center">
      <div className="mx-auto flex flex-col place-content-center items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
        <div className="flex h-auto max-w-[290px] flex-col rounded-[20px] border border-slate-300 bg-slate-100 p-5 text-center lg:w-1/3">
          <img
            src={"/accormplish-task.png"}
            className="mb-5 w-full"
            alt="no Img"
          />
          <div className="lg:text-left">
            <h4 className="mb-5 text-center font-sfpro text-[15px] font-bold text-black">
              {t("what_do_you_need")}
            </h4>
            <p className="font-sfpro text-[15px] font-normal">
              {t("post_task_desc")}
            </p>
          </div>
        </div>

        <div className="flex h-auto max-w-[290px] flex-col rounded-[20px] border border-slate-300 bg-slate-100 p-5 text-center lg:w-1/3">
          <img src={"right-person.png"} className="mb-5 w-full" alt="no Img" />
          <div className="lg:text-left">
            <h4 className="mb-5 text-center font-sfpro text-[15px] font-bold text-black">
              {t("assgin_person")}
            </h4>
            <p className="font-sfpro text-[15px] font-normal">
              {t("take_look")}
            </p>
          </div>
        </div>
        <div className="flex h-auto max-w-[290px] flex-col rounded-[20px] border border-slate-300 bg-slate-100 p-5 text-center lg:w-1/3">
          <img
            src={"/task-completed.png"}
            className="mb-5 w-full"
            alt="no Img"
          />
          <div className="lg:text-left">
            <h4 className="mb-5 text-center font-sfpro text-[15px] font-bold text-black">
              {t("task_completed")}
            </h4>
            <p className="font-sfpro text-[15px] font-normal">
              {t("task_completion_message")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
