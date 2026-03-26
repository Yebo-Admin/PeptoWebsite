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
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900">Recipe not found</h1>
          <Link href="/recipes" className="mt-4 inline-block text-teal-600 font-semibold">
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  const product = getProductBySlug(recipe.productSlug);

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <Link
          href="/recipes"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-700 transition-colors mb-8"
        >
          <ArrowLeft size={14} weight="bold" />
          All Recipes
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-8">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
              <Timer size={14} weight="bold" className="text-teal-600" />
              <span className="text-xs font-semibold text-zinc-700">
                {recipe.prepTime}
              </span>
            </div>
          </div>

          <span className="text-xs font-medium text-teal-600 uppercase tracking-widest">
            {recipe.flavour} Recipe
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
            {recipe.title}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
            {recipe.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Ingredients */}
            <div className="p-6 bg-zinc-50 rounded-2xl">
              <h2 className="text-lg font-bold text-zinc-900 mb-4">Ingredients</h2>
              <ul className="space-y-2.5">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-4">Method</h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-zinc-600 leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Product CTA */}
          {product && (
            <div className="mt-12 p-6 bg-teal-50 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-zinc-200">
                <Image src={product.image} alt={product.flavour} fill className="object-cover" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="font-bold text-zinc-900">Make this recipe with PeptoMeal {product.flavour}</p>
                <p className="text-sm text-zinc-500 mt-0.5">{product.priceDisplay} per sachet</p>
              </div>
              <button
                onClick={() => addItem(product)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors"
              >
                <ShoppingBag size={16} weight="bold" />
                Add to Cart
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
