"use client";

import { motion } from "motion/react";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

interface NocodeHeroSectionProps {
  logoText?: string;
  navItems?: NavItem[];
  headingLine1?: string;
  headingLine2Part1?: string;
  headingLine2Accent?: string;
  headingLine2Part2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function NocodeHeroSection({
  logoText = "Hasko",
  navItems = [
    { label: "10&20 vision", href: "#vision" },
    { label: "Bolagsutveckling", href: "#development" },
    { label: "Vara bolag", href: "#companies" },
  ],
  headingLine1 = "En vag mot",
  headingLine2Part1 = "10",
  headingLine2Accent = "&",
  headingLine2Part2 = "20",
  description = "Vi investerar i ambitiosa foretag som vill dela var\nvision om 10&20 for uthallig bolagsutveckling",
  ctaText = "Om Hasko",
  ctaHref = "#about",
  backgroundImage = "/registry/nocode-hero-section/hero-bg.jpg",
}: NocodeHeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16"
        >
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-semibold tracking-tight text-white"
          >
            {logoText}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center text-white transition-opacity hover:opacity-70"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </motion.nav>

        {/* Hero Content */}
        <div className="flex flex-1 items-end px-6 pb-16 md:px-12 lg:px-16 lg:pb-24">
          <div className="max-w-2xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-5xl font-light leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              <span className="block">{headingLine1}</span>
              <span className="block">
                {headingLine2Part1}
                <span className="text-[#83EE87]">{headingLine2Accent}</span>
                {headingLine2Part2}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mb-8 max-w-md whitespace-pre-line text-sm leading-relaxed text-white/90 md:text-base"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <a
                href={ctaHref}
                className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1"
              >
                <span className="flex h-10 w-10 items-center justify-center bg-[#83EE87] transition-all duration-300 group-hover:bg-[#6FE073]">
                  <ArrowRight className="h-5 w-5 text-black" />
                </span>
                <span className="text-sm font-medium text-white">{ctaText}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
