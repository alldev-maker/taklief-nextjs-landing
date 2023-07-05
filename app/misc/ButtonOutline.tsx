import React from "react";

const ButtonOutline = ({ children }: any) => {
  return (
    <button className="whitespace-nowrap font-semibold tracking-wide lg:py-2 lg:px-5 text-sm sm:px-8 border border-primary text-primary bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-primary-400 hover:text-white-500 transition-all hover:shadow-orange ">
      {children}
    </button>
  );
};

export default ButtonOutline;
