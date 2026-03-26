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
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const formatPrice = (cents: number) => `R${(cents / 100).toFixed(0)}`;

  if (items.length === 0) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[600px] mx-auto px-4 md:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-zinc-400" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Your cart is empty
          </h1>
          <p className="mt-3 text-base text-zinc-500">
            Looks like you haven&apos;t added anything yet. Browse our flavours and find your favourite.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors"
          >
            Browse Flavours
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-zinc-400 hover:text-red-500 transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                className="flex gap-4 md:gap-6 p-4 md:p-5 bg-zinc-50 rounded-2xl"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shrink-0 bg-zinc-200">
                  <Image
                    src={item.product.image}
                    alt={item.product.flavour}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-bold text-zinc-900 hover:text-teal-700 transition-colors"
                      >
                        {item.product.flavour}
                      </Link>
                      <p className="text-sm text-zinc-500 mt-0.5">
                        PeptoMeal Nutritional Shake
                      </p>
                    </div>
                    <p className="text-lg font-bold text-zinc-900 shrink-0">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center gap-2 border border-zinc-200 rounded-full bg-white px-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
                        aria-label="Decrease"
                      >
                        <Minus size={14} weight="bold" />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
                        aria-label="Increase"
                      >
                        <Plus size={14} weight="bold" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 rounded-full hover:bg-red-50 text-zinc-400 hover:text-red-500 transition-colors"
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
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-700 transition-colors mt-4"
            >
              <ArrowLeft size={14} weight="bold" />
              Continue Shopping
            </Link>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h2 className="text-lg font-bold text-zinc-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="font-semibold text-zinc-900">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Shipping</span>
                  <span className="text-zinc-500">
                    {totalPrice >= 30000 ? "Free" : "Calculated at checkout"}
                  </span>
                </div>
                <div className="border-t border-zinc-200 pt-3 flex justify-between">
                  <span className="font-bold text-zinc-900">Total</span>
                  <span className="text-xl font-bold text-zinc-900">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              {totalPrice < 30000 && (
                <p className="mt-4 text-xs text-teal-600 font-medium">
                  Add {formatPrice(30000 - totalPrice)} more for free shipping
                </p>
              )}

              <button className="w-full mt-6 py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors active:scale-[0.98]">
                Proceed to Checkout
              </button>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <ShieldCheck size={14} className="text-teal-600" />
                  Secure Checkout
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Truck size={14} className="text-teal-600" />
                  2-5 Day Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
