"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {},
  dark: {},
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight, Search, Star } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface FeatureCard {
  title: string;
  description: string;
  isItalic?: boolean;
}

interface AvatarPosition {
  id: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  gradient: string;
  delay: number;
}

interface GithubStartupsHeroProps {
  mode?: "light" | "dark";
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  navItems?: NavItem[];
  featureCards?: FeatureCard[];
  onApplyClick?: () => void;
}

// GitHub Logo Component
function GitHubLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      height="32"
      viewBox="0 0 16 16"
      width="32"
      fill="currentColor"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

// Avatar Component with gradient fallback
function Avatar({
  position,
  index,
}: {
  position: AvatarPosition;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: position.delay, duration: 0.5, ease: "easeOut" }}
      className="absolute rounded-full border-2 border-[#30363d] overflow-hidden"
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        width: position.size,
        height: position.size,
        background: position.gradient,
        zIndex: 10 + index,
      }}
    >
      <div className="w-full h-full flex items-center justify-center text-white/60 font-medium text-sm">
        {/* Placeholder - can be replaced with actual images */}
      </div>
    </motion.div>
  );
}

// Network Node Component
function NetworkNode({
  x,
  y,
  delay,
  isHighlighted = false,
}: {
  x: string;
  y: string;
  delay: number;
  isHighlighted?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      className={`absolute rounded-full ${
        isHighlighted
          ? "w-3 h-3 bg-[#7ee787] shadow-[0_0_12px_rgba(126,231,135,0.5)]"
          : "w-2 h-2 bg-[#7ee787]/80"
      }`}
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    />
  );
}

