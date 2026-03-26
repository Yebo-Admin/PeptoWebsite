import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const PRODUCT_IMAGES = {
  "Chocolate Treat": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png",
  "Vanilla Swirl": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png",
  "Caramel Latte": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png",
  "Berry Blast": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png",
  "Variety": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png",
};

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link
        to={createPageUrl("ProductDetail") + `?id=${product.id}`}
        className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#006D77]/10"
      >
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={PRODUCT_IMAGES[product.flavor] || product.image_url || "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/347b0ac94_generated_97deeddc.png"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {product.is_bestseller && (
            <div className="absolute top-3 left-3 bg-[#FFB703] text-[#1A1A1A] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
              BESTSELLER
            </div>
          )}
          {product.category === "bundle" && (
            <div className="absolute top-3 left-3 bg-[#006D77] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
              BEST VALUE
            </div>
          )}
          {product.stock_count && product.stock_count < 20 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
              LOW STOCK
            </div>
          )}
          
          {/* Quick shop overlay */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="bg-[#006D77] hover:bg-[#008A96] text-white rounded-full py-3 text-center text-xs font-bold tracking-wider flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              VIEW PRODUCT
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star
                key={s}
                className={`w-3 h-3 ${
                  s < Math.round(product.rating || 0)
                    ? "fill-[#FFB703] text-[#FFB703]"
                    : "text-gray-200"
                }`}
              />
            ))}
            {product.review_count > 0 && (
              <span className="text-xs text-gray-400 ml-1">({product.review_count})</span>
            )}
          </div>
          <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#006D77] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">{product.tagline}</p>
          <div className="flex items-baseline gap-3 mt-3">
            <span className="text-lg font-black text-[#1A1A1A]">
              R{product.subscription_price || product.price}
            </span>
            {product.subscription_price && product.subscription_price < product.price && (
              <>
                <span className="text-sm text-gray-400 line-through">R{product.price}</span>
                <span className="text-xs font-bold text-[#006D77]">
                  SAVE R{product.price - product.subscription_price}
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}