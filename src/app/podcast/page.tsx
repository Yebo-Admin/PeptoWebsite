"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Play,
  SpotifyLogo,
  AppleLogo,
  YoutubeLogo,
  Timer,
  Microphone,
} from "@phosphor-icons/react";

const episodes = [
  {
    id: "ep-1",
    number: 12,
    title: "Building a Morning Nutrition Routine That Actually Sticks",
    description:
      "Why 90% of morning routines fail by week three — and the simple framework that makes consistency automatic.",
    duration: "32 min",
    date: "Mar 19, 2026",
    image: "https://picsum.photos/seed/pod-ep1/400/400",
  },
  {
    id: "ep-2",
    number: 11,
    title: "Gut Health Decoded: What Synbiotics Actually Do",
    description:
      "A nutritionist breaks down prebiotics, probiotics, and synbiotics — and why most supplement labels are misleading.",
    duration: "41 min",
    date: "Mar 12, 2026",
    image: "https://picsum.photos/seed/pod-ep2/400/400",
  },
  {
    id: "ep-3",
    number: 10,
    title: "Protein Timing: Does It Really Matter?",
    description:
      "We dive into the research on protein timing, the anabolic window myth, and what actually moves the needle for everyday fitness.",
    duration: "28 min",
    date: "Mar 5, 2026",
    image: "https://picsum.photos/seed/pod-ep3/400/400",
  },
  {
    id: "ep-4",
    number: 9,
    title: "The R50 Meal: How to Eat Well on a Budget",
    description:
      "Practical strategies for getting genuine nutrition on a tight budget — from a dietitian who works with real families.",
    duration: "37 min",
    date: "Feb 26, 2026",
    image: "https://picsum.photos/seed/pod-ep4/400/400",
  },
  {
    id: "ep-5",
    number: 8,
    title: "Why Meal Replacements Have a Bad Reputation",
    description:
      "The history of meal replacements, where the industry went wrong, and what the next generation of nutrition looks like.",
    duration: "44 min",
    date: "Feb 19, 2026",
    image: "https://picsum.photos/seed/pod-ep5/400/400",
  },
];

const platforms = [
  { icon: SpotifyLogo, label: "Spotify", href: "#" },
  { icon: AppleLogo, label: "Apple Podcasts", href: "#" },
  { icon: YoutubeLogo, label: "YouTube", href: "#" },
];

export default function PodcastPage() {
  return (
    <div className="bg-[#F1F1E6]">
      {/* Dark Hero */}
      <section className="relative bg-[#1A1A1A] pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full bg-[#006D77]/10 blur-3xl" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#006D77]/10 rounded-full mb-6">
                <Microphone size={14} weight="fill" className="text-[#006D77]" />
                <span className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase">
                  THE PEPTOMEAL PODCAST
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight">
                CONVERSATIONS ABOUT HEALTH,
                <br />
                NUTRITION AND{" "}
                <span className="text-[#006D77]">WELLBEING</span>
              </h1>
              <p className="mt-6 text-base text-white/50 leading-relaxed max-w-lg">
                The PeptoMeal Podcast explores topics around nutrition, lifestyle and overall wellbeing. Through conversations with experts, professionals and inspiring individuals, the podcast aims to share practical insights that help people better understand their health and daily habits. Tune in for discussions that inform, inspire and support healthier living.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <a
                      key={platform.label}
                      href={platform.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-bold tracking-wider rounded-full hover:bg-white/15 transition-colors"
                    >
                      <Icon size={18} weight="fill" />
                      {platform.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative max-w-sm mx-auto lg:ml-auto"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#2D2D2D] border border-white/5">
                <img
                  src="https://picsum.photos/seed/pepto-podcast-cover/600/600"
                  alt="The PeptoMeal Podcast cover art"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="horizon-line mt-16" />
      </section>

      {/* Topics */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-3">
              WHAT WE COVER
            </p>
            <h2 className="text-3xl font-black tracking-tighter text-[#1A1A1A]">
              SHOW <span className="text-[#006D77]">TOPICS</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Daily nutrition habits",
              "Gut health & synbiotics",
              "Protein & recovery",
              "Budget-friendly eating",
              "Meal replacement science",
              "Fitness for busy people",
              "Mental clarity & food",
              "South African wellness",
            ].map((topic, i) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 bg-white rounded-xl text-sm font-bold text-[#1A1A1A] text-center tracking-tight"
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizon divider */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="horizon-line" />
      </div>

      {/* Episodes */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-3">
              LATEST EPISODES
            </p>
            <h2 className="text-3xl font-black tracking-tighter text-[#1A1A1A]">
              RECENT <span className="text-[#006D77]">DROPS</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-2xl border border-transparent hover:border-[#006D77]/10 transition-all hover:shadow-xl cursor-pointer"
              >
                <div className="relative w-full sm:w-24 h-32 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#F1F1E6]">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A]/30 group-hover:bg-[#1A1A1A]/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#FFB703] flex items-center justify-center">
                      <Play size={18} weight="fill" className="text-[#1A1A1A]" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <span className="font-bold text-[#006D77]">Ep. {episode.number}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{episode.date}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="inline-flex items-center gap-1">
                      <Timer size={12} />
                      {episode.duration}
                    </span>
                  </div>
                  <h3 className="font-black text-[#1A1A1A] tracking-tight group-hover:text-[#006D77] transition-colors">
                    {episode.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {episode.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell CTA */}
      <section className="py-16 md:py-20 bg-[#006D77]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
              WANT TO TRY WHAT WE TALK ABOUT?
            </h2>
            <p className="mt-3 text-base text-white/60 max-w-md mx-auto">
              The nutrition we discuss on every episode — in a single serving.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-colors"
              >
                SHOP PEPTOMEAL
              </Link>
              <Link
                href="/recipes"
                className="px-8 py-3.5 border border-white/20 text-white font-bold tracking-wider rounded-full hover:bg-white/10 transition-colors"
              >
                BROWSE RECIPES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
