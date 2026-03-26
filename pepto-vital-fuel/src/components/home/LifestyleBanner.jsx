import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LIFESTYLE_1 = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/2ced8ea71_generated_c0189206.png";
const LIFESTYLE_2 = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4974b0ba2_generated_83b58e68.png";

export default function LifestyleBanner() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#F1F1E6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Outdoor */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl aspect-[4/5] sm:aspect-auto sm:min-h-[500px]"
          >
            <img
              src={LIFESTYLE_1}
              alt="Active lifestyle with PeptoMeals"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-2">
                FUEL YOUR ADVENTURE
              </p>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                FROM TRAIL TO TABLE
              </h3>
              <Link
                to={createPageUrl("About")}
                className="group/link inline-flex items-center gap-2 text-sm font-bold tracking-wider text-white/80 hover:text-white transition-colors"
              >
                OUR STORY
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - Gym */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl aspect-[4/5] sm:aspect-auto sm:min-h-[500px]"
          >
            <img
              src={LIFESTYLE_2}
              alt="Gym lifestyle with PeptoMeals"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-2">
                PERFORM BETTER
              </p>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                TRAIN. RECOVER. REPEAT.
              </h3>
              <Link
                to={createPageUrl("Shop")}
                className="group/link inline-flex items-center gap-2 text-sm font-bold tracking-wider text-white/80 hover:text-white transition-colors"
              >
                SHOP NOW
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}