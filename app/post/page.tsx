"use client";
import React from "react";
import Hero from "../components/Hero";
import ReviewItem from "../components/ReviewItem";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const task = {
  taskTitle: "Yard Cleanup",
  taskLocation: "Al-Olaya, Riyadh",
  taskBudget: 650,
  taskDate: "20 November 2023",
  taskCompletionDate: "Evening",
  taskStatus: "Open",
  taskUser: {
    userImage: "/Ellipse 42.svg",
  },
};

const Post = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[130px] flex h-full w-full flex-col justify-center ">
      <div className="flex w-full flex-col items-center justify-center space-y-[10px] align-middle">
        <ReviewItem className="mx-auto" task={task} />
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

export default Post;
