"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#A855F7", // Purple-500 for labels
    cardBg: "#18181B", // zinc-900
    cardBorder: "rgba(255, 255, 255, 0.08)",
    sectionBg: "#0F0F10",
  },
  dark: {
    accent: "#A855F7",
    cardBg: "#18181B",
    cardBorder: "rgba(255, 255, 255, 0.08)",
    sectionBg: "#0F0F10",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
const CONTENT = {
  label: "Developer experience",
  leftCard: {
    title: "Build with SDKs for",
    titleHighlight: "modern frameworks",
    description:
      "Clerk's developer experience means you're not spending weeks maintaining your own auth system. We do the work so you can focus on your product.",
    linkText: "All frameworks",
    linkHref: "/docs/quickstarts",
  },
  rightCard: {
    title: "Integrate with",
    titleHighlight: "the tools you love",
    description:
      "Leverage Clerk to the fullest with built-in sync to your data infrastructure and native integrations with your tech stack.",
    linkText: "All integrations",
    linkHref: "/integrations",
  },
} as const;

/**
 * Framework logos for left card
 */
const FRAMEWORKS = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Remix", icon: "remix" },
  { name: "Gatsby", icon: "gatsby" },
  { name: "Expo", icon: "expo" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Chrome Extension", icon: "chrome" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "Fastify", icon: "fastify" },
  { name: "Ruby", icon: "ruby" },
  { name: "Go", icon: "go" },
] as const;

/**
 * Integration tools for right card
 */
const INTEGRATIONS = [
  { name: "Firebase", icon: "firebase" },
  { name: "Supabase", icon: "supabase" },
  { name: "Convex", icon: "convex" },
  { name: "Hasura", icon: "hasura" },
  { name: "Grafbase", icon: "grafbase" },
  { name: "Neon", icon: "neon" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ClerkComFeature7Props {
  mode?: "light" | "dark";
}

// Framework/Tool Icons
function NextjsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <mask
        id="mask0_408_139"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_408_139)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path
          d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
          fill="url(#paint0_linear_408_139)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_139"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_139"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#61DAFB">
      <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.5c3.866 0 7.232.842 9.344 2.147C23.457 11.014 24 12.525 24 12c0 1.475-1.043 2.985-3.156 4.353C18.732 17.658 15.366 18.5 12 18.5s-7.232-.842-9.344-2.147C.543 14.986 0 13.475 0 12c0-1.475 1.043-2.986 3.156-4.353C5.268 6.342 8.634 5.5 12 5.5V7.5zm0 9c3.515 0 6.535-.766 8.374-1.919C22.21 13.427 22.5 12.573 22.5 12c0-.573-.29-1.427-2.126-2.581C18.535 8.266 15.515 7.5 12 7.5S5.465 8.266 3.626 9.419C1.79 10.573 1.5 11.427 1.5 12c0 .573.29 1.427 2.126 2.581C5.465 15.734 8.485 16.5 12 16.5z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.064 9.808c1.934-3.348 4.507-5.856 6.753-6.93 2.32-1.11 4.167-.757 4.9.512.737 1.275.263 3.263-1.24 5.426-1.457 2.095-3.784 4.174-6.413 5.692-2.63 1.519-5.358 2.383-7.428 2.383-2.143 0-3.467-.8-4.2-2.075-.737-1.276-.263-3.263 1.24-5.427.476-.685 1.04-1.38 1.68-2.07l1.095 1.028c-.567.612-1.063 1.226-1.478 1.824-1.255 1.806-1.508 3.242-1.132 3.892.377.65 1.59 1.008 3.595.5 2.004-.507 4.422-1.706 6.753-3.052 2.33-1.346 4.332-3.082 5.587-4.888 1.256-1.806 1.508-3.242 1.132-3.892-.377-.65-1.59-1.008-3.595-.5-1.285.325-2.723.96-4.187 1.85L8.064 9.808z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.064 14.192c-1.934-3.348-2.929-6.61-2.553-9.036.388-2.507 1.953-3.772 3.756-3.772 1.803 0 3.723 1.168 5.18 3.263 1.412 2.03 2.479 4.86 2.79 7.861.311 3.002-.19 5.84-1.307 7.861-1.156 2.091-2.965 3.247-5.163 3.247-1.803 0-3.723-1.168-5.18-3.263a14.54 14.54 0 01-1.68-3.339l1.422-.5c.395 1.068.91 2.108 1.545 3.02 1.212 1.743 2.667 2.582 3.893 2.582 1.226 0 2.432-.6 3.331-2.225.9-1.627 1.323-4.044 1.044-6.752-.278-2.708-1.205-5.204-2.417-6.947-1.212-1.743-2.667-2.582-3.893-2.582-1.226 0-2.432.6-3.331 2.225-.357.646-.648 1.405-.86 2.248l-1.455-.417c.25-.999.603-1.905 1.045-2.705 1.156-2.091 2.965-3.247 5.163-3.247z"
      />
    </svg>
  );
}

function RemixIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 800" fill="currentColor">
      <path d="M587.947 527.768c4.239 54.456 4.239 79.989 4.239 111.466H455.889c0-10.655.214-21.095.447-32.089.581-27.426 1.253-59.13-3.617-108.32-6.51-64.08-32.682-78.16-84.571-78.16H189v-99.56h186.749c67.071 0 100.607-20.345 100.607-74.39 0-46.958-33.536-75.663-100.607-75.663H189V72h206.295c132.86 0 199.931 63.357 199.931 164.755 0 76.927-47.527 126.986-111.879 135.29 55.131 11.127 88.667 42.085 104.168 112.08 0 0 1.432 30.388-3.008 43.643z" />
      <path d="M189 639.234v-65.12h165.126c27.138 0 33.12 20.012 33.12 31.95v33.17H189z" />
    </svg>
  );
}

function VueIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 221">
      <path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" />
      <path fill="#41B883" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" />
      <path fill="#35495E" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" />
    </svg>
  );
}

function GatsbyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="#663399">
      <path d="M128 0C57.308 0 0 57.307 0 128s57.308 128 128 128c70.693 0 128-57.307 128-128S198.693 0 128 0zM27.504 129.334l99.161 99.162c-54.45-.71-98.452-44.71-99.161-99.162zm122.992 96.65L30.016 105.503C40.234 59.472 81.58 25.04 131.275 25.04c34.792 0 65.655 16.13 85.869 41.316l-14.212 12.548c-16.796-21.015-42.612-34.463-71.657-34.463-39.53 0-73.096 25.663-85.202 61.24l116.748 116.75c28.88-9.76 51.214-33.42 58.632-62.966h-49.24v-19.347h71.747c0 49.696-34.434 91.04-80.464 101.215v.85z" />
    </svg>
  );
}

function ExpoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 232" fill="currentColor">
      <path d="M128 0C93.867 0 72.533 19.2 64 57.6c12.8-19.2 27.733-26.4 44.8-21.6 9.737 2.742 16.694 9.8 24.388 17.61C145.98 66.612 161.34 82.4 195.2 82.4c34.133 0 55.467-19.2 64-57.6-12.8 19.2-27.733 26.4-44.8 21.6-9.737-2.742-16.694-9.8-24.388-17.61C177.22 15.788 161.86 0 128 0zM64 82.4C29.867 82.4 8.533 101.6 0 140c12.8-19.2 27.733-26.4 44.8-21.6 9.737 2.742 16.694 9.8 24.388 17.61C81.98 149.012 97.34 164.8 131.2 164.8c34.133 0 55.467-19.2 64-57.6-12.8 19.2-27.733 26.4-44.8 21.6-9.737-2.742-16.694-9.8-24.388-17.61C113.22 98.188 97.86 82.4 64 82.4z" />
    </svg>
  );
}

function JavaScriptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="#F7DF1E">
      <path d="M0 0h256v256H0V0z" />
      <path
        fill="#000"
        d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"
      />
    </svg>
  );
}

