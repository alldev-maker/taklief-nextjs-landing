import Image from "next/image";
import React from "react";

const NotFoundComponent = () => {
  return (
    <div className="mx-auto inline-flex h-11 w-[353px] items-center justify-start gap-5 rounded-[10px] bg-stone-50 px-5 py-2.5">
      <Image
        src="/tabler-icon-alert-triangle-filled.svg"
        width={24}
        height={24}
        alt="alert"
      />
      <span className="flex space-x-[5px] font-sfpro text-[15px]">
        <p className="font-sfpro font-bold">404</p>Page could not be found
        <Image
          src="/tabler-icon-unlink.svg"
          alt="unlink"
          width={20}
          height={20}
        />
      </span>
    </div>
  );
};

export default NotFoundComponent;
