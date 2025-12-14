"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#e8e4de",
    headingMuted: "#9ca3af",
    heading: "#111827",
    text: "#6b7280",
  },
  dark: {
    background: "#1f2937",
    headingMuted: "#6b7280",
    heading: "#f9fafb",
    text: "#9ca3af",
  },
} as const;

const IMAGES = {
  avatar1: {
    path: "/registry/userband-com-feature-1/avatar-1.png",
    alt: "User avatar 1",
    prompt: "3D cartoon style avatar, young professional woman with black hair",
  },
  avatar2: {
    path: "/registry/userband-com-feature-1/avatar-2.png",
    alt: "User avatar 2",
    prompt: "3D cartoon style avatar, professional man with glasses",
  },
  avatar3: {
    path: "/registry/userband-com-feature-1/avatar-3.png",
    alt: "User avatar 3",
    prompt: "3D cartoon style avatar, woman with ponytail",
  },
  avatar4: {
    path: "/registry/userband-com-feature-1/avatar-4.png",
    alt: "User avatar 4",
    prompt: "3D cartoon style avatar, young man with casual style",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface UserbandComFeature1Props {
  mode?: "light" | "dark";
}

const painPoints = [
  {
    avatar: IMAGES.avatar1,
    title: '"그 요청 어디서 들어왔어요?"',
    description:
      "이메일, 서포트 위젯, 슬랙, 화상 미팅... 요청들이 각기 다른 채널에서 들어와 팀 내 공유가 어렵습니다.",
  },
  {
    avatar: IMAGES.avatar2,
    title: '"이게 몇번째 답변인지 모르겠어요.."',
    description: "반복되는 질문에 시간을 뺏기고, 담당자는 피로도가 쌓이죠.",
  },
  {
    avatar: IMAGES.avatar3,
    title: '"이 기능을 꼭 넣어달라는 요청이 있었는데.. 잠시만요, 찾아볼게요"',
    description:
      "유저와의 대화에서 있었던 요청을 모두 제대로 기억하기도 어렵습니다.",
  },
  {
    avatar: IMAGES.avatar4,
    title: '"이거 먼저 개발하죠? 유저들이 가장 원하는 것처럼 보여요"',
    description:
      "우선순위를 정량적으로 확인하기 어려워 결국 감으로 판단하기도 합니다.",
  },
];

export default function UserbandComFeature1({
  mode = "light",
}: UserbandComFeature1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 md:py-40"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left Column - Heading */}
            <div className="text-left">
              <motion.h2
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl whitespace-pre-line leading-tight"
                style={{ color: colors.headingMuted }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {`유저의 모든 목소리는
서비스의 자산입니다.`}
              </motion.h2>
              <motion.p
                className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl whitespace-pre-line leading-tight"
                style={{ color: colors.heading }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {`하지만 정리가 안되고
추적이 어렵죠.`}
              </motion.p>
            </div>

            {/* Right Column - Pain Points */}
            <div className="flex flex-col gap-10">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 relative bg-gray-200">
                    <Image
                      src={point.avatar.path}
                      alt={point.avatar.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: colors.heading }}
                    >
                      {point.title}
                    </h3>
                    <p className="text-lg" style={{ color: colors.text }}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
