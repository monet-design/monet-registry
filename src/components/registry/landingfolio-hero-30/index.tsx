"use client";

import { motion } from "motion/react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface Article {
  category: string;
  title: string;
  date: string;
  imageSrc: string;
}

interface LandingfolioHero30Props {
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  description?: string;
  ctaButtonText?: string;
  featuredTitle?: string;
  articles?: Article[];
  onNavItemClick?: (href: string) => void;
  onCtaClick?: () => void;
  onArticleClick?: (article: Article) => void;
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

const defaultArticles: Article[] = [
  {
    category: "Growth",
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    imageSrc: "/registry/landingfolio-hero-30/article-1.png",
  },
  {
    category: "Growth",
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    imageSrc: "/registry/landingfolio-hero-30/article-2.png",
  },
  {
    category: "Growth",
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    imageSrc: "/registry/landingfolio-hero-30/article-3.png",
  },
];

// Lightning Bolt Icon Component
function LightningBolt({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1L2 18H12L10.5 31L22 14H12L13.5 1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Article Card Component
function ArticleCard({
  article,
  onClick,
  index,
}: {
  article: Article;
  onClick?: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex-shrink-0 w-[100px] h-[100px] rounded-xl overflow-hidden">
        <img
          src={article.imageSrc}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0 pt-1">
        <p className="text-sm text-[#9CA3AF] mb-1.5">{article.category}</p>
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-[#9CA3AF]">{article.date}</p>
      </div>
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero30({
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  headline = "We write articles on\nSaaS startup growth.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  ctaButtonText = "Read Exclusive Blog",
  featuredTitle = "Featured Articles",
  articles = defaultArticles,
  onNavItemClick,
  onCtaClick,
  onArticleClick,
}: LandingfolioHero30Props) {
  return (
    <section className="w-full min-h-screen flex flex-col overflow-hidden">
      {/* Header - Full Width White Background */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white px-6 lg:px-12 xl:px-20 py-5 flex items-center justify-between z-20"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full border-[2.5px] border-[#6366F1]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
          </div>
          <span className="text-gray-900 font-semibold text-base tracking-tight">
            {logoText}
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (onNavItemClick) {
                  e.preventDefault();
                  onNavItemClick(item.href);
                }
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Section - Dark Background */}
        <div className="relative flex-1 bg-[#111827] px-6 lg:px-12 xl:px-20 py-12 lg:py-16">
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 max-w-xl">
            {/* Lightning Bolt Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12"
            >
              <LightningBolt className="w-7 h-9 text-black" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight mb-6 whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#9CA3AF] text-base leading-relaxed mb-10 max-w-md"
            >
              {description}
            </motion.p>

            {/* CTA Button with Gradient Border and Glow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative inline-block"
            >
              {/* Glow Effect */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-6 blur-xl opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7 0%, #EC4899 50%, #22D3EE 100%)",
                }}
              />
              <button onClick={onCtaClick} className="relative group">
                {/* Gradient Border Background */}
                <div
                  className="absolute -inset-[2px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #A855F7 0%, #EC4899 35%, #F472B6 50%, #22D3EE 75%, #06B6D4 100%)",
                  }}
                />
                {/* Button Content */}
                <div className="relative px-8 py-3.5 bg-[#111827] rounded-full text-white text-sm font-medium hover:bg-[#1a202c] transition-colors">
                  {ctaButtonText}
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Light Gray Background with Articles */}
        <div className="relative w-full lg:w-[420px] xl:w-[480px] bg-[#F5F5F5] px-6 lg:px-8 py-8 lg:py-10">
          {/* Featured Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg font-bold text-gray-900 mb-6"
          >
            {featuredTitle}
          </motion.h2>

          {/* Article Cards */}
          <div className="space-y-4">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                index={index}
                onClick={() => onArticleClick?.(article)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
