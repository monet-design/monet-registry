"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface ArticleItem {
  title: string;
  image: string;
  href: string;
}

interface LandingfolioHero12Props {
  logoText?: string;
  navItems?: NavItem[];
  joinButtonText?: string;
  greeting?: string;
  name?: string;
  topic?: string;
  description?: string;
  ctaText?: string;
  latestPicksLabel?: string;
  articles?: ArticleItem[];
  personImage?: string;
  onCtaClick?: () => void;
  onJoinClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "SERVICES", href: "#services" },
  { label: "LATEST COLLECTIONS", href: "#collections" },
  { label: "BLOG", href: "#blog" },
];

// Default articles
const defaultArticles: ArticleItem[] = [
  {
    title: "How a visual artist redefines success in graphic design",
    image: "/landingfolio-hero-12/thumb-1.png",
    href: "#",
  },
  {
    title: "How a visual artist redefines success in graphic design",
    image: "/landingfolio-hero-12/thumb-2.png",
    href: "#",
  },
  {
    title: "How a visual artist redefines success in graphic design",
    image: "/landingfolio-hero-12/thumb-3.png",
    href: "#",
  },
];

// Logo Icon Component (purple ring)
function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="14"
        cy="14"
        r="10"
        stroke="#5A51E2"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

// Decorative signature element
function SignatureDecor() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -top-8 left-1/2 -translate-x-1/2"
    >
      <path
        d="M10 50 Q30 10, 50 30 T70 20"
        stroke="#1A1A1A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 30 Q60 25, 65 35 Q70 45, 60 50"
        stroke="#1A1A1A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Green diagonal stripes decoration
function GreenStripesDecor() {
  return (
    <svg
      width="60"
      height="80"
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -bottom-4 left-1/4"
    >
      <line
        x1="10"
        y1="80"
        x2="30"
        y2="0"
        stroke="#22C55E"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="80"
        x2="40"
        y2="0"
        stroke="#22C55E"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="80"
        x2="50"
        y2="0"
        stroke="#22C55E"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="80"
        x2="60"
        y2="0"
        stroke="#22C55E"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Cyan starburst decoration
function StarburstDecor() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/3 -right-4"
    >
      <path
        d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z"
        fill="#2DD4BF"
      />
      <path
        d="M20 5 L21 18 L35 20 L21 22 L20 35 L19 22 L5 20 L19 18 Z"
        fill="#5EEAD4"
      />
    </svg>
  );
}

// Article Card Component
function ArticleCard({
  article,
  index,
}: {
  article: ArticleItem;
  index: number;
}) {
  return (
    <motion.a
      href={article.href}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
      className="flex items-center gap-4 group"
    >
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm font-medium text-[#1A1A1A] leading-snug group-hover:text-[#5A51E2] transition-colors">
        {article.title}
      </p>
    </motion.a>
  );
}

// Main Component
export default function LandingfolioHero12({
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  joinButtonText = "Join Email List",
  greeting = "Hey",
  name = "Brian Jones",
  topic = "NFTs",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus.",
  ctaText = "Read Exclusive Blog",
  latestPicksLabel = "LATEST PICKS",
  articles = defaultArticles,
  personImage = "/landingfolio-hero-12/person.png",
  onCtaClick,
  onJoinClick,
}: LandingfolioHero12Props) {
  return (
    <section className="relative w-full min-h-screen bg-[#F9FAFC] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-base font-semibold text-[#1A1A1A]">
            {logoText}
          </span>
        </div>

        {/* Nav Links - Center */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wider text-[#1A1A1A] hover:text-[#5A51E2] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Join Button */}
        <button
          onClick={onJoinClick}
          className="px-6 py-2.5 bg-[#2D3142] text-white text-sm font-medium rounded-md hover:bg-[#3D434F] transition-colors"
        >
          {joinButtonText}
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {/* Headline */}
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                {greeting}{" "}
                <span role="img" aria-label="waving hand">
                  👋
                </span>{" "}
                I am {name}, writing on
                <br />
                {topic}.
              </h1>

              {/* Description */}
              <p className="text-base text-[#6B7280] leading-relaxed mb-8 max-w-md">
                {description}
              </p>

              {/* CTA Button */}
              <button
                onClick={onCtaClick}
                className="px-8 py-4 bg-[#5A51E2] text-white text-sm font-medium rounded-full hover:bg-[#4A41D2] transition-colors"
              >
                {ctaText}
              </button>
            </motion.div>
          </div>

          {/* Center - Person Image with Decorations */}
          <div className="lg:col-span-4 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Signature decoration */}
              <SignatureDecor />

              {/* Person Image */}
              <div className="relative w-[300px] lg:w-[380px] h-[400px] lg:h-[500px]">
                <Image
                  src={personImage}
                  alt={name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Green stripes decoration */}
              <GreenStripesDecor />

              {/* Starburst decoration */}
              <StarburstDecor />
            </motion.div>
          </div>

          {/* Right - Latest Picks */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-[#5A51E2]">*</span>
              <span className="text-xs font-semibold tracking-wider text-[#6B7280]">
                {latestPicksLabel}
              </span>
            </motion.div>

            <div className="space-y-6">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
