"use client";
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
              <div className="inline-flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-center">
                <img
                  src={item.image ? `${item.image}` : TempImg}
                  className="mx-auto w-full"
                  alt={`${item.image} not find`}
                />
              </div>

              <p className="mx-auto mt-[5px] flex max-w-[61px] items-center justify-center text-center font-sfpro text-[15px] text-black">
                {t(item.title)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
