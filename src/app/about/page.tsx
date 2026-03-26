"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Dna,
  Drop,
  Leaf,
  ShieldCheck,
  Heart,
  Lightning,
} from "@phosphor-icons/react";

const pillars = [
  {
    icon: Dna,
    title: "High-Quality Protein",
    description:
      "15.3g of whey and skim-milk protein per serving. A complete amino acid profile that supports muscle maintenance, recovery, and daily energy.",
  },
  {
    icon: Leaf,
    title: "Synbiotic Formula",
    description:
      "A combination of prebiotics and probiotics working together to support gut health, digestion, and nutrient absorption.",
  },
  {
    icon: Drop,
    title: "Omega-3 & Healthy Fats",
    description:
      "Essential fatty acids that support brain function, heart health, and anti-inflammatory balance — without added complexity.",
  },
  {
    icon: ShieldCheck,
    title: "24 Vitamins & Minerals",
    description:
      "A comprehensive micronutrient profile covering your daily essentials — from Vitamin D and B12 to zinc, iron, and magnesium.",
  },
  {
    icon: Heart,
    title: "4.3g Dietary Fibre",
    description:
      "Supports satiety, blood sugar balance, and digestive regularity. Keeps you fuller for longer without the crash.",
  },
  {
    icon: Lightning,
    title: "Only 110 Calories",
    description:
      "Substantial nutrition in a low-calorie format. Designed to support — not sabotage — your daily intake goals.",
  },
];

const values = [
  {
    title: "Science-Led, Not Hype-Led",
    description: "Every ingredient is chosen for a reason. No fillers, no fairy dust, no marketing-driven formulation.",
  },
  {
    title: "Taste Matters",
    description: "Nutrition you don't enjoy is nutrition you won't stick with. We obsess over flavour because consistency depends on it.",
  },
  {
    title: "Honest Communication",
    description: "We use 'supports' language, not miracle claims. PeptoMeal supports your nutrition — it doesn't replace a balanced lifestyle.",
  },
  {
    title: "Accessible Nutrition",
    description: "At R50 per serving, better nutrition shouldn't be a luxury. We keep it attainable, simple, and real.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-zinc-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/60 to-transparent pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                Our Science
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight">
                Better nutrition
                <br />
                made simple.
              </h1>
              <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl">
                PeptoMeal exists because balanced daily nutrition shouldn&apos;t require a degree in dietetics or two hours of meal prep. We built a shake that delivers everything your body needs — and genuinely tastes like something you&apos;d choose to drink.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
                Why PeptoMeal exists
              </h2>
              <div className="mt-8 space-y-6 text-base text-zinc-600 leading-relaxed">
                <p>
                  Most people know what they should eat. The problem isn&apos;t knowledge — it&apos;s time, convenience, and consistency. Mornings are chaos. Lunches get skipped. Takeaway fills the gap but leaves you sluggish.
                </p>
                <p>
                  We built PeptoMeal to close that gap. A single sachet that delivers protein, fibre, healthy fats, synbiotics, and 24 vitamins and minerals — in under 60 seconds. No prep, no compromise, no chalky aftertaste.
                </p>
                <p>
                  This isn&apos;t a diet product. It&apos;s a daily nutrition tool for people who want to feel good, stay sharp, and build a sustainable routine without overthinking every meal.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-100"
            >
              <img
                src="https://picsum.photos/seed/pepto-about/800/600"
                alt="PeptoMeal product lifestyle"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulation pillars */}
      <section className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
              The Formulation
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
              Six pillars of complete nutrition.
            </h2>
            <p className="mt-4 text-base text-zinc-500 leading-relaxed">
              Every ingredient in PeptoMeal serves a function. Here&apos;s what goes into every 33g sachet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-6 md:p-8 bg-white rounded-[1.5rem] border border-zinc-100"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-5">
                    <Icon size={24} weight="duotone" className="text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
              Who it&apos;s for
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
              Built for real routines.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The Early Riser", desc: "Grab a shake before the commute. Full nutrition, zero friction." },
              { title: "The Desk Worker", desc: "Replace the sluggish takeaway lunch with something that keeps you sharp." },
              { title: "The Active Adult", desc: "Post-workout recovery with real protein, gut support, and micronutrients." },
              { title: "The Habit Builder", desc: "One shake a day — a simple anchor for a healthier daily routine." },
            ].map((persona, i) => (
              <motion.div
                key={persona.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-zinc-50 rounded-2xl"
              >
                <h3 className="font-bold text-zinc-900">{persona.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{persona.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
              What we stand for.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 md:p-8 bg-white rounded-[1.5rem] border border-zinc-100"
              >
                <h3 className="text-lg font-bold text-zinc-900">{val.title}</h3>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-teal-600">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
            Ready to try it?
          </h2>
          <p className="mt-4 text-lg text-teal-100 max-w-md mx-auto">
            Start with the Discovery Box. Five flavours, one decision.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:bg-zinc-50 transition-colors"
          >
            Shop Now
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  );
}
