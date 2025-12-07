"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#A855F7", // Purple-500
    accentHover: "#9333EA", // Purple-600
    buttonBg: "#A855F7",
    buttonRing: "#A855F7",
  },
  dark: {
    accent: "#C084FC",
    accentHover: "#A855F7",
    buttonBg: "#A855F7",
    buttonRing: "#A855F7",
  },
} as const;

/**
 * CTA 콘텐츠
 */
const CONTENT = {
  title: "Start now, no strings attached",
  description:
    "Integrate complete user management in minutes.",
  highlight: "Free",
  highlightDescription:
    "for your first 10,000 monthly active users and 100 monthly active orgs. No credit card required.",
  buttonText: "Start building",
  buttonHref: "/docs/quickstart",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClerkComCta1Props {
  mode?: "light" | "dark";
}

// Clerk Logomark SVG
function ClerkLogomark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 410 410" fill="none" className={className} aria-hidden="true">
      <g filter="url(#filter0_ii_cta)">
        <path
          fill="#fff"
          d="M268.922 205c0 35.381-28.667 64.062-64.029 64.062-35.362 0-64.029-28.681-64.029-64.062s28.667-64.062 64.029-64.062c35.362 0 64.029 28.681 64.029 64.062Z"
        />
        <path
          fill="url(#paint0_radial_cta)"
          d="M268.922 205c0 35.381-28.667 64.062-64.029 64.062-35.362 0-64.029-28.681-64.029-64.062s28.667-64.062 64.029-64.062c35.362 0 64.029 28.681 64.029 64.062Z"
        />
        <path
          fill="#fff"
          d="M318.774 34.555c6.4 4.29 6.947 13.314 1.5 18.764l-46.792 46.816c-4.229 4.232-10.79 4.9-16.113 2.172-15.739-8.068-33.576-12.62-52.476-12.62-63.652 0-115.252 51.628-115.252 115.313 0 18.91 4.549 36.756 12.612 52.504 2.727 5.326 2.059 11.89-2.17 16.121l-46.792 46.816c-5.447 5.451-14.466 4.904-18.754-1.501C12.723 286.356 0 247.164 0 205 0 91.782 91.734 0 204.893 0c42.142 0 81.313 12.73 113.881 34.555Z"
        />
        <path
          fill="url(#paint1_radial_cta)"
          d="M318.774 34.555c6.4 4.29 6.947 13.314 1.5 18.764l-46.792 46.816c-4.229 4.232-10.79 4.9-16.113 2.172-15.739-8.068-33.576-12.62-52.476-12.62-63.652 0-115.252 51.628-115.252 115.313 0 18.91 4.549 36.756 12.612 52.504 2.727 5.326 2.059 11.89-2.17 16.121l-46.792 46.816c-5.447 5.451-14.466 4.904-18.754-1.501C12.723 286.356 0 247.164 0 205 0 91.782 91.734 0 204.893 0c42.142 0 81.313 12.73 113.881 34.555Z"
        />
        <path
          fill="#fff"
          d="M320.271 356.681c5.448 5.45 4.901 14.474-1.5 18.763C286.203 397.27 247.032 410 204.89 410c-42.143 0-81.314-12.73-113.881-34.556-6.401-4.289-6.948-13.313-1.5-18.763l46.791-46.817c4.229-4.231 10.79-4.899 16.113-2.171 15.739 8.068 33.577 12.619 52.477 12.619s36.737-4.551 52.477-12.619c5.323-2.728 11.883-2.06 16.112 2.171l46.792 46.817Z"
        />
        <path
          fill="url(#paint2_radial_cta)"
          d="M320.271 356.681c5.448 5.45 4.901 14.474-1.5 18.763C286.203 397.27 247.032 410 204.89 410c-42.143 0-81.314-12.73-113.881-34.556-6.401-4.289-6.948-13.313-1.5-18.763l46.791-46.817c4.229-4.231 10.79-4.899 16.113-2.171 15.739 8.068 33.577 12.619 52.477 12.619s36.737-4.551 52.477-12.619c5.323-2.728 11.883-2.06 16.112 2.171l46.792 46.817Z"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_cta"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 403.643 -318.977 0 162 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".415" stopColor="#F7F7F8" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_cta"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 403.643 -318.977 0 162 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".415" stopColor="#F7F7F8" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_cta"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 403.643 -318.977 0 162 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".415" stopColor="#F7F7F8" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter
          id="filter0_ii_cta"
          width="324"
          height="413"
          x="0"
          y="-1"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

// Play Icon for Button
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
      />
    </svg>
  );
}

export default function ClerkComCta1({ mode = "light" }: ClerkComCta1Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mx-6 bg-gray-50 sm:mx-0 sm:rounded-2xl overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(88% 100% at top, white, rgb(255 255 255 / 0))",
            boxShadow:
              "0 10px 32px rgb(34 42 53 / 0.12), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px rgb(34 42 53 / 0.05), 0 4px 6px rgb(34 42 53 / 0.08), 0 24px 108px rgb(47 48 55 / 0.10)",
          }}
        >
          {/* Background decorative elements */}
          <div className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl">
            {/* Circuit lines pattern - simplified as gradient */}
            <div
              className="absolute right-0 top-0 w-[40rem] h-[40rem] opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              }}
            />
          </div>

          {/* Logomark */}
          <div className="pointer-events-none absolute right-4 sm:right-8 lg:right-12 top-8 select-none">
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)",
                  width: "25rem",
                  height: "25rem",
                  transform: "translate(-30%, -30%)",
                }}
              />
              <ClerkLogomark className="relative w-48 h-48 sm:w-64 sm:h-64 drop-shadow-xl" />
            </div>
          </div>

          {/* Content */}
          <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-80 text-balance text-3xl font-semibold tracking-tight text-gray-950"
            >
              {CONTENT.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-[26rem] text-base/6 text-gray-600"
            >
              {CONTENT.description}{" "}
              <strong className="font-medium text-gray-950">{CONTENT.highlight}</strong>{" "}
              {CONTENT.highlightDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10 mt-6"
            >
              <a
                href={CONTENT.buttonHref}
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-out rounded-md text-sm h-[1.875rem] px-3 text-white"
                style={{
                  backgroundColor: colors.buttonBg,
                  boxShadow: `0 1px rgba(255,255,255,0.07) inset, 0 1px 3px rgba(0,0,0,0.2), 0 0 0 1px ${colors.buttonRing}`,
                }}
              >
                {/* Button gradient overlays */}
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-gradient-to-b from-white/20 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-gradient-to-b from-white/10 from-[46%] to-[54%] mix-blend-overlay" />

                {CONTENT.buttonText}

                {/* Animated play icons */}
                <PlayIcon className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300" />
                <PlayIcon className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
