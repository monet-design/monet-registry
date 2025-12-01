"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import "./font.css";

interface FloatingIconProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
}

function FloatingIcon({
  children,
  className,
  delay = 0,
  rotate = 0,
}: FloatingIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={cn("absolute", className)}
      style={{ rotate: `${rotate}deg` }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface IconCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

function IconCard({ children, className, bgColor = "bg-white" }: IconCardProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl shadow-lg",
        bgColor,
        className
      )}
    >
      {children}
    </div>
  );
}

interface PassionfrootCtaProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showFloatingIcons?: boolean;
  floatingIcons?: Array<{
    icon: React.ReactNode;
    position: string;
    rotate?: number;
    delay?: number;
    bgColor?: string;
  }>;
}

export default function PassionfrootCta({
  badge = "Live on Passionfroot",
  badgeIcon = <Sparkles className="h-3 w-3" />,
  title = "Thousands of campaigns\nlaunched to date",
  subtitle = "with 60% lower CPC than Linkedin Ads*",
  primaryButtonText = "Get access",
  primaryButtonHref = "#",
  secondaryButtonText = "Book a call",
  secondaryButtonHref = "#",
  onPrimaryClick,
  onSecondaryClick,
  showFloatingIcons = true,
  floatingIcons,
}: PassionfrootCtaProps) {
  const defaultIcons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
        </svg>
      ),
      position: "left-[8%] top-[15%]",
      rotate: -12,
      delay: 0.1,
      bgColor: "bg-white",
    },
    {
      icon: (
        <span className="text-xl font-bold">N</span>
      ),
      position: "left-[22%] top-[5%]",
      rotate: 8,
      delay: 0.2,
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      position: "left-[5%] top-[55%]",
      rotate: 0,
      delay: 0.3,
      bgColor: "bg-blue-600",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
        </svg>
      ),
      position: "left-[18%] top-[70%]",
      rotate: -5,
      delay: 0.4,
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-500",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      position: "right-[20%] top-[8%]",
      rotate: 10,
      delay: 0.15,
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
        </svg>
      ),
      position: "right-[8%] top-[20%]",
      rotate: -8,
      delay: 0.25,
      bgColor: "bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="white">
          <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
        </svg>
      ),
      position: "right-[3%] top-[45%]",
      rotate: 5,
      delay: 0.35,
      bgColor: "bg-black",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-orange-500" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
      position: "right-[22%] top-[65%]",
      rotate: -3,
      delay: 0.45,
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-500" fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9h6v6H9z" fill="white" />
        </svg>
      ),
      position: "right-[5%] top-[75%]",
      rotate: 12,
      delay: 0.5,
      bgColor: "bg-blue-500",
    },
  ];

  const iconsToRender = floatingIcons || defaultIcons;

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFDFD] py-24 md:py-32">
      {/* Floating Icons */}
      {showFloatingIcons &&
        iconsToRender.map((item, index) => (
          <FloatingIcon
            key={index}
            className={item.position}
            rotate={item.rotate}
            delay={item.delay}
          >
            <IconCard bgColor={item.bgColor}>{item.icon}</IconCard>
          </FloatingIcon>
        ))}

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400 bg-white px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm"
        >
          <span>{badge}</span>
          {badgeIcon}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 font-serif text-4xl font-normal leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-base text-gray-500 md:text-lg"
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={primaryButtonHref}
            onClick={(e) => {
              if (onPrimaryClick) {
                e.preventDefault();
                onPrimaryClick();
              }
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
          >
            {primaryButtonText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={secondaryButtonHref}
            onClick={(e) => {
              if (onSecondaryClick) {
                e.preventDefault();
                onSecondaryClick();
              }
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:shadow-md"
          >
            {secondaryButtonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
