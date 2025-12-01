"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface ArticleCard {
  category: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
}

interface LandingfolioHero21Props {
  mode?: "customization" | "default";
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  description?: string;
  emailPlaceholder?: string;
  joinButtonText?: string;
  benefits?: string[];
  articles?: ArticleCard[];
  onCtaClick?: () => void;
  onEmailSubmit?: (email: string) => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

// Default articles
const defaultArticles: ArticleCard[] = [
  {
    category: "Growth",
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    imageAlt: "Visual artist portrait",
  },
  {
    category: "Growth",
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    imageAlt: "Creative professional",
  },
  {
    category: "Growth",
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    imageAlt: "Designer portrait",
  },
  {
    category: "Growth",
    title: "How a visual artist redefines success in graphic design",
    date: "April 09, 2022",
    imageSrc:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&q=80",
    imageAlt: "Creative artist",
  },
];

// Default benefits
const defaultBenefits = ["Weekly new articles", "Join other 1600+ Devs"];

// Logo Icon Component
function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#7871E5"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="42 14"
      />
    </svg>
  );
}

// Decorative Concentric Circles
function ConcentricCircles() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative w-[800px] h-[800px]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200/60"
            style={{
              width: `${200 + i * 120}px`,
              height: `${200 + i * 120}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Article Card Component
function ArticleCardComponent({
  article,
  index,
}: {
  article: ArticleCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
      className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Article Image */}
      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={article.imageSrc}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="flex-1 min-w-0">
        <span className="text-xs font-medium text-gray-500">
          {article.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mt-1 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">{article.date}</p>
      </div>
    </motion.div>
  );
}

// Main Component
const CUSTOMIZATION = {};

export default function LandingfolioHero21({
  mode = "default",
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  ctaButtonText = "Join Email List",
  headline = "Helping developers to\nget their dream job",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVehicula massa in enim luctus. Rutrum arcu.",
  emailPlaceholder = "Email address",
  joinButtonText = "Join Now",
  benefits = defaultBenefits,
  articles = defaultArticles,
  onCtaClick,
  onEmailSubmit,
}: LandingfolioHero21Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onEmailSubmit?.(email);
  };

  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <LogoIcon className="w-6 h-6" />
              <span className="text-gray-900 font-semibold text-base tracking-tight">
                {logoText}
              </span>
            </div>

            {/* Nav Links - Center */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className="px-5 py-2.5 bg-[#111828] text-white text-sm font-medium rounded-full hover:bg-[#1f2937] transition-colors"
            >
              {ctaButtonText}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-8 lg:pt-24 lg:pb-16">
        {/* Decorative Circles */}
        <ConcentricCircles />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 leading-[1.15] tracking-tight whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-500 text-base leading-relaxed whitespace-pre-line"
          >
            {description}
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="mt-10 flex items-center gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              className="flex-1 px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#7871E5] focus:ring-1 focus:ring-[#7871E5] transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-[#7871E5] text-white text-sm font-medium rounded-lg hover:bg-[#6C65E0] transition-colors whitespace-nowrap"
            >
              {joinButtonText}
            </button>
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-6 flex-wrap"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gray-400" strokeWidth={2} />
                <span className="text-sm text-gray-600">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="relative z-10 pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.map((article, index) => (
              <ArticleCardComponent
                key={index}
                article={article}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
