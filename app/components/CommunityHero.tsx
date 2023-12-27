import React from "react";
import CommunityHeroImage from "../../public/WorldCommunity.svg";
import CommunityHeroMobImage from "../../public/WorldCommunityMob.svg";
import Image from "next/image";

const CommunityHero = () => {
  return (
    <section>
      <div className="flex w-full overflow-hidden">
        <Image
          className="mx-auto hidden sm:block"
          src={CommunityHeroImage}
          alt="Community Hero"
        />
        <Image
          className="mx-auto sm:hidden"
          src={CommunityHeroMobImage}
          alt="Community Hero"
        />
      </div>
    </section>
  );
};

export default CommunityHero;
