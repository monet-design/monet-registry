"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1d232a",
    cardBackground: "#191e24",
    primary: "#fbbf24",
    primaryContent: "#000000",
    accent: "#4EA800",
    accentContent: "#000000",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255,255,255,0.6)",
    textMuted: "rgba(255,255,255,0.3)",
    border: "rgba(255,255,255,0.1)",
  },
  dark: {
    background: "#1d232a",
    cardBackground: "#191e24",
    primary: "#fbbf24",
    primaryContent: "#000000",
    accent: "#4EA800",
    accentContent: "#000000",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255,255,255,0.6)",
    textMuted: "rgba(255,255,255,0.3)",
    border: "rgba(255,255,255,0.1)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, X, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlan {
  name: string;
  nameHighlight?: string;
  originalPrice: number;
  price: number;
  currency?: string;
  features: PlanFeature[];
  buttonText: string;
  isBundled?: boolean;
  bundleContent?: {
    title: string;
    value: string;
    description: string;
    bulletPoints: string[];
    studentsCount: string;
  };
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

interface ShipfaStPricing6Props {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  discountText?: string;
  discountHighlight?: string;
  discountDescription?: string;
  plans?: PricingPlan[];
  testimonial?: Testimonial;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter",
    originalPrice: 299,
    price: 199,
    currency: "USD",
    features: [
      { text: "NextJS boilerplate", included: true },
      { text: "SEO & Blog", included: true },
      { text: "Mailgun emails", included: true },
      { text: "Stripe / Lemon Squeezy", included: true },
      { text: "MongoDB / Supabase", included: true },
      { text: "Google Oauth & Magic Links", included: true },
      { text: "Components & animations", included: true },
      { text: "ChatGPT prompts for terms & privacy", included: true },
      { text: "Discord community & Leaderboard", included: false },
      { text: "$1,210 worth of discounts", included: false },
      { text: "Lifetime updates", included: false },
    ],
    buttonText: "Get ShipFast",
  },
  {
    name: "All-in",
    originalPrice: 349,
    price: 249,
    currency: "USD",
    features: [
      { text: "NextJS boilerplate", included: true },
      { text: "SEO & Blog", included: true },
      { text: "Mailgun emails", included: true },
      { text: "Stripe / Lemon Squeezy", included: true },
      { text: "MongoDB / Supabase", included: true },
      { text: "Google Oauth & Magic Links", included: true },
      { text: "Components & animations", included: true },
      { text: "ChatGPT prompts for terms & privacy", included: true },
      { text: "Discord community & Leaderboard", included: true, highlight: true },
      { text: "$1,210 worth of discounts", included: true, highlight: true },
      { text: "Lifetime updates", included: true },
    ],
    buttonText: "Get ShipFast",
  },
  {
    name: "ShipFast",
    nameHighlight: "+ CodeFast",
    originalPrice: 648,
    price: 299,
    currency: "USD",
    features: [],
    buttonText: "Get ShipFast + CodeFast",
    isBundled: true,
    bundleContent: {
      title: "CodeFast",
      value: "$299 value",
      description: "Learn to code in weeks, not months",
      bulletPoints: [
        "12 hours of content",
        "Build a SaaS from 0",
        "Entrepreneur mindset",
      ],
      studentsCount: "1,000+ students love CodeFast",
    },
  },
];

const defaultTestimonial: Testimonial = {
  quote: "I was able to launch my project in just one day! I made 170$ already.",
  author: "Mateus De Nardo",
  role: "Built a SaaS",
};

// Lightning bolt icon for button
const LightningIcon = () => (
  <svg
    className="w-5 h-5 fill-current"
    viewBox="0 0 375 509"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
  </svg>
);

