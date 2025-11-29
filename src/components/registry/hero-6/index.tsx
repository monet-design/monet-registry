"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface TestimonialCard {
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
}

interface ResourceCard {
  title: string;
  author: string;
  authorAvatar?: string;
  likes: number;
  views: number;
  thumbnailBg?: string;
  thumbnailText?: string[];
}

interface StatCard {
  number: string;
  label: string;
}

interface LandingfolioHero6Props {
  logoText?: string;
  navItems?: NavItem[];
  loginText?: string;
  joinText?: string;
  badge?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  testimonials?: TestimonialCard[];
  stats?: StatCard;
  personImage?: string;
  floatingPersonImage?: string;
  onCtaClick?: () => void;
  onLoginClick?: () => void;
  onJoinClick?: () => void;
}

// Floating Card Components
function TestimonialFloatingCard({
  quote,
  authorName,
  authorRole,
  authorAvatar,
  className,
  delay = 0,
}: TestimonialCard & { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`bg-white rounded-xl shadow-lg p-5 max-w-[260px] ${className}`}
    >
      <p className="text-[13px] leading-relaxed text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center gap-3">
        {authorAvatar ? (
          <Image
            src={authorAvatar}
            alt={authorName}
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-300 to-orange-500" />
        )}
        <div>
          <p className="text-sm font-medium text-gray-900">{authorName}</p>
          <p className="text-xs text-gray-500">{authorRole}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ResourceFloatingCard({
  title,
  author,
  likes,
  views,
  thumbnailBg,
  thumbnailText,
  className,
  delay = 0,
}: ResourceCard & { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden max-w-[220px] ${className}`}
    >
      {/* Thumbnail */}
      <div
        className={`h-28 flex items-center justify-center p-4 ${
          thumbnailBg || "bg-blue-500"
        }`}
      >
        {thumbnailText && (
          <div className="text-white">
            {thumbnailText.map((line, i) => (
              <p key={i} className="text-xl font-bold leading-tight">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
          <div>
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="text-xs text-gray-500">{author}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Heart size={12} />
            {likes.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={12} />
            {views.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function FocusOrderCard({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden max-w-[200px] ${className}`}
    >
      {/* Header */}
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
          Accessibility Demo
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-1">
          Focus Order Prototype
        </h4>
        <p className="text-xs text-gray-500 mb-3">and Focus Order</p>
        <p className="text-[10px] text-gray-400">Plugin from Microsoft</p>

        {/* Thumbnail Preview */}
        <div className="mt-3 bg-gray-100 rounded-lg p-2 flex gap-1">
          <div className="flex-1 space-y-1">
            <div className="h-2 bg-gray-300 rounded w-3/4" />
            <div className="h-2 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-pink-600" />
        <div>
          <p className="text-xs font-medium text-gray-900">Focus Order Demo Kit</p>
          <p className="text-[10px] text-gray-500">Jenny Flores</p>
        </div>
      </div>

      <div className="px-4 pb-3 flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Heart size={12} />
          1052
        </span>
        <span className="flex items-center gap-1">
          <Eye size={12} />
          33,492
        </span>
      </div>
    </motion.div>
  );
}

function StatFloatingCard({
  number,
  label,
  className,
  delay = 0,
}: StatCard & { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`bg-gray-900 rounded-xl p-5 text-white ${className}`}
    >
      <p className="text-3xl font-bold mb-1">{number}</p>
      <p className="text-sm text-gray-300 whitespace-pre-line">{label}</p>
    </motion.div>
  );
}

function PersonFloatingCard({
  imageSrc,
  className,
  delay = 0,
}: {
  imageSrc?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="Person"
          width={60}
          height={60}
          className="object-cover w-[60px] h-[60px]"
        />
      ) : (
        <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-400 to-blue-600" />
      )}
    </motion.div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Experts", href: "#" },
  { label: "Community Groups", href: "#" },
  { label: "Support", href: "#" },
];

