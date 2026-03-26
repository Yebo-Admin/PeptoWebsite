"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Funnel, ShoppingBag } from "@phosphor-icons/react";
import { products, type Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

type Filter = "all" | "bestsellers" | "shakes" | "bundles";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Flavours" },
  { value: "bestsellers", label: "Customer Favourites" },
  { value: "shakes", label: "Shakes" },
  { value: "bundles", label: "Bundles" },
];

function filterProducts(filter: Filter): Product[] {
  switch (filter) {
    case "bestsellers":
      return products.filter((p) => p.isBestseller);
    case "shakes":
      return products.filter((p) => p.category === "shake");
    case "bundles":
      return products.filter((p) => p.category === "bundle");
    default:
      return products;
  }
}

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const { addItem } = useCart();

  const filtered = filterProducts(activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
              Shop PeptoMeal
            </h1>
            <p className="mt-3 text-lg text-zinc-500 max-w-lg">
              Delicious flavours. Complete nutrition. R50 per sachet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Filter tabs */}
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

          {/* Product grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-[1.5rem] overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
                >
                  {product.badge && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-teal-600 text-white text-[11px] font-semibold rounded-full tracking-wide">
                      {product.badge}
                    </span>
                  )}
                  <Link href={`/products/${product.slug}`}>
                    <div className="relative aspect-square bg-zinc-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={`PeptoMeal ${product.flavour}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-bold text-zinc-900 tracking-tight text-lg">
                        {product.flavour}
                      </h3>
                      <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                        {product.shortDescription}
                      </p>
                    </Link>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                      <span>{product.nutrition.calories} cal</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{product.nutrition.protein} protein</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{product.nutrition.vitamins} vitamins</span>
                    </div>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-100">
                      <span className="text-xl font-bold text-zinc-900">
                        {product.priceDisplay}
                      </span>
                      <button
                        onClick={() => addItem(product)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors active:scale-[0.98]"
                      >
                        <ShoppingBag size={16} weight="bold" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Nutrition banner */}
          <div className="mt-16 p-8 md:p-12 bg-zinc-50 rounded-[2rem] border border-zinc-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter text-zinc-900">
                  What&apos;s inside every sachet
                </h3>
                <p className="mt-3 text-base text-zinc-500 leading-relaxed">
                  Every PeptoMeal flavour shares the same complete nutritional foundation — so you never have to choose between taste and nutrition.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Learn about our science &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15.3g", label: "High-quality protein" },
                  { value: "4.3g", label: "Dietary fibre" },
                  { value: "24", label: "Vitamins & minerals" },
                  { value: "110", label: "Calories per serving" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-white rounded-xl border border-zinc-100">
                    <p className="text-2xl font-bold text-teal-700 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