// Gift icon for discount badge
const GiftIcon = () => (
  <svg
    className="w-5 h-5 animate-pulse"
    viewBox="0 0 161 154"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.9653 26.3929C13.3454 26.4007 12.7254 26.3891 12.1055 26.3781C10.9378 26.3371 9.76879 26.3561 8.60306 26.4349C4.24676 26.7979 2.47252 28.6135 2.27301 32.9093C1.97374 39.3929 1.71523 45.9857 1.46519 52.3619L1.1867 59.4195C1.16791 59.8841 1.17111 60.3506 1.19508 60.8093C1.5086 66.7514 3.74024 69.1992 9.72176 70.1639C10.2316 70.2455 10.7491 70.3031 11.2692 70.3581C13.0383 70.5522 14.7127 70.7392 16.2382 71.9142C16.2777 72.7101 16.3245 73.5092 16.3679 74.3083C16.4787 76.2165 16.594 78.1907 16.6115 80.1286C16.6931 89.1674 16.7656 98.2062 16.8291 107.245C16.9042 117.237 16.9858 127.229 17.0739 137.221C17.0748 140.34 17.2411 143.457 17.5721 146.559C18.0754 150.852 19.3133 152.078 23.5912 152.525L25.146 152.69C29.2657 153.198 33.4084 153.499 37.5585 153.589C41.9111 153.609 46.2512 153.619 50.5788 153.62C61.9284 153.62 73.155 153.55 84.092 153.41C89.9673 153.335 95.9359 153.127 101.708 152.925C105.951 152.777 110.339 152.623 114.654 152.525C118.836 152.428 123.092 152.404 127.209 152.38C130.275 152.362 133.446 152.344 136.565 152.296C140.119 152.242 142.072 150.598 142.703 147.119C142.868 146.065 142.953 145 142.954 143.934C142.969 143.427 142.982 142.921 143.015 142.416C143.274 138.382 143.541 134.348 143.817 130.316C144.41 121.479 145.023 112.341 145.517 103.346C145.675 100.462 145.978 97.5183 146.271 94.6752C147.139 86.244 148.036 77.5339 145.415 68.7281C145.632 68.6809 145.841 68.6336 146.042 68.5884C146.744 68.4156 147.456 68.2855 148.174 68.2001C149.057 68.1166 149.968 68.0707 150.848 68.0286C152.152 67.9639 153.501 67.8992 154.825 67.7051C158.372 67.1875 160.401 64.9635 160.693 61.2785C160.74 60.4115 160.722 59.5422 160.639 58.6779L160.629 58.5291C160.051 50.3348 159.463 42.1416 158.874 33.8521L158.372 26.8148C158.361 26.6623 158.298 26.5183 158.193 26.4068C158.089 26.2954 157.949 26.2233 157.798 26.2028C157.404 26.1497 157.025 26.0913 156.657 26.0337C155.871 25.912 155.129 25.7975 154.369 25.7509C151.924 25.6016 149.478 25.4588 147.032 25.3225C142.701 25.0747 138.222 24.8192 133.824 24.5118C133.078 24.4103 132.351 24.2007 131.666 23.8894C131.51 23.8286 131.352 23.7672 131.194 23.7071C131.392 23.2748 131.587 22.8627 131.777 22.4661C132.341 21.3419 132.83 20.1817 133.24 18.9932C133.855 17.1872 134.099 15.2759 133.958 13.3737C133.816 11.4715 133.292 9.61755 132.418 7.92206C131.488 6.22992 130.227 4.742 128.709 3.54746C127.192 2.35292 125.448 1.47617 123.584 0.969338C120.508 0.0439655 117.257 -0.145334 114.094 0.416744C105.064 2.00139 96.9276 6.12259 89.2191 13.0176C88.2474 13.8873 87.2758 14.7957 86.2549 15.7572C85.931 16.0633 85.5942 16.3783 85.2463 16.7032C85.0053 16.3149 84.7767 15.9475 84.5564 15.5936C83.8562 14.4638 83.2512 13.4886 82.6079 12.5232C80.6044 9.44497 77.8584 6.91879 74.6228 5.17648C65.7671 0.465246 56.2985 0.0518385 46.4808 3.94713C43.6793 5.10813 41.2785 7.0614 39.5731 9.56688C35.9624 14.6256 36.1081 18.8347 40.0615 23.6404C40.6022 24.2666 41.1769 24.8624 41.7832 25.4255C41.9724 25.6099 42.1791 25.8137 42.4078 26.035L37.0124 26.1035C28.8563 26.2057 21.4108 26.3036 13.9653 26.3929Z" />
  </svg>
);

