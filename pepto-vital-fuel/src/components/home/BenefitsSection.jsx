import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Heart, Leaf, Dumbbell, Brain, Droplets, Sun } from "lucide-react";

const BENEFITS = [
  {
    icon: Dumbbell,
    title: "30G PROTEIN",
    desc: "High-quality plant peptides for muscle synthesis & lasting satiety",
    color: "#006D77",
  },
  {
    icon: Shield,
    title: "IMMUNE SUPPORT",
    desc: "15 essential vitamins & minerals to fortify your body's defenses",
    color: "#FFB703",
  },
  {
    icon: Heart,
    title: "GUT HEALTH",
    desc: "Prebiotics & live probiotics for optimized digestion",
    color: "#006D77",
  },
  {
    icon: Leaf,
    title: "CLEAN FORMULA",
    desc: "No GMO, no gluten, no soy, no artificial anything",
    color: "#FFB703",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: "#F1F1E6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-[#006D77] mb-4"
          >
            WHY PEPTOMEALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#1A1A1A]"
          >
            MORE THAN JUST
            <br />
            <span className="text-[#006D77]">PROTEIN</span>
          </motion.h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#006D77]/10"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: benefit.color }} />
                </div>
                <h3 className="text-sm font-bold tracking-wider text-[#1A1A1A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.desc}
                </p>
                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: benefit.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}