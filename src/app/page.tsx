import { Hero } from "@/components/home/Hero";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedFlavours } from "@/components/home/FeaturedFlavours";
import { SocialProof } from "@/components/home/SocialProof";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeaturedFlavours />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
