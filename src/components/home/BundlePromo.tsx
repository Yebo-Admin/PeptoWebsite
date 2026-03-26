"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Package, ShieldCheck, Truck } from "@phosphor-icons/react";

const POWDER_IMAGE =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/347b0ac94_generated_97deeddc.png";

const features = [
  { icon: Package, label: "3 BAGS INCLUDED" },
  { icon: ShieldCheck, label: "30-DAY GUARANTEE" },
  { icon: Truck, label: "FREE SHIPPING" },
];

export function BundlePromo() {
  return (
    <section className="py-24 bg-[#006D77]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src={POWDER_IMAGE}
                alt="PeptoMeal Starter Pack Bundle"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating price badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 px-6 py-4 bg-[#FFB703] rounded-2xl shadow-2xl"
            >
              <p className="text-sm text-[#1A1A1A]/60 line-through font-bold">
                R899
              </p>
              <p className="text-3xl font-black text-[#1A1A1A] tracking-tighter">
                R799
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              BEST VALUE
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[0.9]">
              STARTER
              <br />
              PACK BUNDLE
            </h2>

            {/* Gold accent bar */}
            <div className="w-16 h-1.5 bg-[#FFB703] rounded-full mt-6 mb-6" />

            <p className="text-lg text-white/70 leading-relaxed max-w-[45ch]">
              The perfect way to discover your daily fuel. Three full-size bags
              of our bestselling flavours — Chocolate Treat, Vanilla Swirl, and
              Caramel Latte. 45 servings of complete nutrition at the best
              price.
            </p>

            {/* Feature icons */}
            <div className="flex flex-wrap gap-6 mt-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <f.icon size={20} weight="bold" className="text-[#FFB703]" />
                  </div>
                  <span className="text-xs font-black tracking-[0.15em] text-white/80 uppercase">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/products/starter-pack"
              className="inline-flex items-center justify-center px-8 py-4 mt-10 bg-[#FFB703] text-[#1A1A1A] font-black text-sm tracking-[0.15em] uppercase rounded-full hover:bg-[#FFB703]/90 transition-all active:scale-[0.98] shadow-[0_8px_30px_-6px_rgba(255,183,3,0.35)]"
            >
              GET THE BUNDLE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
