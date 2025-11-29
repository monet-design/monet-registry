"use client";

import { motion } from "motion/react";
import { Play, ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LandingfolioHero10Props {
  brandName?: string;
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  headline?: string;
  highlightedWord?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  womanProfileImage?: string;
  manProfileImage?: string;
}

function PostcraftsLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect x="2" y="2" width="24" height="24" rx="4" fill="#F97216" />
    </svg>
  );
}

function ToolbarIcon() {
  return (
    <div className="flex items-center gap-1 rounded-full bg-[#1a1a1a] px-3 py-1.5">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 8L6 4V12L2 8Z"
          fill="white"
          fillOpacity="0.8"
        />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 3H12V5H4V3ZM4 7H12V9H4V7ZM4 11H12V13H4V11Z"
          fill="white"
          fillOpacity="0.8"
        />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 4L12 12M4 12L12 4"
          stroke="white"
          strokeOpacity="0.8"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function CommentIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" stroke="#888" strokeWidth="1.5" fill="none" />
      <path
        d="M9 11C9 10.4477 9.44772 10 10 10H18C18.5523 10 19 10.4477 19 11V15C19 15.5523 18.5523 16 18 16H12L9 19V11Z"
        stroke="#888"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 17L8.55 15.7C4.4 12.1 2 10.1 2 7.5C2 5.5 3.5 4 5.5 4C6.74 4 7.93 4.55 8.7 5.45L10 6.95L11.3 5.45C12.07 4.55 13.26 4 14.5 4C16.5 4 18 5.5 18 7.5C18 10.1 15.6 12.1 11.45 15.7L10 17Z"
        stroke="#888"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function FingerprintIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 8C14 8 10 12 10 18C10 24 12 28 16 32"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 12C16 12 14 15 14 18C14 22 15 25 18 28"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 16C18 16 17 17 17 18C17 20 17.5 22 19 24"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 32C28 28 30 24 30 18C30 12 26 8 20 8"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 28C25 25 26 22 26 18C26 14 24 12 20 12"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CurvedArrowYellow() {
  return (
    <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
      <path
        d="M5 25C20 25 35 15 55 5"
        stroke="#F5A623"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 2L55 5L52 10"
        stroke="#F5A623"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CurvedLineDark() {
  return (
    <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="absolute -bottom-4 -left-8">
      <path
        d="M5 55C30 55 50 30 95 10"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="3" stroke="#6B7280" strokeWidth="1.5" fill="none" />
      <circle cx="6" cy="18" r="3" stroke="#6B7280" strokeWidth="1.5" fill="none" />
      <path d="M8.5 8.5L18 18M8.5 15.5L18 6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
];

export default function LandingfolioHero10({
  brandName = "Postcrafts",
  logoIcon,
  navItems = defaultNavItems,
  headline = "Collaborate\nremotely, with",
  highlightedWord = "Postcrafts.",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  primaryButtonText = "Start exploring",
  secondaryButtonText = "Watch video",
  onPrimaryClick,
  onSecondaryClick,
  womanProfileImage = "/landingfolio-hero-10/woman-profile.png",
  manProfileImage = "/landingfolio-hero-10/man-profile.png",
}: LandingfolioHero10Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#EFF5F3]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 lg:px-20"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          {logoIcon || <PostcraftsLogo />}
          <span className="text-lg font-semibold text-[#1a1a1a]">{brandName}</span>
        </div>

        {/* Nav Items - Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] transition-colors hover:text-[#1a1a1a]/70"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Yellow/Orange separator line */}
          <div className="h-6 w-[2px] bg-[#F5A623]" />
          <a
            href="#login"
            className="text-sm font-medium text-[#1a1a1a] transition-colors hover:text-[#1a1a1a]/70"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="rounded-md border border-[#1a1a1a] bg-transparent px-5 py-2.5 text-sm font-medium text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
          >
            Try for free
          </a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">{highlightedWord}</span>
              <span
                className="absolute bottom-1 left-0 -z-0 h-4 w-full rounded-sm bg-[#47CF78]"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#4B5563]"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onPrimaryClick}
              className="rounded-lg bg-[#F97216] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#EA580C] hover:shadow-orange-500/40"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a] transition-colors hover:text-[#1a1a1a]/70"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1a1a1a]/20">
                <Play className="h-4 w-4 fill-current" />
              </span>
              {secondaryButtonText}
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative h-[400px] w-full max-w-[500px] lg:h-[480px]">
            {/* Toolbar Icon - Top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute left-[20%] top-0 z-20"
            >
              <ToolbarIcon />
            </motion.div>

            {/* Woman Profile - Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute right-[10%] top-[5%] z-20"
            >
              <div className="relative">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[#4ADE80]">
                  <Image
                    src={womanProfileImage}
                    alt="Team member"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Curved Yellow Arrow */}
                <div className="absolute -right-12 top-4">
                  <CurvedArrowYellow />
                </div>
              </div>
            </motion.div>

            {/* Comment Icon - Left */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="absolute left-0 top-[18%] z-20"
            >
              <CommentIcon />
            </motion.div>

            {/* Main UI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute left-[5%] top-[12%] z-10 w-[65%] rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              {/* Lines representing content */}
              <div className="space-y-3">
                <div className="h-2 w-3/4 rounded-full bg-[#E5EFEE]" />
                <div className="h-2 w-1/2 rounded-full bg-[#E5EFEE]" />
                <div className="h-2 w-2/3 rounded-full bg-[#E5EFEE]" />
              </div>
            </motion.div>

            {/* Chat Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="absolute left-[8%] top-[32%] z-30 max-w-[180px] rounded-lg bg-[#1a1a1a] px-4 py-3 text-xs leading-relaxed text-white shadow-lg"
            >
              <p>Hey Carol, Can you move this button on the right side? I think that would look better.</p>
            </motion.div>

            {/* Heart Icon - Right */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="absolute right-[5%] top-[40%] z-20"
            >
              <HeartIcon />
            </motion.div>

            {/* Secondary UI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute right-0 top-[42%] z-10 w-[50%] rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-[#E5EFEE]" />
                <div className="h-2 w-3/4 rounded-full bg-[#E5EFEE]" />
                <div className="h-2 w-full rounded-full bg-[#E5EFEE]" />
                <div className="h-2 w-1/2 rounded-full bg-[#E5EFEE]" />
              </div>
            </motion.div>

            {/* Man Profile with Orange Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.75 }}
              className="absolute bottom-[5%] right-[10%] z-20"
            >
              <div className="relative">
                <div className="h-44 w-36 overflow-hidden rounded-lg bg-[#F97216]">
                  <Image
                    src={manProfileImage}
                    alt="Team member"
                    width={144}
                    height={176}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Fingerprint Icon */}
                <div className="absolute -right-6 top-2">
                  <FingerprintIcon />
                </div>
                {/* Scissors Icon */}
                <div className="absolute -right-4 bottom-8">
                  <ScissorsIcon />
                </div>
                {/* Curved Dark Line */}
                <CurvedLineDark />
              </div>
            </motion.div>

            {/* Dots Pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute bottom-[8%] left-[20%] z-10"
            >
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#9CA3AF]" />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
