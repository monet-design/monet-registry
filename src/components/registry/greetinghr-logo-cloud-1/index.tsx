"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 헤딩 텍스트
 */
const HEADING = {
  line1: "중소기업부터 대기업까지",
  line2: "7,000+ 기업이 그리팅과 함께합니다",
} as const;

/**
 * 로고 데이터 (4행 x 7열)
 */
const LOGOS = [
  // Row 1
  [
    {
      name: "GS ITM",
      src: "https://framerusercontent.com/images/230fFI10xBhZ4I6ddljRUXzbyA.png",
    },
    {
      name: "LOTTE BIOLOGICS",
      src: "https://framerusercontent.com/images/7inW9qpgyDGdCxuKCj8HwdkJj8Y.png",
    },
    {
      name: "Hanwha Life",
      src: "https://framerusercontent.com/images/bK3Tb19TLtNMpX0SDdfrDQ1GUA0.png",
    },
    {
      name: "HYUNDAI AutoEver",
      src: "https://framerusercontent.com/images/Qjiq34FI20KOKe3QqXRF1zFrU.jpg",
    },
    {
      name: "KIA",
      src: "https://framerusercontent.com/images/me8Mc7YZMXpu9ZbraxUCVrfsnE.png",
    },
    {
      name: "DOOSAN",
      src: "https://framerusercontent.com/images/C2HlV2eVgSVj6cI7Qifc667YeQ.png",
    },
    {
      name: "SK D&D",
      src: "https://framerusercontent.com/images/C2HlV2eVgSVj6cI7Qifc667YeQ.png",
    },
  ],
  // Row 2
  [
    {
      name: "Samyang Foods",
      src: "https://framerusercontent.com/images/jIk88jYgQkBkHS86d1SaIh7nWaY.png",
    },
    {
      name: "KYOWON",
      src: "https://framerusercontent.com/images/P1lSLecDRw8fP9xRXspAPZoZS4.png",
    },
    {
      name: "애경",
      src: "https://framerusercontent.com/images/ww7vP0ry983rhQ45rObijUfpQk.png",
    },
    {
      name: "당근",
      src: "https://framerusercontent.com/images/uqBOC8dNL8xF7IKmwWuUFI3vFc.png",
    },
    {
      name: "KB증권",
      src: "https://framerusercontent.com/images/qvmru6Sws391sxOUD2eDyPHPgw.png",
    },
    {
      name: "OB맥주",
      src: "https://framerusercontent.com/images/8APSuhG1EaGrdnAf7dX91cg5Y4w.png",
    },
    {
      name: "CESCO",
      src: "https://framerusercontent.com/images/qvmru6Sws391sxOUD2eDyPHPgw.png",
    },
  ],
  // Row 3
  [
    {
      name: "한화오션",
      src: "https://framerusercontent.com/images/f4FREk3iEmQfdrdnq9ZAuzCmk.png",
    },
    {
      name: "HYBE",
      src: "https://framerusercontent.com/images/sFKAvFUK40AbtMfms0cyTrnCbY.png",
    },
    {
      name: "JYP",
      src: "https://framerusercontent.com/images/hSjg15mzGb6U3myP1AmdzLiA.png",
    },
    {
      name: "SM",
      src: "https://framerusercontent.com/images/eXMakmV3YwfHNeZYa0lYCX0iwUs.png",
    },
    {
      name: "MUSINSA",
      src: "https://framerusercontent.com/images/ScHZy9EAky7vU8tHYi1cphy26YQ.jpg",
    },
    {
      name: "Kurly",
      src: "https://framerusercontent.com/images/ZAfYPJQp4N8AclyOC6t96ky7M80.png",
    },
    {
      name: "SSG.COM",
      src: "https://framerusercontent.com/images/jiptbEH4q4GrDRE9C8c2agTN2Fo.png",
    },
  ],
  // Row 4
  [
    {
      name: "POSCO",
      src: "https://framerusercontent.com/images/0XIkKLITmQ4A04LzYaBmvIEMj0.png",
    },
    {
      name: "kakaopay",
      src: "https://framerusercontent.com/images/DTbPrz05U9QjqiJfRHmw0baTq3w.png",
    },
    {
      name: "OLIVE YOUNG",
      src: "https://framerusercontent.com/images/JKwLCfe6KwEAXb6YRr5WT1s6PFs.png",
    },
    {
      name: "Elandeats",
      src: "https://framerusercontent.com/images/8v0G5Obs9VpXX5sfSXZq5Idh3OE.png",
    },
    {
      name: "LF",
      src: "https://framerusercontent.com/images/dDgaAsisTTVe3ZDuAaec02SoMc.png",
    },
    {
      name: "종근당건강",
      src: "https://framerusercontent.com/images/jNpU505S6flqe6WbFYMmLvPfisw.png",
    },
    {
      name: "현대약품",
      src: "https://framerusercontent.com/images/jNpU505S6flqe6WbFYMmLvPfisw.png",
    },
  ],
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface GreetinghrLogoCloud1Props {
  heading?: {
    line1?: string;
    line2?: string;
  };
  logos?: typeof LOGOS;
}

export default function GreetinghrLogoCloud1({
  heading = HEADING,
  logos = LOGOS,
}: GreetinghrLogoCloud1Props) {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-2xl font-medium leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            {heading.line1}
            <br />
            {heading.line2}
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          {logos.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-3 items-center gap-4 sm:grid-cols-4 md:grid-cols-7 md:gap-6"
            >
              {row.map((logo, logoIndex) => (
                <motion.div
                  key={`${rowIndex}-${logoIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * (rowIndex * 2 + Math.floor(logoIndex / 3)),
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex h-16 items-center justify-center px-2 md:h-20"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain grayscale-0 opacity-70 transition-all duration-300 hover:opacity-100"
                      sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
                      unoptimized
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
