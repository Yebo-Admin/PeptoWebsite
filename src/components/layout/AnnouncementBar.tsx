"use client";

import { useState } from "react";
import { X } from "@phosphor-icons/react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-[#006D77] text-white text-xs">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 px-8 py-2.5">
        <p className="font-semibold tracking-widest uppercase text-center">
          FREE SHIPPING ON ORDERS OVER R500{" "}
          <span className="text-[#FFB703]">&mdash;</span>{" "}
          30-DAY LOVE-IT GUARANTEE
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={14} weight="bold" />
      </button>
    </div>
  );
}
