import BrandsContainer from "@/components/homepage/brand-container";
import HeroSection from "@/components/homepage/hero";
import ModelsContainer from "@/components/homepage/models-container";
import NavBar from "@/components/layout-components/navbar";

export default function Home() {
  return (
    <>
      <NavBar className="short" />
      <main className="container !max-w-[1016px] mt-6 mb-20">
        <HeroSection />
        <BrandsContainer />
        <ModelsContainer />
      </main>
    </>
  );
}
