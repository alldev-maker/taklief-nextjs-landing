import React from "react";
import CommunityHeroImage from "../../public/WorldCommunity.png";
import Image from "next/image";

const CommunityHero = () => {
  return (
    <section>
      {/* <div className="container mx-auto mb-12 mt-[85px] text-center">
        <h2 className="mb-3 font-sfpro text-[15px]  font-extrabold leading-6 text-black">
          {t("browse_tasks")}
        </h2>
      </div> */}
      <div className="mb-[76px] flex w-full overflow-hidden">
        <Image
          className="mx-auto"
          src={CommunityHeroImage}
          alt="Community Hero"
        />
      </div>
    </section>
  );
};

export default CommunityHero;
