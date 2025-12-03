"use client";

import { motion } from "motion/react";
import { useState, useRef, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    badge: "#E8F4FC",           // Light blue badge
    badgeText: "#4A90D9",       // Blue badge text
    priceRed: "#E85A71",        // Red/pink price color
    beforeLabel: "#544334",     // Brown before label
    afterLabel: "#64ACB3",      // Teal after label
  },
} as const;

const IMAGES = {
  building: {
    path: "/registry/iphone-creator-course/building.jpg",
    alt: "Architecture photography before/after comparison",
    prompt: `Modern architecture building photograph for before/after preset comparison.
Style: Professional architectural photography
Layout: Horizontal, centered composition
Composition: Modern building facade, clean lines, geometric shapes
Elements: Building exterior, windows, architectural details
Color palette: Before - muted tones, After - enhanced warm tones
Mood: Professional, clean, architectural
Technical: High resolution, sharp details, suitable for color grading comparison`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface IphoneCreatorCourseProps {
  badge?: string;
  heading?: string;
  priceLabel?: string;
  priceValue?: string;
  description?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
  initialSliderPosition?: number;
}

export default function IphoneCreatorCourse({
  badge = "Included Resource",
  heading = "Included — Two Lightroom\npreset packs",
  priceLabel = "Total value:",
  priceValue = "$78",
  description = "Included with the course is a pack of Lightroom presets that make it quick and easy to apply professional looks to your images. Specifically designed for photos shot on iPhone.",
  beforeLabel = "Before",
  afterLabel = "After",
  beforeImage = IMAGES.building.path,
  afterImage = IMAGES.building.path,
  initialSliderPosition = 50,
}: IphoneCreatorCourseProps) {
  const colors = COLORS.light;
  const [sliderPosition, setSliderPosition] = useState(initialSliderPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current || !isDragging) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientX);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ backgroundColor: colors.badge, color: colors.badgeText }}
              className="mb-4 inline-flex w-fit items-center rounded-full px-3 py-1.5 text-xs font-medium"
            >
              {badge}
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="whitespace-pre-line text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl"
            >
              {heading}
            </motion.h2>

            {/* Price */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: colors.priceRed }}
              className="mt-3 text-sm font-medium italic"
            >
              {priceLabel} {priceValue}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-[#6B7280]"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Right Column - Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-xl"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              {/* Before Image (full width, clipped by slider) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                    style={{
                      filter: "saturate(0.7) contrast(0.9) brightness(0.95)",
                    }}
                    draggable={false}
                  />
                </div>
                {/* Before Label */}
                <div className="absolute left-3 top-3 rounded bg-[#544334]/90 px-2.5 py-1 text-[10px] font-medium text-white">
                  {beforeLabel}
                </div>
              </div>

              {/* After Image (full width, clipped by slider) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                    style={{
                      filter: "saturate(1.2) contrast(1.05) brightness(1.02)",
                    }}
                    draggable={false}
                  />
                </div>
                {/* After Label */}
                <div className="absolute right-3 top-3 rounded bg-[#64ACB3] px-2.5 py-1 text-[10px] font-medium text-white">
                  {afterLabel}
                </div>
              </div>

              {/* Slider Line */}
              <div
                className="absolute bottom-0 top-0 w-0.5 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              />

              {/* Slider Handle */}
              <div
                className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-white shadow-lg transition-transform hover:scale-110"
                style={{ left: `${sliderPosition}%` }}
              >
                <MoveHorizontal className="h-4 w-4 text-[#6B7280]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
