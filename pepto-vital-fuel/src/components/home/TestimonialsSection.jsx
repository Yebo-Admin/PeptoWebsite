import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection({ reviews }) {
  const [current, setCurrent] = useState(0);
  const displayReviews = reviews.slice(0, 6);

  const next = () => setCurrent((c) => (c + 1) % displayReviews.length);
  const prev = () => setCurrent((c) => (c - 1 + displayReviews.length) % displayReviews.length);

  if (!displayReviews.length) return null;
  const review = displayReviews[current];

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#F1F1E6" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] mb-4">
          REAL RESULTS
        </p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A] mb-16">
          WHAT THEY <span className="text-[#FFB703]">SAY</span>
        </h2>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Quote className="w-10 h-10 text-[#006D77]/20 mx-auto mb-6" />
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-5 h-5 ${
                      s < (review.rating || 0)
                        ? "fill-[#FFB703] text-[#FFB703]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xl sm:text-2xl text-[#1A1A1A] font-light leading-relaxed max-w-2xl mx-auto italic">
                "{review.body}"
              </p>
              <div className="mt-8">
                <p className="font-bold text-[#1A1A1A]">{review.author_name}</p>
                {review.verified && (
                  <p className="text-xs text-[#006D77] font-semibold tracking-wider mt-1">
                    VERIFIED BUYER
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]/10 hover:border-[#006D77] flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          <div className="flex items-center gap-2">
            {displayReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-[#006D77]"
                    : "w-2 h-2 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]/10 hover:border-[#006D77] flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
          </button>
        </div>
      </div>
    </section>
  );
}