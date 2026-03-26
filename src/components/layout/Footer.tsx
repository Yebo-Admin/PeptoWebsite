"use client";

import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const shopLinks = [
  { href: "/shop", label: "All Flavours" },
  { href: "/shop?filter=bestsellers", label: "Bestsellers" },
  { href: "/products/discovery-box", label: "Discovery Box" },
  { href: "/shop?filter=bundles", label: "Bundles" },
];

const learnLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/recipes", label: "Recipes" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "The Journal" },
];

const socialLinks = [
  { href: "#", icon: InstagramLogo, label: "Instagram" },
  { href: "#", icon: FacebookLogo, label: "Facebook" },
  { href: "#", icon: TiktokLogo, label: "TikTok" },
  { href: "#", icon: YoutubeLogo, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A]">
      {/* Horizon line top */}
      <div className="horizon-line" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/logos/peptomeal-logo-white.svg"
                alt="PeptoMeal"
                className="h-9 sm:h-11 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-xs">
              Premium all-in-one nutritional shakes for busy, health-conscious
              adults. Better nutrition, made simple.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-[#2D2D2D] flex items-center justify-center text-zinc-400 hover:text-[#FFB703] hover:bg-[#2D2D2D]/80 transition-colors"
                  >
                    <Icon size={18} weight="fill" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-[#FFB703] uppercase mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-[#FFB703] uppercase mb-4">
              LEARN
            </h4>
            <ul className="space-y-2.5">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-[#FFB703] uppercase mb-4">
              NEWSLETTER
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Recipes, nutrition tips, and exclusive offers. No spam, unsubscribe
              anytime.
            </p>
            <form
              className="flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-5 py-3 bg-[#2D2D2D] text-sm text-white placeholder:text-zinc-500 rounded-l-full border-none focus:outline-none focus:ring-2 focus:ring-[#006D77]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#006D77] text-white text-xs font-bold tracking-wider uppercase rounded-r-full hover:bg-[#006D77]/90 transition-colors shrink-0"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        {/* Horizon line divider */}
        <div className="horizon-line mt-12 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} PeptoMeals. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/shipping"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
