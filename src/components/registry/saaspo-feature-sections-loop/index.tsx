"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#9B7BFF",
    accentHover: "#8B6BEF",
    background: "#000000",
    featureBar: "#9B7BFF",
  },
  dark: {
    accent: "#9B7BFF",
    accentHover: "#8B6BEF",
    background: "#000000",
    featureBar: "#9B7BFF",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Types
interface FeatureItem {
  title: string;
  description: string;
}

interface SaaspoFeatureSectionsLoopProps {
  mode?: "light" | "dark";
  label?: string;
  headline?: string;
  description?: string;
  features?: FeatureItem[];
}

// Default features
const defaultFeatures: FeatureItem[] = [
  {
    title: "Integrations",
    description:
      "Loop integrates seamlessly with hundreds of the most popular Shopify apps across marketing, logistics, and shipping.",
  },
  {
    title: "API",
    description:
      "Build your own integration using our public API and get started in minutes with our easy to follow documentation.",
  },
  {
    title: "Point of Sale (POS)",
    description:
      "With our point of sale app (POS), you can prompt shoppers who start a return online to drop-off in-store, saving time and money.",
  },
];

// Brand Logo Icons
function FedExLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="currentColor">
      <text x="4" y="32" fontSize="16" fontWeight="bold" fontFamily="Arial">
        FedEx
      </text>
    </svg>
  );
}

function UPSLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <rect x="4" y="8" width="32" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="8" y="26" fontSize="12" fontWeight="bold" fontFamily="Arial">
        UPS
      </text>
    </svg>
  );
}

function ShopifyLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M25.5 6.5c-.1-.4-.5-.6-.8-.6s-3.3-.2-3.3-.2-2.2-2.1-2.4-2.4c-.2-.2-.7-.2-.9-.1 0 0-.5.2-1.3.4-.8-2.3-2.1-4.4-4.5-4.4h-.2C11.3-.2 10.6 0 10 .4 7.3-2.5 3.4.2 2.4 6.8c-1.4 4.3-2.4 7.7-2.4 7.7s-1.3.4-1.5.5c-.9.3-1 .3-1.1 1.2C-2.6 17 0 32 0 32h18.4l7.1-1.5s-2.1-14.9-2.2-15.5c-.1-.6-.2-1-.3-1.5.4-.1.7-.2.7-.2s-2.2-2.1-2.4-2.4c-.2-.2-.6-.2-.8-.1l-.2.1c0-.1 0-.2-.1-.3.5-.2 1-.3 1.4-.5.1-.1.2-.3.3-.5z" />
    </svg>
  );
}

// Generic brand placeholder icons
function BrandIcon1({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <rect x="4" y="4" width="24" height="24" rx="4" />
    </svg>
  );
}

function BrandIcon2({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <circle cx="16" cy="16" r="12" />
    </svg>
  );
}

function BrandIcon3({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <polygon points="16,2 30,28 2,28" />
    </svg>
  );
}

function BrandIcon4({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M4 8h24v4H4zM4 14h24v4H4zM4 20h24v4H4z" />
    </svg>
  );
}

function BrandIcon5({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 4l12 8v12l-12 8-12-8V12z" />
    </svg>
  );
}

function BrandIcon6({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <rect x="2" y="2" width="12" height="12" rx="2" />
      <rect x="18" y="2" width="12" height="12" rx="2" />
      <rect x="2" y="18" width="12" height="12" rx="2" />
      <rect x="18" y="18" width="12" height="12" rx="2" />
    </svg>
  );
}

