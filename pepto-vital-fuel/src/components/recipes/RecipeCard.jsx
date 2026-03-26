import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";

const RECIPE_IMAGES = {
  "Berry Blast Smoothie Bowl": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/c85521a5c_generated_3d89afba.png",
  "Chocolate Peanut Butter Power Shake": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/727042336_generated_48b64355.png",
};

export default function RecipeCard({ recipe, index, onClick }) {
  const image = RECIPE_IMAGES[recipe.title] || "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b14cdb1d85bbd1f6940e72/a09f77e36_generated_ab506fa8.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={() => onClick(recipe)}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#006D77]/10">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={recipe.image_url || image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            {recipe.prep_time && (
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                {recipe.prep_time}
              </div>
            )}
            {recipe.protein_g && (
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Zap className="w-3.5 h-3.5" />
                {recipe.protein_g}g protein
              </div>
            )}
          </div>
          <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#006D77] transition-colors">
            {recipe.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{recipe.description}</p>
          {recipe.flavor_used && (
            <div className="mt-3">
              <span className="inline-block text-[10px] font-bold tracking-wider bg-[#006D77]/10 text-[#006D77] px-3 py-1 rounded-full">
                USES: {recipe.flavor_used.toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}