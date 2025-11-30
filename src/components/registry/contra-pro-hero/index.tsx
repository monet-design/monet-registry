"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ContraProHeroProps {
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: string[];
  headline?: string;
  tagline?: {
    prefix?: string;
    suffix?: string;
  };
  description?: string;
  ctaText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  loginText?: string;
  portfolioImages?: string[];
  onCtaClick?: () => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onLoginClick?: () => void;
}

// Contra Star Logo
function ContraLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

// Portfolio Card Component
function PortfolioCard({
  image,
  rotation,
  translateX,
  translateY,
  zIndex,
  delay,
  scale = 1,
}: {
  image: string;
  rotation: number;
  translateX: number;
  translateY: number;
  zIndex: number;
  delay: number;
  scale?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="absolute rounded-2xl overflow-hidden shadow-2xl"
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
        zIndex,
        width: "280px",
        height: "360px",
      }}
    >
      <Image
        src={image}
        alt="Portfolio preview"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}

export default function ContraProHero({
  logo = {
    icon: <ContraLogo className="w-5 h-5 text-white" />,
    text: "contra",
  },
  navItems = ["How It Works", "Pro", "Hire"],
  headline = "Contra Pro",
  tagline = {
    prefix: "Independence",
    suffix: "powered by Contra",
  },
  description = "Upgrade to a customized portfolio, get discovered by new\nclients, and optimize your freelance business.",
  ctaText = "Get Access",
  primaryButtonText = "Post A Job For Free",
  secondaryButtonText = "Get Started",
  loginText = "Log In",
  portfolioImages = [
    "/registry/contra-pro-hero/portfolio-1.png",
    "/registry/contra-pro-hero/portfolio-2.png",
    "/registry/contra-pro-hero/portfolio-3.png",
    "/registry/contra-pro-hero/portfolio-4.png",
    "/registry/contra-pro-hero/portfolio-5.png",
  ],
  onCtaClick,
  onPrimaryClick,
  onSecondaryClick,
  onLoginClick,
}: ContraProHeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-[#14171F] overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {logo.icon}
            <span className="text-white font-semibold text-lg tracking-tight">
              {logo.text}
            </span>
          </motion.div>

          {/* Nav Items */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Right Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={onPrimaryClick}
              className="hidden sm:block px-5 py-2.5 bg-[#3D4149] hover:bg-[#4D5159] text-white text-sm font-medium rounded-full transition-colors"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="px-5 py-2.5 bg-white hover:bg-gray-100 text-[#14171F] text-sm font-medium rounded-full transition-colors"
            >
              {secondaryButtonText}
            </button>
            <button
              onClick={onLoginClick}
              className="hidden sm:block text-white/80 text-sm hover:text-white transition-colors ml-2"
            >
              {loginText}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
        {/* Headline with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl font-serif italic font-normal mb-4"
          style={{
            background: "linear-gradient(90deg, #C9A227 0%, #D4A574 25%, #C9A0A0 50%, #B497BD 75%, #9987B4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {headline}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl mb-6"
        >
          <span className="text-gray-400 italic font-serif">{tagline.prefix}</span>
          <span className="text-white font-semibold"> {tagline.suffix}</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-base sm:text-lg whitespace-pre-line leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={onCtaClick}
          className="px-8 py-4 bg-[#897DE1] hover:bg-[#7A6DD2] text-white text-base font-medium rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#897DE1]/25"
        >
          {ctaText}
        </motion.button>
      </div>

      {/* Portfolio Cards Showcase */}
      <div className="relative w-full h-[400px] sm:h-[450px] mt-8">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Left Card 1 */}
          <PortfolioCard
            image={portfolioImages[0]}
            rotation={-15}
            translateX={-380}
            translateY={20}
            zIndex={1}
            delay={0.6}
            scale={0.85}
          />

          {/* Left Card 2 */}
          <PortfolioCard
            image={portfolioImages[2]}
            rotation={-8}
            translateX={-200}
            translateY={-10}
            zIndex={2}
            delay={0.7}
            scale={0.9}
          />

          {/* Center Card (Main) */}
          <PortfolioCard
            image={portfolioImages[1]}
            rotation={0}
            translateX={0}
            translateY={0}
            zIndex={5}
            delay={0.5}
            scale={1}
          />

          {/* Right Card 1 */}
          <PortfolioCard
            image={portfolioImages[4]}
            rotation={8}
            translateX={200}
            translateY={-10}
            zIndex={2}
            delay={0.7}
            scale={0.9}
          />

          {/* Right Card 2 */}
          <PortfolioCard
            image={portfolioImages[3]}
            rotation={15}
            translateX={380}
            translateY={20}
            zIndex={1}
            delay={0.6}
            scale={0.85}
          />
        </div>

        {/* Decorative Gradient Ribbons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {/* Left ribbon */}
          <div
            className="absolute w-[600px] h-[80px] rounded-full blur-sm opacity-60"
            style={{
              background: "linear-gradient(90deg, #B497BD 0%, #897DE1 50%, #6B5BAD 100%)",
              transform: "rotate(-25deg) translateX(-200px) translateY(300px)",
              left: "5%",
              top: "20%",
            }}
          />

          {/* Right ribbon */}
          <div
            className="absolute w-[500px] h-[60px] rounded-full blur-sm opacity-50"
            style={{
              background: "linear-gradient(90deg, #897DE1 0%, #B497BD 50%, #D4A574 100%)",
              transform: "rotate(20deg) translateX(100px) translateY(280px)",
              right: "5%",
              top: "25%",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#14171F] to-transparent pointer-events-none" />
    </section>
  );
}
