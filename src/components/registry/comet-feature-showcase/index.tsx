"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  UtensilsCrossed,
  Globe,
  Mail,
  Search,
  MessageCircle,
  ShoppingBag,
  Tv,
  Plane,
  Pencil,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface FeatureOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface CometFeatureShowcaseProps {
  mode?: "light" | "dark";
  title?: string;
  features?: FeatureOption[];
  defaultActiveFeature?: string;
  browserContent?: React.ReactNode;
  className?: string;
}

const defaultFeatures: FeatureOption[] = [
  { id: "eat", label: "Eat", icon: <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  { id: "browse", label: "Browse", icon: <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  { id: "email", label: "Email", icon: <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  { id: "search", label: "Search", icon: <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  { id: "talk", label: "Talk", icon: <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  { id: "shop", label: "Shop", icon: <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  { id: "watch", label: "Watch", icon: <Tv className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
  { id: "travel", label: "Travel", icon: <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
];

function BrowserMockup({ children }: { children?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative w-full max-w-[480px] mx-auto"
    >
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
        {/* Browser Chrome */}
        <div className="bg-gray-100 border-b border-gray-200 px-3 py-2">
          <div className="flex items-center gap-2">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 ml-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-t text-[10px] text-gray-600 border border-b-0 border-gray-200">
                <span className="truncate max-w-[80px]">
                  Put together a grocery car...
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 text-[10px] text-gray-400">
                <span>Untitled</span>
              </div>
              <div className="text-gray-400 text-sm">+</div>
            </div>
          </div>

          {/* Address Bar */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-xs">&lt;</span>
              <span className="text-xs">&gt;</span>
            </div>
            <div className="flex-1 bg-gray-50 rounded px-2 py-1 flex items-center gap-1">
              <Search className="w-3 h-3 text-gray-400" />
              <span className="text-[10px] text-gray-400">Search or enter URL</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <Pencil className="w-3 h-3" />
              <span>Assistant</span>
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="p-4 bg-white min-h-[200px]">
          {children || (
            <div className="space-y-4">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-8 h-8 text-gray-300">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              {/* Input Area */}
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-400 mb-3">
                  Ask anything or @mention a tab
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-gray-400 text-xs">
                      S
                    </button>
                    <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-gray-400 text-xs">
                      @
                    </button>
                    <button className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-gray-400 text-xs">
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="w-6 h-6 rounded flex items-center justify-center text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>
                    <button className="w-6 h-6 rounded flex items-center justify-center text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    <button className="w-6 h-6 rounded flex items-center justify-center text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </button>
                    <button className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center text-white">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-4 py-2 flex items-center justify-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500" />
          <span className="text-[10px] text-gray-400">Try Comet Assistant</span>
        </div>
      </div>

      {/* Cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-[85px] right-[65px] z-30"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-md"
        >
          <path
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87c.48 0 .72-.58.38-.92L6.35 3.21a.5.5 0 00-.85.35v0z"
            fill="#000"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: seededRandom(i * 1.1) * 100,
      top: seededRandom(i * 2.2) * 100,
      opacity: seededRandom(i * 3.3) * 0.7 + 0.3,
      duration: seededRandom(i * 4.4) * 3 + 2,
      delay: seededRandom(i * 5.5) * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function CometFeatureShowcase({
  title = "Use Comet to",
  features = defaultFeatures,
  defaultActiveFeature = "eat",
  browserContent,
  className,
}: CometFeatureShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState(defaultActiveFeature);

  return (
    <div
      className={cn(
        "relative w-full max-w-[640px] bg-[#FBFAF5] p-4 pb-14 pr-6 sm:p-6 sm:pb-20 sm:pr-10",
        className
      )}
    >
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[32px] sm:rounded-[40px] bg-[#13161D] overflow-hidden"
      >
        {/* Star Field Background */}
        <StarField />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#13161D]/50" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 pt-8 sm:pt-12 pb-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white text-center text-lg sm:text-xl font-light mb-6"
          >
            {title}
          </motion.h2>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8"
          >
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveFeature(feature.id)}
                className={cn(
                  "flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                  activeFeature === feature.id
                    ? "bg-white text-[#13161D]"
                    : "bg-[#1a1d24]/80 text-white/90 border border-white/15 hover:bg-white/10 hover:border-white/30"
                )}
              >
                {feature.icon}
                <span>{feature.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Browser Mockup */}
          <AnimatePresence mode="wait">
            <BrowserMockup key={activeFeature}>{browserContent}</BrowserMockup>
          </AnimatePresence>
        </div>

        {/* Decorative curved line at top */}
        <svg
          className="absolute top-0 left-0 w-full h-32 pointer-events-none"
          viewBox="0 0 640 128"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 100 Q 120 40, 280 55 Q 440 70, 660 30"
            stroke="url(#curveGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="640" y2="0">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
              <stop offset="20%" stopColor="#14b8a6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#14b8a6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Planet Image - positioned outside the card */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-2 right-0 sm:bottom-4 sm:right-2 w-32 h-32 sm:w-40 sm:h-40 z-20"
      >
        <Image
          src="/registry/comet-feature-showcase/planet.png"
          alt="Planet decoration"
          width={160}
          height={160}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Decorative elements outside the card */}
      <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-[#828180]/30 blur-xl -z-10" />
      <div className="absolute bottom-8 -left-8 w-32 h-32 rounded-full bg-[#B7C3C6]/40 blur-xl -z-10" />
    </div>
  );
}
