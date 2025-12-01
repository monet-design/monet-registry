"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface StatItem {
  value: string;
  unit: string;
  label: string;
  description: string;
}

interface KotaGlobalHeroProps {
  mode?: "customization" | "default";
  /** Country label displayed above the title */
  countryLabel?: string;
  /** Main headline - supports line breaks with \n */
  headline?: string;
  /** Subtitle/description text */
  description?: string;
  /** Placeholder text for email input */
  inputPlaceholder?: string;
  /** CTA button text */
  ctaText?: string;
  /** Callback when form is submitted */
  onSubmit?: (email: string) => void;
  /** Statistics to display */
  stats?: StatItem[];
  /** Primary circular image URL */
  circleImageUrl?: string;
  /** Secondary rectangular image URL */
  rectangleImageUrl?: string;
  /** Alt text for circle image */
  circleImageAlt?: string;
  /** Alt text for rectangle image */
  rectangleImageAlt?: string;
}

const defaultStats: StatItem[] = [
  {
    value: "8.9",
    unit: "million",
    label: "Population",
    description:
      "Life expectancy in Austria is relatively high. The average life expectancy at birth is around 82.5 years for males and 86.7 years for females.",
  },
  {
    value: "6.2",
    unit: "per cent",
    label: "Unemployment rate",
    description:
      "Austria has a highly skilled and multilingual workforce, particularly in areas such as engineering, technology, and tourism.",
  },
  {
    value: "$480",
    unit: "billion",
    label: "Gross Domestic Product",
    description:
      "The country is the 12th richest country in the EU in terms of GDP per capita, and it consistently ranks highly in global competitiveness and quality of life indexes.",
  },
];

const CUSTOMIZATION = {};

export default function KotaGlobalHero({
  mode = "default",
  countryLabel = "AUSTRIA",
  headline = "Benefits for your team\nin Austria",
  description = "Kota makes benefits administration easy. Offer\nHealth Insurance out of the box, and easily for your\nteam in Austria",
  inputPlaceholder = "What's your work email?",
  ctaText = "Get Started",
  onSubmit,
  stats = defaultStats,
  circleImageUrl = "/registry/kota-global-hero/fountain.jpg",
  rectangleImageUrl = "/registry/kota-global-hero/park.jpg",
  circleImageAlt = "Fountain in city square",
  rectangleImageAlt = "Park landscape",
}: KotaGlobalHeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F6F2]">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Country Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-neutral-600"
            >
              {countryLabel}
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 font-serif text-4xl font-normal leading-tight text-neutral-900 md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 max-w-md text-base leading-relaxed text-neutral-600"
            >
              {description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < description.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.p>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="flex max-w-md items-center gap-0"
            >
              <input
                type="email"
                name="email"
                placeholder={inputPlaceholder}
                className="h-12 flex-1 rounded-l-full border-0 bg-white px-5 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D1C0EC]/50"
              />
              <button
                type="submit"
                className="h-12 rounded-r-full bg-[#D1C0EC] px-6 text-sm font-medium text-neutral-700 transition-colors hover:bg-[#C4B0E0]"
              >
                {ctaText}
              </button>
            </motion.form>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[480px]"
          >
            {/* Circular Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute left-[10%] top-0 z-20 h-48 w-48 overflow-hidden rounded-full shadow-lg md:h-56 md:w-56 lg:h-64 lg:w-64"
            >
              <Image
                src={circleImageUrl}
                alt={circleImageAlt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Rectangular Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute right-0 top-[15%] z-10 h-56 w-72 overflow-hidden rounded-2xl shadow-lg md:h-64 md:w-80 lg:h-72 lg:w-96"
            >
              <Image
                src={rectangleImageUrl}
                alt={rectangleImageAlt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Organic Coral Blob Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-[5%] left-[20%] z-30"
            >
              <svg
                width="220"
                height="200"
                viewBox="0 0 220 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-40 w-44 md:h-48 md:w-52"
              >
                <path
                  d="M110 20C140 20 170 40 185 70C200 100 195 140 170 165C145 190 100 195 65 175C30 155 15 115 25 80C35 45 75 20 110 20Z"
                  fill="#FDB597"
                  fillOpacity="0.85"
                />
                <path
                  d="M80 60C100 45 135 50 155 70C175 90 180 125 165 150C150 175 115 185 85 170C55 155 45 115 55 85C60 70 70 65 80 60Z"
                  fill="#FDB597"
                  fillOpacity="0.6"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="border-t border-neutral-200/50 bg-[#F7F6F2] px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-left"
              >
                {/* Stat Value */}
                <div className="mb-2 flex items-baseline gap-2">
                  <span
                    className="text-5xl font-light tracking-tight text-neutral-900 md:text-6xl"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-lg font-medium text-neutral-700">
                    {stat.unit}
                  </span>
                </div>

                {/* Stat Label */}
                <h3 className="mb-3 text-base font-semibold text-neutral-900">
                  {stat.label}
                </h3>

                {/* Stat Description */}
                <p className="text-sm leading-relaxed text-neutral-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Google Font Import for Instrument Serif */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
      />
    </section>
  );
}
