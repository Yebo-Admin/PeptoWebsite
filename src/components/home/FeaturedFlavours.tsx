"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { products } from "@/data/products";
import { useCart } from "@/lib/cart-context";

const featured = products.filter((p) => p.category === "shake").slice(0, 4);

export function FeaturedFlavours() {
  const { addItem } = useCart();

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
              Our Flavours
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
              Find your favourite.
            </h2>
          </motion.div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            View All Flavours
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-[1.5rem] overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
            >
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-teal-600 text-white text-[11px] font-semibold rounded-full tracking-wide">
                  {product.badge}
                </span>
              )}
              <Link href={`/products/${product.slug}`} className="block">
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
                  <h3 className="font-bold text-zinc-900 tracking-tight">
                    {product.flavour}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </Link>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-zinc-900">
                    {product.priceDisplay}
                  </span>
                  <button
                    onClick={() => addItem(product)}
                    className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors active:scale-[0.98]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
