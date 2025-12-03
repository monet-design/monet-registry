"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  dark: {
    background: "#0D0616",
    cardBorder: "rgba(255, 255, 255, 0.1)",
    mintAccent: "#7DDAC3",
    mintBadgeBg: "#7DDAC3",
    mintBadgeText: "#0D0616",
    lavenderAccent: "#C4B5FD",
    lavenderBadgeBg: "#C4B5FD",
    lavenderBadgeText: "#0D0616",
    brownAccent: "#A68A64",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.6)",
    textMuted: "rgba(255, 255, 255, 0.4)",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "./font.css";

// Types
interface PricingPlan {
  name: string;
  badge?: string;
  badgeColor?: "mint" | "lavender";
  description: string;
  price: string;
  period: string;
  subtext: string;
  buttonText: string;
  buttonColor: "mint" | "lavender" | "brown";
  gradient: string;
}

interface ServiceItem {
  title: string;
  description: string;
  linkText: string;
}

interface PricingOplMaster18Props {
  title?: string;
  plans?: PricingPlan[];
  services?: ServiceItem[];
}

// Default data
const defaultPlans: PricingPlan[] = [
  {
    name: "Monthly Flow",
    badge: "MOST POPULAR",
    badgeColor: "mint",
    description: "Flexible & unlimited access to\ndesign services with a hyperfast\nturnaround time.",
    price: "£5,000",
    period: "/m",
    subtext: "Pause or cancel anytime",
    buttonText: "Get Started",
    buttonColor: "mint",
    gradient: "linear-gradient(135deg, #3D5A4C 0%, #5A7A6A 50%, #7A9A8A 100%)",
  },
  {
    name: "Quarterly Stream",
    description: "Save £500 per month.",
    price: "£4,500",
    period: "/m",
    subtext: "Billed paid quarterly",
    buttonText: "Get Started",
    buttonColor: "brown",
    gradient: "linear-gradient(135deg, #4A3D2A 0%, #6A5A4A 50%, #8A7A6A 100%)",
  },
  {
    name: "Pro-flow",
    badge: "3X THE REQUESTS",
    badgeColor: "lavender",
    description: "Double design requests with a\nhyperfast turnaround time.",
    price: "£8,000",
    period: "/m",
    subtext: "Pause or cancel anytime",
    buttonText: "Get Started",
    buttonColor: "lavender",
    gradient: "linear-gradient(135deg, #4A3D5A 0%, #6A5A7A 50%, #8A7A9A 100%)",
  },
];

const defaultServices: ServiceItem[] = [
  {
    title: "Talk it through",
    description: "Need to talk through Hyperflow in\ndetail? Schedule a call with us today.",
    linkText: "Book a Call",
  },
  {
    title: "Roast your site",
    description: "Need some quick wins for improving\nyour landing page, app or website?",
    linkText: "Roast us",
  },
  {
    title: "Refer a client",
    description: "Earn 5% monthly recurring\ncommission for each referral.",
    linkText: "Join now",
  },
];

// PricingCard component
function PricingCard({
  plan,
  index,
}: {
  plan: PricingPlan;
  index: number;
}) {
  const colors = COLORS.dark;

  const getButtonStyle = () => {
    switch (plan.buttonColor) {
      case "mint":
        return { color: colors.mintAccent };
      case "lavender":
        return { color: colors.lavenderAccent };
      case "brown":
        return { color: colors.brownAccent };
      default:
        return { color: colors.mintAccent };
    }
  };

  const getBadgeStyle = () => {
    if (plan.badgeColor === "mint") {
      return { backgroundColor: colors.mintBadgeBg, color: colors.mintBadgeText };
    }
    return { backgroundColor: colors.lavenderBadgeBg, color: colors.lavenderBadgeText };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: plan.gradient,
        border: `1px solid ${colors.cardBorder}`,
      }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute right-4 top-4">
          <span
            className="rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider"
            style={getBadgeStyle()}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Plan name */}
        <h3 className="text-lg font-semibold text-white">
          {plan.name}
        </h3>

        {/* Description */}
        <p
          className="mt-3 text-sm leading-relaxed whitespace-pre-line"
          style={{ color: colors.textSecondary }}
        >
          {plan.description}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-baseline">
          <span className="text-3xl font-bold text-white">
            {plan.price}
          </span>
          <span className="ml-1 text-lg text-white">{plan.period}</span>
        </div>

        {/* Subtext */}
        <p
          className="mt-1 text-xs"
          style={{ color: colors.textMuted }}
        >
          {plan.subtext}
        </p>

        {/* Button */}
        <button
          className="mt-6 flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-200 hover:opacity-80"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            ...getButtonStyle(),
          }}
        >
          <span className="text-sm font-medium">{plan.buttonText}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

// ServiceCard component
function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const colors = COLORS.dark;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="flex flex-col"
    >
      <h4 className="text-base font-semibold text-white">
        {service.title}
      </h4>
      <p
        className="mt-2 text-sm leading-relaxed whitespace-pre-line"
        style={{ color: colors.textSecondary }}
      >
        {service.description}
      </p>
      <a
        href="#"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
      >
        {service.linkText}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
}

// Decorative ribbon component (CSS-based alternative)
function DecorativeRibbon() {
  return (
    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-60">
      <svg
        width="200"
        height="400"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[400px] w-[200px]"
      >
        <defs>
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path
          d="M150 0C150 0 50 80 100 150C150 220 50 280 100 350C150 420 100 400 100 400"
          stroke="url(#ribbonGradient)"
          strokeWidth="60"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M180 50C180 50 80 130 130 200C180 270 80 330 130 400"
          stroke="url(#ribbonGradient)"
          strokeWidth="40"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

// Main Component
export default function PricingOplMaster18({
  title = "Our fluid plans",
  plans = defaultPlans,
  services = defaultServices,
}: PricingOplMaster18Props) {
  const colors = COLORS.dark;

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative ribbon */}
      <DecorativeRibbon />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-light italic text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {title}
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Divider */}
        <div
          className="my-12 h-px w-full"
          style={{ backgroundColor: colors.cardBorder }}
        />

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
