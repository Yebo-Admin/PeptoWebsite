"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Timer, Drop, BowlFood, CookingPot } from "@phosphor-icons/react";
import { recipes } from "@/data/recipes";

type MealFilter = "all" | "breakfast" | "smoothie" | "dessert" | "snack";

const filters: { value: MealFilter; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "breakfast", label: "BREAKFAST" },
  { value: "smoothie", label: "SMOOTHIES" },
  { value: "dessert", label: "DESSERTS" },
  { value: "snack", label: "SNACKS" },
];

const steps = [
  {
    icon: Drop,
    step: "01",
    title: "CHOOSE YOUR FLAVOUR",
    description: "Pick from our range of delicious PeptoMeal flavours as your base ingredient.",
  },
  {
    icon: BowlFood,
    step: "02",
    title: "BLEND OR MIX",
    description: "Follow the recipe. Most take under 5 minutes — some just 60 seconds.",
  },
  {
    icon: CookingPot,
    step: "03",
    title: "ENJOY & FUEL UP",
    description: "Dig into a protein-packed meal that tastes incredible and fuels your day.",
  },
];

export default function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState<MealFilter>("all");

  const filtered =
    activeFilter === "all"
      ? recipes
      : recipes.filter((r) => r.mealType === activeFilter);

  return (
    <div className="bg-[#F1F1E6]">
      {/* Dark Header */}
      <section className="relative bg-[#1A1A1A] pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              BEYOND THE SHAKE
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
              PEPTOMEAL{" "}
              <span className="text-[#006D77]">RECIPES</span>
            </h1>
            <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
              Bowls, smoothies, popsicles, puddings — discover new ways to enjoy your daily nutrition.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-16" />
      </section>

      {/* How-To Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-3">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#1A1A1A]">
              THREE SIMPLE <span className="text-[#006D77]">STEPS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#006D77]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} weight="duotone" className="text-[#006D77]" />
                  </div>
                  <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-2">
                    STEP {item.step}
                  </p>
                  <h3 className="text-sm font-black tracking-wider text-[#1A1A1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Horizon line */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="horizon-line" />
      </div>

      {/* Recipe Cards Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 text-[11px] font-bold tracking-wider rounded-full whitespace-nowrap transition-all ${
                  activeFilter === filter.value
                    ? "bg-[#006D77] text-white"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={`/recipes/${recipe.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#006D77]/10 transition-all hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F1E6]">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                        <Timer size={14} weight="bold" className="text-[#006D77]" />
                        <span className="text-xs font-bold text-[#1A1A1A]">
                          {recipe.prepTime}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 px-3 py-1 bg-[#1A1A1A]/70 backdrop-blur-sm text-white text-[11px] font-bold rounded-full capitalize tracking-wider">
                        {recipe.mealType}
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold tracking-[0.2em] text-[#006D77] uppercase">
                        {recipe.flavour}
                      </span>
                      <h3 className="mt-1 font-black text-[#1A1A1A] tracking-tight text-lg group-hover:text-[#006D77] transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                        {recipe.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 md:p-12 bg-[#006D77] rounded-3xl text-center"
          >
            <h3 className="text-2xl font-black tracking-tighter text-white">
              GET WEEKLY RECIPE DROPS
            </h3>
            <p className="mt-2 text-base text-white/60 max-w-md mx-auto">
              New PeptoMeal recipes delivered to your inbox every week.
            </p>
            <form
              className="flex gap-3 max-w-md mx-auto mt-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB703] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] text-sm font-bold tracking-wider rounded-full transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
