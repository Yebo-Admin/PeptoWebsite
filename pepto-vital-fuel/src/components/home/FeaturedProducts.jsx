import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const PRODUCT_IMAGES = {
  "Chocolate Treat": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png",
  "Vanilla Swirl": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png",
  "Caramel Latte": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png",
  "Berry Blast": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png",
};

export default function FeaturedProducts({ products }) {
  const shakes = products.filter((p) => p.category === "shake");

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">
              OUR FLAVOURS
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A]">
              FIND YOUR <span className="text-[#006D77]">FUEL</span>
            </h2>
          </div>
          <Link
            to={createPageUrl("Shop")}
            className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#006D77] hover:text-[#008A96] transition-colors"
          >
            VIEW ALL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shakes.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                to={createPageUrl("ProductDetail") + `?id=${product.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#F1F1E6] aspect-[3/4] mb-5">
                  <img
                    src={PRODUCT_IMAGES[product.flavor] || product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.is_bestseller && (
                    <div className="absolute top-4 left-4 bg-[#FFB703] text-[#1A1A1A] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
                      BESTSELLER
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#006D77]/0 group-hover:bg-[#006D77]/10 transition-colors duration-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s < Math.round(product.rating || 0)
                            ? "fill-[#FFB703] text-[#FFB703]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">
                      ({product.review_count})
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#006D77] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{product.tagline}</p>
                  <div className="flex items-baseline gap-3 mt-3">
                    <span className="text-lg font-black text-[#1A1A1A]">
                      R{product.subscription_price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      R{product.price}
                    </span>
                    <span className="text-xs font-bold text-[#006D77]">
                      SAVE R{product.price - product.subscription_price}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}