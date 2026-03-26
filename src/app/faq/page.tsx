"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import Link from "next/link";
import { faqItems, type FAQItem } from "@/data/faq";

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-base font-semibold text-zinc-900 pr-4 group-hover:text-teal-700 transition-colors">
          {item.question}
        </span>
        <CaretDown
          size={18}
          weight="bold"
          className={`text-zinc-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-base text-zinc-600 leading-relaxed max-w-[65ch]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "product", "nutrition", "usage", "shipping"];
  const filtered =
    filter === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === filter);

  return (
    <>
      <section className="pt-16 pb-10 md:pt-20 md:pb-14 bg-zinc-50">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-zinc-500 max-w-md mx-auto">
              Everything you need to know about PeptoMeal. Can&apos;t find your answer? Get in touch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap capitalize transition-all ${
                  filter === cat
                    ? "bg-teal-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div>
            {filtered.map((item) => (
              <FAQAccordion key={item.question} item={item} />
            ))}
          </div>

          <div className="mt-14 p-8 bg-zinc-50 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Our team is happy to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
