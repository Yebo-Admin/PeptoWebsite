import { Hero } from "@/components/home/Hero";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedFlavours } from "@/components/home/FeaturedFlavours";
import { SocialProof } from "@/components/home/SocialProof";
import { RecipeTeaser } from "@/components/home/RecipeTeaser";
import { PodcastTeaser } from "@/components/home/PodcastTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />
      <ProblemSolution />
      <HowItWorks />
      <FeaturedFlavours />
      <SocialProof />
      <RecipeTeaser />
      <PodcastTeaser />
      <FinalCTA />
    </>
  );
}
