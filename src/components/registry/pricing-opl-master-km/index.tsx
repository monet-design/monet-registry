"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F8F4EF",
    cardBg: "#FFFFFF",
    textPrimary: "#3D3D3D",
    textSecondary: "#6B6B6B",
    textMuted: "#8A8A8A",
    titleUnderline: "#3D3D3D",
    priceButtonBg: "#D4D4A9",
    priceButtonText: "#3D3D3D",
    learnMoreBorder: "#3D3D3D",
    learnMoreText: "#3D3D3D",
    illustrationColor: "#C9A77C",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#2A2A2A",
    textPrimary: "#F5F5F5",
    textSecondary: "#C4C4C4",
    textMuted: "#9A9A9A",
    titleUnderline: "#F5F5F5",
    priceButtonBg: "#4A4A3A",
    priceButtonText: "#F5F5F5",
    learnMoreBorder: "#F5F5F5",
    learnMoreText: "#F5F5F5",
    illustrationColor: "#C9A77C",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "OUR SERVICES",
    description:
      "Discover the art of relaxation and let us craft your perfect moment of calm. At Kalm Moments, we offer 3 main services from head, body and the face. Designed to nurture your body, mind, and soul.",
  },
  services: [
    {
      title: "HAIR\nSPA",
      description:
        "Indulge in a journey of rejuvenation. Our hair spa program revitalizes every strand, leaving your locks nourished, silky, and smooth.",
      items: [
        { name: "KALM MIND", duration: "60 minutes", price: "490 THB" },
        { name: "KALM MIND FULL SERVICE", duration: "90 minutes", price: "990 THB" },
        { name: "KALM MIND TREATMENT", duration: "100 minutes", price: "1,290 THB" },
      ],
      buttonText: "Learn More",
    },
    {
      title: "BODY\nMASSAGE",
      description:
        "Relax and recharge with our body massage. Let the calming touch and gentle oils melt away stress, ease tension, and bring peace to your body and mind.",
      items: [
        { name: "OFFICE SYNDROME MINI", duration: "60 minutes - 120 minutes", price: "590 THB - 1180 THB" },
        { name: "OFFICE SYNDROME FULL SERVICE", duration: "90 minutes", price: "1,190 THB" },
        { name: "FULL BODY", duration: "60 minutes - 120 minutes", price: "750 THB - 1,500 THB" },
      ],
      buttonText: "Learn More",
    },
    {
      title: "FACE\nMASSAGE",
      description:
        "A refreshing treatment that enhances your natural glow. Combining soothing techniques that restore and elevate your complexion.",
      items: [
        { name: "FACE EXERCISE GLOWING SKIN", duration: "60 minutes", price: "1,490 THB" },
        { name: "FACE EXERCISE LIFTING", duration: "75 minutes", price: "1,990 THB" },
        { name: "FACE EXERCISE COMBO", duration: "120 minutes", price: "1,990 THB" },
      ],
      buttonText: "Learn More",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Hair Spa Illustration SVG
function HairSpaIllustration({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Hair brush */}
      <ellipse cx="50" cy="50" rx="20" ry="30" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="50" y1="80" x2="50" y2="95" stroke={color} strokeWidth="1.5" />
      <line x1="40" y1="35" x2="40" y2="65" stroke={color} strokeWidth="1" />
      <line x1="50" y1="30" x2="50" y2="70" stroke={color} strokeWidth="1" />
      <line x1="60" y1="35" x2="60" y2="65" stroke={color} strokeWidth="1" />

      {/* Essential oil bottle */}
      <rect x="90" y="40" width="25" height="45" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="95" y="30" width="15" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="102" cy="26" rx="4" ry="2" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Leaf decoration */}
      <path d="M130 70 Q145 50 140 30" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M130 70 Q155 60 150 40" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="145" cy="25" rx="8" ry="12" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-20 145 25)" />
      <ellipse cx="155" cy="35" rx="6" ry="10" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-30 155 35)" />

      {/* Small dots */}
      <circle cx="170" cy="60" r="2" fill={color} opacity="0.5" />
      <circle cx="180" cy="45" r="1.5" fill={color} opacity="0.5" />
    </svg>
  );
}

// Body Massage Illustration SVG
function BodyMassageIllustration({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Hot stones */}
      <ellipse cx="40" cy="75" rx="18" ry="10" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="55" cy="60" rx="15" ry="8" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="65" cy="48" rx="12" ry="7" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Steam lines */}
      <path d="M40 65 Q35 55 40 45" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M50 50 Q45 40 50 30" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M60 38 Q55 28 60 18" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />

      {/* Oil bottle */}
      <rect x="100" y="35" width="20" height="40" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
      <rect x="104" y="25" width="12" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="110" cy="22" rx="3" ry="2" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Towel roll */}
      <ellipse cx="155" cy="70" rx="25" ry="12" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M130 70 Q130 55 155 55 Q180 55 180 70" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="155" cy="55" rx="25" ry="8" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Small decorative elements */}
      <circle cx="185" cy="40" r="2" fill={color} opacity="0.5" />
      <circle cx="90" cy="25" r="1.5" fill={color} opacity="0.5" />
    </svg>
  );
}

