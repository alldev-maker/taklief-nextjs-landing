import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container mx-auto mb-[15px] text-center">
        <div className="mb-[15px] mt-[65px] text-center">
          <h1 className="mb-[13px] font-display text-xl font-black text-general-default">
            {t("society_to_society")}
          </h1>
          <p className="font-display text-[17px] font-normal text-general-default">
            {t("about_taklief_short")}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
