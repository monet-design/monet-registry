"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F6FA",
    iconBad: "#DC2626",
    iconGood: "#16A34A",
  },
  dark: {
    background: "#1A1A1A",
    iconBad: "#EF4444",
    iconGood: "#22C55E",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { X, Check, MapPin, Link2, Car } from "lucide-react";
import { ReactNode } from "react";

// Types
interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface PracticalUIBeforeAfterProps {
  mode?: "light" | "dark";
  beforeTitle?: string;
  beforeContent?: string;
  afterTitle?: string;
  afterFeatures?: FeatureItem[];
}

// Default features for the "After" section
const defaultAfterFeatures: FeatureItem[] = [
  {
    icon: <MapPin className="h-4 w-4" />,
    title: "Beautiful waterfront location",
    description: "98% of recent guests gave this location a 5-star review",
  },
  {
    icon: <Link2 className="h-4 w-4" />,
    title: "Fast check-in experience",
    description: "95% of recent guests gave the check-in experience a 5-star review",
  },
  {
    icon: <Car className="h-4 w-4" />,
    title: "Free secure parking",
    description: "This property features a single lock-up garage with storage",
  },
];

// Default content for "Before" section
const defaultBeforeContent = `Beautiful waterfront location. 98% of recent guests gave this location a 5-star review. Fast check-in experience. 95% of recent guests gave the check-in experience a 5-star review. Free secure parking. This property features a single lock-up garage with storage.`;

// Status Icon Component
function StatusIcon({ variant }: { variant: "bad" | "good" }) {
  if (variant === "bad") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
        <X className="h-5 w-5 text-[#DC2626]" strokeWidth={2.5} />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
      <Check className="h-5 w-5 text-[#16A34A]" strokeWidth={2.5} />
    </div>
  );
}

// Before Card - Dense paragraph text
function BeforeCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex flex-col rounded-2xl bg-white px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
    >
      {/* Status Icon */}
      <div className="absolute -right-5 -top-5">
        <StatusIcon variant="bad" />
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">{title}</h3>

      {/* Dense paragraph content */}
      <p className="mt-3 text-[13px] leading-[1.7] text-[#6B7280]">{content}</p>
    </motion.div>
  );
}

// After Card - Structured feature list
function AfterCard({
  title,
  features,
}: {
  title: string;
  features: FeatureItem[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex flex-col rounded-2xl bg-white px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
    >
      {/* Status Icon */}
      <div className="absolute -right-5 -top-5">
        <StatusIcon variant="good" />
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">{title}</h3>

      {/* Feature List */}
      <div className="mt-4 flex flex-col gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="flex items-start gap-3"
          >
            {/* Icon */}
            <div className="mt-0.5 flex-shrink-0 text-[#9CA3AF]">
              {feature.icon}
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] font-semibold text-[#1A1A1A]">
                {feature.title}
              </span>
              <span className="text-[13px] leading-[1.6] text-[#6B7280]">
                {feature.description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Component
export default function PracticalUIBeforeAfter({
  mode = "light",
  beforeTitle = "Property features",
  beforeContent = defaultBeforeContent,
  afterTitle = "Property features",
  afterFeatures = defaultAfterFeatures,
}: PracticalUIBeforeAfterProps) {
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-[#F5F6FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Before/After Grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <BeforeCard title={beforeTitle} content={beforeContent} />
          <AfterCard title={afterTitle} features={afterFeatures} />
        </div>
      </div>
    </section>
  );
}
