import React from "react";

const ButtonOutline = ({ children }: any) => {
  return (
    <button className="whitespace-nowrap font-semibold tracking-wide py-2 text-sm px-5 border border-primary text-primary bg-white-500 outline-none rounded-l-full rounded-r-full hover:bg-primary-400 hover:text-white-500 transition-all">
      {children}
    </button>
  );
};

export default ButtonOutline;
