"use client";

import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface EndlessProps {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  profileImage?: string;
  profileImageAlt?: string;
  designerName?: string;
  yearsExperience?: string;
  location?: string;
}

export default function Endless({
  mode = "light",
  title = "Who is Endless",
  description = "Endless is currently mostly run alone by Daryl Ginn, a designer with 20 years experience living in Perth, Australia. I like to keep things tight-knit, so you'll be working directly with me, this ensures I can give you the maximum quality possible.",
  profileImage = "/registry/endless/profile.jpg",
  profileImageAlt = "Daryl Ginn - Designer at Endless",
  designerName = "Daryl Ginn",
  yearsExperience = "20 years",
  location = "Perth, Australia",
}: EndlessProps) {
  return (
    <section className="w-full bg-white px-6 py-12 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-xl">
        <div className="relative">
          {/* Profile Image - Floated to the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="float-right mb-2 ml-4"
          >
            <Image
              src={profileImage}
              alt={profileImageAlt}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-1 text-[13px] font-semibold leading-[1.5] text-[#1a1a1a] sm:text-[14px]"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[13px] leading-[1.65] text-[#888888] sm:text-[14px]"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
