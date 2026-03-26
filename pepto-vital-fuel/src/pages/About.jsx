import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Heart, Globe, Leaf, Award } from "lucide-react";

const SA_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/fcdce38ca_generated_d1045059.png";
const INGREDIENTS_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png";

const VALUES = [
  { icon: Leaf, title: "CLEAN NUTRITION", desc: "Every ingredient is purposeful. No fillers, no artificial shortcuts. Just real food science." },
  { icon: Globe, title: "SOUTH AFRICAN ROOTS", desc: "Born in Cape Town, made for the world. We source locally wherever possible and manufacture in GMP-certified facilities." },
  { icon: Heart, title: "COMMUNITY FIRST", desc: "We're building more than a brand. We're building a movement of people who refuse to compromise on their health." },
  { icon: Award, title: "SCIENCE-BACKED", desc: "Every formula is developed with nutritionists and tested rigorously. 85+ superfoods, validated by research." },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#F1F1E6" }} className="min-h-screen">
      {/* Hero */}
      <div className="relative pt-28 sm:pt-36 pb-20 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <img src={SA_IMAGE} alt="South African landscape" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">OUR MISSION</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9]">
              TRANSFORMING
              <br />
              MEALS INTO <span className="text-[#006D77]">FUEL</span>
            </h1>
            <p className="text-lg text-white/50 mt-6 max-w-2xl leading-relaxed">
              Founded in South Africa by health enthusiasts who believed nutrition shouldn't require sacrifice.
              PeptoMeals was born to make balanced nutrition convenient, delicious, and accessible to everyone.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-16" />
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src={INGREDIENTS_IMAGE}
                alt="Quality ingredients"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] mb-4">OUR STORY</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#1A1A1A] mb-6">
              FROM THE <span className="text-[#FFB703]">CAPE</span> TO
              <br />YOUR CUP
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                It started with a simple frustration: why does healthy food have to taste terrible?
                Why do busy people have to choose between convenience and nutrition?
              </p>
              <p>
                Inspired by South Africa's rich biodiversity and a deep passion for wellness,
                we spent two years developing a formula that delivers complete nutrition without
                compromising on taste. Every VitaShake flavour is crafted to taste like a treat,
                not a supplement.
              </p>
              <p>
                Today, thousands of South Africans start their day with PeptoMeals —
                from trail runners in the Drakensberg to entrepreneurs in Johannesburg.
                We're just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">WHAT WE STAND FOR</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#1A1A1A]">
              OUR <span className="text-[#006D77]">VALUES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#006D77]/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#006D77]" />
                  </div>
                  <h3 className="text-xs font-bold tracking-wider text-[#1A1A1A] mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-[#006D77] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-6">
            READY TO UPGRADE YOUR <span className="text-[#FFB703]">NUTRITION</span>?
          </h2>
          <p className="text-white/60 mb-8">
            Join thousands of South Africans fuelling their best lives with PeptoMeals.
          </p>
          <Link
            to={createPageUrl("Shop")}
            className="group inline-flex items-center gap-3 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-bold tracking-wider transition-all duration-300 hover:translate-y-[-2px]"
          >
            SHOP NOW
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}