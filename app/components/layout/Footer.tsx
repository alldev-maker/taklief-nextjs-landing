import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#F5F7FA] py-[30px]">
      <div className="container">
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <nav className="pt-lg-0 flex flex-col space-y-[10px]">
            <Link
              href="/when-will-i-get-paid"
              className="text-[13px] font-bold text-general-default md:text-[15px]"
            >
              {t("when_get_paid")}
            </Link>
            <Link
              href="/release-payment"
              className="text-[13px] font-bold text-general-default md:text-[15px]"
            >
              {t("client_hasnt_released")}
            </Link>
            <Link
              href="/service-terms"
              className="text-[13px] font-bold text-general-default md:text-[15px]"
            >
              {t("terms_of_service")}
            </Link>
          </nav>
          <p className="mt-10 text-right text-[13px] font-medium text-charcoal-default md:mt-0 md:text-left md:text-[15px]">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
