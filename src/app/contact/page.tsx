"use client";

import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  MapPin,
  Clock,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 pb-10 md:pt-20 md:pb-14 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-zinc-500">
              Questions, feedback, or partnership enquiries — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm placeholder:text-zinc-400 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm placeholder:text-zinc-400 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm placeholder:text-zinc-400 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-600 focus:outline-none focus:border-teal-500 transition-colors">
                    <option>General Enquiry</option>
                    <option>Order Support</option>
                    <option>Product Feedback</option>
                    <option>Partnership / Wholesale</option>
                    <option>Press / Media</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm placeholder:text-zinc-400 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <EnvelopeSimple size={20} className="text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-zinc-900">Email</p>
                      <a href="mailto:hello@peptomeal.co.za" className="text-sm text-zinc-500 hover:text-teal-600 transition-colors">
                        hello@peptomeal.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-zinc-900">Location</p>
                      <p className="text-sm text-zinc-500">South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-teal-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-zinc-900">Response Time</p>
                      <p className="text-sm text-zinc-500">Within 24 hours on business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-50 rounded-2xl">
                <h4 className="text-sm font-bold text-zinc-900 mb-3">Follow Us</h4>
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
                        className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center hover:border-teal-300 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon size={18} className="text-zinc-600" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 bg-teal-50 rounded-2xl">
                <h4 className="text-sm font-bold text-zinc-900 mb-2">
                  Wholesale & Partnerships
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Interested in stocking PeptoMeal or collaborating? Select
                  &ldquo;Partnership / Wholesale&rdquo; in the form and we&apos;ll connect you with the right team.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
