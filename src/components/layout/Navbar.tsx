"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, ShoppingBag } from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/shop", label: "SHOP" },
  { href: "/recipes", label: "RECIPES" },
  { href: "/about", label: "ABOUT" },
  { href: "/faq", label: "FAQ" },
];

const SHOP_PRODUCTS = [
  { flavor: "Chocolate Caramel", image: "/images/products/chocolate-caramel.png" },
  { flavor: "Caramel Latte", image: "/images/products/caramel-latte.png" },
  { flavor: "Strawberry", image: "/images/products/strawberry.png" },
  { flavor: "Vanilla", image: "/images/products/vanilla.png" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-zinc-200/60"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="block shrink-0">
          <img
            src={isTransparent ? "/images/logos/peptomeal-logo-white.svg" : "/images/logos/peptomeal-logo.svg"}
            alt="PeptoMeal"
            className="h-8 sm:h-10 w-auto transition-opacity"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={
                link.label === "SHOP" ? () => setMegaOpen(true) : undefined
              }
              onMouseLeave={
                link.label === "SHOP" ? () => setMegaOpen(false) : undefined
              }
            >
              <Link
                href={link.href}
                className={`px-3.5 py-2 text-xs font-semibold tracking-widest rounded-lg transition-all ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-zinc-100/60"
                } ${pathname === link.href ? (isTransparent ? "text-white" : "text-[#1A1A1A]") : ""}`}
              >
                {link.label}
              </Link>

              {/* Mega menu for SHOP */}
              {link.label === "SHOP" && (
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6 w-[520px]">
                        <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-4">
                          OUR FLAVOURS
                        </p>
                        <div className="grid grid-cols-4 gap-4">
                          {SHOP_PRODUCTS.map((product) => (
                            <Link
                              key={product.flavor}
                              href="/shop"
                              className="group/card flex flex-col items-center gap-2"
                              onClick={() => setMegaOpen(false)}
                            >
                              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F1F1E6]">
                                <Image
                                  src={product.image}
                                  alt={product.flavor}
                                  fill
                                  className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <span className="text-[10px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase text-center">
                                {product.flavor}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="horizon-line mt-5 mb-3" />
                        <Link
                          href="/shop"
                          onClick={() => setMegaOpen(false)}
                          className="block text-center text-xs font-bold tracking-[0.3em] text-[#006D77] hover:text-[#FFB703] transition-colors uppercase"
                        >
                          VIEW ALL FLAVOURS
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/shop"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded-full transition-colors active:scale-[0.98] ${
              isTransparent
                ? "bg-[#FFB703] text-[#1A1A1A] hover:bg-[#FFB703]/90"
                : "bg-[#006D77] text-white hover:bg-[#006D77]/90"
            }`}
          >
            SHOP NOW
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className={`relative p-2.5 rounded-full transition-colors ${
              isTransparent
                ? "hover:bg-white/10"
                : "hover:bg-zinc-100"
            }`}
            aria-label="Open cart"
          >
            <ShoppingBag
              size={22}
              weight="duotone"
              className={isTransparent ? "text-white" : "text-[#1A1A1A]"}
            />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#FFB703] text-[#1A1A1A] text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2.5 rounded-full transition-colors ${
              isTransparent
                ? "hover:bg-white/10"
                : "hover:bg-zinc-100"
            }`}
            aria-label="Open menu"
          >
            <List
              size={22}
              weight="bold"
              className={isTransparent ? "text-white" : "text-[#1A1A1A]"}
            />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between px-4 md:px-8 h-16">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                <img
                  src="/images/logos/peptomeal-logo.svg"
                  alt="PeptoMeal"
                  className="h-8 sm:h-10 w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} weight="bold" className="text-[#1A1A1A]" />
              </button>
            </div>

            <div className="horizon-line" />

            {/* Mobile nav links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-4xl font-black tracking-tighter py-2 transition-colors ${
                      pathname === link.href
                        ? "text-[#006D77]"
                        : "text-[#1A1A1A] hover:text-[#006D77]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu footer */}
            <div className="px-8 pb-10">
              <div className="horizon-line mb-6" />
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-[#FFB703] text-[#1A1A1A] text-sm font-bold tracking-wider uppercase rounded-full hover:bg-[#FFB703]/90 transition-colors active:scale-[0.98]"
              >
                SHOP NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
