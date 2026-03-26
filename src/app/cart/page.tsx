"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash,
  ShoppingBag,
  ShieldCheck,
  Truck,
  ArrowLeft,
} from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCart();

  const formatPrice = (cents: number) => `R${cents}`;

  if (items.length === 0) {
    return (
      <div className="bg-[#F1F1E6]">
        <section className="py-20 md:py-28">
          <div className="max-w-[600px] mx-auto px-4 md:px-8 text-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tighter">
              YOUR CART IS EMPTY
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Looks like you haven&apos;t added anything yet. Browse our
              flavours and find your favourite.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-colors"
            >
              BROWSE FLAVOURS
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#F1F1E6]">
      <section className="py-8 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] uppercase mb-1">
                SHOPPING
              </p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-[#1A1A1A]">
                YOUR CART
              </h1>
            </div>
            <button
              onClick={clearCart}
              className="text-sm font-bold text-gray-400 hover:text-red-500 transition-colors tracking-wider"
            >
              CLEAR ALL
            </button>
          </div>

          <div className="horizon-line mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  className="flex gap-4 md:gap-6 p-4 md:p-5 bg-white rounded-2xl border border-transparent hover:border-[#006D77]/10 transition-all"
                >
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shrink-0 bg-[#F1F1E6]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-black text-[#1A1A1A] hover:text-[#006D77] transition-colors tracking-tight"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs font-bold tracking-wider text-gray-400 mt-0.5">
                          PEPTOMEAL SHAKE
                        </p>
                      </div>
                      <p className="text-lg font-black text-[#1A1A1A] shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="flex items-center gap-2 border border-gray-200 rounded-full bg-[#F1F1E6] px-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus size={14} weight="bold" />
                        </button>
                        <span className="text-sm font-bold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                          aria-label="Increase"
                        >
                          <Plus size={14} weight="bold" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-[#006D77] transition-colors mt-4 tracking-wider"
              >
                <ArrowLeft size={14} weight="bold" />
                CONTINUE SHOPPING
              </Link>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl p-6 border border-transparent">
                <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] uppercase mb-5">
                  ORDER SUMMARY
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold text-[#1A1A1A]">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-gray-500">
                      {totalPrice >= 300
                        ? "Free"
                        : "Calculated at checkout"}
                    </span>
                  </div>
                  <div className="horizon-line my-3" />
                  <div className="flex justify-between">
                    <span className="font-black text-[#1A1A1A]">Total</span>
                    <span className="text-xl font-black text-[#1A1A1A]">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                {totalPrice < 300 && (
                  <p className="mt-4 text-xs font-bold text-[#006D77] tracking-wider">
                    Add {formatPrice(300 - totalPrice)} more for free shipping
                  </p>
                )}

                <button className="w-full mt-6 py-4 bg-[#FFB703] hover:bg-[#FFC733] text-[#1A1A1A] font-bold tracking-wider rounded-full transition-all active:scale-[0.98] animate-pulse-gold">
                  PROCEED TO CHECKOUT
                </button>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <ShieldCheck size={14} className="text-[#006D77]" />
                    <span className="font-bold tracking-wider">SECURE</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Truck size={14} className="text-[#006D77]" />
                    <span className="font-bold tracking-wider">2-5 DAYS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
