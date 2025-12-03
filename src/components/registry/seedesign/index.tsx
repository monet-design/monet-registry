"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale은 Tailwind semantic color 사용 (bg-gray-900, text-gray-500 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // 브랜드 Primary (그린)
    accent: "#4CC57A",          // 주요 액센트 (버튼, 아이콘, 포커스)
    accentHover: "#3DAF68",     // 액센트 호버
    // 브랜드 Secondary (골드)
    gold: "#C19710",            // 파운더 뱃지
  },
  dark: {
    accent: "#4CC57A",
    accentHover: "#3DAF68",
    gold: "#C19710",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  leftDecoration: {
    path: "/registry/seedesign/3d-shapes-left.png",
    alt: "3D decorative shapes",
    prompt: `Abstract 3D decorative shapes floating composition.
Style: Glossy 3D render, playful, modern, premium quality
Layout: Vertical arrangement, shapes overlapping/interconnected
Elements:
- Pink/magenta wavy squiggle line (S-shape)
- Gold metallic torus/donut ring
- Teal/cyan glossy sphere (glass-like transparency)
- Small emerald green crystal/gem at bottom
Color palette: Hot pink, metallic gold, teal/cyan, emerald green on transparent background
Mood: Creative, fun, premium design agency aesthetic
Technical: Transparent PNG, soft shadows, high-gloss materials, 3D rendered`,
  },
  rightDecoration: {
    path: "/registry/seedesign/pixel-decoration.png",
    alt: "Pixel decoration",
    prompt: `Abstract 3D pixel/voxel cube cluster.
Style: Isometric 3D voxel art, clean, modern, tech-inspired
Layout: Cloud-like cluster of floating cubes arranged organically
Elements:
- Multiple small 3D cubes in varying sizes
- Mix of white, gray (light and dark), and green accent cubes
- Cubes appear to be floating/scattered in space
Color palette: White, light gray, charcoal/dark gray, soft green accent on transparent background
Mood: Tech, modern, digital, creative
Technical: Transparent PNG, soft shadows, clean isometric perspective`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Award, Zap, LayoutGrid, ChevronDown, Calendar } from "lucide-react";

interface Feature {
  icon: "award" | "zap" | "layout";
  title: string;
  description: string;
}

interface FounderInfo {
  name: string;
  role: string;
  message: string;
  avatarUrl?: string;
}

interface SeedesignProps {
  mode?: "light" | "dark";
  headline?: {
    regular: string;
    accent: string;
  };
  features?: Feature[];
  founder?: FounderInfo;
  formTitle?: string;
  formAcceptingText?: string;
  budgetOptions?: string[];
  submitButtonText?: string;
  bookCallButtonText?: string;
  leftDecorationImage?: string;
  rightDecorationImage?: string;
  onSubmit?: (data: FormData) => void;
  onBookCall?: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  budget: string;
  brief: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: "award",
    title: "Quality First",
    description:
      "We never compromise on quality, delivering polished, high-conversion designs every time.",
  },
  {
    icon: "zap",
    title: "Quick Turnaround",
    description:
      "We believe in fast execution — focusing, shipping quickly, and refining through iteration.",
  },
  {
    icon: "layout",
    title: "Flexible Process",
    description:
      "Efficiency is key. We streamline workflows to deliver high-quality designs without unnecessary delays.",
  },
];

const defaultFounder: FounderInfo = {
  name: "Marko",
  role: "founder of SeeDesign agency",
  message: "Hey, Marko here — founder of SeeDesign agency. Excited to hear from you!",
  avatarUrl: undefined,
};

const defaultBudgetOptions = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

function FeatureIcon({ type }: { type: "award" | "zap" | "layout" }) {
  const iconClass = "w-4 h-4 text-white";
  switch (type) {
    case "award":
      return <Award className={iconClass} />;
    case "zap":
      return <Zap className={iconClass} />;
    case "layout":
      return <LayoutGrid className={iconClass} />;
    default:
      return <Award className={iconClass} />;
  }
}

