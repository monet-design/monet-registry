"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00C853",
    cardBg: "#1a1a1a",
  },
  dark: {
    accent: "#00E676",
    cardBg: "#1a1a1a",
  },
} as const;

const IMAGES = {
  card1: {
    path: "/scraped/flex-team-2025-12-14/images/image-3.png",
    alt: "HR 데이터 관리 화면",
  },
  card2: {
    path: "/scraped/flex-team-2025-12-14/images/image-4.png",
    alt: "AI 데이터 연결 시각화",
  },
  card3: {
    path: "/scraped/flex-team-2025-12-14/images/image-5.png",
    alt: "성장 그래프",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import Link from "next/link";

interface FlexTeamFeature2Props {
  mode?: "light" | "dark";
}

export default function FlexTeamFeature2({
  mode = "light",
}: FlexTeamFeature2Props) {
  const colors = COLORS[mode];

  const cards = [
    {
      image: IMAGES.card1,
      title: "담당자 의존적인 조직 운영과 반복 업무는 팀의 성장과 몰입을 가로막는 보이지 않는 장애물입니다.",
    },
    {
      image: IMAGES.card2,
      title: "flex는 흩어진 HR 데이터를 한 곳에 모아 연결하고, AI로 자동화하고 맥락을 더해, 문제를 근본부터 해결합니다.",
    },
    {
      image: IMAGES.card3,
      title: "이제 팀은 정보의 불균형과 반복 업무 부담에서 벗어나, 효율을 넘어 더 큰 성장을 위해 몰입할 수 있습니다.",
    },
  ];

  return (
    <section className="w-full bg-white px-8 py-20 lg:px-16">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          flex는 조직이 일하는
          <br />
          방식을 바꿉니다.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="p-6">
              <p className="text-base leading-relaxed text-white/90">
                {card.title}
              </p>
            </div>
            <div className="relative h-64 w-full">
              <Image
                src={card.image.path}
                alt={card.image.alt}
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
