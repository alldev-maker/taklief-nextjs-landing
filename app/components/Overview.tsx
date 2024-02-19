"use client";
import { useTranslation } from "react-i18next";

const Overview = () => {
  const { t } = useTranslation();

  return (
    <section className="container z-10">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 py-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col justify-center gap-5">
          <img
            src="/hero1.png"
            className="mx-auto h-auto w-auto max-w-[345px] text-center"
            alt="No Img"
          />
          <div className="flex justify-center space-x-[5px]">
            <span className="flex font-sfpro text-[15px] font-normal text-black">
              {t("for")}
              <p className="ml-1 font-semibold">iPhone</p>
            </span>
            <div className="w-[2px] bg-slate-300 py-[1px]"></div>
            <img className="h-6 w-6" src="/BlueAppleIcon.svg" alt="No Img" />
            <p className="font-sfpro font-[15px] text-sky-400">
              {t("ios_app")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <img
            src="/hero2.png"
            className="mx-auto h-auto w-auto max-w-[340px] text-center"
            alt="No Img"
          />
          <div className="flex justify-center space-x-[5px]">
            <span className="flex font-sfpro text-[15px] font-normal text-black">
              {t("for")}
              <p className="ml-1 font-semibold">Android</p>
            </span>
            <div className="w-[2px] bg-slate-300 py-[1px]"></div>
            <img className="h-6 w-6" src="/BlueAndroidIcon.svg" alt="No Img" />
            <p className="font-sfpro font-[15px] text-sky-400">
              {t("coming_soon")}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center py-10">
        <img
          src="/hero3.png"
          className="mx-auto mb-5 w-full max-w-[850px] text-center"
          alt="No Img"
          width={846}
          height={325}
        />
        <div className="flex justify-center space-x-[5px]">
          <span className="flex font-sfpro text-[15px] font-normal text-black">
            {t("for")}
            <p className="ml-1 font-semibold">Web</p>
          </span>
          <div className="w-[2px] bg-slate-300 py-[1px]"></div>
          <img
            className="h-6 w-6"
            src="/BlueWindowfilledIcon.svg"
            alt="No Img"
          />
          <p className="font-sfpro font-[15px] text-sky-400">
            {t("coming_soon")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
