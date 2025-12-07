"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Zap, Sparkles, Crown, Star } from "lucide-react";

interface VoosterAiKoPricing4Props {
  mode?: "light" | "dark";
}

const plans = [
  {
    name: "Free",
    badge: "평생 무료",
    badgeStyle: "bg-gray-900 text-white",
    icon: Zap,
    iconColor: "text-slate-600",
    price: "$0",
    originalPrice: null,
    discount: null,
    period: "/월",
    description: "개인 프로젝트를 시작하기에 완벽합니다",
    features: ["월 100 크레딧", "최대 3개 프로젝트", "기본 AI 모델", "커뮤니티 지원"],
    credits: "100",
    buttonText: "무료로 시작하기",
    highlighted: false,
    dark: false,
  },
  {
    name: "Pro",
    badge: "인기",
    badgeStyle: "bg-white text-gray-900 border border-black",
    icon: Sparkles,
    iconColor: "text-blue-600",
    price: "$18",
    originalPrice: "$20",
    discount: "10% 할인",
    period: "/월",
    description: "더 많은 기능이 필요한 개발자를 위해",
    features: [
      "월 500 크레딧",
      "무제한 프로젝트",
      "고급 AI (Claude / Gemini)",
      "디자이너 에이전트",
    ],
    credits: "500",
    buttonText: "Pro 시작하기",
    highlighted: false,
    dark: false,
  },
  {
    name: "Max x5",
    badge: "추천",
    badgeStyle: "bg-gray-900 text-white",
    icon: Crown,
    iconColor: "text-amber-600",
    price: "$80",
    originalPrice: "$100",
    discount: "20% 할인",
    period: "/월",
    description: "프로페셔널한 개발을 위한 선택",
    features: [
      "월 2,500 크레딧",
      "향상된 사용량",
      "최상위 AI (Opus / Grok4)",
      "이미지 첨부 기능",
    ],
    credits: "2,500",
    buttonText: "Max x5 시작하기",
    highlighted: true,
    dark: true,
  },
  {
    name: "Max x20",
    badge: "최고 성능",
    badgeStyle: "bg-white text-gray-900 border border-black",
    icon: Crown,
    iconColor: "text-purple-600",
    price: "$140",
    originalPrice: "$200",
    discount: "30% 할인",
    period: "/월",
    description: "무제한에 가까운 사용을 원하는 분들을 위해",
    features: [
      "월 10,000 크레딧",
      "프리미엄 사용량",
      "최상위 AI (Opus / Grok4)",
      "최대 컨텍스트 윈도우",
    ],
    credits: "10,000",
    buttonText: "Max x20 시작하기",
    highlighted: true,
    dark: true,
  },
];

export default function VoosterAiKoPricing4({
  mode = "light",
}: VoosterAiKoPricing4Props) {
  const colors = COLORS[mode];
  const [billingType, setBillingType] = useState<"individual" | "team">("individual");

  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-6 inline-flex items-center gap-1 rounded-md border border-gray-800 bg-gray-900 px-2 py-0.5 text-xs font-medium text-white transition-colors hover:bg-gray-800">
            <Sparkles className="mr-2 h-4 w-4" />
            가격
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            심플하고 투명한 가격
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            모든 기능을 제한 없이 사용하세요
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex rounded-full bg-slate-100 p-1">
            <button
              onClick={() => setBillingType("individual")}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-6 sm:text-sm ${
                billingType === "individual"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              개인
            </button>
            <button
              onClick={() => setBillingType("team")}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-6 sm:text-sm ${
                billingType === "team"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              팀
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <div
                  className={`group relative flex flex-col gap-6 overflow-visible rounded-xl py-6 shadow-sm transition-all duration-500 ${
                    plan.dark
                      ? "border-2 border-gray-900 bg-gray-900 text-white hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-900/30 lg:scale-105"
                      : "border border-gray-400 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-gray-200"
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform sm:-top-4">
                    <span
                      className={`inline-flex items-center rounded-md px-4 py-1.5 text-xs font-medium shadow-lg sm:px-6 sm:py-2 sm:text-sm ${plan.badgeStyle}`}
                    >
                      {plan.badge === "추천" && <Crown className="mr-2 h-4 w-4" />}
                      {plan.badge === "최고 성능" && <Star className="mr-2 h-4 w-4" />}
                      {plan.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="relative px-6 pb-6 pt-10 text-center sm:pb-8 sm:pt-12">
                    <div className="mb-4 flex justify-center">
                      <Icon className={`h-5 w-5 ${plan.iconColor}`} />
                    </div>
                    <div
                      className={`mb-2 text-xl font-bold sm:text-2xl ${
                        plan.dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </div>

                    {/* Price */}
                    <div className="mt-6">
                      {plan.originalPrice && (
                        <div className="mb-2 flex items-center justify-center space-x-2">
                          <span className="text-2xl text-gray-400 line-through">
                            {plan.originalPrice}
                          </span>
                          <span className="rounded-md border-0 bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                            {plan.discount}
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline justify-center space-x-2">
                        <span
                          className={`text-4xl font-bold sm:text-5xl md:text-6xl ${
                            plan.dark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`text-sm sm:text-base md:text-lg ${
                            plan.dark ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`mt-4 text-sm ${
                        plan.dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {plan.description}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                    <ul className="space-y-3 sm:space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2 sm:items-center sm:space-x-3"
                        >
                          <div
                            className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full sm:h-5 sm:w-5 ${
                              plan.dark ? "bg-white" : "bg-gray-900"
                            }`}
                          >
                            <Check
                              className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                                plan.dark ? "text-gray-900" : "text-white"
                              }`}
                            />
                          </div>
                          <span
                            className={`text-xs sm:text-sm ${
                              plan.dark ? "text-gray-200" : "text-gray-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Credits */}
                    <div className="mt-6 border-t border-slate-200 pt-6">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                        <span
                          className={`text-xs sm:text-sm ${
                            plan.dark ? "text-gray-300" : "text-slate-600"
                          }`}
                        >
                          월간 크레딧
                        </span>
                        <span
                          className={`text-xs font-medium sm:text-sm ${
                            plan.dark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {plan.credits} 크레딧
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center px-6 pb-6 sm:px-8 sm:pb-8">
                    <button
                      className={`h-10 w-full rounded-md px-6 text-sm font-medium transition-all duration-300 hover:scale-[1.02] sm:h-12 sm:text-base ${
                        plan.dark
                          ? "border-0 bg-white text-gray-900 hover:bg-gray-100"
                          : "border-0 text-white"
                      }`}
                      style={!plan.dark ? { backgroundColor: colors.accent } : undefined}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-2 text-sm text-slate-600">팀과 함께 사용하시나요?</p>
          <button className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800">
            팀 플랜 보기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
