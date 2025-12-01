"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface InTandemHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: { label: string; href: string }[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  headline?: string;
  description?: string;
  primaryLinkText?: string;
  primaryLinkHref?: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
  images?: {
    topLeft?: string;
    topRight?: string;
    bottomRight?: string;
  };
}

export default function InTandemHero({
  mode = "light",
  logoText = "In Tandem",
  navItems = [
    { label: "About", href: "#about" },
    { label: "Brands", href: "#brands" },
    { label: "Careers", href: "#careers" },
  ],
  ctaButtonText = "View Open Roles",
  ctaButtonHref = "#roles",
  headline = "We believe in\nputting families first",
  description = "As a global technology platform, we're building solutions that foster connection, organization, and peace-of-mind throughout key stages and milestones of family life.",
  primaryLinkText = "Our Brands",
  primaryLinkHref = "#brands",
  secondaryLinkText = "Open Roles",
  secondaryLinkHref = "#roles",
  images = {
    topLeft: "/registry/in-tandem-hero/family-outdoor-1.jpg",
    topRight: "/registry/in-tandem-hero/family-cooking.jpg",
    bottomRight: "/registry/in-tandem-hero/family-outdoor-2.jpg",
  },
}: InTandemHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FAF6F3]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-16"
      >
        {/* Logo */}
        <div
          className="text-2xl tracking-tight text-[#4A2C3D]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {logoText}
        </div>

        {/* Nav Items */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#4A2C3D] transition-colors hover:text-[#6B3F55]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={ctaButtonHref}
          className="rounded-full border border-[#4A2C3D] bg-transparent px-5 py-2.5 text-sm font-medium text-[#4A2C3D] transition-all hover:bg-[#4A2C3D] hover:text-white"
        >
          {ctaButtonText}
        </a>
      </motion.nav>

      {/* Main Content */}
      <div className="relative px-8 lg:px-16">
        {/* Top Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -left-8 top-0 z-10 h-[280px] w-[220px] overflow-hidden lg:-left-4 lg:h-[320px] lg:w-[260px]"
        >
          <Image
            src={images.topLeft || "/registry/in-tandem-hero/family-outdoor-1.jpg"}
            alt="Family moment"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Top Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -right-8 top-0 z-10 h-[220px] w-[280px] overflow-hidden lg:-right-4 lg:h-[260px] lg:w-[340px]"
        >
          <Image
            src={images.topRight || "/registry/in-tandem-hero/family-cooking.jpg"}
            alt="Family cooking together"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-0 mx-auto mt-16 max-w-4xl whitespace-pre-line text-center text-5xl italic leading-[1.15] tracking-tight text-[#4A2C3D] md:mt-20 md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {headline}
        </motion.h1>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col items-start justify-between gap-12 lg:mt-32 lg:flex-row lg:items-end">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex max-w-md gap-4"
          >
            {/* Vertical Line */}
            <div className="mt-1 h-24 w-[3px] flex-shrink-0 bg-[#4A2C3D]" />

            {/* Text Content */}
            <div>
              <p className="mb-6 text-base leading-relaxed text-[#5A4A52]">
                {description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-6">
                <a
                  href={primaryLinkHref}
                  className="group flex items-center gap-2 text-sm font-medium text-[#4A2C3D]"
                >
                  <span className="border-b border-[#4A2C3D]">{primaryLinkText}</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A2C3D] transition-transform group-hover:scale-110">
                    <ArrowUpRight className="h-3 w-3 text-white" />
                  </span>
                </a>

                <a
                  href={secondaryLinkHref}
                  className="group flex items-center gap-2 text-sm font-medium text-[#4A2C3D]"
                >
                  <span className="border-b border-[#4A2C3D]">{secondaryLinkText}</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A2C3D] transition-transform group-hover:scale-110">
                    <ArrowUpRight className="h-3 w-3 text-white" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[280px] w-[320px] overflow-hidden rounded-lg lg:h-[320px] lg:w-[380px]"
          >
            <Image
              src={images.bottomRight || "/registry/in-tandem-hero/family-outdoor-2.jpg"}
              alt="Family enjoying outdoors"
              width={380}
              height={320}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
