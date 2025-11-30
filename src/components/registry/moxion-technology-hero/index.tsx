"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface MoxionTechnologyHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  contactLabel?: string;
  headline?: string;
  description?: string;
  productImageSrc?: string;
  productImageAlt?: string;
  onContactClick?: () => void;
  onNavClick?: (href: string) => void;
}

export default function MoxionTechnologyHero({
  logoText = "MOXION",
  navItems = [
    { label: "Home", href: "#home" },
    { label: "Technology", href: "#technology", isActive: true },
    { label: "Industries", href: "#industries" },
    { label: "Mission", href: "#mission" },
    { label: "Careers", href: "#careers" },
  ],
  contactLabel = "Contact",
  headline = "Hello clean power.",
  description = "Meet the MP-75, the intelligent\nmobile battery built to replace\ndiesel generators.",
  productImageSrc = "/registry/moxion-technology-hero/battery-unit.png",
  productImageAlt = "MP-75 Mobile Battery Unit",
  onContactClick,
  onNavClick,
}: MoxionTechnologyHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#919191] overflow-hidden">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-12"
      >
        {/* Logo */}
        <div className="text-white font-bold text-sm tracking-[0.3em]">
          {logoText}
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavClick?.(item.href)}
              className={`text-sm transition-colors ${
                item.isActive
                  ? "text-white/60"
                  : "text-white hover:text-white/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <button
          onClick={onContactClick}
          className="flex items-center gap-3 text-white text-sm"
        >
          <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-black" />
          </span>
          <span className="hidden sm:inline">{contactLabel}</span>
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-88px)]">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full max-w-4xl h-[60vh] -mt-12">
            <Image
              src={productImageSrc}
              alt={productImageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Bottom Content */}
        <div className="mt-auto relative z-20 px-8 pb-12 lg:px-12 lg:pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="text-white text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line max-w-md"
            >
              {description}
            </motion.p>

            {/* Scroll Down Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-8 h-8 text-white" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
