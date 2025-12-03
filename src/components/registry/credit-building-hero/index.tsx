"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CreditCard, CircleDollarSign, BadgeCheck } from "lucide-react";

import "./font.css";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface Feature {
  icon: "card" | "dollar" | "check";
  title: string;
  description: string;
}

interface CreditBuildingHeroProps {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: "card",
    title: "Credit building made easy",
    description:
      "Just use your card, even at the ATM, to build credit with everyday purchases, earn points, and more.",
  },
  {
    icon: "dollar",
    title: "Build credit not debt",
    description:
      "Build credit using only the money in your account and enable AutoPay so you never miss a payment.",
  },
  {
    icon: "check",
    title: "Credit for everyone",
    description:
      "No matter what your credit history, there are no credit checks required to apply and build credit.",
  },
];

const iconMap = {
  card: CreditCard,
  dollar: CircleDollarSign,
  check: BadgeCheck,
};

export default function CreditBuildingHero({
  headline = "Build credit\nwhile you bank",
  subheadline = "We're making credit simpler, safer, and seamless.",
  heroImageSrc = "/registry/credit-building-hero/hero-image.jpg",
  heroImageAlt = "Woman holding smartphone and smiling",
  features = defaultFeatures,
}: CreditBuildingHeroProps) {
  return (
    <section className="relative w-full bg-white">
      {/* Header Section */}
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 text-center sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-instrument-serif whitespace-pre-line text-4xl leading-[1.1] font-bold italic text-black sm:text-5xl lg:text-6xl"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-base text-gray-600 sm:text-lg"
        >
          {subheadline}
        </motion.p>
      </div>

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col border-l-2 border-black pl-5"
              >
                <div className="mb-4">
                  <IconComponent className="h-6 w-6 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
