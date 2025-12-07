"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const TAB_COLORS = [
  { bg: "#9640e6", text: "#FFFFFF" },
  { bg: "#5e523a", text: "#FFFFFF" },
  { bg: "#048C73", text: "#FFFFFF" },
  { bg: "#5F880A", text: "#FFFFFF" },
] as const;

const IMAGES = {
  subscription: {
    path: "/registry/superbilling-io-feature-4/subscription.png",
    alt: "구독 관리 페이지",
    prompt: "Subscription management UI with Korean text, showing subscription status badge, next payment date, and a list of details on light gray background",
  },
  payment: {
    path: "/registry/superbilling-io-feature-4/payment.png",
    alt: "결제 내역 페이지",
    prompt: "Payment history UI with Korean text, showing a list of past payments with dates and amounts",
  },
  invoice: {
    path: "/registry/superbilling-io-feature-4/invoice.png",
    alt: "인보이스 페이지",
    prompt: "Invoice management UI with Korean text, showing invoice details and download options",
  },
  widget: {
    path: "/registry/superbilling-io-feature-4/widget.png",
    alt: "Embed 위젯",
    prompt: "Embeddable widget preview showing subscription UI component that can be integrated into websites",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface SuperbillingIoFeature4Props {
  mode?: "light" | "dark";
}

const tabs = [
  {
    number: 1,
    title: "구독 관리 페이지",
    description: "구독 관리에 필요한 모든 기능을 제공해요.\n남은 기간, 결제 예정일을 확인하고, 결제수단을 변경하고, 구독을 취소할 수 있어요.",
    image: IMAGES.subscription,
  },
  {
    number: 2,
    title: "결제 내역 페이지",
    description: "모든 결제 내역을 한눈에 확인하세요.",
    image: IMAGES.payment,
  },
  {
    number: 3,
    title: "인보이스 페이지",
    description: "세금계산서와 인보이스를 쉽게 관리하세요.",
    image: IMAGES.invoice,
  },
  {
    number: 4,
    title: "Embed 위젯 지원",
    description: "웹사이트에 바로 삽입할 수 있는 위젯을 제공합니다.",
    image: IMAGES.widget,
  },
];

export default function SuperbillingIoFeature4({
  mode = "dark",
}: SuperbillingIoFeature4Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-gray-950">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col w-fit"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white">
            노코드 결제 UI 사용하기
          </h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed text-white/90">
            슈퍼빌링과 함께라면, UI도 구현할 필요 없어요.
            <br />
            구독결제와 관련된 필수 화면들도 모두 노코드로 제공해요.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tabs */}
          <div className="flex flex-col space-y-4">
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveTab(index)}
                className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer relative overflow-hidden ${
                  activeTab === index ? "ring-2 ring-white ring-opacity-60" : "opacity-80 hover:opacity-100"
                }`}
                style={{
                  backgroundColor: TAB_COLORS[index].bg,
                  color: TAB_COLORS[index].text,
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-3">
                    {tab.number}. {tab.title}
                  </h3>
                  <AnimatePresence>
                    {activeTab === index && tab.description && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-base opacity-85 whitespace-pre-line"
                      >
                        {tab.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preview Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={tabs[activeTab].image.path}
                  alt={tabs[activeTab].image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
