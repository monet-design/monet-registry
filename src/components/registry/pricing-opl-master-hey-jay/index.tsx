"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FAF8F5",
    cardBg: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    yellowAccent: "#FFDE59",
    greenAccent: "#4ADE80",
    pinkAccent: "#F472B6",
    redAccent: "#EF4444",
    orangeAccent: "#FB923C",
    blueAccent: "#60A5FA",
    purpleAccent: "#C084FC",
    savingsGreen: "#4ADE80",
  },
  dark: {
    background: "#0F172A",
    cardBg: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    yellowAccent: "#FFDE59",
    greenAccent: "#4ADE80",
    pinkAccent: "#F472B6",
    redAccent: "#EF4444",
    orangeAccent: "#FB923C",
    blueAccent: "#60A5FA",
    purpleAccent: "#C084FC",
    savingsGreen: "#4ADE80",
  },
} as const;

/**
 * 기하학적 도형 배너 색상
 */
const SHAPE_COLORS = [
  "#8B5CF6", // purple
  "#4ADE80", // green
  "#EF4444", // red
  "#FB923C", // orange
  "#3B82F6", // blue
  "#FFDE59", // yellow
  "#F472B6", // pink
  "#10B981", // teal
];

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "No strings attached",
    subtitle:
      "Our plans are like Julia Roberts in Eat, Pray, Love...full of pasta with a fear of commitment. Pause or cancel your plan anytime for any reason.",
  },
  plans: [
    {
      name: "Basic",
      description: "Great for folks who want to try us out or just have a few one-off tasks.",
      price: "$1,295",
      period: "/wk",
      periodLabel: "USD",
      paymentNote: "Paid weekly",
      features: [
        "Fixed scope of work",
        "2 rounds of revisions",
        "Dedicated project manager",
        "1x designer",
        "2-5 days turnaround",
        "Bad puns",
      ],
    },
    {
      name: "Standard",
      description: "One request at a time. For folks who need on-going design support.",
      price: "$4,995",
      period: "/mo",
      periodLabel: "USD",
      paymentNote: "Pause or cancel anytime",
      features: [
        "1x active task at a time",
        "Unlimited revisions",
        "Dedicated project manager",
        "1x senior designer",
        "2-3 days turnaround",
        "Seinfeld references",
      ],
    },
    {
      name: "Growth",
      description: "Two requests at a time. For folks with increasing design needs.",
      price: "$9,995",
      period: "/mo",
      periodLabel: "USD",
      paymentNote: "Pause or cancel anytime",
      features: [
        "2x active tasks at a time",
        "Unlimited revisions",
        "Dedicated project manager",
        "2x senior designers",
        "2-3 days turnaround",
        "Inside jokes & cat videos",
      ],
    },
  ],
  math: {
    title: "What's the math?",
    subtitle: "See how much you can save with a",
    brandName: "heyjay",
    designSubscription: "design subscription.",
    tabs: ["BASIC", "STANDARD", "GROWTH"],
    comparison: {
      salary: "$15,000/mo",
      salaryLabel: "Average monthly salary for a Senior Designer*",
      subscriptionPrice: "$4,995/mo",
      subscriptionLabel: "heyjay Standard monthly subscription",
      savings: "$10,000/mo+",
      savingsLabel: "Monthly savings with heyjay",
    },
    disclaimer:
      "*This doesn't even include the costs of hiring, onboarding, benefits, weekly lunches, sick time, idle time, 7 company water bottles, birthday cupcakes, software subscriptions, tech gear, underwear...........",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ThumbsUp, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

// Geometric shapes for the banner
const shapes = [
  { type: "triangle", rotate: 0 },
  { type: "circle", rotate: 0 },
  { type: "diamond", rotate: 45 },
  { type: "triangle", rotate: 180 },
  { type: "semicircle", rotate: 0 },
  { type: "circle", rotate: 0 },
  { type: "triangle", rotate: 90 },
  { type: "diamond", rotate: 0 },
  { type: "semicircle", rotate: 180 },
  { type: "triangle", rotate: 270 },
  { type: "circle", rotate: 0 },
  { type: "diamond", rotate: 45 },
];

interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  periodLabel: string;
  paymentNote: string;
  features: string[];
}

