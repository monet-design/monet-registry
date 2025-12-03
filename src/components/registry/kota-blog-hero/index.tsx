"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface BlogCategory {
  label: string;
  href: string;
  isActive?: boolean;
}

interface FeaturedPost {
  category: string;
  title: string;
  date: string;
  imageSrc: string;
  href: string;
}

interface KotaBlogHeroProps {
  mode?: "customization" | "default";
  logoText?: string;
  navItems?: NavItem[];
  blogCategories?: BlogCategory[];
  featuredPost?: FeaturedPost;
  loginText?: string;
  ctaText?: string;
  onLoginClick?: () => void;
  onCtaClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Customers", href: "#" },
  { label: "Country Availability", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
];

const defaultBlogCategories: BlogCategory[] = [
  { label: "Partnerships", href: "#" },
  { label: "Product", href: "#" },
  { label: "Meet The Team", href: "#" },
  { label: "Company News", href: "#" },
];

const defaultFeaturedPost: FeaturedPost = {
  category: "THE BLOG",
  title: "11 Employee Benefits\nIrish Startups Should\nOffer and Why",
  date: "August 15, 2024",
  imageSrc: "/registry/kota-blog-hero/blog-featured-image.jpg",
  href: "#",
};

// Kota Logo Component
function KotaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L14.5 9.5H22L16 14L18.5 22L12 17L5.5 22L8 14L2 9.5H9.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

export default function KotaBlogHero({
  mode = "default",
  logoText = "Kota",
  navItems = defaultNavItems,
  blogCategories = defaultBlogCategories,
  featuredPost = defaultFeaturedPost,
  loginText = "Login",
  ctaText = "See a demo",
  onLoginClick,
  onCtaClick,
}: KotaBlogHeroProps) {
  return (
    <section className="relative w-full bg-[#265D5A] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <KotaLogo className="w-6 h-6 text-white" />
          <span className="text-xl font-semibold text-white">{logoText}</span>
        </motion.div>

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
              className="flex items-center gap-1 text-sm text-white/90 transition-colors hover:text-white"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </motion.a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            onClick={onLoginClick}
            className="hidden sm:block text-sm text-white/90 hover:text-white transition-colors"
          >
            {loginText}
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCtaClick}
            className="px-5 py-2.5 bg-[#1E4A48] text-white text-sm font-medium rounded-full hover:bg-[#163836] transition-colors"
          >
            {ctaText}
          </motion.button>
        </div>
      </motion.nav>

      {/* Blog Categories Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="px-6 py-4 sm:px-10 lg:px-16 border-t border-white/10"
      >
        <div className="flex items-center gap-6 overflow-x-auto">
          <span className="text-xs font-semibold tracking-wider text-white/60 uppercase whitespace-nowrap">
            Explore the Blog
          </span>
          <div className="flex items-center gap-5">
            {blogCategories.map((category, index) => (
              <motion.a
                key={category.label}
                href={category.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
                className={`text-sm whitespace-nowrap transition-colors ${
                  category.isActive
                    ? "text-white font-medium"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {category.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl lg:max-w-lg">
            {/* Category Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-3 py-1.5 text-xs font-semibold tracking-wider text-white/90 uppercase bg-white/10 rounded"
            >
              {featuredPost.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white whitespace-pre-line"
            >
              {featuredPost.title}
            </motion.h1>

            {/* Date */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-sm text-white/70"
            >
              {featuredPost.date}
            </motion.p>

            {/* Read Article Button */}
            <motion.a
              href={featuredPost.href}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-8 px-6 py-3 bg-white text-[#265D5A] text-sm font-medium rounded-full hover:bg-white/95 transition-colors"
            >
              Read article
            </motion.a>
          </div>

          {/* Right: Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 w-full lg:max-w-xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={featuredPost.imageSrc}
                alt={featuredPost.title.replace(/\n/g, " ")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