const defaultTestimonials: TestimonialCard[] = [
  {
    quote:
      '"One of the best resource sharing site for Developers. Loved the community too. Very helpful."',
    authorName: "Martin Gray",
    authorRole: "React Developer",
  },
  {
    quote:
      '"When you have lots of resources on your hand, it makes the development process easy!"',
    authorName: "Floyd Miles",
    authorRole: "Vue JS Developer",
  },
];

// Main Component
export default function LandingfolioHero6({
  logoText = "RAREBLOCKS",
  navItems = defaultNavItems,
  loginText = "Login",
  joinText = "Join community",
  badge = "Made by Developers, for Developers",
  headline = "Quality resources shared\nby the community",
  subheadline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVehicula massa in enim luctus. Rutrum arcu.",
  ctaText = "Get access to 4,958 resources",
  testimonials = defaultTestimonials,
  stats = { number: "4,958", label: "free\nresources" },
  personImage = "/registry/landingfolio-hero-6/woman-portrait.jpg",
  floatingPersonImage = "/registry/landingfolio-hero-6/man-portrait.jpg",
  onCtaClick,
  onLoginClick,
  onJoinClick,
}: LandingfolioHero6Props) {
  return (
    <section className="relative min-h-screen w-full bg-[#F9FAFC] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 sm:px-8 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            <span className="text-[#E91E63]">/</span>
            {logoText}
          </span>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onLoginClick}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            {loginText}
          </button>
          <button
            onClick={onJoinClick}
            className="rounded-full border border-gray-900 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            {joinText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-32 sm:px-8 lg:pt-20">
        {/* Center Content */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm text-gray-600 shadow-sm">
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-gray-500 max-w-lg whitespace-pre-line"
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={onCtaClick}
            className="mt-10 rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
          >
            {ctaText}
          </motion.button>
        </div>

        {/* Floating Cards */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left Side Cards */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
            {/* Testimonial Card 1 */}
            <TestimonialFloatingCard
              quote={testimonials[0]?.quote || ""}
              authorName={testimonials[0]?.authorName || ""}
              authorRole={testimonials[0]?.authorRole || ""}
              authorAvatar={testimonials[0]?.authorAvatar}
              className="absolute -left-4 top-32"
              delay={0.5}
            />

            {/* Semi Design Component Card */}
            <ResourceFloatingCard
              title="Semi Design Component"
              author="Kristin Watson"
              likes={1052}
              views={33492}
              thumbnailBg="bg-gradient-to-br from-blue-400 to-blue-600"
              thumbnailText={["Semi", "Design", "Component"]}
              className="absolute left-16 -top-16"
              delay={0.6}
            />
          </div>

          {/* Center Card - Person Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/3 hidden lg:block"
          >
            <div className="w-[180px] h-[240px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={personImage}
                alt="Community member"
                width={180}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            {/* Floating Person Card */}
            <PersonFloatingCard
              imageSrc={floatingPersonImage}
              className="absolute right-48 -top-32"
              delay={0.5}
            />

            {/* Stats Card */}
            <StatFloatingCard
              number={stats.number}
              label={stats.label}
              className="absolute right-12 top-0 w-32"
              delay={0.6}
            />

            {/* Focus Order Card */}
            <FocusOrderCard
              className="absolute right-32 top-24"
              delay={0.7}
            />

            {/* Testimonial Card 2 */}
            <TestimonialFloatingCard
              quote={testimonials[1]?.quote || ""}
              authorName={testimonials[1]?.authorName || ""}
              authorRole={testimonials[1]?.authorRole || ""}
              authorAvatar={testimonials[1]?.authorAvatar}
              className="absolute right-0 top-64"
              delay={0.8}
            />
          </div>
        </div>
      </div>

      {/* Gradient Fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9FAFC] to-transparent pointer-events-none" />
    </section>
  );
}
