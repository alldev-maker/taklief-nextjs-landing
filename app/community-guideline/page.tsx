"use client";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function CommunityGuideline() {
  const { t } = useTranslation();
  return (
    <section className="about">
      <div className="container flex flex-col gap-5">
        <Breadcrumb pageName="community_guidelines" />

        <h3 className="font-sfpro text-[15px] font-bold">
          {t("are_there_any_task_posting_guidelines")}
        </h3>

        <p className="border-l-[3px] border-sky-400 pl-[10px]">
          {t("community_guideline_1")}
        </p>

        <h6 className="font-sfpro text-[15px] font-bold">
          <strong>{t("task_guidelines.section_a.title")}</strong>
        </h6>

        <p>{t("task_guidelines.section_a.content")}</p>

        <h6 className="font-sfpro text-[15px] font-bold">
          {t("task_guidelines.section_b.title")}
        </h6>

        <p>{t("task_guidelines.section_b.content")}</p>

        <h6 className="font-sfpro text-[15px] font-bold">
          {t("task_guidelines.section_c.title")}
        </h6>

        <p>{t("task_guidelines.section_c.content")}</p>

        <h6 className="font-sfpro text-[15px] font-bold">
          {t("task_guidelines.section_d.title")}
        </h6>

        <p className="border-l-[3px] border-sky-400 pl-[10px]">
          {t("task_guidelines.section_d.highlighted")}
        </p>

        <p>
          <strong>{t("task_guidelines.section_d.scope.title")}</strong>&nbsp;
          {t("task_guidelines.section_d.scope.content")}
        </p>

        {/* <p>&nbsp;</p> */}

        <p>
          <strong>{t("task_guidelines.section_d.time.title")}</strong>
          &nbsp;{t("task_guidelines.section_d.time.content")}
        </p>

        {/* <p>&nbsp;</p> */}

        <p>
          <strong>{t("task_guidelines.section_d.budget.title")}</strong>
          &nbsp;{t("task_guidelines.section_d.budget.content")}
        </p>

        <ul>
          {/* <br /> */}
          <li>{t("task_guidelines.section_d.help_taskers")}</li>
        </ul>

        <h6 className="font-sfpro text-[15px] font-bold">
          {t("task_guidelines.section_e.title")}
        </h6>

        <p>
          {t("task_guidelines.section_e.content")}
          {/* <br /> */}
          {/* <br /> */}
          {/* &nbsp; */}
        </p>

        <ul>
          <li>
            <div className="border-l-[3px] border-amber-300 pl-[10px]">
              <strong>{t("task_guidelines.section_e.example_1.title")}</strong>
              &nbsp;{t("task_guidelines.section_e.example_1.content")}
            </div>
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <div className="border-l-[3px] border-amber-300 pl-[10px]">
              <strong>{t("task_guidelines.section_e.example_2.title")}</strong>
              &nbsp;{t("task_guidelines.section_e.example_2.content")}
            </div>
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <div className="border-l-[3px] border-amber-300 pl-[10px]">
              <strong>{t("task_guidelines.section_e.example_3.title")}</strong>
              &nbsp;{t("task_guidelines.section_e.example_3.content")}
            </div>
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <div className="border-l-[3px] border-amber-300 pl-[10px]">
              <strong>{t("task_guidelines.section_e.example_4.title")}</strong>
              &nbsp;{t("task_guidelines.section_e.example_4.content")}
            </div>
          </li>
          {/* <br /> */}
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          &nbsp;
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li> */}
        </ul>

        {/* <p>&nbsp;</p> */}

        <h6 className="font-sfpro text-[15px] font-bold">
          {t("task_guidelines.section_f.title")}
        </h6>

        <p>{t("task_guidelines.section_f.content")}</p>

        <ul>
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          &nbsp;
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li> */}
          <li>
            <div className="border-l-[3px] border-amber-300 pl-[10px]">
              <strong>{t("task_guidelines.section_f.example_1.title")}</strong>
              &nbsp;{t("task_guidelines.section_f.example_1.content")}
            </div>
            {/* <br /> */}
            {/* <br /> */}
            <br />
            <div className="border-l-[3px] border-amber-300 pl-[10px]">
              <strong>{t("task_guidelines.section_f.example_2.title")}</strong>
              &nbsp;{t("task_guidelines.section_f.example_2.content")}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
