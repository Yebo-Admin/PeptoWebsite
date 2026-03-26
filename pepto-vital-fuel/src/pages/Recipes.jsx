import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Droplets, Timer, Smile } from "lucide-react";
import RecipeCard from "../components/recipes/RecipeCard";
import RecipeModal from "../components/recipes/RecipeModal";

const STEPS = [
  { icon: Droplets, num: "01", title: "SCOOP & POUR", desc: "Add one sachet (33g) to 300ml ice-cold water or plant milk." },
  { icon: Timer, num: "02", title: "SHAKE OR BLEND", desc: "20 seconds is all it takes. Use a shaker or blender for silky results." },
  { icon: Smile, num: "03", title: "SIP & THRIVE", desc: "30g protein, vitamins, and gut-healthy nutrients. Ready in under a minute." },
];

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const { data: recipes = [] } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => base44.entities.Recipe.list(),
  });

  return (
    <div style={{ backgroundColor: "#F1F1E6" }} className="min-h-screen">
      {/* Header */}
      <div className="pt-28 sm:pt-36 pb-16 bg-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">
              JUST ADD WATER
            </p>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">
              RECIPES & <span className="text-[#006D77]">HOW-TO</span>
            </h1>
            <p className="text-lg text-white/50 mt-4 max-w-lg">
              From simple shakes to gourmet smoothie bowls. Fuel your creativity.
            </p>
          </motion.div>
        </div>
        <div className="horizon-line mt-12" />
      </div>

      {/* How to Make Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#1A1A1A]">
            THE PERFECT <span className="text-[#006D77]">SHAKE</span>
          </h2>
          <p className="text-gray-500 mt-3">Three steps. Under a minute. Complete nutrition.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 text-center relative"
              >
                <div className="text-5xl font-black text-[#F1F1E6] absolute top-4 right-6 select-none">
                  {step.num}
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#006D77]/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-[#006D77]" />
                </div>
                <h3 className="text-sm font-bold tracking-wider text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="horizon-line max-w-7xl mx-auto" />

      {/* Recipe Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.3em] text-[#FFB703] mb-4">GET CREATIVE</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#1A1A1A]">
            SHAKE <span className="text-[#006D77]">RECIPES</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, i) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={i} onClick={setSelectedRecipe} />
          ))}
        </div>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}