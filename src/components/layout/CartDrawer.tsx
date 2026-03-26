"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash, ShoppingBag } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } =
    useCart();

  const formatPrice = (cents: number) => `R${cents}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-[90vw] max-w-md bg-[#F1F1E6] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 bg-white">
              <h2 className="text-sm font-bold tracking-widest text-[#1A1A1A] uppercase">
                Your Cart
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} weight="bold" className="text-[#1A1A1A]" />
              </button>
            </div>
            <div className="horizon-line" />

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">
                    <ShoppingBag size={28} className="text-zinc-400" />
                  </div>
                  <p className="text-sm text-zinc-500">Your cart is empty</p>
                  <Link
                    href="/shop"
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2.5 bg-[#006D77] text-white text-xs font-bold tracking-wider uppercase rounded-full hover:bg-[#008A96] transition-colors"
                  >
                    Browse Flavours
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      className="flex gap-4 p-3 rounded-2xl bg-white"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#F1F1E6]">
                        <Image
                          src={item.product.image}
                          alt={item.product.flavor}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#1A1A1A] truncate">
                          {item.product.flavor}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          R{item.product.subscriptionPrice} each
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-7 h-7 rounded-full bg-[#F1F1E6] flex items-center justify-center hover:bg-[#E5E5D6] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} weight="bold" />
                          </button>
                          <span className="text-sm font-bold text-[#1A1A1A] w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-7 h-7 rounded-full bg-[#F1F1E6] flex items-center justify-center hover:bg-[#E5E5D6] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} weight="bold" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto p-1.5 rounded-full hover:bg-red-50 text-zinc-400 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="bg-white p-5 space-y-4">
                <div className="horizon-line mb-4" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
                    Subtotal
                  </span>
                  <span className="text-lg font-black text-[#1A1A1A]">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400 tracking-wider uppercase">
                  Shipping calculated at checkout
                </p>
                <Link
                  href="/cart"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 bg-[#FFB703] text-[#1A1A1A] text-sm font-bold tracking-wider uppercase rounded-full hover:bg-[#FFC733] transition-colors active:scale-[0.98]"
                >
                  CHECKOUT — {formatPrice(totalPrice)}
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
