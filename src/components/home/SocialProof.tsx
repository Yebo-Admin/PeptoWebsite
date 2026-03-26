"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    id: 1,
    quote: "Perfect for my busy mornings.",
    name: "Sarah K.",
    label: "VERIFIED BUYER",
  },
  {
    id: 2,
    quote: "Convenient and keeps me full for hours.",
    name: "Thabo M.",
    label: "VERIFIED BUYER",
  },
  {
    id: 3,
    quote: "An easy way to stay on track with nutrition.",
    name: "Lerato P.",
    label: "VERIFIED BUYER",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-[#F1F1E6]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A]">
            Real people. <span className="text-[#FFB703]">Real nutrition.</span>
          </h2>
        </motion.div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              {/* Quote icon */}
              <Quotes
                size={36}
                weight="fill"
                className="text-[#006D77]/20 mx-auto mb-6"
              />

              {/* Quote text */}
              <p className="text-lg sm:text-xl font-light italic text-[#1A1A1A]/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6">
                <p className="text-base font-black text-[#1A1A1A] tracking-tight">
                  {t.name}
                </p>
                <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mt-1">
                  {t.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
