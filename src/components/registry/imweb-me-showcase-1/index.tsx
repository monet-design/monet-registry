"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#000000",
    accentHover: "#1a1a1a",
    textPrimary: "#1a1a1a",
    textSecondary: "#808080",
    background: "#ffffff",
  },
  dark: {
    accent: "#ffffff",
    accentHover: "#e5e5e5",
    textPrimary: "#ffffff",
    textSecondary: "#a0a0a0",
    background: "#0a0a0a",
  },
} as const;

const TEMPLATES = [
  { name: "DEVINE", category: "쇼핑", color: "#f5f5f5" },
  { name: "Object-B", category: "쇼핑", color: "#e8e8e8" },
  { name: "WISE", category: "쇼핑", color: "#f0f0f0" },
  { name: "Euphoria seoul", category: "쇼핑", color: "#fafafa" },
  { name: "My Cleaning", category: "비즈니스 홍보", color: "#f8f8f8" },
  { name: "Volt.X", category: "비즈니스 홍보", color: "#ebebeb" },
  { name: "GLOBAL LOGISTICS", category: "비즈니스 홍보", color: "#f3f3f3" },
  { name: "Reservation", category: "예약", color: "#f6f6f6" },
  { name: "ZIGULAB", category: "블로그", color: "#ededed" },
  { name: "Archive", category: "포트폴리오", color: "#f1f1f1" },
  { name: "Attention", category: "포트폴리오", color: "#f4f4f4" },
  { name: "Seoul Designer Conference", category: "이벤트", color: "#e9e9e9" },
  { name: "Running Today", category: "커뮤니티", color: "#f7f7f7" },
  { name: "Modern Studio", category: "크리에이티브", color: "#ececec" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface ImwebMeShowcase1Props {
  mode?: "light" | "dark";
  title?: string;
  titleLine2?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  templates?: Array<{
    name: string;
    category: string;
    color?: string;
  }>;
}

function TemplateCard({
  name,
  category,
  color = "#f5f5f5",
  mode = "light",
}: {
  name: string;
  category: string;
  color?: string;
  mode?: "light" | "dark";
}) {
  const colors = COLORS[mode];

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${name} template`}
      className="group flex-shrink-0 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.02]">
        <div
          className="flex h-[210px] w-[360px] items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span
            className="text-lg font-medium opacity-40"
            style={{ color: mode === "light" ? "#1a1a1a" : "#ffffff" }}
          >
            {name}
          </span>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background:
              mode === "light"
                ? "linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0))"
                : "linear-gradient(to top, rgba(10,10,10,0.95), rgba(10,10,10,0))",
          }}
        >
          <p
            className="text-base font-medium"
            style={{ color: colors.textPrimary }}
          >
            {name}
          </p>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ImwebMeShowcase1({
  mode = "light",
  title = "고민 없이 쉽게",
  titleLine2 = "선택만 하세요",
  subtitle = "80+개의 감각적인 템플릿",
  description = "쉽지만 아름다운 웹사이트를 만들어 보세요",
  ctaText = "지금 무료로 시작하기",
  onCtaClick,
  templates = TEMPLATES as unknown as Array<{
    name: string;
    category: string;
    color?: string;
  }>,
}: ImwebMeShowcase1Props) {
  const colors = COLORS[mode];
  const tripleTemplates = [...templates, ...templates, ...templates];

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              style={{ color: colors.textPrimary }}
            >
              {title}
              <br />
              {titleLine2}
            </h2>
          </motion.div>

          {/* Right: Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-right"
          >
            <p
              className="text-base font-medium md:text-lg"
              style={{ color: colors.textSecondary }}
            >
              {subtitle}
            </p>
            <p
              className="text-sm md:text-base"
              style={{ color: colors.textSecondary }}
            >
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Template Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 md:mt-16"
      >
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -360 * templates.length - 6 * templates.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: templates.length * 3,
                ease: "linear",
              },
            }}
          >
            {tripleTemplates.map((template, index) => (
              <TemplateCard
                key={`${template.name}-${index}`}
                name={template.name}
                category={template.category}
                color={template.color}
                mode={mode}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex justify-center md:mt-16"
      >
        <Button
          onClick={onCtaClick}
          className="rounded-full px-8 py-6 text-base font-medium transition-colors"
          style={{
            backgroundColor: colors.accent,
            color: mode === "light" ? "#ffffff" : "#000000",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.accentHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.accent;
          }}
        >
          {ctaText}
        </Button>
      </motion.div>
    </section>
  );
}
