"use client";
import React from "react";
import { Spotlight } from "./Spotlight";

export function SpotlightPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full rounded-md overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(264 100% 75%)"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}