"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const LOGOS = [
  {
    name: "삼성 SDS",
    path: "/scraped/flex-team-2025-12-14/images/image-1.jpg",
    alt: "삼성 SDS 로고",
  },
  {
    name: "네이버",
    path: "/scraped/flex-team-2025-12-14/images/image-2.jpg",
    alt: "네이버 로고",
  },
  {
    name: "토스",
    path: "/scraped/flex-team-2025-12-14/images/image-12.jpg",
    alt: "토스 로고",
  },
  {
    name: "야놀자",
    path: "/scraped/flex-team-2025-12-14/images/image-13.jpg",
    alt: "야놀자 로고",
  },
  {
    name: "직방",
    path: "/scraped/flex-team-2025-12-14/images/image-14.jpg",
    alt: "직방 로고",
  },
  {
    name: "당근",
    path: "/scraped/flex-team-2025-12-14/images/image-17.jpg",
    alt: "당근 로고",
  },
  {
    name: "컬리",
    path: "/scraped/flex-team-2025-12-14/images/image-18.jpg",
    alt: "컬리 로고",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";

interface FlexTeamLogoBar1Props {
  mode?: "light" | "dark";
}

export default function FlexTeamLogoBar1({
  mode = "light",
}: FlexTeamLogoBar1Props) {
  return (
    <section className="w-full bg-white px-8 py-8 lg:px-16">
      <div className="mx-auto flex items-center justify-center gap-8 lg:gap-12">
        {LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="relative h-8 w-20 grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100 lg:h-10 lg:w-24"
          >
            <Image
              src={logo.path}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
