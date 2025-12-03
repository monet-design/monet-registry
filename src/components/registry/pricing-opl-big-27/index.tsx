"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    accent: "#00A69C",
    accentHover: "#008B82",
    background: "#FAFBFC",
    cardBorder: "#E8EAED",
  },
  dark: {
    accent: "#00C4B8",
    accentHover: "#00A69C",
    background: "#0F1419",
    cardBorder: "#2F3336",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  cardReader: {
    path: "/registry/pricing-opl-big-27/card-reader.png",
    alt: "Card payment terminal",
    prompt: `A modern portable card payment terminal/card reader device, professional fintech style`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

// Default provider data
const DEFAULT_PROVIDERS: PaymentProvider[] = [
  {
    id: "paypal",
    name: "PayPal",
    logo: (
      <svg viewBox="0 0 124 33" className="h-6 w-auto">
        <path
          fill="#253B80"
          d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z"
        />
        <path
          fill="#179BD7"
          d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z"
        />
      </svg>
    ),
    upfrontCost: 38,
    monthlyCost: 110,
    features: ["Instant deposits", "Miura M010 Reader", "No contract"],
  },
  {
    id: "sumup",
    name: "SumUp",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#00A69C">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
        </svg>
        <span className="text-lg font-semibold text-gray-800">
          sum<span className="font-bold">up</span>
          <sup className="text-[8px]">TM</sup>
        </span>
      </div>
    ),
    upfrontCost: 29,
    monthlyCost: 78,
    features: ["2-3 day deposits", "SumUp Reader", "No contract"],
  },
  {
    id: "square",
    name: "Square",
    logo: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#333">
          <rect x="3" y="3" width="18" height="18" rx="3" />
        </svg>
        <span className="text-lg font-semibold text-gray-800">Square</span>
      </div>
    ),
    upfrontCost: 39,
    monthlyCost: 70,
    features: ["1 day deposits", "Square Reader", "No contract"],
  },
  {
    id: "izettle",
    name: "iZettle",
    logo: (
      <span className="text-xl font-light italic text-[#00A69C]">iZettle</span>
    ),
    upfrontCost: 29,
    monthlyCost: 85,
    features: ["2-3 day deposits", "iZettle Reader", "No contract"],
  },
  {
    id: "barclaycard",
    name: "Barclaycard",
    logo: (
      <span className="text-lg font-medium text-[#00A69C]">
        barclay<span className="font-bold">card</span>
      </span>
    ),
    upfrontCost: 60,
    monthlyCost: 104,
    features: ["2-3 day deposits", "Miura M010 Reader", "No contract"],
  },
];

interface PaymentProvider {
  id: string;
  name: string;
  logo: React.ReactNode;
  upfrontCost: number;
  monthlyCost: number;
  features: string[];
}

interface CalculatorInputs {
  country: string;
  averageSaleValue: number;
  monthlyCardVolume: number;
  cardReaders: number;
}

interface PricingOplBig27Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  providers?: PaymentProvider[];
  defaultInputs?: CalculatorInputs;
  currencySymbol?: string;
  onLearnMore?: (providerId: string) => void;
  showCardReaderImage?: boolean;
}

export default function PricingOplBig27({
  mode = "light",
  title = "Select your country, enter your average sale value and monthly card takings.",
  subtitle = "Get an instant pound value, no more messing with spreadsheets and % rate guesswork!",
  providers = DEFAULT_PROVIDERS,
  defaultInputs = {
    country: "UK",
    averageSaleValue: 25,
    monthlyCardVolume: 4000,
    cardReaders: 1,
  },
  currencySymbol = "£",
  onLearnMore,
  showCardReaderImage = true,
}: PricingOplBig27Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-12 px-4 md:px-8 lg:px-16 ${
        isDark ? "bg-gray-950" : "bg-[#FAFBFC]"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-start md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <p
              className={`text-base md:text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {title} {subtitle}
            </p>
          </motion.div>

          {showCardReaderImage && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 md:mt-0 hidden md:block"
            >
              <div className="relative h-24 w-24">
                <Image
                  src={IMAGES.cardReader.path}
                  alt={IMAGES.cardReader.alt}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Calculator Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mb-10 rounded-lg border ${
            isDark
              ? "border-gray-800 bg-gray-900"
              : "border-gray-200 bg-white"
          } p-4 md:p-6`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            {/* Country */}
            <div className="md:px-4 first:pl-0 last:pr-0">
              <label
                className={`block text-[10px] md:text-xs font-medium uppercase tracking-wider mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Country
              </label>
              <div
                className={`text-base md:text-lg font-medium ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {defaultInputs.country}
              </div>
            </div>

            {/* Average Sale Value */}
            <div className="md:px-4 first:pl-0 last:pr-0">
              <label
                className={`block text-[10px] md:text-xs font-medium uppercase tracking-wider mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Average Sale Value
              </label>
              <div
                className="text-base md:text-lg font-medium"
                style={{ color: colors.accent }}
              >
                {currencySymbol} {defaultInputs.averageSaleValue}
              </div>
            </div>

            {/* Monthly Card Volume */}
            <div className="md:px-4 first:pl-0 last:pr-0">
              <label
                className={`block text-[10px] md:text-xs font-medium uppercase tracking-wider mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Monthly Card Volume
              </label>
              <div
                className="text-base md:text-lg font-medium"
                style={{ color: colors.accent }}
              >
                {currencySymbol} {defaultInputs.monthlyCardVolume.toLocaleString()}
              </div>
            </div>

            {/* Card Readers */}
            <div className="md:px-4 first:pl-0 last:pr-0">
              <label
                className={`block text-[10px] md:text-xs font-medium uppercase tracking-wider mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Card Readers
              </label>
              <div
                className="text-base md:text-lg font-medium"
                style={{ color: colors.accent }}
              >
                {defaultInputs.cardReaders}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Provider Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`rounded-lg border ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              } p-5 flex flex-col`}
            >
              {/* Provider Logo */}
              <div className="h-10 flex items-center mb-6">{provider.logo}</div>

              {/* Upfront Cost */}
              <div className="mb-4">
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  } mb-1`}
                >
                  Upfront Cost
                </p>
                <p
                  className="text-2xl font-semibold"
                  style={{ color: colors.accent }}
                >
                  {currencySymbol} {provider.upfrontCost}
                </p>
              </div>

              {/* Monthly Cost */}
              <div className="mb-5">
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  } mb-1`}
                >
                  Monthly Cost**
                </p>
                <p
                  className={`text-2xl font-semibold ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {currencySymbol} {provider.monthlyCost}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-5 flex-1 space-y-2">
                {provider.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button
                onClick={() => onLearnMore?.(provider.id)}
                className="text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-80"
                style={{ color: colors.accent }}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p
            className={`text-[10px] ${
              isDark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            *All costs are estimated, but probably correct. (data updated April
            &apos;17)
          </p>
          <p
            className={`text-[10px] ${
              isDark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            ** Amex &amp; international cards may be priced separately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
