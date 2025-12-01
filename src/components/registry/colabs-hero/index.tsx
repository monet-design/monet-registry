"use client";

import { motion } from "motion/react";
import { Instagram, Facebook, Search, ArrowDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

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

interface StatCard {
  value: string;
  description: string;
}

interface InfoCard {
  title: string;
  image: string;
}

interface ArticleCard {
  title: string;
  highlightedWord: string;
}

interface ColabsHeroProps {
  mode?: "light" | "dark";
  logo?: {
    location?: string;
    name?: string;
    icon?: React.ReactNode;
  };
  navItems?: NavItem[];
  mainImage?: string;
  headline?: string;
  statCards?: StatCard[];
  infoCard?: InfoCard;
  articleCard?: ArticleCard;
  onNavClick?: (href: string) => void;
  onScrollDown?: () => void;
}

export default function ColabsHero({
  logo = {
    location: "Naarm/Melbourne",
    name: "CoLabs",
  },
  navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Our Principles", href: "#principles" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ],
  mainImage = "/registry/colabs-hero/main-image.jpg",
  headline = "Making space for\ntransformative\ninnovation",
  statCards = [
    { value: "80%", description: "Chance of running into a punny scientist" },
  ],
  infoCard = {
    title: "Join the Lab",
    image: "/registry/colabs-hero/dragonfly-image.jpg",
  },
  articleCard = {
    title: "Why We Need to Rethink Our",
    highlightedWord: "Worldview.",
  },
  onNavClick,
  onScrollDown,
}: ColabsHeroProps) {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [activeArticleIndex, setActiveArticleIndex] = useState(4);

  useEffect(() => {
    if (statCards.length > 1) {
      const interval = setInterval(() => {
        setActiveStatIndex((prev) => (prev + 1) % statCards.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [statCards.length]);

  return (
    <section className="relative min-h-screen w-full bg-[#F6F6F1] px-4 py-4 md:px-6 md:py-6">
      {/* Header */}
      <header className="flex items-start justify-between mb-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <span className="text-[10px] text-gray-600 tracking-wide">
            {logo.location}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              {logo.name}
            </span>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-1 bg-[#F7E9CB] rounded-full px-2 py-2"
        >
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavClick?.(item.href)}
              className="px-4 py-1.5 text-sm font-medium text-gray-800 hover:bg-white/50 rounded-full transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-2 pr-2">
            <Instagram className="w-5 h-5 text-gray-800" />
            <Facebook className="w-5 h-5 text-gray-800" />
          </div>
        </motion.nav>

        {/* Search */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Search className="w-6 h-6 text-gray-800" />
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Section - Main Image and Headline */}
        <div className="relative flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[calc(100vh-120px)] rounded-3xl overflow-hidden"
          >
            <img
              src={mainImage}
              alt="Nature innovation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Headline Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-0 left-0 bg-white rounded-tr-3xl p-6 md:p-8 max-w-md"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight whitespace-pre-line">
              {headline}
            </h1>
            <button
              onClick={onScrollDown}
              className="mt-6 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ArrowDown className="w-5 h-5 text-gray-600" />
            </button>
          </motion.div>
        </div>

        {/* Right Section - Cards */}
        <div className="flex flex-col gap-4 lg:w-[220px]">
          {/* Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full aspect-square rounded-full bg-gradient-to-br from-[#C9A97A] to-[#AD906C] flex flex-col items-center justify-center p-6 text-center"
          >
            <span className="text-4xl md:text-5xl font-bold text-gray-900">
              {statCards[activeStatIndex]?.value}
            </span>
            <p className="text-xs md:text-sm text-gray-800 mt-2 max-w-[140px] leading-tight">
              {statCards[activeStatIndex]?.description}
            </p>
            {/* Pagination Dots */}
            <div className="flex gap-1.5 mt-4">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === 3
                      ? "bg-gray-900"
                      : "bg-gray-900/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Info Card - Join the Lab */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full aspect-[1/0.9] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img
              src={infoCard.image}
              alt={infoCard.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
            <h3 className="absolute top-4 left-4 text-white font-bold text-lg">
              {infoCard.title}
            </h3>
            <button className="absolute bottom-4 right-4 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </motion.div>

          {/* Article Card - Worldview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative w-full flex-1 min-h-[200px] rounded-3xl bg-gradient-to-b from-[#30C68D] to-[#2C8863] p-4 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">
                {articleCard.title}
              </h3>
              <span className="text-[#90EBC8] font-bold text-lg italic">
                {articleCard.highlightedWord}
              </span>
            </div>
            <div className="flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeArticleIndex
                        ? "bg-white"
                        : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
