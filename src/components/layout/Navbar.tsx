"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  List,
  X,
  Flask,
  BookOpen,
  Microphone,
  ChatCircleDots,
  Question,
  Phone,
  Storefront,
} from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/shop", label: "Shop", icon: Storefront },
  { href: "/about", label: "Our Science", icon: Flask },
  { href: "/recipes", label: "Recipes", icon: BookOpen },
  { href: "/testimonials", label: "Reviews", icon: ChatCircleDots },
  { href: "/podcast", label: "Podcast", icon: Microphone },
  { href: "/blog", label: "Journal", icon: BookOpen },
  { href: "/faq", label: "FAQ", icon: Question },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-zinc-200/60">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight">P</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-zinc-900">
            Pepto<span className="text-teal-600">Meal</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-zinc-600 rounded-lg hover:text-zinc-900 hover:bg-zinc-100/60 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors active:scale-[0.98]"
          >
            Shop Now
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2.5 rounded-full hover:bg-zinc-100 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={22} weight="duotone" className="text-zinc-700" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-teal-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2.5 rounded-full hover:bg-zinc-100 transition-colors"
            aria-label="Open menu"
          >
            <List size={22} weight="bold" className="text-zinc-700" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-zinc-100">
                <span className="font-bold text-zinc-900 tracking-tight">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-zinc-700 rounded-xl hover:bg-zinc-50 transition-colors"
                    >
                      <Icon size={20} weight="duotone" className="text-teal-600" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="p-4 mt-auto">
                <Link
                  href="/shop"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
