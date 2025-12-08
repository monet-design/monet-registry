"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Check, ArrowLeft } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  christmasGreen: "rgb(17,41,16)",
  christmasGreenLight: "hsl(117,100%,96%)",
  christmasBg: "#FFFBF8",
  christmasText: "#1D431A",
  yellowAccent: "#FBBF24",
  yellowAccentLight: "#FDE047",
  highlightYellow: "#FDE047",
} as const;

const IMAGES = {
  christmasDecoration: {
    path: "/registry/codefa-st-pricing-10/christmas-decoration.png",
    alt: "Christmas decoration",
  },
  shipfastIcon: {
    path: "/registry/codefa-st-pricing-10/shipfast-icon.png",
    alt: "ShipFast",
  },
} as const;

// ============================================================================
// Types
// ============================================================================

interface CountdownTimerProps {
  targetDate: Date;
}

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  nameHighlight?: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  currency?: string;
  features: PricingFeature[];
  buttonText: string;
  footerText?: string;
  isBundle?: boolean;
  bundleContent?: {
    bundleName: string;
    bundlePrice: string;
    bundleDescription: string;
    linkText: string;
  };
}

interface PromoCardProps {
  discountText?: string;
  promoDescription?: string;
  targetDate: Date;
}

interface CodefaStPricing10Props {
  mode?: "light" | "dark";
  headline?: string;
  headlineHighlight?: string;
  discountText?: string;
  promoDescription?: string;
  targetDate?: Date;
  plans?: PricingPlan[];
}

// ============================================================================
// Components
// ============================================================================

function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hours" },
    { value: timeLeft.minutes, label: "minutes" },
    { value: timeLeft.seconds, label: "seconds" },
  ];

  return (
    <div className="flex gap-2 text-sm md:text-base">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div
            className="text-xl font-mono font-bold px-3.5 py-2 min-w-[2.5rem] text-center"
            style={{
              backgroundColor: COLORS.christmasGreen,
              color: COLORS.christmasGreenLight,
            }}
          >
            {unit.value}
          </div>
          <div
            className="text-xs mt-1 opacity-90"
            style={{ color: COLORS.christmasText }}
          >
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function PromoCard({
  discountText = "-43% OFF CHRISTMAS",
  promoDescription = "Give the gift of coding to your family, friend, or yourself!",
  targetDate,
}: PromoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xs mx-auto"
    >
      <div
        className="relative overflow-hidden border shadow-xl"
        style={{
          backgroundColor: COLORS.christmasBg,
          borderColor: COLORS.christmasGreen,
          boxShadow: `0 10px 25px -5px ${COLORS.christmasGreen}40`,
        }}
      >
        <Image
          src={IMAGES.christmasDecoration.path}
          alt={IMAGES.christmasDecoration.alt}
          width={320}
          height={88}
          className="w-full scale-110"
        />
        <div className="relative p-6 flex flex-col items-center justify-between gap-6">
          <div className="relative text-center -mt-3 space-y-2">
            <div className="font-bold flex justify-center items-center gap-4 mx-auto">
              <span
                className="text-2xl md:text-3xl tracking-normal font-serif"
                style={{ color: COLORS.christmasText }}
              >
                {discountText}
              </span>
            </div>
            <div
              className="text-lg leading-tight"
              style={{ color: COLORS.christmasText }}
            >
              {promoDescription}
            </div>
          </div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </motion.div>
  );
}

