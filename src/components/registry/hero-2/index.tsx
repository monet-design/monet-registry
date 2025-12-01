"use client";

import { motion } from "motion/react";
import { ArrowRight, Folder } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface LandingfolioHero2Props {
  mode?: "light" | "dark";
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: { label: string; href: string }[];
  tagline?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  loginText?: string;
  loginLinkText?: string;
  stats?: {
    activeProfessionals?: number;
    onlineCourses?: number;
  };
  images?: {
    person1?: string;
    person2?: string;
    person3?: string;
  };
  onCtaClick?: () => void;
  onLoginClick?: () => void;
}

// Folder Icon Component
function FolderIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <Folder className="w-full h-full text-yellow-400 fill-yellow-400" />
    </div>
  );
}

// Sparkle/Star Icon
function SparkleIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4L26.5 18.5L41 16L28.5 24L41 32L26.5 29.5L24 44L21.5 29.5L7 32L19.5 24L7 16L21.5 18.5L24 4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// Cursor/Pointer Icon
function CursorIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L10.5 20L13 13L20 10.5L4 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Main Component
export default function LandingfolioHero2({
  mode = "light",
  logo = {
    icon: <FolderIcon className="w-6 h-6" />,
    text: "Postcrafts",
  },
  navItems = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ],
  tagline = "A SOCIAL MEDIA FOR LEARNERS",
  headline = "Connect &\nlearn from\nthe experts",
  subheadline = "Grow your career fast with right mentor.",
  ctaText = "Join for free",
  loginText = "Already joined us?",
  loginLinkText = "Log in",
  stats = {
    activeProfessionals: 13422,
    onlineCourses: 2582,
  },
  images = {
    person1: "/registry/landingfolio-hero-2/person-1.jpg",
    person2: "/registry/landingfolio-hero-2/person-2.jpg",
    person3: "/registry/landingfolio-hero-2/person-3.jpg",
  },
  onCtaClick,
  onLoginClick,
}: LandingfolioHero2Props) {
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section className="w-full bg-[#FEFDFB] min-h-screen overflow-hidden">
      {/* Header */}
      <nav className="w-full px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {logo.icon}
            <span className="text-black font-semibold text-lg">
              {logo.text}
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 text-sm font-medium hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Join Now Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Join Now
          </motion.button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#2563EB] text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            >
              {tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black mb-6 leading-[1.1] tracking-tight whitespace-pre-line"
              style={{ fontFamily: "inherit" }}
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-base lg:text-lg mb-8"
            >
              {subheadline}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4"
            >
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-3 bg-[#FACC16] hover:bg-[#EAB308] text-black text-sm font-medium px-6 py-3.5 rounded-full transition-colors group"
              >
                {ctaText}
                <span className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </motion.div>

            {/* Login Link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-500 text-sm"
            >
              {loginText}{" "}
              <button
                onClick={onLoginClick}
                className="text-black font-medium hover:underline"
              >
                {loginLinkText}
              </button>
            </motion.p>
          </div>

          {/* Right Content - Collage */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Yellow Circle - Person 1 (top left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-0 left-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-[#FACC16]"
            >
              <Image
                src={images.person1 || ""}
                alt="Professional"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Black Stats Card - Active Professionals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-4 left-28 lg:left-36 w-36 lg:w-44 bg-black rounded-3xl p-5 lg:p-6"
            >
              <p className="text-white text-xs lg:text-sm mb-1">Active</p>
              <p className="text-white text-xs lg:text-sm mb-3">Professionals</p>
              <p className="text-white text-2xl lg:text-3xl font-semibold">
                {formatNumber(stats.activeProfessionals || 0)}
              </p>
            </motion.div>

            {/* Ring indicator (top) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute top-2 left-44 lg:left-56 w-5 h-5 rounded-full border-2 border-gray-300"
            />

            {/* Purple Circle - Person 2 (top right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-[#DFB8FA]"
            >
              <Image
                src={images.person2 || ""}
                alt="Professional"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Blue Rounded Square - Person 3 (center left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-32 lg:top-40 left-0 w-44 h-52 lg:w-56 lg:h-64 rounded-[2rem] overflow-hidden bg-[#2563EB]"
            >
              <Image
                src={images.person3 || ""}
                alt="Professional"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Sparkle Icon */}
            <motion.div
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-44 lg:top-52 left-48 lg:left-60"
            >
              <SparkleIcon className="w-16 h-16 lg:w-20 lg:h-20 text-black" />
            </motion.div>

            {/* Yellow Half Circle (right side) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-36 lg:top-44 right-0 w-20 h-40 lg:w-24 lg:h-48 rounded-l-full bg-[#FACC16]"
            />

            {/* Green Stats Card - Online Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-12 lg:bottom-16 left-20 lg:left-28 w-36 lg:w-44 bg-[#A1F1BE] rounded-3xl p-5 lg:p-6"
            >
              <p className="text-black text-xs lg:text-sm mb-1">Online</p>
              <p className="text-black text-xs lg:text-sm mb-3">Courses</p>
              <p className="text-black text-2xl lg:text-3xl font-semibold">
                {formatNumber(stats.onlineCourses || 0)}
              </p>
            </motion.div>

            {/* Red/Coral Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-20 lg:bottom-24 right-8 lg:right-12 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#EF4444]"
            />

            {/* Cursor Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="absolute bottom-8 lg:bottom-12 right-20 lg:right-28"
            >
              <CursorIcon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
