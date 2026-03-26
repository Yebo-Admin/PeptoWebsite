"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

const checklist = [
  "Support your daily nutrition with balanced nutrients",
  "Maintain energy and focus throughout the day",
  "Stay fuller for longer with protein and fibre",
  "Support muscle and recovery",
  "Support healthy weight management",
  "Simplify healthy eating into one daily habit",
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              THE PEPTOMEAL DIFFERENCE
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A]">
              More Than a{" "}
              <span className="text-[#006D77]">Meal Replacement</span>
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 leading-relaxed max-w-[55ch] mx-auto mt-6">
              A complete nutritional system designed to support your body — not
              just fill you up.
            </p>
          </motion.div>

          {/* Checklist */}
          <div className="space-y-4">
            {checklist.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#F1F1E6]/40 hover:bg-[#F1F1E6]/70 transition-colors"
              >
                <CheckCircle
                  size={24}
                  weight="fill"
                  className="text-[#006D77] flex-shrink-0 mt-0.5"
                />
                <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-14"
          >
            <div className="horizon-line my-10 max-w-[120px] mx-auto" />
            <p className="text-lg text-[#1A1A1A]/60 leading-relaxed max-w-[55ch] mx-auto italic">
              Perfect for busy lifestyles, active individuals or anyone looking
              for better everyday nutrition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
