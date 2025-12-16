"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0A0A0A",
  cardBackground: "#1A1A1A",
  activeBackground: "rgba(242, 101, 34, 0.15)",
  text: "#FFFFFF",
  textMuted: "#888888",
  accent: "#F26522",
  border: "#333333",
  borderDashed: "#555555",
} as const;

/**
 * Feature 데이터
 */
const DEFAULT_FEATURES = [
  {
    id: "identity",
    icon: "identity",
    title: "IDENTITY-BASED ATTACKS",
    description: "Detect and remove unauthorized identity use in real-time.",
  },
  {
    id: "domain",
    icon: "domain",
    title: "DOMAIN-BASED ATTACKS",
    description: "Identify and eliminate phishing domains before they cause harm.",
  },
  {
    id: "email",
    icon: "email",
    title: "EMAIL-BASED ATTACKS",
    description: "Augment existing anti-phishing workflows with advanced AI agents.",
  },
  {
    id: "sms",
    icon: "sms",
    title: "SMS-BASED ATTACKS",
    description: "Disrupt malicious phone numbers at the telecom network level.",
  },
  {
    id: "control",
    icon: "control",
    title: "CENTRALIZED CONTROL CENTER",
    description:
      "Outtake unifies threat detection across social media, domains, email, app stores and ad libraries for full-spectrum defense.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IdCard, Globe, Mail, MessageSquare, Layers } from "lucide-react";
import "./font.css";

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface SaaspoFeatureSectionsOuttakeProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
  defaultActiveId?: string;
}

function FeatureIcon({ icon, isActive }: { icon: string; isActive: boolean }) {
  const iconClass = `w-5 h-5 ${isActive ? "text-orange-500" : "text-gray-400"}`;

  switch (icon) {
    case "identity":
      return <IdCard className={iconClass} />;
    case "domain":
      return <Globe className={iconClass} />;
    case "email":
      return <Mail className={iconClass} />;
    case "sms":
      return <MessageSquare className={iconClass} />;
    case "control":
      return <Layers className={iconClass} />;
    default:
      return <Layers className={iconClass} />;
  }
}

function RobotArmIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Floor grid - isometric */}
      <g transform="translate(200, 340)">
        <path
          d="M-120 0 L0 -60 L120 0 L0 60 Z"
          fill="none"
          stroke="#444"
          strokeWidth="1"
        />
        <path d="M-80 0 L0 -40 L80 0 L0 40 Z" fill="none" stroke="#444" strokeWidth="0.5" />
        <path d="M-40 0 L0 -20 L40 0 L0 20 Z" fill="none" stroke="#444" strokeWidth="0.5" />
      </g>

      {/* Base platform */}
      <g transform="translate(200, 300)">
        {/* Bottom layer */}
        <path d="M-60 20 L0 50 L60 20 L60 30 L0 60 L-60 30 Z" fill="#2A2A2A" />
        <path d="M-60 20 L0 -10 L60 20 L0 50 Z" fill="#3A3A3A" />

        {/* Middle platform */}
        <path d="M-50 0 L0 -25 L50 0 L0 25 Z" fill="#E8E8E8" />
        <path d="M-50 0 L0 25 L0 35 L-50 10 Z" fill="#C8C8C8" />
        <path d="M50 0 L0 25 L0 35 L50 10 Z" fill="#D8D8D8" />

        {/* Hexagonal top */}
        <path d="M-40 -15 L0 -35 L40 -15 L0 5 Z" fill="#4A4A4A" />
        <path d="M-40 -15 L0 5 L0 10 L-40 -10 Z" fill="#3A3A3A" />
        <path d="M40 -15 L0 5 L0 10 L40 -10 Z" fill="#3A3A3A" />
      </g>

      {/* Robot arm base */}
      <g transform="translate(200, 270)">
        <ellipse cx="0" cy="0" rx="25" ry="12" fill="#F5F5F5" />
        <path d="M-25 0 L-25 -15 L25 -15 L25 0" fill="#E0E0E0" />
        <ellipse cx="0" cy="-15" rx="25" ry="12" fill="#F5F5F5" />
      </g>

      {/* Robot arm segment 1 */}
      <g transform="translate(200, 240)">
        <rect x="-12" y="-50" width="24" height="50" rx="4" fill="#F0F0F0" />
        <rect x="-8" y="-45" width="16" height="8" rx="2" fill="#E0E0E0" />
        {/* Joint */}
        <circle cx="0" cy="-50" r="15" fill="#F5F5F5" />
        <circle cx="0" cy="-50" r="10" fill="#E8E8E8" />
        <circle cx="0" cy="-50" r="5" fill="#D0D0D0" />
      </g>

      {/* Robot arm segment 2 */}
      <g transform="translate(200, 175)">
        <rect x="-10" y="-40" width="20" height="45" rx="3" fill="#E8E8E8" />
        {/* Joint */}
        <circle cx="0" cy="-40" r="12" fill="#F0F0F0" />
        <circle cx="0" cy="-40" r="7" fill="#D8D8D8" />
      </g>

      {/* Gripper */}
      <g transform="translate(200, 120)">
        <rect x="-8" y="-25" width="16" height="30" rx="2" fill="#E0E0E0" />
        {/* Gripper fingers */}
        <path d="M-12 -25 L-12 -40 L-6 -40 L-6 -25" fill="#D0D0D0" />
        <path d="M6 -25 L6 -40 L12 -40 L12 -25" fill="#D0D0D0" />
        <rect x="-14" y="-45" width="6" height="8" rx="1" fill="#C8C8C8" />
        <rect x="8" y="-45" width="6" height="8" rx="1" fill="#C8C8C8" />
      </g>

      {/* Warning screen */}
      <g transform="translate(280, 120)">
        {/* Screen frame */}
        <rect x="-50" y="-60" width="100" height="80" rx="4" fill="#1A1A1A" stroke="#333" />
        {/* Screen dots */}
        <circle cx="-35" cy="-50" r="2" fill="#555" />
        <circle cx="-28" cy="-50" r="2" fill="#555" />
        <circle cx="-21" cy="-50" r="2" fill="#555" />

        {/* Warning triangle */}
        <g transform="translate(0, 0)">
          <path
            d="M0 -30 L25 15 L-25 15 Z"
            fill="#F26522"
            stroke="#FF7A3D"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#1A1A1A"
            fontSize="24"
            fontWeight="bold"
          >
            !
          </text>
        </g>
      </g>

      {/* Cursor arrows */}
      <g fill="#555">
        <path d="M100 320 L110 330 L105 330 L105 340 L95 340 L95 330 L90 330 Z" />
        <path d="M320 350 L330 340 L330 345 L340 345 L340 355 L330 355 L330 360 Z" />
        <path d="M280 300 L290 290 L290 295 L300 295 L300 305 L290 305 L290 310 Z" />
      </g>

      {/* Small icons/elements */}
      <circle cx="150" cy="280" r="8" fill="#2A2A2A" stroke="#444" />
      <circle cx="150" cy="280" r="4" fill="#333" />
    </svg>
  );
}

