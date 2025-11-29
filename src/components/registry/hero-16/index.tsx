"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface ArticleCard {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

interface LandingfolioHero16Props {
  logoText?: string;
  navItems?: NavItem[];
  headlinePart1?: string;
  headlinePart2?: string;
  headlinePart3?: string;
  description?: string;
  subscribeLabel?: string;
  subscribePlaceholder?: string;
  subscribeButtonText?: string;
  articles?: ArticleCard[];
  onSubscribe?: (email: string) => void;
}

// Logo Icon Component - Blue/purple circle with gradient stroke
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
        stroke="url(#logoGradient16)"
        strokeWidth="2.5"
        fill="none"
      />
      <defs>
        <linearGradient
          id="logoGradient16"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Diagonal Lines Decoration
function DiagonalLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1={i * 5}
          y1="20"
          x2={i * 5 + 10}
          y2="0"
          stroke="#0D9488"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
}: {
  logoText: string;
  navItems: NavItem[];
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-5"
      role="banner"
    >
      <div className="flex items-center gap-2">
        <LogoIcon className="h-6 w-6" />
        <span className="text-lg font-semibold text-gray-900">{logoText}</span>
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Join Email List
      </motion.button>
    </motion.header>
  );
}

// Article Card Component
function ArticleCardItem({ article }: { article: ArticleCard }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group w-[320px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm"
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold leading-snug text-gray-900">
          {article.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {article.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-900" />
        </div>
      </div>
    </motion.article>
  );
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Support", href: "#" },
];

const defaultArticles: ArticleCard[] = [
  {
    id: "1",
    image: "/registry/landingfolio-hero-16/article-1.jpg",
    title: "How to write content about your photographs",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    readTime: "7 Mins Read",
  },
  {
    id: "2",
    image: "/registry/landingfolio-hero-16/article-2.jpg",
    title: "How to write content about your photographs",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    readTime: "7 Mins Read",
  },
  {
    id: "3",
    image: "/registry/landingfolio-hero-16/article-3.jpg",
    title: "How to write content about your photographs",
    description:
      "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    readTime: "7 Mins Read",
  },
];

// Main Component
export default function LandingfolioHero16({
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  headlinePart1 = "Community of",
  headlinePart2 = "designers",
  headlinePart3 = "made by designers",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  subscribeLabel = "Join to get free updates every week",
  subscribePlaceholder = "Enter email address",
  subscribeButtonText = "Join Now",
  articles = defaultArticles,
  onSubscribe = () => {},
}: LandingfolioHero16Props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F9FAFC]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <Header logoText={logoText} navItems={navItems} />

        {/* Main Content */}
        <div className="flex flex-col gap-12 py-16 lg:flex-row lg:items-start lg:gap-8 lg:py-20">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 lg:max-w-lg">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl"
            >
              <span>{headlinePart1}</span>
              <br />
              <span>{headlinePart2}</span>{" "}
              <Sparkles className="inline-block h-8 w-8 text-indigo-400" />{" "}
              <span>{headlinePart3}</span>
              <Zap className="ml-1 inline-block h-8 w-8 fill-orange-400 text-orange-400" />
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-md text-base leading-relaxed text-gray-500"
            >
              {description}
            </motion.p>

            {/* Diagonal Lines Decoration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <DiagonalLines className="h-5 w-32" />
            </motion.div>

            {/* Subscribe Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3 pt-4"
            >
              <p className="text-sm font-medium text-gray-900">
                {subscribeLabel}
              </p>

              <form onSubmit={handleSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscribePlaceholder}
                  className="flex-1 rounded-l-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-gray-300"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                >
                  {subscribeButtonText}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right side - Article Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex flex-1 gap-6 overflow-x-auto pb-4 lg:overflow-visible"
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <ArticleCardItem article={article} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-2 pb-8"
        >
          <div className="h-1 w-8 rounded-full bg-gray-900" />
          <div className="h-1 w-8 rounded-full bg-gray-300" />
          <div className="h-1 w-8 rounded-full bg-gray-300" />
        </motion.div>
      </div>
    </section>
  );
}
