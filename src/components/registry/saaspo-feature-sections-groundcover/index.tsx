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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#F97316", // 오렌지
    accentHover: "#EA580C", // 오렌지 호버
    // 배경색
    background: "#F7F5F0", // 연한 베이지
    cardBackground: "#F5D77E", // 노란색 카드 배경
    // 다트 타겟 색상
    dartYellow: "#F5D77E",
    dartOrange: "#F97316",
    dartPurple: "#7C3AED",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
    background: "#1F1F1F",
    cardBackground: "#3D3520",
    dartYellow: "#F5D77E",
    dartOrange: "#F97316",
    dartPurple: "#A78BFA",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  networkMap: {
    path: "/registry/saaspo-feature-sections-groundcover/screenshot.jpg",
    alt: "Network Map UI showing K8s infrastructure visualization",
    prompt: `A clean dashboard screenshot showing a network map visualization with nodes and connections, sidebar navigation, and filtering options`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Dart Target SVG Component
function DartTarget({ colors }: { colors: (typeof COLORS)[keyof typeof COLORS] }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring - orange */}
      <circle cx="60" cy="60" r="55" fill={colors.dartOrange} />
      {/* Middle ring - yellow */}
      <circle cx="60" cy="60" r="40" fill={colors.dartYellow} />
      {/* Inner ring - orange */}
      <circle cx="60" cy="60" r="25" fill={colors.dartOrange} />
      {/* Center - yellow */}
      <circle cx="60" cy="60" r="12" fill={colors.dartYellow} />

      {/* Dart arrow */}
      <g transform="rotate(-45, 60, 60)">
        {/* Arrow shaft */}
        <rect x="55" y="10" width="10" height="50" fill={colors.dartPurple} rx="2" />
        {/* Arrow tip */}
        <polygon points="60,60 50,70 70,70" fill={colors.dartPurple} />
        {/* Arrow feathers */}
        <polygon points="50,10 55,10 55,25 45,15" fill={colors.dartPurple} opacity="0.8" />
        <polygon points="70,10 65,10 65,25 75,15" fill={colors.dartPurple} opacity="0.8" />
      </g>
    </svg>
  );
}

