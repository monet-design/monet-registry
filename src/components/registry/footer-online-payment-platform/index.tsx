"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // CTA Section
    ctaBackground: "#4F46E5", // 진한 보라/파란색 배경
    ctaText: "#FFFFFF",
    ctaAccent: "#67E8F9", // 밝은 청록색 "Get in touch" 링크
    buttonBackground: "#FEF9C3", // 연한 노란색/크림색 버튼
    buttonText: "#1F2937",
    cardBackground: "#FFFFFF",
    cardText: "#1F2937",
    // Links Section
    linksBackground: "#EFF1F6", // 연한 회색/파란 배경
    headingText: "#4F46E5", // 보라색 섹션 제목
    subHeadingText: "#4F46E5", // 보라색 서브 제목
    linkText: "#6B7280", // 회색 링크 텍스트
    locationTitle: "#1F2937", // 진한 위치 제목
    // Logo colors
    logoLight: "#C7D0E2",
    logoDark: "#6B7280",
    // Social icons
    socialIconBg: "#4F46E5",
    socialIconText: "#FFFFFF",
    // Decorative gradient
    gradientPink: "#F9A8D4",
    gradientBlue: "#93C5FD",
    gradientYellow: "#FDE68A",
  },
  dark: {
    ctaBackground: "#3730A3",
    ctaText: "#FFFFFF",
    ctaAccent: "#67E8F9",
    buttonBackground: "#FEF9C3",
    buttonText: "#1F2937",
    cardBackground: "#1F2937",
    cardText: "#FFFFFF",
    linksBackground: "#111827",
    headingText: "#818CF8",
    subHeadingText: "#818CF8",
    linkText: "#9CA3AF",
    locationTitle: "#FFFFFF",
    logoLight: "#374151",
    logoDark: "#9CA3AF",
    socialIconBg: "#6366F1",
    socialIconText: "#FFFFFF",
    gradientPink: "#F9A8D4",
    gradientBlue: "#93C5FD",
    gradientYellow: "#FDE68A",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  profile: {
    path: "/registry/footer-online-payment-platform/profile.png",
    alt: "Thomas - Contact person for payment solutions",
    prompt: `Professional headshot of a smiling friendly man in his 30s, wearing a gray polo shirt, short brown hair, clean shaven, neutral background, high quality professional photograph, corporate style, approachable expression`,
  },
  worldlineLogo: {
    path: "/registry/footer-online-payment-platform/worldline-logo.png",
    alt: "Worldline logo",
    prompt: `Worldline company logo, simple line art mountain/wave design with text WORLDLINE below, white on transparent background, minimal corporate logo design`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight, Linkedin, Youtube, User } from "lucide-react";

interface FooterOnlinePaymentPlatformProps {
  mode?: "light" | "dark";
  ctaTitle?: string;
  ctaAccent?: string;
  ctaButtonText?: string;
  contactPerson?: {
    name: string;
    title: string;
    imageSrc?: string;
    buttonText: string;
  };
  solutionLinks?: {
    features: string[];
    services: string[];
  };
  useCasesLinks?: string[];
  resourcesLinks?: string[];
  documentationLinks?: string[];
  aboutUsLinks?: string[];
  offices?: {
    country: string;
    address: string[];
  }[];
  partnerLogo?: {
    src?: string;
    alt?: string;
  };
  socialLinks?: {
    linkedin?: string;
    youtube?: string;
  };
  onCtaClick?: () => void;
  onContactClick?: () => void;
}

// CPP Logo Component
function CPPLogo({ lightColor, darkColor }: { lightColor: string; darkColor: string }) {
  return (
    <svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* C letter - left arc */}
      <path
        d="M10 40C10 23.43 23.43 10 40 10C48.28 10 55.78 13.35 61.21 18.79L55.56 24.44C51.69 20.57 46.15 18.18 40 18.18C28.02 18.18 18.18 28.02 18.18 40C18.18 51.98 28.02 61.82 40 61.82C46.15 61.82 51.69 59.43 55.56 55.56L61.21 61.21C55.78 66.65 48.28 70 40 70C23.43 70 10 56.57 10 40Z"
        fill={lightColor}
      />
      {/* First P */}
      <path
        d="M65 15H85C97.15 15 107 24.85 107 37C107 49.15 97.15 59 85 59H78V70H65V15ZM78 46H85C89.97 46 94 41.97 94 37C94 32.03 89.97 28 85 28H78V46Z"
        fill={darkColor}
      />
      {/* Second P */}
      <path
        d="M110 15H130C142.15 15 152 24.85 152 37C152 49.15 142.15 59 130 59H123V70H110V15ZM123 46H130C134.97 46 139 41.97 139 37C139 32.03 134.97 28 130 28H123V46Z"
        fill={lightColor}
      />
    </svg>
  );
}

