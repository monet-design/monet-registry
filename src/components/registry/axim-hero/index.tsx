"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface NavItem {
  label: string;
  href: string;
}

interface AximHeroProps {
  mode?: "light" | "dark";
  logo?: {
    text: string;
    href?: string;
  };
  navItems?: NavItem[];
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  leftImage?: {
    src: string;
    alt: string;
  };
  rightImage?: {
    src: string;
    alt: string;
  };
  onCtaClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "Our Focus", href: "#" },
  { label: "Projects & Insights", href: "#" },
  { label: "About Us", href: "#" },
  { label: "News & Events", href: "#" },
  { label: "Get In Touch", href: "#" },
];

export default function AximHero({
  mode = "light",
  logo = { text: "axim\ncollaborative", href: "#" },
  navItems = defaultNavItems,
  headline = "Together, we can improve access to\neducation and deepen its impact for\nmillions of learners.",
  subtext = "Through collaborative innovation we're dramatically\nimproving student outcomes.",
  ctaLabel = "Learn more",
  ctaHref = "#",
  leftImage = {
    src: "/registry/axim-hero/student-video-conference.jpg",
    alt: "Student participating in online video conference",
  },
  rightImage = {
    src: "/registry/axim-hero/university-campus.jpg",
    alt: "University campus with historic architecture",
  },
  onCtaClick,
}: AximHeroProps) {
  return (
    <section className="relative w-full bg-[#FFF990] font-['Inter',sans-serif]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between px-8 pt-6 pb-4 lg:px-12"
      >
        {/* Left Nav Items */}
        <ul className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-[13px] tracking-wide text-[#0a1628] transition-colors hover:opacity-70"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a
          href={logo.href}
          className="text-right text-[15px] font-bold leading-tight text-[#0a1628]"
        >
          {logo.text.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </a>
      </motion.nav>

      {/* Hero Content */}
      <div className="px-8 pt-12 lg:px-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[680px] font-['Instrument_Serif',serif] text-[2.5rem] italic font-normal leading-[1.15] tracking-tight text-[#0a1628] lg:text-[3.25rem]"
        >
          {headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Left Image */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={leftImage.src}
              alt={leftImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Image */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={rightImage.src}
              alt={rightImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-end pb-12 pt-8"
        >
          {/* Subtext */}
          <p className="max-w-[420px] text-right font-['Instrument_Serif',serif] text-[1.125rem] italic leading-[1.5] text-[#0a1628]">
            {subtext.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>

          {/* CTA Button */}
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-5 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
