"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  SealCheck,
  Check,
  CaretDown,
} from "@phosphor-icons/react";
import { getProductBySlug, getShakes, type Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

function ExpandableSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left group"
      >
        <span className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#006D77] transition-colors">
          {title}
        </span>
        <CaretDown
          size={16}
          weight="bold"
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const shakes = getShakes();
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [isSubscription, setIsSubscription] = useState(true);

  // Per-flavor quantity selection (Ka'Chava style)
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    shakes.forEach((s) => {
      init[s.id] = s.slug === slug ? 1 : 0;
    });
    return init;
  });

  const updateQuantity = (id: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, Math.min(6, qty)) }));
  };

  const totalBags = useMemo(
    () => Object.values(quantities).reduce((a, b) => a + b, 0),
    [quantities]
  );

  const totalPrice = useMemo(() => {
    return shakes.reduce((sum, s) => {
      const qty = quantities[s.id] || 0;
      const price = isSubscription ? s.subscriptionPrice : s.price;
      return sum + price * qty;
    }, 0);
  }, [shakes, quantities, isSubscription]);

  const totalOneTimePrice = useMemo(() => {
    return shakes.reduce((sum, s) => {
      const qty = quantities[s.id] || 0;
      return sum + s.price * qty;
    }, 0);
  }, [shakes, quantities]);

  const savings = isSubscription ? totalOneTimePrice - totalPrice : 0;

  const handleAddToCart = () => {
    shakes.forEach((s) => {
      const qty = quantities[s.id] || 0;
      if (qty > 0) addItem(s, qty);
    });
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F1F1E6]">
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#1A1A1A]">Product not found</h1>
          <Link href="/shop" className="mt-4 inline-block text-[#006D77] font-bold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="py-6 md:py-10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#006D77] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#006D77] transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-[#1A1A1A] font-medium">{product.flavor}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* LEFT: Image Gallery */}
            <div className="space-y-4">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#F5F0E8]"
              >
                <Image
                  src={product.images[activeImage]}
                  alt={`PeptoMeal ${product.flavor}`}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </motion.div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden bg-[#F5F0E8] border-2 transition-all ${
                        activeImage === i ? "border-[#006D77]" : "border-transparent hover:border-gray-200"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#1A1A1A]">
                PeptoMeal All-In-1 Nutritional Support
              </h1>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <button className="mt-2 text-sm text-[#006D77] font-semibold underline underline-offset-2 hover:text-[#008A96] transition-colors">
                View nutrition facts
              </button>

              {/* CHOOSE YOUR FAVOURITE FLAVOURS */}
              <div className="mt-8">
                <p className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase mb-4">
                  CHOOSE YOUR FAVOURITE FLAVOURS:
                </p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {shakes.map((s) => {
                    const qty = quantities[s.id] || 0;
                    const isActive = qty > 0;
                    return (
                      <div key={s.id} className="flex flex-col items-center gap-1.5 shrink-0" style={{ width: 72 }}>
                        <button
                          onClick={() => updateQuantity(s.id, qty === 0 ? 1 : 0)}
                          className={`relative w-14 h-14 rounded-full overflow-hidden border-2 transition-all ${
                            isActive ? "border-[#006D77] shadow-md" : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Image src={s.image} alt={s.flavor} fill className="object-cover" />
                          {isActive && (
                            <div className="absolute inset-0 bg-[#006D77]/20 flex items-center justify-center">
                              <Check size={18} weight="bold" className="text-white drop-shadow" />
                            </div>
                          )}
                        </button>
                        <span className="text-[9px] font-bold text-[#1A1A1A] text-center leading-tight truncate w-full">
                          {s.flavor}
                        </span>
                        <div className="relative">
                          <select
                            value={qty}
                            onChange={(e) => updateQuantity(s.id, parseInt(e.target.value))}
                            className="appearance-none w-16 pl-2 pr-6 py-1 border border-gray-200 rounded text-xs font-semibold text-center bg-white cursor-pointer focus:outline-none focus:border-[#006D77]"
                          >
                            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                              <option key={n} value={n}>{n}</option>
                            ))}
                          </select>
                          <CaretDown size={10} weight="bold" className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CHOOSE YOUR PRICING */}
              <div className="mt-8">
                <p className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase mb-4">
                  CHOOSE YOUR PRICING:
                </p>
                <div className="space-y-3">
                  {/* Subscribe & Save */}
                  <button
                    onClick={() => setIsSubscription(true)}
                    className={`w-full text-left rounded-xl border-2 overflow-hidden transition-all ${
                      isSubscription ? "border-[#006D77]" : "border-gray-200"
                    }`}
                  >
                    <div className="bg-[#006D77] text-white text-center py-1.5">
                      <span className="text-[10px] font-bold tracking-widest uppercase">MOST POPULAR</span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            isSubscription ? "border-[#006D77] bg-[#006D77]" : "border-gray-300"
                          }`}>
                            {isSubscription && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#1A1A1A]">Subscribe & Save</p>
                            <p className="text-xs text-gray-400">15 servings</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">
                            <span className="text-gray-400 line-through mr-1">R{product.price}</span>
                            <span className="font-black text-[#1A1A1A]">R{product.subscriptionPrice}</span>
                            <span className="text-xs text-gray-400"> / bag</span>
                          </p>
                          <p className="text-xs text-gray-400">R{(product.subscriptionPrice / 15).toFixed(2)} / serving</p>
                        </div>
                      </div>
                      {isSubscription && (
                        <div className="mt-3 ml-6 space-y-1">
                          {[
                            "Save R5 on every subscription order",
                            "Easily change your quantities",
                            "Cancel any time",
                            "Pre-shipment reminders (no surprises)",
                          ].map((b) => (
                            <p key={b} className="text-xs text-gray-600 flex items-center gap-1.5">
                              <Check size={12} weight="bold" className="text-[#006D77] shrink-0" />
                              {b}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>

                  {/* One-time */}
                  <button
                    onClick={() => setIsSubscription(false)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      !isSubscription ? "border-[#006D77]" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          !isSubscription ? "border-[#006D77] bg-[#006D77]" : "border-gray-300"
                        }`}>
                          {!isSubscription && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1A1A1A]">One-time purchase</p>
                          <p className="text-xs text-gray-400">15 servings</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-[#1A1A1A]">
                          R{product.price}<span className="text-xs text-gray-400 font-normal"> / bag</span>
                        </p>
                        <p className="text-xs text-gray-400">R{(product.price / 15).toFixed(2)} / serving</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Savings + total */}
              {totalBags > 0 && (
                <div className="mt-6">
                  {savings > 0 && (
                    <p className="text-sm text-[#006D77] font-bold mb-2">
                      You&apos;re saving R{savings}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{totalBags} bag{totalBags !== 1 ? "s" : ""}</span>
                    <span>
                      {isSubscription && totalOneTimePrice > totalPrice && (
                        <span className="line-through text-gray-400 mr-2">R{totalOneTimePrice}</span>
                      )}
                      <span className="text-lg font-black text-[#1A1A1A]">R{totalPrice}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Add to Cart — dark button like Ka'Chava */}
              <button
                onClick={handleAddToCart}
                disabled={totalBags === 0}
                className={`w-full py-4 rounded-lg text-sm font-bold tracking-wider flex items-center justify-center gap-2 transition-all ${
                  totalBags > 0
                    ? "bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] cursor-pointer active:scale-[0.98]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Add to Cart
              </button>

              {/* Trust strip */}
              <div className="flex items-center justify-center gap-6 mt-5 pt-5 border-t border-gray-100">
                {[
                  { icon: ShieldCheck, label: "Secure Checkout" },
                  { icon: Truck, label: "Fast Shipping" },
                  { icon: SealCheck, label: "Quality & Safety" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Icon size={16} weight="duotone" className="text-[#006D77]" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Expandable sections */}
              <div className="mt-8 border-t border-gray-100">
                <ExpandableSection title="What's Inside" defaultOpen>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    PeptoMeal combines high-quality protein, essential vitamins and minerals
                    and digestive support nutrients to help provide balanced daily nutrition.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Each serving is designed to help support:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Energy", "Recovery", "Muscle maintenance", "Digestive health", "Healthy weight management"].map((item) => (
                      <span key={item} className="px-3 py-1 bg-[#F1F1E6] text-xs font-semibold text-[#1A1A1A] rounded-full">{item}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: product.nutrition.protein, label: "Protein" },
                      { value: `${product.nutrition.calories} cal`, label: "Calories" },
                      { value: product.nutrition.fibre, label: "Fibre" },
                      { value: `${product.nutrition.vitamins}`, label: "Vitamins" },
                      { value: product.nutrition.sugar, label: "Sugar" },
                      { value: product.nutrition.servingSize, label: "Serving" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 bg-[#F1F1E6] rounded-lg text-center">
                        <p className="text-lg font-black text-[#006D77]">{stat.value}</p>
                        <p className="text-[10px] font-semibold text-gray-500 uppercase">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </ExpandableSection>

                <ExpandableSection title="Flavour Profile">
                  <p className="text-sm text-gray-600 leading-relaxed">{product.flavorProfile}</p>
                </ExpandableSection>

                <ExpandableSection title="Taste You'll Actually Enjoy">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Nutrition should never feel like a chore. PeptoMeal flavours are designed
                    to be smooth, satisfying and easy to enjoy — making it simple to keep your
                    daily nutrition routine consistent.
                  </p>
                </ExpandableSection>

                <ExpandableSection title="Shipping Information">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Orders are processed within 1-2 business days. Delivery times vary depending
                    on location but typically arrive within 2-5 working days nationwide. Shipping
                    costs are calculated at checkout.
                  </p>
                </ExpandableSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
