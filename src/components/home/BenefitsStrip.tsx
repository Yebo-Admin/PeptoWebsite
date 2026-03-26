"use client";

import { motion } from "framer-motion";
import {
  Lightning,
  Heartbeat,
  Barbell,
  Leaf,
  Timer,
  ShieldCheck,
} from "@phosphor-icons/react";

const benefits = [
  { icon: Lightning, label: "Energy", description: "Sustained daily energy" },
  { icon: Heartbeat, label: "Recovery", description: "Muscle & body recovery" },
  { icon: Leaf, label: "Gut Health", description: "Synbiotic formula" },
  { icon: Barbell, label: "Protein", description: "15.3g high-quality protein" },
  { icon: Timer, label: "60 Seconds", description: "Ready in under a minute" },
  { icon: ShieldCheck, label: "24 Vitamins", description: "Complete micronutrient profile" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function BenefitsStrip() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-zinc-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.label}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center">
                  <Icon size={24} weight="duotone" className="text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {benefit.label}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