// 3D Torus Component
function Torus3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
      style={{ perspective: "1000px" }}
    >
      {/* Torus using gradient and shadow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%,
              transparent 30%,
              transparent 35%,
              #9B7BFF 36%,
              #B8A4FF 40%,
              #C4B5FF 50%,
              #9B7BFF 60%,
              #7B5BDF 65%,
              transparent 66%,
              transparent 100%
            )
          `,
          transform: "rotateX(60deg)",
          boxShadow: `
            0 30px 60px rgba(155, 123, 255, 0.3),
            0 10px 30px rgba(155, 123, 255, 0.2),
            inset 0 -20px 40px rgba(0, 0, 0, 0.3)
          `,
        }}
      />
      {/* Inner hole shadow */}
      <div
        className="absolute"
        style={{
          top: "38%",
          left: "38%",
          width: "24%",
          height: "24%",
          background: "radial-gradient(ellipse at center, #000 0%, transparent 70%)",
          transform: "rotateX(60deg)",
          borderRadius: "50%",
        }}
      />
      {/* Glossy highlight */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "25%",
          width: "50%",
          height: "20%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
          transform: "rotateX(60deg)",
          borderRadius: "50%",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  );
}

// Floating Brand Logos Background
function FloatingLogos() {
  const logos = [
    { Icon: FedExLogo, x: "5%", y: "10%", delay: 0.2, size: "w-16 h-6" },
    { Icon: UPSLogo, x: "75%", y: "5%", delay: 0.3, size: "w-10 h-10" },
    { Icon: ShopifyLogo, x: "90%", y: "15%", delay: 0.4, size: "w-8 h-8" },
    { Icon: BrandIcon1, x: "10%", y: "30%", delay: 0.5, size: "w-6 h-6" },
    { Icon: BrandIcon2, x: "85%", y: "35%", delay: 0.6, size: "w-7 h-7" },
    { Icon: FedExLogo, x: "95%", y: "50%", delay: 0.7, size: "w-14 h-5" },
    { Icon: BrandIcon3, x: "5%", y: "55%", delay: 0.8, size: "w-6 h-6" },
    { Icon: UPSLogo, x: "80%", y: "65%", delay: 0.9, size: "w-8 h-8" },
    { Icon: BrandIcon4, x: "15%", y: "75%", delay: 1.0, size: "w-7 h-7" },
    { Icon: ShopifyLogo, x: "90%", y: "80%", delay: 1.1, size: "w-6 h-6" },
    { Icon: BrandIcon5, x: "70%", y: "90%", delay: 1.2, size: "w-8 h-8" },
    { Icon: BrandIcon6, x: "25%", y: "85%", delay: 1.3, size: "w-6 h-6" },
    // More scattered logos
    { Icon: BrandIcon1, x: "60%", y: "8%", delay: 0.35, size: "w-5 h-5" },
    { Icon: BrandIcon2, x: "40%", y: "88%", delay: 0.95, size: "w-5 h-5" },
    { Icon: BrandIcon3, x: "0%", y: "45%", delay: 0.55, size: "w-5 h-5" },
    { Icon: BrandIcon4, x: "95%", y: "30%", delay: 0.45, size: "w-5 h-5" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 0.6, delay: logo.delay }}
          viewport={{ once: true }}
          className="absolute text-gray-400"
          style={{ left: logo.x, top: logo.y }}
        >
          <logo.Icon className={logo.size} />
        </motion.div>
      ))}
    </div>
  );
}

// Feature Item Component
function FeatureItemCard({
  feature,
  index,
}: {
  feature: FeatureItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {/* Vertical accent bar */}
      <div
        className="w-0.5 flex-shrink-0 rounded-full"
        style={{ backgroundColor: COLORS.dark.featureBar }}
      />
      <div className="space-y-2">
        <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsLoop({
  mode = "dark",
  label = "Extensibility",
  headline = "Integrated with the apps\nyou use and love",
  description = "Loop integrates with hundreds of the most popular apps across marketing, logistics and shipping. If you don't find it, you can build your own one using our API.",
  features = defaultFeatures,
}: SaaspoFeatureSectionsLoopProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium"
              style={{ color: colors.accent }}
            >
              {label}
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              {headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>

            {/* Features List */}
            <div className="space-y-8 pt-4">
              {features.map((feature, index) => (
                <FeatureItemCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            {/* Floating brand logos in background */}
            <FloatingLogos />

            {/* 3D Torus */}
            <Torus3D />
          </div>
        </div>
      </div>
    </section>
  );
}
