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
import {
  LayoutGrid,
  Files,
  Search,
  Bell,
  Users,
  Play,
  MoreVertical,
} from "lucide-react";

// Types
interface BrandLogo {
  name: string;
  logo: React.ReactNode;
}

interface TableRow {
  conceptName: string;
  formats: string[];
  status: "In Progress" | "In Review" | "Delivered";
  style: string;
  deadline: string;
}

interface FocalCreativityHeroProps {
  mode?: "light" | "dark";
  headline?: {
    accent: string;
    main: string;
  };
  subheadline?: string;
  ctaText?: string;
  brandLogos?: BrandLogo[];
  tableRows?: TableRow[];
  onCtaClick?: () => void;
}

// Status Badge Component
function StatusBadge({
  status,
}: {
  status: "In Progress" | "In Review" | "Delivered";
}) {
  const colors = {
    "In Progress": "bg-[#FFF3E0] text-[#E65100]",
    "In Review": "bg-[#FFF8E1] text-[#F9A825]",
    Delivered: "bg-[#E8F5E9] text-[#2E7D32]",
  };

  return (
    <span
      className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}

// Style Badge Component
function StyleBadge({ style }: { style: string }) {
  const colors: Record<string, string> = {
    Cinematic: "bg-[#E3F2FD] text-[#1565C0]",
    Static: "bg-[#F3E5F5] text-[#7B1FA2]",
    Gameplay: "bg-[#E8F5E9] text-[#2E7D32]",
  };

  return (
    <span
      className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${colors[style] || "bg-gray-100 text-gray-600"}`}
    >
      {style}
    </span>
  );
}

// Format Badge Component
function FormatBadge({ format }: { format: string }) {
  return (
    <span className="inline-flex px-1.5 py-0.5 rounded text-[9px] font-medium bg-[#F5F5F5] text-[#666] border border-[#E0E0E0]">
      {format}
    </span>
  );
}

// Sidebar Icon Component
function SidebarIcon({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${active ? "bg-[#FFF5F2] text-[#E86A4C]" : "text-[#9E9E9E] hover:bg-[#F5F5F5]"}`}
    >
      {icon}
    </div>
  );
}

// Default brand logos
const defaultBrandLogos: BrandLogo[] = [
  {
    name: "Small Giant",
    logo: (
      <div className="flex items-center gap-1 text-[#333]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="opacity-80"
        >
          <circle cx="10" cy="10" r="8" />
        </svg>
        <span className="text-[11px] font-semibold tracking-tight">
          SMALL
          <br />
          GIANT
        </span>
      </div>
    ),
  },
  {
    name: "Estrid",
    logo: (
      <span className="text-[14px] font-medium tracking-[0.15em] text-[#333]">
        ESTRID
      </span>
    ),
  },
  {
    name: "Labfresh",
    logo: (
      <span className="text-[14px] font-semibold tracking-[0.08em] text-[#333]">
        LABFRESH
      </span>
    ),
  },
  {
    name: "Nitro",
    logo: (
      <div className="flex items-center gap-1 text-[#333]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L16 8L8 16L0 8L8 0Z" />
        </svg>
        <span className="text-[13px] font-medium">NITRO</span>
      </div>
    ),
  },
  {
    name: "PlayValve",
    logo: (
      <div className="flex items-center gap-1.5 text-[#333]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <rect width="18" height="18" rx="4" />
        </svg>
        <span className="text-[13px] font-medium">PlayValve</span>
      </div>
    ),
  },
];

// Default table rows
const defaultTableRows: TableRow[] = [
  {
    conceptName: "Earn Rewards",
    formats: ["9:16", "1:1", "4:5"],
    status: "In Progress",
    style: "Cinematic",
    deadline: "Sep 8th 2024",
  },
  {
    conceptName: "Save the Village",
    formats: ["9:16", "1:1", "4:5"],
    status: "In Review",
    style: "Static",
    deadline: "Sep 8th 2024",
  },
  {
    conceptName: "Join the Battle",
    formats: ["9:16", "1:1", "4:5"],
    status: "Delivered",
    style: "Cinematic",
    deadline: "Sep 1st 2024",
  },
  {
    conceptName: "Choose Your Hero",
    formats: ["9:16", "1:1", "4:5"],
    status: "Delivered",
    style: "Gameplay",
    deadline: "Sep 1st 2024",
  },
  {
    conceptName: "Design Your Dungeon",
    formats: ["9:16", "1:1", "4:5"],
    status: "Delivered",
    style: "Static",
    deadline: "Sep 1st 2024",
  },
];