// Worldline Logo Component
function WorldlineLogo({ color }: { color: string }) {
  return (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mountain/Wave shape */}
      <path
        d="M10 30L25 15L40 30L55 10L70 30"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15 35L30 20L45 35"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      {/* WORLDLINE text */}
      <text x="40" y="48" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
        WORLDLINE
      </text>
    </svg>
  );
}

// Decorative Gradient Circles
function DecorativeGradient({ colors }: { colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"] }) {
  return (
    <div className="absolute bottom-0 right-0 w-48 h-48 overflow-hidden pointer-events-none">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.gradientPink} />
            <stop offset="50%" stopColor={colors.gradientBlue} />
            <stop offset="100%" stopColor={colors.gradientYellow} />
          </linearGradient>
        </defs>
        {/* Outer ring */}
        <circle
          cx="200"
          cy="200"
          r="90"
          stroke="url(#gradient1)"
          strokeWidth="16"
          fill="none"
          opacity="0.7"
        />
        {/* Inner ring */}
        <circle
          cx="200"
          cy="200"
          r="60"
          stroke="url(#gradient1)"
          strokeWidth="12"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export default function FooterOnlinePaymentPlatform({
  mode = "light",
  ctaTitle = "Want to get started with\nprocessing payments on your\nplatform?",
  ctaAccent = "Get in touch.",
  ctaButtonText = "Start now",
  contactPerson = {
    name: "Thomas",
    title: "Want to\npowercharge\npayments on your\nplatform? Reach\nout to Thomas.",
    buttonText: "Get in touch",
  },
  solutionLinks = {
    features: [
      "API Driven Integration",
      "Multi-Split Payment",
      "Escrow",
      "Merchant Onboarding",
      "Instant Payouts",
      "Multicurrency",
      "Virtual IBANs",
    ],
    services: [
      "First-Line Support",
      "Second-Line Support",
      "Periodic reports",
      "Automated Mediation Flow",
      "Integration Support",
      "Products",
      "Partner Interface",
      "Merchant Interface",
      "Checkout",
      "Onboarding",
    ],
  },
  useCasesLinks = [
    "Marketplaces",
    "Crowdfunding",
    "Automotive",
    "Auctions",
    "Franchises",
    "Leisure",
  ],
  resourcesLinks = ["Support", "Contact", "Guides", "Sitemap"],
  documentationLinks = [
    "Legal",
    "Terms and Policies",
    "Foundation",
    "Privacy",
    "Security",
    "API documentation",
    "Cookie statement",
    "Customer Due Diligence policy",
  ],
  aboutUsLinks = ["Company", "Pricing", "Blog", "Jobs", "Press kit"],
  offices = [
    {
      country: "Netherlands",
      address: ["Kanaalweg 1", "2628 EB Delft"],
    },
    {
      country: "Germany",
      address: ["Johannisstraße 3", "10117 Berlin"],
    },
    {
      country: "United Kingdom",
      address: ["119 Marylebone Rd", "London NW1 5PU"],
    },
  ],
  partnerLogo = {
    alt: "Worldline",
  },
  socialLinks = {
    linkedin: "#",
    youtube: "#",
  },
  onCtaClick,
  onContactClick,
}: FooterOnlinePaymentPlatformProps) {
  const colors = COLORS[mode];

  return (
    <footer className="w-full">
      {/* CTA Section - Purple/Blue Background */}
      <div
        className="relative px-6 md:px-12 lg:px-20 py-16 lg:py-20"
        style={{ backgroundColor: colors.ctaBackground }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
            {/* Left Side - CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-lg"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-tight mb-8"
                style={{ color: colors.ctaText }}
              >
                {ctaTitle.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < ctaTitle.split("\n").length - 1 && <br />}
                  </span>
                ))}{" "}
                <span style={{ color: colors.ctaAccent }}>{ctaAccent}</span>
              </h2>

              {/* Start Now Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: colors.buttonBackground,
                  color: colors.buttonText,
                }}
              >
                {ctaButtonText}
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              {/* CPP Logo */}
              <div className="mt-16 lg:mt-24">
                <CPPLogo lightColor={colors.logoLight} darkColor={colors.logoDark} />
              </div>
            </motion.div>

            {/* Right Side - Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-auto"
            >
              <div
                className="rounded-2xl p-8 text-center max-w-xs mx-auto lg:mx-0"
                style={{ backgroundColor: colors.cardBackground }}
              >
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center">
                  {contactPerson.imageSrc ? (
                    <img
                      src={contactPerson.imageSrc}
                      alt={`Contact ${contactPerson.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-amber-600" />
                  )}
                </div>

                {/* Contact Title */}
                <p
                  className="text-lg font-medium leading-snug mb-6"
                  style={{ color: colors.cardText }}
                >
                  {contactPerson.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < contactPerson.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>

                {/* Get in Touch Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
                  style={{
                    backgroundColor: colors.ctaBackground,
                    color: colors.ctaText,
                  }}
                >
                  {contactPerson.buttonText}
                  <span className="w-5 h-5 flex items-center justify-center rounded bg-white/20">
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Links Section - Light Background */}
      <div
        className="relative px-6 md:px-12 lg:px-20 py-16"
        style={{ backgroundColor: colors.linksBackground }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Solution Column */}
            <div>
              <h3
                className="text-base font-semibold mb-4"
                style={{ color: colors.headingText }}
              >
                Solution
              </h3>

              {/* Features */}
              <h4
                className="text-sm font-semibold mb-2"
                style={{ color: colors.subHeadingText }}
              >
                Features
              </h4>
              <ul className="space-y-1 mb-6">
                {solutionLinks.features.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: colors.linkText }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Services */}
              <h4
                className="text-sm font-semibold mb-2"
                style={{ color: colors.subHeadingText }}
              >
                Services
              </h4>
              <ul className="space-y-1">
                {solutionLinks.services.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: colors.linkText }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases & Resources Column */}
            <div>
              <h3
                className="text-base font-semibold mb-4"
                style={{ color: colors.headingText }}
              >
                Use cases
              </h3>
              <ul className="space-y-1 mb-6">
                {useCasesLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: colors.linkText }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <h3
                className="text-base font-semibold mb-4"
                style={{ color: colors.headingText }}
              >
                Resources
              </h3>
              <ul className="space-y-1">
                {resourcesLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: colors.linkText }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documentation & About Us Column */}
            <div>
              <h3
                className="text-base font-semibold mb-4"
                style={{ color: colors.headingText }}
              >
                Documentation
              </h3>
              <ul className="space-y-1 mb-6">
                {documentationLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: colors.linkText }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <h3
                className="text-base font-semibold mb-4"
                style={{ color: colors.headingText }}
              >
                About us
              </h3>
              <ul className="space-y-1">
                {aboutUsLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm hover:underline transition-colors"
                      style={{ color: colors.linkText }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices Column */}
            <div>
              <h3
                className="text-base font-semibold mb-4"
                style={{ color: colors.headingText }}
              >
                Offices
              </h3>

              {offices.map((office, i) => (
                <div key={i} className="mb-4">
                  <h4
                    className="text-sm font-semibold mb-1"
                    style={{ color: colors.locationTitle }}
                  >
                    {office.country}
                  </h4>
                  {office.address.map((line, j) => (
                    <p
                      key={j}
                      className="text-sm"
                      style={{ color: colors.linkText }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}

              {/* Part of / Partner Logo */}
              <div className="mt-6">
                <p className="text-sm mb-2" style={{ color: colors.linkText }}>
                  Part of
                </p>
                <WorldlineLogo color={colors.headingText} />
              </div>

              {/* Social Links */}
              <div className="flex gap-2 mt-8">
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    className="w-8 h-8 flex items-center justify-center rounded transition-opacity hover:opacity-80"
                    style={{ backgroundColor: colors.socialIconBg }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" style={{ color: colors.socialIconText }} />
                  </a>
                )}
                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    className="w-8 h-8 flex items-center justify-center rounded transition-opacity hover:opacity-80"
                    style={{ backgroundColor: colors.socialIconBg }}
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" style={{ color: colors.socialIconText }} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Gradient Circles */}
        <DecorativeGradient colors={colors} />
      </div>
    </footer>
  );
}
