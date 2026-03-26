"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Funnel } from "@phosphor-icons/react";
import Link from "next/link";
import { testimonials, type Testimonial } from "@/data/testimonials";

type UseCase = "all" | Testimonial["useCase"];

const useCaseFilters: { value: UseCase; label: string }[] = [
  { value: "all", label: "All Reviews" },
  { value: "busy-mornings", label: "Busy Mornings" },
  { value: "post-workout", label: "Post-Workout" },
  { value: "weight-support", label: "Weight Support" },
  { value: "convenience", label: "Convenience" },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<UseCase>("all");

  const filtered =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.useCase === filter);

  return (
    <>
      <section className="pt-16 pb-10 md:pt-20 md:pb-14 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
              Real People. Real Results.
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
              What our customers say
            </h1>
            <p className="mt-4 text-lg text-zinc-500">
              Honest reviews from busy professionals, athletes, and health-conscious adults across South Africa.
            </p>
          </motion.div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-10">
            {[
              { value: "4.9", label: "Average Rating" },
              { value: "500+", label: "Happy Customers" },
              { value: "97%", label: "Would Recommend" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
            <Funnel size={18} className="text-zinc-400 shrink-0" />
            {useCaseFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  filter === f.value
                    ? "bg-teal-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filtered.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-6 md:p-8 bg-zinc-50 rounded-[1.5rem] border border-zinc-100"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-gold-500" />
                    ))}
                  </div>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-zinc-200/60">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-zinc-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {testimonial.role}, {testimonial.location}
                      </p>
                    </div>
                    {testimonial.flavour && (
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">
                        {testimonial.flavour}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors"
            >
              Try PeptoMeal Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
