"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingBag,
  CheckCircle,
  Fire,
  Barbell,
  Leaf,
  Heart,
  Drop,
  Pill,
  ArrowRight,
} from "@phosphor-icons/react";
import { products, getFavourites, getBundles, type Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { FlavorBundleBuilder } from "@/components/shop/FlavorBundleBuilder";

type Filter = "all" | "favourites" | "bundles";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Flavours" },
  { value: "favourites", label: "Customer Favourites" },
  { value: "bundles", label: "Flavour Bundles" },
];

function filterProducts(filter: Filter): Product[] {
  switch (filter) {
    case "favourites":
      return getFavourites();
    case "bundles":
      return getBundles();
    default:
      return products;
  }
}

const benefitIcons = [
  { icon: Fire, label: "Low in Calories", color: "#FFB703" },
  { icon: Barbell, label: "High in Protein", color: "#006D77" },
  { icon: Leaf, label: "Source of Fibre", color: "#006D77" },
  { icon: Heart, label: "Synbiotic Formula", color: "#FFB703" },
  { icon: Drop, label: "Healthy Fats", color: "#006D77" },
  { icon: Pill, label: "Vitamins & Minerals", color: "#FFB703" },
];

function BadgeLabel({ product }: { product: Product }) {
  if (product.isFavourite) {
    return (
      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#FFB703] text-[#1A1A1A] text-[11px] font-bold rounded-full tracking-wider">
        Customer Favourite
      </span>
    );
  }
  if (product.isBestseller) {
    return (
      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#006D77] text-white text-[11px] font-bold rounded-full tracking-wider">
        Bestseller
      </span>
    );
  }
  if (product.isNew) {
    return (
      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#006D77] text-white text-[11px] font-bold rounded-full tracking-wider">
        New
      </span>
    );
  }
  if (product.badge) {
    return (
      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#006D77] text-white text-[11px] font-bold rounded-full tracking-wider">
        {product.badge}
      </span>
    );
  }
  return null;
}

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const { addItem } = useCart();

  const filtered = filterProducts(activeFilter);

  return (
    <div className="bg-[#F1F1E6]">
      {/* ── Dark Header ── */}
      <section className="relative bg-[#1A1A1A] pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20vw] font-black text-white opacity-[0.04] tracking-tighter leading-none">
            SHOP
          </span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
              Shop <span className="text-[#006D77]">PeptoMeal</span>
            </h1>
            <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
              Complete nutrition. One simple shake.
            </p>
          </motion.div>
        </div>

        <div className="horizon-line mt-16" />
      </section>

      {/* ── Flavor Bundle Builder ── */}
      <FlavorBundleBuilder />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="horizon-line" />
      </div>

      {/* ── Product Grid Section ── */}
      <section className="py-12 md:py-20">
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
              {filtered.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#006D77]/10 transition-all hover:shadow-xl"
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="relative aspect-[3/4] bg-[#F1F1E6] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={`PeptoMeal ${product.flavor}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <BadgeLabel product={product} />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/20 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                        <span className="px-6 py-2.5 bg-white text-[#1A1A1A] text-xs font-bold tracking-wider rounded-full">
                          VIEW PRODUCT
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-5">
                    {/* Flavor name */}
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-black text-[#1A1A1A] tracking-tight text-lg">
                        {product.flavor}
                      </h3>
                    </Link>

                    {/* Tagline */}
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                      {product.tagline}
                    </p>

                    {/* Star ratings */}
                    <div className="flex items-center gap-1.5 mt-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            weight="fill"
                            className={
                              i < Math.round(product.rating)
                                ? "text-[#FFB703]"
                                : "text-gray-200"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-400">
                        ({product.reviewCount})
                      </span>
                    </div>

                    {/* Pricing + Add to Cart */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-lg font-black text-[#1A1A1A]">
                          R{product.subscriptionPrice}
                        </span>
                        <span className="text-sm text-gray-400 line-through ml-2">
                          R{product.price}
                        </span>
                        <p className="text-[10px] font-bold tracking-wider text-[#006D77] uppercase">
                          Subscribe & Save
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product);
                        }}
                        className="w-10 h-10 rounded-full bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] flex items-center justify-center transition-all active:scale-95"
                        aria-label={`Add ${product.flavor} to cart`}
                      >
                        <ShoppingBag size={18} weight="bold" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Discovery Box CTA ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#1A1A1A] rounded-3xl p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Ghost text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[14vw] font-black text-white opacity-[0.03] tracking-tighter leading-none">
                DISCOVER
              </span>
            </div>

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
                Not sure where to start?
              </h2>
              <p className="mt-4 text-base text-white/50 max-w-lg mx-auto">
                Try a Discovery Box and explore multiple flavours and find your favourite.
              </p>
              <Link
                href="/products/discovery-box"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all active:scale-[0.98]"
              >
                Shop Discovery Box
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── "What's Inside" Banner ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-4">
              WHAT&apos;S INSIDE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[#1A1A1A]">
              It&apos;s What&apos;s Inside That Counts
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              PeptoMeal is packed with carefully selected nutrients designed to support your body every day.
            </p>

            <div className="mt-10 text-left max-w-md mx-auto">
              <p className="text-sm font-bold text-[#1A1A1A] mb-4">
                Each serving delivers:
              </p>
              <ul className="space-y-3">
                {[
                  "Only 110 calories per serving",
                  "15.3g high-quality protein",
                  "4.3g fibre for gut support",
                  "Synbiotic formula (pre + probiotics)",
                  "Omega-3 & healthy fats",
                  "24 vitamins & minerals",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="text-[#006D77] shrink-0"
                    />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
              Because great nutrition isn&apos;t just about flavour — it&apos;s about what fuels your body.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#006D77] hover:bg-[#005A62] text-white font-bold tracking-wider rounded-full transition-all active:scale-[0.98]"
            >
              Explore the Ingredients
              <ArrowRight size={18} weight="bold" />
            </Link>
          </motion.div>

          {/* Benefit Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            {benefitIcons.map((benefit, i) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-[#F1F1E6] rounded-2xl p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <benefit.icon
                    size={24}
                    weight="bold"
                    style={{ color: benefit.color }}
                  />
                </div>
                <p className="text-[11px] font-bold tracking-wider text-[#1A1A1A] uppercase">
                  {benefit.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
