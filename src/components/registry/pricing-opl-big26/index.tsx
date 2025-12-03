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
    // 배경색 (크림/베이지)
    background: "#FAF2DF",
    // 제목 및 강조 텍스트 (황금/갈색)
    title: "#C4A35A",
    // 서비스 제목 (황금/갈색)
    serviceTitle: "#C4A35A",
    // 설명 텍스트 (연한 황금/갈색)
    description: "#D4B06A",
    // 가격 텍스트
    price: "#C4A35A",
    // 구분선
    divider: "#E8D9B8",
    // 원형 배지 테두리
    badgeBorder: "#D4B06A",
    // 원형 배지 배경
    badgeBackground: "#F5E8CA",
  },
  dark: {
    background: "#2A2520",
    title: "#D4B06A",
    serviceTitle: "#D4B06A",
    description: "#B89D5A",
    price: "#D4B06A",
    divider: "#4A4035",
    badgeBorder: "#D4B06A",
    badgeBackground: "#3A3530",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ServiceItem {
  title: string;
  description: string[];
  price: string;
}

interface PricingOplBig26Props {
  mode?: "light" | "dark";
  sectionTitle?: string;
  subtitle?: string;
  subtitleSecondary?: string;
  services?: ServiceItem[];
  footerNote?: string;
}

const defaultServices: ServiceItem[] = [
  {
    title: "Individuele coaching kind",
    description: ["Sessie van 1 uur"],
    price: "€ 50 per sessie",
  },
  {
    title: "Individuele begeleiding volwassene",
    description: ["Sessie van 1/1,5 uur"],
    price: "€ 75 per sessie",
  },
  {
    title: "Individueel coachingstraject kind",
    description: [
      "- Vijf ontmoetingen van 1 uur",
      "- Voorbereidingen",
      "- Op afstand begeleiden door extra afstemming",
    ],
    price: "€ 200 totaal",
  },
  {
    title: "Groepslessen hoogsensitieve kinderen",
    description: [
      "- Groepslessen van 2 uur met max. 6 kinderen",
      "- Intake en voorbereidingen",
      "- Individuele oudergesprekken (optioneel)",
    ],
    price: "op aanvraag",
  },
  {
    title: "Speciaal geschreven helend verhaal voor uw kind",
    description: ["In een unieke, handgemaakte presentatie"],
    price: "€ 100 per verhaal",
  },
  {
    title: "Klankbord voor ouders",
    description: ["Sessie van 1/1,5 uur"],
    price: "€ 75 per sessie",
  },
];

export default function PricingOplBig26({
  mode = "light",
  sectionTitle = "Aanbod",
  subtitle = "De doelgroep zijn kinderen en volwassenen met levens- of opvoedvragen.",
  subtitleSecondary = "(Specialisatie hoogsensitiviteit)",
  services = defaultServices,
  footerNote = "We kijken wat er nodig en mogelijk is. Alles gaat in goed overleg. Ook de interval tussen de ontmoetingen bepalen we samen. De bedragen zijn exclusief BTW. Als er sprake is van samenwerking met school, dan is BTW-vrijstelling mogelijk.",
}: PricingOplBig26Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12 md:py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2
            className="text-2xl md:text-3xl font-normal mb-4"
            style={{
              color: colors.title,
              fontFamily: "'Instrument Serif', Georgia, serif",
            }}
          >
            {sectionTitle}
          </h2>
          <p
            className="text-sm md:text-base font-light"
            style={{ color: colors.description }}
          >
            {subtitle}
          </p>
          <p
            className="text-sm md:text-base font-light"
            style={{ color: colors.description }}
          >
            {subtitleSecondary}
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Service Item */}
              <div className="flex items-start gap-4 py-5">
                {/* Numbered Badge */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-light"
                  style={{
                    border: `1.5px solid ${colors.badgeBorder}`,
                    backgroundColor: colors.badgeBackground,
                    color: colors.serviceTitle,
                  }}
                >
                  {index + 1}
                </div>

                {/* Service Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base font-medium mb-1"
                    style={{ color: colors.serviceTitle }}
                  >
                    {service.title}
                  </h3>
                  {service.description.map((desc, descIndex) => (
                    <p
                      key={descIndex}
                      className="text-sm font-light"
                      style={{ color: colors.description }}
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Price */}
                <div
                  className="flex-shrink-0 text-sm font-light text-right whitespace-nowrap"
                  style={{ color: colors.price }}
                >
                  {service.price}
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div
                  className="w-full h-px"
                  style={{ backgroundColor: colors.divider }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-6"
          style={{ borderTop: `1px solid ${colors.divider}` }}
        >
          <p
            className="text-xs font-light text-center leading-relaxed"
            style={{ color: colors.description }}
          >
            {footerNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
