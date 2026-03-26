import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4724678c7_generated_e7547806.png";
const LIFESTYLE_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/fcdce38ca_generated_d1045059.png";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePos({ x, y });
    };
    const el = heroRef.current;
    if (el) el.addEventListener("mousemove", handleMouseMove);
    return () => { if (el) el.removeEventListener("mousemove", handleMouseMove); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(1.1)`,
        }}
      >
        <img
          src={LIFESTYLE_IMAGE}
          alt="South African landscape with shake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#FFB703] animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-white/80">
                  30-DAY LOVE-IT GUARANTEE
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                BIOLOGICAL
                <br />
                <span className="text-[#FFB703]">FUEL</span>
              </h1>

              <div className="horizon-line my-8 max-w-xs" />

              <p className="text-lg sm:text-xl text-white/70 max-w-md leading-relaxed font-light">
                30g protein. 85+ superfoods. Zero compromises.
                Whole body nutrition in every scoop.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link
                  to={createPageUrl("Shop")}
                  className="group inline-flex items-center gap-3 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(255,183,3,0.3)]"
                >
                  SHOP FLAVOURS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to={createPageUrl("Recipes")}
                  className="inline-flex items-center gap-3 border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-all duration-300 hover:bg-white/10"
                >
                  <Play className="w-4 h-4" />
                  HOW TO MIX
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src={HERO_IMAGE}
                alt="Premium VitaShake in a glass"
                className="w-full rounded-2xl shadow-2xl"
                style={{
                  transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
                  transition: "transform 0.5s ease-out",
                }}
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl">
                <p className="text-xs font-bold tracking-wider text-[#006D77] mb-1">PER SERVING</p>
                <p className="text-3xl font-black text-[#1A1A1A]">30g</p>
                <p className="text-xs text-gray-500 font-medium">PLANT PROTEIN</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom horizon line */}
      <div className="absolute bottom-0 left-0 right-0 horizon-line" />
    </section>
  );
}