"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import TempImg from "../../public/test.png";

const Category = (props: any) => {
  const { category } = props;
  const { t } = useTranslation();

  return (
    <section className="container mx-auto text-center">
      <h4 className="my-5 font-sfpro text-xl font-bold text-general-default">
        {t("get_it_done")}
      </h4>
      <div className="flex flex-row flex-wrap justify-center space-x-4">
        {category &&
          category?.map((item: any, index: number) => {
            return (
              <div className="space-y-3.5 text-center" key={index}>
                <Image
                  src={TempImg}
                  className="mx-auto h-auto w-auto"
                  alt={`${item.image} not find`}
                />
                <h1 className="font-sfpro text-xs font-normal">{item.title}</h1>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Category;
