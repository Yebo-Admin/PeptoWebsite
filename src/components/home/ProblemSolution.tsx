"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              The Problem
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900 leading-tight">
              You know what to eat.
              <br />
              You just don&apos;t have the time.
            </h2>
            <div className="mt-8 space-y-4">
              {[
                "Skipping breakfast because mornings are chaos",
                "Grabbing takeaway that leaves you sluggish by 3pm",
                "Spending Sunday meal-prepping for a routine that falls apart by Wednesday",
                "Choosing between convenience and nutrition — every single day",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                  <p className="text-base text-zinc-600 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="p-8 md:p-10 bg-white rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-zinc-100">
              <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                The Solution
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tighter text-zinc-900 leading-tight">
                One shake. Complete nutrition.
                <br />
                Under 60 seconds.
              </h3>
              <p className="mt-6 text-base text-zinc-600 leading-relaxed max-w-[50ch]">
                PeptoMeal gives you everything your body needs — protein, fibre, healthy fats, synbiotics, and 24 vitamins and minerals — in a shake that actually tastes incredible. No prep. No compromise.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "R50", label: "Per sachet" },
                  { value: "110 cal", label: "Per serving" },
                  { value: "15.3g", label: "Protein" },
                  { value: "24", label: "Vitamins & minerals" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 bg-zinc-50 rounded-xl"
                  >
                    <p className="text-xl font-bold text-teal-700 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-500 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
