"use client";

import { motion } from "framer-motion";
import { Warning } from "@phosphor-icons/react";

const painPoints = ["Busy schedules.", "Skipped meals.", "Convenience foods."];

export function ProblemSection() {
  return (
    <section className="py-24 bg-[#F1F1E6]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Warning size={40} weight="bold" className="text-[#FFB703] mx-auto mb-6" />

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A] leading-[0.95]">
              Most people aren&apos;t getting the nutrients{" "}
              <span className="text-[#006D77]">they need.</span>
            </h2>
          </motion.div>

          {/* Pain points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10"
          >
            {painPoints.map((point, i) => (
              <span
                key={i}
                className="text-lg sm:text-xl font-black tracking-tight text-[#1A1A1A]/70"
              >
                {point}
              </span>
            ))}
          </motion.div>

          <div className="horizon-line my-10 max-w-[120px] mx-auto" />

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-[#1A1A1A]/60 leading-relaxed max-w-[55ch] mx-auto"
          >
            Even when we eat regularly, our bodies may still lack the balanced
            nutrition needed for energy, recovery and long-term health.
          </motion.p>

          {/* Closing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-black tracking-tighter text-[#006D77] mt-10"
          >
            PeptoMeal helps bridge that gap.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
