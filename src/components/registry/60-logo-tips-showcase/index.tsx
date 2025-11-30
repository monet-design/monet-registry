"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface ShowcaseItem {
  id: string;
  imageSrc: string;
  iconColor: string;
  iconElement?: React.ReactNode;
  domain: string;
}

interface LogoTipsShowcaseProps {
  title?: string;
  description?: string;
  items?: ShowcaseItem[];
  backgroundColor?: string;
}

// Simple icon components for the showcase items
const MinusIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="4" y="9" width="12" height="2" fill={color} />
  </svg>
);

const TriangleIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 4L17 16H3L10 4Z" fill={color} />
  </svg>
);

const ArrowKIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6 4L10 10L6 16M10 10L16 4M10 10L16 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TriangleOutlineIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3L18 17H2L10 3Z" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

const PentagonIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L18 8L15 17H5L2 8L10 2Z" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

const defaultItems: ShowcaseItem[] = [
  {
    id: "1",
    imageSrc: "/registry/logo-tips-showcase/hoodie-mockup.png",
    iconColor: "#3B82F6",
    domain: "headroom.com",
  },
  {
    id: "2",
    imageSrc: "/registry/logo-tips-showcase/sticker-mockup.png",
    iconColor: "#22C55E",
    domain: "astropay.com",
  },
  {
    id: "3",
    imageSrc: "/registry/logo-tips-showcase/laptop-mockup.png",
    iconColor: "#F97316",
    domain: "kestrel.app",
  },
  {
    id: "4",
    imageSrc: "/registry/logo-tips-showcase/cap-mockup.png",
    iconColor: "#8B5CF6",
    domain: "archetype.do",
  },
  {
    id: "5",
    imageSrc: "/registry/logo-tips-showcase/tshirt-mockup.png",
    iconColor: "#A855F7",
    domain: "rune.art",
  },
];

const iconComponents = [MinusIcon, TriangleIcon, ArrowKIcon, TriangleOutlineIcon, PentagonIcon];

export default function LogoTipsShowcase({
  title = "Make an impact",
  description = "Design logos that not only look great, but also hold real value for\nthe companies behind them.",
  items = defaultItems,
  backgroundColor = "#EBEBEB",
}: LogoTipsShowcaseProps) {
  return (
    <section
      className="w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 whitespace-pre-line"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </motion.p>
      </div>

      {/* Showcase Cards - Horizontal scrollable with edge overflow */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-5 md:gap-6 px-4 md:px-8 overflow-x-auto overflow-y-hidden scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Left spacer for centering effect */}
          <div className="flex-shrink-0 w-[calc((100vw-1200px)/2-24px)] hidden xl:block" />

          {items.map((item, index) => {
            const IconComponent = iconComponents[index % iconComponents.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px]"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <Image
                    src={item.imageSrc}
                    alt={`Logo showcase for ${item.domain}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                  />
                </div>

                {/* Domain info */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.iconColor }}
                  >
                    <IconComponent color="white" />
                  </div>
                  <span
                    className="text-sm md:text-base text-gray-700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.domain}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Right spacer for centering effect */}
          <div className="flex-shrink-0 w-[calc((100vw-1200px)/2-24px)] hidden xl:block" />
        </motion.div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