function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256">
      <circle fill="#FFF" cx="128" cy="128" r="52.5" />
      <path
        fill="#229EF2"
        d="M128 75.5c19.15 0 36.112 9.54 46.42 24.175L221.9 17.73C196.1 6.58 166.847 0 136 0 74.45 0 21.285 35.22 0 85.87l57.775 100.03C57.86 167.5 57.5 148.5 57.5 128c0-38.94 31.56-70.5 70.5-70.5z"
      />
      <path
        fill="#FBC013"
        d="M198.5 128c0 19.45-7.89 37.045-20.64 49.79l-60.91 105.51c3.63.44 7.31.7 11.05.7 63.04 0 115.5-46.7 124.25-107.5H128c0 11.03-.5 13.5-3.5 18.5h98.45c-10.9 38.06-44.95 66.75-87.95 70.45l44.2-76.58A70.247 70.247 0 0 0 198.5 128z"
      />
      <path
        fill="#30A753"
        d="M57.5 128c0-12.95 3.49-25.09 9.58-35.53L9.3 9.93A127.666 127.666 0 0 0 0 128c0 47.18 25.51 88.38 63.5 110.57l47.14-81.65A70.32 70.32 0 0 1 57.5 128z"
      />
      <path
        fill="#E5302B"
        d="M128 180.5c-28.99 0-52.5-23.51-52.5-52.5 0-12.56 4.42-24.09 11.79-33.12l-47.14-81.65C15.17 37.1 0 77.22 0 128c0 0 .5 1 1 2.5l110.64-52.42c16.59 2.87 30.66 13.73 38.16 28.82l46.32-80.18C175.24 9.08 152.36 0 128 0c-63.04 0-115.5 46.7-124.25 107.5H128c0-11.03-.5-13.5 3.5-18.5H33.05c10.9-38.06 44.95-66.75 87.95-70.45V75.5c-28.99 0-52.5 23.51-52.5 52.5s23.51 52.5 52.5 52.5z"
      />
      <circle fill="#4285F4" cx="128" cy="128" r="45" />
    </svg>
  );
}

function NodejsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 289" fill="#539E43">
      <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.155.795-.53 1.855-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.705 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.635 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.325-3.18 3.18-3.18h13.515c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.395 33.126-31.27 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.77 220.355 0 213.2 0 205.515V83.345c0-7.685 4.77-14.84 12.455-18.55L118.195 3.58c7.42-4.24 17.49-4.24 24.91 0l105.74 61.215c7.685 4.24 12.455 11.13 12.455 18.815v122.17c0 7.685-4.77 14.84-12.455 18.815l-105.74 61.215c-3.445 1.59-7.42 2.385-11.13 2.385l.025.27z" />
      <path d="M160.33 205.25c-45.035 0-54.575-20.67-54.575-38.16 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.915 1.06 2.915 2.65 2.12 14.045 8.215 20.936 36.305 20.936 22.26 0 31.8-5.035 31.8-16.96 0-6.89-2.65-11.925-37.365-15.37-28.887-2.915-46.91-9.275-46.91-32.33 0-21.465 18.02-34.185 48.235-34.185 33.92 0 50.615 11.66 52.735 37.1 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.325 0-2.65-1.06-2.915-2.385-3.18-14.575-11.395-19.345-33.125-19.345-24.38 0-27.295 8.48-27.295 14.84 0 7.685 3.445 10.07 36.305 14.31 32.595 4.24 47.97 10.335 47.97 33.126-.265 23.32-19.345 36.57-53.055 36.57l-.29-.06z" />
    </svg>
  );
}

function ExpressIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
    </svg>
  );
}

function FastifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 296" fill="currentColor">
      <path d="M255.988 88.038c-.015-.4-.038-.8-.097-1.195-.045-.281-.117-.558-.19-.834l-.014-.049-.003-.006a7.66 7.66 0 0 0-2.35-3.617l-.013-.013-99.61-79.566-.015-.01a7.713 7.713 0 0 0-4.792-1.663c-1.653 0-3.218.526-4.502 1.5L51.27 75.858l-1.136.922-37.866 30.721a7.692 7.692 0 0 0-2.918 6.041v89.792a7.69 7.69 0 0 0 7.69 7.69h46.15v77.436a7.69 7.69 0 0 0 12.493 6.03l45.698-36.525 45.697 36.524a7.69 7.69 0 0 0 12.493-6.029v-77.436h46.15a7.69 7.69 0 0 0 7.69-7.69v-89.797l.087-.113c.49-.643.87-1.36 1.12-2.13l.02-.052.026-.095c.199-.679.306-1.385.317-2.1l.007-.01zm-77.037 118.626h-38.46v-53.846h38.46v53.846zm15.38-112.178v-5.85l15.38-12.295v30.44l-15.38-12.295zm-30.76 0v-5.85l15.38-12.295v30.44l-15.38-12.295zm-84.61 102.028H40.5v-74.412h38.46v74.412zm15.38 0v-82.102a7.69 7.69 0 0 0-7.69-7.69H32.808a7.69 7.69 0 0 0-7.69 7.69v82.102l.002.003H17.43v-79.502l30.53-24.771v-.006l.622-.499 100.32-80.255 92.298 73.722-33.33 26.65a7.69 7.69 0 0 0-2.917 6.041v1.159a7.69 7.69 0 0 0 2.917 6.042l18.167 14.532v57.888l-7.687-.003v-82.102a7.69 7.69 0 0 0-7.69-7.69h-53.842a7.69 7.69 0 0 0-7.69 7.69v82.102l-53.847-.002-.002-.003z" />
    </svg>
  );
}

function RubyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 255" fill="#CC342D">
      <path d="M0 0h256v255H0V0z" fill="none" />
      <defs>
        <linearGradient
          id="ruby-a"
          gradientUnits="userSpaceOnUse"
          x1="157.08"
          y1="2.244"
          x2="131.682"
          y2="44.234"
        >
          <stop offset="0" stopColor="#FB7655" />
          <stop offset="0" stopColor="#FB7655" />
          <stop offset=".41" stopColor="#E42B1E" />
          <stop offset=".99" stopColor="#900" />
          <stop offset="1" stopColor="#900" />
        </linearGradient>
        <linearGradient
          id="ruby-b"
          gradientUnits="userSpaceOnUse"
          x1="169.731"
          y1="77.073"
          x2="136.998"
          y2="111.681"
        >
          <stop offset="0" stopColor="#871101" />
          <stop offset="0" stopColor="#871101" />
          <stop offset=".99" stopColor="#911209" />
          <stop offset="1" stopColor="#911209" />
        </linearGradient>
        <linearGradient
          id="ruby-c"
          gradientUnits="userSpaceOnUse"
          x1="143.943"
          y1="77.071"
          x2="110.553"
          y2="111.971"
        >
          <stop offset="0" stopColor="#871101" />
          <stop offset="0" stopColor="#871101" />
          <stop offset=".99" stopColor="#911209" />
          <stop offset="1" stopColor="#911209" />
        </linearGradient>
        <linearGradient
          id="ruby-d"
          gradientUnits="userSpaceOnUse"
          x1="47.016"
          y1="152.535"
          x2="104.211"
          y2="112.478"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0" stopColor="#fff" />
          <stop offset=".23" stopColor="#E57252" />
          <stop offset=".46" stopColor="#DE3B20" />
          <stop offset=".99" stopColor="#A60003" />
          <stop offset="1" stopColor="#A60003" />
        </linearGradient>
        <linearGradient
          id="ruby-e"
          gradientUnits="userSpaceOnUse"
          x1="66.754"
          y1="124.766"
          x2="38.669"
          y2="173.168"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0" stopColor="#fff" />
          <stop offset=".23" stopColor="#E4714E" />
          <stop offset=".56" stopColor="#BE1A0D" />
          <stop offset=".99" stopColor="#A80D00" />
          <stop offset="1" stopColor="#A80D00" />
        </linearGradient>
        <linearGradient
          id="ruby-f"
          gradientUnits="userSpaceOnUse"
          x1="75.634"
          y1="173.456"
          x2="36.358"
          y2="239.506"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0" stopColor="#fff" />
          <stop offset=".18" stopColor="#E46342" />
          <stop offset=".4" stopColor="#C82410" />
          <stop offset=".99" stopColor="#A80D00" />
          <stop offset="1" stopColor="#A80D00" />
        </linearGradient>
        <linearGradient
          id="ruby-g"
          gradientUnits="userSpaceOnUse"
          x1="127.869"
          y1="3.013"
          x2="127.869"
          y2="132.34"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0" stopColor="#fff" />
          <stop offset=".54" stopColor="#C81F11" />
          <stop offset=".99" stopColor="#BF0905" />
          <stop offset="1" stopColor="#BF0905" />
        </linearGradient>
        <linearGradient
          id="ruby-h"
          gradientUnits="userSpaceOnUse"
          x1="79.673"
          y1="56.076"
          x2="47.389"
          y2="160.689"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0" stopColor="#fff" />
          <stop offset=".31" stopColor="#DE4024" />
          <stop offset=".99" stopColor="#BF190B" />
          <stop offset="1" stopColor="#BF190B" />
        </linearGradient>
        <linearGradient
          id="ruby-i"
          gradientUnits="userSpaceOnUse"
          x1="-18.556"
          y1="155.105"
          x2="135.02"
          y2="210.098"
        >
          <stop offset="0" stopColor="#BD0012" />
          <stop offset="0" stopColor="#BD0012" />
          <stop offset=".07" stopColor="#fff" />
          <stop offset=".17" stopColor="#fff" />
          <stop offset=".27" stopColor="#C82F1C" />
          <stop offset=".33" stopColor="#820C01" />
          <stop offset=".46" stopColor="#A31601" />
          <stop offset=".72" stopColor="#B31301" />
          <stop offset=".99" stopColor="#E82609" />
          <stop offset="1" stopColor="#E82609" />
        </linearGradient>
        <linearGradient
          id="ruby-j"
          gradientUnits="userSpaceOnUse"
          x1="99.075"
          y1="171.03"
          x2="43.551"
          y2="197.295"
        >
          <stop offset="0" stopColor="#8C0C01" />
          <stop offset="0" stopColor="#8C0C01" />
          <stop offset=".54" stopColor="#990C00" />
          <stop offset=".99" stopColor="#A80D0E" />
          <stop offset="1" stopColor="#A80D0E" />
        </linearGradient>
        <linearGradient
          id="ruby-k"
          gradientUnits="userSpaceOnUse"
          x1="178.256"
          y1="115.407"
          x2="137.432"
          y2="151.835"
        >
          <stop offset="0" stopColor="#7E110B" />
          <stop offset="0" stopColor="#7E110B" />
          <stop offset=".99" stopColor="#9E0C00" />
          <stop offset="1" stopColor="#9E0C00" />
        </linearGradient>
        <linearGradient
          id="ruby-l"
          gradientUnits="userSpaceOnUse"
          x1="193.62"
          y1="47.934"
          x2="173.04"
          y2="78.387"
        >
          <stop offset="0" stopColor="#79130D" />
          <stop offset="0" stopColor="#79130D" />
          <stop offset=".99" stopColor="#9E120B" />
          <stop offset="1" stopColor="#9E120B" />
        </linearGradient>
        <radialGradient
          id="ruby-m"
          cx="138.703"
          cy="31.378"
          r="30.096"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#A80D00" />
          <stop offset="0" stopColor="#A80D00" />
          <stop offset=".99" stopColor="#7E0E08" />
          <stop offset="1" stopColor="#7E0E08" />
        </radialGradient>
        <radialGradient
          id="ruby-n"
          cx="69.141"
          cy="37.138"
          r="45.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#A30C00" />
          <stop offset="0" stopColor="#A30C00" />
          <stop offset=".99" stopColor="#800E08" />
          <stop offset="1" stopColor="#800E08" />
        </radialGradient>
        <linearGradient
          id="ruby-o"
          gradientUnits="userSpaceOnUse"
          x1="171.34"
          y1="153.076"
          x2="181.5"
          y2="174.106"
        >
          <stop offset="0" stopColor="#8B2114" />
          <stop offset="0" stopColor="#8B2114" />
          <stop offset=".43" stopColor="#9E100A" />
          <stop offset=".99" stopColor="#B3100C" />
          <stop offset="1" stopColor="#B3100C" />
        </linearGradient>
        <linearGradient
          id="ruby-p"
          gradientUnits="userSpaceOnUse"
          x1="153.359"
          y1="199.503"
          x2="172.509"
          y2="142.326"
        >
          <stop offset="0" stopColor="#B31000" />
          <stop offset="0" stopColor="#B31000" />
          <stop offset=".44" stopColor="#910F08" />
          <stop offset=".99" stopColor="#791C12" />
          <stop offset="1" stopColor="#791C12" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ruby-a)"
        d="M197.467 167.764l-145.52 86.41 188.422-12.787L254.88 51.393l-57.414 116.37z"
      />
      <path
        fill="url(#ruby-b)"
        d="M240.677 241.257L224.482 129.48l-44.113 58.25 60.308 53.527z"
      />
      <path
        fill="url(#ruby-c)"
        d="M240.896 241.257l-118.646-9.313-69.674 21.986 188.32-12.673z"
      />
      <path
        fill="url(#ruby-d)"
        d="M52.744 253.955l29.64-97.1L17.16 170.8l35.583 83.154z"
      />
      <path
        fill="url(#ruby-e)"
        d="M180.358 188.05L153.085 81.226l-78.047 73.16 105.32 33.664z"
      />
      <path
        fill="url(#ruby-f)"
        d="M248.693 82.73l-73.777-60.256-20.544 66.418 94.321-6.162z"
      />
      <path
        fill="url(#ruby-g)"
        d="M214.191.99L170.8 24.97 143.424.669l70.767.322z"
      />
      <path
        fill="url(#ruby-h)"
        d="M0 203.372l18.177-33.151-14.704-39.494L0 203.372z"
      />
      <path
        fill="url(#ruby-i)"
        d="M2.496 129.48l14.794 41.963 64.283-14.422 73.39-68.207 20.712-65.787L143.063 0 87.618 20.75c-17.746 16.09-52.737 47.972-52.893 48.238-.155.266-22.2 35.792-32.229 60.492z"
      />
      <path
        fill="#9E1209"
        d="M54.442 54.094c37.86-37.538 86.667-59.716 105.397-40.818 18.72 18.898-1.132 64.823-38.992 102.361-37.86 37.538-86.53 60.925-105.24 42.027-18.72-18.898.976-66.032 38.835-103.57z"
      />
      <path
        fill="url(#ruby-j)"
        d="M52.744 253.916l29.408-97.409 97.665 31.376c-35.312 33.113-74.587 61.106-127.073 66.033z"
      />
      <path
        fill="url(#ruby-k)"
        d="M155.092 88.622l25.073 99.313c29.498-31.016 55.972-64.36 68.938-105.603l-94.01 6.29z"
      />
      <path
        fill="url(#ruby-l)"
        d="M248.847 82.833c10.035-30.282 12.35-73.725-34.966-81.576l-38.636 21.96 73.602 59.616z"
      />
      <path
        fill="url(#ruby-m)"
        d="M0 202.935c1.39 49.979 37.448 50.724 52.808 51.162l-35.48-82.86L0 202.934z"
      />
      <path
        fill="#9E1209"
        d="M155.232 88.777c22.667 13.932 68.35 41.912 69.276 42.525 1.478.977 19.639-31.741 24.063-48.494l-93.339 5.97z"
      />
      <path
        fill="url(#ruby-n)"
        d="M82.39 156.485l39.564 67.59c17.804-11.754 36.749-23.768 57.903-35.937l-97.467-31.653z"
      />
      <path
        fill="url(#ruby-o)"
        d="M17.59 171.27l35.06 82.387c13.63-8.597 24.593-17.834 29.564-97.768l-64.624 15.38z"
      />
      <path
        fill="url(#ruby-p)"
        d="M155.197 88.86l24.89 99.034c17.404-14.627 34.689-30.263 49.907-47.385l-74.797-51.65z"
      />
    </svg>
  );
}

function GoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 348" fill="#00ADD8">
      <path d="M29.7 77.5c-.6 0-1-.5-.7-1 .2-.4.5-.6.9-.6h24c.5 0 1 .5.7 1-.2.3-.5.5-.9.5l-24 .1zm-16.6 7.6c-.6 0-1-.5-.7-1 .2-.4.5-.6.9-.6h39.4c.5 0 .8.5.6 1-.2.3-.5.5-.8.5H13zm6.6 7.5c-.5 0-1-.4-.7-.9.2-.4.5-.6.9-.6h26.5c.5 0 .8.5.6 1-.2.3-.5.5-.8.5h-26.5z" />
      <path d="M171.9 79.8c-1.8-.6-4.1-.9-6.4-.9-5.7 0-9.8 2-12.5 5.5-2.6 3.5-3.9 8.7-3.9 15.1 0 7 1.5 12.4 4.4 16 2.9 3.6 7 5.4 12.2 5.4 2.2 0 4.4-.3 6.3-.9 1.8-.6 3.6-1.4 5.3-2.4l.2 9.4c-2 .8-4.2 1.3-6.3 1.7-2.2.4-4.4.6-6.5.6-7.9 0-14.1-2.5-18.6-7.4-4.5-4.9-6.8-11.8-6.8-20.5 0-9.4 2.5-16.8 7.4-22.3 5-5.5 11.7-8.2 20-8.2 4.8 0 9.3 1 13.5 2.9l-8.3 6zm43.1 44.6h-9.3L187 95.8h-.2l-.3 28.6H177V72.5h9.6l18 27.8h.2l.3-27.8h9.9v51.9zm35.9-43.1c-5.7 0-10.2 2-13.5 6-3.3 4-5 9.5-5 16.3 0 6.9 1.7 12.3 5 16.2 3.3 3.9 7.8 5.9 13.5 5.9s10.2-2 13.5-5.9c3.3-4 5-9.4 5-16.2 0-6.8-1.7-12.3-5-16.3-3.3-4-7.8-6-13.5-6zm0-8.6c8 0 14.4 2.6 19.1 7.9 4.7 5.3 7.1 12.4 7.1 21.4s-2.4 16.1-7.1 21.4c-4.8 5.3-11.1 7.9-19.1 7.9-8 0-14.4-2.6-19.1-7.9-4.7-5.3-7.1-12.4-7.1-21.4s2.4-16.1 7.1-21.4c4.8-5.3 11.1-7.9 19.1-7.9z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.6 232.4l-33.7 45.3H7.3L.2 225.2h-.1l-.1.3v52.2h36.6l40.9-45.3h.1zm42.9 0l-33.7 45.3H50.2l-7-52.5h-.2l-.1.3v52.2h36.6l40.9-45.3h.1zm42.9 0l-33.7 45.3H93.1l-7-52.5h-.2l-.1.3v52.2H122l40.9-45.3h.1zm-55.8 91.3c25.8 0 44.5-19.4 44.5-43.6s-18.7-43.7-44.5-43.7c-25.9 0-44.5 19.5-44.5 43.7s18.7 43.6 44.5 43.6zm109 0c25.8 0 44.5-19.4 44.5-43.6s-18.7-43.7-44.5-43.7c-25.9 0-44.6 19.5-44.6 43.7s18.7 43.6 44.6 43.6z"
      />
      <path d="M65.9 280.1c0 15.7 11.7 27.9 27.2 27.9 15.4 0 27.1-12.2 27.1-27.9s-11.7-27.9-27.1-27.9c-15.5 0-27.2 12.2-27.2 27.9zm109 0c0 15.7 11.7 27.9 27.2 27.9 15.4 0 27.1-12.2 27.1-27.9s-11.7-27.9-27.1-27.9c-15.5 0-27.2 12.2-27.2 27.9z" />
    </svg>
  );
}

