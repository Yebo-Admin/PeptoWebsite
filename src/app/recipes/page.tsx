"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Timer, Funnel } from "@phosphor-icons/react";
import { recipes } from "@/data/recipes";

type MealFilter = "all" | "breakfast" | "smoothie" | "dessert" | "snack";

const filters: { value: MealFilter; label: string }[] = [
  { value: "all", label: "All Recipes" },
  { value: "breakfast", label: "Breakfast" },
  { value: "smoothie", label: "Smoothies" },
  { value: "dessert", label: "Desserts" },
  { value: "snack", label: "Snacks" },
];

export default function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState<MealFilter>("all");

  const filtered =
    activeFilter === "all"
      ? recipes
      : recipes.filter((r) => r.mealType === activeFilter);

  return (
    <>
      <section className="pt-16 pb-10 md:pt-20 md:pb-14 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
              Beyond The Shake
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
              PeptoMeal Recipes
            </h1>
            <p className="mt-3 text-lg text-zinc-500 max-w-lg">
              Bowls, smoothies, popsicles, puddings — discover new ways to enjoy your daily nutrition.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
            <Funnel size={18} className="text-zinc-400 shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  activeFilter === filter.value
                    ? "bg-teal-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
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
              {filtered.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.slug}`}
                  className="group bg-white rounded-[1.5rem] overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <Timer size={14} weight="bold" className="text-teal-600" />
                      <span className="text-xs font-semibold text-zinc-700">
                        {recipe.prepTime}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 bg-zinc-900/70 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full capitalize">
                      {recipe.mealType}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-teal-600">
                      {recipe.flavour}
                    </span>
                    <h3 className="mt-1 font-bold text-zinc-900 tracking-tight text-lg group-hover:text-teal-700 transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
                      {recipe.description}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Email capture */}
          <div className="mt-16 p-8 md:p-12 bg-teal-50 rounded-[2rem] text-center">
            <h3 className="text-2xl font-bold tracking-tighter text-zinc-900">
              Get weekly recipe drops
            </h3>
            <p className="mt-2 text-base text-zinc-500 max-w-md mx-auto">
              New PeptoMeal recipes delivered to your inbox every week. Simple, delicious, protein-packed.
            </p>
            <form className="flex gap-3 max-w-md mx-auto mt-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-white border border-zinc-200 rounded-full text-sm placeholder:text-zinc-400 focus:outline-none focus:border-teal-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
