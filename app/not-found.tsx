import React from "react";
import NotFoundComponent from "./components/404NotFound";
import Hero from "./components/Hero";

const NotFound = () => {
  return (
    <div className="mt-[130px] flex h-full w-full flex-col justify-center">
      <NotFoundComponent />
      <Hero />
    </div>
  );
};

export default NotFound;
