"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  LayoutGrid,
  Hash,
  TrendingUp,
  Users,
  Code2,
  Clock,
  MoreHorizontal,
  Plus,
} from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface MediaLogo {
  name: string;
  logo: React.ReactNode;
}

interface CursorTag {
  name: string;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
}

interface ChronicleHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaText?: string;
  announcementText?: string;
  headline?: string;
  description?: string;
  mediaTitle?: string;
  mediaLogos?: MediaLogo[];
  cursorTags?: CursorTag[];
}

// Chronicle Logo Icon
function ChronicleLogoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V10L20 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// TechCrunch Logo
function TechCrunchLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-lg font-bold text-[#0A9E01]">TC</span>
      <span className="text-sm font-semibold text-black">TechCrunch</span>
    </div>
  );
}

// Forbes Logo
function ForbesLogo() {
  return (
    <span className="text-base font-bold italic text-black tracking-tight">
      Forbes
    </span>
  );
}

// Business Insider Logo
function BusinessInsiderLogo() {
  return (
    <span className="text-[10px] font-bold tracking-[0.15em] text-black uppercase">
      Business Insider
    </span>
  );
}

// On Deck Logo
function OnDeckLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-black" />
      </div>
      <span className="text-sm font-medium text-black">On Deck</span>
    </div>
  );
}

// Block Menu Item Component
function BlockMenuItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 hover:bg-[#2A2A2A] rounded-md cursor-pointer group">
      <span className="text-[#888888] group-hover:text-white">{icon}</span>
      <span className="text-sm text-[#CCCCCC] group-hover:text-white">
        {label}
      </span>
      <ArrowRight
        size={14}
        className="ml-auto text-[#555555] group-hover:text-[#888888]"
      />
    </div>
  );
}

