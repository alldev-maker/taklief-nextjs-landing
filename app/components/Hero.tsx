"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IphoneMockup from "../../public/IphoneMockup.svg";
import AndroidMockup from "../../public/AndroidMockup.svg";
import DevicesMockup from "../../public/DevicesMockup.svg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container z-10 mt-20">
      <div className="mx-auto mb-10 flex w-full flex-col items-center justify-center gap-10 lg:mb-20 lg:flex-row lg:gap-20">
        <div className="flex flex-col justify-center gap-5">
          <Image
            src={IphoneMockup}
            className="mx-auto h-auto w-auto text-center"
            alt="No Img"
          />
          <div className="flex justify-center space-x-[5px]">
            <span className="flex font-sfpro text-[15px] font-normal text-black">
              {t("for")}
              <p className="ml-1 font-semibold">iPhone</p>
            </span>
            <div className="w-[2px] bg-slate-300 py-[1px]"></div>
            <Image
              src="/BlueAppleIcon.svg"
              width={24}
              height={24}
              alt="No Img"
            />
            <p className="font-sfpro font-[15px] text-sky-400">
              {t("ios_app")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <Image
            src={AndroidMockup}
            className="mx-auto h-auto w-auto text-center"
            alt="No Img"
          />
          <div className="flex justify-center space-x-[5px]">
            <span className="flex font-sfpro text-[15px] font-normal text-black">
              {t("for")}
              <p className="ml-1 font-semibold">Android</p>
            </span>
            <div className="w-[2px] bg-slate-300 py-[1px]"></div>
            <Image
              src="/BlueWindowfilledIcon.svg"
              width={24}
              height={24}
              alt="No Img"
            />
            <p className="font-sfpro font-[15px] text-sky-400">
              {t("coming_soon")}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <Image
          src={DevicesMockup}
          className="mx-auto mb-5 h-auto w-auto text-center"
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
          <Image
            src="/BlueWindowfilledIcon.svg"
            width={24}
            height={24}
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

export default Hero;
