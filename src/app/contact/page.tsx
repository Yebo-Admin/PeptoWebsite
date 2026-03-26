"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  EnvelopeSimple,
  MapPin,
  Clock,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";

export default function ContactPage() {
  return (
    <div className="bg-[#F1F1E6]">
      {/* Dark Header */}
      <section className="relative bg-[#1A1A1A] pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-4">
              REACH OUT
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
              GET IN{" "}
              <span className="text-[#006D77]">TOUCH</span>
            </h1>
            <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
              Questions, feedback, or partnership enquiries — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-16" />
      </section>

      {/* Form + Info */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-6 md:p-10">
                <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-6">
                  SEND A MESSAGE
                </p>
                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your first name"
                        className="w-full px-4 py-3 bg-[#F1F1E6] border border-transparent rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#006D77] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your last name"
                        className="w-full px-4 py-3 bg-[#F1F1E6] border border-transparent rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#006D77] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-[#F1F1E6] border border-transparent rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#006D77] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 bg-[#F1F1E6] border border-transparent rounded-xl text-sm text-gray-600 focus:outline-none focus:border-[#006D77] transition-colors">
                      <option>General Enquiry</option>
                      <option>Order Support</option>
                      <option>Product Feedback</option>
                      <option>Partnership / Wholesale</option>
                      <option>Press / Media</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-[#1A1A1A] uppercase">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 bg-[#F1F1E6] border border-transparent rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#006D77] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all active:scale-[0.98]"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info card */}
              <div className="bg-white rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-5">
                  CONTACT INFO
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#006D77]/10 flex items-center justify-center shrink-0">
                      <EnvelopeSimple size={20} className="text-[#006D77]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Email</p>
                      <a
                        href="mailto:hello@peptomeal.co.za"
                        className="text-sm text-gray-500 hover:text-[#006D77] transition-colors"
                      >
                        hello@peptomeal.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#006D77]/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#006D77]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Location</p>
                      <p className="text-sm text-gray-500">Cape Town, South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#006D77]/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-[#006D77]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">Response Time</p>
                      <p className="text-sm text-gray-500">
                        Within 24 hours on business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social card */}
              <div className="bg-white rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-4">
                  FOLLOW US
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: InstagramLogo, label: "Instagram" },
                    { icon: FacebookLogo, label: "Facebook" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href="#"
                        className="w-11 h-11 rounded-full bg-[#F1F1E6] flex items-center justify-center hover:bg-[#006D77]/10 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon size={20} className="text-[#1A1A1A]" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Partnerships card */}
              <div className="bg-[#006D77] rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-2">
                  PARTNERSHIPS
                </p>
                <h4 className="text-base font-black text-white mb-2">
                  Wholesale & Collaborations
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  Interested in stocking PeptoMeal or collaborating? Select
                  &ldquo;Partnership / Wholesale&rdquo; in the form and we&apos;ll
                  connect you with the right team.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
