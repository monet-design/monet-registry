"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Bell, Type, Zap } from "lucide-react";

interface LiveblocksHomeHeroProps {
  badgeText?: string;
  badgeLinkText?: string;
  title?: string;
  description?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function LiveblocksHomeHero({
  badgeText = "Introducing",
  badgeLinkText = "Liveblocks 2.0",
  title = "Unlock collaboration\nin your product",
  description,
  primaryButtonText = "Sign up for free",
  primaryButtonHref = "#",
  secondaryButtonText = "Read the docs",
  secondaryButtonHref = "#",
  onPrimaryClick,
  onSecondaryClick,
}: LiveblocksHomeHeroProps) {
  const defaultDescription = (
    <>
      Ship features like{" "}
      <FeatureHighlight icon={<MessageSquare className="w-4 h-4" />} color="#F5A623">
        Comments
      </FeatureHighlight>
      ,{" "}
      <FeatureHighlight icon={<Bell className="w-4 h-4" />} color="#7ED321">
        Notifications
      </FeatureHighlight>
      , a{" "}
      <FeatureHighlight icon={<Type className="w-4 h-4" />} color="#BD10E0">
        Text Editor
      </FeatureHighlight>
      , or build
      <br />
      any collaborative experience with{" "}
      <FeatureHighlight icon={<Zap className="w-4 h-4" />} color="#E74C3C">
        Realtime APIs
      </FeatureHighlight>{" "}
      in days, not months.
      <br />
      Engage users, fuel creativity, and drive growth. Finally.
    </>
  );

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-950" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,30,30,0.3)_0%,_transparent_70%)]" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-32">
        {/* Badge */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors mb-8"
        >
          <span className="text-neutral-400 text-sm">{badgeText}</span>
          <span className="text-white text-sm font-medium">{badgeLinkText}</span>
          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
        </motion.a>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-[1.1] tracking-tight mb-6"
          style={{ whiteSpace: "pre-line" }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 text-center max-w-3xl leading-relaxed mb-10"
        >
          {description || defaultDescription}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={primaryButtonHref}
            onClick={onPrimaryClick}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
          >
            {primaryButtonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={secondaryButtonHref}
            onClick={onSecondaryClick}
            className="group flex items-center gap-2 px-6 py-3 text-white font-medium hover:text-neutral-300 transition-colors"
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* 3D Blocks Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <img
            src="/registry/liveblocks-home-hero/blocks-3d.png"
            alt="3D collaboration blocks"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-auto object-contain"
          />
          {/* Gradient overlay to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-neutral-800/20 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

// Feature highlight component with icon
function FeatureHighlight({
  children,
  icon,
  color,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-white font-medium">
      <span
        className="inline-flex items-center justify-center w-5 h-5 rounded"
        style={{ backgroundColor: color }}
      >
        {icon}
      </span>
      {children}
    </span>
  );
}
