import React from "react";
import { motion } from "framer-motion";
import { Droplets, Timer, Smile } from "lucide-react";

const STEPS = [
  {
    icon: Droplets,
    step: "01",
    title: "SCOOP & POUR",
    desc: "Add one sachet (33g) to 300ml of ice-cold water or your favourite plant milk.",
  },
  {
    icon: Timer,
    step: "02",
    title: "SHAKE 20 SEC",
    desc: "Seal your shaker and shake vigorously for 20 seconds. Or blend for silky smoothness.",
  },
  {
    icon: Smile,
    step: "03",
    title: "SIP & THRIVE",
    desc: "Enjoy immediately. 30g protein, vitamins, and gut-healthy nutrients — done in under a minute.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">
            JUST ADD WATER
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white">
            THREE STEPS TO <span className="text-[#006D77]">FUEL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <Icon className="w-8 h-8 text-[#FFB703]" />
                </div>
                <div className="text-6xl font-black text-white/5 absolute top-0 right-4 sm:right-8 select-none">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold tracking-wider text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 w-1/3 h-px bg-gradient-to-r from-white/10 to-transparent translate-x-full" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}