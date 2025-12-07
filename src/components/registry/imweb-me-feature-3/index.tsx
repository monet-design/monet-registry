"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#00BEFD", // imweb 브랜드 블루
    cardBlue: "#E8F4FF", // 디자인 카드 배경
    cardBeige: "#F5F3EF", // 운영 카드 배경
    cardGreen: "#4ADE80", // 마케팅 카드 배경
    textPrimary: "#15181E",
    textSecondary: "#525458",
    background: "#FFFFFF",
  },
  dark: {
    accent: "#00BEFD",
    cardBlue: "#1E3A5F",
    cardBeige: "#2A2825",
    cardGreen: "#166534",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    background: "#0F172A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Palette,
  Type,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  MessageCircle,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  type: "design" | "operation" | "marketing";
}

interface ImwebMeFeature3Props {
  mode?: "light" | "dark";
  heading?: string;
  features?: FeatureItem[];
}

// Design preview card component
function DesignPreview() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#E8F4FF] to-[#D4ECFF] rounded-xl p-4 overflow-hidden">
      {/* Mock browser window */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Browser header */}
        <div className="bg-gray-100 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded px-2 py-0.5 text-[10px] text-gray-400">
            mysite.imweb.me
          </div>
        </div>
        {/* Browser content - editor UI */}
        <div className="p-3 space-y-2">
          <div className="h-6 bg-[#00BEFD] rounded-md w-24" />
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
          <div className="flex gap-2 mt-3">
            <div className="h-8 flex-1 bg-gray-100 rounded border-2 border-dashed border-gray-300" />
            <div className="h-8 flex-1 bg-gray-100 rounded border-2 border-dashed border-gray-300" />
          </div>
        </div>
      </div>
      {/* Floating design elements */}
      <motion.div
        className="absolute -right-2 top-8 bg-white rounded-lg shadow-md p-2"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-[#00BEFD]" />
          <Type className="w-4 h-4 text-gray-400" />
        </div>
      </motion.div>
    </div>
  );
}

// Operation preview card component
function OperationPreview() {
  const menuItems = [
    { icon: ShoppingCart, label: "주문관리", active: true },
    { icon: Users, label: "회원관리", active: false },
    { icon: Package, label: "상품관리", active: false },
    { icon: BarChart3, label: "통계", active: false },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#F5F3EF] to-[#EDE9E3] rounded-xl p-4 overflow-hidden">
      {/* Mock dashboard */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Sidebar */}
        <div className="bg-gray-50 w-24 p-2 space-y-1">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded text-[9px] ${
                item.active
                  ? "bg-[#00BEFD] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-3 h-3" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        {/* Content area */}
        <div className="flex-1 p-2">
          <div className="h-2 bg-gray-200 rounded w-16 mb-2" />
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 p-1 bg-gray-50 rounded">
                <div className="w-6 h-6 bg-gray-200 rounded" />
                <div className="flex-1">
                  <div className="h-1.5 bg-gray-200 rounded w-12" />
                  <div className="h-1 bg-gray-100 rounded w-8 mt-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Marketing preview card component
function MarketingPreview() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#4ADE80] to-[#22C55E] rounded-xl p-4 overflow-hidden">
      {/* Social media icons */}
      <div className="flex items-center justify-center gap-3 h-full">
        {/* Kakao */}
        <motion.div
          className="w-12 h-12 bg-[#FEE500] rounded-full flex items-center justify-center shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <MessageCircle className="w-6 h-6 text-[#3C1E1E]" />
        </motion.div>
        {/* Instagram */}
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </motion.div>
        {/* TikTok */}
        <motion.div
          className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </motion.div>
        {/* Naver */}
        <motion.div
          className="w-12 h-12 bg-[#03C75A] rounded-full flex items-center justify-center shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-white font-bold text-lg">N</span>
        </motion.div>
      </div>
    </div>
  );
}

const defaultFeatures: FeatureItem[] = [
  {
    title: "디자인이 쉬워요",
    description:
      "600개 이상의 디자인을 제공해요.\n원하는 대로 커스텀하여 나만의 디자인을 만들 수 있어요.",
    type: "design",
  },
  {
    title: "운영이 쉬워요",
    description:
      "상품 판매, 회원 관리까지\n온라인으로 쉽게 운영하세요. 내게 딱 맞는 기능을 담았어요.",
    type: "operation",
  },
  {
    title: "마케팅이 쉬워요",
    description:
      "마케팅도 비즈니스의 핵심이니까.\n쿠폰부터 SNS 연동까지 마케팅을 도와드려요.",
    type: "marketing",
  },
];

export default function ImwebMeFeature3({
  mode = "light",
  heading = "시작부터 성장까지\n쉬워집니다",
  features = defaultFeatures,
}: ImwebMeFeature3Props) {
  const colors = COLORS[mode];

  const getPreviewComponent = (type: FeatureItem["type"]) => {
    switch (type) {
      case "design":
        return <DesignPreview />;
      case "operation":
        return <OperationPreview />;
      case "marketing":
        return <MarketingPreview />;
    }
  };

  return (
    <section
      className="relative w-full py-20 lg:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
          {/* Left side - Heading */}
          <motion.div
            className="lg:sticky lg:top-32 lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line"
              style={{ color: colors.textPrimary }}
            >
              {heading}
            </h2>
          </motion.div>

          {/* Right side - Feature cards */}
          <div className="lg:w-2/3 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row gap-6 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Preview card */}
                <div className="w-full sm:w-48 h-32 sm:h-36 flex-shrink-0">
                  {getPreviewComponent(feature.type)}
                </div>

                {/* Text content */}
                <div className="flex-1 pt-2">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: colors.textSecondary }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
