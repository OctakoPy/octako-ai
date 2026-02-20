import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/sections/Hero";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { HardTruth } from "@/components/sections/HardTruth";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RealExamples } from "@/components/sections/RealExamples";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <WhoThisIsFor />
      <HardTruth />
      <ServicesGrid />
      <HowItWorks />
      <RealExamples />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </MainLayout>
  );
};

export default Index;
