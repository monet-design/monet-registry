"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {},
  dark: {},
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface ImageData {
  src: string;
  alt: string;
}

interface GaellePerrinHeroProps {
  mode?: "light" | "dark";
  logoInitials?: string;
  headline?: string[];
  description?: string[];
  images?: {
    topLeft?: ImageData;
    right?: ImageData;
    bottomLeft?: ImageData;
  };
}

// GP Logo Component - overlapping G and P
function GPLogo({ initials = "GP" }: { initials?: string }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black">
      <div className="relative font-instrument-serif text-[13px] font-normal leading-none tracking-tight">
        <span className="relative">{initials.charAt(0)}</span>
        <span className="absolute left-1/2 top-[6px] -translate-x-1/2">
          {initials.charAt(1)}
        </span>
      </div>
    </div>
  );
}

// Default images using Unsplash
const defaultImages = {
  topLeft: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=240&h=300&fit=crop",
    alt: "Coastal cliff view from vehicle",
  },
  right: {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&h=400&fit=crop",
    alt: "Luxury hotel interior with tropical view",
  },
  bottomLeft: {
    src: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=280&h=350&fit=crop",
    alt: "Tropical palm trees against blue sky",
  },
};

const defaultHeadline = [
  "AGENCE DE",
  "COMMUNICATION",
  "POUR LES CREATEURS",
  'D"ART DE VIVRE.',
];

const defaultDescription = [
  "GPC IS A DEVELOPMENT CONSULTING AGENCY",
  "AND COMMUNICATION IN THE TRAVEL SECTORS,",
  "THE ART OF LIVING, AND THE HOTEL INDUSTRY. FOUNDED IN 2008,",
  "OUR AGENCY HAS MORE THAN 15 YEARS OF EXPERIENCE",
  "IN THE ACCOMPANIMENT OF THE CREATOR OF THE ART OF LIVING,",
  "DESTINATION AND LOCATION DESIGNERS.",
];

export default function GaellePerrinHero({
  mode = "light",
  logoInitials = "GP",
  headline = defaultHeadline,
  description = defaultDescription,
  images = defaultImages,
}: GaellePerrinHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center pt-6"
      >
        <GPLogo initials={logoInitials} />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top Left Image - positioned absolute to the left edge */}
        {images.topLeft && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -left-2 top-4 z-10 w-[80px] sm:w-[100px] lg:w-[130px]"
          >
            <img
              src={images.topLeft.src}
              alt={images.topLeft.alt}
              className="h-auto w-full object-cover shadow-sm"
              style={{ aspectRatio: "3/4" }}
            />
          </motion.div>
        )}

        {/* Right Image - positioned absolute to the right */}
        {images.right && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -right-4 top-24 z-10 w-[160px] sm:top-20 sm:w-[220px] lg:top-16 lg:w-[320px] xl:w-[380px]"
          >
            <img
              src={images.right.src}
              alt={images.right.alt}
              className="h-auto w-full object-cover shadow-sm"
              style={{ aspectRatio: "5/4" }}
            />
          </motion.div>
        )}

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-20 mx-auto max-w-4xl pt-6 text-center sm:pt-10 lg:pt-12"
        >
          <h1 className="font-instrument-serif text-[2.5rem] font-normal italic leading-[1.05] tracking-[-0.02em] text-black sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]">
            {headline.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative z-20 mx-auto mt-6 max-w-xl text-center sm:mt-10 lg:mt-12"
        >
          <p className="text-[9px] font-normal uppercase leading-[1.8] tracking-[0.15em] text-black sm:text-[10px] lg:text-[11px]">
            {description.map((line, index) => (
              <span key={index}>
                {line}
                {index < description.length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>

        {/* Bottom Left Image */}
        {images.bottomLeft && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 -ml-2 mt-6 w-[130px] sm:mt-8 sm:w-[180px] lg:w-[240px]"
          >
            <img
              src={images.bottomLeft.src}
              alt={images.bottomLeft.alt}
              className="h-auto w-full object-cover shadow-sm"
              style={{ aspectRatio: "4/5" }}
            />
          </motion.div>
        )}
      </div>

      {/* Bottom padding for layout balance */}
      <div className="h-16 sm:h-20 lg:h-28" />
    </section>
  );
}
