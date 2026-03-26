import { Hero } from "@/components/home/Hero";
import { BenefitsStrip } from "@/components/home/BenefitsStrip";
import { FeaturedFlavours } from "@/components/home/FeaturedFlavours";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BundlePromo } from "@/components/home/BundlePromo";
import { LifestyleBanner } from "@/components/home/LifestyleBanner";
import { SocialProof } from "@/components/home/SocialProof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsStrip />
      <FeaturedFlavours />
      <HowItWorks />
      <BundlePromo />
      <LifestyleBanner />
      <SocialProof />
    </>
  );
}
