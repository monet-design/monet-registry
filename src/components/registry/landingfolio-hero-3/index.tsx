"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search, Star } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#22D3EE", // cyan-400
    accentSecondary: "#8B5CF6", // purple-500
    gradientFrom: "#22D3EE",
    gradientTo: "#8B5CF6",
  },
  dark: {
    accent: "#22D3EE",
    accentSecondary: "#8B5CF6",
    gradientFrom: "#22D3EE",
    gradientTo: "#8B5CF6",
  },
} as const;

const IMAGES = {
  person1: {
    path: "/registry/landingfolio-hero-3/person-1.jpg",
    alt: "Guy Hawkins - Software Engineer",
    prompt: `Professional headshot portrait of a young man.
Style: Natural lighting, soft focus background, clean professional
Layout: Head and shoulders, centered composition
Composition: Confident expression, professional attire
Background: Solid color with gradient (emerald green)
Color palette: Natural skin tones, green background
Mood: Confident, approachable, professional
Technical: High resolution, sharp facial features`,
  },
  person2: {
    path: "/registry/landingfolio-hero-3/person-2.jpg",
    alt: "Leslie Alexander - HR Manager at Groove",
    prompt: `Professional headshot portrait of a young woman.
Style: Natural lighting, soft focus background, professional
Layout: Head and shoulders, centered composition
Composition: Friendly smile, professional presentation
Background: Solid color with gradient (yellow-green)
Color palette: Natural skin tones, warm yellow background
Mood: Friendly, professional, approachable
Technical: High resolution, sharp facial features`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
}

interface ProfileCard {
  name: string;
  title: string;
  company?: string;
  imageSrc: string;
  bgColor: string;
}

interface LandingfolioHero3Props {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  description?: string;
  searchPlaceholder?: string;
  ctaText?: string;
  navItems?: NavItem[];
  trialButtonText?: string;
  trustedByText?: string;
  rating?: number;
  reviewCount?: string;
  profiles?: ProfileCard[];
  onSearch?: (query: string) => void;
}

// Logo Icon Component
function LogoIcon() {
  return (
    <div className="relative h-8 w-8">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-400 opacity-50 blur-sm" />
      {/* Inner ring with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-cyan-400 p-[2px]">
        <div className="h-full w-full rounded-full bg-black" />
      </div>
      {/* Inner glow */}
      <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent" />
    </div>
  );
}

// Star Rating Component
function StarRating({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }).map((_, index) => {
        const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;
        return (
          <div key={index} className="relative h-4 w-4">
            <Star className="absolute h-4 w-4 text-gray-600" fill="currentColor" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Profile Card Component
function ProfileCardComponent({
  profile,
  index,
  isTop,
}: {
  profile: ProfileCard;
  index: number;
  isTop: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: "easeOut" }}
      className={`absolute ${isTop ? "top-0 left-0" : "bottom-0 right-0"}`}
    >
      {/* Profile info */}
      <div className={`absolute ${isTop ? "-top-2 left-1/2 -translate-x-1/2" : "bottom-0 left-1/2 -translate-x-1/2"} z-10 text-center whitespace-nowrap`}>
        {isTop && (
          <>
            <p className="text-sm font-medium text-white">{profile.name}</p>
            <p className="text-xs text-gray-400">{profile.title}</p>
          </>
        )}
      </div>

      {/* Circle background */}
      <div
        className="relative h-48 w-48 rounded-full overflow-hidden"
        style={{ background: profile.bgColor }}
      >
        {/* Profile image */}
        <div className="absolute inset-0 flex items-end justify-center">
          <Image
            src={profile.imageSrc}
            alt={profile.name}
            width={192}
            height={192}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Bottom profile info */}
      {!isTop && (
        <div className="mt-3 text-center">
          <p className="text-sm font-medium text-white">{profile.name}</p>
          <p className="text-xs text-gray-400">
            {profile.title}{profile.company ? `, ${profile.company}` : ""}
          </p>
        </div>
      )}
    </motion.div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Support", href: "#" },
];

const defaultProfiles: ProfileCard[] = [
  {
    name: "Guy Hawkins",
    title: "Software Engineer",
    imageSrc: IMAGES.person1.path,
    bgColor: "linear-gradient(135deg, #6ee7b7 0%, #5eead4 100%)",
  },
  {
    name: "Leslie Alexander",
    title: "HR Manager",
    company: "Groove",
    imageSrc: IMAGES.person2.path,
    bgColor: "linear-gradient(135deg, #fef9c3 0%, #d9f99d 100%)",
  },
];

// Main Component
export default function LandingfolioHero3({
  mode = "dark",
  logoText = "DuskUI",
  headline = "Connecting Devs\nwith Employers",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  searchPlaceholder = "Try Java Developer, React Dev etc.",
  ctaText = "FIND A DEVELOPER",
  navItems = defaultNavItems,
  trialButtonText = "Start free trial",
  trustedByText = "Trusted by 50k+ users",
  rating = 4.1,
  reviewCount = "14k Reviews",
  profiles = defaultProfiles,
  onSearch,
}: LandingfolioHero3Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-12 lg:px-20"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-lg font-semibold text-white">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Trial Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-transparent px-5 py-2 text-sm font-medium text-white transition-all"
          style={{
            border: `1px solid ${colors.accent}80`,
            boxShadow: `0 0 20px ${colors.accent}4D`,
          }}
        >
          {trialButtonText}
        </motion.button>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 pt-16 sm:px-12 lg:flex-row lg:items-center lg:gap-20 lg:px-20 lg:pt-24">
        {/* Left Section */}
        <div className="flex-1 max-w-xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-light italic text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            {description}
          </motion.p>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="mt-8 flex items-center rounded-full border border-gray-700 bg-transparent p-1.5 sm:mt-10"
          >
            <div className="flex items-center gap-3 px-4 flex-1">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-wider text-black transition-colors hover:bg-gray-100"
            >
              {ctaText}
            </button>
          </motion.form>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8"
          >
            <p className="text-sm font-medium text-white">{trustedByText}</p>
            <div className="mt-2 flex items-center gap-2">
              <StarRating rating={rating} />
              <span className="text-sm font-medium text-white">{rating}/5</span>
              <span className="text-sm text-gray-500">({reviewCount})</span>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Profile Cards */}
        <div className="relative hidden h-[500px] w-[450px] lg:block">
          {/* Connection Lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 450 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              d="M 140 250 Q 200 380 320 350"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.accentSecondary} />
                <stop offset="100%" stopColor={colors.accent} />
              </linearGradient>
            </defs>
          </svg>

          {/* Top Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 left-0"
          >
            <div className="mb-3 text-left">
              <p className="text-sm font-medium text-white">{profiles[0]?.name}</p>
              <p className="text-xs text-gray-400">{profiles[0]?.title}</p>
            </div>
            <div
              className="relative h-52 w-52 overflow-hidden rounded-full"
              style={{ background: profiles[0]?.bgColor }}
            >
              <Image
                src={profiles[0]?.imageSrc || ""}
                alt={profiles[0]?.name || ""}
                width={208}
                height={208}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Bottom Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-8 right-0"
          >
            <div
              className="relative h-48 w-48 overflow-hidden rounded-full"
              style={{ background: profiles[1]?.bgColor }}
            >
              <Image
                src={profiles[1]?.imageSrc || ""}
                alt={profiles[1]?.name || ""}
                width={192}
                height={192}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm font-medium text-white">{profiles[1]?.name}</p>
              <p className="text-xs text-gray-400">
                {profiles[1]?.title}
                {profiles[1]?.company ? `, ${profiles[1].company}` : ""}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient Effects */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-96 w-96 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${colors.accent}1A, transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${colors.accentSecondary}1A, transparent)`,
        }}
      />
    </section>
  );
}
