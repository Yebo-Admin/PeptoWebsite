"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import Link from "next/link";
import { faqItems, type FAQItem } from "@/data/faq";

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-5 md:p-6 text-left group"
      >
        <span className="text-base font-bold text-[#1A1A1A] pr-4 group-hover:text-[#006D77] transition-colors">
          {item.question}
        </span>
        <CaretDown
          size={20}
          weight="bold"
          className={`text-[#006D77] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="horizon-line mb-4" />
              <p className="text-base text-gray-600 leading-relaxed max-w-[65ch]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "product", "nutrition", "usage", "shipping"];
  const categoryLabels: Record<string, string> = {
    all: "ALL",
    product: "PRODUCT",
    nutrition: "NUTRITION",
    usage: "USAGE",
    shipping: "SHIPPING",
  };

  const filtered =
    filter === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === filter);

  return (
    <div className="bg-[#F1F1E6]">
      {/* Dark Header */}
      <section className="relative bg-[#1A1A1A] pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="relative max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              SUPPORT
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
              FREQUENTLY{" "}
              <span className="text-[#006D77]">ASKED</span>
            </h1>
            <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
              Everything you need to know about PeptoMeal. Can&apos;t find your answer? Get in touch.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-16" />
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          {/* Category filter tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-[11px] font-bold tracking-wider rounded-full whitespace-nowrap transition-all ${
                  filter === cat
                    ? "bg-[#006D77] text-white"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <FAQAccordion item={item} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 p-8 md:p-10 bg-[#006D77] rounded-3xl text-center"
          >
            <h3 className="text-2xl font-black tracking-tighter text-white">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="mt-2 text-base text-white/60 max-w-md mx-auto">
              Our team is happy to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex px-8 py-3.5 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-colors"
            >
              CONTACT US
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
