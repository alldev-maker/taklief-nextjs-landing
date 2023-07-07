"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import TempImg from "../../public/test.png";

const Category = (props: any) => {
  const { category } = props;
  const { t } = useTranslation();

  return (
    <section className="container mx-auto my-12 text-center">
      <h2 className="my-5 font-sfpro text-xl font-bold text-general-default">
        {t("get_it_done")}
      </h2>
      <div className="flex flex-row flex-wrap justify-center space-x-[18px]">
        {category?.map((item: any, index: number) => {
          return (
            <div className="space-y-[13px] text-center" key={index}>
              <Image
                src={TempImg}
                className="mx-auto h-[100px] w-[100px]"
                alt={`${item.image} not find`}
              />
              <p className="text-xs text-[#292B32]">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