// CodeFast logo icon
const CodeFastIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 1080 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_codefast)">
      <rect width="1080" height="1080" rx="300" fill="#4EA800" />
      <path
        d="M343.488 361.883C343.488 361.883 165.362 493.07 165.361 540.009C165.361 586.948 343.488 718.134 343.488 718.134"
        stroke="black"
        strokeWidth="92.4556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M736.135 719.034C736.135 719.034 914.261 587.846 914.262 540.907C914.262 493.968 736.135 362.782 736.135 362.782"
        stroke="black"
        strokeWidth="92.4556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M451.26 856.229L628.477 223.301"
        stroke="black"
        strokeWidth="92.4556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_codefast">
        <rect width="1080" height="1080" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Quote icon
const QuoteIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8"
    viewBox="0 0 35 30"
    fill={color}
  >
    <path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z" />
  </svg>
);

export default function ShipfaStPricing6({
  mode = "dark",
  badge = "Pricing",
  title = "Save hours of repetitive code,\nship fast, get profitable!",
  discountText = "$100 off",
  discountHighlight = "$100",
  discountDescription = "for the first 7900 customers (10 left)",
  plans = defaultPlans,
  testimonial = defaultTestimonial,
}: ShipfaStPricing6Props) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="overflow-hidden py-24 px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col text-center w-full mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-medium mb-8"
            style={{ color: colors.primary }}
          >
            {badge}
          </p>
          <h2
            className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto whitespace-pre-line"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="text-sm md:text-base flex justify-center items-center gap-2"
            style={{ color: colors.textSecondary }}
          >
            <span style={{ color: colors.accent }}>
              <GiftIcon />
            </span>
            <span>
              <span style={{ color: colors.accent }}>{discountText}</span>{" "}
              {discountDescription}
            </span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative w-full"
              variants={itemVariants}
            >
              {/* Bundle badge */}
              {plan.isBundled && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full"
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.accentContent,
                    }}
                  >
                    BUNDLE
                  </span>
                </div>
              )}

              {/* Accent border for bundle */}
              {plan.isBundled && (
                <div
                  className="absolute -inset-[1px] rounded-lg z-10"
                  style={{ backgroundColor: colors.accent }}
                />
              )}

              {/* Card */}
              <div
                className="h-full relative flex flex-col gap-5 lg:gap-8 z-10 p-8 rounded-lg"
                style={{ backgroundColor: colors.cardBackground }}
              >
                {/* Plan name */}
                <div className="flex justify-between items-center gap-4">
                  <p
                    className="text-lg lg:text-xl font-bold"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.name}
                    {plan.nameHighlight && (
                      <span style={{ color: colors.accent }}>
                        {" "}
                        {plan.nameHighlight}
                      </span>
                    )}
                  </p>
                </div>

                {/* Price */}
                <div className="flex gap-2 items-baseline">
                  <div className="flex flex-col justify-end mb-[4px] text-lg">
                    <p className="relative" style={{ color: colors.textSecondary }}>
                      <span
                        className="absolute h-[1.5px] inset-x-0 top-[48%]"
                        style={{ backgroundColor: colors.textPrimary }}
                      />
                      <span>${plan.originalPrice}</span>
                    </p>
                  </div>
                  <p
                    className="text-5xl tracking-tight font-extrabold"
                    style={{ color: colors.textPrimary }}
                  >
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p
                      className="text-xs uppercase font-semibold"
                      style={{ color: colors.textMuted }}
                    >
                      {plan.currency}
                    </p>
                  </div>
                </div>

                {/* Features or Bundle content */}
                {plan.isBundled && plan.bundleContent ? (
                  <div className="space-y-6 flex-1">
                    {/* Everything in All-in indicator */}
                    <div
                      className="flex items-center gap-2"
                      style={{ color: colors.textPrimary }}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span className="italic text-lg">
                        Everything in All-in, and...
                      </span>
                    </div>

                    {/* CodeFast card */}
                    <div
                      className="rounded-lg p-4 sm:p-6 space-y-2 border"
                      style={{
                        backgroundColor: "#1e2530",
                        borderColor: colors.border,
                      }}
                    >
                      <div className="flex gap-2.5 items-center">
                        <CodeFastIcon />
                        <span
                          className="lg:text-lg font-semibold"
                          style={{ color: colors.accent }}
                        >
                          {plan.bundleContent.title} ({plan.bundleContent.value})
                        </span>
                      </div>
                      <div
                        className="leading-relaxed pb-1"
                        style={{ color: colors.textPrimary }}
                      >
                        {plan.bundleContent.description}
                      </div>
                      <ul
                        className="list-disc list-inside leading-normal pb-2.5"
                        style={{ color: colors.textPrimary }}
                      >
                        {plan.bundleContent.bulletPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      {/* Avatar group */}
                      <div>
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <div
                              key={i}
                              className="w-10 h-10 rounded-full border-2 overflow-hidden"
                              style={{
                                borderColor: colors.cardBackground,
                                backgroundColor: "#3a4553",
                              }}
                            >
                              <Image
                                src={`https://i.pravatar.cc/50?img=${i + 10}`}
                                alt={`Student ${i}`}
                                width={50}
                                height={50}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <div
                          className="text-sm mt-2"
                          style={{ color: colors.textSecondary }}
                        >
                          {plan.bundleContent.studentsCount}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {feature.included ? (
                          <Check
                            className="w-[18px] h-[18px] shrink-0"
                            style={{
                              color: colors.textPrimary,
                              opacity: 0.8,
                            }}
                          />
                        ) : (
                          <X
                            className="w-5 h-5 shrink-0"
                            style={{ color: colors.textMuted }}
                          />
                        )}
                        <span
                          style={{
                            color: feature.included
                              ? feature.highlight
                                ? colors.textPrimary
                                : colors.textPrimary
                              : colors.textMuted,
                          }}
                          className={
                            feature.highlight
                              ? "underline decoration-wavy"
                              : ""
                          }
                        >
                          {feature.text}
                        </span>
                        {feature.text.includes("Lifetime updates") &&
                          feature.included && (
                            <span
                              className="px-2 py-0.5 text-xs rounded-full ml-1"
                              style={{
                                backgroundColor: colors.accent,
                                color: colors.accentContent,
                              }}
                            >
                              Updated 1 day ago
                            </span>
                          )}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <div className="space-y-2">
                  <button
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] group"
                    style={{
                      backgroundColor: plan.isBundled
                        ? colors.accent
                        : colors.primary,
                      color: plan.isBundled
                        ? colors.accentContent
                        : colors.primaryContent,
                    }}
                  >
                    {!plan.isBundled && (
                      <span className="group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                        <LightningIcon />
                      </span>
                    )}
                    {plan.buttonText}
                  </button>
                  <p
                    className="flex items-center justify-center gap-2 text-sm text-center font-medium"
                    style={{ color: colors.textSecondary }}
                  >
                    Pay once. Build unlimited projects!
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="space-y-4 mx-auto max-w-md mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <QuoteIcon color={colors.accent} />
          <p
            className="md:text-lg leading-relaxed"
            style={{ color: colors.textPrimary }}
          >
            {testimonial.quote}
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-full overflow-hidden"
              style={{ backgroundColor: "#3a4553" }}
            >
              <Image
                src={testimonial.avatarUrl || "https://i.pravatar.cc/48?img=33"}
                alt={testimonial.author}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <p style={{ color: colors.textPrimary }}>{testimonial.author}</p>
            <span
              className="px-2 py-0.5 text-xs rounded-full border"
              style={{
                borderColor: colors.accent,
                color: colors.accent,
              }}
            >
              {testimonial.role}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
