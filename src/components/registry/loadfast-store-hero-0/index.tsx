"use client";

const COLORS = {
  light: {
    accent: "#1C1917", // charcoal
    accentHover: "#292524",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    accentHover: "#E8E6E1",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion } from "motion/react";
import { Star, Apple } from "lucide-react";

interface LoadfastStoreHero0Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreHero0({
  mode = "light",
}: LoadfastStoreHero0Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section
      className="w-full px-6 lg:px-8 py-12 lg:py-20 relative"
      style={{ backgroundColor: isDark ? colors.sand : colors.sand }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left"
        >
          <h1
            className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug"
            style={{ color: isDark ? colors.accent : colors.accent }}
          >
            Become the professional who{" "}
            <span className="italic">never types the same thing twice</span>
          </h1>

          <p
            className="text-base lg:text-lg leading-relaxed max-w-xl"
            style={{ color: isDark ? `${colors.accent}99` : `${colors.accent}99` }}
          >
            While others waste 250+ hours yearly on repetitive typing, you'll be
            the one who responds instantly, never makes typos, and looks
            effortlessly efficient. LoadFast gives you that reputation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center flex-wrap">
            <button
              className="px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
              style={{
                backgroundColor: colors.accent,
                color: colors.sand,
              }}
            >
              Get started
            </button>
            <button
              className="px-6 py-2.5 rounded-md text-sm font-medium transition-colors border"
              style={{
                backgroundColor: "transparent",
                color: colors.accent,
                borderColor: `${colors.accent}33`,
              }}
            >
              Get extension
            </button>
            <button
              className="px-6 py-2.5 rounded-md text-sm font-medium transition-colors border flex items-center gap-2"
              style={{
                backgroundColor: "transparent",
                color: colors.accent,
                borderColor: `${colors.accent}33`,
              }}
            >
              <Apple className="w-4 h-4" />
              Download Mac App
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 object-cover"
                    style={{ borderColor: colors.sand }}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p
                  className="text-sm"
                  style={{ color: `${colors.accent}99` }}
                >
                  <span className="font-semibold" style={{ color: colors.accent }}>
                    184
                  </span>{" "}
                  wizards beat typing
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Video/Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <div
            className="rounded-lg overflow-hidden w-full relative aspect-video shadow-2xl"
            style={{ backgroundColor: colors.stone }}
          >
            {/* Placeholder for video/demo area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-pink-200/30 via-blue-200/30 to-purple-200/30 flex items-center justify-center">
                <div
                  className="bg-white rounded-lg shadow-lg p-4 w-4/5 max-w-md"
                >
                  <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-500 ml-2">ChatGPT</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700 font-medium">What can I help with?</p>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                      <span className="text-sm text-gray-500">Ask anything...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