// Feature Card Component
function FeatureCardItem({
  card,
  index,
}: {
  card: FeatureCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
      className="flex-1 min-w-[280px] max-w-[360px] px-6 py-8 rounded-lg bg-[#161b22]/80 border border-[#30363d]/50 backdrop-blur-sm"
    >
      <h3
        className={`text-xl font-semibold text-white mb-3 ${
          card.isItalic ? "italic font-serif" : ""
        }`}
        style={card.isItalic ? { fontFamily: "'Times New Roman', serif" } : {}}
      >
        {card.title}
      </h3>
      <p className="text-sm text-[#8b949e] leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Open Source", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
];

const defaultFeatureCards: FeatureCard[] = [
  {
    title: "Full access to GitHub Enterprise",
    description:
      "Get up to 20 seats of GitHub Enterprise free for 12 months.",
  },
  {
    title: "The industry's best DevOps platform",
    description:
      "Build your business in one place on GitHub's complete platform.",
  },
  {
    title: "Tailored product guidance",
    description:
      "Get a personalized onboarding experience, office hours, and technical best practices.",
    isItalic: true,
  },
];

const avatarPositions: AvatarPosition[] = [
  {
    id: "avatar-1",
    top: "12%",
    right: "8%",
    size: 48,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    delay: 0.3,
  },
  {
    id: "avatar-2",
    top: "20%",
    right: "3%",
    size: 56,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    delay: 0.4,
  },
  {
    id: "avatar-3",
    top: "35%",
    right: "6%",
    size: 52,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    delay: 0.5,
  },
  {
    id: "avatar-4",
    top: "20%",
    left: "5%",
    size: 56,
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    delay: 0.35,
  },
  {
    id: "avatar-5",
    top: "68%",
    right: "35%",
    size: 44,
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    delay: 0.55,
  },
  {
    id: "avatar-6",
    top: "66%",
    right: "30%",
    size: 48,
    gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    delay: 0.6,
  },
];

// Main Component
export default function GithubStartupsHero({
  mode = "light",
  eyebrow = "GitHub for Startups",
  headline = "Build your startup\non GitHub",
  description = "GitHub for Startups helps your startup go from idea to IPO on the world's largest and most advanced developer platform. Eligible startups receive 20 seats of GitHub Enterprise free for 12 months.",
  ctaText = "Apply now",
  navItems = defaultNavItems,
  featureCards = defaultFeatureCards,
  onApplyClick,
}: GithubStartupsHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0d1117] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Concentric circles - left */}
        <div className="absolute left-[-10%] top-[15%] w-[500px] h-[500px]">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`circle-left-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="absolute rounded-full border border-[#30363d]"
              style={{
                width: `${i * 120}px`,
                height: `${i * 120}px`,
                top: `calc(50% - ${(i * 120) / 2}px)`,
                left: `calc(50% - ${(i * 120) / 2}px)`,
              }}
            />
          ))}
        </div>

        {/* Concentric circles - right */}
        <div className="absolute right-[-5%] top-[50%] w-[400px] h-[400px]">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={`circle-right-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="absolute rounded-full border border-[#30363d]"
              style={{
                width: `${i * 100}px`,
                height: `${i * 100}px`,
                top: `calc(50% - ${(i * 100) / 2}px)`,
                left: `calc(50% - ${(i * 100) / 2}px)`,
              }}
            />
          ))}
        </div>

        {/* Network lines - SVG */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
            d="M 60 200 Q 200 350 210 420 L 210 500"
            fill="none"
            stroke="#7ee787"
            strokeWidth="1.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
            d="M 60 420 L 210 500"
            fill="none"
            stroke="#7ee787"
            strokeWidth="1.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
            d="M 850 300 L 950 150 Q 970 100 920 60"
            fill="none"
            stroke="#7ee787"
            strokeWidth="1.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            d="M 850 300 L 900 350"
            fill="none"
            stroke="#7ee787"
            strokeWidth="1.5"
          />
        </svg>

        {/* Network nodes */}
        <NetworkNode x="6%" y="24%" delay={0.4} isHighlighted />
        <NetworkNode x="5.5%" y="52%" delay={0.5} isHighlighted />
        <NetworkNode x="6%" y="60%" delay={0.6} />
        <NetworkNode x="21%" y="60%" delay={0.7} />
        <NetworkNode x="85%" y="38%" delay={0.55} isHighlighted />
        <NetworkNode x="95%" y="18%" delay={0.65} />
      </div>

      {/* Star badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute left-[18%] top-[58%] z-20"
      >
        <div className="w-10 h-10 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center">
          <Star size={18} className="text-[#7ee787]" fill="#7ee787" />
        </div>
      </motion.div>

      {/* Avatars */}
      {avatarPositions.map((position, index) => (
        <Avatar key={position.id} position={position} index={index} />
      ))}

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Left side - Logo + Nav items */}
        <div className="flex items-center gap-6">
          <GitHubLogo className="text-white" />
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronRight size={14} className="rotate-90 opacity-60" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Search + Auth */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#30363d] bg-[#0d1117] text-sm text-[#8b949e]">
            <Search size={14} />
            <span>Search GitHub</span>
            <span className="ml-4 px-1.5 py-0.5 rounded border border-[#30363d] text-xs">
              /
            </span>
          </div>
          <a
            href="#"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            className="px-3 py-1.5 rounded-md border border-[#f0f6fc] text-sm text-white hover:bg-[#f0f6fc] hover:text-[#0d1117] transition-colors"
          >
            Sign up
          </a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 pt-16 pb-12 sm:px-8 sm:pt-24 lg:pt-32 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm text-[#8b949e] mb-4"
        >
          {eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight whitespace-pre-line"
          style={{
            fontFamily: "'Times New Roman', Georgia, serif",
            fontStyle: "italic",
          }}
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#8b949e]"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={onApplyClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-[#0d1117] font-medium text-base hover:bg-[#f0f6fc] transition-colors"
          >
            {ctaText}
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative z-20 mx-auto max-w-5xl px-6 pb-16 sm:px-8"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {featureCards.map((card, index) => (
            <FeatureCardItem key={card.title} card={card} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
    </section>
  );
}