function PricingCard({
  plan,
  isBundle = false,
}: {
  plan: PricingPlan;
  isBundle?: boolean;
}) {
  const cardClasses = isBundle
    ? "bg-[#1a1a1a] text-white"
    : "bg-white text-gray-900 border border-gray-200";

  const secondaryTextClass = isBundle ? "text-gray-400" : "text-gray-500";
  const strikethroughClass = isBundle ? "bg-white" : "bg-gray-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: isBundle ? 0.2 : 0 }}
      className={`relative w-full max-w-lg lg:max-w-none ${
        isBundle ? "lg:-ml-1" : ""
      }`}
    >
      {isBundle && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <span className="px-4 py-1.5 text-sm font-semibold tracking-wide bg-[#1a1a1a] text-white border border-white/20 shadow-lg">
            BUNDLE
          </span>
        </div>
      )}
      <div
        className={`relative flex flex-col h-full gap-5 lg:gap-8 z-10 p-8 ${
          isBundle ? "lg:px-12 lg:py-20" : ""
        } ${cardClasses} ${!isBundle ? "lg:border-r-0" : ""}`}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold">
              {plan.name}
              {plan.nameHighlight && (
                <span style={{ color: COLORS.yellowAccent }}>
                  {" "}
                  {plan.nameHighlight}
                </span>
              )}
            </p>
            <p className={`mt-2 ${secondaryTextClass}`}>{plan.description}</p>
          </div>
        </div>

        <div className="flex gap-2 items-baseline">
          <div className="flex flex-col justify-end mb-[4px] text-lg">
            <p className="relative">
              <span
                className={`absolute ${strikethroughClass} h-[1.5px] inset-x-0 top-[53%]`}
              ></span>
              <span className={secondaryTextClass}>${plan.originalPrice}</span>
            </p>
          </div>
          <p className="text-5xl tracking-tight font-extrabold">
            ${plan.currentPrice}
          </p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p
              className={`text-xs ${secondaryTextClass} opacity-80 uppercase font-semibold`}
            >
              {plan.currency || "USD"}
            </p>
          </div>
        </div>

        {!isBundle ? (
          <ul className="space-y-2 lg:space-y-4 leading-relaxed text-base flex-1">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-[18px] h-[18px] opacity-80 shrink-0" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <ArrowLeft className="size-4 rotate-90 lg:rotate-0" />
              <span className="italic">Everything in the course, and...</span>
            </div>
            {plan.bundleContent && (
              <a
                href="#"
                className="group block p-4 space-y-2 border hover:bg-[#FDE04710] duration-200"
                style={{
                  borderColor: COLORS.yellowAccent,
                  boxShadow: `0 0 10px ${COLORS.yellowAccent}30`,
                }}
              >
                <div
                  className="flex gap-2.5 items-center"
                  style={{ color: COLORS.yellowAccent }}
                >
                  <Image
                    src={IMAGES.shipfastIcon.path}
                    alt={IMAGES.shipfastIcon.alt}
                    width={28}
                    height={28}
                    className="size-6 md:size-7 group-hover:scale-110 duration-200 group-hover:rotate-6"
                  />
                  <span className="md:text-lg font-semibold">
                    {plan.bundleContent.bundleName} (
                    {plan.bundleContent.bundlePrice})
                  </span>
                </div>
                <div className="leading-snug text-yellow-50">
                  {plan.bundleContent.bundleDescription}{" "}
                  <span className="underline group-hover:text-yellow-400 duration-100">
                    {plan.bundleContent.linkText}
                  </span>
                </div>
              </a>
            )}
          </div>
        )}

        <div className="space-y-2">
          <button className="w-full py-3 px-6 font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200">
            {plan.buttonText}
          </button>
          {plan.footerText && (
            <p className={`text-sm ${secondaryTextClass} text-center`}>
              {plan.footerText}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

const defaultPlans: PricingPlan[] = [
  {
    name: "CodeFast Course",
    description: "Learn to build your ideas, fast",
    originalPrice: 299,
    currentPrice: 169,
    features: [
      { text: "12 hours of video content (215 short lessons)" },
      { text: "Support from our instructor" },
      { text: "Private Discord community" },
      { text: "Lifetime updates" },
    ],
    buttonText: "Learn to code, now",
    footerText: "Access forever (no subscription)",
  },
  {
    name: "CodeFast Course",
    nameHighlight: "+ ShipFast",
    description: "Ship your ideas even faster",
    originalPrice: 648,
    currentPrice: 299,
    buttonText: "Get CodeFast + ShipFast",
    footerText: "Access forever (no subscription)",
    isBundle: true,
    features: [],
    bundleContent: {
      bundleName: "ShipFast | All-in Tier",
      bundlePrice: "$349",
      bundleDescription:
        "The codebase used by 5,000+ developers to ship startups in days, not weeks",
      linkText: "5,000+ developers",
    },
  },
];

export default function CodefaStPricing10({
  headline = "Code your idea fast, build your",
  headlineHighlight = "freedom",
  discountText = "-43% OFF CHRISTMAS",
  promoDescription = "Give the gift of coding to your family, friend, or yourself!",
  targetDate = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
  plans = defaultPlans,
}: CodefaStPricing10Props) {
  return (
    <section className="overflow-hidden bg-white" id="pricing">
      <div className="pb-12 pt-32 md:pt-48 px-8 max-w-5xl mx-auto">
        {/* Christmas Promo Card */}
        <div className="mb-12">
          <PromoCard
            discountText={discountText}
            promoDescription={promoDescription}
            targetDate={targetDate}
          />
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col text-center w-full mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
            {headline}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 underline decoration-2 underline-offset-4">
                {headlineHighlight}
              </span>
              <span
                className="absolute bottom-0 md:-bottom-0.5 -inset-x-2 h-4 md:h-6"
                style={{ backgroundColor: COLORS.highlightYellow }}
              ></span>
            </span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch max-lg:gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              isBundle={plan.isBundle || false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