interface HeaderContent {
  title: string;
  subtitle: string;
}

interface MathContent {
  title: string;
  subtitle: string;
  brandName: string;
  designSubscription: string;
  tabs: string[];
  comparison: {
    salary: string;
    salaryLabel: string;
    subscriptionPrice: string;
    subscriptionLabel: string;
    savings: string;
    savingsLabel: string;
  };
  disclaimer: string;
}

interface PricingOplMasterHeyJayProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  plans?: Plan[];
  math?: MathContent;
  onSubscribeClick?: (planName: string) => void;
  onBookCallClick?: () => void;
}

// Shape component for geometric banner
function Shape({
  type,
  color,
  rotate,
  size = 24,
}: {
  type: string;
  color: string;
  rotate: number;
  size?: number;
}) {
  const style = { transform: `rotate(${rotate}deg)` };

  switch (type) {
    case "triangle":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={style}
          fill={color}
        >
          <polygon points="12,2 22,22 2,22" />
        </svg>
      );
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case "diamond":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={style}
          fill={color}
        >
          <rect x="4" y="4" width="16" height="16" />
        </svg>
      );
    case "semicircle":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={style}
          fill={color}
        >
          <path d="M2,12 A10,10 0 0,1 22,12 Z" />
        </svg>
      );
    default:
      return null;
  }
}