// Integration Icons
function FirebaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 351">
      <defs>
        <filter id="firebase-a" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="17.5" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood floodColor="#000" floodOpacity=".25" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path fill="#FFA000" d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z" />
      <path fill="#F57C00" d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z" />
      <path fill="#FFCA28" d="M0 282.998l.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z" />
      <path fill="#FFA000" d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005" />
      <path fill="#F57C00" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z" />
      <path
        fill="#FFCA28"
        d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689z"
      />
    </svg>
  );
}

function SupabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 109 113" fill="none">
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
        fill="url(#supabase-a)"
      />
      <path
        d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"
        fill="url(#supabase-b)"
        fillOpacity=".2"
      />
      <path
        d="M45.317 2.07c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.07z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="supabase-a"
          x1="53.974"
          y1="54.974"
          x2="94.163"
          y2="71.829"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="supabase-b"
          x1="36.156"
          y1="30.578"
          x2="54.484"
          y2="65.081"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ConvexIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 118C34.2 118 10 93.8 10 64S34.2 10 64 10s54 24.2 54 54-24.2 54-54 54z" />
      <path d="M64 20c-24.3 0-44 19.7-44 44s19.7 44 44 44 44-19.7 44-44-19.7-44-44-44zm0 78c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34z" />
      <circle cx="64" cy="64" r="20" />
    </svg>
  );
}

function HasuraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#1EB4D4">
      <path d="M64 0L0 37v54l64 37 64-37V37L64 0zm0 10.5l54 31.2v46.6L64 119.5l-54-31.2V41.7L64 10.5z" />
      <path d="M64 30L30 50v28l34 20 34-20V50L64 30zm0 10l24 14v20L64 88 40 74V54l24-14z" />
    </svg>
  );
}

function GrafbaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32 96H32V32h64v64z" />
      <path d="M48 48h32v32H48z" fill="#000" />
    </svg>
  );
}

function NeonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#00E699">
      <path d="M0 26.7C0 11.9 11.9 0 26.7 0h74.6C116.1 0 128 11.9 128 26.7v74.6c0 14.8-11.9 26.7-26.7 26.7H26.7C11.9 128 0 116.1 0 101.3V26.7z" />
      <path
        d="M20 28c0-4.4 3.6-8 8-8h12c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H28c-4.4 0-8-3.6-8-8V28zm60 0c0-4.4 3.6-8 8-8h12c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V28z"
        fill="#000"
      />
    </svg>
  );
}

// Generic Framework Icon for frameworks without specific icons
function GenericFrameworkIcon({ className, letter }: { className?: string; letter: string }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-lg bg-zinc-700 text-white font-bold text-xs`}
    >
      {letter}
    </div>
  );
}

// Icon mapping
function FrameworkIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const iconMap: Record<string, React.ReactNode> = {
    nextjs: <NextjsIcon className={className} />,
    react: <ReactIcon className={className} />,
    remix: <RemixIcon className={className} />,
    vue: <VueIcon className={className} />,
    gatsby: <GatsbyIcon className={className} />,
    expo: <ExpoIcon className={className} />,
    javascript: <JavaScriptIcon className={className} />,
    chrome: <ChromeIcon className={className} />,
    nodejs: <NodejsIcon className={className} />,
    express: <ExpressIcon className={className} />,
    fastify: <FastifyIcon className={className} />,
    ruby: <RubyIcon className={className} />,
    go: <GoIcon className={className} />,
  };

  return iconMap[icon] || <GenericFrameworkIcon className={className} letter={icon[0].toUpperCase()} />;
}

function IntegrationIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const iconMap: Record<string, React.ReactNode> = {
    firebase: <FirebaseIcon className={className} />,
    supabase: <SupabaseIcon className={className} />,
    convex: <ConvexIcon className={className} />,
    hasura: <HasuraIcon className={className} />,
    grafbase: <GrafbaseIcon className={className} />,
    neon: <NeonIcon className={className} />,
  };

  return iconMap[icon] || <GenericFrameworkIcon className={className} letter={icon[0].toUpperCase()} />;
}

// Arrow Link Component
function ArrowLink({
  href,
  children,
  color,
}: {
  href: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
      style={{ color }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export default function ClerkComFeature7({
  mode = "dark",
}: ClerkComFeature7Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.sectionBg }}
    >
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium mb-12"
          style={{ color: colors.accent }}
        >
          {CONTENT.label}
        </motion.p>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Left Card - SDKs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
            }}
          >
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {CONTENT.leftCard.title}
              <br />
              <span className="text-white">{CONTENT.leftCard.titleHighlight}</span>
            </h3>
            <p className="mt-4 text-base text-zinc-400 max-w-md">
              {CONTENT.leftCard.description}
            </p>

            {/* Framework Icons Grid */}
            <div className="mt-8 grid grid-cols-4 gap-4 sm:grid-cols-6">
              {FRAMEWORKS.map((framework) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition-colors group-hover:bg-zinc-700">
                    <FrameworkIcon icon={framework.icon} className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors text-center">
                    {framework.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Link */}
            <div className="mt-8">
              <ArrowLink href={CONTENT.leftCard.linkHref} color={colors.accent}>
                {CONTENT.leftCard.linkText}
              </ArrowLink>
            </div>
          </motion.div>

          {/* Right Card - Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
            }}
          >
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {CONTENT.rightCard.title}
              <br />
              <span className="text-white">{CONTENT.rightCard.titleHighlight}</span>
            </h3>
            <p className="mt-4 text-base text-zinc-400 max-w-md">
              {CONTENT.rightCard.description}
            </p>

            {/* Integration Icons Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {INTEGRATIONS.map((integration) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition-colors group-hover:bg-zinc-700">
                    <IntegrationIcon icon={integration.icon} className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors text-center">
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Link */}
            <div className="mt-8">
              <ArrowLink href={CONTENT.rightCard.linkHref} color={colors.accent}>
                {CONTENT.rightCard.linkText}
              </ArrowLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
