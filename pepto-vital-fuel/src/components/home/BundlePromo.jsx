import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Package, Shield, Truck } from "lucide-react";

const POWDER_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/347b0ac94_generated_97deeddc.png";

export default function BundlePromo({ bundle }) {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: "#006D77" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src={POWDER_IMAGE}
                alt="VitaShake powder close-up"
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Floating price badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-8 sm:right-8 bg-[#FFB703] rounded-2xl p-6 shadow-2xl">
              <p className="text-xs font-bold tracking-wider text-[#1A1A1A]/60">STARTER PACK</p>
              <p className="text-4xl font-black text-[#1A1A1A]">
                R{bundle?.subscription_price || 799}
              </p>
              <p className="text-xs font-medium text-[#1A1A1A]/60 line-through">
                R{bundle?.price || 899}
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">
              BEST VALUE
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[0.95]">
              STARTER
              <br />
              PACK BUNDLE
            </h2>
            <div className="w-16 h-1 bg-[#FFB703] rounded-full my-8" />
            <p className="text-lg text-white/70 leading-relaxed max-w-md">
              Three full-size bags. 45 servings. All three bestselling flavours.
              The perfect way to discover your daily fuel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 mb-10">
              {[
                { icon: Package, text: "3 BAGS INCLUDED" },
                { icon: Shield, text: "30-DAY GUARANTEE" },
                { icon: Truck, text: "FREE SHIPPING" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#FFB703]" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-white/80">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to={createPageUrl("ProductDetail") + `?id=${bundle?.id || ""}`}
              className="group inline-flex items-center gap-3 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(255,183,3,0.3)]"
            >
              GET THE BUNDLE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}