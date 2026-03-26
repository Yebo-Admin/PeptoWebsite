"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarBlank, Timer } from "@phosphor-icons/react";

const categories = [
  { slug: "all", label: "ALL" },
  { slug: "nutrition", label: "NUTRITION" },
  { slug: "recipes", label: "RECIPES" },
  { slug: "gut-health", label: "GUT HEALTH" },
  { slug: "routines", label: "ROUTINES" },
];

const articles = [
  {
    id: "blog-1",
    title: "Why 110 Calories Can Be More Nutritious Than a 600 Calorie Lunch",
    excerpt:
      "Calorie density and nutrient density are two different things. Here's why your lunch might be filling you up without actually fuelling you.",
    image: "https://picsum.photos/seed/blog-cal/800/500",
    category: "Nutrition",
    date: "Mar 24, 2026",
    readTime: "5 min read",
    slug: "calorie-vs-nutrient-density",
    featured: true,
  },
  {
    id: "blog-2",
    title: "Synbiotics 101: The Gut Health Combination Most People Miss",
    excerpt:
      "Probiotics get all the press. But without prebiotics, they're fighting an uphill battle. Here's how synbiotics change the game.",
    image: "https://picsum.photos/seed/blog-gut/800/500",
    category: "Gut Health",
    date: "Mar 20, 2026",
    readTime: "6 min read",
    slug: "synbiotics-101",
  },
  {
    id: "blog-3",
    title: "5 Ways to Use PeptoMeal Beyond a Basic Shake",
    excerpt:
      "Overnight oats, protein pudding, smoothie bowls, popsicles, and pancakes. Your sachet can do more than you think.",
    image: "https://picsum.photos/seed/blog-recipes/800/500",
    category: "Recipes",
    date: "Mar 17, 2026",
    readTime: "4 min read",
    slug: "5-ways-beyond-shake",
  },
  {
    id: "blog-4",
    title: "The Morning Routine That Doesn't Require Willpower",
    excerpt:
      "Habit stacking, environmental design, and the 60-second nutrition rule. Build consistency without burning out.",
    image: "https://picsum.photos/seed/blog-routine/800/500",
    category: "Routines",
    date: "Mar 13, 2026",
    readTime: "7 min read",
    slug: "morning-routine-no-willpower",
  },
  {
    id: "blog-5",
    title: "Protein for People Who Don't Lift Weights",
    excerpt:
      "You don't need to be a gym-goer to benefit from adequate protein. Here's why it matters for everyone — and how much you actually need.",
    image: "https://picsum.photos/seed/blog-protein/800/500",
    category: "Nutrition",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    slug: "protein-for-non-lifters",
  },
  {
    id: "blog-6",
    title: "Omega-3 and Why Your Brain Wants You to Pay Attention",
    excerpt:
      "The fatty acid your cognitive function depends on — and why most South Africans aren't getting enough of it.",
    image: "https://picsum.photos/seed/blog-omega/800/500",
    category: "Nutrition",
    date: "Mar 6, 2026",
    readTime: "6 min read",
    slug: "omega-3-brain-health",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const featured = articles.find((a) => a.featured);
  const filteredArticles =
    activeCategory === "all"
      ? articles.filter((a) => !a.featured)
      : articles.filter(
          (a) => a.category.toLowerCase().replace(" ", "-") === activeCategory && !a.featured
        );

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
              THE PEPTO JOURNAL
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
              NUTRITION,{" "}
              <span className="text-[#006D77]">SIMPLIFIED</span>
            </h1>
            <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
              Practical insights on nutrition, gut health, and building routines that last.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-16" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Category filters */}
          <div className="flex gap-2 mb-12 overflow-x-auto pb-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2 text-[11px] font-bold tracking-wider rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.slug
                    ? "bg-[#006D77] text-white"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {featured && activeCategory === "all" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-transparent hover:border-[#006D77]/10 transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase">
                    {featured.category}
                  </span>
                  <h2 className="mt-3 text-2xl md:text-3xl font-black tracking-tighter text-[#1A1A1A] group-hover:text-[#006D77] transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base text-gray-500 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-6 text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <CalendarBlank size={12} />
                      {featured.date}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="inline-flex items-center gap-1">
                      <Timer size={12} />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Article grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#006D77]/10 transition-all hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F1E6]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold tracking-[0.2em] text-[#006D77] uppercase">
                        {article.category}
                      </span>
                      <h3 className="mt-2 font-black text-[#1A1A1A] tracking-tight group-hover:text-[#006D77] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-4 text-xs text-gray-400">
                        <span>{article.date}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
