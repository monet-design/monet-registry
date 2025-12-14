"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
  },
} as const;

const IMAGES = {
  topBrands: [
    { path: "/scraped/torder-com-2025-12-14/images/image-26.png", alt: "교촌치킨" },
    { path: "/scraped/torder-com-2025-12-14/images/image-27.png", alt: "국수나무" },
    { path: "/scraped/torder-com-2025-12-14/images/image-28.png", alt: "명륜진사갈비" },
  ],
  bottomBrands: [
    { path: "/scraped/torder-com-2025-12-14/images/image-42.png", alt: "족발야시장" },
    { path: "/scraped/torder-com-2025-12-14/images/image-43.png", alt: "백종원골목식당" },
    { path: "/scraped/torder-com-2025-12-14/images/image-44.png", alt: "79년수육국밥" },
    { path: "/scraped/torder-com-2025-12-14/images/image-45.png", alt: "한신포차" },
    { path: "/scraped/torder-com-2025-12-14/images/image-46.png", alt: "시선" },
    { path: "/scraped/torder-com-2025-12-14/images/image-47.png", alt: "상무초밥" },
    { path: "/scraped/torder-com-2025-12-14/images/image-48.png", alt: "Misoya" },
    { path: "/scraped/torder-com-2025-12-14/images/image-49.png", alt: "삼선회꾀" },
    { path: "/scraped/torder-com-2025-12-14/images/image-50.png", alt: "B맥주" },
    { path: "/scraped/torder-com-2025-12-14/images/image-51.png", alt: "문어회쭈" },
    { path: "/scraped/torder-com-2025-12-14/images/image-52.png", alt: "면식당" },
    { path: "/scraped/torder-com-2025-12-14/images/image-53.png", alt: "엽기집" },
    { path: "/scraped/torder-com-2025-12-14/images/image-54.png", alt: "1943" },
    { path: "/scraped/torder-com-2025-12-14/images/image-55.png", alt: "미몽" },
    { path: "/scraped/torder-com-2025-12-14/images/image-56.png", alt: "대담히" },
    { path: "/scraped/torder-com-2025-12-14/images/image-57.png", alt: "차이차이" },
    { path: "/scraped/torder-com-2025-12-14/images/image-58.png", alt: "카츠공방" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface TorderComLogoCloud2Props {
  mode?: "light" | "dark";
}

export default function TorderComLogoCloud2({
  mode = "light",
}: TorderComLogoCloud2Props) {
  const colors = COLORS[mode];

  return (
    <section className={`w-full py-20 px-4 ${mode === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold"
            style={{ color: colors.subtext }}
          >
            이유 있는 선택
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2"
            style={{ color: colors.text }}
          >
            <span style={{ color: colors.accent }}>탑 브랜드</span>는 티오더를 사용합니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: colors.subtext }}
          >
            모두가 아는 프랜차이즈, 성공한 매장들은 왜 티오더를 사용할까요?<br />
            브랜드의 선택에서 드러나는 우수성과 신뢰성, 티오더는 확실한 차이를 만듭니다.
          </motion.p>
        </div>

        {/* Featured Brands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {IMAGES.topBrands.map((brand, index) => (
            <div
              key={index}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden group"
            >
              <Image
                src={brand.path}
                alt={brand.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Logo Marquee Row 1 */}
        <div className="overflow-hidden mb-4">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...IMAGES.bottomBrands, ...IMAGES.bottomBrands].map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-4 py-3 rounded-xl border ${
                  mode === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <Image
                  src={logo.path}
                  alt={logo.alt}
                  width={126}
                  height={44}
                  className="h-[44px] w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo Marquee Row 2 (reverse) */}
        <div className="overflow-hidden mb-4">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...IMAGES.bottomBrands.slice().reverse(), ...IMAGES.bottomBrands.slice().reverse()].map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-4 py-3 rounded-xl border ${
                  mode === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <Image
                  src={logo.path}
                  alt={logo.alt}
                  width={126}
                  height={44}
                  className="h-[44px] w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo Marquee Row 3 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...IMAGES.bottomBrands, ...IMAGES.bottomBrands].map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-4 py-3 rounded-xl border ${
                  mode === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <Image
                  src={logo.path}
                  alt={logo.alt}
                  width={126}
                  height={44}
                  className="h-[44px] w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