export default function Seedesign({
  mode = "dark",
  headline = {
    regular: "The premium design partner that sets you up for",
    accent: "success.",
  },
  features = defaultFeatures,
  founder = defaultFounder,
  formTitle = "GET A QUOTE",
  formAcceptingText = "Accepting new projects",
  budgetOptions = defaultBudgetOptions,
  submitButtonText = "Submit request",
  bookCallButtonText = "Book a free call",
  leftDecorationImage = IMAGES.leftDecoration.path,
  rightDecorationImage = IMAGES.rightDecoration.path,
  onSubmit,
  onBookCall,
}: SeedesignProps) {
  const colors = COLORS[mode];
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    budget: "",
    brief: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://db.onlinewebfonts.com/c/82346df2075cf90ed44a8e36099a87a8?family=Satoshi+Variable";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
    setIsDropdownOpen(false);
  };

  return (
    <section
      className="relative w-full min-h-[600px] bg-gray-950 overflow-hidden py-12 md:py-16 lg:py-20"
      style={{ fontFamily: "'Satoshi Variable', 'Inter', sans-serif" }}
    >
      {/* Left 3D Decoration */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -left-10 md:-left-14 lg:-left-16 top-1/2 -translate-y-1/4 w-24 md:w-32 lg:w-40 h-44 md:h-56 lg:h-64 pointer-events-none z-0"
      >
        <Image
          src={leftDecorationImage}
          alt={IMAGES.leftDecoration.alt}
          fill
          className="object-contain object-left"
        />
      </motion.div>

      {/* Right Pixel Decoration */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-4 md:right-8 lg:right-16 top-6 md:top-10 w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 pointer-events-none z-20"
      >
        <Image
          src={rightDecorationImage}
          alt={IMAGES.rightDecoration.alt}
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Headline & Features */}
          <div className="space-y-10">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight">
                {headline.regular.split(" ").map((word, i, arr) => (
                  <span key={i}>
                    {word}
                    {i < arr.length - 1 ? " " : ""}
                    {i === 5 && <br className="hidden md:block" />}
                    {i === 8 && <br className="hidden md:block" />}
                  </span>
                ))}
                <span className="inline-flex items-center">
                  <Zap
                    className="w-6 h-6 md:w-7 md:h-7 mx-1 inline"
                    style={{ color: colors.accent, fill: colors.accent }}
                  />
                  <span className="italic" style={{ color: colors.accent }}>
                    {headline.accent}
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <FeatureIcon type={feature.icon} />
                    </div>
                    <h3 className="text-white font-semibold text-sm">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-7">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-black border border-gray-900 rounded-2xl p-6 md:p-8"
          >
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold text-sm tracking-wide">
                {formTitle}
              </h2>
              <div
                className="flex items-center gap-1.5 text-xs"
                style={{ color: colors.accent }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="italic">{formAcceptingText}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-500 text-xs">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Jane Smith"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none transition-colors"
                    style={{ borderColor: formData.fullName ? colors.accent : undefined }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-500 text-xs">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Budget Dropdown */}
              <div className="space-y-2">
                <label className="text-gray-500 text-xs">Budget</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-left text-sm flex items-center justify-between focus:outline-none transition-colors"
                  >
                    <span className={formData.budget ? "text-white" : "text-gray-600"}>
                      {formData.budget || "Select..."}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-600 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 w-full mt-1 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-xl"
                    >
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleBudgetSelect(option)}
                          className="w-full px-4 py-2.5 text-left text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Brief Textarea */}
              <div className="space-y-2">
                <label className="text-gray-500 text-xs">Short brief</label>
                <textarea
                  name="brief"
                  value={formData.brief}
                  onChange={handleInputChange}
                  placeholder="Write a short brief"
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white font-medium py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors"
                style={{ backgroundColor: colors.accent }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              >
                {submitButtonText}
                <span className="text-lg">&raquo;</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Founder Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center gap-4 bg-gray-900 rounded-xl p-4 border border-gray-800 max-w-xl"
        >
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
              {founder.avatarUrl ? (
                <Image
                  src={founder.avatarUrl}
                  alt={founder.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              ) : (
                <span className="text-white text-lg font-medium">
                  {founder.name.charAt(0)}
                </span>
              )}
            </div>
            <div
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.gold }}
            >
              <span className="text-[8px]">S</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-sm">
              Let&apos;s create magic together
            </h4>
            <p className="text-gray-500 text-xs truncate">
              Hey, {founder.name} here — {founder.role}. Excited to hear from you!
            </p>
          </div>
          <button
            onClick={onBookCall}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-700 text-white text-xs font-medium rounded-lg hover:bg-gray-900 transition-colors whitespace-nowrap"
          >
            {bookCallButtonText}
            <Calendar className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
