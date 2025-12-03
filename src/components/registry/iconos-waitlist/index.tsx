"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#E9EEE9", // Light grayish-green background
    buttonBg: "#303032", // Dark button background
    buttonHover: "#1A1A1C", // Button hover
    accent: "#A76D9B", // Pink/purple accent
    accentSecondary: "#7FB77E", // Green accent
  },
  dark: {
    background: "#E9EEE9",
    buttonBg: "#303032",
    buttonHover: "#1A1A1C",
    accent: "#A76D9B",
    accentSecondary: "#7FB77E",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  crystalBluePurple: {
    path: "/registry/iconos-waitlist/crystal-blue-purple.png",
    alt: "3D holographic crystal shapes",
    prompt: `3D crystalline geometric shapes with holographic iridescent colors`,
  },
  crystalCyan: {
    path: "/registry/iconos-waitlist/crystal-cyan.png",
    alt: "3D cyan hexagonal crystal",
    prompt: `3D cyan blue geometric shield or hexagonal crystal`,
  },
  organicGreen: {
    path: "/registry/iconos-waitlist/organic-green.png",
    alt: "3D soft green organic shapes",
    prompt: `3D soft green puffy organic shapes resembling cushions`,
  },
  blackGlossy: {
    path: "/registry/iconos-waitlist/black-glossy.png",
    alt: "3D glossy black twisted shape",
    prompt: `3D glossy black twisted abstract shape`,
  },
  spiralBlue: {
    path: "/registry/iconos-waitlist/spiral-blue.png",
    alt: "3D glowing blue spiral",
    prompt: `3D glowing blue-purple spiral or coil shape`,
  },
  cardDark: {
    path: "/registry/iconos-waitlist/card-dark.png",
    alt: "Dark card with asset growth text",
    prompt: `Dark card mockup with "Asset growth starts here" text`,
  },
  cardLightGreen: {
    path: "/registry/iconos-waitlist/card-light-green.png",
    alt: "Light card with green organic shapes",
    prompt: `White card mockup with green organic shapes`,
  },
  cardWhiteSecurity: {
    path: "/registry/iconos-waitlist/card-white-security.png",
    alt: "Security card with blue crystal",
    prompt: `White card mockup with Frostbite Security heading`,
  },
  cardDarkTech: {
    path: "/registry/iconos-waitlist/card-dark-tech.png",
    alt: "Dark tech card with blue spiral",
    prompt: `Dark navy card mockup with glowing blue spiral`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";

interface IconosWaitlistProps {
  mode?: "light" | "dark";
  logoText?: string;
  logoIcon?: React.ReactNode;
  headline?: string;
  subheadline?: string;
  links?: Array<{ text: string; color: string }>;
  buttonText?: string;
  socialHandle?: string;
  onSubmit?: (email: string) => void;
}

export default function IconosWaitlist({
  mode = "light",
  logoText = "iconos",
  logoIcon = "🎨",
  headline = "The future of web design",
  subheadline = "Custom style transfer icons that are perfect for website graphics and card designs",
  links = [
    { text: "Asset Packs", color: "#A76D9B" },
    { text: "Tutorials", color: "#6B7280" },
    { text: "Stencils", color: "#7FB77E" },
  ],
  buttonText = "Join Waitlist",
  socialHandle = "X loadoesart",
  onSubmit,
}: IconosWaitlistProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
      setEmail("");
    }
  };

  // Parallax transforms for floating cards
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [-8, -15]);

  const card2Y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [12, 20]);

  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [-5, -12]);

  const card4Y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const card4Rotate = useTransform(scrollYProgress, [0, 1], [8, 15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Floating decorative cards - Top Left */}
      <motion.div
        className="absolute left-0 top-0 w-[280px] opacity-90 pointer-events-none hidden lg:block"
        style={{ y: card1Y, rotate: card1Rotate }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={IMAGES.cardDark.path}
          alt={IMAGES.cardDark.alt}
          width={400}
          height={267}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Floating decorative cards - Top Right */}
      <motion.div
        className="absolute right-0 top-0 w-[320px] opacity-90 pointer-events-none hidden lg:block"
        style={{ y: card2Y, rotate: card2Rotate }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src={IMAGES.cardWhiteSecurity.path}
          alt={IMAGES.cardWhiteSecurity.alt}
          width={400}
          height={267}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Floating decorative cards - Bottom Left */}
      <motion.div
        className="absolute left-0 bottom-20 w-[260px] opacity-90 pointer-events-none hidden lg:block"
        style={{ y: card3Y, rotate: card3Rotate }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image
          src={IMAGES.cardLightGreen.path}
          alt={IMAGES.cardLightGreen.alt}
          width={400}
          height={267}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Floating decorative cards - Bottom Right */}
      <motion.div
        className="absolute right-0 bottom-20 w-[300px] opacity-90 pointer-events-none hidden lg:block"
        style={{ y: card4Y, rotate: card4Rotate }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Image
          src={IMAGES.cardDarkTech.path}
          alt={IMAGES.cardDarkTech.alt}
          width={400}
          height={267}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Floating 3D icons - scattered */}
      <motion.div
        className="absolute left-[5%] top-[15%] w-16 h-16 opacity-80 pointer-events-none hidden md:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={IMAGES.crystalBluePurple.path}
          alt={IMAGES.crystalBluePurple.alt}
          width={64}
          height={64}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute left-[8%] bottom-[12%] w-14 h-14 opacity-70 pointer-events-none hidden md:block"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Image
          src={IMAGES.spiralBlue.path}
          alt={IMAGES.spiralBlue.alt}
          width={56}
          height={56}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute right-[6%] top-[35%] w-12 h-12 opacity-75 pointer-events-none hidden md:block"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src={IMAGES.organicGreen.path}
          alt={IMAGES.organicGreen.alt}
          width={48}
          height={48}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute right-[10%] bottom-[18%] w-10 h-10 opacity-80 pointer-events-none hidden md:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Image
          src={IMAGES.blackGlossy.path}
          alt={IMAGES.blackGlossy.alt}
          width={40}
          height={40}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[20%] w-11 h-11 opacity-70 pointer-events-none hidden md:block"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Image
          src={IMAGES.crystalCyan.path}
          alt={IMAGES.crystalCyan.alt}
          width={44}
          height={44}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl">{logoIcon}</span>
          <span className="text-xl font-medium text-gray-900">{logoText}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-lg text-gray-600 text-center mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subheadline}
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {links.map((link, index) => (
            <span key={index}>
              <span style={{ color: link.color }} className="font-medium">
                {link.text}
              </span>
              {index < links.length - 1 && (
                <span className="text-gray-400 ml-2">•</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-medium"
            style={{
              backgroundColor: colors.buttonBg,
              color: "white",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonBg;
            }}
            onClick={handleSubmit}
          >
            {buttonText}
          </Button>
        </motion.div>

        {/* Social handle */}
        <motion.div
          className="mt-12 flex items-center gap-2 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <X className="w-4 h-4" />
          <span>{socialHandle}</span>
        </motion.div>
      </div>
    </section>
  );
}
