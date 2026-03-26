"use client";

import { motion } from "framer-motion";
import {
  Fire,
  Barbell,
  GrainsSlash,
  Atom,
  Drop,
  Pill,
} from "@phosphor-icons/react";

const benefits = [
  {
    icon: Fire,
    title: "Low in Calories",
    description:
      "Only 110 calories per serving — designed for smart portion control",
    color: "#006D77",
  },
  {
    icon: Barbell,
    title: "High in Protein",
    description: "15.3g to support muscle, recovery and satiety",
    color: "#FFB703",
  },
  {
    icon: GrainsSlash,
    title: "Source of Fibre",
    description: "4.3g to support digestion and fullness",
    color: "#006D77",
  },
  {
    icon: Atom,
    title: "Synbiotic Formula",
    description: "Prebiotics + probiotics for gut and immune health",
    color: "#FFB703",
  },
  {
    icon: Drop,
    title: "Healthy Fats",
    description: "Omega-3 support for heart and hormonal health",
    color: "#006D77",
  },
  {
    icon: Pill,
    title: "Vitamins & Minerals",
    description: "24 essential nutrients to support daily wellbeing",
    color: "#FFB703",
  },
];

export function BenefitsStrip() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
            WHY PEPTOMEAL
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A]">
            Not All Nutrition Shakes
            <br />
            <span className="text-[#006D77]">Are Created Equal</span>
          </h2>
          <p className="text-lg text-[#1A1A1A]/60 leading-relaxed max-w-[60ch] mx-auto mt-6">
            PeptoMeal delivers complete nutritional support, all in one serving.
            Everything your body needs — in one simple shake.
          </p>
        </motion.div>

        {/* Cards grid - 2 rows of 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#F1F1E6]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${benefit.color}15` }}
              >
                <benefit.icon
                  size={28}
                  weight="bold"
                  style={{ color: benefit.color }}
                />
              </div>

              <h3 className="text-sm font-black tracking-[0.15em] text-[#1A1A1A] uppercase mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: benefit.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
