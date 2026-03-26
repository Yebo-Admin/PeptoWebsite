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
} from "@phosphor-icons/react";
import { getProductBySlug, products } from "@/data/products";
import { useCart } from "@/lib/cart-context";

type Tab = "benefits" | "ingredients" | "nutrition" | "reviews";

const tabs: { value: Tab; label: string }[] = [
  { value: "benefits", label: "BENEFITS" },
  { value: "ingredients", label: "INGREDIENTS" },
  { value: "nutrition", label: "NUTRITION" },
  { value: "reviews", label: "REVIEWS" },
];

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("benefits");
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
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const activePrice = isSubscription ? product.subscriptionPrice : product.price;

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
            <span className="text-[#1A1A1A]">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Sticky Image */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#F1F1E6] border border-[#006D77]/5"
              >
                <Image
                  src={product.images[activeImage]}
                  alt={`PeptoMeal ${product.name}`}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-5 left-5 px-3 py-1.5 bg-[#006D77] text-white text-xs font-bold rounded-full tracking-wider">
                    {product.badge}
                  </span>
                )}
                {/* Guarantee badge */}
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

            {/* Right: Product Info */}
            <div>
              {/* Category label */}
              <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase">
                PEPTOMEAL {product.category === "bundle" ? "BUNDLE" : "SHAKE"}
              </p>

              {/* Product name */}
              <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tighter text-[#1A1A1A]">
                {product.name}
              </h1>

              {/* Star rating */}
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

              {/* Horizon line */}
              <div className="horizon-line my-6" />

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* 3-col stat grid */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { value: `${product.proteinG}g`, label: "PROTEIN" },
                  { value: `${product.servings}`, label: "SERVINGS" },
                  { value: `${product.calories}`, label: "CALORIES" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl font-black text-[#006D77] tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
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

              {/* Quantity + CTA */}
              <div className="flex items-center gap-4 mt-6">
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
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all active:scale-[0.98] animate-pulse-gold"
                >
                  <ShoppingBag size={18} weight="bold" />
                  ADD TO CART — R{activePrice * quantity}
                </button>
              </div>

              {/* Tabs */}
              <div className="mt-10">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={`px-4 py-2 text-[11px] font-bold tracking-wider rounded-full whitespace-nowrap transition-all ${
                        activeTab === tab.value
                          ? "bg-[#006D77] text-white"
                          : "bg-white text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6"
                  >
                    {activeTab === "benefits" && (
                      <ul className="space-y-3">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle
                              size={20}
                              weight="fill"
                              className="text-[#006D77] mt-0.5 shrink-0"
                            />
                            <span className="text-sm text-gray-600 leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {activeTab === "ingredients" && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {product.ingredients}
                      </p>
                    )}

                    {activeTab === "nutrition" && (
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Protein", value: `${product.proteinG}g` },
                          { label: "Calories", value: `${product.calories}` },
                          { label: "Servings", value: `${product.servings}` },
                          { label: "Category", value: product.category === "shake" ? "Shake" : "Bundle" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="p-4 bg-white rounded-xl"
                          >
                            <p className="text-lg font-black text-[#006D77]">
                              {item.value}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "reviews" && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={18}
                                weight="fill"
                                className="text-[#FFB703]"
                              />
                            ))}
                          </div>
                          <span className="text-sm font-bold text-[#1A1A1A]">
                            {product.rating} out of 5
                          </span>
                          <span className="text-sm text-gray-400">
                            ({product.reviewCount} reviews)
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Verified customers love this product. Full reviews coming soon.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Related Products */}
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
                        alt={p.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#006D77] transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-500">
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