// App Preview Card Component
function PreviewCard({
  title,
  subtitle,
  bgColor,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  bgColor?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor || "#1D1D1D" }}
    >
      {children ? (
        children
      ) : (
        <div className="p-4">
          {title && (
            <p className="text-xs font-medium text-white/90">{title}</p>
          )}
          {subtitle && (
            <p className="text-[10px] text-white/60 mt-1">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

// Cursor Tag Component
function CursorTagComponent({
  name,
  color,
  position,
  delay = 0,
}: {
  name: string;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.8, duration: 0.4 }}
      className="absolute flex items-center gap-1"
      style={position}
    >
      {/* Cursor pointer */}
      <svg
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        className="-mr-1"
      >
        <path
          d="M1 1L1 14L4.5 10.5L7.5 15L9.5 14L6.5 9L11 9L1 1Z"
          fill={color}
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      {/* Name tag */}
      <span
        className="px-2 py-0.5 rounded-full text-[10px] font-medium text-white"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </motion.div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", isActive: true },
  { label: "Our story", href: "#" },
  { label: "Careers", href: "#" },
];

const defaultMediaLogos: MediaLogo[] = [
  { name: "TechCrunch", logo: <TechCrunchLogo /> },
  { name: "Forbes", logo: <ForbesLogo /> },
  { name: "Business Insider", logo: <BusinessInsiderLogo /> },
  { name: "On Deck", logo: <OnDeckLogo /> },
];

const defaultCursorTags: CursorTag[] = [
  { name: "Jessica", color: "#EC7BC2", position: { top: "12%", right: "42%" } },
  { name: "Matty", color: "#8474D2", position: { bottom: "18%", left: "38%" } },
];

// Main Component
export default function ChronicleHero({
  logoText = "chronicle",
  navItems = defaultNavItems,
  ctaText = "Join Beta",
  announcementText = "$7.5M seed raised with Accel and Square Peg",
  headline = "Impactful\nstories. Made\neffortlessly.",
  description = "Chronicle is a modern format of presentations.\nDeliver impressive, interactive stories without\nthe design guesswork!",
  mediaTitle = "Featured and seen in",
  mediaLogos = defaultMediaLogos,
  cursorTags = defaultCursorTags,
}: ChronicleHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ChronicleLogoIcon />
          <span className="text-base font-semibold text-[#0D0D0D]">
            {logoText}
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors ${
                item.isActive
                  ? "text-[#0D0D0D] font-medium border-b border-[#0D0D0D]"
                  : "text-[#666666] hover:text-[#0D0D0D]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="rounded-lg border border-[#E0E0E0] bg-white px-4 py-2 text-sm font-medium text-[#0D0D0D] transition-all hover:bg-[#F5F5F5] hover:border-[#CCCCCC]">
          {ctaText}
        </button>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-8 sm:px-10 lg:px-16">
        {/* Dark Container with App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative rounded-3xl bg-[#0D0D0D] p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative curved lines */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
            <svg
              viewBox="0 0 200 400"
              fill="none"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M50 0 Q150 100 100 200 Q50 300 150 400"
                stroke="#333"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M80 0 Q180 100 130 200 Q80 300 180 400"
                stroke="#333"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Browser Chrome */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-6 h-6 rounded bg-[#2A2A2A] flex items-center justify-center">
                <Sparkles size={12} className="text-[#888]" />
              </div>
              <div className="w-6 h-6 rounded bg-[#2A2A2A] flex items-center justify-center text-[#888] text-xs font-medium">
                T
              </div>
              <div className="w-6 h-6 rounded bg-[#2A2A2A] flex items-center justify-center">
                <LayoutGrid size={12} className="text-[#888]" />
              </div>
              <div className="w-6 h-6 rounded bg-[#2A2A2A] flex items-center justify-center">
                <div className="w-3 h-2 border border-[#888] rounded-sm" />
              </div>
            </div>
            {/* User avatars */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center -space-x-1">
              <div className="w-5 h-5 rounded-full bg-[#FF6B6B] border border-[#0D0D0D]" />
              <div className="w-5 h-5 rounded-full bg-[#FFD93D] border border-[#0D0D0D]" />
              <div className="w-5 h-5 rounded-full bg-[#6BCB77] border border-[#0D0D0D]" />
              <div className="w-5 h-5 rounded-full bg-[#4D96FF] border border-[#0D0D0D] flex items-center justify-center">
                <Plus size={10} className="text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-8">
            {/* Left Side - Text Content */}
            <div className="flex-1 relative">
              {/* Announcement Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <Sparkles size={14} className="text-[#FFD700]" />
                <span className="text-sm text-[#AAAAAA]">
                  {announcementText}
                </span>
                <ArrowRight size={14} className="text-[#AAAAAA]" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight whitespace-pre-line"
              >
                {headline}
              </motion.h1>

              {/* Cursor Tags on Headline */}
              {cursorTags.map((tag, index) => (
                <CursorTagComponent
                  key={tag.name}
                  name={tag.name}
                  color={tag.color}
                  position={tag.position}
                  delay={index * 0.2}
                />
              ))}

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6 text-sm sm:text-base text-[#888888] leading-relaxed whitespace-pre-line max-w-md"
              >
                {description}
              </motion.p>
            </div>

            {/* Right Side - App UI Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex-1 flex gap-4"
            >
              {/* Blocks Menu */}
              <div className="bg-[#1A1A1A] rounded-xl p-3 w-44 shrink-0">
                <div className="flex items-center gap-2 px-3 py-2 text-xs text-[#666666] mb-1">
                  <span>/</span>
                  <span>type &quot;/&quot; for shortcuts</span>
                </div>

                {/* Sarah cursor tag */}
                <div className="flex items-center gap-1 mb-2">
                  <svg width="10" height="14" viewBox="0 0 12 16" fill="none">
                    <path
                      d="M1 1L1 14L4.5 10.5L7.5 15L9.5 14L6.5 9L11 9L1 1Z"
                      fill="#7BB8EB"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-medium text-white bg-[#7BB8EB]">
                    Sarah
                  </span>
                </div>

                <div className="text-[10px] text-[#666666] px-3 py-1 font-medium">
                  + Blocks
                </div>

                <div className="space-y-0.5">
                  <BlockMenuItem
                    icon={<LayoutGrid size={14} />}
                    label="Cards"
                  />
                  <BlockMenuItem icon={<Hash size={14} />} label="Numbers" />
                  <BlockMenuItem
                    icon={<TrendingUp size={14} />}
                    label="Trends"
                  />
                  <BlockMenuItem icon={<Users size={14} />} label="People" />
                  <BlockMenuItem icon={<Code2 size={14} />} label="Embeds" />
                  <BlockMenuItem icon={<Clock size={14} />} label="Timeline" />
                  <BlockMenuItem
                    icon={<MoreHorizontal size={14} />}
                    label="More"
                  />
                </div>
              </div>

              {/* Preview Cards Stack */}
              <div className="flex flex-col gap-3 flex-1">
                {/* Launch cover design card */}
                <PreviewCard className="relative h-28" bgColor="#1D1D1D">
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 rounded bg-[#8B5CF6] flex items-center justify-center">
                        <Sparkles size={10} className="text-white" />
                      </div>
                      <span className="text-[10px] text-white font-medium">
                        Launch cover design
                      </span>
                      <div className="ml-auto flex items-center -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-[#4D96FF] border border-[#1D1D1D]" />
                        <div className="w-4 h-4 rounded-full bg-[#FFD93D] border border-[#1D1D1D]" />
                      </div>
                    </div>
                    {/* Inner preview - portrait image card */}
                    <div className="flex gap-2">
                      <div className="w-16 h-20 rounded-lg bg-[#D4A574] overflow-hidden flex flex-col justify-end p-2">
                        <span className="text-[8px] text-white font-medium">
                          Manu
                        </span>
                        <span className="text-[8px] text-white font-medium">
                          Kraven
                        </span>
                        <span className="text-[6px] text-white/60">
                          PRESENTS
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="bg-[#FFD700] rounded-lg p-2 h-full flex items-center justify-center">
                          <span className="text-lg font-black text-black tracking-tight">
                            BATSU
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </PreviewCard>

                {/* Website playground card */}
                <PreviewCard className="h-16" bgColor="#262626">
                  <div className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D] flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white font-medium">
                        Website playground
                      </p>
                      <p className="text-[10px] text-[#666666]">
                        www.figma.com
                      </p>
                    </div>
                    <div className="flex items-center -space-x-1">
                      <div className="w-5 h-5 rounded-full bg-[#4D96FF] border border-[#262626]" />
                      <div className="w-5 h-5 rounded-full bg-[#6BCB77] border border-[#262626]" />
                    </div>
                  </div>
                </PreviewCard>

                {/* Side floating elements */}
                <div className="absolute right-4 top-1/3 flex flex-col gap-2">
                  <div className="w-14 h-20 rounded-lg bg-[#1D1D1D] border border-[#333] p-1.5 overflow-hidden">
                    <div className="text-[6px] text-[#666]">The future of</div>
                    <div className="text-[6px] text-[#666]">storytelling</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1D1D1D] border border-[#333] flex items-center justify-center">
                    <Plus size={14} className="text-[#666]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Featured In Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:px-16"
      >
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-serif italic text-[#0D0D0D] mb-10">
          {mediaTitle}
        </h2>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {mediaLogos.map((media) => (
            <div
              key={media.name}
              className="flex items-center justify-center px-6 py-3 rounded-full bg-[#F5F5F5] hover:bg-[#EBEBEB] transition-colors"
            >
              {media.logo}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
