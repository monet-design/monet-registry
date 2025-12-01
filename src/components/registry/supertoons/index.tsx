"use client";

import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface BeforeAfterImage {
  before: string;
  after: string;
  alt?: string;
}

interface SupertoonsBeforeAfterProps {
  mode?: "light" | "dark";
  images?: BeforeAfterImage;
  transformedCount?: number;
  avatarsSrc?: string;
  className?: string;
}

// Default images
const defaultImages: BeforeAfterImage = {
  before: "/registry/supertoons/before.png",
  after: "/registry/supertoons/after.png",
  alt: "Photo transformation example",
};

// Avatar Group Component
function AvatarGroup({ src }: { src: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center"
    >
      <Image
        src={src}
        alt="Transformed avatars"
        width={120}
        height={32}
        className="h-8 w-auto object-contain"
      />
    </motion.div>
  );
}

// Counter Text Component
function CounterText({ count }: { count: number }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="text-center text-sm text-[#73A1AC]"
    >
      {count.toLocaleString()} photos transformed
    </motion.p>
  );
}

// Before After Card Component
function BeforeAfterCard({ images }: { images: BeforeAfterImage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="overflow-hidden rounded-2xl shadow-lg shadow-gray-200/50"
    >
      <div className="flex">
        {/* Before Image */}
        <div className="relative flex-1">
          <Image
            src={images.before}
            alt={`${images.alt || "Image"} - Before`}
            width={400}
            height={400}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* After Image */}
        <div className="relative flex-1">
          <Image
            src={images.after}
            alt={`${images.alt || "Image"} - After`}
            width={400}
            height={400}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

// Slider Control Component
function SliderControl() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="mx-auto mt-5 flex w-24 items-center justify-center"
    >
      <div className="h-1 w-full rounded-full bg-[#E5E7EB]">
        <div className="h-1 w-1/2 rounded-full bg-[#D1D5DB]" />
      </div>
    </motion.div>
  );
}

// Main Component
export default function SupertoonsBeforeAfter({
  mode = "light",
  images = defaultImages,
  transformedCount = 67,
  avatarsSrc = "/registry/supertoons/avatars.png",
  className = "",
}: SupertoonsBeforeAfterProps) {
  return (
    <section
      className={`w-full bg-white px-4 py-12 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-lg">
        {/* Avatar Group */}
        <AvatarGroup src={avatarsSrc} />

        {/* Counter */}
        <div className="mt-2">
          <CounterText count={transformedCount} />
        </div>

        {/* Before After Card */}
        <div className="mt-6">
          <BeforeAfterCard images={images} />
        </div>

        {/* Slider Control */}
        <SliderControl />
      </div>
    </section>
  );
}
