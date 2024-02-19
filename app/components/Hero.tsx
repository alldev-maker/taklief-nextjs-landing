"use client";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container mt-10">
      <div
        className="mx-auto max-w-[632px] text-center text-[15px] font-bold leading-6"
        dangerouslySetInnerHTML={{ __html: t("hero_text") }}
      />
      <img
        className="mx-auto mt-10 w-full max-w-[700px]"
        src="/earth-landing.png"
        alt="hero"
      />
    </section>
  );
};
export default Hero;
