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
    // Background and cards
    background: "#121416",      // 다크 배경
    playerCardOrange: "#E1693B", // 오렌지 플레이어 카드
    playerCardDark: "#353A3D",   // 다크 플레이어 카드
    testimonialBg: "#1a1c1e",    // 추천사 배경
    testimonialHeader: "#f5f5f5", // 추천사 헤더
  },
  dark: {
    background: "#0a0a0c",
    playerCardOrange: "#FF7B4B",
    playerCardDark: "#2a2c2f",
    testimonialBg: "#12141 6",
    testimonialHeader: "#e5e5e5",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  player1: {
    path: "/registry/kickbase-hero/player-1.png",
    alt: "Professional football player 1",
    prompt: "Professional football/soccer player portrait in athletic pose, studio photography, orange background",
  },
  player2: {
    path: "/registry/kickbase-hero/player-2.png",
    alt: "Professional football player 2",
    prompt: "Professional football/soccer player portrait in athletic pose, studio photography, orange background",
  },
  player3: {
    path: "/registry/kickbase-hero/player-3.png",
    alt: "Professional football player 3",
    prompt: "Professional football/soccer player portrait in athletic pose, studio photography, dark background",
  },
  player4: {
    path: "/registry/kickbase-hero/player-4.png",
    alt: "Professional football player 4",
    prompt: "Professional football/soccer player portrait in athletic pose, studio photography, dark background",
  },
  player5: {
    path: "/registry/kickbase-hero/player-5.png",
    alt: "Professional football player 5",
    prompt: "Professional football/soccer player portrait in athletic pose, studio photography, orange background",
  },
  testimonial1: {
    path: "/registry/kickbase-hero/testimonial-1.png",
    alt: "Thomas Muller testimonial portrait",
    prompt: "Professional football player Thomas Muller portrait for testimonial, FC Bayern Munich, professional sports photography",
  },
  testimonial2: {
    path: "/registry/kickbase-hero/testimonial-2.png",
    alt: "Jule Brand testimonial portrait",
    prompt: "Professional football player Jule Brand portrait for testimonial, VFL Wolfsburg, professional sports photography",
  },
  logoFrauen: {
    path: "/registry/kickbase-hero/logo-frauen.png",
    alt: "Frauen Bundesliga logo",
    prompt: "Frauen Bundesliga official league logo",
  },
  logoBundesliga: {
    path: "/registry/kickbase-hero/logo-bundesliga.png",
    alt: "Bundesliga logo",
    prompt: "Bundesliga official league logo",
  },
  logoSegunda: {
    path: "/registry/kickbase-hero/logo-segunda.png",
    alt: "2. Bundesliga logo",
    prompt: "2. Bundesliga official league logo",
  },
  logoLaliga: {
    path: "/registry/kickbase-hero/logo-laliga.png",
    alt: "La Liga logo",
    prompt: "La Liga official league logo",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

interface LeagueTag {
  name: string;
}

interface PlayerCard {
  imageSrc: string;
  imageAlt: string;
}

interface LeagueCard {
  logoSrc: string;
  logoAlt: string;
  bgColor?: string;
}

interface TestimonialCard {
  playerImageSrc: string;
  playerImageAlt: string;
  jerseyNumber: string;
  playerName: string;
  position: string;
  country: string;
  club: string;
  quote: string;
}

interface KickbaseHeroProps {
  mode?: "light" | "dark";
  title?: string;
  stats?: StatItem[];
  leagueTags?: LeagueTag[];
  playerCards?: PlayerCard[];
  leagueCards?: LeagueCard[];
  testimonials?: TestimonialCard[];
}

const defaultStats: StatItem[] = [
  { value: "1.925", label: "PRO PLAYERS" },
  { value: "64", label: "CLUBS" },
  { value: "04", label: "LEAGUES" },
];

const defaultLeagueTags: LeagueTag[] = [
  { name: "FRAUEN BUNDESLIGA" },
  { name: "BUNDESLIGA" },
  { name: "PRIMERA DIVISION" },
  { name: "2. BUNDESLIGA" },
];

const defaultPlayerCards: PlayerCard[] = [
  { imageSrc: IMAGES.player1.path, imageAlt: IMAGES.player1.alt },
  { imageSrc: IMAGES.player2.path, imageAlt: IMAGES.player2.alt },
  { imageSrc: IMAGES.player3.path, imageAlt: IMAGES.player3.alt },
  { imageSrc: IMAGES.player4.path, imageAlt: IMAGES.player4.alt },
  { imageSrc: IMAGES.player5.path, imageAlt: IMAGES.player5.alt },
];

const defaultLeagueCards: LeagueCard[] = [
  { logoSrc: IMAGES.logoFrauen.path, logoAlt: IMAGES.logoFrauen.alt, bgColor: "#f5f5f5" },
  { logoSrc: IMAGES.logoBundesliga.path, logoAlt: IMAGES.logoBundesliga.alt, bgColor: "#ffffff" },
  { logoSrc: IMAGES.logoSegunda.path, logoAlt: IMAGES.logoSegunda.alt, bgColor: "#ffffff" },
  { logoSrc: IMAGES.logoLaliga.path, logoAlt: IMAGES.logoLaliga.alt, bgColor: "#ffffff" },
];

const defaultTestimonials: TestimonialCard[] = [
  {
    playerImageSrc: IMAGES.testimonial1.path,
    playerImageAlt: IMAGES.testimonial1.alt,
    jerseyNumber: "25",
    playerName: "THOMAS MULLER",
    position: "FORWARD",
    country: "GER",
    club: "FCB",
    quote: "It's always my goal to win the league title. That's what I do everything for. On Kickbase and at FC Bayern.",
  },
  {
    playerImageSrc: IMAGES.testimonial2.path,
    playerImageAlt: IMAGES.testimonial2.alt,
    jerseyNumber: "29",
    playerName: "JULE BRAND",
    position: "MIDFIELDER",
    country: "GER",
    club: "VFL",
    quote: "I love my Kickbase team. The players they're not just stats - every score is against Wolfsburg.",
  },
];

export default function KickbaseHero({
  mode = "light",
  title = "LICENSED PLAYERS\nAND CLUBS",
  stats = defaultStats,
  leagueTags = defaultLeagueTags,
  playerCards = defaultPlayerCards,
  leagueCards = defaultLeagueCards,
  testimonials = defaultTestimonials,
}: KickbaseHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24" style={{ backgroundColor: colors.background }}>
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #3a3c41 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section - Stats and Title */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span
                  className="font-bold text-white"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs tracking-widest text-gray-400"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right - Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right font-bold uppercase italic text-white lg:text-left"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
              whiteSpace: 'pre-line',
            }}
          >
            {title}
          </motion.h1>
        </div>

        {/* Middle Section - Player and League Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16"
        >
          {/* League Tags */}
          <div className="mb-4 flex flex-wrap gap-4">
            {leagueTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs tracking-wide text-gray-400"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Plus className="h-3 w-3" />
                <span>{tag.name}</span>
              </div>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {/* Player Cards with Orange Background */}
            {playerCards.slice(0, 2).map((player, index) => (
              <motion.div
                key={`player-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
                style={{ backgroundColor: colors.playerCardOrange }}
              >
                <img
                  src={player.imageSrc}
                  alt={player.imageAlt}
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            ))}

            {/* League Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f5]"
            >
              <img
                src={leagueCards[0]?.logoSrc || ""}
                alt={leagueCards[0]?.logoAlt || "League logo"}
                className="h-16 w-16 object-contain"
              />
            </motion.div>

            {/* More Player Cards */}
            {playerCards.slice(2, 4).map((player, index) => (
              <motion.div
                key={`player-mid-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
                style={{ backgroundColor: colors.playerCardDark }}
              >
                <img
                  src={player.imageSrc}
                  alt={player.imageAlt}
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            ))}

            {/* League Card 2 - Bundesliga */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex aspect-[3/4] flex-col items-center justify-center gap-2 overflow-hidden rounded-lg bg-white"
            >
              <img
                src={leagueCards[1]?.logoSrc || ""}
                alt={leagueCards[1]?.logoAlt || "Bundesliga"}
                className="h-12 w-12 object-contain"
              />
              <span className="text-xs font-bold text-red-600">BUNDESLIGA</span>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {/* League Card - 2. Bundesliga */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="col-start-2 flex aspect-[3/4] flex-col items-center justify-center gap-2 overflow-hidden rounded-lg bg-white"
            >
              <img
                src={leagueCards[2]?.logoSrc || ""}
                alt={leagueCards[2]?.logoAlt || "2. Bundesliga"}
                className="h-12 w-12 object-contain"
              />
              <span className="text-xs font-bold text-red-600">2. BUNDESLIGA</span>
            </motion.div>

            {/* Last Player Card */}
            {playerCards[4] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
                style={{ backgroundColor: colors.playerCardOrange }}
              >
                <img
                  src={playerCards[4].imageSrc}
                  alt={playerCards[4].imageAlt}
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            )}

            {/* La Liga Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-white"
            >
              <img
                src={leagueCards[3]?.logoSrc || ""}
                alt={leagueCards[3]?.logoAlt || "La Liga"}
                className="h-16 w-16 object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section - Testimonials */}
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.2 }}
              className="relative overflow-hidden rounded-lg"
              style={{ backgroundColor: colors.testimonialBg }}
            >
              {/* Player Info Header */}
              <div
                className="flex items-center justify-between border-b border-gray-700/50 px-4 py-3"
                style={{ backgroundColor: colors.testimonialHeader }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-2xl font-bold text-gray-800"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {testimonial.jerseyNumber}
                  </span>
                  <div className="flex flex-col">
                    <span
                      className="text-sm font-semibold text-gray-900"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.playerName}
                    </span>
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.position}
                    </span>
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {testimonial.country}    {testimonial.club}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="rounded-full p-1 hover:bg-gray-200">
                    <ChevronLeft className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="rounded-full p-1 hover:bg-gray-200">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Quote and Image */}
              <div className="flex">
                {/* Player Image */}
                <div className="relative w-1/3 shrink-0">
                  <img
                    src={testimonial.playerImageSrc}
                    alt={testimonial.playerImageAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Quote */}
                <div className="flex flex-1 items-center p-6">
                  <p
                    className="text-lg font-medium leading-relaxed text-white md:text-xl"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-gray-400">&ldquo;</span>
                    {testimonial.quote}
                    <span className="text-gray-400">&rdquo;</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
