"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";

const featured = testimonials.slice(0, 3);

export function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
            Real People. Real Results.
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
            Trusted by thousands of
            <br />
            South Africans.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 bg-zinc-50 rounded-[1.5rem] border border-zinc-100"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    weight="fill"
                    className="text-gold-500"
                  />
                ))}
              </div>
              <p className="text-base text-zinc-700 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-zinc-200/60">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            Read All Reviews
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
