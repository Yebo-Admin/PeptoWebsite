import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Zap, ChefHat } from "lucide-react";

const RECIPE_IMAGES = {
  "Berry Blast Smoothie Bowl": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/c85521a5c_generated_3d89afba.png",
  "Chocolate Peanut Butter Power Shake": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/727042336_generated_48b64355.png",
};

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  const image = RECIPE_IMAGES[recipe.title] || "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Image */}
          <div className="relative aspect-video overflow-hidden rounded-t-3xl">
            <img
              src={recipe.image_url || image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-[#1A1A1A]" />
            </button>
          </div>

          <div className="p-8">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-4">
              {recipe.prep_time && (
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Clock className="w-4 h-4 text-[#006D77]" />
                  {recipe.prep_time}
                </div>
              )}
              {recipe.protein_g && (
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <Zap className="w-4 h-4 text-[#FFB703]" />
                  {recipe.protein_g}g protein
                </div>
              )}
              {recipe.calories && (
                <div className="text-sm text-gray-500">{recipe.calories} cal</div>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1A1A1A]">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">{recipe.description}</p>

            <div className="horizon-line my-6" />

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-xs font-bold tracking-[0.3em] text-[#006D77] mb-4">
                INGREDIENTS
              </h3>
              <ul className="space-y-2">
                {(recipe.ingredients || []).map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] text-[#006D77] mb-4">
                PREPARATION
              </h3>
              <div className="space-y-4">
                {(recipe.steps || []).map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#006D77]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-[#006D77]">{i + 1}</span>
                    </div>
                    <p className="text-sm text-gray-600 pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}