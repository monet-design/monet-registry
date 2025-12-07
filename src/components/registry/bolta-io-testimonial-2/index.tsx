"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    badgeBg: "#FFF7ED",
    badgeText: "#F97316",
  },
  dark: {
    accent: "#FB923C",
    badgeBg: "#431407",
    badgeText: "#FDBA74",
  },
} as const;

const CONTENT = {
  badge: "고객 사례",
  title: "6,000개가 넘는 기업이\n볼타로 업무 변화를 경험하고 있습니다.",
};

const TESTIMONIALS = [
  {
    company: "SPARTA",
    companyLogo: "SPARTA",
    quote: '"10분 걸리던 일이 1분 만에 끝나니 업무 효율이 2배 이상 높아졌어요."',
    author: "팀스파르타 재무회계팀",
    image: "/api/placeholder/400/300",
  },
  {
    company: "채널톡",
    companyLogo: "채널톡",
    quote: '"볼타는 세금계산서 발행 관리 서비스를 넘어 채널톡 업무 필수 툴이에요."',
    author: "채널톡 콜린님",
    image: "/api/placeholder/400/300",
  },
  {
    company: "brandazine",
    companyLogo: "brandazine",
    quote: '"이젠 볼타가 없으면 출근하고 싶지 않다. 생각될 정도로 잘 쓰고 있어요."',
    author: "인에디트 엄창엽님",
    image: "/api/placeholder/400/300",
  },
];

const LOGOS = [
  "SPARTA", "채널톡", "F1 studio", "마이닭", "GroupBy", "대전창조경제혁신센터", "되는시간",
  "NNT", "새벽네시", "Elifunt", "TIDEPOOL", "jober", "SMPLY", "brandazine",
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoTestimonial2Props {
  mode?: "light" | "dark";
}

export default function BoltaIoTestimonial2({ mode = "light" }: BoltaIoTestimonial2Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.badgeBg, color: colors.badgeText }}
          >
            {CONTENT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-pre-line"
          >
            <span style={{ color: colors.accent }}>6,000개</span>가 넘는 기업이
            <br />
            볼타로 업무 변화를 경험하고 있습니다.
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {testimonial.company === "SPARTA" && (
                    <span
                      className="px-2 py-1 text-xs font-bold text-white rounded"
                      style={{ backgroundColor: "#E94057" }}
                    >
                      SPARTA
                    </span>
                  )}
                  {testimonial.company === "채널톡" && (
                    <span className="flex items-center gap-1 text-sm font-medium text-gray-900">
                      <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        C
                      </span>
                      채널톡
                    </span>
                  )}
                  {testimonial.company === "brandazine" && (
                    <span className="text-sm font-bold text-gray-900">brandazine</span>
                  )}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {testimonial.quote}
                </p>
                <p className="text-sm text-gray-500">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-100"
        >
          <div className="grid grid-cols-4 md:grid-cols-7 gap-8 items-center justify-items-center">
            {LOGOS.map((logo, index) => (
              <div
                key={index}
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm md:text-base font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
