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
    description: "Why 90% of morning routines fail by week three — and the simple framework that makes consistency automatic.",
    duration: "32 min",
    date: "Mar 19, 2026",
    image: "https://picsum.photos/seed/pod-ep1/400/400",
  },
  {
    id: "ep-2",
    number: 11,
    title: "Gut Health Decoded: What Synbiotics Actually Do",
    description: "A nutritionist breaks down prebiotics, probiotics, and synbiotics — and why most supplement labels are misleading.",
    duration: "41 min",
    date: "Mar 12, 2026",
    image: "https://picsum.photos/seed/pod-ep2/400/400",
  },
  {
    id: "ep-3",
    number: 10,
    title: "Protein Timing: Does It Really Matter?",
    description: "We dive into the research on protein timing, the anabolic window myth, and what actually moves the needle for everyday fitness.",
    duration: "28 min",
    date: "Mar 5, 2026",
    image: "https://picsum.photos/seed/pod-ep3/400/400",
  },
  {
    id: "ep-4",
    number: 9,
    title: "The R50 Meal: How to Eat Well on a Budget",
    description: "Practical strategies for getting genuine nutrition on a tight budget — from a dietitian who works with real families.",
    duration: "37 min",
    date: "Feb 26, 2026",
    image: "https://picsum.photos/seed/pod-ep4/400/400",
  },
  {
    id: "ep-5",
    number: 8,
    title: "Why Meal Replacements Have a Bad Reputation",
    description: "The history of meal replacements, where the industry went wrong, and what the next generation of nutrition looks like.",
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
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 rounded-full mb-6">
                <Microphone size={14} weight="fill" className="text-teal-400" />
                <span className="text-xs font-semibold text-teal-400 tracking-wide uppercase">
                  The PeptoMeal Podcast
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
                Honest conversations
                <br />
                about real nutrition.
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-lg">
                Weekly episodes with nutritionists, athletes, and everyday people building healthier routines. No fads, no gatekeeping — just practical insights you can use today.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <a
                      key={platform.label}
                      href={platform.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/15 transition-colors"
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
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-zinc-800 border border-zinc-700/50">
                <img
                  src="https://picsum.photos/seed/pepto-podcast-cover/600/600"
                  alt="The PeptoMeal Podcast cover art"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tighter text-zinc-900 mb-8">
            What the show covers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Daily nutrition habits",
              "Gut health & synbiotics",
              "Protein & recovery",
              "Budget-friendly eating",
              "Meal replacement science",
              "Fitness for busy people",
              "Mental clarity & food",
              "South African wellness",
            ].map((topic) => (
              <div
                key={topic}
                className="p-4 bg-zinc-50 rounded-xl text-sm font-medium text-zinc-700 text-center"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tighter text-zinc-900 mb-8">
            Recent Episodes
          </h2>
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.06)] cursor-pointer"
              >
                <div className="relative w-full sm:w-24 h-32 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-zinc-200">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/30 group-hover:bg-zinc-900/40 transition-colors">
                    <Play size={24} weight="fill" className="text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                    <span>Ep. {episode.number}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{episode.date}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="inline-flex items-center gap-1">
                      <Timer size={12} />
                      {episode.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-zinc-900 tracking-tight group-hover:text-teal-700 transition-colors">
                    {episode.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 line-clamp-2">
                    {episode.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tighter text-zinc-900">
            Want to try what we talk about?
          </h2>
          <p className="mt-3 text-base text-zinc-500 max-w-md mx-auto">
            The nutrition we discuss on every episode — in a single sachet.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link
              href="/shop"
              className="px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors"
            >
              Shop PeptoMeal
            </Link>
            <Link
              href="/recipes"
              className="px-8 py-3.5 border border-zinc-200 text-zinc-700 font-semibold rounded-full hover:bg-zinc-50 transition-colors"
            >
              Browse Recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
