"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
    bg: "#ffffff",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
    bg: "#000000",
  },
} as const;

const AWARDS = [
  {
    icon: "/scraped/torder-com-2025-12-14/images/image-197.png",
    title: "300억 원 규모",
    subtitle: "시리즈 B 투자 유치",
  },
  {
    icon: "/scraped/torder-com-2025-12-14/images/image-198.png",
    title: "고용노동부",
    subtitle: "예비 유니콘 기업 선정",
  },
  {
    icon: "/scraped/torder-com-2025-12-14/images/image-199.png",
    title: "서울경제",
    subtitle: "'대한민국창업문화대상, 산업통상자원부 장관표창 수상",
  },
  {
    icon: "/scraped/torder-com-2025-12-14/images/image-200.png",
    title: "중소기업",
    subtitle: "강소기업 선정",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface TorderComAwards13Props {
  mode?: "light" | "dark";
}

export default function TorderComAwards13({
  mode = "dark",
}: TorderComAwards13Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-12 px-4"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Awards Container */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {AWARDS.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 min-w-[250px]"
            >
              {/* Laurel Icon */}
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src={award.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Award Text */}
              <div className="flex-1">
                <h3
                  className="text-base md:text-lg font-bold mb-1"
                  style={{ color: colors.text }}
                >
                  {award.title}
                </h3>
                <p
                  className="text-xs md:text-sm leading-tight"
                  style={{ color: colors.subtext }}
                >
                  {award.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
