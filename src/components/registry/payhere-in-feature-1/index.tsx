"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    accent: "#3B5BDB",
    cardBg: "#F9FAFB",
  },
  dark: {
    background: "#0F172A",
    text: "#F8FAFC",
    textMuted: "#94A3B8",
    accent: "#5C7CFA",
    cardBg: "#1E293B",
  },
} as const;

const IMAGES = {
  posFeature: {
    path: "/scraped/payhere-in-2025-12-14/images/image-4.jpg",
    alt: "POS 일체형 단말기",
    prompt: "Integrated POS terminal with receipt printer in coffee shop setting",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface Feature {
  id: string;
  title: string;
  description: string;
}

interface PayhereInFeature1Props {
  mode?: "light" | "dark";
  sectionImage?: string;
  features?: Feature[];
  onFeatureSelect?: (featureId: string) => void;
}

const defaultFeatures: Feature[] = [
  {
    id: "pos",
    title: "POS 일체형",
    description: "포스가 없어도 단말기에서 바로\n상품을 수정하고, 재고를 파악해요",
  },
  {
    id: "receipt",
    title: "영수증 인쇄",
    description: "우리 매장 로고나 이미지를\n각인하고 브랜딩할 수 있어요",
  },
  {
    id: "kiosk",
    title: "키오스크 모드",
    description: "바쁜 시간에는 셀프 주문으로\n회전율을 올려보세요",
  },
  {
    id: "barcode",
    title: "바코드 스캔",
    description: "카메라로 상품을 인식하고\nQR 간편 결제까지 가능해요",
  },
  {
    id: "sales",
    title: "매출 관리",
    description: "결제 건수, 환불 금액, 건단가 등\n실시간 데이터를 알려드려요",
  },
];

export default function PayhereInFeature1({
  mode = "light",
  sectionImage = IMAGES.posFeature.path,
  features = defaultFeatures,
  onFeatureSelect,
}: PayhereInFeature1Props) {
  const colors = COLORS[mode];
  const [activeFeature, setActiveFeature] = useState(features[0]?.id || "");
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Find which feature is currently most visible
      let closestFeature = features[0]?.id || "";
      let closestDistance = Infinity;

      features.forEach((feature) => {
        const element = featureRefs.current[feature.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportHeight * 0.4);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestFeature = feature.id;
          }
        }
      });

      if (closestFeature !== activeFeature) {
        setActiveFeature(closestFeature);
        onFeatureSelect?.(closestFeature);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeFeature, features, onFeatureSelect]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Sticky image section */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-6 lg:p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={sectionImage}
              alt="POS 단말기 기능"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Scrollable features section */}
        <div className="lg:w-1/2 py-12 lg:py-24 px-6 lg:px-12">
          <div className="max-w-md mx-auto space-y-24 lg:space-y-40">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                ref={(el) => {
                  featureRefs.current[feature.id] = el;
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`transition-opacity duration-300 ${
                  activeFeature === feature.id ? "opacity-100" : "opacity-40"
                }`}
              >
                <h3
                  className="text-xl lg:text-2xl font-bold mb-3"
                  style={{ color: colors.text }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm lg:text-base whitespace-pre-line leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-gray-100 p-4 lg:hidden">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            className="flex-1 py-3 px-4 rounded-full border-2 border-gray-900 text-gray-900 font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            단말기 필요하시면, 빠른 상담
          </button>
          <button
            className="flex-1 py-3 px-4 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            네이버 플레이스 연동 단말기
          </button>
        </div>
      </div>
    </section>
  );
}
