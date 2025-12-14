"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 이미지 에셋
 */
const IMAGES = {
  background: {
    path: "/scraped/greetinghr-com-2025-12-14/images/image-49.png",
    alt: "파란색 그라데이션 배경",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  headline: "채용 관리를 넘어, 채용 성공으로",
  description:
    "국내 1위 채용 관리 솔루션, 그리팅으로 원하는 시기에 적합한 인재를 확보하세요.",
  buttonText: "1:1 맞춤 상담받기",
  buttonHref: "#",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface GreetinghrCta6Props {
  mode?: "light" | "dark";
}

export default function GreetinghrCta6({
  mode = "light",
}: GreetinghrCta6Props) {
  return (
    <section className="relative w-full max-w-[1200px] border-2 border-blue-500 rounded-xl overflow-hidden mx-auto">
      <div
        className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${IMAGES.background.path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            {CONTENT.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          >
            {CONTENT.description}
          </motion.p>

          {/* Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href={CONTENT.buttonHref}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium text-sm md:text-base rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
          >
            {CONTENT.buttonText}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
