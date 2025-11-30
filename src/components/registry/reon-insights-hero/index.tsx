"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface Category {
  id: string;
  label: string;
}

interface BlogPost {
  id: string;
  category: string;
  title: string;
  image: string;
  href: string;
}

interface ReonInsightsHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  title?: string;
  categories?: Category[];
  defaultCategory?: string;
  posts?: BlogPost[];
  onCategoryChange?: (categoryId: string) => void;
  onPostClick?: (postId: string) => void;
}

// Logo Component
function ReonLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4h10c3.3 0 6 2.7 6 6s-2.7 6-6 6h-4v4H4V4z"
        fill="currentColor"
      />
      <path
        d="M10 10h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v-4z"
        fill="#FDF6ED"
      />
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
    >
      {/* Logo */}
      <a href="#" className="flex items-center">
        <ReonLogo className="h-5 w-5 text-[#E31B54]" />
      </a>

      {/* Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-sm transition-colors ${
              item.active
                ? "border-b border-[#1A1A1A] text-[#1A1A1A]"
                : "text-[#1A1A1A] hover:text-[#E31B54]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Search Icon */}
      <button className="rounded-full border border-[#E8E4E0] p-2 text-[#1A1A1A] transition-colors hover:border-[#E31B54] hover:text-[#E31B54]">
        <Search className="h-4 w-4" />
      </button>
    </motion.header>
  );
}

// Category Filter Component
function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: {
  categories: Category[];
  selectedCategory: string;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center gap-4"
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className="flex items-center gap-2 text-sm transition-colors"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                isSelected
                  ? "border-[#E31B54] bg-[#E31B54]"
                  : "border-[#C4C0BC] bg-transparent"
              }`}
            >
              {isSelected && (
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </span>
            <span
              className={`${
                isSelected ? "text-[#E31B54]" : "text-[#1A1A1A]"
              }`}
            >
              {category.label}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}

// Blog Card Component
function BlogCard({
  post,
  index,
  onClick,
  size = "large",
}: {
  post: BlogPost;
  index: number;
  onClick?: () => void;
  size?: "large" | "small";
}) {
  const isLarge = size === "large";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className={`group cursor-pointer ${isLarge ? "col-span-1" : "col-span-1"}`}
      onClick={onClick}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-lg ${
          isLarge ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <span className="text-sm font-medium text-[#E31B54]">
          {post.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#E31B54]">
          {post.title}
          <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
        </h3>
      </div>
    </motion.article>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Services", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Work", href: "#" },
  { label: "Insights", href: "#", active: true },
  { label: "About us", href: "#" },
  { label: "Contact", href: "#" },
];

const defaultCategories: Category[] = [
  { id: "all", label: "All" },
  { id: "news", label: "News" },
  { id: "tools", label: "Tools" },
  { id: "team-culture", label: "Team and culture" },
  { id: "best-practices", label: "Best practices" },
  { id: "react", label: "React" },
];

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    category: "Tools",
    title: "How to Navigate Complex Decisions with Architectural Decision Records (ADRs)",
    image: "/registry/reon-insights-hero/crossroads-illustration.png",
    href: "#",
  },
  {
    id: "2",
    category: "Best practices",
    title: "The Critical Role of Product Analytics",
    image: "/registry/reon-insights-hero/office-analytics.png",
    href: "#",
  },
];

// Main Component
export default function ReonInsightsHero({
  logoText = "R",
  navItems = defaultNavItems,
  title = "Insights",
  categories = defaultCategories,
  defaultCategory = "all",
  posts = defaultPosts,
  onCategoryChange,
  onPostClick,
}: ReonInsightsHeroProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter(
          (post) =>
            post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory
        );

  return (
    <section className="relative min-h-screen w-full bg-[#FDF6ED]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <Header logoText={logoText} navItems={navItems} />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 font-serif text-5xl italic text-[#E31B54] sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h1>

        {/* Category Filter */}
        <div className="mt-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={handleCategoryChange}
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 pb-16 md:grid-cols-2 lg:gap-12">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              size={index === 0 ? "large" : "small"}
              onClick={() => onPostClick?.(post.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
