"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const LIFESTYLE_1 =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/2ced8ea71_generated_c0189206.png";
const LIFESTYLE_2 =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4974b0ba2_generated_83b58e68.png";

const cards = [
  {
    image: LIFESTYLE_1,
    label: "FUEL YOUR ADVENTURE",
    heading: "FROM TRAIL TO TABLE",
    cta: "OUR STORY",
    href: "/about",
  },
  {
    image: LIFESTYLE_2,
    label: "PERFORM BETTER",
    heading: "TRAIN. RECOVER. REPEAT.",
    cta: "SHOP NOW",
    href: "/shop",
  },
];

export function LifestyleBanner() {
  return (
    <section className="py-24 bg-[#F1F1E6]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[4/5] sm:aspect-auto sm:min-h-[500px] rounded-3xl overflow-hidden"
            >
              {/* Background image */}
              <Image
                src={card.image}
                alt={card.heading}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-3">
                  {card.label}
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-white leading-[0.95]">
                  {card.heading}
                </h3>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-black tracking-[0.15em] text-white uppercase group-hover:text-[#FFB703] transition-colors"
                >
                  {card.cta}
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
