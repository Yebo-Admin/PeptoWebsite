"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Star,
  CaretDown,
  Check,
  Truck,
  ShieldCheck,
  ArrowRight,
  Package,
} from "@phosphor-icons/react";
import { getShakes, type Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

const FREE_SHIPPING_THRESHOLD = 500;

export function FlavorBundleBuilder() {
  const shakes = getShakes();
  const { addItem } = useCart();
  const [isSubscription, setIsSubscription] = useState(true);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(shakes.map((s) => [s.id, 0]))
  );

  const updateQuantity = (id: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, Math.min(6, qty)) }));
  };

  const totalBags = useMemo(
    () => Object.values(quantities).reduce((a, b) => a + b, 0),
    [quantities]
  );

  const selectedProducts = useMemo(
    () => shakes.filter((s) => (quantities[s.id] || 0) > 0),
    [shakes, quantities]
  );

  const totalPrice = useMemo(() => {
    return shakes.reduce((sum, s) => {
      const qty = quantities[s.id] || 0;
      const price = isSubscription ? s.subscriptionPrice : s.price;
      return sum + price * qty;
    }, 0);
  }, [shakes, quantities, isSubscription]);

  const totalSavings = useMemo(() => {
    if (!isSubscription) return 0;
    return shakes.reduce((sum, s) => {
      const qty = quantities[s.id] || 0;
      return sum + (s.price - s.subscriptionPrice) * qty;
    }, 0);
  }, [shakes, quantities, isSubscription]);

  const perBagPrice = totalBags > 0 ? Math.round(totalPrice / totalBags) : 0;
  const freeShipping = totalPrice >= FREE_SHIPPING_THRESHOLD;

  const handleAddToCart = () => {
    selectedProducts.forEach((product) => {
      const qty = quantities[product.id] || 0;
      if (qty > 0) {
        addItem(product, qty);
      }
    });
    // Reset quantities after adding
    setQuantities(Object.fromEntries(shakes.map((s) => [s.id, 0])));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-3">
            BUILD YOUR BUNDLE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[#1A1A1A]">
            CHOOSE YOUR FAVOURITE{" "}
            <span className="text-[#006D77]">FLAVOURS</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-lg mx-auto">
            Mix and match any combination. The more you add, the more you save.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Flavor cards */}
          <div className="lg:col-span-2">
            {/* Flavor card grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {shakes.map((product, i) => {
                const qty = quantities[product.id] || 0;
                const isSelected = qty > 0;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? "ring-2 ring-[#006D77] shadow-lg shadow-[#006D77]/10"
                        : "ring-1 ring-gray-100 hover:ring-[#006D77]/20"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] bg-[#F1F1E6]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {/* Badge */}
                      {product.isBestseller && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#FFB703] text-[#1A1A1A] text-[8px] font-black tracking-widest rounded-full">
                          BESTSELLER
                        </span>
                      )}
                      {product.isNew && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#006D77] text-white text-[8px] font-black tracking-widest rounded-full">
                          NEW
                        </span>
                      )}
                      {/* Selected overlay */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-[#006D77] rounded-full flex items-center justify-center">
                          <Check size={14} weight="bold" className="text-white" />
                        </div>
                      )}
                    </div>

                    {/* Info + qty selector */}
                    <div className="p-3 bg-white">
                      <h3 className="text-xs font-black tracking-wider text-[#1A1A1A] uppercase truncate">
                        {product.name}
                      </h3>
                      {/* Star rating */}
                      <div className="flex gap-0.5 my-1.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            size={10}
                            weight="fill"
                            className={
                              s < Math.round(product.rating)
                                ? "text-[#FFB703]"
                                : "text-gray-200"
                            }
                          />
                        ))}
                        <span className="text-[9px] text-gray-400 ml-0.5">
                          ({product.reviewCount})
                        </span>
                      </div>

                      {/* Quantity dropdown */}
                      <div className="relative mt-2">
                        <select
                          value={qty}
                          onChange={(e) =>
                            updateQuantity(product.id, parseInt(e.target.value))
                          }
                          className={`w-full appearance-none px-3 py-2 pr-8 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#006D77] text-white"
                              : "bg-[#F1F1E6] text-[#1A1A1A]"
                          }`}
                        >
                          <option value={0}>0 bags</option>
                          <option value={1}>1 bag</option>
                          <option value={2}>2 bags</option>
                          <option value={3}>3 bags</option>
                          <option value={4}>4 bags</option>
                          <option value={5}>5 bags</option>
                          <option value={6}>6 bags</option>
                        </select>
                        <CaretDown
                          size={14}
                          weight="bold"
                          className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                            isSelected ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Order summary / pricing sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Subscription toggle */}
              <div className="space-y-3">
                <p className="text-xs font-bold tracking-[0.3em] text-[#1A1A1A] uppercase">
                  CHOOSE YOUR PRICING
                </p>

                {/* Subscribe option */}
                <button
                  onClick={() => setIsSubscription(true)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    isSubscription
                      ? "border-[#006D77] bg-[#006D77]/5"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
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
                      <span className="text-sm font-black text-[#1A1A1A]">
                        SUBSCRIBE & SAVE
                      </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider bg-[#FFB703] text-[#1A1A1A] px-2 py-0.5 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                  <div className="ml-7 space-y-1">
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Check size={12} weight="bold" className="text-[#006D77]" />
                      Save R50/bag on every order
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Check size={12} weight="bold" className="text-[#006D77]" />
                      Change quantities anytime
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Check size={12} weight="bold" className="text-[#006D77]" />
                      Cancel anytime, no commitment
                    </p>
                  </div>
                </button>

                {/* One-time option */}
                <button
                  onClick={() => setIsSubscription(false)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    !isSubscription
                      ? "border-[#006D77] bg-[#006D77]/5"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
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
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      ONE-TIME PURCHASE
                    </span>
                  </div>
                </button>
              </div>

              {/* Order summary card */}
              <div className="bg-[#F1F1E6] rounded-2xl p-5">
                <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-4">
                  ORDER SUMMARY
                </p>

                {totalBags === 0 ? (
                  <p className="text-sm text-gray-400 py-4 text-center">
                    Select flavours above to get started
                  </p>
                ) : (
                  <>
                    {/* Selected items */}
                    <div className="space-y-2 mb-4">
                      {selectedProducts.map((product) => {
                        const qty = quantities[product.id];
                        const price = isSubscription
                          ? product.subscriptionPrice
                          : product.price;
                        return (
                          <div
                            key={product.id}
                            className="flex items-center justify-between text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white shrink-0">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="font-bold text-[#1A1A1A] text-xs">
                                {product.name}{" "}
                                <span className="text-gray-400 font-normal">
                                  x{qty}
                                </span>
                              </span>
                            </div>
                            <span className="font-bold text-[#1A1A1A] text-xs">
                              R{price * qty}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="horizon-line mb-4" />

                    {/* Pricing */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          {totalBags} bag{totalBags !== 1 ? "s" : ""} total
                        </span>
                        <span className="font-bold text-[#1A1A1A]">
                          R{totalPrice}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Per bag</span>
                        <span className="font-bold text-[#1A1A1A]">
                          R{perBagPrice}
                        </span>
                      </div>
                      {isSubscription && totalSavings > 0 && (
                        <div className="flex justify-between">
                          <span className="text-[#006D77] font-bold">
                            You save
                          </span>
                          <span className="text-[#006D77] font-black">
                            -R{totalSavings}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Shipping</span>
                        <span
                          className={
                            freeShipping
                              ? "text-[#006D77] font-bold"
                              : "text-gray-400"
                          }
                        >
                          {freeShipping ? "FREE" : "Calculated at checkout"}
                        </span>
                      </div>
                    </div>

                    {/* Free shipping nudge */}
                    {!freeShipping && totalPrice > 0 && (
                      <div className="mt-3 p-2.5 bg-white rounded-lg">
                        <div className="flex items-center gap-2 text-xs">
                          <Truck size={14} className="text-[#006D77] shrink-0" />
                          <span className="text-gray-500">
                            Add{" "}
                            <span className="font-bold text-[#1A1A1A]">
                              R{FREE_SHIPPING_THRESHOLD - totalPrice}
                            </span>{" "}
                            more for free shipping
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#006D77] rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min(
                                100,
                                (totalPrice / FREE_SHIPPING_THRESHOLD) * 100
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* CTA */}
                <button
                  onClick={handleAddToCart}
                  disabled={totalBags === 0}
                  className={`w-full mt-5 py-4 rounded-full text-sm font-black tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    totalBags > 0
                      ? "bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] animate-pulse-gold cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag size={18} weight="bold" />
                  {totalBags > 0
                    ? `ADD TO CART — R${totalPrice}`
                    : "SELECT FLAVOURS"}
                </button>

                {totalBags > 0 && isSubscription && (
                  <p className="text-center text-[10px] text-gray-400 mt-2 tracking-wider uppercase">
                    Subscribe & Save. Cancel anytime.
                  </p>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <ShieldCheck size={16} className="text-[#006D77]" />
                  <span className="font-bold tracking-wider">SECURE</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Truck size={16} className="text-[#006D77]" />
                  <span className="font-bold tracking-wider">2-5 DAYS</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Package size={16} className="text-[#006D77]" />
                  <span className="font-bold tracking-wider">GUARANTEE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
