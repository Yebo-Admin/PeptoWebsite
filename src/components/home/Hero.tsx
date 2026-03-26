"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-zinc-50">
      {/* Background gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-teal-50/80 via-teal-50/30 to-transparent" />
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-gold-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 w-full py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 rounded-full border border-teal-200/60 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                110 Calories. Complete Nutrition.
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-zinc-900">
              Better Nutrition.
              <br />
              <span className="text-teal-600">One Shake A Day.</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-[50ch]">
              Delicious flavours. 15.3g protein. Synbiotics for gut health.
              24 vitamins and minerals. Everything your body needs in under 60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all active:scale-[0.98] shadow-[0_8px_30px_-6px_rgba(5,200,170,0.35)]"
              >
                Shop Flavours
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-700 font-semibold rounded-full border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
              >
                How It Works
              </Link>
            </div>

            {/* Trust metrics */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-zinc-200/60">
              {[
                { value: "15.3g", label: "Protein" },
                { value: "4.3g", label: "Fibre" },
                { value: "24", label: "Vitamins" },
                { value: "110", label: "Calories" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-zinc-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Floating circles behind */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full bg-teal-100/50 animate-pulse" style={{ animationDuration: "4s" }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65%] h-[65%] rounded-full bg-teal-200/30" />
              </div>
              {/* Product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[70%] h-[70%] rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]">
                  <img
                    src="https://picsum.photos/seed/pepto-hero/600/600"
                    alt="PeptoMeal Nutritional Shake sachet"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[5%] px-4 py-2.5 bg-white rounded-2xl shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)] border border-zinc-100"
              >
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Omega-3</p>
                <p className="text-sm font-bold text-zinc-900">Healthy Fats</p>
              </motion.div>
              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[15%] left-[0%] px-4 py-2.5 bg-white rounded-2xl shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)] border border-zinc-100"
              >
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Synbiotics</p>
                <p className="text-sm font-bold text-zinc-900">Gut Health</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
