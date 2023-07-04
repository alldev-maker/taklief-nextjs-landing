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
        <section className="container mx-auto text-center mb-[15px]">
          <div className="flex flex-cols space-x-3.5 justify-center">
            <div className="border rounded px-[21px] py-[53px] text-center max-w-[371px]">
              <Image
                src={RightPerson}
                className="w-auto h-auto mb-5"
                alt="no Img"
              />
              <h4 className="text-general-default text-xl font-display font-bold mb-[57px]">
                {t("what_do_you_need")}
              </h4>
              <p className="text-[17px] font-display font-normal">
                {t("post_task_desc")}
              </p>
            </div>
            <div className="border rounded px-[21px] py-[53px] text-center max-w-[371px]">
              <Image
                src={TaskComplete}
                className="w-auto h-auto mb-5 mx-auto"
                alt="no Img"
              />
              <h4 className="text-general-default text-xl font-display font-bold mb-[57px]">
                {t("assgin_person")}
              </h4>
              <p className="text-[17px] font-display font-normal">
                {t("take_look")}
              </p>
            </div>
            <div className="border rounded px-[21px] py-[53px] text-center max-w-[371px]">
              <Image
                src={Accomplish}
                className="w-full h-auto mb-5"
                alt="no Img"
              />
              <h4 className="text-general-default text-xl font-display font-bold mb-[57px]">
                {t("task_completed")}
              </h4>
              <p className="text-[17px] font-display font-normal">
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
