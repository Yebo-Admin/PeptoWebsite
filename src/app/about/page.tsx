"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Globe, Users, Flask } from "@phosphor-icons/react";

const SA_IMAGE =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/fcdce38ca_generated_d1045059.png";
const INGREDIENTS_IMAGE =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png";

const values = [
  {
    icon: Leaf,
    title: "CLEAN NUTRITION",
    description:
      "Every ingredient serves a purpose. No fillers, no artificial additives, no compromise. Just real nutrition that works.",
  },
  {
    icon: Globe,
    title: "SOUTH AFRICAN ROOTS",
    description:
      "Born in Cape Town, built for South Africa. We understand local lifestyles, budgets, and what real people need from their nutrition.",
  },
  {
    icon: Users,
    title: "COMMUNITY FIRST",
    description:
      "We grow with our community. Every decision is guided by real feedback from the people who use PeptoMeal every day.",
  },
  {
    icon: Flask,
    title: "SCIENCE-BACKED",
    description:
      "Formulated with nutritionists and backed by research. Every claim we make is grounded in evidence, not hype.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F1F1E6]">
      {/* Dark Hero with SA landscape */}
      <section className="relative bg-[#1A1A1A] pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={SA_IMAGE}
            alt="South African landscape"
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
              OUR MISSION
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight">
              TRANSFORMING
              <br />
              MEALS INTO <span className="text-[#006D77]">FUEL</span>
            </h1>
            <p className="mt-6 text-base text-white/50 max-w-lg mx-auto">
              PeptoMeal exists because balanced daily nutrition shouldn&apos;t require a degree in dietetics or two hours of meal prep.
            </p>
          </motion.div>
        </div>

        <div className="horizon-line mt-16" />
      </section>

      {/* Our Story — 2 col */}
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
                FROM THE CAPE
                <br />
                TO YOUR <span className="text-[#006D77]">CUP</span>
              </h2>
              <div className="horizon-line my-6" />
              <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                <p>
                  Most people know what they should eat. The problem isn&apos;t knowledge — it&apos;s time, convenience, and consistency. Mornings are chaos. Lunches get skipped. Takeaway fills the gap but leaves you sluggish.
                </p>
                <p>
                  We built PeptoMeal to close that gap. A single serving that delivers protein, fibre, healthy fats, synbiotics, and essential vitamins and minerals — in under 60 seconds. No prep, no compromise, no chalky aftertaste.
                </p>
                <p>
                  This isn&apos;t a diet product. It&apos;s a daily nutrition tool for people who want to feel good, stay sharp, and build a sustainable routine without overthinking every meal.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values — 4 col on white bg */}
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
              WHAT WE STAND FOR
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A]">
              OUR <span className="text-[#006D77]">VALUES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#F1F1E6] rounded-2xl p-6 md:p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#006D77]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} weight="duotone" className="text-[#006D77]" />
                  </div>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-[#1A1A1A] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-[#006D77]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
              READY TO UPGRADE
              <br />
              YOUR <span className="text-[#FFB703]">NUTRITION</span>?
            </h2>
            <p className="mt-4 text-base text-white/60 max-w-md mx-auto">
              Start with our bestselling flavours. Delivered to your door.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all"
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