// Face Massage Illustration SVG
function FaceMassageIllustration({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Face roller */}
      <ellipse cx="50" cy="45" rx="15" ry="20" stroke={color} strokeWidth="1.5" fill="none" />
      <line x1="50" y1="65" x2="50" y2="90" stroke={color} strokeWidth="1.5" />
      <ellipse cx="50" cy="45" rx="10" ry="15" stroke={color} strokeWidth="1" fill="none" />

      {/* Cream jar */}
      <rect x="85" y="50" width="35" height="25" rx="4" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M85 50 Q102 40 120 50" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="102" cy="50" rx="17" ry="5" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Flower decoration */}
      <circle cx="155" cy="55" r="8" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="155" cy="40" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="168" cy="50" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="165" cy="65" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="145" cy="65" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="142" cy="50" r="6" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="155" cy="55" r="4" fill={color} opacity="0.3" />

      {/* Stem and leaf */}
      <line x1="155" y1="75" x2="155" y2="95" stroke={color} strokeWidth="1.5" />
      <path d="M155 85 Q170 80 175 90" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Small dots */}
      <circle cx="180" cy="35" r="2" fill={color} opacity="0.5" />
      <circle cx="75" cy="30" r="1.5" fill={color} opacity="0.5" />
    </svg>
  );
}

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
}

interface Service {
  title: string;
  description: string;
  items: ServiceItem[];
  buttonText: string;
}

interface HeaderContent {
  title: string;
  description: string;
}

interface PricingOplMasterKmProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  services?: Service[];
  onLearnMore?: (serviceIndex: number) => void;
}

export default function PricingOplMasterKm({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  services = DEFAULT_CONTENT.services,
  onLearnMore,
}: PricingOplMasterKmProps) {
  const colors = COLORS[mode];

  const illustrations = [
    HairSpaIllustration,
    BodyMassageIllustration,
    FaceMassageIllustration,
  ];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");

        .font-serif-display {
          font-family: "Cormorant Garamond", Georgia, serif;
        }

        .font-sans {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="h-px w-12 md:w-20"
              style={{ backgroundColor: colors.titleUnderline }}
            />
            <h1
              className="font-serif-display text-2xl md:text-3xl lg:text-4xl tracking-wider"
              style={{ color: colors.textPrimary }}
            >
              {header.title}
            </h1>
            <div
              className="h-px w-12 md:w-20"
              style={{ backgroundColor: colors.titleUnderline }}
            />
          </div>

          <p
            className="font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {header.description}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Illustration = illustrations[index % illustrations.length];
            return (
              <motion.div
                key={index}
                className="rounded-lg p-6"
                style={{ backgroundColor: colors.cardBg }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                {/* Illustration */}
                <div className="h-24 mb-4">
                  <Illustration color={colors.illustrationColor} />
                </div>

                {/* Service Title */}
                <h2
                  className="font-serif-display text-xl md:text-2xl font-semibold tracking-wider mb-4 whitespace-pre-line leading-tight"
                  style={{ color: colors.textPrimary }}
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p
                  className="font-sans text-xs leading-relaxed mb-6"
                  style={{ color: colors.textMuted }}
                >
                  {service.description}
                </p>

                {/* Service Items */}
                <div className="space-y-4 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start justify-between gap-2"
                    >
                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-sans text-xs font-medium tracking-wide"
                          style={{ color: colors.textPrimary }}
                        >
                          {item.name}
                        </h3>
                        <p
                          className="font-sans text-[10px]"
                          style={{ color: colors.textMuted }}
                        >
                          {item.duration}
                        </p>
                      </div>
                      <span
                        className="font-sans text-[10px] px-3 py-1 rounded-sm whitespace-nowrap flex-shrink-0"
                        style={{
                          backgroundColor: colors.priceButtonBg,
                          color: colors.priceButtonText,
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  onClick={() => onLearnMore?.(index)}
                  className="font-sans text-xs tracking-wider px-6 py-2 rounded-sm border transition-colors duration-200"
                  style={{
                    borderColor: colors.learnMoreBorder,
                    color: colors.learnMoreText,
                    backgroundColor: "transparent",
                  }}
                  whileHover={{
                    backgroundColor: colors.textPrimary,
                    color: colors.cardBg,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {service.buttonText}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
