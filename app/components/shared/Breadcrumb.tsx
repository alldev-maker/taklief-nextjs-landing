"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Breadcrumb = ({ pageName }: { pageName: string }) => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full items-start justify-start gap-5 rounded-[10px] bg-slate-50 px-4 py-2.5 sm:px-5">
      <Image alt="" src="/tabler-icon-route-2.svg" width={24} height={24} />

      <div className="flex flex-wrap items-center gap-[5px]">
        <Link className="font-sfpro text-sm text-sky-400" href="/">
          {t("home")}
        </Link>
        <Image
          alt=""
          src="/tabler-icon-chevron-left.svg"
          width={20}
          height={20}
        />
        <p className="font-sfpro text-sm text-sky-400">{t(pageName)}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
