"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarBlank, Timer } from "@phosphor-icons/react";

const categories = [
  { slug: "nutrition", label: "Nutrition" },
  { slug: "recipes", label: "Recipes" },
  { slug: "gut-health", label: "Gut Health" },
  { slug: "routines", label: "Healthy Routines" },
];

const articles = [
  {
    id: "blog-1",
    title: "Why 110 Calories Can Be More Nutritious Than a 600 Calorie Lunch",
    excerpt: "Calorie density and nutrient density are two different things. Here's why your lunch might be filling you up without actually fuelling you.",
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
    excerpt: "Probiotics get all the press. But without prebiotics, they're fighting an uphill battle. Here's how synbiotics change the game.",
    image: "https://picsum.photos/seed/blog-gut/800/500",
    category: "Gut Health",
    date: "Mar 20, 2026",
    readTime: "6 min read",
    slug: "synbiotics-101",
  },
  {
    id: "blog-3",
    title: "5 Ways to Use PeptoMeal Beyond a Basic Shake",
    excerpt: "Overnight oats, protein pudding, smoothie bowls, popsicles, and pancakes. Your sachet can do more than you think.",
    image: "https://picsum.photos/seed/blog-recipes/800/500",
    category: "Recipes",
    date: "Mar 17, 2026",
    readTime: "4 min read",
    slug: "5-ways-beyond-shake",
  },
  {
    id: "blog-4",
    title: "The Morning Routine That Doesn't Require Willpower",
    excerpt: "Habit stacking, environmental design, and the 60-second nutrition rule. Build consistency without burning out.",
    image: "https://picsum.photos/seed/blog-routine/800/500",
    category: "Healthy Routines",
    date: "Mar 13, 2026",
    readTime: "7 min read",
    slug: "morning-routine-no-willpower",
  },
  {
    id: "blog-5",
    title: "Protein for People Who Don't Lift Weights",
    excerpt: "You don't need to be a gym-goer to benefit from adequate protein. Here's why it matters for everyone — and how much you actually need.",
    image: "https://picsum.photos/seed/blog-protein/800/500",
    category: "Nutrition",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    slug: "protein-for-non-lifters",
  },
  {
    id: "blog-6",
    title: "Omega-3 and Why Your Brain Wants You to Pay Attention",
    excerpt: "The fatty acid your cognitive function depends on — and why most South Africans aren't getting enough of it.",
    image: "https://picsum.photos/seed/blog-omega/800/500",
    category: "Nutrition",
    date: "Mar 6, 2026",
    readTime: "6 min read",
    slug: "omega-3-brain-health",
  },
];

const featured = articles.find((a) => a.featured);
const rest = articles.filter((a) => !a.featured);

export default function BlogPage() {
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
              The Pepto Journal
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
              Nutrition, Simplified.
            </h1>
            <p className="mt-3 text-lg text-zinc-500 max-w-lg">
              Practical insights on nutrition, gut health, and building routines that last.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex gap-2 mt-8 overflow-x-auto pb-2">
            <span className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-full">
              All
            </span>
            {categories.map((cat) => (
              <span
                key={cat.slug}
                className="px-4 py-2 bg-zinc-100 text-zinc-600 text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Featured article */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-zinc-50 rounded-[2rem] overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all"
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
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                    {featured.category}
                  </span>
                  <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tighter text-zinc-900 group-hover:text-teal-700 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base text-zinc-500 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-6 text-xs text-zinc-400">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="group block bg-white rounded-[1.5rem] overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-teal-600">
                      {article.category}
                    </span>
                    <h3 className="mt-2 font-bold text-zinc-900 tracking-tight group-hover:text-teal-700 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-zinc-400">
                      <span>{article.date}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
