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
    background: "#ECECEC",
    cardBackground: "#FFFFFF",
    buttonDark: "#3C3C3C",
    buttonDarkHover: "#2A2A2A",
  },
  dark: {
    background: "#0F0F0F",
    cardBackground: "#1A1A1A",
    buttonDark: "#FFFFFF",
    buttonDarkHover: "#E5E5E5",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  automation: {
    path: "/registry/evolux-waitlist/automation-icon.png",
    alt: "Intelligent Automation Icon",
    prompt: `<xml>
<is_transparent_background>true</is_transparent_background>
<summary>Simple geometric icon representing intelligent automation with robotic or gear elements</summary>
<mood>Modern, minimalist, tech-forward, clean line art style</mood>
<background_summary>Fully transparent background</background_summary>
<primary_element>A single-color white icon featuring a simple robotic head or gear symbol with circuit-like elements. The design should be centered, minimal, and use clean lines. The icon should be approximately 48x48 pixels in effective size. Style: flat design, geometric, similar to Lucide or Feather icon sets.</primary_element>
<etc_element>None - just the single icon centered on transparent background</etc_element>
</xml>`,
  },
  intelligence: {
    path: "/registry/evolux-waitlist/intelligence-icon.png",
    alt: "Predictive Intelligence Icon",
    prompt: `<xml>
<is_transparent_background>true</is_transparent_background>
<summary>Simple geometric icon representing predictive intelligence with sparkle or star elements</summary>
<mood>Modern, minimalist, tech-forward, clean line art style</mood>
<background_summary>Fully transparent background</background_summary>
<primary_element>A single-color white icon featuring a sparkle or star symbol with multiple pointed rays, suggesting AI brilliance and intelligence. The design should be centered, minimal, and use clean lines. The icon should be approximately 48x48 pixels in effective size. Style: flat design, geometric, similar to Lucide or Feather icon sets.</primary_element>
<etc_element>None - just the single icon centered on transparent background</etc_element>
</xml>`,
  },
  integration: {
    path: "/registry/evolux-waitlist/integration-icon.png",
    alt: "Seamless Integration Icon",
    prompt: `<xml>
<is_transparent_background>true</is_transparent_background>
<summary>Simple geometric icon representing seamless integration with puzzle or connection elements</summary>
<mood>Modern, minimalist, tech-forward, clean line art style</mood>
<background_summary>Fully transparent background</background_summary>
<primary_element>A single-color white icon featuring interlocking puzzle pieces or connection nodes suggesting seamless integration. The design should be centered, minimal, and use clean lines. The icon should be approximately 48x48 pixels in effective size. Style: flat design, geometric, similar to Lucide or Feather icon sets.</primary_element>
<etc_element>None - just the single icon centered on transparent background</etc_element>
</xml>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Infinity, Power, Moon, Send } from "lucide-react";

interface EvoluxWaitlistProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  badgeText?: string;
  ctaButtonText?: string;
  trustText?: string;
  features?: Array<{
    title: string;
    icon: keyof typeof IMAGES;
  }>;
  onSubmit?: (email: string) => void;
}

export default function EvoluxWaitlist({
  mode = "light",
  title = "Early Access to\nGame-Changing AI",
  subtitle = "Unlock exclusive early access to groundbreaking AI.\nSubscribe now and stay ahead of the future!",
  badgeText = "Beyond Artificial",
  ctaButtonText = "Subscribe",
  trustText = "Trusted by 1,000+ early adopters",
  features = [
    { title: "Intelligent\nAutomation", icon: "automation" },
    { title: "Predictive\nIntelligence", icon: "intelligence" },
    { title: "Seamless\nIntegration", icon: "integration" },
  ],
  onSubmit,
}: EvoluxWaitlistProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");
  const isDark = mode === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
      setEmail("");
    }
  };

  // Mock avatars for trust indicator
  const avatarColors = ["bg-blue-500", "bg-purple-500", "bg-pink-500"];

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-20"
      style={{ backgroundColor: colors.background }}
    >
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl rounded-3xl shadow-2xl p-12"
        style={{ backgroundColor: colors.cardBackground }}
      >
        {/* Header Icons */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.buttonDark }}
          >
            <Power className="w-5 h-5 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <Moon
              className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-600"}`}
            />
          </motion.button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center text-center mt-12 space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 ${
                isDark
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <Infinity className="w-4 h-4" />
              {badgeText}
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-base max-w-2xl ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {subtitle.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="w-full max-w-md flex items-center gap-3"
          >
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`flex-1 h-12 px-4 rounded-xl border-2 ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
              }`}
            />
            <Button
              type="submit"
              className="h-12 px-6 rounded-xl font-medium flex items-center gap-2"
              style={{
                backgroundColor: colors.buttonDark,
                color: isDark ? "#000000" : "#FFFFFF",
              }}
            >
              <Send className="w-4 h-4" />
              {ctaButtonText}
            </Button>
          </motion.form>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {avatarColors.map((color, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${color} border-2 ${
                    isDark ? "border-gray-800" : "border-white"
                  }`}
                />
              ))}
            </div>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {trustText}
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4 p-6"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.buttonDark }}
                >
                  <img
                    src={IMAGES[feature.icon].path}
                    alt={IMAGES[feature.icon].alt}
                    className="w-7 h-7"
                  />
                </div>
                <p
                  className={`text-sm font-medium text-center ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
