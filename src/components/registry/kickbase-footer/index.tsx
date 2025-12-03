"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1A1A1A",
    footerBackground: "#1A1A1A",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    accent: "#E85A4F",
    accentHover: "#D14A3F",
    chatBg: "#2A2A2A",
    chatText: "#FFFFFF",
  },
  dark: {
    background: "#0F0F0F",
    footerBackground: "#0F0F0F",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    accent: "#E85A4F",
    accentHover: "#D14A3F",
    chatBg: "#1A1A1A",
    chatText: "#FFFFFF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  footballMatch: {
    path: "/registry/kickbase-footer/football-match.jpg",
    alt: "Football match action shot",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Dynamic football/soccer match action shot from stadium perspective</summary>
<mood>Intense, athletic, professional sports atmosphere with stadium crowd in background</mood>
<background_summary>Blurred stadium crowd in red colors, professional football pitch grass visible</background_summary>
<primary_element>Multiple football players from two teams in action - some in dark blue jerseys (REWE sponsor), some in red/white striped jerseys, goalkeeper in green. Players are mid-action following a ball in the air. Shot from ground level looking up at the players.</primary_element>
<etc_element>A football/soccer ball in motion in the upper portion of the frame, slightly blurred. Stadium atmosphere with fans in the background.</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

// Simple 8-pointed asterisk for Kickbase
const KickbaseAsterisk = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    style={style}
    aria-hidden="true"
  >
    {/* Vertical bar */}
    <rect x="42" y="0" width="16" height="100" rx="2" />
    {/* Horizontal bar */}
    <rect x="0" y="42" width="100" height="16" rx="2" />
    {/* Diagonal bar 1 (top-left to bottom-right) */}
    <rect x="42" y="0" width="16" height="100" rx="2" transform="rotate(45 50 50)" />
    {/* Diagonal bar 2 (top-right to bottom-left) */}
    <rect x="42" y="0" width="16" height="100" rx="2" transform="rotate(-45 50 50)" />
  </svg>
);

interface OverlayCardProps {
  count: number;
  title: string;
  playerName: string;
  time: string;
  team: string;
}

interface KickbaseFooterProps {
  mode?: "light" | "dark";
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  brandName?: string;
  chatButtonText?: string;
  overlayCard?: OverlayCardProps;
  backgroundImage?: string;
  onCtaClick?: () => void;
  onChatClick?: () => void;
}

const defaultOverlayCard: OverlayCardProps = {
  count: 3,
  title: "SUCCESSFUL CROSS",
  playerName: "CHRISTOPHER TRIMMEL",
  time: "12'",
  team: "FCU",
};

export default function KickbaseFooter({
  mode = "light",
  tagline = "TAKE YOUR LOVE FOR THE GAME TO A WHOLE NEW\nLEVEL. GO BEYOND WATCHING. BE THE MANAGER.\nPLAY YOUR FRIENDS - AND THE COMMUNITY.",
  ctaText = "DOWNLOAD APP",
  ctaHref = "#",
  brandName = "KICKBASE",
  chatButtonText = "Konnen wir weiterhelfen?",
  overlayCard = defaultOverlayCard,
  backgroundImage,
  onCtaClick,
  onChatClick,
}: KickbaseFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header Section with CTA */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 md:px-12 lg:px-20 py-6 gap-4"
      >
        {/* Tagline */}
        <p
          className="text-[10px] md:text-xs tracking-widest uppercase leading-relaxed max-w-md"
          style={{ color: colors.textMuted, whiteSpace: "pre-line" }}
        >
          {tagline}
        </p>

        {/* Download Button */}
        <motion.a
          href={ctaHref}
          onClick={(e) => {
            if (onCtaClick) {
              e.preventDefault();
              onCtaClick();
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-colors"
          style={{
            backgroundColor: colors.accent,
            color: colors.text,
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: "#C73E33" }}
          />
          {ctaText}
        </motion.a>
      </motion.div>

      {/* Main Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : `url(${IMAGES.footballMatch.path})`,
            backgroundColor: "#2a2a2a",
          }}
        />

        {/* Overlay Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-4 md:top-8 left-4 md:left-8 flex items-start gap-3 p-3 rounded-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          {/* Plus icon with count */}
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium border"
              style={{ borderColor: colors.text, color: colors.text }}
            >
              +
            </div>
            <span
              className="text-2xl font-bold"
              style={{ color: colors.text }}
            >
              {overlayCard.count}
            </span>
          </div>

          {/* Card Content */}
          <div className="flex flex-col">
            <span
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: colors.text }}
            >
              {overlayCard.title}
            </span>
            <span
              className="text-sm font-bold uppercase"
              style={{ color: colors.text }}
            >
              {overlayCard.playerName}
            </span>
            <span
              className="text-xs mt-1"
              style={{ color: colors.textMuted }}
            >
              {overlayCard.time}&nbsp;&nbsp;&nbsp;{overlayCard.team}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Brand Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative px-6 md:px-12 lg:px-20 py-12 md:py-16"
        style={{ backgroundColor: colors.footerBackground }}
      >
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo Icon */}
          <KickbaseAsterisk
            className="w-16 h-16 md:w-24 md:h-24"
            style={{ color: colors.text }}
          />

          {/* Brand Name */}
          <span
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight"
            style={{ color: colors.text }}
          >
            {brandName}
          </span>
        </div>

        {/* Chat Help Button */}
        <motion.button
          onClick={onChatClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="absolute bottom-6 right-6 md:bottom-8 md:right-12 lg:right-20 flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors"
          style={{
            backgroundColor: colors.chatBg,
            color: colors.chatText,
          }}
        >
          <MessageSquare className="w-4 h-4" />
          {chatButtonText}
        </motion.button>
      </motion.div>
    </footer>
  );
}
