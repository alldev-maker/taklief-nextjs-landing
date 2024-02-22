"use client";
import { useTranslation } from "react-i18next";

const CommunityHero = () => {
  const { t } = useTranslation();

  return (
    <section className="container py-5">
      <div
        className="text-left text-[38px] font-black leading-none text-[#C5CDD9] sm:text-center"
        dangerouslySetInnerHTML={{ __html: t("made_for_community") }}
      />
    </section>
  );
};

export default CommunityHero;
