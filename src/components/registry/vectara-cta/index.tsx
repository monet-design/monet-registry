"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import "./font.css";

interface AppIcon {
  id: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface VectaraCtaProps {
  mode?: "preview" | "live";
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  appIcons?: AppIcon[];
}

// [CUSTOMIZATION]
export const CUSTOMIZATION = {};
// [/CUSTOMIZATION]

// Icon 1: Pen/cursor icon on dark background
function PenIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Curved line */}
      <path
        d="M6 26C6 18 12 12 20 8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Pen cursor */}
      <path
        d="M18 6L22 10L12 20L8 20L8 16L18 6Z"
        fill="white"
      />
      {/* Small dot */}
      <circle cx="24" cy="8" r="2" fill="#4ADE80" />
    </svg>
  );
}

// Icon 2: Checkmark on purple gradient
function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 16L14 22L24 10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Icon 3: Chart/graph icon
function ChartIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Curved line */}
      <path
        d="M6 24C10 20 14 14 26 8"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="2 2"
      />
      {/* Dot */}
      <circle cx="18" cy="14" r="3" fill="#F97316" />
      {/* Small sparkle */}
      <path
        d="M22 10L23 8M23 8L24 10M23 8L21 8M23 8L25 8"
        stroke="#F97316"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

const defaultAppIcons: AppIcon[] = [
  {
    id: "pen",
    icon: <PenIcon />,
    bgColor: "#1D1E22",
  },
  {
    id: "check",
    icon: <CheckIcon />,
    bgColor: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
  },
  {
    id: "chart",
    icon: <ChartIcon />,
    bgColor: "#F5F3EF",
  },
];

export default function VectaraCta({
  mode = "live",
  headline = "Get started with Vectara",
  description = "Vectara is the shortest path between question and\nanswer, delivering true business value in the shortest time.",
  primaryButtonText = "Contact us",
  secondaryButtonText = "Get started",
  primaryButtonHref = "#",
  secondaryButtonHref = "#",
  onPrimaryClick,
  onSecondaryClick,
  appIcons = defaultAppIcons,
}: VectaraCtaProps) {
  return (
    <section className="relative w-full bg-[#F9FBFC] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* App Icons with dotted lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-10"
        >
          <div className="relative flex items-center">
            {appIcons.map((appIcon, index) => (
              <div key={appIcon.id} className="relative flex items-center">
                {/* Icon box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="relative w-16 h-16 rounded-xl flex items-center justify-center shadow-sm"
                  style={{
                    background: appIcon.bgColor,
                  }}
                >
                  {appIcon.icon}
                </motion.div>

                {/* Dotted line connector */}
                {index < appIcons.length - 1 && (
                  <div className="w-12 h-px border-t border-dashed border-gray-300 mx-1" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-normal text-[#1D1E22] tracking-tight"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {headline}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-center text-base md:text-lg text-[#5A5C5F] leading-relaxed max-w-xl mx-auto"
        >
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <a
            href={primaryButtonHref}
            onClick={(e) => {
              if (onPrimaryClick) {
                e.preventDefault();
                onPrimaryClick();
              }
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1B7AFD] text-white font-medium text-base transition-all duration-300 hover:bg-[#1569DB] hover:shadow-lg hover:shadow-blue-500/25"
          >
            {primaryButtonText}
          </a>

          {/* Secondary Button */}
          <a
            href={secondaryButtonHref}
            onClick={(e) => {
              if (onSecondaryClick) {
                e.preventDefault();
                onSecondaryClick();
              }
            }}
            className="inline-flex items-center justify-center gap-1 px-4 py-3 text-[#1D1E22] font-medium text-base transition-colors duration-300 hover:text-[#1B7AFD] group"
          >
            {secondaryButtonText}
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
