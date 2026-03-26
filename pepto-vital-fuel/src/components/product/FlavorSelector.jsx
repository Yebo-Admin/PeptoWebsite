import React from "react";
import { Check } from "lucide-react";

const PRODUCT_IMAGES = {
  "Chocolate Treat": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png",
  "Vanilla Swirl":   "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png",
  "Caramel Latte":   "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png",
  "Berry Blast":     "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png",
};

const QUANTITIES = [0, 1, 2, 3, 4, 5];

export default function FlavorSelector({ products, quantities, onQuantityChange }) {
  const shakes = products.filter((p) => p.category === "shake");

  return (
    <div>
      <p className="text-xs font-bold tracking-[0.3em] text-[#1A1A1A] mb-4">
        CHOOSE YOUR FLAVOURS:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {shakes.map((product) => {
          const qty = quantities[product.id] || 0;
          const isSelected = qty > 0;

          return (
            <div key={product.id} className="flex flex-col items-center gap-2">
              {/* Flavor card */}
              <button
                onClick={() => onQuantityChange(product.id, qty > 0 ? 0 : 1)}
                className={`relative w-full aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-[#006D77] shadow-lg shadow-[#006D77]/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={PRODUCT_IMAGES[product.flavor] || product.image_url}
                  alt={product.flavor}
                  className="w-full h-full object-cover"
                />
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#006D77] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                {product.is_bestseller && (
                  <div className="absolute top-2 left-2 bg-[#FFB703] text-[#1A1A1A] text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded-full">
                    BEST
                  </div>
                )}
              </button>

              {/* Flavor name */}
              <span className={`text-xs font-semibold text-center leading-tight ${isSelected ? "text-[#006D77]" : "text-gray-500"}`}>
                {product.flavor}
              </span>

              {/* Quantity dropdown */}
              <div className="relative w-full">
                <select
                  value={qty}
                  onChange={(e) => onQuantityChange(product.id, parseInt(e.target.value))}
                  className={`w-full appearance-none rounded-lg border text-sm font-bold text-center py-2 px-3 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#006D77] ${
                    isSelected
                      ? "border-[#006D77] bg-[#006D77] text-white"
                      : "border-gray-200 bg-white text-[#1A1A1A] hover:border-gray-300"
                  }`}
                >
                  {QUANTITIES.map((q) => (
                    <option key={q} value={q} className="bg-white text-[#1A1A1A]">
                      {q}
                    </option>
                  ))}
                </select>
                <div className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xs ${isSelected ? "text-white" : "text-gray-400"}`}>
                  ▼
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}