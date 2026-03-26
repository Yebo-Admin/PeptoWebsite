"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Timer } from "@phosphor-icons/react";
import { recipes } from "@/data/recipes";

const featured = recipes.slice(0, 3);

export function RecipeTeaser() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
              Beyond The Shake
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
              Recipes worth making.
            </h2>
            <p className="mt-3 text-base text-zinc-500 max-w-lg">
              Bowls, smoothies, popsicles, puddings — discover new ways to enjoy your daily PeptoMeal.
            </p>
          </motion.div>
          <Link
            href="/recipes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            All Recipes
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/recipes/${recipe.slug}`}
                className="group block bg-white rounded-[1.5rem] overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
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
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-teal-600">
                    {recipe.flavour}
                  </span>
                  <h3 className="mt-1 font-bold text-zinc-900 tracking-tight group-hover:text-teal-700 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
                    {recipe.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
