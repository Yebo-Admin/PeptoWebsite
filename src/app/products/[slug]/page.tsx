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
  ShieldCheck,
  Truck,
  Star,
  CaretDown,
} from "@phosphor-icons/react";
import { getProductBySlug, products } from "@/data/products";
import { recipes } from "@/data/recipes";
import { useCart } from "@/lib/cart-context";

function Accordion({
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
    <div className="border-b border-zinc-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-sm font-semibold text-zinc-900">{title}</span>
        <CaretDown
          size={16}
          weight="bold"
          className={`text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
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
            <div className="pb-4 text-sm text-zinc-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900">Product not found</h1>
          <Link href="/shop" className="mt-4 inline-block text-teal-600 font-semibold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedRecipes = recipes.filter((r) => r.productSlug === product.slug);
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === "shake")
    .slice(0, 3);

  return (
    <>
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link href="/" className="hover:text-zinc-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-zinc-600 transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-zinc-600">{product.flavour}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-100"
              >
                <Image
                  src={product.images[activeImage]}
                  alt={`PeptoMeal ${product.flavour}`}
                  fill
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <span className="absolute top-5 left-5 px-3 py-1.5 bg-teal-600 text-white text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
              </motion.div>
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === i
                        ? "border-teal-500"
                        : "border-transparent hover:border-zinc-200"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                PeptoMeal Nutritional Shake
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tighter text-zinc-900">
                {product.flavour}
              </h1>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} weight="fill" className="text-gold-500" />
                  ))}
                </div>
                <span className="text-xs text-zinc-500">4.9 (127 reviews)</span>
              </div>

              <p className="mt-6 text-base text-zinc-600 leading-relaxed">
                {product.description}
              </p>

              {/* Price + Add to cart */}
              <div className="mt-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-zinc-900">
                    {product.priceDisplay}
                  </span>
                  <span className="text-sm text-zinc-500">per sachet</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 border border-zinc-200 rounded-full px-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} weight="bold" />
                    </button>
                    <span className="text-sm font-semibold w-6 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} weight="bold" />
                    </button>
                  </div>
                  <button
                    onClick={() => addItem(product, quantity)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors active:scale-[0.98]"
                  >
                    <ShoppingBag size={18} weight="bold" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Trust strip */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { icon: ShieldCheck, label: "Secure Checkout" },
                  { icon: Truck, label: "Fast Shipping" },
                  { icon: Star, label: "Quality Assured" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-zinc-50 text-center">
                      <Icon size={18} weight="duotone" className="text-teal-600" />
                      <span className="text-[11px] font-medium text-zinc-500">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="What's Inside" defaultOpen>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-zinc-50 rounded-lg">
                      <p className="text-lg font-bold text-teal-700">{product.nutrition.protein}</p>
                      <p className="text-xs text-zinc-500">Protein</p>
                    </div>
                    <div className="p-3 bg-zinc-50 rounded-lg">
                      <p className="text-lg font-bold text-teal-700">{product.nutrition.fibre}</p>
                      <p className="text-xs text-zinc-500">Fibre</p>
                    </div>
                    <div className="p-3 bg-zinc-50 rounded-lg">
                      <p className="text-lg font-bold text-teal-700">{product.nutrition.calories} cal</p>
                      <p className="text-xs text-zinc-500">Per serving</p>
                    </div>
                    <div className="p-3 bg-zinc-50 rounded-lg">
                      <p className="text-lg font-bold text-teal-700">{product.nutrition.vitamins}</p>
                      <p className="text-xs text-zinc-500">Vitamins & minerals</p>
                    </div>
                  </div>
                  <p className="mt-3">
                    Also includes synbiotics (prebiotics + probiotics), omega-3 healthy fats, and {product.nutrition.sugar} sugar per {product.nutrition.servingSize} serving.
                  </p>
                </Accordion>
                <Accordion title="Taste & Texture">
                  <p>
                    Mix with cold water for a light, refreshing shake. Use milk for a creamier, richer texture. Blends smoothly with no chalky residue — just clean, genuine {product.flavour.toLowerCase()} flavour.
                  </p>
                </Accordion>
                <Accordion title="Shipping & Delivery">
                  <p>
                    Orders are processed within 1-2 business days. Delivery typically takes 2-5 working days nationwide across South Africa. Free delivery on orders over R300.
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related recipes */}
      {relatedRecipes.length > 0 && (
        <section className="py-16 bg-zinc-50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tighter text-zinc-900 mb-8">
              Recipes with {product.flavour}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={recipe.image} alt={recipe.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-zinc-900 group-hover:text-teal-700 transition-colors">{recipe.title}</h3>
                    <p className="text-sm text-zinc-500 mt-1">{recipe.prepTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related flavours */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tighter text-zinc-900 mb-8">
            More Flavours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-zinc-200">
                  <Image src={p.image} alt={p.flavour} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 group-hover:text-teal-700 transition-colors">{p.flavour}</h3>
                  <p className="text-sm text-zinc-500">{p.priceDisplay}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
