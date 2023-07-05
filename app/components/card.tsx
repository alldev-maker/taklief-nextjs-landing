"use client";
import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Accomplish from "../../public/accormplish-task.png";
import TaskComplete from "../../public/task-completed.png";
import RightPerson from "../../public/right-person.png";

import { useTranslation } from "react-i18next";

const Card = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation();

  return (
    <>
      <ScrollAnimationWrapper>
        <section className="container mx-auto mb-[15px] text-center">
          <div className="mx-auto flex flex-col place-content-center items-center justify-center space-y-3.5 px-4 lg:flex-row lg:space-x-3.5 lg:space-y-0">
            <div className="flex h-auto w-full flex-col rounded border px-[21px] pb-10 text-center lg:h-[627px]">
              <Image
                src={RightPerson}
                className="mb-5 h-auto max-h-[370px] w-auto max-w-[370px]"
                alt="no Img"
              />
              <h4 className="mb-6 font-display text-xl font-bold text-general-default lg:mb-[30px]">
                {t("what_do_you_need")}
              </h4>
              <p className="font-display text-[17px] font-normal">
                {t("post_task_desc")}
              </p>
            </div>

            <div className="flex h-auto w-full flex-col rounded border px-[21px] pb-10 text-center lg:h-[627px]">
              <Image
                src={TaskComplete}
                className="mx-auto mb-5 h-auto max-h-[370px] w-auto max-w-[370px]"
                alt="no Img"
              />
              <h4 className="mb-6 font-display text-xl font-bold text-general-default lg:mb-[30px]">
                {t("assgin_person")}
              </h4>
              <p className="font-display text-[17px] font-normal">
                {t("take_look")}
              </p>
            </div>

            <div className="flex h-auto w-full flex-col rounded border px-[21px] pb-10 text-center lg:h-[627px]">
              <Image
                src={Accomplish}
                className="mb-5 h-auto max-h-[370px] w-auto max-w-[370px]"
                alt="no Img"
              />
              <h4 className="mb-6 font-display text-xl font-bold text-general-default lg:mb-[30px]">
                {t("task_completed")}
              </h4>
              <p className="font-display text-[17px] font-normal">
                {t("task_completion_message")}
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </>
  );
};
export default Card;
