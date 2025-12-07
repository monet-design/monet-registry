"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBackground: "#FFFFFF",
    text: "#000000",
    textMuted: "#4B5563",
    badgeBackground: "rgba(255, 255, 255, 0.85)",
  },
  dark: {
    background: "#111827",
    cardBackground: "#1F2937",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    badgeBackground: "rgba(31, 41, 55, 0.85)",
  },
} as const;

/**
 * 기본 팀 멤버 데이터
 */
const DEFAULT_TEAM_MEMBERS = [
  {
    id: 1,
    name: "James Wilson",
    location: "VANCOUVER, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Emily Chen",
    location: "CALIFORNIA, US",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    location: "MONTERREY, MX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "CALIFORNIA, US",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Alex Martinez",
    location: "PRISTINA, XK",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    location: "LONDON, UK",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "Michael Park",
    location: "NEW YORK, US",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

/**
 * 기본 브랜드 로고 데이터
 */
const DEFAULT_BRANDS = [
  { name: "Dollar Shave Club", logo: "DOLLAR\nSHAVE\nCLUB" },
  { name: "Dribbble", logo: "dribbble" },
  { name: "Bill & Melinda Gates Foundation", logo: "BILL&MELINDA\nGATES\nfoundation" },
  { name: "Google", logo: "Google" },
  { name: "Walmart", logo: "Walmart" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  location: string;
  image: string;
}

interface Brand {
  name: string;
  logo: string;
}

interface TeamBunsenAboutProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  teamMembers?: TeamMember[];
  brands?: Brand[];
  brandsTitle?: string;
}

export default function TeamBunsenAbout({
  mode = "light",
  title = "Amplified by a\nglobal team",
  buttonText = "Join us",
  buttonHref = "#",
  teamMembers = DEFAULT_TEAM_MEMBERS,
  brands = DEFAULT_BRANDS,
  brandsTitle = "We honed our skills with these global brands",
}: TeamBunsenAboutProps) {
  const colors = COLORS[mode];

  // Split members for two rows
  const firstRowMembers = teamMembers.slice(0, 4);
  const secondRowMembers = teamMembers.slice(3, 7);

  return (
    <section
      className="relative w-full py-20 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left side - Title and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:w-1/4"
          >
            <h2
              className="text-3xl lg:text-4xl font-semibold mb-6 whitespace-pre-line leading-tight"
              style={{ color: colors.text }}
            >
              {title}
            </h2>
            <a
              href={buttonHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all duration-300 hover:scale-105 w-fit"
              style={{
                borderColor: colors.text,
                color: colors.text,
                backgroundColor: "transparent",
              }}
            >
              <span className="font-medium">{buttonText}</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right side - Team member grid */}
          <div className="lg:w-3/4 overflow-hidden">
            {/* First row */}
            <div className="flex gap-4 mb-4">
              {firstRowMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex-shrink-0 w-48 h-52 rounded-lg overflow-hidden group ${
                    index === firstRowMembers.length - 1 ? "opacity-50" : ""
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                    style={{
                      backgroundColor: colors.badgeBackground,
                      color: colors.text,
                    }}
                  >
                    {member.location}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second row - offset */}
            <div className="flex gap-4 pl-12">
              {secondRowMembers.map((member, index) => (
                <motion.div
                  key={`second-${member.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  className={`relative flex-shrink-0 w-48 h-52 rounded-lg overflow-hidden group ${
                    index === secondRowMembers.length - 1 ? "opacity-50" : ""
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                    style={{
                      backgroundColor: colors.badgeBackground,
                      color: colors.text,
                    }}
                  >
                    {member.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Brands section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p
            className="text-sm mb-10"
            style={{ color: colors.textMuted }}
          >
            {brandsTitle}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center h-12"
              >
                <BrandLogo brand={brand} color={colors.text} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Brand logo component - renders text-based logos
function BrandLogo({ brand, color }: { brand: Brand; color: string }) {
  switch (brand.name) {
    case "Dollar Shave Club":
      return (
        <div
          className="font-black text-sm leading-tight text-center"
          style={{ color }}
        >
          DOLLAR<br />SHAVE<br />CLUB
        </div>
      );
    case "Dribbble":
      return (
        <span
          className="font-bold text-2xl italic"
          style={{ color, fontFamily: "serif" }}
        >
          dribbble
        </span>
      );
    case "Bill & Melinda Gates Foundation":
      return (
        <div
          className="text-xs leading-tight text-center"
          style={{ color }}
        >
          <span className="font-semibold tracking-wide">BILL&MELINDA</span>
          <br />
          <span className="font-semibold tracking-wide">GATES</span>
          <br />
          <span className="italic">foundation</span>
        </div>
      );
    case "Google":
      return (
        <span
          className="font-medium text-2xl"
          style={{ color }}
        >
          Google
        </span>
      );
    case "Walmart":
      return (
        <div className="flex items-center gap-1">
          <span
            className="font-bold text-xl"
            style={{ color }}
          >
            Walmart
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={color}
            className="ml-1"
          >
            <path d="M12 2L14 8L12 14L10 8L12 2Z" />
            <path d="M12 10L18 12L12 14L6 12L12 10Z" transform="rotate(60 12 12)" />
            <path d="M12 10L18 12L12 14L6 12L12 10Z" transform="rotate(120 12 12)" />
            <path d="M12 10L18 12L12 14L6 12L12 10Z" transform="rotate(180 12 12)" />
            <path d="M12 10L18 12L12 14L6 12L12 10Z" transform="rotate(240 12 12)" />
            <path d="M12 10L18 12L12 14L6 12L12 10Z" transform="rotate(300 12 12)" />
          </svg>
        </div>
      );
    default:
      return (
        <span className="font-semibold text-lg" style={{ color }}>
          {brand.name}
        </span>
      );
  }
}
