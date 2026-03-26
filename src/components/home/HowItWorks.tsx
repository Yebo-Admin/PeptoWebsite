"use client";

import { motion } from "framer-motion";
import { Drop, HandGrabbing, SmileyWink } from "@phosphor-icons/react";

const steps = [
  {
    icon: Drop,
    step: "01",
    title: "Add Water",
    description: "Pour 250-300ml of cold water into your shaker or glass.",
  },
  {
    icon: HandGrabbing,
    step: "02",
    title: "Shake It Up",
    description: "Add one PeptoMeal sachet and shake vigorously for 15 seconds.",
  },
  {
    icon: SmileyWink,
    step: "03",
    title: "Enjoy",
    description: "Drink immediately. Complete nutrition in under 60 seconds.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
            Simple by design
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
            Three steps. That&apos;s it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center">
                    <Icon size={28} weight="duotone" className="text-teal-600" />
                  </div>
                  <span className="text-5xl font-bold text-zinc-100 tracking-tighter select-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-zinc-500 leading-relaxed max-w-sm">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(100%_-_1rem)] w-[calc(100%_-_4rem)] h-px bg-zinc-200/60" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
