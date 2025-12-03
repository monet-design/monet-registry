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
    accent: "#3ECFB2", // Teal/Turquoise
    accentHover: "#35B89D",
    background: "#FAFAFA",
  },
  dark: {
    accent: "#3ECFB2",
    accentHover: "#35B89D",
    background: "#1A1A1A",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ServiceItem {
  pages: string;
  description: string;
  price: string;
}

interface PricingTacoWebProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  description?: string;
  bracketNote?: string;
  columnHeaders?: {
    pages: string;
    description: string;
    price: string;
  };
  services?: ServiceItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const defaultServices: ServiceItem[] = [
  { pages: "1-5", description: "Online-Resumes", price: "€ 1500-2500" },
  { pages: "1-10", description: "Portfolio-Seite", price: "€ 2000-3000" },
  { pages: "5-15", description: "Statische, responsive Webseite", price: "€ 2500-4000" },
  { pages: "10", description: "Dynamische Seite mit Administrationspanel", price: "€ 3000-6000" },
  { pages: "-", description: "+ Galerie, Diashow, Akkordeon", price: "€ 1000-2000" },
  { pages: "-", description: "+ Formular, soziale Module", price: "€ 1500-3000" },
  { pages: "-", description: "+ Blog, Seitenstatistik", price: "€ 2000-4000" },
  { pages: "-", description: "+ Newsletter, Community-Builder", price: "€ 2500-4500" },
  { pages: "-", description: "+ Webshop, Zahlungssystem", price: "€ 3000-6000" },
];

export default function PricingTacoWeb({
  mode = "light",
  title = "Dienstleistungen",
  subtitle = "Es ist unbestreitbar, dass auf dem heutigen Markt die Glaubwürdigkeit der Profis und Firmen durch deren online Präsenz bemessen wird. Sie können hunderte Prospekte drucken oder tausende Broschüren verbreiten, doch wenn es dazu kommt den Richtigen zu wählen, jeder schaut auf die Webseiten zuerst. Genau so, wie Sie...",
  description = "Wir heben Sie von der Masse ab durch Herstellung von innovativen Webseiten. Unser Rezept ist einfach: trendy Design und Qualitätscode gewürzt mit vielen Farbharmonien, weil das macht wahres Flair...",
  bracketNote = "Abhängig von der Komplexität und der Feature-Liste einer Webseite, bieten wir Pakete an, um Ihre unternehmerische Ziele zu erreichen. Wir erstellen eine Webseite für Sie, welche auf jedem Gerät fehlerfrei funktioniert unabhängig von Größe oder Marke (einschließlich Desktop, Tablet und Mobile).",
  columnHeaders = {
    pages: "Seiten",
    description: "Interaktionsumme",
    price: "Schätzung",
  },
  services = defaultServices,
  ctaText = "Angebot anfragen",
  onCtaClick,
}: PricingTacoWebProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-6 lg:px-12"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Service Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >
            <h2
              className={`text-lg font-semibold tracking-wide ${
                mode === "dark" ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {title}
            </h2>

            <p
              className={`text-xs leading-relaxed ${
                mode === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {subtitle}
            </p>

            <p
              className={`text-xs leading-relaxed ${
                mode === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {description}
            </p>

            {/* Bracket Note */}
            <div className="relative mt-8 pl-6">
              {/* Left curly brace */}
              <svg
                className="absolute left-0 top-0 h-full w-4"
                viewBox="0 0 16 100"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M14 0 C6 0, 6 20, 6 30 C6 40, 2 45, 2 50 C2 55, 6 60, 6 70 C6 80, 6 100, 14 100"
                  stroke={colors.accent}
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <p
                className={`text-[10px] leading-relaxed italic ${
                  mode === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {bracketNote}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Pricing Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            {/* Table Header */}
            <div
              className={`grid grid-cols-12 gap-4 pb-3 border-b ${
                mode === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="col-span-2">
                <span
                  className={`text-xs font-medium ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {columnHeaders.pages}
                </span>
              </div>
              <div className="col-span-6">
                <span
                  className={`text-xs font-medium ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {columnHeaders.description}
                </span>
              </div>
              <div className="col-span-4 text-right">
                <span
                  className={`text-xs font-medium ${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {columnHeaders.price}
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="grid grid-cols-12 gap-4 py-3"
                >
                  <div className="col-span-2">
                    <span
                      className={`text-xs ${
                        mode === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {service.pages}
                    </span>
                  </div>
                  <div className="col-span-6">
                    <span
                      className={`text-xs ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </span>
                  </div>
                  <div className="col-span-4 text-right">
                    <span
                      className={`text-xs ${
                        mode === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex justify-end"
            >
              <button
                onClick={onCtaClick}
                className="px-6 py-2.5 text-xs font-medium text-white rounded-md transition-colors duration-200"
                style={{
                  backgroundColor: colors.accent,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accentHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.accent)
                }
              >
                {ctaText}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
