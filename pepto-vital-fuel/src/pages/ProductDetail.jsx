import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Check, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import NutritionFacts from "../components/product/NutritionFacts";
import SubscriptionToggle from "../components/product/SubscriptionToggle";
import FlavorSelector from "../components/product/FlavorSelector";

const PRODUCT_IMAGES = {
  "Chocolate Treat": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/bf267524c_generated_1c1e7647.png",
  "Vanilla Swirl": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/b27df8a36_generated_14b89d36.png",
  "Caramel Latte": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/4d52fd9a1_generated_96b4a5cd.png",
  "Berry Blast": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/696ee3ef5_generated_b73cdcb6.png",
  "Variety": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png",
};

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [activeTab, setActiveTab] = useState("benefits");
  const [quantities, setQuantities] = useState({});

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () => base44.entities.Product.list(),
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => base44.entities.Review.list(),
  });

  const product = products.find((p) => p.id === productId);

  const handleQuantityChange = (productId, qty) => {
    setQuantities((prev) => ({ ...prev, [productId]: qty }));
  };

  const totalBags = Object.values(quantities).reduce((sum, q) => sum + q, 0);
  const selectedProducts = products.filter((p) => (quantities[p.id] || 0) > 0);
  const totalPrice = selectedProducts.reduce((sum, p) => {
    const price = isSubscribe ? (p.subscription_price || p.price) : p.price;
    return sum + price * (quantities[p.id] || 0);
  }, 0);
  const isMultiSelect = product?.category === "shake";

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F1F1E6" }}>
        <div className="text-center pt-24">
          <div className="w-12 h-12 rounded-full border-2 border-[#006D77]/30 border-t-[#006D77] animate-spin mx-auto" />
          <p className="text-sm text-gray-500 mt-4">Loading product...</p>
        </div>
      </div>
    );
  }

  const heroImage = PRODUCT_IMAGES[product.flavor] || product.image_url || "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/347b0ac94_generated_97deeddc.png";

  const TABS = [
    { id: "benefits", label: "BENEFITS" },
    { id: "ingredients", label: "INGREDIENTS" },
    { id: "nutrition", label: "NUTRITION" },
    { id: "reviews", label: `REVIEWS (${reviews.length})` },
  ];

  return (
    <div style={{ backgroundColor: "#F1F1E6" }} className="min-h-screen">
      <div className="pt-24 sm:pt-28">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to={createPageUrl("Shop")}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#006D77] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative sticky top-28 rounded-3xl overflow-hidden bg-white">
                <img
                  src={heroImage}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                {product.is_bestseller && (
                  <div className="absolute top-6 left-6 bg-[#FFB703] text-[#1A1A1A] text-[10px] font-bold tracking-widest px-4 py-2 rounded-full">
                    BESTSELLER
                  </div>
                )}
                {/* Love-it guarantee badge */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#FFB703]" />
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-[#1A1A1A]">30-DAY</p>
                    <p className="text-[10px] font-bold tracking-wider text-[#006D77]">LOVE-IT GUARANTEE</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs font-bold tracking-[0.3em] text-[#006D77] mb-3">
                {product.category === "bundle" ? "BUNDLE" : "VITASHAKE"}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-[#1A1A1A] leading-[0.95]">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s < Math.round(product.rating || 0)
                          ? "fill-[#FFB703] text-[#FFB703]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.review_count} reviews)
                </span>
              </div>

              <div className="horizon-line my-6" />

              <p className="text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 my-8">
                {[
                  { value: `${product.protein_g || 30}g`, label: "PROTEIN" },
                  { value: `${product.servings || 15}`, label: "SERVINGS" },
                  { value: `${product.calories || 220}`, label: "CALORIES" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-[#1A1A1A]">{stat.value}</p>
                    <p className="text-[10px] font-bold tracking-wider text-gray-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Flavor selector (for shake category) */}
              {isMultiSelect && (
                <div className="mb-6">
                  <FlavorSelector
                    products={products}
                    quantities={quantities}
                    onQuantityChange={handleQuantityChange}
                  />
                  {totalBags > 0 && (
                    <div className="mt-3 p-3 bg-[#006D77]/5 rounded-xl border border-[#006D77]/10 text-sm text-[#006D77] font-semibold">
                      {totalBags} bag{totalBags !== 1 ? "s" : ""} selected
                    </div>
                  )}
                </div>
              )}

              {/* Subscription toggle */}
              <SubscriptionToggle
                isSubscribe={isSubscribe}
                setIsSubscribe={setIsSubscribe}
                product={product}
              />

              {/* CTA */}
              <button className="w-full mt-6 btn-teal rounded-full py-4 text-sm font-bold tracking-wider flex items-center justify-center gap-3 animate-pulse-gold">
                <ShoppingBag className="w-5 h-5" />
                {isMultiSelect && totalBags > 0
                  ? `ADD TO CART — R${totalPrice} (${totalBags} bag${totalBags !== 1 ? "s" : ""})`
                  : `ADD TO CART — R${isSubscribe ? product.subscription_price : product.price}`}
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                {isSubscribe ? "Subscribe & Save. Cancel anytime." : "One-time purchase. Free shipping over R500."}
              </p>

              {/* Tabs */}
              <div className="mt-12">
                <div className="flex gap-1 overflow-x-auto pb-2">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2.5 rounded-full text-[11px] font-bold tracking-wider whitespace-nowrap transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-[#1A1A1A] text-white"
                          : "bg-white text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  {activeTab === "benefits" && (
                    <div className="space-y-3">
                      {(product.benefits || []).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#006D77]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-[#006D77]" />
                          </div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "ingredients" && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.ingredients || "Ingredients information coming soon."}
                    </p>
                  )}

                  {activeTab === "nutrition" && (
                    <NutritionFacts product={product} />
                  )}

                  {activeTab === "reviews" && (
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-xl p-5">
                          <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star
                                key={s}
                                className={`w-3.5 h-3.5 ${
                                  s < (review.rating || 0)
                                    ? "fill-[#FFB703] text-[#FFB703]"
                                    : "text-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                          {review.title && (
                            <h4 className="font-bold text-sm text-[#1A1A1A] mb-1">{review.title}</h4>
                          )}
                          <p className="text-sm text-gray-600">{review.body}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-xs font-semibold text-[#1A1A1A]">{review.author_name}</span>
                            {review.verified && (
                              <span className="text-[10px] font-bold tracking-wider text-[#006D77]">
                                ✓ VERIFIED
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}