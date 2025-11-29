"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface MovieItem {
  title: string;
  genre: string;
  year: string;
}

interface LandingfolioHero4Props {
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  reviewStars?: number;
  reviewTitle?: string;
  reviewContent?: string;
  reviewerName?: string;
  reviewerAvatar?: string;
  movies?: MovieItem[];
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

const defaultMovies: MovieItem[] = [
  { title: "Star Wars", genre: "Adventure", year: "1977" },
  { title: "Howard The Duck", genre: "Comedy", year: "1986" },
  { title: "American Graffiti", genre: "Comedy", year: "1973" },
  { title: "Casablanca", genre: "Crime", year: "1942" },
  { title: "Pyscho", genre: "Thriller", year: "1960" },
  { title: "The Godfather", genre: "Crime", year: "1972" },
];

// Code Editor Component
function CodeEditor() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-xl overflow-hidden">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#F9F9F9] border-b border-gray-100">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
          <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
          <div className="w-3 h-3 rounded-full bg-[#E5E5E5]" />
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 font-mono text-sm leading-relaxed">
        <CodeLine num={1}><Tag name="h1" />Classic Movies<Tag name="/h1" /></CodeLine>
        <CodeLine num={2}><Tag name="table" /> <Attr name="class" value="rwd-table" />{`>`}</CodeLine>
        <CodeLine num={3} indent={1}><Tag name="tr" /></CodeLine>
        <CodeLine num={4} indent={2}><Tag name="th" />Movie Title<Tag name="/th" /></CodeLine>
        <CodeLine num={5} indent={2}><Tag name="th" />Genre<Tag name="/th" /></CodeLine>
        <CodeLine num={6} indent={2}><Tag name="th" />Year<Tag name="/th" /></CodeLine>
        <CodeLine num={7} indent={2}><Tag name="th" />Gross<Tag name="/th" /></CodeLine>
        <CodeLine num={8} indent={1}><Tag name="/tr" /></CodeLine>
        <CodeLine num={9} indent={1}><Tag name="tr" /></CodeLine>
        <CodeLine num={10} indent={2}><Tag name="td" />Star</CodeLine>
        <CodeLine num={11}>Wars<Tag name="/td" /></CodeLine>
        <CodeLine num={12} indent={2}><Tag name="td" /></CodeLine>
        <CodeLine num={13}>fi<Tag name="/td" /></CodeLine>
      </div>
    </div>
  );
}

// Code Line Component
function CodeLine({ num, indent = 0, children }: { num: number; indent?: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="w-8 text-right pr-4 text-gray-400 select-none">{num}</span>
      <span style={{ paddingLeft: `${indent * 16}px` }}>{children}</span>
    </div>
  );
}

// Tag Component for syntax highlighting
function Tag({ name }: { name: string }) {
  const isClosing = name.startsWith('/');
  const tagName = isClosing ? name.slice(1) : name;
  return (
    <span>
      <span className="text-gray-800">&lt;</span>
      {isClosing && <span className="text-gray-800">/</span>}
      <span className="text-[#5B9BD5]">{tagName}</span>
      <span className="text-gray-800">&gt;</span>
    </span>
  );
}

// Attribute Component
function Attr({ name, value }: { name: string; value: string }) {
  return (
    <span>
      <span className="text-[#9B6C5A]">{name}</span>
      <span className="text-gray-800">=</span>
      <span className="text-[#C97D7D]">&quot;{value}&quot;</span>
    </span>
  );
}

// Movie Table Component
function MovieTable({ movies }: { movies: MovieItem[] }) {
  return (
    <div className="rounded-lg bg-[#1E1E1E] text-white overflow-hidden shadow-xl">
      {/* Table Header */}
      <div className="grid grid-cols-3 px-5 py-3 border-b border-gray-700 text-xs tracking-wider text-gray-400 uppercase">
        <span>Movie Title</span>
        <span>Genre</span>
        <span>Year</span>
      </div>

      {/* Dashed separator */}
      <div className="px-5 py-1 border-b border-dashed border-gray-600" />

      {/* Table Rows */}
      <div className="divide-y divide-gray-800">
        {movies.map((movie, index) => (
          <div key={index} className="grid grid-cols-3 px-5 py-2.5 text-sm">
            <span className="text-white">{movie.title}</span>
            <span className="text-gray-300">{movie.genre}</span>
            <span className="text-gray-300">{movie.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Decorative Arrow Component
function DecorativeArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
    >
      <path
        d="M5 35 Q 30 5, 55 20"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 15 L 55 20 L 48 22"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Main Component
export default function LandingfolioHero4({
  logoText = "RAREBLOCKS",
  navItems = defaultNavItems,
  ctaButtonText = "Try for free",
  headline = "An editor that\nhelps you write\nclean codes.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  primaryButtonText = "Try our free editor",
  reviewStars = 5,
  reviewTitle = "Best code editor in market!",
  reviewContent = "Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.",
  reviewerName = "Denny Jones",
  reviewerAvatar = "",
  movies = defaultMovies,
}: LandingfolioHero4Props) {
  return (
    <section className="relative min-h-screen w-full bg-[#F8F9FB] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-8 py-5 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <span className="text-[#101727] font-medium">/</span>
          <span className="text-[#101727] text-sm font-semibold tracking-wide">
            {logoText}
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#101727] hover:text-gray-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="rounded-full bg-[#101727] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2A2F3D]">
          {ctaButtonText}
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-8 lg:px-16 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] text-[#101727] tracking-tight whitespace-pre-line"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-gray-500 max-w-md leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Primary CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-full bg-[#101727] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#2A2F3D]"
            >
              {primaryButtonText}
            </motion.button>

            {/* Review Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8 space-y-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: reviewStars }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Review Title */}
              <h3 className="text-lg font-semibold text-[#101727]">
                {reviewTitle}
              </h3>

              {/* Review Content */}
              <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                {reviewContent}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-white text-sm font-medium">
                  {reviewerAvatar || reviewerName.charAt(0)}
                </div>
                <span className="text-sm font-medium text-[#101727]">
                  {reviewerName}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Code Editor & Table */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Arrow - Top Left */}
            <DecorativeArrow className="absolute -left-16 top-20 hidden lg:block" />

            {/* Decorative Arrow - Right */}
            <svg
              className="absolute -right-8 top-1/3 hidden lg:block"
              width="50"
              height="80"
              viewBox="0 0 50 80"
              fill="none"
            >
              <path
                d="M5 5 Q 45 30, 25 75"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M30 70 L 25 75 L 20 68"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Code Editor */}
            <div className="relative z-10">
              <CodeEditor />
            </div>

            {/* Movie Table - Overlapping */}
            <div className="relative z-20 -mt-8 ml-12 lg:ml-20">
              <MovieTable movies={movies} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Rainbow Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className="h-32 opacity-30"
          style={{
            background: 'linear-gradient(90deg, #F8F9FB 0%, #E8F5E9 15%, #E3F2FD 30%, #FCE4EC 50%, #FFF3E0 70%, #F3E5F5 85%, #F8F9FB 100%)',
            maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          }}
        />
      </div>
    </section>
  );
}
