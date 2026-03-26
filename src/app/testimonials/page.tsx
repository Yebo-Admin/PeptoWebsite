"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <div className="bg-[#F1F1E6]">
      {/* Dark Header */}
      <section className="relative bg-[#1A1A1A] pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              TESTIMONIALS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
              REAL EXPERIENCES WITH{" "}
              <span className="text-[#006D77]">PEPTOMEAL</span>
            </h1>
            <p className="mt-4 text-base text-white/50 max-w-lg mx-auto">
              People use PeptoMeal in different ways &mdash; from busy professionals needing quick nutrition to individuals supporting their health and wellness journeys. Here&apos;s what our community has to say about making PeptoMeal part of their daily routine.
            </p>
          </motion.div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-10">
            {[
              { value: "4.9", label: "AVG RATING" },
              { value: "500+", label: "CUSTOMERS" },
              { value: "97%", label: "RECOMMEND" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-[#FFB703]">{stat.value}</p>
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="horizon-line mt-16" />
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-transparent hover:border-[#006D77]/10 hover:shadow-xl transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      weight="fill"
                      className={
                        i < testimonial.rating
                          ? "text-[#FFB703]"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.body}&rdquo;
                </p>

                <div className="horizon-line my-5" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#006D77] flex items-center justify-center text-white font-black text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#1A1A1A]">
                      {testimonial.name}
                    </p>
                  </div>
                  {testimonial.verified && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#006D77]/10 text-[#006D77] text-[11px] font-bold tracking-wider rounded-full">
                      <CheckCircle size={12} weight="fill" />
                      VERIFIED
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-14"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all"
            >
              TRY PEPTOMEAL TODAY
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
