"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "@phosphor-icons/react";
import { products, type Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { FlavorBundleBuilder } from "@/components/shop/FlavorBundleBuilder";

type Filter = "all" | "shakes" | "bundles";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "shakes", label: "SHAKES" },
  { value: "bundles", label: "BUNDLES" },
];

function filterProducts(filter: Filter): Product[] {
  switch (filter) {
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
    <div className="bg-[#F1F1E6]">
      {/* Dark Header */}
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
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              ALL PRODUCTS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
              FIND YOUR{" "}
              <span className="text-[#006D77]">FUEL</span>
            </h1>
            <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
              Delicious flavours. Complete nutrition. Subscribe and save on every order.
            </p>
          </motion.div>
        </div>

        <div className="horizon-line mt-16" />
      </section>

      {/* Ka'Chava-style Bundle Builder */}
      <FlavorBundleBuilder />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="horizon-line" />
      </div>

      {/* Individual Products Grid */}
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
                        alt={`PeptoMeal ${product.name}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Badge */}
                      {product.badge && (
                        <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#006D77] text-white text-[11px] font-bold rounded-full tracking-wider">
                          {product.badge}
                        </span>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/20 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                        <span className="px-6 py-2.5 bg-white text-[#1A1A1A] text-xs font-bold tracking-wider rounded-full">
                          VIEW PRODUCT
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-5">
                    {/* Star ratings */}
                    <div className="flex items-center gap-1.5 mb-2">
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

                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-black text-[#1A1A1A] tracking-tight text-lg">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                        {product.tagline}
                      </p>
                    </Link>

                    {/* Pricing */}
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
                        aria-label={`Add ${product.name} to cart`}
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
    </div>
  );
}
