"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "@phosphor-icons/react";
import { products } from "@/data/products";

const favourites = products.filter((p) => p.isFavourite);

export function FeaturedFlavours() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              OUR FLAVOURS
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A]">
              Customer <span className="text-[#006D77]">favourites</span>
            </h2>
          </motion.div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-black tracking-[0.15em] text-[#006D77] hover:text-[#006D77]/80 transition-colors uppercase"
          >
            DISCOVER ALL FLAVOURS
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favourites.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-[#F1F1E6] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={`PeptoMeal ${product.flavor}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover teal overlay */}
                  <div className="absolute inset-0 bg-[#006D77]/0 group-hover:bg-[#006D77]/20 transition-colors duration-300" />
                  {/* Bestseller badge */}
                  {product.isBestseller && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#FFB703] text-[#1A1A1A] text-[10px] font-black tracking-[0.2em] rounded-full uppercase">
                      BESTSELLER
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#006D77] text-white text-[10px] font-black tracking-[0.2em] rounded-full uppercase">
                      NEW
                    </span>
                  )}
                </div>

                {/* Star ratings */}
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      weight="fill"
                      className={
                        i < Math.round(product.rating)
                          ? "text-[#FFB703]"
                          : "text-[#1A1A1A]/15"
                      }
                    />
                  ))}
                  <span className="text-xs text-[#1A1A1A]/40 ml-1">
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Flavor name */}
                <h3 className="font-black text-[#1A1A1A] tracking-tight text-lg">
                  {product.flavor}
                </h3>
                <p className="text-sm text-[#1A1A1A]/50 mt-1">
                  {product.tagline}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-lg font-black text-[#1A1A1A]">
                    R{product.subscriptionPrice}
                  </span>
                  <span className="text-sm text-[#1A1A1A]/40 line-through">
                    R{product.price}
                  </span>
                  <span className="text-xs font-bold text-[#006D77] bg-[#006D77]/10 px-2 py-0.5 rounded-full">
                    SAVE R{product.price - product.subscriptionPrice}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-lg text-[#1A1A1A]/50 mb-6">
            10 delicious flavours to explore.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#006D77] font-black text-sm tracking-[0.15em] uppercase rounded-full border-2 border-[#006D77]/30 hover:border-[#006D77] transition-all"
          >
            DISCOVER ALL FLAVOURS
            <ArrowRight size={16} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