// Focal Logo Icon
function FocalLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="6" fill="#1A1A1A" />
      <path
        d="M8 10C8 8.89543 8.89543 8 10 8H12V12H8V10Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M14 8H18C19.1046 8 20 8.89543 20 10V12H14V8Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path d="M8 14H12V20H10C8.89543 20 8 19.1046 8 18V14Z" fill="white" />
      <path d="M14 14H20V18C20 19.1046 19.1046 20 18 20H14V14Z" fill="white" />
    </svg>
  );
}

// Main Component
export default function FocalCreativityHero({
  mode = "light",
  headline = {
    accent: "Supercharge",
    main: "your creative pipeline",
  },
  subheadline = "Focal is the central hub for your ad creatives.\nManage, proof, and deliver assets 10x faster.",
  ctaText = "Request access",
  brandLogos = defaultBrandLogos,
  tableRows = defaultTableRows,
  onCtaClick,
}: FocalCreativityHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#FAFAFA] overflow-hidden">
      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20 lg:pt-24">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span
              className="italic font-serif text-[#E86A4C]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {headline.accent}
            </span>
            <br />
            <span className="text-[#1A1A1A]">{headline.main}</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-6 max-w-md text-center text-[15px] leading-relaxed text-[#666] whitespace-pre-line"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={onCtaClick}
            className="rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#333] hover:scale-105 active:scale-100"
          >
            {ctaText}
          </button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto mt-12 max-w-5xl"
        >
          <div className="rounded-2xl border border-[#E5E5E5] bg-white shadow-xl overflow-hidden">
            <div className="flex">
              {/* Sidebar */}
              <div className="w-14 border-r border-[#F0F0F0] bg-[#FAFAFA] py-4 flex flex-col items-center gap-3">
                <div className="mb-2">
                  <FocalLogo />
                </div>
                <SidebarIcon
                  icon={<Files size={18} strokeWidth={1.5} />}
                  active
                />
                <SidebarIcon icon={<LayoutGrid size={18} strokeWidth={1.5} />} />
                <SidebarIcon icon={<Search size={18} strokeWidth={1.5} />} />
                <div className="flex-1" />
                <SidebarIcon icon={<Bell size={18} strokeWidth={1.5} />} />
                <div className="w-7 h-7 rounded-full bg-[#E86A4C] flex items-center justify-center">
                  <Users size={14} className="text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF5F2] flex items-center justify-center">
                      <LayoutGrid size={16} className="text-[#E86A4C]" />
                    </div>
                    <span className="text-base font-semibold text-[#1A1A1A]">
                      Creative Board
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-[#FFD7C4] border-2 border-white" />
                      <div className="w-7 h-7 rounded-full bg-[#C4E5FF] border-2 border-white" />
                    </div>
                    <span className="text-xs text-[#666]">Share</span>
                    <MoreVertical size={16} className="text-[#999]" />
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-4 mb-4 border-b border-[#F0F0F0] pb-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#666]">
                    <LayoutGrid size={12} />
                    <span>All Briefs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#999]">
                    <span>Kanban</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#999]">
                    <span>Emily&apos;s View</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#999]">
                    +
                  </div>
                  <div className="flex-1" />
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-[#F5F5F5] rounded-md">
                    <Search size={12} className="text-[#999]" />
                    <span className="text-xs text-[#999]">Search by content</span>
                  </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-[1.5fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,0.8fr] gap-2 text-[10px] text-[#999] uppercase tracking-wide mb-2 px-2">
                  <span>Aa Concept name</span>
                  <span>Formats</span>
                  <span>Status</span>
                  <span>Style</span>
                  <span>Reference</span>
                  <span>New Assets</span>
                  <span>Deadline</span>
                </div>

                {/* Table Content with Play Button Overlay */}
                <div className="relative">
                  {/* Section: In Progress */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2 px-2">
                      <span className="text-[10px] text-[#E65100] font-medium">
                        In Progress
                      </span>
                      <span className="text-[10px] text-[#999]">1</span>
                    </div>
                    {tableRows
                      .filter((row) => row.status === "In Progress")
                      .map((row, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-[1.5fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,0.8fr] gap-2 items-center py-2 px-2 hover:bg-[#FAFAFA] rounded-lg"
                        >
                          <span className="text-xs text-[#333]">
                            {row.conceptName}
                          </span>
                          <div className="flex gap-1">
                            {row.formats.map((f, i) => (
                              <FormatBadge key={i} format={f} />
                            ))}
                          </div>
                          <StatusBadge status={row.status} />
                          <StyleBadge style={row.style} />
                          <div className="flex gap-0.5">
                            <div className="w-6 h-6 rounded bg-[#FFE4D6]" />
                            <div className="w-6 h-6 rounded bg-[#E8D4FF]" />
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-6 h-6 rounded bg-[#FFE4D6]" />
                            <div className="w-6 h-6 rounded bg-[#D4F4E8]" />
                          </div>
                          <span className="text-[10px] text-[#666]">
                            {row.deadline}
                          </span>
                        </div>
                      ))}
                    <div className="px-2 py-1">
                      <span className="text-xs text-[#CCC]">+</span>
                    </div>
                  </div>

                  {/* Section: In Review */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2 px-2">
                      <span className="text-[10px] text-[#F9A825] font-medium">
                        In Review
                      </span>
                      <span className="text-[10px] text-[#999]">1</span>
                    </div>
                    {tableRows
                      .filter((row) => row.status === "In Review")
                      .map((row, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-[1.5fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,0.8fr] gap-2 items-center py-2 px-2 hover:bg-[#FAFAFA] rounded-lg"
                        >
                          <span className="text-xs text-[#333]">
                            {row.conceptName}
                          </span>
                          <div className="flex gap-1">
                            {row.formats.map((f, i) => (
                              <FormatBadge key={i} format={f} />
                            ))}
                          </div>
                          <StatusBadge status={row.status} />
                          <StyleBadge style={row.style} />
                          <div className="flex gap-0.5">
                            <div className="w-6 h-6 rounded bg-[#E8E4FF]" />
                            <div className="w-6 h-6 rounded bg-[#FFE4E8]" />
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-6 h-6 rounded bg-[#E4F4FF]" />
                            <div className="w-6 h-6 rounded bg-[#FFE8D4]" />
                          </div>
                          <span className="text-[10px] text-[#666]">
                            {row.deadline}
                          </span>
                        </div>
                      ))}
                    <div className="px-2 py-1">
                      <span className="text-xs text-[#CCC]">+</span>
                    </div>
                  </div>

                  {/* Section: Delivered */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2 px-2">
                      <span className="text-[10px] text-[#2E7D32] font-medium">
                        Delivered
                      </span>
                      <span className="text-[10px] text-[#999]">3</span>
                    </div>
                    {tableRows
                      .filter((row) => row.status === "Delivered")
                      .map((row, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-[1.5fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,0.8fr] gap-2 items-center py-2 px-2 hover:bg-[#FAFAFA] rounded-lg"
                        >
                          <span className="text-xs text-[#333]">
                            {row.conceptName}
                          </span>
                          <div className="flex gap-1">
                            {row.formats.map((f, i) => (
                              <FormatBadge key={i} format={f} />
                            ))}
                          </div>
                          <StatusBadge status={row.status} />
                          <StyleBadge style={row.style} />
                          <div className="flex gap-0.5">
                            <div className="w-6 h-6 rounded bg-[#D4E8FF]" />
                            <div className="w-6 h-6 rounded bg-[#FFD4E4]" />
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-6 h-6 rounded bg-[#FFE4D6]" />
                            <div className="w-6 h-6 rounded bg-[#E8FFD4]" />
                          </div>
                          <span className="text-[10px] text-[#666]">
                            {row.deadline}
                          </span>
                        </div>
                      ))}
                    <div className="px-2 py-1">
                      <span className="text-xs text-[#CCC]">+</span>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F8D4D4] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <Play
                        size={24}
                        className="text-[#E86A4C] ml-1"
                        fill="#E86A4C"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 pb-16"
        >
          <p className="text-center text-sm text-[#666] mb-8">
            Trusted by exceptional{" "}
            <span className="bg-[#FFF59D] px-1.5 py-0.5 rounded">brands</span>{" "}
            around the world
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70">
            {brandLogos.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                className="grayscale hover:grayscale-0 transition-all"
              >
                {brand.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
