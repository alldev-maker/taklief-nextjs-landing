"use client";
import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// const task = {
//   taskTitle: "Yard Cleanup",
//   taskLocation: "Al-Olaya, Riyadh",
//   taskBudget: 650,
//   taskDate: "20 November 2023",
//   taskCompletionDate: "Evening",
//   taskStatus: "Open",
//   taskUser: {
//     userImage: "/Ellipse 42.svg",
//   },
// };

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-24 flex h-full w-full flex-col justify-center ">
      <div className="flex w-full flex-col items-center justify-center space-y-[10px] align-middle">
        <div className="relative h-auto w-[350px] flex-col items-center justify-center space-y-5 overflow-hidden rounded-[10px] border border-slate-300 bg-white">
          {/* Background image div */}
          <div className="absolute left-0 top-0 h-1/2 w-full">
            <img
              className="h-full w-full object-cover"
              src="/Image 4.svg"
              alt="Background"
            />
          </div>

          <div className="relative z-10">
            <div className="mx-auto mb-5 mt-[125px] w-auto overflow-hidden rounded-full ">
              {/* User image */}
              <Image
                className="mx-auto rounded-full border-4 border-white"
                src="/Ellipse 41.svg"
                width={150}
                height={150}
                alt="user"
              />
            </div>

            <div className="flex flex-col space-y-[10px] pb-5 text-center">
              <h1 className="p-0 font-sfpro text-[27px] font-bold text-black">
                Khalid O.
              </h1>
              <h2 className="p-0 font-sfpro text-[15px] text-black ">
                Riyadh, Saudi Arabia
              </h2>
            </div>
          </div>
        </div>

        <div className="inline-flex h-11 w-[353px] items-center justify-start space-x-5 rounded-[10px] bg-slate-50 px-5 py-2.5">
          <Image
            src="/tabler-icon-info-square-rounded-filled.svg"
            width={24}
            height={24}
            alt="info"
          />
          <div className="flex space-x-[5px]">
            <p>{t("get_app_to_view_link")}</p>
            <Image
              src="/tabler-icon-link.svg"
              width={24}
              height={24}
              alt="appstore"
            />
          </div>
        </div>
      </div>

      <Hero />
    </div>
  );
};

export default Profile;
