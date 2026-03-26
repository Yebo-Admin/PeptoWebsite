import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "../components/home/HeroSection";
import BenefitsSection from "../components/home/BenefitsSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BundlePromo from "../components/home/BundlePromo";
import HowItWorks from "../components/home/HowItWorks";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LifestyleBanner from "../components/home/LifestyleBanner";

export default function Home() {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () => base44.entities.Product.list(),
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => base44.entities.Review.list(),
  });

  const bundle = products.find((p) => p.category === "bundle");

  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <FeaturedProducts products={products} />
      <HowItWorks />
      <BundlePromo bundle={bundle} />
      <LifestyleBanner />
      <TestimonialsSection reviews={reviews} />
    </div>
  );
}