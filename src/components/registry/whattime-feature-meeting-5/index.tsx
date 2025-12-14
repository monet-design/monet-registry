"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
    accentLight: "#E6F7F2",
  },
  dark: {
    accent: "#00C896",
    accentLight: "#0D3D2D",
  },
} as const;

const IMAGES = {
  meetingTypes: [
    {
      title: "1:1 예약",
      description: "1명의 주최자가 1명의 예약자와 만날 경우",
      example: "예) 고객 인터뷰, 사용법 설명, 세일즈 미팅 등",
      imagePath: "/scraped/whattime-co-kr-2025-12-14/images/image-76.png",
      imageAlt: "1:1 예약",
    },
    {
      title: "그룹 미팅",
      description: "1명의 주최자가 다수의 예약자와 만날 경우",
      example: "예) 그룹 교육, 온라인 교육, 온보딩 교육 등",
      imagePath: "/scraped/whattime-co-kr-2025-12-14/images/image-77.png",
      imageAlt: "그룹 미팅",
    },
    {
      title: "공동주최",
      badge: "팀기능",
      description:
        "2명 이상의 주최자와 1명의 예약자가 참여하는 예약 방식입니다.",
      example: "ex) 다수의 면접관과 1명의 면접자 인터뷰",
      imagePath: "/scraped/whattime-co-kr-2025-12-14/images/image-78.png",
      imageAlt: "공동주최",
    },
    {
      title: "순환주최",
      badge: "팀기능",
      description:
        "주최자 중 1명과 1명의 예약자가 만날 때 주최자가 돌아가며 1명씩 참석하는 기능입니다.",
      example: "ex) 상담사 배정",
      imagePath: "/scraped/whattime-co-kr-2025-12-14/images/image-79.png",
      imageAlt: "순환주최",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface MeetingType {
  title: string;
  badge?: string;
  description: string;
  example: string;
  imagePath: string;
  imageAlt: string;
}

interface WhattimeFeatureMeeting5Props {
  mode?: "light" | "dark";
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
  meetingTypes?: MeetingType[];
}

export default function WhattimeFeatureMeeting5({
  mode = "light",
  subtitle = "미팅 기능",
  title = "내가 원하는 미팅을",
  highlightedText = "쉽고 빠르게",
  description = "다양하고 복잡한 형태의 미팅 유형을 쉽고 빠르게 만드세요.\n한 번의 링크 공유로 편리하게 사용할 수 있어요.",
  meetingTypes = IMAGES.meetingTypes as unknown as MeetingType[],
}: WhattimeFeatureMeeting5Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}{" "}
            <span style={{ color: colors.accent }}>{highlightedText}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        {/* Meeting Types Grid */}
        <div className="flex flex-wrap gap-6 justify-center justify-items-center w-fit mx-auto">
          {meetingTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-white rounded-sm border border-[#e2e6e6] flex flex-col justify-between overflow-hidden md:w-[408px] md:h-[411px] md:shrink-0 ${
                index === 1
                  ? "md:mt-[60px]"
                  : index === 2
                  ? "md:mt-[-60px]"
                  : ""
              }`}
              style={{ boxShadow: "0 5px 30px 0 rgba(6, 75, 69, 0.12)" }}
            >
              {/* Title & Description Wrapper */}
              <div className="p-6 pb-0 md:p-10 md:pb-0">
                {/* Title with Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {type.title}
                  </h3>
                  {type.badge && (
                    <span
                      className="px-2 py-1 text-sm font-medium"
                      style={{ backgroundColor: colors.accent, color: "white" }}
                    >
                      {type.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-1 font-medium">
                  {type.description}
                </p>
                <p className="text-gray-500 text-sm">{type.example}</p>
              </div>

              {/* Illustration Image */}
              <div className="flex items-end justify-end mt-[38px] pr-2">
                <Image
                  src={type.imagePath}
                  alt={type.imageAlt}
                  width={240}
                  height={230}
                  className="w-[240px] h-[92px] md:w-[220px] md:h-[230px] object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
