import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-5">
      <div className="flex w-full justify-center text-[15px] text-sky-400">
        <Link href="/service-terms">{t("terms_of_service")}</Link>
      </div>
    </footer>
  );
};

export default Footer;
