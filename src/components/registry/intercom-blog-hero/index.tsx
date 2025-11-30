"use client";

import { motion } from "motion/react";
import { Clock } from "lucide-react";

// Navigation item type
interface NavItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

// Author type
interface Author {
  name: string;
  avatarUrl?: string;
}

// Featured article type
interface FeaturedArticle {
  publishedDate: string;
  readTime: string;
  title: string;
  description: string;
  author: Author;
  thumbnailUrl: string;
  href?: string;
}

// Props for the component
interface IntercomBlogHeroProps {
  blogTitle?: string;
  navItems?: NavItem[];
  featuredArticle?: FeaturedArticle;
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Product & Design", href: "#" },
  { label: "AI & Automation", href: "#" },
  { label: "Customer Service", href: "#" },
  { label: "News & Updates", href: "#" },
  { label: "The Ticket", href: "#" },
];

// Default featured article
const defaultFeaturedArticle: FeaturedArticle = {
  publishedDate: "Oct 30, 2025",
  readTime: "9 min",
  title: "How to build a Content\nDesign Agent",
  description:
    "You need a recipe for great content design before\nyou can automate it.",
  author: {
    name: "Russell Norris",
  },
  thumbnailUrl: "/registry/intercom-blog-hero/thumbnail.jpg",
  href: "#",
};

// Avatar placeholder component
function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white text-xs font-medium">
      {initials}
    </div>
  );
}

// Main Component
export default function IntercomBlogHero({
  blogTitle = "The Intercom Blog",
  navItems = defaultNavItems,
  featuredArticle = defaultFeaturedArticle,
}: IntercomBlogHeroProps) {
  return (
    <section className="relative w-full bg-[#E4E3DC]">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
      `}</style>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Blog Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-12 pb-8 sm:pt-16 sm:pb-10"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#1a1a1a] text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.03em",
            }}
          >
            {blogTitle}
          </h1>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 pb-6"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="text-sm sm:text-base text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-px bg-[#c4c3bc] origin-left"
        />

        {/* Featured Article Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Article Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Meta Info */}
              <div
                className="flex items-center gap-4 text-sm text-[#6b6b6b]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>Published {featuredArticle.publishedDate}</span>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#6b6b6b]" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a1a] leading-tight"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {featuredArticle.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < featuredArticle.title.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </h2>

              {/* Description */}
              <p
                className="text-base sm:text-lg text-[#6b6b6b] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {featuredArticle.description.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                      featuredArticle.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4">
                {featuredArticle.author.avatarUrl ? (
                  <img
                    src={featuredArticle.author.avatarUrl}
                    alt={featuredArticle.author.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <AvatarPlaceholder name={featuredArticle.author.name} />
                )}
                <span
                  className="text-sm font-medium text-[#1a1a1a]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {featuredArticle.author.name}
                </span>
              </div>
            </motion.div>

            {/* Right: Thumbnail */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <a
                href={featuredArticle.href || "#"}
                className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={featuredArticle.thumbnailUrl}
                  alt={featuredArticle.title.replace("\n", " ")}
                  className="w-full h-auto object-cover aspect-[16/10]"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
