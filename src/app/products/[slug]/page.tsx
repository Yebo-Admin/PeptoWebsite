"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  ShoppingBag,
  Star,
  ShieldCheck,
  CheckCircle,
  CaretDown,
  Truck,
  Package,
  Heart,
  Barbell,
  Pill,
  Leaf,
  Fire,
} from "@phosphor-icons/react";
import { getProductBySlug, products } from "@/data/products";
import { useCart } from "@/lib/cart-context";

type InfoSection = "whats-inside" | "taste" | "shipping";

const infoSections: { value: InfoSection; label: string }[] = [
  { value: "whats-inside", label: "What's Inside" },
  { value: "taste", label: "Taste" },
  { value: "shipping", label: "Shipping" },
];

const keyBenefits = [
  { icon: Heart, label: "Balanced nutrition" },
  { icon: Barbell, label: "Protein for strength & recovery" },
  { icon: Pill, label: "Vitamins & minerals for energy" },
  { icon: Leaf, label: "Gut health support" },
  { icon: Fire, label: "Low in calories" },
];

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState<InfoSection | null>(null);
  const [isSubscription, setIsSubscription] = useState(true);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F1F1E6]">
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#1A1A1A]">Product not found</h1>
          <Link
            href="/shop"
            className="mt-4 inline-block text-[#006D77] font-bold"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === "shake")
    .slice(0, 3);

  const activePrice = isSubscription ? product.subscriptionPrice : product.price;

  const toggleSection = (section: InfoSection) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="bg-[#F1F1E6]">
      <section className="py-8 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#006D77] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#006D77] transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">{product.flavor}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* ── LEFT: Product Images ── */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#F1F1E6] border border-[#006D77]/5"
              >
                <Image
                  src={product.images[activeImage]}
                  alt={`PeptoMeal ${product.flavor}`}
                  fill
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <span className="absolute top-5 left-5 px-3 py-1.5 bg-[#006D77] text-white text-xs font-bold rounded-full tracking-wider">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-5 right-5 flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                  <ShieldCheck size={16} weight="fill" className="text-[#006D77]" />
                  <span className="text-[10px] font-bold tracking-wider text-[#1A1A1A]">
                    30-DAY GUARANTEE
                  </span>
                </div>
              </motion.div>

              {/* Thumbnail row */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === i
                          ? "border-[#006D77]"
                          : "border-transparent hover:border-[#006D77]/20"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: Purchase Info ── */}
            <div>
              {/* 1. Product title */}
              <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase">
                PEPTOMEAL {product.category === "bundle" ? "BUNDLE" : "SHAKE"}
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tighter text-[#1A1A1A]">
                PeptoMeal All-In-1 Nutritional Support
              </h1>

              {/* 2. Flavour subtitle */}
              <p className="mt-2 text-xl font-bold text-[#006D77]">
                {product.flavor}
              </p>

              {/* 3. Star rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      weight="fill"
                      className={
                        i < Math.round(product.rating)
                          ? "text-[#FFB703]"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* 4. Horizon line */}
              <div className="horizon-line my-6" />

              {/* 5. Short description */}
              <p className="text-base text-gray-600 leading-relaxed">
                Complete daily nutrition in a smooth, delicious shake designed to support energy, recovery and everyday wellbeing.
              </p>

              {/* 6. Key benefits */}
              <div className="mt-6 space-y-3">
                {keyBenefits.map((benefit) => (
                  <div key={benefit.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#006D77]/10 flex items-center justify-center shrink-0">
                      <benefit.icon size={16} weight="bold" className="text-[#006D77]" />
                    </div>
                    <span className="text-sm text-gray-600">{benefit.label}</span>
                  </div>
                ))}
              </div>

              {/* 7. Flavour Profile */}
              <div className="mt-8 p-5 bg-white rounded-2xl">
                <p className="text-xs font-bold tracking-[0.2em] text-[#1A1A1A] uppercase mb-2">
                  Flavour Profile
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {product.flavorProfile}
                </p>
              </div>

              {/* Subscription toggle */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => setIsSubscription(true)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    isSubscription
                      ? "border-[#006D77] bg-[#006D77]/5"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSubscription
                        ? "border-[#006D77] bg-[#006D77]"
                        : "border-gray-300"
                    }`}
                  >
                    {isSubscription && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-bold text-[#1A1A1A]">
                      Subscribe & Save
                    </p>
                    <p className="text-xs text-gray-500">
                      Delivered monthly. Cancel anytime.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-[#1A1A1A]">
                      R{product.subscriptionPrice}
                    </p>
                    <p className="text-xs text-gray-400 line-through">
                      R{product.price}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setIsSubscription(false)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    !isSubscription
                      ? "border-[#006D77] bg-[#006D77]/5"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      !isSubscription
                        ? "border-[#006D77] bg-[#006D77]"
                        : "border-gray-300"
                    }`}
                  >
                    {!isSubscription && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-bold text-[#1A1A1A]">One-Time Purchase</p>
                  </div>
                  <p className="text-lg font-black text-[#1A1A1A]">R{product.price}</p>
                </button>
              </div>

              {/* 8. Choose Quantity + 9. Add to Cart */}
              <div className="mt-6">
                <p className="text-xs font-bold tracking-[0.2em] text-[#1A1A1A] uppercase mb-3">
                  Choose Quantity
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 border border-gray-200 rounded-full bg-white px-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} weight="bold" />
                    </button>
                    <span className="text-sm font-bold w-6 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} weight="bold" />
                    </button>
                  </div>

                  <button
                    onClick={() => addItem(product, quantity)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-4 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all active:scale-[0.98]"
                  >
                    <ShoppingBag size={18} weight="bold" />
                    ADD TO CART — R{activePrice * quantity}
                  </button>
                </div>
              </div>

              {/* 10. Trust strip */}
              <div className="flex items-center justify-center gap-6 mt-6 py-4 border-t border-gray-200">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <ShieldCheck size={16} className="text-[#006D77]" />
                  <span className="font-bold tracking-wider">Secure Checkout</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Truck size={16} className="text-[#006D77]" />
                  <span className="font-bold tracking-wider">Fast Shipping</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Package size={16} className="text-[#006D77]" />
                  <span className="font-bold tracking-wider">Quality & Safety</span>
                </div>
              </div>

              {/* ── Dropdown/Tab Sections ── */}
              <div className="mt-8 space-y-2">
                {infoSections.map((section) => {
                  const isOpen = openSection === section.value;
                  return (
                    <div
                      key={section.value}
                      className="bg-white rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(section.value)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="text-sm font-bold text-[#1A1A1A]">
                          {section.label}
                        </span>
                        <CaretDown
                          size={16}
                          weight="bold"
                          className={`text-gray-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              {section.value === "whats-inside" && (
                                <div>
                                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    PeptoMeal combines high-quality protein, essential vitamins and minerals and digestive support nutrients to help provide balanced daily nutrition. Each serving is designed to help support:
                                  </p>
                                  <ul className="space-y-2 mb-6">
                                    {[
                                      "Energy",
                                      "Recovery",
                                      "Muscle maintenance",
                                      "Digestive health",
                                      "Healthy weight management",
                                    ].map((item) => (
                                      <li key={item} className="flex items-center gap-2">
                                        <CheckCircle
                                          size={16}
                                          weight="fill"
                                          className="text-[#006D77] shrink-0"
                                        />
                                        <span className="text-sm text-gray-600">{item}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  {/* Nutrition stats grid */}
                                  <div className="grid grid-cols-3 gap-3">
                                    {[
                                      { value: `${product.nutrition.calories}`, label: "Calories" },
                                      { value: product.nutrition.protein, label: "Protein" },
                                      { value: product.nutrition.fibre, label: "Fibre" },
                                      { value: product.nutrition.sugar, label: "Sugar" },
                                      { value: product.nutrition.servingSize, label: "Serving Size" },
                                      { value: `${product.nutrition.vitamins}`, label: "Vitamins" },
                                    ].map((stat) => (
                                      <div
                                        key={stat.label}
                                        className="bg-[#F1F1E6] rounded-xl p-3 text-center"
                                      >
                                        <p className="text-lg font-black text-[#006D77] tracking-tight">
                                          {stat.value}
                                        </p>
                                        <p className="text-[10px] font-bold tracking-[0.15em] text-gray-400 mt-0.5 uppercase">
                                          {stat.label}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {section.value === "taste" && (
                                <div>
                                  <h4 className="text-base font-black text-[#1A1A1A] tracking-tight mb-2">
                                    Taste You&apos;ll Actually Enjoy
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    Nutrition should never feel like a chore. PeptoMeal flavours are designed to be smooth, satisfying and easy to enjoy — making it simple to keep your daily nutrition routine consistent.
                                  </p>
                                </div>
                              )}

                              {section.value === "shipping" && (
                                <div>
                                  <h4 className="text-base font-black text-[#1A1A1A] tracking-tight mb-2">
                                    Shipping Information
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    Orders are processed within 1-2 business days. Delivery times vary depending on location but typically arrive within 2-5 working days nationwide. Shipping costs are calculated at checkout.
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Related Products ── */}
          <div className="mt-20">
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-2">
              MORE OPTIONS
            </p>
            <h2 className="text-3xl font-black tracking-tighter text-[#1A1A1A] mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-xl border border-transparent hover:border-[#006D77]/10 transition-all"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#F1F1E6]">
                      <Image
                        src={p.image}
                        alt={p.flavor}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#006D77] transition-colors">
                        {p.flavor}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">{p.tagline}</p>
                      <p className="text-sm font-bold text-[#1A1A1A] mt-1">
                        From R{p.subscriptionPrice}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
