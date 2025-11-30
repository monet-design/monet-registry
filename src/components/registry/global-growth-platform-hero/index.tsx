"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";

interface Avatar {
  id: string;
  name: string;
  greeting: string;
  image: string;
}

interface GlobalGrowthPlatformHeroProps {
  logo?: React.ReactNode;
  brandName?: string;
  navItems?: { label: string; href: string; active?: boolean }[];
  highlightedTitle?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  avatars?: Avatar[];
  accentColor?: string;
}

const defaultAvatars: Avatar[] = [
  {
    id: "carlos",
    name: "Carlos",
    greeting: "Hola, soy Carlos",
    image: "/registry/global-growth-platform-hero/avatar-carlos.png",
  },
  {
    id: "ellen",
    name: "Ellen",
    greeting: "Salut, je suis Ellen",
    image: "/registry/global-growth-platform-hero/avatar-ellen.png",
  },
  {
    id: "john",
    name: "John",
    greeting: "嗨，我是约翰",
    image: "/registry/global-growth-platform-hero/avatar-john.png",
  },
  {
    id: "sofia",
    name: "Sofia",
    greeting: "Chào, tôi là Sofia",
    image: "/registry/global-growth-platform-hero/avatar-sofia.png",
  },
  {
    id: "grace",
    name: "Grace",
    greeting: "Hi, I'm Grace",
    image: "/registry/global-growth-platform-hero/avatar-grace.png",
  },
];

const DefaultLogo = ({ color = "#3F5751" }: { color?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 4C8 4 8 16 8 20C8 24 12 28 16 28"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16 4C16 4 16 16 16 20C16 24 20 28 24 28"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default function GlobalGrowthPlatformHero({
  logo,
  brandName = "grove",
  navItems = [
    { label: "AI Agent", href: "#", active: true },
    { label: "AI PRM", href: "#" },
    { label: "About Us", href: "#" },
  ],
  highlightedTitle = "Meet Grace,",
  subtitle = "the world's most advanced AI\nclinical research agent",
  description = "Accelerating participant recruitment & engagement at scale for\nleading site networks, CROs, and sponsors",
  primaryButtonText = "Book a Demo",
  primaryButtonHref = "#",
  secondaryButtonText = "Sign In",
  secondaryButtonHref = "#",
  avatars = defaultAvatars,
  accentColor = "#3F5751",
}: GlobalGrowthPlatformHeroProps) {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? avatars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === avatars.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      return {
        scale: 1,
        zIndex: 10,
        opacity: 1,
        x: 0,
      };
    } else if (absDiff === 1) {
      return {
        scale: 0.85,
        zIndex: 5,
        opacity: 1,
        x: diff * 60,
      };
    } else if (absDiff === 2) {
      return {
        scale: 0.7,
        zIndex: 1,
        opacity: 0.8,
        x: diff * 40,
      };
    }
    return {
      scale: 0.6,
      zIndex: 0,
      opacity: 0,
      x: diff * 30,
    };
  };

  return (
    <section className="relative min-h-screen w-full bg-[#FAFCFE] overflow-hidden">
      {/* Navigation */}
      <nav className="w-full px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {logo || <DefaultLogo color={accentColor} />}
          <span
            className="text-xl font-medium"
            style={{ color: accentColor }}
          >
            {brandName}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors ${
                item.active
                  ? "text-gray-900 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={secondaryButtonHref}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors hidden sm:block"
          >
            {secondaryButtonText}
          </a>
          <a
            href={primaryButtonHref}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            {primaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="w-full px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span
              className="block font-serif italic"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {highlightedTitle}
            </span>
            <span className="block font-semibold text-gray-900 mt-2 whitespace-pre-line">
              {subtitle}
            </span>
          </h1>
          <p className="mt-6 text-gray-500 text-base md:text-lg whitespace-pre-line">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Avatar Carousel */}
      <div className="relative w-full px-4 md:px-12 lg:px-20 py-8">
        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[480px]">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-1/4 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
            aria-label="Previous avatar"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-1/4 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
            aria-label="Next avatar"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Avatar Cards */}
          <div className="relative w-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {avatars.map((avatar, index) => {
                const style = getCardStyle(index);
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={avatar.id}
                    className="absolute cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: style.opacity,
                      scale: style.scale,
                      x: style.x,
                      zIndex: style.zIndex,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-[#CDDBD8] shadow-lg ${
                        isActive ? "w-[220px] md:w-[280px]" : "w-[180px] md:w-[220px]"
                      }`}
                      style={{
                        aspectRatio: "3/4",
                      }}
                    >
                      <Image
                        src={avatar.image}
                        alt={avatar.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 220px, 280px"
                      />

                      {/* Greeting Label */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: accentColor }}
                          >
                            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                          </div>
                          <span className="text-sm text-gray-800 font-medium">
                            {avatar.greeting}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
