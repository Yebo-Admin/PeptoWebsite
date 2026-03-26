"use client";

import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  YoutubeLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Flavours" },
    { href: "/shop?filter=bestsellers", label: "Bestsellers" },
    { href: "/products/discovery-box", label: "Discovery Box" },
  ],
  learn: [
    { href: "/about", label: "Our Science" },
    { href: "/recipes", label: "Recipes" },
    { href: "/blog", label: "The Pepto Journal" },
    { href: "/podcast", label: "Podcast" },
    { href: "/faq", label: "FAQ" },
  ],
  company: [
    { href: "/contact", label: "Contact Us" },
    { href: "/about", label: "About PeptoMeal" },
    { href: "/shipping", label: "Shipping & Returns" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

const socialLinks = [
  { href: "#", icon: InstagramLogo, label: "Instagram" },
  { href: "#", icon: FacebookLogo, label: "Facebook" },
  { href: "#", icon: TiktokLogo, label: "TikTok" },
  { href: "#", icon: YoutubeLogo, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Newsletter strip */}
      <div className="border-b border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Better nutrition starts here.
              </h3>
              <p className="mt-2 text-zinc-500 text-base leading-relaxed max-w-md">
                Weekly recipes, nutrition insights, and exclusive offers. No spam, unsubscribe anytime.
              </p>
            </div>
            <form className="flex gap-3 max-w-md md:ml-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <EnvelopeSimple
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-11 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors active:scale-[0.98] shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Pepto<span className="text-teal-500">Meal</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Better nutrition made simple. Premium all-in-one nutritional shakes for busy, health-conscious adults.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  >
                    <Icon size={18} weight="fill" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Learn
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} PeptoMeal. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms
            </Link>
            <Link href="/shipping" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
