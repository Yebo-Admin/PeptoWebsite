import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const CATEGORY_LABELS = {
  all: "ALL",
  product: "PRODUCT",
  subscription: "SUBSCRIPTION",
  shipping: "SHIPPING",
  returns: "RETURNS",
  general: "GENERAL",
};

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: faqItems = [] } = useQuery({
    queryKey: ["faqItems"],
    queryFn: () => base44.entities.FaqItem.list("order"),
  });

  const filtered = activeCategory === "all"
    ? faqItems
    : faqItems.filter((item) => item.category === activeCategory);

  const categories = ["all", ...new Set(faqItems.map((item) => item.category).filter(Boolean))];

  return (
    <div style={{ backgroundColor: "#F1F1E6" }} className="min-h-screen">
      {/* Header */}
      <div className="pt-28 sm:pt-36 pb-12 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">SUPPORT</p>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">
              FREQUENTLY <span className="text-[#006D77]">ASKED</span>
            </h1>
            <p className="text-lg text-white/50 mt-4 max-w-lg">
              Everything you need to know about PeptoMeals and VitaShake.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-12" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#006D77] text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {CATEGORY_LABELS[cat] || cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filtered.map((item, i) => {
            const isOpen = openItem === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : item.id)}
                  className={`w-full text-left bg-white rounded-2xl transition-all duration-300 ${
                    isOpen ? "shadow-lg ring-1 ring-[#006D77]/10" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="font-bold text-[#1A1A1A] pr-4 text-sm sm:text-base">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#006D77] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="horizon-line mb-4" />
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#006D77] rounded-3xl p-8 sm:p-12 text-center"
        >
          <MessageCircle className="w-10 h-10 text-[#FFB703] mx-auto mb-4" />
          <h3 className="text-2xl font-black tracking-tight text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-white/60 mb-6">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@peptomeals.co.za"
            className="group inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300"
          >
            CONTACT US
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}