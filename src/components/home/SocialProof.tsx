"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quotes, CaretLeft, CaretRight } from "@phosphor-icons/react";

const testimonials = [
  {
    id: 1,
    quote:
      "I replaced my morning cereal with PeptoMeal three months ago. More energy, better focus, and I've dropped two belt sizes without even trying. This stuff is the real deal.",
    name: "Thabo M.",
    label: "VERIFIED BUYER",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "As a mom of three, I never had time for a proper breakfast. PeptoMeal gives me everything I need in 30 seconds. My kids even steal sips of my Chocolate Treat!",
    name: "Lerato K.",
    label: "VERIFIED BUYER",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "I'm a trail runner and I use Caramel Latte as my pre-run fuel. 30 grams of plant protein, tastes incredible, and my recovery times have improved dramatically.",
    name: "James P.",
    label: "VERIFIED BUYER",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Finally a meal replacement that doesn't taste like cardboard. The Berry Blast is genuinely delicious. I look forward to it every single morning.",
    name: "Naledi S.",
    label: "VERIFIED BUYER",
    rating: 5,
  },
];

export function SocialProof() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

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
            REAL RESULTS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A]">
            WHAT THEY <span className="text-[#FFB703]">SAY</span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Quote icon */}
              <Quotes
                size={48}
                weight="fill"
                className="text-[#006D77]/20 mx-auto mb-6"
              />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    weight="fill"
                    className="text-[#FFB703]"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xl sm:text-2xl font-light italic text-[#1A1A1A]/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <p className="mt-8 text-lg font-black text-[#1A1A1A] tracking-tight">
                {t.name}
              </p>
              <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mt-1">
                {t.label}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]/15 flex items-center justify-center hover:border-[#006D77] hover:text-[#006D77] transition-colors text-[#1A1A1A]/50"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={20} weight="bold" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-[#006D77] w-8"
                      : "bg-[#1A1A1A]/15 hover:bg-[#1A1A1A]/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]/15 flex items-center justify-center hover:border-[#006D77] hover:text-[#006D77] transition-colors text-[#1A1A1A]/50"
              aria-label="Next testimonial"
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
