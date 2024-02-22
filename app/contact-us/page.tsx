import CommunityHero from "../components/CommunityHero";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function TaskerPrinciple() {
  return (
    <section className="about">
      <p className="my-24 text-center text-[15px] font-bold">
        Contact our{" "}
        <a href="mailto:admin@taklief.com" className="text-[#42ADE2] underline">
          Customer Support
        </a>
      </p>
      <CommunityHero />
    </section>
  );
}