// Decorative blob shapes
function BlobDecoration({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.1,42.1C64.8,55.2,53.8,66.8,40.5,74.3C27.2,81.8,11.6,85.2,-3.9,90.9C-19.4,96.7,-38.8,104.8,-54.1,98.8C-69.4,92.7,-80.6,72.5,-85.8,52.2C-91,31.9,-90.2,11.6,-86.8,-7.2C-83.3,-26,-77.2,-43.2,-65.9,-54.8C-54.6,-66.4,-38.1,-72.4,-22.5,-78.5C-6.9,-84.5,7.9,-90.5,22.7,-88.8C37.5,-87.1,52.3,-77.6,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export default function PricingOplMasterHeyJay({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  plans = DEFAULT_CONTENT.plans,
  math = DEFAULT_CONTENT.math,
  onSubscribeClick,
  onBookCallClick,
}: PricingOplMasterHeyJayProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(1); // Default to STANDARD

  return (
    <section
      className="relative w-full py-16 md:py-20 px-4 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap");

        .font-heading {
          font-family: "Playfair Display", Georgia, serif;
        }

        .font-body {
          font-family: "Inter", system-ui, sans-serif;
        }

        .font-script {
          font-family: "Caveat", cursive;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-heading text-3xl md:text-4xl lg:text-5xl italic mb-4"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
          <p
            className="font-body text-sm md:text-base max-w-xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Geometric Shapes Banner */}
        <motion.div
          className="flex justify-center items-center gap-2 md:gap-3 flex-wrap mb-12 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Shape
                type={shape.type}
                color={SHAPE_COLORS[index % SHAPE_COLORS.length]}
                rotate={shape.rotate}
                size={20}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">
          {/* Left blob decoration */}
          <div className="absolute -left-20 top-1/3 w-40 h-40 opacity-30 pointer-events-none">
            <BlobDecoration color={colors.pinkAccent} />
          </div>

          {/* Right blob decoration */}
          <div className="absolute -right-20 top-1/2 w-48 h-48 opacity-30 pointer-events-none">
            <BlobDecoration color={colors.blueAccent} />
          </div>

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="rounded-2xl p-6 border border-gray-200 relative"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Plan Name */}
              <h3
                className="font-heading text-2xl md:text-3xl italic mb-2"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className="font-body text-xs mb-4 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-1">
                <span
                  className="font-body text-3xl md:text-4xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.price}
                </span>
                <span
                  className="font-body text-lg font-medium"
                  style={{ color: colors.textPrimary }}
                >
                  {plan.period}
                </span>
                <span
                  className="font-body text-xs ml-1"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.periodLabel}
                </span>
              </div>

              {/* Payment Note */}
              <p
                className="font-body text-xs mb-4"
                style={{ color: colors.textSecondary }}
              >
                {plan.paymentNote}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="font-body text-xs flex items-start gap-2"
                    style={{ color: colors.textSecondary }}
                  >
                    <span style={{ color: colors.textPrimary }}>↳</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <motion.button
                onClick={() => onSubscribeClick?.(plan.name)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-800 font-body text-sm font-medium mb-3"
                style={{ backgroundColor: colors.yellowAccent }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ThumbsUp className="w-4 h-4" />
                <span className="font-heading italic">Subscribe</span>
              </motion.button>

              {/* Book a Call Button */}
              <motion.button
                onClick={onBookCallClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-800 font-body text-sm font-medium"
                style={{ backgroundColor: colors.cardBg }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-heading italic">Book a call</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* What's the math? Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-heading text-3xl md:text-4xl italic mb-3"
            style={{ color: colors.textPrimary }}
          >
            {math.title}
          </h2>
          <p
            className="font-body text-sm"
            style={{ color: colors.textSecondary }}
          >
            {math.subtitle}{" "}
            <span
              className="font-script text-lg underline"
              style={{ color: colors.textPrimary }}
            >
              {math.brandName}
            </span>{" "}
            {math.designSubscription}
          </p>
        </motion.div>

        {/* Plan Toggle Tabs */}
        <motion.div
          className="flex justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {math.tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-xs font-body font-medium transition-all ${
                activeTab === index
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Salary Box */}
          <div className="flex flex-col items-center">
            <div
              className="px-6 py-3 rounded-lg border-2 border-gray-800 mb-2"
              style={{ backgroundColor: colors.cardBg }}
            >
              <span
                className="font-body text-xl md:text-2xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                {math.comparison.salary}
              </span>
            </div>
            <p
              className="font-body text-xs text-center max-w-[150px]"
              style={{ color: colors.textSecondary }}
            >
              {math.comparison.salaryLabel}
            </p>
          </div>

          <span
            className="font-body text-lg font-medium"
            style={{ color: colors.textSecondary }}
          >
            vs
          </span>

          {/* Subscription Box */}
          <div className="flex flex-col items-center">
            <div
              className="px-6 py-3 rounded-lg border-2 border-gray-800 mb-2"
              style={{ backgroundColor: colors.cardBg }}
            >
              <span
                className="font-body text-xl md:text-2xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                {math.comparison.subscriptionPrice}
              </span>
            </div>
            <p
              className="font-body text-xs text-center max-w-[150px]"
              style={{ color: colors.textSecondary }}
            >
              <span className="font-script underline">{math.brandName}</span>{" "}
              {math.comparison.subscriptionLabel.replace("heyjay ", "")}
            </p>
          </div>

          <ArrowRight
            className="w-6 h-6 hidden md:block"
            style={{ color: colors.textSecondary }}
          />

          {/* Savings Box */}
          <div className="flex flex-col items-center relative">
            {/* Star decoration */}
            <div className="absolute -top-3 -right-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={colors.yellowAccent}
              >
                <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
              </svg>
            </div>
            <div
              className="px-6 py-3 rounded-lg border-2 border-gray-800 mb-2"
              style={{ backgroundColor: colors.savingsGreen }}
            >
              <span className="font-body text-xl md:text-2xl font-bold text-white">
                {math.comparison.savings}
              </span>
            </div>
            <p
              className="font-body text-xs text-center max-w-[150px]"
              style={{ color: colors.textSecondary }}
            >
              {math.comparison.savingsLabel.replace("heyjay", "")}{" "}
              <span className="font-script underline">{math.brandName}</span>
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="font-body text-xs text-center max-w-2xl mx-auto"
          style={{ color: colors.textSecondary }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {math.disclaimer}
        </motion.p>
      </div>

      {/* Bottom decorative blobs */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <BlobDecoration color={colors.purpleAccent} />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-20 pointer-events-none">
        <BlobDecoration color={colors.orangeAccent} />
      </div>
    </section>
  );
}
