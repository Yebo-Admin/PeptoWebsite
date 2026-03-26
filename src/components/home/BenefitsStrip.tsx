"use client";

import { motion } from "framer-motion";
import { Barbell, ShieldCheck, Heart, Leaf } from "@phosphor-icons/react";

const benefits = [
  {
    icon: Barbell,
    title: "30G PROTEIN",
    description:
      "Complete plant protein blend for muscle recovery, lasting energy, and daily performance.",
    color: "#006D77",
  },
  {
    icon: ShieldCheck,
    title: "IMMUNE SUPPORT",
    description:
      "15 essential vitamins and minerals to strengthen your body\u2019s natural defences.",
    color: "#FFB703",
  },
  {
    icon: Heart,
    title: "GUT HEALTH",
    description:
      "Prebiotics and live probiotics working together for optimal digestion and absorption.",
    color: "#006D77",
  },
  {
    icon: Leaf,
    title: "CLEAN FORMULA",
    description:
      "No GMO, gluten, soy, or artificial ingredients. Just real food, scientifically blended.",
    color: "#FFB703",
  },
];

export function BenefitsStrip() {
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
            WHY PEPTOMEALS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A]">
            MORE THAN JUST
            <br />
            <span className="text-[#006D77]">PROTEIN</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
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

              <h3 className="text-sm font-black tracking-[0.15em] text-[#1A1A1A] mb-3">
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
