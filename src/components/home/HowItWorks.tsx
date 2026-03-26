"use client";

import { motion } from "framer-motion";
import { Drop, Shuffle, Coffee, Sun, Clock, PersonSimpleRun, Lightning } from "@phosphor-icons/react";

const steps = [
  {
    icon: Drop,
    number: "01",
    title: "ADD WATER",
  },
  {
    icon: Shuffle,
    number: "02",
    title: "SHAKE",
  },
  {
    icon: Coffee,
    number: "03",
    title: "ENJOY",
  },
];

const uses = [
  { icon: Sun, label: "As a quick breakfast" },
  { icon: Clock, label: "Between meals" },
  { icon: PersonSimpleRun, label: "After exercise" },
  { icon: Lightning, label: "Whenever you need balanced nutrition fast" },
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
            HOW IT WORKS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            One simple <span className="text-[#006D77]">habit.</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <h3 className="text-sm font-black tracking-wider text-white">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Horizon divider */}
        <div className="horizon-line my-12 max-w-[200px] mx-auto" />

        {/* Use occasions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-8">
            PERFECT FOR
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {uses.map((use, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10"
              >
                <use.icon size={18} weight="bold" className="text-[#006D77]" />
                <span className="text-sm text-white/70 font-medium">
                  {use.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