export default function SaaspoFeatureSectionsOuttake({
  badge = "OUTTAKE_MODULES",
  title = "Agentic AI Defense",
  subtitle = "Enhance detection. Automate disruption.",
  features = DEFAULT_FEATURES,
  defaultActiveId = "domain",
}: SaaspoFeatureSectionsOuttakeProps) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Dashed border container */}
      <div
        className="relative max-w-7xl mx-auto px-6 md:px-12"
        style={{
          border: `1px dashed ${COLORS.borderDashed}`,
          borderRadius: "4px",
        }}
      >
        {/* Corner decorations */}
        <div
          className="absolute -top-1 -left-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.borderDashed }}
        />
        <div
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.borderDashed }}
        />
        <div
          className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.borderDashed }}
        />
        <div
          className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.borderDashed }}
        />

        <div className="py-12 md:py-16 px-4 md:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span
              className="inline-block px-3 py-1.5 text-xs font-semibold tracking-wider"
              style={{
                backgroundColor: COLORS.text,
                color: COLORS.background,
              }}
            >
              {badge}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif mb-4"
                style={{
                  color: COLORS.text,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base md:text-lg mb-10"
                style={{ color: COLORS.textMuted }}
              >
                {subtitle}
              </motion.p>

              {/* Feature list */}
              <div className="space-y-2">
                {features.map((feature, index) => {
                  const isActive = activeId === feature.id;

                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="relative cursor-pointer rounded-sm overflow-hidden transition-all duration-300"
                      style={{
                        backgroundColor: isActive
                          ? COLORS.activeBackground
                          : "transparent",
                      }}
                      onClick={() => setActiveId(feature.id)}
                      onMouseEnter={() => setActiveId(feature.id)}
                    >
                      {/* Active indicator line */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0 right-0 h-0.5 origin-left"
                            style={{ backgroundColor: COLORS.accent }}
                          />
                        )}
                      </AnimatePresence>

                      <div className="flex items-start gap-4 p-4">
                        {/* Icon */}
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center"
                          style={{
                            backgroundColor: isActive
                              ? COLORS.accent
                              : COLORS.cardBackground,
                          }}
                        >
                          <FeatureIcon icon={feature.icon} isActive={isActive} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-xs font-bold tracking-wider mb-1"
                            style={{
                              color: isActive ? COLORS.accent : COLORS.text,
                            }}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: COLORS.textMuted }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div
                className="relative rounded-lg overflow-hidden p-8"
                style={{
                  backgroundColor: COLORS.cardBackground,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div className="aspect-square max-w-md mx-auto">
                  <RobotArmIllustration />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
