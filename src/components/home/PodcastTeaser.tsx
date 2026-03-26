"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Microphone, Play, ArrowRight } from "@phosphor-icons/react";

export function PodcastTeaser() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 p-8 md:p-14 lg:p-20">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-[20%] w-[300px] h-[300px] rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 rounded-full mb-6">
                <Microphone size={14} weight="fill" className="text-teal-400" />
                <span className="text-xs font-semibold text-teal-400 tracking-wide uppercase">
                  The PeptoMeal Podcast
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight">
                Conversations about nutrition,
                <br />
                habits, and real wellness.
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-lg">
                Weekly episodes with nutritionists, athletes, and everyday people
                building healthier routines. Honest, practical, zero fluff.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-500 transition-colors"
                >
                  <Play size={16} weight="fill" />
                  Listen Now
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-zinc-400 text-sm font-semibold hover:text-white transition-colors"
                >
                  All Episodes
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-square max-w-sm mx-auto rounded-[2rem] overflow-hidden bg-zinc-800 border border-zinc-700/50">
                <img
                  src="https://picsum.photos/seed/pepto-podcast/600/600"
                  alt="The PeptoMeal Podcast cover art"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Floating episode card */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:left-0 px-5 py-3.5 bg-white rounded-xl shadow-[0_12px_30px_-8px_rgba(0,0,0,0.25)] max-w-[260px]"
              >
                <p className="text-[10px] font-semibold text-teal-600 uppercase tracking-widest">Latest Episode</p>
                <p className="text-sm font-bold text-zinc-900 mt-1 leading-tight">Building a Morning Nutrition Routine That Actually Sticks</p>
                <p className="text-xs text-zinc-500 mt-1">32 min</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
