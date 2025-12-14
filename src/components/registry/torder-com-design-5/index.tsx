"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
    bg: "#f5f5f5",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
    bg: "#0a0a0a",
  },
} as const;

const DESIGN_COLORS = [
  { id: "black", name: "블랙", color: "#1a1a1a" },
  { id: "gold", name: "골드", color: "#D4AF37" },
  { id: "roseGold", name: "로즈골드", color: "#B76E79" },
  { id: "silver", name: "실버", color: "#C0C0C0" },
  { id: "bronze", name: "브론즈", color: "#CD7F32" },
];

const SHOWCASE_IMAGES = [
  "/scraped/torder-com-2025-12-14/images/image-25.png",
  "/scraped/torder-com-2025-12-14/images/image-26.png",
  "/scraped/torder-com-2025-12-14/images/image-27.png",
  "/scraped/torder-com-2025-12-14/images/image-28.png",
  "/scraped/torder-com-2025-12-14/images/image-29.png",
];

const SHOWCASE_IMAGES_ROW2 = [
  "/scraped/torder-com-2025-12-14/images/image-30.png",
  "/scraped/torder-com-2025-12-14/images/image-31.png",
  "/scraped/torder-com-2025-12-14/images/image-32.png",
  "/scraped/torder-com-2025-12-14/images/image-33.png",
  "/scraped/torder-com-2025-12-14/images/image-34.png",
  "/scraped/torder-com-2025-12-14/images/image-35.png",
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

interface TorderComDesign5Props {
  mode?: "light" | "dark";
}

export default function TorderComDesign5({
  mode = "light",
}: TorderComDesign5Props) {
  const colors = COLORS[mode];
  const [selectedColor, setSelectedColor] = useState(DESIGN_COLORS[0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Top Section - 3D Model Preview */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: colors.accent }}
          >
            차별화된 디자인과 컬러
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
            style={{ color: colors.text }}
          >
            매장을 더 <span style={{ color: colors.accent }}>돋보이게</span>
          </motion.h2>
        </div>

        {/* Color Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="mb-4 text-lg" style={{ color: colors.text }}>
            티오더 이동형 거치대,{" "}
            <span style={{ color: colors.accent }} className="font-bold">
              {selectedColor.name}
            </span>{" "}
            색상
          </p>
          <div className="flex justify-center gap-3">
            {DESIGN_COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 rounded-full border-4 transition-all ${
                  selectedColor.id === color.id
                    ? "border-red-500 scale-110"
                    : mode === "dark"
                    ? "border-gray-700"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.color }}
                aria-label={color.name}
              />
            ))}
          </div>
        </motion.div>

        {/* 3D Model Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative w-full max-w-2xl mx-auto aspect-square"
        >
          <div
            className={`w-full h-full rounded-3xl flex items-center justify-center ${
              mode === "dark" ? "bg-gray-900" : "bg-gray-200"
            }`}
          >
            <div className="text-center">
              <div
                className="w-32 h-32 mx-auto mb-4 rounded-2xl"
                style={{ backgroundColor: selectedColor.color }}
              />
              <p className="text-lg font-semibold" style={{ color: colors.text }}>
                티오더 태블릿
              </p>
              <p className="text-sm" style={{ color: colors.subtext }}>
                {selectedColor.name} 색상
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section - Customization Showcase */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: colors.accent }}
          >
            우리 매장에 딱
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
            style={{ color: colors.text }}
          >
            5가지 거치대 컬러 <br />
            524개 디자인 조합
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg mb-8"
            style={{ color: colors.subtext }}
          >
            거치대 형태와 컬러, 폭넓은 테마를 조합해 만드는 나만의 커스텀 태블릿. <br />
            우리 매장에 어울리는 티오더 태블릿이 궁금하다면?
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="/interview/case"
            className="inline-block px-8 py-4 rounded-full text-white font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: colors.accent }}
          >
            티오더 매장 둘러보기
          </motion.a>
        </div>

        {/* Scrolling Image Showcase */}
        <div className="space-y-6 overflow-hidden">
          {/* Row 1 - Left to Right */}
          <motion.div
            className="flex gap-4"
            style={{ x: y }}
          >
            {SHOWCASE_IMAGES.concat(SHOWCASE_IMAGES).map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Design showcase ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Row 2 - Right to Left */}
          <motion.div
            className="flex gap-4"
            style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          >
            {SHOWCASE_IMAGES_ROW2.concat(SHOWCASE_IMAGES_ROW2).map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Design showcase row 2 ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
