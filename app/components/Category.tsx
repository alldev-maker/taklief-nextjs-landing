"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import TempImg from "../../public/test.png";

const Category = (props: any) => {
  const { category } = props;
  const { t } = useTranslation();

  return (
    <section className="container mx-auto my-20 text-center">
      <h2 className="mb-10 text-center font-sfpro text-[15px] font-extrabold text-black">
        {t("get_it_done")}
      </h2>
      <div className="grid grid-cols-3 flex-wrap justify-center gap-x-5 gap-y-2.5 md:gap-10 lg:flex lg:flex-row">
        {category?.map((item: any, index: number) => {
          return (
            <div className="text-center" key={index}>
              <div className="inline-flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border border-slate-300 bg-slate-100 p-[30px] text-center">
                <Image
                  src={item.image}
                  className="mx-auto "
                  alt={`${item.image} not find`}
                  width={40}
                  height={40}
                />
              </div>

              <p className="mx-auto mt-[5px] flex max-w-[61px] items-center justify-center text-center font-sfpro text-[15px] text-black">
                {t(item.name)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
