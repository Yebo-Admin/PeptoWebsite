"use client";

import { useState } from "react";
import { X, Truck } from "@phosphor-icons/react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-teal-700 text-white text-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 px-4 py-2.5">
        <Truck size={16} weight="bold" className="shrink-0" />
        <p className="font-medium tracking-wide">
          Free delivery on orders over R300 — Nationwide shipping in 2-5 working days
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
