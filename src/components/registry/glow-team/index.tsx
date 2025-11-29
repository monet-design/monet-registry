"use client";

import { motion } from "motion/react";
import { X, Pencil, Users, Sun, Sparkles } from "lucide-react";

// Types
interface ComparisonItem {
  title: string;
  description?: string;
  icon?: "pencil" | "users" | "sun" | "sparkles";
}

interface GlowTeamComparisonProps {
  headingBlack?: string;
  headingGray?: string;
  withTitle?: string;
  withoutTitle?: string;
  withItems?: ComparisonItem[];
  withoutItems?: ComparisonItem[];
}

// Default data based on the image
const defaultWithItems: ComparisonItem[] = [
  {
    title: "3-Day Free Trial",
    description: "(delivering 1-2 polished screens)",
    icon: "pencil",
  },
  {
    title: "Triple talent, single investment",
    description: "(PM, Lead, Product Designer)",
    icon: "users",
  },
  {
    title: "Clarity and transparency, from kickoff to delivery",
    icon: "sun",
  },
  {
    title: "AI tools reduce manual work",
    description: "— so your budget goes further",
    icon: "sparkles",
  },
];

const defaultWithoutItems: ComparisonItem[] = [
  {
    title: "Traditional vendors trapped in inflexible methodologies",
  },
  {
    title: "Independent designers: versatile but reliability varies",
  },
  {
    title: "Typical agencies keeping clients in the dark about processes",
  },
  {
    title: "In-house teams lack specialized design expertise",
  },
];

// Icon Component for "With" items
function WithIcon({ icon }: { icon?: ComparisonItem["icon"] }) {
  const iconClass = "h-3.5 w-3.5 text-[#1A1A1A]";

  const renderIcon = () => {
    switch (icon) {
      case "pencil":
        return <Pencil className={iconClass} strokeWidth={2} />;
      case "users":
        return <Users className={iconClass} strokeWidth={2} />;
      case "sun":
        return <Sun className={iconClass} strokeWidth={2} />;
      case "sparkles":
        return <Sparkles className={iconClass} strokeWidth={2} />;
      default:
        return <Pencil className={iconClass} strokeWidth={2} />;
    }
  };

  return (
    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
      {renderIcon()}
    </div>
  );
}

// X Icon Component for "Without" items
function XMarkIcon() {
  return (
    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
      <X className="h-4 w-4 text-[#9CA3AF]" strokeWidth={2} />
    </div>
  );
}

// Indicator dot component
function IndicatorDot({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div
      className={`h-2 w-2 rounded-full ${
        variant === "dark" ? "bg-[#1A1A1A]" : "bg-[#9CA3AF]"
      }`}
    />
  );
}

// "With" Card Component
function WithCard({
  title,
  items,
}: {
  title: string;
  items: ComparisonItem[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-1 flex-col overflow-hidden rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-[#D6F083] px-5 py-3">
        <IndicatorDot variant="dark" />
        <h3 className="text-sm font-semibold text-[#1A1A1A]">{title}</h3>
        <IndicatorDot variant="dark" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3.5 bg-[#F7F7F7] px-5 py-5">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="flex items-start gap-2.5"
          >
            <WithIcon icon={item.icon} />
            <p className="text-xs leading-relaxed text-[#1A1A1A]">
              <span className="font-semibold">{item.title}</span>
              {item.description && (
                <span className="font-normal text-[#6B7280]">
                  {" "}
                  {item.description}
                </span>
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// "Without" Card Component
function WithoutCard({
  title,
  items,
}: {
  title: string;
  items: ComparisonItem[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#E5E7EB]"
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-white px-5 py-3">
        <IndicatorDot variant="light" />
        <h3 className="text-sm font-medium text-[#9CA3AF]">{title}</h3>
        <IndicatorDot variant="light" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3.5 bg-white px-5 py-5">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="flex items-start gap-2.5"
          >
            <XMarkIcon />
            <p className="text-xs leading-relaxed text-[#9CA3AF]">
              {item.title}
              {item.description && <span> {item.description}</span>}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Component
export default function GlowTeamComparison({
  headingBlack = "When startups need outcomes,",
  headingGray = "they choose us",
  withTitle = "With Glow",
  withoutTitle = "Without Glow",
  withItems = defaultWithItems,
  withoutItems = defaultWithoutItems,
}: GlowTeamComparisonProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-xl font-semibold tracking-tight text-[#1A1A1A] sm:text-2xl">
            {headingBlack}
          </h2>
          <h2 className="text-xl font-semibold tracking-tight text-[#9CA3AF] sm:text-2xl">
            {headingGray}
          </h2>
        </motion.div>

        {/* Comparison Cards */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <WithCard title={withTitle} items={withItems} />
          <WithoutCard title={withoutTitle} items={withoutItems} />
        </div>
      </div>
    </section>
  );
}
