"use client";

import { motion } from "framer-motion";
import { Funnel, Drop, Coffee } from "@phosphor-icons/react";

const steps = [
  {
    icon: Funnel,
    number: "01",
    title: "SCOOP & POUR",
    description:
      "Add one level scoop of PeptoMeal to 300ml of cold water in your shaker.",
  },
  {
    icon: Drop,
    number: "02",
    title: "SHAKE 20 SEC",
    description:
      "Seal the lid and shake vigorously for 20 seconds until smooth and creamy.",
  },
  {
    icon: Coffee,
    number: "03",
    title: "SIP & THRIVE",
    description:
      "Enjoy immediately. 30g protein, 85+ superfoods, and complete nutrition in every sip.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#1A1A1A]">
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
            JUST ADD WATER
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            THREE STEPS TO <span className="text-[#006D77]">FUEL</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Icon box */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <step.icon size={28} weight="bold" className="text-[#FFB703]" />
              </div>

              {/* Ghost step number */}
              <p className="text-6xl font-black text-white/5 tracking-tighter leading-none mb-4 select-none">
                {step.number}
              </p>

              {/* Title */}
              <h3 className="text-sm font-black tracking-wider text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
