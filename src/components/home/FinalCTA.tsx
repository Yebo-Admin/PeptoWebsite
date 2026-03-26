"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full bg-teal-500/50 blur-3xl" />
        <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] rounded-full bg-teal-700/40 blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
            Start your better
            <br />
            nutrition habit today.
          </h2>
          <p className="mt-6 text-lg text-teal-100 leading-relaxed max-w-lg mx-auto">
            Try the Discovery Box — one sachet of every flavour. Find your favourite, build the routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/products/discovery-box"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:bg-zinc-50 transition-colors active:scale-[0.98] shadow-[0_8px_30px_-6px_rgba(0,0,0,0.15)]"
            >
              Get The Discovery Box — R225
              <ArrowRight size={18} weight="bold" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              Browse All Flavours
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
