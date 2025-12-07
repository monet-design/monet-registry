"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  lounge: {
    path: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Team members having a casual conversation in office lounge",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Two people having a casual conversation while sitting on a sofa in a cozy office lounge area</summary>
<mood>Professional yet relaxed startup culture, creative workspace, industrial-chic design, grayscale monochrome photography style</mood>
<background_summary>Industrial style office lounge with exposed brick, bookshelves, warm lighting with glass pendant lamps, vintage decor elements</background_summary>
<primary_element>Two young professionals sitting on a dark leather sofa, one leaning back casually with crossed legs, the other sitting forward engaged in conversation, both wearing casual smart attire like dark sweaters and jeans</primary_element>
<etc_element>Background shows bookshelves filled with books, glass bubble pendant lights hanging from ceiling, oriental rug on the floor</etc_element>`,
  },
  outdoor: {
    path: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    alt: "Diverse team members having outdoor meeting",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Group of diverse professionals having an outdoor rooftop meeting or conversation</summary>
<mood>Collaborative, diverse, professional networking, grayscale monochrome photography style</mood>
<background_summary>Urban rooftop terrace with city skyline visible in background, bright daylight, outdoor seating area</background_summary>
<primary_element>Five to six diverse professionals standing in a circle having an animated discussion, mix of men and women in business casual attire</primary_element>
<etc_element>City buildings and rooftops visible in soft focus background</etc_element>`,
  },
  collab: {
    path: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    alt: "Two colleagues collaborating on laptop",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Two colleagues working together on a laptop in a focused collaborative session</summary>
<mood>Focused, collaborative, productive startup environment, grayscale monochrome photography style</mood>
<background_summary>Simple office interior with natural light, minimalist decor, clean workspace</background_summary>
<primary_element>Two young professionals sitting close together, one pointing at a laptop screen while the other watches intently</primary_element>
<etc_element>Laptop visible on table, neutral colored wall in background</etc_element>`,
  },
  office: {
    path: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Modern open office workspace",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Modern open office space with people working at communal tables</summary>
<mood>Modern, creative, open workspace, industrial design, grayscale monochrome photography style</mood>
<background_summary>Large open plan office with high ceilings, exposed structural elements, large windows, industrial staircase, modern furniture</background_summary>
<primary_element>Modern office interior featuring long communal work tables with several people working on laptops, high bar stools and chairs</primary_element>
<etc_element>Plants, pendant lighting, large windows letting in natural light</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface TeamImage {
  src: string;
  alt: string;
}

interface TeamZazuProps {
  mode?: "light" | "dark";
  title?: string;
  images?: {
    lounge?: TeamImage;
    outdoor?: TeamImage;
    collab?: TeamImage;
    office?: TeamImage;
  };
}

export default function TeamZazu({
  mode = "light",
  title = "Our team and offices",
  images,
}: TeamZazuProps) {
  const bgColor = mode === "light" ? "bg-[#F5F5F5]" : "bg-gray-900";
  const textColor = mode === "light" ? "text-gray-900" : "text-white";

  const defaultImages = {
    lounge: { src: IMAGES.lounge.path, alt: IMAGES.lounge.alt },
    outdoor: { src: IMAGES.outdoor.path, alt: IMAGES.outdoor.alt },
    collab: { src: IMAGES.collab.path, alt: IMAGES.collab.alt },
    office: { src: IMAGES.office.path, alt: IMAGES.office.alt },
  };

  const finalImages = { ...defaultImages, ...images };

  return (
    <section className={`relative w-full py-16 md:py-24 ${bgColor}`}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-10 text-2xl font-normal md:text-3xl ${textColor}`}
        >
          {title}
        </motion.h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Large Image - spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg md:row-span-2"
          >
            <Image
              src={finalImages.lounge.src}
              alt={finalImages.lounge.alt}
              fill
              className="object-cover grayscale"
            />
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/10] overflow-hidden rounded-lg"
          >
            <Image
              src={finalImages.outdoor.src}
              alt={finalImages.outdoor.alt}
              fill
              className="object-cover grayscale"
            />
          </motion.div>

          {/* Bottom Right Grid - 2 images side by side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Bottom Left Small Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={finalImages.collab.src}
                alt={finalImages.collab.alt}
                fill
                className="object-cover grayscale"
              />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={finalImages.office.src}
                alt={finalImages.office.alt}
                fill
                className="object-cover grayscale"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
