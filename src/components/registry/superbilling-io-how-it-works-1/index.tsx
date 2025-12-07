"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    cardBg: "rgba(255, 255, 255, 0.1)",
    cardBorder: "rgba(255, 255, 255, 0.2)",
  },
  dark: {
    cardBg: "rgba(255, 255, 255, 0.1)",
    cardBorder: "rgba(255, 255, 255, 0.2)",
  },
} as const;

const IMAGES = {
  plan: {
    path: "/registry/superbilling-io-how-it-works-1/plan.png",
    alt: "요금제 생성 화면",
    prompt:
      "Dark UI showing pricing plan cards with Free (0 won) and Pro (9,900 won) options in Korean",
  },
  pg: {
    path: "/registry/superbilling-io-how-it-works-1/pg.png",
    alt: "PG사 연동 화면",
    prompt:
      "Payment gateway logos grid including Toss, KG, NHN KCP, PayApp, Naverpay in a dark UI",
  },
  integration: {
    path: "/registry/superbilling-io-how-it-works-1/integration.png",
    alt: "SDK 코드 예시",
    prompt:
      "Code snippet showing button onClick with SuperBilling.pay function, dark theme code editor style",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface SuperbillingIoHowItWorks1Props {
  mode?: "light" | "dark";
}

const steps = [
  {
    number: "1",
    title: "요금제 생성",
    description: "클릭만으로 쉽게\n내 서비스에 맞는 요금제를 생성해요.",
    image: IMAGES.plan,
  },
  {
    number: "2",
    title: "PG사 연동",
    description: "원하는 PG사와 연동하세요.\n여러 PG사를 연동할 수도 있어요.",
    image: IMAGES.pg,
  },
  {
    number: "3",
    title: "코드 한 줄로 구독 기능 구현",
    description:
      "제공되는 SDK를 통해 단 한 줄의 코드로\n구독 결제 기능을 구현할 수 있어요.",
    image: IMAGES.integration,
  },
];

export default function SuperbillingIoHowItWorks1({
  mode = "dark",
}: SuperbillingIoHowItWorks1Props) {
  const colors = COLORS[mode];

  return (
    <section className="bg-gray-950">
      <div className="container px-4 py-12 bg-white/20 backdrop-blur rounded-3xl">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="bg-slate-700 text-white w-fit rounded-full px-4 py-2 flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-blue-400 opacity-65 rounded-full" />
            <p className="text-sm md:text-lg font-bold">CONCEPT</p>
            <div className="w-2 h-2 bg-blue-400 opacity-65 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            단 <span className="font-bold">3분</span>만에
            <br />
            <span className="text-2xl md:text-3xl opacity-75">
              구독 결제 시스템 구축 완료
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl backdrop-blur border"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.cardBorder,
              }}
            >
              <div className="text-3xl font-bold mb-4 text-white">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 mb-6 whitespace-pre-line">
                {step.description}
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src={step.image.path}
                  alt={step.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
