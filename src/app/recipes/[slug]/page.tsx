"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Timer, ArrowLeft, ShoppingBag } from "@phosphor-icons/react";
import { getRecipeBySlug } from "@/data/recipes";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = getRecipeBySlug(slug);
  const { addItem } = useCart();

  if (!recipe) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F1F1E6]">
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#1A1A1A]">Recipe not found</h1>
          <Link
            href="/recipes"
            className="mt-4 inline-block text-[#006D77] font-bold"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  const product = getProductBySlug(recipe.productSlug);

  return (
    <div className="bg-[#F1F1E6]">
      <section className="py-8 md:py-14">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#006D77] transition-colors mb-8"
          >
            <ArrowLeft size={14} weight="bold" />
            All Recipes
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero image */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 bg-[#F1F1E6]">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                <Timer size={14} weight="bold" className="text-[#006D77]" />
                <span className="text-xs font-bold text-[#1A1A1A]">
                  {recipe.prepTime}
                </span>
              </div>
            </div>

            {/* Meta */}
            <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase">
              {recipe.flavour} RECIPE
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-black tracking-tighter text-[#1A1A1A]">
              {recipe.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {recipe.description}
            </p>

            <div className="horizon-line my-8" />

            {/* Ingredients & Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
                  INGREDIENTS
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ing, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#006D77] shrink-0" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
                  METHOD
                </h2>
                <ol className="space-y-4">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#006D77]/10 text-[#006D77] text-sm font-black flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Product CTA */}
            {product && (
              <div className="mt-10 p-6 bg-[#006D77] rounded-2xl flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#F1F1E6]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-bold text-white">
                    Make this recipe with PeptoMeal {product.name}
                  </p>
                  <p className="text-sm text-white/60 mt-0.5">
                    From R{product.subscriptionPrice}
                  </p>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] text-sm font-bold tracking-wider rounded-full transition-colors"
                >
                  <ShoppingBag size={16} weight="bold" />
                  ADD TO CART
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
