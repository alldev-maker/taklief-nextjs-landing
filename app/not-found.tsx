import React from "react";
import NotFoundComponent from "./components/404NotFound";
import Overview from "./components/Overview";
import CommunityHero from "./components/CommunityHero";

const NotFound = () => {
  return (
    <div className="mt-[130px] flex h-full w-full flex-col justify-center">
      <NotFoundComponent />
      <Overview />
      <CommunityHero />
    </div>
  );
};

export default NotFound;
