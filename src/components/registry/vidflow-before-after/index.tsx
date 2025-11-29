"use client";

import { motion } from "motion/react";
import {
  Play,
  Volume2,
  Clock,
  Share2,
  Grid3X3,
  Settings,
  Maximize,
} from "lucide-react";
import "./font.css";

// Types
interface VidflowBeforeAfterProps {
  title?: string;
  videoTitle?: string;
  duration?: string;
  ctaText?: string;
  variant?: "before" | "after";
}

// 4-Pointed Star Icon Component
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  );
}

// Video Thumbnail Placeholder
function VideoThumbnail() {
  return (
    <div className="h-full w-full rounded-lg bg-[#424536]" />
  );
}

// Video Player Card Component
function VideoPlayerCard({
  videoTitle = "Your video title",
  duration = "02:34",
}: {
  videoTitle?: string;
  duration?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#E8E8DC]/60 bg-[#FFFCE1] shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D2E28]" />
          {/* Title */}
          <span className="text-sm font-medium text-[#2D2E28]">
            {videoTitle}
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-xs text-[#5A5B4F] transition-colors hover:text-[#2D2E28]">
            <Clock className="h-4 w-4" />
            <span>Watch later</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-[#5A5B4F] transition-colors hover:text-[#2D2E28]">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Video Thumbnails Container */}
      <div className="px-4 pb-3">
        <div className="flex h-24 gap-2">
          <div className="flex-1 rounded-lg bg-[#424536]" />
          <div className="flex-1 rounded-lg bg-[#424536]" />
          <div className="flex-1 rounded-lg bg-[#424536]" />
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Controls */}
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center text-[#2D2E28] transition-colors hover:text-[#5A5B4F]">
            <Play className="h-5 w-5" fill="#2D2E28" />
          </button>
          <button className="flex items-center justify-center text-[#2D2E28] transition-colors hover:text-[#5A5B4F]">
            <Volume2 className="h-5 w-5" />
          </button>
          <span className="text-xs text-[#5A5B4F]">00:00/{duration}</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center text-[#5A5B4F] transition-colors hover:text-[#2D2E28]">
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button className="flex items-center justify-center text-[#5A5B4F] transition-colors hover:text-[#2D2E28]">
            <Settings className="h-4 w-4" />
          </button>
          <button className="flex items-center justify-center text-[#5A5B4F] transition-colors hover:text-[#2D2E28]">
            <Maximize className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function VidflowBeforeAfter({
  title = "Before",
  videoTitle = "Your video title",
  duration = "02:34",
  ctaText = "Start now",
  variant = "before",
}: VidflowBeforeAfterProps) {
  const isBeforeVariant = variant === "before";

  return (
    <section className="w-full bg-[#FFFCE1] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Title with Star */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <h2
            className="text-2xl font-bold tracking-tight text-[#2D2E28] sm:text-3xl"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {title}
          </h2>
          {isBeforeVariant && (
            <StarIcon className="mb-3 h-3 w-3 text-[#BC776C]" />
          )}
        </motion.div>

        {/* Video Player Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <VideoPlayerCard videoTitle={videoTitle} duration={duration} />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <button className="rounded-full bg-[#464839] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3D3E35]">
            {ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
