"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#F26625",
    beige: "#F5F1EB",
    background: "#ffffff",
  },
  dark: {
    accent: "#F26625",
    beige: "#2D2A26",
    background: "#1a1a1a",
  },
} as const;

/**
 * 특장점 카드 데이터
 */
const BENEFIT_CARDS = [
  {
    title: "The most experienced partners",
    description:
      "Each founder is assigned a dedicated YC partner who has mentored hundreds of YC companies. They have more data on what it takes to build a successful startup than any other early stage startup advisor.",
    image: "/registry/ycombinator-com-benefit-8/partners.jpg",
  },
  {
    title: "Investor network",
    description:
      "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have access to the YC Investor Database which has profiles and reviews for more than 50,000 startup investors.",
    image: "/registry/ycombinator-com-benefit-8/investors.jpg",
  },
  {
    title: "Private social network only for founders",
    description:
      "YC founders get to benefit from the collective wisdom of over 9000 YC alumni. They can access these alums through Bookface, our private social network.",
    image: "/registry/ycombinator-com-benefit-8/network.jpg",
  },
  {
    title: "Exclusive deals",
    description:
      "YC founders have access to over 1000 deals from leading software companies. Every YC company gets free credits or significant discounts on hosting, banking, and more.",
    image: "/registry/ycombinator-com-benefit-8/deals.jpg",
  },
  {
    title: "The best written advice",
    description:
      "YC founders get to benefit from our collective experience funding 5000 companies across almost 20 years. We have extensive documentation for common questions.",
    image: "/registry/ycombinator-com-benefit-8/advice.jpg",
  },
  {
    title: "Networks to build your team",
    description:
      "Through Work at a Startup and HN, we help our founders hire early engineers and team members critical to finding product market fit.",
    image: "/registry/ycombinator-com-benefit-8/team.jpg",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComBenefit8Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComBenefit8({
  mode = "light",
}: YcombinatorComBenefit8Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="mb-6 max-w-2xl text-center text-3xl font-medium leading-relaxed">
            <span>YC is </span>
            <span style={{ color: colors.accent }}>
              run by startup founders{" "}
            </span>
            <span>
              who have built exactly what they wanted when starting and growing
              a startup.
            </span>
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {BENEFIT_CARDS.map((card, index) => (
              <div
                key={index}
                className="rounded-lg p-6 sm:p-10"
                style={{ backgroundColor: colors.beige }}
              >
                <div
                  className="mb-5 h-0 min-h-[120px] w-full rounded-md bg-stone-300 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    paddingBottom: "45%",
                  }}
                />
                <div
                  className="mb-3 border-l-4 pl-1 text-base font-medium leading-4"
                  style={{ borderColor: colors.accent }}
                >
                  {card.title}
                </div>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
