"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const SPONSORS = [
  {
    name: "Sponsor 1",
    logo: "https://framerusercontent.com/images/eziJbtVdIE4oo9IJIKWO4QuTa8.png",
    width: 85,
  },
  {
    name: "Sponsor 2",
    logo: "https://framerusercontent.com/images/vLH1BeYFnn9sXQl0IKTfquKlc.png",
    width: 105,
  },
  {
    name: "Sponsor 3",
    logo: "https://framerusercontent.com/images/Q1570nHFlUQJyGOPWAR3haGlTVs.png",
    width: 140,
  },
  {
    name: "Sponsor 4",
    logo: "https://framerusercontent.com/images/ekKmFyCz3wVQPGPBddI3lfpdc.png",
    width: 76,
  },
  {
    name: "Sponsor 5",
    logo: "https://framerusercontent.com/images/mVExnTqDYhJaFKlowys7oUCTEh4.png",
    width: 89,
  },
  {
    name: "Sponsor 6",
    logo: "https://framerusercontent.com/images/LEztpKm1mPRtm1h4kpY6pLZkchk.png",
    width: 120,
  },
  {
    name: "Sponsor 7",
    logo: "https://framerusercontent.com/images/CJaOlKvBR5lrk6UCEyrIFOIw.png",
    width: 105,
  },
  {
    name: "Sponsor 8",
    logo: "https://framerusercontent.com/images/NwdJHmikgyLcyL8oKk05v5xKZlE.png",
    width: 65,
  },
  {
    name: "Sponsor 9",
    logo: "https://framerusercontent.com/images/Ajf96McCiznkPIHwXOebfWHwQZ0.png",
    width: 46,
  },
  {
    name: "Sponsor 10",
    logo: "https://framerusercontent.com/images/0LYiLdcYTrGs6HOrgB2R2sQBf4.png",
    width: 109,
  },
  {
    name: "Sponsor 11",
    logo: "https://framerusercontent.com/images/2swzBXgfilSs0WY4E0dotSueUco.png",
    width: 70,
  },
  {
    name: "Sponsor 12",
    logo: "https://framerusercontent.com/images/I5sUU8Xfm32BI2zX9BzgOuykTU.png",
    width: 40,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useRef, useEffect, useState } from "react";

interface Logo {
  name: string;
  logo: string;
  width?: number;
}

interface HookableAiLogoCloud1Props {
  mode?: "light" | "dark";
  title?: string;
  logos?: Logo[];
}

export default function HookableAiLogoCloud1({
  mode = "light",
  title = "Sponsored by",
  logos = SPONSORS,
}: HookableAiLogoCloud1Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isHovered) {
        scrollPosition += speed;
        const firstChild = scrollContainer.firstElementChild as HTMLElement;
        if (firstChild && scrollPosition >= firstChild.offsetWidth + 10) {
          scrollPosition = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const tripleLogos = [...logos, ...logos, ...logos];

  const bgColor = mode === "dark" ? "#0a0a0a" : "#f4f2f1";

  return (
    <section
      className="py-10"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div
            className={`flex-1 h-px ${mode === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
          />
          <p
            className={`text-sm font-medium whitespace-nowrap ${mode === "dark" ? "text-gray-400" : "text-gray-900"}`}
          >
            {title}
          </p>
          <div
            className={`flex-1 h-px ${mode === "dark" ? "bg-gray-700" : "bg-gray-200"}`}
          />
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex items-center gap-8"
            style={{ willChange: "transform" }}
          >
            {tripleLogos.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 h-8 flex items-center"
                style={{ width: sponsor.width || 100 }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`h-full w-full object-contain ${mode === "dark" ? "brightness-0 invert opacity-70" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
