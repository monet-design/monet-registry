"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  title: "성공한 기업들의 선택",
  subtitle: "이 중 하나라도 해당된다면\n더 늦기 전에 트래킷을 도입하세요.",
  logos: [
    {
      name: "KT",
      src: "https://framerusercontent.com/images/TVrS1jBNMpM015pfbrsjwie6z1Y.png",
    },
    {
      name: "SK magic",
      src: "https://framerusercontent.com/images/WuXgWPlhoAFBpzu4MbnBEOyII4.svg",
    },
    {
      name: "GEMS",
      src: "https://framerusercontent.com/images/owEqEEvMHuEiCSn0ln17BETsLIg.png",
    },
    {
      name: "Health Boy Gym",
      src: "https://framerusercontent.com/images/9QP07vVdEMcwEpB9qcDWevJJW9o.jpg",
    },
  ],
  cards: [
    {
      title: "데이터 없이 감에 의존해 매출을 예측하는 기업",
      image:
        "https://framerusercontent.com/images/KpwreDhtsNecofp67eFuR7rKEp4.png",
    },
    {
      title: "성공한 영업 사례를 반복하고 싶은 기업",
      image:
        "https://framerusercontent.com/images/GsMdNgqOKDG185EzayjXXhbwnU.png",
    },
    {
      title: "담당자 퇴사 시 인수인계로 고생했던 기업",
      image:
        "https://framerusercontent.com/images/YvpRGvd5HnN33uuDXIUDleaSuDQ.png",
    },
    {
      title: "CRM 도입이 실패로 끝났던 경험이 있는 기업",
      image:
        "https://framerusercontent.com/images/J2PtXPepYHNUq42Z5o850W1njPU.png",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TrackitSoLogoCloud1Props {
  mode?: "light" | "dark";
}

export default function TrackitSoLogoCloud1({
  mode = "light",
}: TrackitSoLogoCloud1Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {CONTENT.title}
        </motion.h2>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20"
        >
          {CONTENT.logos.map((logo, index) => (
            <div
              key={index}
              className="h-12 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-2xl md:text-4xl font-bold text-center mb-12 whitespace-pre-line ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {CONTENT.subtitle}
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTENT.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`rounded-2xl overflow-hidden border ${
                isDark
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="aspect-square p-6 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 pt-0">
                <h3
                  className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
