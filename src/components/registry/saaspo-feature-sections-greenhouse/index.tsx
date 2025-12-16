"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Dark green for headings
    heading: "#1F3A30",
    // Green for links
    link: "#2D6A4F",
    linkHover: "#1B4D3E",
    // Text colors
    body: "#5A5A5A",
  },
  dark: {
    heading: "#A3D9A5",
    link: "#6BCB77",
    linkHover: "#8FD99A",
    body: "#B0B0B0",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  feature1: {
    path: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    alt: "Two colleagues having a friendly conversation in a modern office",
    prompt: `A candid office photo of two colleagues having a friendly conversation at a desk. A woman in her 30s wearing a pink/mauve sweater with curly brown hair, smiling warmly while sitting at a desk. Modern bright office space with white walls, subtle greenery/plants visible.`,
  },
  feature2: {
    path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    alt: "Professional smiling Black man with glasses in office setting",
    prompt: `A professional portrait of a smiling Black man in his 30s-40s wearing glasses and a light olive/khaki button-up shirt, smiling genuinely at the camera with a warm, confident expression. Bright, slightly blurred modern office background.`,
  },
  feature3: {
    path: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    alt: "Two professional women collaborating at a wall with sticky notes",
    prompt: `Two professional women collaborating at a wall with sticky notes in a modern office. They are engaged in placing or organizing colorful sticky notes on the wall, appearing to brainstorm or plan together.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Feature {
  image: {
    path: string;
    alt: string;
  };
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface SaaspoFeatureSectionsGreenhouseProps {
  mode?: "light" | "dark";
  heading?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    image: IMAGES.feature1,
    title: "Dedicated to your success",
    description:
      "Expertise and advice to help your organization get the most value from Greenhouse and reach your hiring goals – faster.",
    linkText: "Learn more",
    linkHref: "#",
  },
  {
    image: IMAGES.feature2,
    title: "A leader in hiring software",
    description:
      "Discover how our award-winning hiring software supports your business growth at any stage.",
    linkText: "Read now",
    linkHref: "#",
  },
  {
    image: IMAGES.feature3,
    title: "Your hiring ROI",
    description:
      "Greenhouse is the proven hiring platform to maximize your return on your hiring investment. Just ask our customers.",
    linkText: "Find out how",
    linkHref: "#",
  },
];

export default function SaaspoFeatureSectionsGreenhouse({
  mode = "light",
  heading = "A hiring platform that's more\nthan an ATS",
  features = defaultFeatures,
}: SaaspoFeatureSectionsGreenhouseProps) {
  const colors = COLORS[mode];

  return (
    <section
      className={`w-full py-16 md:py-24 ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl whitespace-pre-line font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: colors.heading }}
        >
          {heading}
        </motion.h2>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Feature Image */}
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={feature.image.path}
                  alt={feature.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Feature Title */}
              <h3
                className="mb-4 font-serif text-2xl leading-tight md:text-3xl"
                style={{ color: colors.heading }}
              >
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p
                className="mb-4 flex-grow text-base leading-relaxed"
                style={{ color: colors.body }}
              >
                {feature.description}
              </p>

              {/* Feature Link */}
              <a
                href={feature.linkHref}
                className="group inline-flex items-center text-base transition-colors duration-200"
                style={{ color: colors.link }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.linkHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.link)
                }
              >
                <span className="border-b border-current pb-0.5">
                  {feature.linkText}
                </span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
