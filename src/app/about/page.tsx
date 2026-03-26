"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkle,
  Scales,
  Lightning,
  Smiley,
  Heart,
  ShieldCheck,
  Atom,
  Barbell,
  Plant,
  Pill,
  Drop,
  GrainsSlash,
} from "@phosphor-icons/react";

const SA_IMAGE =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/fcdce38ca_generated_d1045059.png";
const INGREDIENTS_IMAGE =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png";

const philosophyItems = [
  {
    icon: Sparkle,
    title: "SIMPLE",
    description: "Healthy habits shouldn\u2019t be complicated.",
  },
  {
    icon: Scales,
    title: "BALANCED",
    description:
      "The body needs a variety of nutrients working together.",
  },
  {
    icon: Lightning,
    title: "CONVENIENT",
    description: "Good nutrition should fit into real life.",
  },
  {
    icon: Smiley,
    title: "ENJOYABLE",
    description:
      "If something tastes good, it becomes part of your routine.",
  },
];

const scienceBullets = [
  {
    icon: Barbell,
    text: "High-quality protein for muscle and recovery",
  },
  {
    icon: Plant,
    text: "Fibre for digestion and satiety",
  },
  {
    icon: GrainsSlash,
    text: "Synbiotics (pre + probiotics) for gut health",
  },
  {
    icon: Drop,
    text: "Healthy fats including Omega-3 for cellular and hormonal support",
  },
  {
    icon: Pill,
    text: "24 essential vitamins and minerals for energy and immune function",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F1F1E6]">
      {/* Dark Hero */}
      <section className="relative bg-[#1A1A1A] pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={SA_IMAGE}
            alt="Background landscape"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              ABOUT PEPTOMEAL
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight">
              OUR <span className="text-[#006D77]">STORY</span>
            </h1>
            <p className="mt-6 text-base text-white/50 max-w-lg mx-auto">
              Balanced nutrition made simple, practical and enjoyable.
            </p>
          </motion.div>
        </div>

        <div className="horizon-line mt-16" />
      </section>

      {/* Section 1 — Our Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F1F1E6]">
                <Image
                  src={INGREDIENTS_IMAGE}
                  alt="PeptoMeal product range"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-3">
                OUR STORY
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A]">
                WHY <span className="text-[#006D77]">PEPTOMEAL</span>
              </h2>
              <div className="horizon-line my-6" />
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  PeptoMeal was created from a simple but important observation:
                  many people struggle to get the balanced nutrition their bodies
                  need every day.
                </p>
                <p>
                  Modern life is busy. Meals are skipped, routines are
                  unpredictable, and even when we try to eat well, our diets
                  don&apos;t always provide the right balance of nutrients to
                  support energy, recovery and overall wellbeing.
                </p>
                <p>
                  PeptoMeal was developed to help bridge that gap &mdash;
                  offering a convenient nutritional shake designed to support the
                  body with balanced nutrients in a simple, practical way.
                </p>
                <p>
                  Today, PeptoMeal has become part of many people&apos;s daily
                  routines, helping them support their nutrition whether
                  they&apos;re managing a busy schedule, working towards health
                  goals, or simply looking for a smarter way to fuel their day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Science Behind PeptoMeal */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-3">
              THE FORMULATION
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A]">
              THE SCIENCE BEHIND{" "}
              <span className="text-[#006D77]">PEPTOMEAL</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5 text-base text-gray-600 leading-relaxed"
            >
              <p>
                PeptoMeal is built on a simple but powerful principle: Your body
                doesn&apos;t just need calories &mdash; it needs the right
                balance of nutrients working together.
              </p>
              <p>
                Many nutritional products focus on a single outcome &mdash;
                protein, weight loss, or energy. PeptoMeal is different.
              </p>
              <p>
                It combines multiple scientifically supported components into
                one formulation:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {scienceBullets.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 bg-[#F1F1E6] rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#006D77]/10 flex items-center justify-center shrink-0">
                      <Icon
                        size={20}
                        weight="duotone"
                        className="text-[#006D77]"
                      />
                    </div>
                    <p className="text-sm font-medium text-[#1A1A1A] leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-base text-gray-600 leading-relaxed"
            >
              <p>
                This multi-system approach supports the body at a deeper level
                &mdash; helping improve how nutrients are absorbed, utilised and
                sustained.
              </p>
              <p className="font-bold text-[#1A1A1A]">
                Because real health starts at a cellular level.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Philosophy */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-3">
              WHAT GUIDES US
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A]">
              OUR <span className="text-[#006D77]">PHILOSOPHY</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 max-w-md mx-auto">
              We believe nutrition should be:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#006D77]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon
                      size={28}
                      weight="duotone"
                      className="text-[#006D77]"
                    />
                  </div>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-[#1A1A1A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-base text-gray-600 leading-relaxed text-center max-w-2xl mx-auto"
          >
            PeptoMeal was created to make it easier for people to support their
            bodies with balanced nutrition in a way that is both practical and
            enjoyable.
          </motion.p>
        </div>
      </section>

      {/* Section 4 — Supporting Everyday Health */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-3">
                FOR EVERYONE
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A] mb-6">
                SUPPORTING EVERYDAY{" "}
                <span className="text-[#006D77]">HEALTH</span>
              </h2>
              <div className="horizon-line mb-8 mx-auto max-w-xs" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 text-base text-gray-600 leading-relaxed"
            >
              <p>
                PeptoMeal is used by people in many different ways &mdash; from
                busy professionals looking for quick nutrition to individuals
                supporting their health and recovery journeys.
              </p>
              <p>
                Its balanced nutritional profile also makes it a convenient
                option for those who may need additional nutritional support when
                regular meals are not always possible.
              </p>
              <p>
                At its core, PeptoMeal exists to make balanced nutrition more
                accessible, helping people support their bodies with nutrients
                they need to feel their best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 — Our Commitment + CTA */}
      <section className="py-20 md:py-28 bg-[#006D77]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              OUR COMMITMENT
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight max-w-2xl mx-auto">
              PRACTICAL NUTRITIONAL SOLUTIONS FOR{" "}
              <span className="text-[#FFB703]">EVERYDAY WELLBEING</span>
            </h2>
            <p className="mt-6 text-base text-white/60 max-w-xl mx-auto leading-relaxed">
              Our goal is simple: To create practical nutritional solutions that
              support healthier lifestyles and everyday wellbeing. Because better
              nutrition shouldn&apos;t feel complicated &mdash; it should feel
              achievable.
            </p>
            <p className="mt-8 text-lg font-bold text-white/80">
              Discover how simple daily nutrition can be.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all"
            >
              SHOP NOW
              <ArrowRight size={18} weight="bold" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
