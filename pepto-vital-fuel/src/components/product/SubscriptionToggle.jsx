import React from "react";
import { Shield, RotateCcw, Truck } from "lucide-react";

export default function SubscriptionToggle({ isSubscribe, setIsSubscribe, product }) {
  const savings = product.price - (product.subscription_price || product.price);

  return (
    <div className="space-y-3">
      {/* Subscribe option */}
      <button
        onClick={() => setIsSubscribe(true)}
        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 ${
          isSubscribe
            ? "border-[#006D77] bg-[#006D77]/5"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center transition-colors ${
                isSubscribe ? "border-[#006D77]" : "border-gray-300"
              }`}
            >
              {isSubscribe && <div className="w-2.5 h-2.5 rounded-full bg-[#006D77]" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1A1A1A]">Subscribe & Save</span>
                {savings > 0 && (
                  <span className="text-[10px] font-bold tracking-wider bg-[#FFB703] text-[#1A1A1A] px-2 py-0.5 rounded-full">
                    SAVE R{savings}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Delivered every 4 weeks. Cancel anytime.
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-[#1A1A1A]">
              R{product.subscription_price}
            </p>
            <p className="text-xs text-gray-400">
              R{((product.subscription_price || 0) / (product.servings || 1)).toFixed(2)}/serving
            </p>
          </div>
        </div>
        {isSubscribe && (
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#006D77]/10">
            {[
              { icon: RotateCcw, text: "Cancel anytime" },
              { icon: Truck, text: "Free shipping" },
              { icon: Shield, text: "30-day guarantee" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-[#006D77]" />
                <span className="text-xs text-[#006D77] font-medium">{text}</span>
              </div>
            ))}
          </div>
        )}
      </button>

      {/* One-time option */}
      <button
        onClick={() => setIsSubscribe(false)}
        className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 ${
          !isSubscribe
            ? "border-[#006D77] bg-[#006D77]/5"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center transition-colors ${
                !isSubscribe ? "border-[#006D77]" : "border-gray-300"
              }`}
            >
              {!isSubscribe && <div className="w-2.5 h-2.5 rounded-full bg-[#006D77]" />}
            </div>
            <div>
              <span className="font-bold text-[#1A1A1A]">One-Time Purchase</span>
              <p className="text-sm text-gray-500 mt-1">
                No commitment. Single delivery.
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-[#1A1A1A]">R{product.price}</p>
            <p className="text-xs text-gray-400">
              R{((product.price || 0) / (product.servings || 1)).toFixed(2)}/serving
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}