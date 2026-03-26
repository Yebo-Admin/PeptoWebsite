import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ProductCard from "../components/shop/ProductCard";

const CATEGORIES = [
  { label: "ALL", value: "all" },
  { label: "SHAKES", value: "shake" },
  { label: "BUNDLES", value: "bundle" },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => base44.entities.Product.list(),
  });

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#F1F1E6" }} className="min-h-screen">
      {/* Header */}
      <div className="pt-28 sm:pt-36 pb-12 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white tracking-tighter select-none">
            SHOP
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">
              ALL PRODUCTS
            </p>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">
              FIND YOUR <span className="text-[#006D77]">FUEL</span>
            </h1>
            <p className="text-lg text-white/50 mt-4 max-w-lg">
              Every scoop delivers 30g protein, vitamins, and gut-healthy superfoods. Choose your flavour.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-12" />
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-[#006D77] text-white"
                  : "bg-white text-[#1A1A1A] hover:bg-[#006D77]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <div className="ml-auto text-sm text-gray-400">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="aspect-[3/4] bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-20" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}