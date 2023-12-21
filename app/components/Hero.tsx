"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Landing from "../../public/landing.png";
import Community from "../../public/community.png";
import ButtonOutline from "./shared/ButtonOutline";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container z-10 mt-20">
      <div className="flex flex-col text-center">
        {/* <h1 className=" bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 text-center text-[25px] font-black">
          {t("get_things_done")}
        </h1> */}
        {/* <Image
          src="/HeadingBadge.svg"
          className="mx-auto mb-20 mt-9 h-auto w-auto text-center"
          alt="No Img"
          width={240}
          height={30}
        /> */}

        {/* <div className="mx-auto mt-4 flex w-full place-content-center items-center lg:hidden">
          <div className="mx-4 my-auto flex lg:ml-14">
            <ButtonOutline>iOS APP</ButtonOutline>
          </div>
          <div className="flex">
            <ButtonOutline>WebApp</ButtonOutline>
          </div>
        </div>
        <Image
          src={Landing}
          className="mx-auto my-14 h-auto max-h-[931px] w-full max-w-[931px] text-center"
          alt="No Img"
        /> */}
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center space-x-20 lg:flex-row">
        <div className="flex flex-col justify-center space-y-[10px]">
          <Image
            src="/IphoneMockup.svg"
            className="mx-auto mb-[10px] mt-9 h-auto w-auto text-center"
            alt="No Img"
            width={340.98}
            height={445}
          />
          <div className="flex justify-center space-x-[5px] pb-20">
            <span className="flex font-sfpro text-[15px] font-normal text-black">
              For
              <p className="ml-1 font-semibold">Iphone</p>
            </span>
            <div className="w-[2px] bg-slate-300 py-[1px]"></div>
            <Image
              src="/BlueAppleIcon.svg"
              width={24}
              height={24}
              alt="No Img"
            />
            <p className="font-sfpro font-[15px] text-sky-400">IOS App</p>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-[10px]">
          <Image
            src="/AndroidMockup.svg"
            className="mx-auto mb-[10px] mt-9 h-auto w-auto text-center"
            alt="No Img"
            width={340.98}
            height={445}
          />
          <div className="flex justify-center space-x-[5px] pb-20">
            <span className="flex font-sfpro text-[15px] font-normal text-black">
              For
              <p className="ml-1 font-semibold">Android</p>
            </span>
            <div className="w-[2px] bg-slate-300 py-[1px]"></div>
            <Image
              src="/BlueWindowfilledIcon.svg"
              width={24}
              height={24}
              alt="No Img"
            />
            <p className="font-sfpro font-[15px] text-sky-400">Coming soon</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center space-x-20">
        <Image
          src="/DevicesMockup.svg"
          className="mx-auto mb-[10px] mt-9 h-auto w-auto text-center"
          alt="No Img"
          width={846}
          height={325}
        />
        <div className="flex justify-center space-x-[5px] pb-20">
          <span className="flex font-sfpro text-[15px] font-normal text-black">
            For
            <p className="ml-1 font-semibold">Web</p>
          </span>
          <div className="w-[2px] bg-slate-300 py-[1px]"></div>
          <Image
            src="/BlueWindowfilledIcon.svg"
            width={24}
            height={24}
            alt="No Img"
          />
          <p className="font-sfpro font-[15px] text-sky-400">Coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