// Network Map Placeholder Component
function NetworkMapPlaceholder() {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-800">groundcover</span>
          <span className="text-sm text-gray-500">Network Map</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">demo</span>
          <span className="text-xs text-gray-400">Last 48 hours</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex h-[calc(100%-52px)]">
        {/* Sidebar */}
        <div className="w-48 border-r border-gray-100 p-3">
          <div className="space-y-2">
            {["Workloads", "Infrastructure", "Map", "Issues", "API Catalog", "Traces", "Logs", "K8s Events", "Monitors"].map((item, i) => (
              <div key={i} className={`text-xs py-1.5 px-2 rounded ${i === 2 ? 'bg-amber-100 text-amber-700 font-medium' : 'text-gray-600'}`}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Filters sidebar */}
        <div className="w-40 border-r border-gray-100 p-3">
          <div className="text-xs text-gray-500 mb-2">&lt;&lt; Hide Filters</div>
          <div className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded mb-3 inline-block">106 results</div>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-medium text-gray-700 mb-1">Connection Status</div>
              <div className="text-xs text-gray-500">OK: 95</div>
              <div className="text-xs text-gray-500">Error: 11</div>
            </div>
            <div>
              <div className="text-xs font-medium text-gray-700 mb-1">Protocol</div>
              <div className="text-xs text-gray-500">gRPC: 31</div>
              <div className="text-xs text-gray-500">HTTP: 29</div>
            </div>
          </div>
        </div>

        {/* Map area */}
        <div className="flex-1 p-4 relative bg-gray-50">
          {/* Network nodes visualization placeholder */}
          <div className="absolute inset-4">
            {/* Simulated network nodes */}
            {[
              { x: 20, y: 30, label: "api-service" },
              { x: 45, y: 20, label: "config-intake" },
              { x: 70, y: 35, label: "demo-db" },
              { x: 30, y: 55, label: "prometheus" },
              { x: 55, y: 50, label: "node-exporter" },
              { x: 80, y: 55, label: "spring-boot" },
              { x: 25, y: 75, label: "redis" },
              { x: 60, y: 75, label: "grafana" },
              { x: 85, y: 75, label: "postgres" },
            ].map((node, i) => (
              <div
                key={i}
                className="absolute bg-white border border-gray-200 rounded px-2 py-1 text-[9px] text-gray-600 shadow-sm"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                {node.label}
              </div>
            ))}

            {/* Connection lines would go here as SVG in production */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="20%" y1="30%" x2="45%" y2="20%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="45%" y1="20%" x2="70%" y2="35%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="30%" y1="55%" x2="55%" y2="50%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="55%" y1="50%" x2="80%" y2="55%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="20%" y1="30%" x2="30%" y2="55%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="70%" y1="35%" x2="80%" y2="55%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="30%" y1="55%" x2="25%" y2="75%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="55%" y1="50%" x2="60%" y2="75%" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="80%" y1="55%" x2="85%" y2="75%" stroke="#E5E7EB" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Feature {
  title: string;
  subtitle: string;
  description: string;
}

const defaultFeatures: Feature[] = [
  {
    title: "100% Visibility,",
    subtitle: "with unprecedented detail.",
    description:
      "Deploy anywhere, within minutes & cover your entire K8s stack instantly with no code changes using the superpowers of eBPF instrumentation.",
  },
  {
    title: "Detect & solve",
    subtitle: "bleeding issues, effortlessly.",
    description:
      "Troubleshoot & improve your application and infrastructure performance with K8s context and mind-blowing data granularity.",
  },
  {
    title: "Take control",
    subtitle: "of your data, all in-cloud.",
    description:
      "Our unique inCloud architecture keeps your data private, secured & under your control without ever leaving your cloud premises.",
  },
];

interface SaaspoFeatureSectionsGroundcoverProps {
  mode?: "light" | "dark";
  headline?: string;
  features?: Feature[];
  learnMoreText?: string;
  onLearnMore?: () => void;
}

export default function SaaspoFeatureSectionsGroundcover({
  mode = "light",
  headline = "The APM Easy button is here.",
  features = defaultFeatures,
  learnMoreText = "Learn more",
  onLearnMore,
}: SaaspoFeatureSectionsGroundcoverProps) {
  const colors = COLORS[mode];
  const [activeFeature, setActiveFeature] = useState(0);

  const handlePrev = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with title and dart target */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {headline}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <DartTarget colors={colors} />
          </motion.div>
        </div>

        {/* Feature columns with navigation */}
        <div className="relative mb-12 md:mb-16">
          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 rounded-full transition-colors ${
              mode === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-400 hover:text-gray-900"
            }`}
            aria-label="Previous feature"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 rounded-full transition-colors ${
              mode === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-400 hover:text-gray-900"
            }`}
            aria-label="Next feature"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${
                  index !== activeFeature ? "hidden md:block" : ""
                }`}
              >
                <h3
                  className={`text-lg md:text-xl font-semibold mb-1 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <h4
                  className={`text-lg md:text-xl font-semibold mb-4 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.subtitle}
                </h4>
                <p
                  className={`text-sm md:text-base leading-relaxed ${
                    mode === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile pagination dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeFeature
                    ? "bg-gray-900"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Network Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
          style={{ backgroundColor: colors.cardBackground }}
        >
          {/* Learn more button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onLearnMore}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium text-sm transition-colors hover:opacity-90"
              style={{ backgroundColor: colors.accent }}
            >
              {learnMoreText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Screenshot container */}
          <div className="p-6 md:p-8 pt-16">
            <div className="aspect-[16/9] w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
              <NetworkMapPlaceholder />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
