import React from "react";

export default function NutritionFacts({ product }) {
  const facts = product.nutrition_facts || {};

  return (
    <div className="bg-white rounded-2xl border border-[#1A1A1A]/10 p-6">
      <h3 className="text-xs font-bold tracking-[0.3em] text-[#006D77] mb-6">
        NUTRITION FACTS
      </h3>
      <p className="text-sm text-gray-500 mb-4">Per serving (33g)</p>
      <div className="space-y-0">
        {Object.entries(facts).map(([key, value], i) => (
          <div
            key={key}
            className={`flex items-center justify-between py-3 ${
              i > 0 ? "border-t border-gray-100" : ""
            }`}
          >
            <span className="text-sm font-medium text-[#1A1A1A] capitalize">
              {key}
            </span>
            <span className="text-sm font-bold text-[#1A1A1A]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}