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
    accent: "#FF6B35",
    accentHover: "#E55A2B",
    background: "#F8F8F8",
    cardBg: "#FFFFFF",
    tagBg: "#FFF5F0",
    tagText: "#FF6B35",
  },
  dark: {
    accent: "#FF7B45",
    accentHover: "#FF6B35",
    background: "#1A1A1A",
    cardBg: "#2A2A2A",
    tagBg: "#3D2A20",
    tagText: "#FF7B45",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  person1: {
    path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    alt: "Person speaking in video thumbnail",
    prompt: `Professional male speaker in video thumbnail - energetic pose with caption overlay. Studio lighting, warm tones. Young professional man with short dark hair, casual business attire, animated expression.`,
  },
  person2: {
    path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    alt: "Person in video thumbnail",
    prompt: `Professional male speaker - conversational pose. Friendly, approachable style. Medium brown hair, smart casual attire, relaxed posture.`,
  },
  person3: {
    path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    alt: "Person teaching in video",
    prompt: `Professional male speaker - teaching pose. Educational, knowledgeable style. Light brown hair, business casual, expressive hand gesture.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import {
  Home,
  Camera,
  Tv,
  Sparkles,
  Maximize2,
  Clock,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SaaspoFeatureSectionsSubmagicProps {
  mode?: "light" | "dark";
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// Caption tag component
function CaptionTag({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "orange" | "green" | "blue" | "gray";
}) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    orange: "bg-orange-100 text-orange-600",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    gray: "bg-gray-200 text-gray-600",
  };

  return (
    <span
      className={`inline-block px-3 py-1.5 rounded-md text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

// Effect button component
function EffectButton({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all ${
        active ? "bg-orange-50 border-2 border-orange-400" : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
      }`}
    >
      <span className="text-gray-600">{icon}</span>
      <span className="text-xs text-gray-600">{label}</span>
    </button>
  );
}

// Video thumbnail component
function VideoThumbnail({
  src,
  alt,
  label,
  labelColor = "orange",
}: {
  src: string;
  alt: string;
  label?: string;
  labelColor?: "orange" | "green" | "blue";
}) {
  const labelColors = {
    orange: "bg-orange-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="relative rounded-lg overflow-hidden aspect-[9/16] w-16 shrink-0">
      <Image src={src} alt={alt} fill className="object-cover" />
      {label && (
        <span
          className={`absolute bottom-1 left-1/2 -translate-x-1/2 ${labelColors[labelColor]} text-white text-[10px] px-2 py-0.5 rounded-full`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export default function SaaspoFeatureSectionsSubmagic({
  mode = "light",
  title = "Everything you need to create",
  highlightedTitle = "captivating shorts faster.",
  subtitle = "Your all-in-one platform to effortlessly create captivating shorts that drive conversions.",
  ctaText = "Create Free Shorts",
  onCtaClick,
}: SaaspoFeatureSectionsSubmagicProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
            <br />
            <span style={{ color: colors.accent }}>{highlightedTitle}</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">{subtitle}</p>
          <button
            onClick={onCtaClick}
            className="px-6 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
          </button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Top Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Captions */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-sm"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Captions that boost your reach
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Beautiful AI-powered captions in over 48 languages make your
                videos accessible to everyone, even when sound is off.
              </p>

              <div className="flex gap-4">
                {/* Caption tags */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <CaptionTag variant="gray">Daniel</CaptionTag>
                    <CaptionTag variant="orange">DAM</CaptionTag>
                  </div>
                  <div className="flex gap-2">
                    <CaptionTag variant="gray">HORMOZI 1</CaptionTag>
                    <CaptionTag variant="green">JAZZY</CaptionTag>
                  </div>
                  <div className="flex gap-2">
                    <CaptionTag variant="gray">Ali</CaptionTag>
                    <CaptionTag variant="blue">UME</CaptionTag>
                  </div>
                </div>

                {/* Video preview */}
                <div className="relative rounded-xl overflow-hidden aspect-[9/16] w-32 ml-auto border-4 border-orange-400">
                  <Image
                    src={IMAGES.person1.path}
                    alt={IMAGES.person1.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="bg-yellow-400 text-black px-2 py-0.5 text-xs font-bold rounded">
                      CAPTIONS
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Visuals / B-Rolls */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-sm"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Visuals that amplify your story
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Transform your videos with professional B-Rolls footage that
                amplify your message and keep your audience engaged.
              </p>

              <div className="flex gap-4">
                {/* Timeline preview */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="font-medium text-gray-900">
                      Magic B-Rolls
                    </span>
                  </div>

                  {/* Timeline items */}
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                      <div className="w-12 h-8 bg-gray-200 rounded overflow-hidden relative shrink-0">
                        <Image
                          src={IMAGES.person2.path}
                          alt="Timeline clip"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-500">00:12 - 00:17</p>
                        <p className="text-gray-700">
                          Because it&apos;s becoming evidently obvious to me
                          that this very much is like the calculator to life.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                      <div className="w-12 h-8 bg-gray-200 rounded overflow-hidden relative shrink-0">
                        <Image
                          src={IMAGES.person3.path}
                          alt="Timeline clip"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-500">00:18 - 00:21</p>
                        <p className="text-gray-700">
                          not to overexaggerate, but it
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Row - Wide Card: Viral Shorts */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: colors.cardBg }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Turn long videos into viral shorts instantly
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Our AI extracts the best moments of your long videos and creates
              viral shorts in one click.
            </p>

            {/* Video flow */}
            <div className="flex flex-col items-center gap-4">
              {/* Thumbnails row */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full justify-center">
                <VideoThumbnail
                  src={IMAGES.person1.path}
                  alt="Hook clip"
                  label="Hook"
                  labelColor="orange"
                />
                <VideoThumbnail
                  src={IMAGES.person2.path}
                  alt="Content clip"
                  label="Content"
                  labelColor="green"
                />
                <VideoThumbnail
                  src={IMAGES.person3.path}
                  alt="Action clip"
                  label="Action"
                  labelColor="orange"
                />
                <VideoThumbnail
                  src={IMAGES.person1.path}
                  alt="Additional clip"
                />
                <VideoThumbnail
                  src={IMAGES.person2.path}
                  alt="Additional clip"
                />
                <VideoThumbnail
                  src={IMAGES.person3.path}
                  alt="Additional clip"
                />
              </div>

              {/* Arrows and result */}
              <div className="flex items-center gap-4">
                <ChevronRight className="w-5 h-5 text-gray-400" />
                <ChevronRight className="w-5 h-5 text-gray-400 -ml-3" />
                <div className="relative rounded-xl overflow-hidden aspect-[9/16] w-20 border-4 border-orange-400">
                  <Image
                    src={IMAGES.person1.path}
                    alt="Viral clip result"
                    fill
                    className="object-cover"
                  />
                </div>
                <ChevronLeft className="w-5 h-5 text-gray-400" />
                <ChevronLeft className="w-5 h-5 text-gray-400 -ml-3" />
              </div>

              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: colors.tagBg,
                  color: colors.tagText,
                }}
              >
                Viral Clips
              </span>
            </div>
          </motion.div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card: Trim Videos */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-sm"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trim your videos faster
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Cut silences, remove filler words, and edit your videos as
                easily as editing text to save you hours of work.
              </p>

              {/* Editor preview */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-gray-500">
                    Submagic Clip.mp4
                  </span>
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  <p>
                    This is literally the cheapest $20 you could probably ever
                    spend in your entire life,
                  </p>
                  <p className="mt-2">
                    <span className="bg-orange-100 text-orange-600 px-1 rounded line-through">
                      because-of-the-fact
                    </span>{" "}
                    that the amount
                  </p>
                  <p className="mt-2">
                    of ROI you can get on the outputs from AI I offer that $20
                    should be over it, right?
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card: Viewer Retention */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 shadow-sm"
              style={{ backgroundColor: colors.cardBg }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Boost your viewer retention
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Keep viewers hooked with beautiful transitions and dynamic zooms
                that make your content impossible to ignore.
              </p>

              <div className="flex gap-4">
                {/* Video preview */}
                <div className="relative rounded-xl overflow-hidden aspect-[9/16] w-28 shrink-0">
                  <Image
                    src={IMAGES.person2.path}
                    alt="Video with effects"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                      <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Effect buttons */}
                <div className="grid grid-cols-2 gap-2 flex-1">
                  <EffectButton icon={<Home className="w-5 h-5" />} label="Film Burn" />
                  <EffectButton icon={<Camera className="w-5 h-5" />} label="Film B-Roll" />
                  <EffectButton icon={<Tv className="w-5 h-5" />} label="Glitch" />
                  <EffectButton icon={<Sparkles className="w-5 h-5" />} label="Zoom Fast" active />
                  <EffectButton icon={<Maximize2 className="w-5 h-5" />} label="Zoom Out" />
                  <EffectButton icon={<Clock className="w-5 h-5" />} label="Zoom Slow" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Wide Card: Hooks */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 shadow-sm"
            style={{ backgroundColor: colors.cardBg }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Create hooks that stop the scroll
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Hook your audience from the first seconds with AI-powered hooks
              that hold their attention.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Hook generator */}
              <div className="flex-1 bg-gray-50 rounded-xl p-4">
                {/* Window controls */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mb-4 text-xs">
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                    Copy
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                    Regenerate
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                    Shorten
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                    Expand
                  </button>
                </div>

                {/* Hook suggestions */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1 h-4 rounded-full"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span className="text-xs text-gray-500">AI Hook Title</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
                    <div
                      className="w-1 h-full rounded-full self-stretch"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span className="text-sm text-gray-700">
                      Turn One Video into 10 Viral Shorts
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
                    <div
                      className="w-1 h-full rounded-full self-stretch"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span className="text-sm text-gray-700">
                      Create Viral Shorts in Seconds
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
                    <div
                      className="w-1 h-full rounded-full self-stretch"
                      style={{ backgroundColor: colors.accent }}
                    />
                    <span className="text-sm text-gray-700">
                      Want Viral Videos? AI Makes It Happen in Seconds
                    </span>
                  </div>
                </div>
              </div>

              {/* Before/After preview */}
              <div className="flex gap-4">
                <div className="text-center">
                  <span className="text-xs text-gray-500 mb-2 block">
                    Before
                  </span>
                  <div className="relative rounded-xl overflow-hidden aspect-[9/16] w-24">
                    <Image
                      src={IMAGES.person3.path}
                      alt="Before hook"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs mb-2 block" style={{ color: colors.accent }}>
                    After
                  </span>
                  <div
                    className="relative rounded-xl overflow-hidden aspect-[9/16] w-24 border-2"
                    style={{ borderColor: colors.accent }}
                  >
                    <Image
                      src={IMAGES.person3.path}
                      alt="After hook"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p
                        className="text-white text-[10px] font-bold"
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                      >
                        Captivate
                      </p>
                      <p
                        className="text-white text-[8px]"
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                      >
                        your viewers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
