import React from "react";

const ButtonOutline = ({ children }: any) => {
  return (
    <button className="bg-white-500 hover:text-white-500 whitespace-nowrap rounded-l-full rounded-r-full border border-primary px-5 py-2 text-sm font-semibold tracking-wide text-primary outline-none transition-all hover:bg-primary-400">
      {children}
    </button>
  );
};

export default ButtonOutline;
