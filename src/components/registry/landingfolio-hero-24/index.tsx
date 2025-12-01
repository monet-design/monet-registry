"use client";

import { motion } from "motion/react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
}

interface LandingfolioHero24Props {
  mode?: "customization" | "default";
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  subheadline?: string;
  searchPlaceholder?: string;
  searchButtonText?: string;
  stats?: Stat[];
  backgroundImage?: string;
  cartCount?: number;
  onSearch?: (query: string) => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "AllBrands", href: "#" },
  { label: "Stores", href: "#" },
  { label: "Customer Support", href: "#" },
];

// Default stats
const defaultStats: Stat[] = [
  { value: "38,942", label: "Order Delivered" },
  { value: "14,344", label: "Registered Customers" },
];

// Main Component
const CUSTOMIZATION = {};

export default function LandingfolioHero24({
  mode = "default",
  logoText = "/RAREBLOCKS",
  navItems = defaultNavItems,
  headline = "Find the best office\naccessories in one tap",
  subheadline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.",
  searchPlaceholder = "Try Desk, Chair, Webcam etc...",
  searchButtonText = "SEARCH NOW",
  stats = defaultStats,
  backgroundImage = "/landingfolio-hero/hero-24/office-bg.jpg",
  cartCount = 3,
  onSearch,
}: LandingfolioHero24Props) {
  return (
    <section className="w-full min-h-screen flex flex-col">
      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-[#1A1A2E] font-bold text-lg tracking-tight">
                {logoText}
              </span>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#1A1A2E] hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-[#1A1A2E] hover:text-gray-600 transition-colors">
                <User size={20} strokeWidth={1.5} />
              </button>
              <button className="p-2 text-[#1A1A2E] hover:text-gray-600 transition-colors">
                <Heart size={20} strokeWidth={1.5} />
              </button>
              <div className="relative">
                <button className="p-2 text-[#1A1A2E] hover:text-gray-600 transition-colors">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#3B82F6] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative flex-1 min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Office background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-20">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white text-center leading-tight whitespace-pre-line"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-sm md:text-base text-gray-300 text-center max-w-xl leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 w-full max-w-xl"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Search Input */}
              <div className="flex items-center px-4 py-3">
                <Search size={20} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
                />
              </div>
              {/* Search Button */}
              <button
                onClick={() => onSearch?.("")}
                className="w-full py-4 bg-[#333337] text-white text-sm font-semibold tracking-wider hover:bg-[#444448] transition-colors"
              >
                {searchButtonText}
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 flex items-center gap-12 md:gap-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="text-3xl md:text-4xl text-white font-light tracking-wide"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs md:text-sm text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
