"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HERO_IMAGE =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4724678c7_generated_e7547806.png";
const LIFESTYLE_IMAGE =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/fcdce38ca_generated_d1045059.png";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background lifestyle image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mouse.x * -10,
          y: mouse.y * -10,
        }}
      >
        <Image
          src={LIFESTYLE_IMAGE}
          alt=""
          fill
          className="object-cover scale-110 opacity-30"
          priority
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/40" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold pill badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#FFB703]/10 rounded-full border border-[#FFB703]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase">
                COMPLETE NUTRITION
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
              Better Nutrition.
              <br />
              <span className="text-[#FFB703]">One Shake A Day.</span>
            </h1>

            <div className="horizon-line my-8 max-w-[200px]" />

            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch]">
              PeptoMeal is a complete nutritional shake designed to support
              energy, recovery and daily wellbeing — in one convenient serving.
            </p>

            <p className="text-sm text-white/40 leading-relaxed max-w-[50ch] mt-4">
              Because sometimes your body needs more than what your meals can
              provide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFB703] text-[#1A1A1A] font-black text-sm tracking-[0.15em] uppercase rounded-full hover:bg-[#FFB703]/90 transition-all active:scale-[0.98] shadow-[0_8px_30px_-6px_rgba(255,183,3,0.35)]"
              >
                SHOP PEPTOMEAL
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-black text-sm tracking-[0.15em] uppercase rounded-full border-2 border-white/30 hover:border-white/60 transition-all"
              >
                EXPLORE FLAVOURS
              </Link>
            </div>
          </motion.div>

          {/* Right: Product image with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              className="relative w-full max-w-lg aspect-square"
              style={{
                x: mouse.x * 15,
                y: mouse.y * 15,
              }}
            >
              <Image
                src={HERO_IMAGE}
                alt="PeptoMeal product"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[15%] left-[5%] px-5 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
            >
              <p className="text-3xl font-black text-[#FFB703] tracking-tighter">
                110
              </p>
              <p className="text-xs font-bold tracking-[0.3em] text-white/70 uppercase">
                CALORIES
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom horizon line */}
      <div className="absolute bottom-0 left-0 right-0 horizon-line" />
    </section>
  );
}
