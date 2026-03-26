"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[0.95]">
              Give your body the nutrition{" "}
              <span className="text-[#FFB703]">it deserves.</span>
            </h2>

            <div className="horizon-line my-10 max-w-[120px] mx-auto" />

            <p className="text-lg text-white/60 leading-relaxed max-w-[55ch] mx-auto">
              Healthy habits don&apos;t have to be complicated. PeptoMeal makes
              balanced nutrition simple, convenient and delicious.
            </p>

            <div className="mt-10">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#FFB703] text-[#1A1A1A] font-black text-sm tracking-[0.15em] uppercase rounded-full hover:bg-[#FFB703]/90 transition-all active:scale-[0.98] shadow-[0_8px_30px_-6px_rgba(255,183,3,0.35)]"
              >
                SHOP PEPTOMEAL
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
