import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ShoppingBag, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "HOME", page: "Home" },
  { label: "SHOP", page: "Shop" },
  { label: "RECIPES", page: "Recipes" },
  { label: "ABOUT", page: "About" },
  { label: "FAQ", page: "FAQ" },
];

const SHOP_PRODUCTS = [
  { flavor: "Chocolate Treat", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png" },
  { flavor: "Vanilla Swirl",   image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png" },
  { flavor: "Caramel Latte",   image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png" },
  { flavor: "Berry Blast",     image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png" },
];

function ShopMegaMenu({ visible, textColor }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50"
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-bold tracking-[0.3em] text-[#006D77]">OUR FLAVOURS</p>
            <Link
              to={createPageUrl("Shop")}
              className="text-xs font-bold tracking-wider text-[#1A1A1A] hover:text-[#006D77] transition-colors flex items-center gap-1"
            >
              SHOP ALL <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {SHOP_PRODUCTS.map((p) => (
              <Link
                key={p.flavor}
                to={createPageUrl("Shop")}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#F1F1E6]">
                  <img
                    src={p.image}
                    alt={p.flavor}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#1A1A1A] text-center leading-tight">
                  {p.flavor.toUpperCase()}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[#006D77] group-hover:text-[#FFB703] transition-colors">
                  SHOP →
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopHover, setShopHover] = useState(false);
  const shopTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPageName]);

  const isHome = currentPageName === "Home";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F1F1E6" }}>
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 z-50">
              <span
                className={`text-2xl sm:text-3xl font-black tracking-tighter transition-colors duration-300 ${
                  scrolled || !isHome || menuOpen ? "text-[#1A1A1A]" : "text-white"
                }`}
              >
                PEPTO
              </span>
              <span
                className={`text-2xl sm:text-3xl font-black tracking-tighter transition-colors duration-300 ${
                  scrolled || !isHome || menuOpen ? "text-[#006D77]" : "text-[#FFB703]"
                }`}
              >
                MEALS
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 relative">
              {NAV_ITEMS.map((item) => (
                item.page === "Shop" ? (
                  <div
                    key={item.page}
                    className="relative"
                    onMouseEnter={() => {
                      clearTimeout(shopTimerRef.current);
                      setShopHover(true);
                    }}
                    onMouseLeave={() => {
                      shopTimerRef.current = setTimeout(() => setShopHover(false), 150);
                    }}
                  >
                    <Link
                      to={createPageUrl(item.page)}
                      className={`text-xs font-semibold tracking-widest transition-colors duration-300 hover:text-[#006D77] ${
                        currentPageName === item.page
                          ? "text-[#006D77]"
                          : scrolled || !isHome
                          ? "text-[#1A1A1A]"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <ShopMegaMenu visible={shopHover} />
                  </div>
                ) : (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`text-xs font-semibold tracking-widest transition-colors duration-300 hover:text-[#006D77] ${
                      currentPageName === item.page
                        ? "text-[#006D77]"
                        : scrolled || !isHome
                        ? "text-[#1A1A1A]"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 z-50">
              <Link
                to={createPageUrl("Shop")}
                className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  scrolled || !isHome
                    ? "bg-[#006D77] text-white hover:bg-[#008A96]"
                    : "bg-[#FFB703] text-[#1A1A1A] hover:bg-[#FFC733]"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                SHOP NOW
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled || !isHome || menuOpen
                    ? "text-[#1A1A1A]"
                    : "text-white"
                }`}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.page}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={createPageUrl(item.page)}
                    className="flex items-center gap-3 group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-4xl font-black tracking-tight text-[#1A1A1A] group-hover:text-[#006D77] transition-colors">
                      {item.label}
                    </span>
                    <ChevronRight className="w-6 h-6 text-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link
                to={createPageUrl("Shop")}
                onClick={() => setMenuOpen(false)}
                className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-wider inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                SHOP NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white">
        <div className="horizon-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-2xl font-black tracking-tighter text-white">PEPTO</span>
                <span className="text-2xl font-black tracking-tighter text-[#006D77]">MEALS</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Whole body nutrition in every scoop. Premium meal replacement shakes born in South Africa.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-[#FFB703] mb-6">SHOP</h4>
              <ul className="space-y-3">
                {["All Flavours", "Bundles", "Subscribe & Save"].map((item) => (
                  <li key={item}>
                    <Link
                      to={createPageUrl("Shop")}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-[#FFB703] mb-6">LEARN</h4>
              <ul className="space-y-3">
                {[
                  { label: "Recipes", page: "Recipes" },
                  { label: "About Us", page: "About" },
                  { label: "FAQ", page: "FAQ" },
                ].map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-[#FFB703] mb-6">
                JOIN THE EVOLUTION
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Get 10% off your first order and exclusive recipes.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-[#2D2D2D] border-none rounded-l-full px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#006D77]"
                />
                <button className="bg-[#006D77] hover:bg-[#008A96] text-white px-5 py-3 rounded-r-full text-xs font-bold tracking-wider transition-colors">
                  JOIN
                </button>
              </div>
            </div>
          </div>

          <div className="horizon-line mt-12 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>&copy; 2026 PeptoMeals. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Returns</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}