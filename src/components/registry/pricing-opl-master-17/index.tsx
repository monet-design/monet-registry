"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#D84C5E",
    textSecondary: "#666666",
    textMuted: "#999999",
    divider: "#E5E5E5",
    gradientPink: "#FD7E8B",
    gradientYellow: "#FFBC6B",
    buttonBorder: "#D84C5E",
    buttonText: "#D84C5E",
    badge: "#F5C042",
    badgeText: "#FFFFFF",
  },
  dark: {
    background: "#1A1A1A",
    textPrimary: "#FD7E8B",
    textSecondary: "#AAAAAA",
    textMuted: "#777777",
    divider: "#333333",
    gradientPink: "#FD7E8B",
    gradientYellow: "#FFBC6B",
    buttonBorder: "#FD7E8B",
    buttonText: "#FD7E8B",
    badge: "#F5C042",
    badgeText: "#1A1A1A",
  },
} as const;

/**
 * 서비스 데이터
 */
const DEFAULT_SERVICES = [
  {
    id: "single-page",
    title: "SINGLE-PAGE SITE",
    description:
      "A site that calls the user to action. For example, to subscribe to a newsletter, buy a ticket for a conference, request an estimate, or enroll in a course.",
    prices: [
      { type: "DESIGN", price: "200$", hasStartFrom: true },
      { type: "TILDA", price: "300$", hasStartFrom: true },
    ],
  },
  {
    id: "multipage",
    title: "MULTIPAGE",
    description:
      "A site with a more complex structure, several pages that are combined menus or other blocks with links.",
    prices: [
      { type: "DESIGN", price: "300$", hasStartFrom: true },
      { type: "TILDA", price: "450$", hasStartFrom: true },
    ],
  },
  {
    id: "online-store",
    title: "ONLINE STORE",
    description:
      "The site is designed to sell goods or services. It has a catalog with product descriptions, a payment option and a shopping cart.",
    prices: [
      { type: "DESIGN", price: "530$", hasStartFrom: true },
      { type: "TILDA", price: "660$", hasStartFrom: true },
    ],
  },
];

const DEFAULT_ADDITIONAL_SERVICES = [
  { name: "BANNER", price: "20$" },
  { name: "PRESENTATION", price: "5$", note: "for 1 slide" },
  { name: "CERTIFICATE", price: "25$" },
  { name: "ADVERTISING CREATIVE", price: "25$" },
];

const DEFAULT_CONTENT = {
  heading: "HOW I CAN",
  headingHighlight: "HELP",
  sideNote:
    "If you have a small budget, but interesting project, I'm ready to make a site on standard blocks. It will be cheaper, but the site design will look easier.",
  consultationText:
    "Written approximate prices, as each project has its own amount of work. If you want to calculate the cost of your project, I offer a free consultation.",
  consultationButtonText: "TEXT ME",
  additionalServicesTitle: "ADDITIONAL\nSERVICES",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ServicePrice {
  type: string;
  price: string;
  hasStartFrom?: boolean;
}

interface Service {
  id: string;
  title: string;
  description: string;
  prices: ServicePrice[];
}

interface AdditionalService {
  name: string;
  price: string;
  note?: string;
}

interface PricingOplMaster17Props {
  mode?: "light" | "dark";
  heading?: string;
  headingHighlight?: string;
  sideNote?: string;
  services?: Service[];
  additionalServices?: AdditionalService[];
  consultationText?: string;
  consultationButtonText?: string;
  additionalServicesTitle?: string;
  onConsultationClick?: () => void;
}

export default function PricingOplMaster17({
  mode = "light",
  heading = DEFAULT_CONTENT.heading,
  headingHighlight = DEFAULT_CONTENT.headingHighlight,
  sideNote = DEFAULT_CONTENT.sideNote,
  services = DEFAULT_SERVICES,
  additionalServices = DEFAULT_ADDITIONAL_SERVICES,
  consultationText = DEFAULT_CONTENT.consultationText,
  consultationButtonText = DEFAULT_CONTENT.consultationButtonText,
  additionalServicesTitle = DEFAULT_CONTENT.additionalServicesTitle,
  onConsultationClick,
}: PricingOplMaster17Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight"
              style={{ color: colors.textPrimary }}
            >
              {heading}
              <br />
              <span className="italic">{headingHighlight}</span>
            </h1>
          </div>
          <p
            className="text-xs max-w-[200px] leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {sideNote}
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="border-t py-6"
              style={{ borderColor: colors.divider }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Left: Title and Description */}
                <div className="flex-1 max-w-md">
                  <h3
                    className="text-xl md:text-2xl font-serif tracking-wide mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: colors.textSecondary }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Right: Prices */}
                <div className="flex flex-col gap-2 md:items-end">
                  {service.prices.map((price, priceIndex) => (
                    <div
                      key={priceIndex}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full border"
                        style={{
                          borderColor: colors.badge,
                          color: colors.textMuted,
                        }}
                      >
                        {price.type}
                      </span>
                      <span
                        className="text-xl md:text-2xl font-light"
                        style={{ color: colors.textPrimary }}
                      >
                        {price.price}
                        {price.hasStartFrom && (
                          <span className="text-sm ml-0.5">~</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Last divider */}
          <div
            className="border-t"
            style={{ borderColor: colors.divider }}
          />
        </div>

        {/* Consultation Section with Gradient Background */}
        <motion.div
          className="relative my-16 py-16 px-8 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient Blob Background */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 30% 50%, ${colors.gradientYellow}60 0%, transparent 70%),
                radial-gradient(ellipse 70% 80% at 70% 60%, ${colors.gradientPink}70 0%, transparent 60%)
              `,
              filter: "blur(40px)",
            }}
          />

          <div className="relative z-10 max-w-md">
            <p
              className="text-sm md:text-base leading-relaxed mb-8"
              style={{ color: colors.textPrimary }}
            >
              {consultationText}
            </p>

            <motion.button
              className="px-8 py-3 rounded-full border-2 text-sm font-medium tracking-wider transition-all"
              style={{
                borderColor: colors.buttonBorder,
                color: colors.buttonText,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: colors.buttonBorder,
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={onConsultationClick}
            >
              {consultationButtonText}
            </motion.button>
          </div>
        </motion.div>

        {/* Additional Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-10 whitespace-pre-line"
            style={{ color: colors.textPrimary }}
          >
            {additionalServicesTitle}
          </h2>

          <div className="space-y-0">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                className="border-t py-4 flex items-center justify-between"
                style={{ borderColor: colors.divider }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span
                  className="text-lg md:text-xl font-serif tracking-wide"
                  style={{ color: colors.textPrimary }}
                >
                  {service.name}
                </span>
                <div className="flex items-center gap-2">
                  {service.note && (
                    <span
                      className="text-xs"
                      style={{ color: colors.textMuted }}
                    >
                      {service.note}
                    </span>
                  )}
                  <span
                    className="text-lg md:text-xl font-light"
                    style={{ color: colors.textPrimary }}
                  >
                    {service.price}
                  </span>
                </div>
              </motion.div>
            ))}
            {/* Last divider */}
            <div
              className="border-t"
              style={{ borderColor: colors.divider }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
