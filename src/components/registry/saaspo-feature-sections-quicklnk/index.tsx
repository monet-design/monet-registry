"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FAF8F5",
    accent: "#7C3AED",
    accentHover: "#6D28D9",
    cardBg: "#FFFFFF",
    darkCardBg: "#1A1A1A",
    yellow: "#E8C547",
    orange: "#F97316",
  },
  dark: {
    background: "#1A1A1A",
    accent: "#A78BFA",
    accentHover: "#8B5CF6",
    cardBg: "#262626",
    darkCardBg: "#0F0F0F",
    yellow: "#E8C547",
    orange: "#FB923C",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  avatar1: {
    path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
    alt: "User avatar 1",
  },
  avatar2: {
    path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    alt: "User avatar 2",
  },
  avatar3: {
    path: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    alt: "User avatar 3",
  },
  gridImage1: {
    path: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop",
    alt: "Restaurant interior",
  },
  gridImage2: {
    path: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop",
    alt: "Mountain landscape",
  },
  gridImage3: {
    path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    alt: "Architecture",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import {
  ChevronDown,
  Plus,
  MoreHorizontal,
  MessageCircle,
  Heart,
  Music,
  MessageSquare,
  Video,
  Twitter,
  Bookmark,
  Send,
} from "lucide-react";

interface SaaspoFeatureSectionsQuicklnkProps {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  description?: string;
}

// Social link icons data
const socialLinks = [
  { name: "Spotify", icon: Music, color: "#1DB954", user: "@sony_Whis" },
  { name: "WhatsApp", icon: MessageSquare, color: "#25D366", user: "@monster_fan" },
  { name: "Notion", icon: Bookmark, color: "#000000", user: "@smith_Leader" },
  { name: "TikTok", icon: Video, color: "#000000", user: "@otter_Maker" },
  { name: "Twitter", icon: Twitter, color: "#1DA1F2", user: "@diver_Fusion" },
  { name: "Telegram", icon: Send, color: "#0088CC", user: "@diver_Nomad" },
  { name: "Discord", icon: MessageCircle, color: "#5865F2", user: "@silver_forest" },
  { name: "Pinterest", icon: Heart, color: "#E60023", user: "@Pearl_Prism" },
];

export default function SaaspoFeatureSectionsQuicklnk({
  mode = "light",
  label = "Platform Features",
  title = "Everything you need, at one place!",
  description = "We understand the importance of simplifying online navigation. We've created a space where you can share all your important links in one central location, making it easy for your audience to connect with you across various platforms.",
}: SaaspoFeatureSectionsQuicklnkProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative wave pattern */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1200 120"
          className="absolute top-0 w-full"
          style={{ fill: mode === "light" ? "#E5E0D9" : "#2A2A2A" }}
        >
          <path d="M0,0 C300,100 600,20 900,80 C1050,110 1150,60 1200,40 L1200,0 Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: colors.accent }}
          >
            {label}
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif italic"
            style={{ color: mode === "light" ? "#1A1A1A" : "#FFFFFF" }}
          >
            {title}
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-sm md:text-base"
            style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}
          >
            {description}
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Theme Studio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: colors.cardBg }}
          >
            <h3
              className="text-lg md:text-xl font-semibold italic mb-2"
              style={{ color: mode === "light" ? "#1A1A1A" : "#FFFFFF" }}
            >
              Theme Studio: Your Profile,<br />Your Style
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}
            >
              Take control and customise the content displayed on your
              profile page effortlessly. From themes and colors to layout
              preferences, this is your canvas to reflect your style.
            </p>

            {/* Theme controls */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                {/* Custom Theme Dropdown */}
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm"
                  style={{
                    borderColor: mode === "light" ? "#E5E7EB" : "#374151",
                    color: mode === "light" ? "#1A1A1A" : "#FFFFFF",
                  }}
                >
                  <span>Custom Theme</span>
                  <ChevronDown className="w-4 h-4" />
                </div>

                {/* Avatars */}
                <div className="flex -space-x-2">
                  {[IMAGES.avatar1, IMAGES.avatar2, IMAGES.avatar3].map((img, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 overflow-hidden"
                      style={{
                        borderColor: colors.cardBg,
                        backgroundColor: mode === "light" ? "#E5E7EB" : "#374151",
                      }}
                    >
                      <Image
                        src={img.path}
                        alt={img.alt}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Social Links Button */}
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-white"
                style={{ backgroundColor: colors.accent }}
              >
                <Plus className="w-4 h-4" />
                Add Social Links
              </button>
            </div>

            {/* Font Styling Tag */}
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border"
              style={{ borderColor: mode === "light" ? "#E5E7EB" : "#374151" }}
            >
              <span
                className="text-xs font-medium"
                style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}
              >
                Font Styling
              </span>
              <span
                className="font-serif italic text-sm"
                style={{ color: mode === "light" ? "#1A1A1A" : "#FFFFFF" }}
              >
                Playball
              </span>
            </div>
          </motion.div>

          {/* Card 2: Seamlessly Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: colors.cardBg }}
          >
            <h3
              className="text-lg md:text-xl font-semibold mb-2"
              style={{ color: mode === "light" ? "#1A1A1A" : "#FFFFFF" }}
            >
              Seamlessly connect your quick link<br />with the platforms you already use.
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}
            >
              Analyse your audience and keep your followers engaged
            </p>
            <p
              className="text-xs mb-6"
              style={{ color: mode === "light" ? "#9CA3AF" : "#6B7280" }}
            >
              Track your engagement over time, monitor revenue and learn what&apos;s converting
              your audience. Make informed updates on the fly to keep them coming back.
            </p>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((link, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                  style={{
                    backgroundColor: mode === "light" ? "#F9FAFB" : "#262626",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center"
                    style={{ backgroundColor: link.color }}
                  >
                    <link.icon className="w-3 h-3 text-white" />
                  </div>
                  <span style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}>
                    https://qlink.app/{link.user}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Dashboard & Analytics Hub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: colors.cardBg }}
          >
            <h3
              className="text-lg md:text-xl font-semibold mb-2"
              style={{ color: mode === "light" ? "#1A1A1A" : "#FFFFFF" }}
            >
              Dashboard & Analytics Hub
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}
            >
              Dive into comprehensive statistics and real-time data related to your profile.
              Monitor link clicks, track engagement trends, and gain valuable insights into
              your online presence.
            </p>

            {/* Analytics Card */}
            <div
              className="rounded-xl p-4 shadow-sm"
              style={{
                backgroundColor: mode === "light" ? "#FFFFFF" : "#1A1A1A",
                border: mode === "light" ? "1px solid #E5E7EB" : "1px solid #374151",
              }}
            >
              {/* Profile Analysis Label */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: mode === "light" ? "#FFF7ED" : "#431407",
                    color: colors.orange,
                  }}
                >
                  Profile Analysis
                </span>
                <MoreHorizontal
                  className="w-5 h-5"
                  style={{ color: mode === "light" ? "#9CA3AF" : "#6B7280" }}
                />
              </div>

              {/* Insta Grid Profile */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  style={{ backgroundColor: mode === "light" ? "#E5E7EB" : "#374151" }}
                >
                  <Image
                    src={IMAGES.avatar1.path}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: mode === "light" ? "#1A1A1A" : "#FFFFFF" }}
                  >
                    Insta Grid
                  </p>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[IMAGES.gridImage1, IMAGES.gridImage2, IMAGES.gridImage3].map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden"
                    style={{ backgroundColor: mode === "light" ? "#E5E7EB" : "#374151" }}
                  >
                    <Image
                      src={img.path}
                      alt={img.alt}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MessageCircle
                    className="w-4 h-4"
                    style={{ color: mode === "light" ? "#9CA3AF" : "#6B7280" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}
                  >
                    9k comments
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart
                    className="w-4 h-4"
                    style={{ color: mode === "light" ? "#9CA3AF" : "#6B7280" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: mode === "light" ? "#6B7280" : "#9CA3AF" }}
                  >
                    10 likes
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Engagement Stats (Dark Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl p-6 flex flex-col justify-center"
            style={{ backgroundColor: colors.darkCardBg }}
          >
            <p
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
              style={{ color: colors.yellow }}
            >
              2%
            </p>
            <p className="text-white text-sm mb-4">Increase in Engagements</p>
            <p className="text-gray-400 text-sm">
              Users has reported 60% increase in
              engagement analytics after using
              quicklnk platform.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
