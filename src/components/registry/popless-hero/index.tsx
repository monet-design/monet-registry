"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    // 브랜드 컬러는 없음 - 순수 흑백 디자인
  },
  dark: {
    // 다크 모드 (필요시 구현)
  },
} as const;

const IMAGES = {
  tutorAvatar: {
    path: "/registry/popless-hero/tutor-avatar.png",
    alt: "Tutor profile photo",
    prompt: `Professional tutor headshot photo for education marketplace platform.
Style: Professional, friendly, approachable educator portrait
Subject: Female tutor in professional attire, warm smile, educational setting
Mood: Trustworthy, knowledgeable, friendly, professional
Background: Soft neutral background with books or educational elements
Quality: High resolution, professional photography, natural lighting`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, ChevronLeft, ChevronRight, Star, Shield, Clock } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface PoplessHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  tagline?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  navItems?: NavItem[];
  loginText?: string;
  getStartedText?: string;
  tutorName?: string;
  tutorSubject?: string;
  tutorAvatar?: string;
  totalEarnings?: string;
  totalBookings?: number;
}

// Logo Icon
function PoplessLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#000000" />
      <path d="M7 8h4v8H7V8z" fill="white" />
      <circle cx="15" cy="12" r="3" fill="white" />
    </svg>
  );
}

// Earnings Dashboard Card
function EarningsDashboard({ totalEarnings = "$3,350", totalBookings = 62 }: { totalEarnings?: string; totalBookings?: number }) {
  const barHeights = [30, 45, 35, 50, 25, 60, 70, 55, 40, 65, 80, 75];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-[220px] rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
    >
      {/* Chart */}
      <div className="mb-3 flex items-end justify-between h-[80px] px-1">
        {barHeights.map((height, i) => (
          <div
            key={i}
            className="w-[10px] rounded-sm bg-black transition-all"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 text-xs">
        <div>
          <p className="text-gray-500">Total earnings</p>
          <p className="text-lg font-semibold text-black">{totalEarnings}</p>
        </div>
        <div>
          <p className="text-gray-500">Bookings</p>
          <p className="text-lg font-semibold text-black">{totalBookings}</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-2 flex items-center gap-4 text-[10px] text-gray-400">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-black" />
          <span>Earnings</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-gray-300" />
          <span>Expected</span>
        </div>
      </div>
    </motion.div>
  );
}

// Scheduling Card
function SchedulingCard() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [1, 2, 3, 4, 5, 6, 7];
  const times = [
    ["7:00 AM", "7:15 AM", "7:30 AM"],
    ["7:45 AM", "8:00 AM", "8:15 AM"],
    ["8:30 AM", "8:45 AM", "9:00 AM"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-[280px] rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
    >
      {/* Header */}
      <div className="mb-3">
        <h3 className="font-semibold text-black">English tutoring</h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>$55 / 60 minutes</span>
          <ChevronDown size={12} />
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Sunday, May 1 · 8:15 AM - 9:15 AM (PST)
        </p>
      </div>

      {/* Calendar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <ChevronLeft size={14} className="text-gray-400 cursor-pointer" />
          <div className="flex gap-1">
            {days.map((day, i) => (
              <div key={day} className="w-8 text-center">
                <p className="text-[10px] text-gray-400">{day}</p>
                <p className={`mt-1 text-xs font-medium ${dates[i] === 5 ? "text-black" : "text-gray-600"}`}>
                  {dates[i]}
                </p>
                {(i === 2 || i === 3 || i === 4) && (
                  <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-black" />
                )}
              </div>
            ))}
          </div>
          <ChevronRight size={14} className="text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Time slots */}
      <div className="space-y-2">
        {times.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((time, i) => (
              <button
                key={time}
                className={`flex-1 rounded-lg border py-1.5 text-[10px] font-medium transition-colors ${
                  (rowIndex === 0 && i === 2) || (rowIndex === 1 && i === 2)
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-3 w-full rounded-lg bg-gray-100 py-2 text-xs font-medium text-gray-700">
        Select and review
      </button>
    </motion.div>
  );
}

// Profile Card
function ProfileCard({ tutorName = "Jane Cooper", tutorAvatar = "/registry/popless-hero/tutor-avatar.png" }: { tutorName?: string; tutorAvatar?: string }) {
  const specialties = [
    { title: "Maths", items: ["Calculus, Linear algebra, Binomial probability, Rational functions, Finite math, Trigonometry, Polynomials..."] },
    { title: "Computer Science", items: ["Python, R, Django, SQL, Postgres, Data manipulation, Machine learning..."] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-[260px] rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
    >
      {/* Header with logo */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <PoplessLogo />
          <span className="text-xs font-semibold">Popless</span>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative h-[100px] w-full overflow-hidden">
        <img
          src={tutorAvatar}
          alt={tutorName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] text-gray-500">Education · Maths</p>
            <h4 className="font-semibold text-black text-sm">{tutorName}</h4>
            <p className="text-[10px] text-gray-500">Maths Tutor | High School and Co...</p>
          </div>
          <div className="flex items-center gap-0.5">
            <Star size={10} fill="#000" className="text-black" />
            <span className="text-[10px] font-medium">4.74</span>
            <span className="text-[10px] text-gray-400">(238 reviews)</span>
          </div>
        </div>

        <p className="mt-2 text-[9px] text-gray-500 leading-relaxed line-clamp-3">
          Jane has an M.S. in math and is a aerospace engineering from Stanford. She helps with upper level high school... as well as algebra, and precalculus...
        </p>
        <button className="mt-1 text-[9px] text-gray-600 underline">Show more</button>

        {/* Specialties */}
        <div className="mt-3">
          <h5 className="text-[10px] font-semibold text-black mb-2">Specialties</h5>
          <div className="grid grid-cols-2 gap-2">
            {specialties.map((spec) => (
              <div key={spec.title}>
                <p className="text-[9px] font-medium text-black">{spec.title}</p>
                <p className="text-[8px] text-gray-400 line-clamp-3">{spec.items[0]}</p>
              </div>
            ))}
            <div>
              <p className="text-[9px] font-medium text-black">Statistics</p>
              <p className="text-[8px] text-gray-400 line-clamp-3">Advanced regression, Testing, Analysis of v... Confidence intervals, random variables...</p>
            </div>
            <div>
              <p className="text-[9px] font-medium text-black">Test preparation</p>
              <p className="text-[8px] text-gray-400 line-clamp-3">SAT, MCAT, CFA, GRE...</p>
            </div>
          </div>
        </div>

        {/* Meet your tutor */}
        <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
          <img
            src={tutorAvatar}
            alt={tutorName}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-[10px] font-semibold text-black">Meet your tutor, Jane</p>
            <p className="text-[8px] text-gray-400">Host on Popless since 2022</p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-[8px] text-gray-500">
          <div className="flex items-center gap-0.5">
            <Star size={8} className="text-black" />
            <span>238 reviews</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Shield size={8} className="text-green-600" />
            <span>Identity verified</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Clock size={8} className="text-green-600" />
            <span>4 hr response time</span>
          </div>
        </div>

        <p className="mt-2 text-[8px] text-gray-400">Languages spoken: English, Spanish, German, and French.</p>

        {/* CTA */}
        <button className="mt-3 rounded-lg bg-black px-4 py-1.5 text-[10px] font-medium text-white">
          Contact tutor
        </button>
      </div>
    </motion.div>
  );
}

// Review Meeting Card
function ReviewMeetingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="w-[260px] rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-3">
        <ChevronLeft size={14} className="text-gray-400" />
        <div>
          <h4 className="font-semibold text-black text-sm">Review meeting</h4>
          <p className="text-[10px] text-gray-500">Jane Cooper</p>
          <p className="text-[10px] text-gray-500">Sun, Oct 5 · 7:00am - 8:00am (PST)</p>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">4 x 60 minute meetings</span>
          <span className="font-medium">$82.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Platform fees</span>
          <span className="font-medium">$3.20</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Payment fees</span>
          <span className="font-medium">$2.10</span>
        </div>
      </div>
    </motion.div>
  );
}

// Messages Preview Card (bottom left)
function MessagesPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="w-[280px] rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <PoplessLogo />
          <span className="text-xs font-semibold">Popless</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-gray-300" />
          <div className="h-2 w-2 rounded-full bg-gray-300" />
          <div className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-gray-100">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Q</span>
          <span>Messages</span>
        </div>
      </div>

      {/* Contacts */}
      <div className="px-3 py-2 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-200" />
          <div className="h-6 w-6 rounded-full bg-gray-200" />
          <div className="h-6 w-6 rounded-full bg-gray-200" />
        </div>

        {/* Chat preview */}
        <div className="mt-2 space-y-2">
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-gray-300 flex-shrink-0" />
            <div>
              <p className="text-[10px] font-medium">Michelle, Sophie</p>
              <div className="mt-1 rounded-lg bg-gray-100 px-2 py-1.5 text-[9px] text-gray-600">
                Great job! Keep practicing!
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 justify-end">
            <div className="rounded-lg bg-black px-2 py-1.5 text-[9px] text-white">
              Thanks! See you next week.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Navigation Item
function NavItem({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
    >
      {item.label}
      {item.hasDropdown && <ChevronDown size={14} />}
    </a>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Use cases", href: "#", hasDropdown: true },
  { label: "Features", href: "#", hasDropdown: true },
  { label: "Explore", href: "#" },
];

// Main Component
export default function PoplessHero({
  mode = "light",
  logoText = "Popless",
  tagline = "Tutor on a trusted platform.",
  headline = "Powerful\ntutoring and\nclasses.",
  description = "Set your own rate, we'll connect you with you with students, you earn money on your schedule.",
  ctaText = "Get started today",
  navItems = defaultNavItems,
  loginText = "Login",
  getStartedText = "Get started",
  tutorName = "Jane Cooper",
  tutorAvatar = IMAGES.tutorAvatar.path,
  totalEarnings = "$3,350",
  totalBookings = 62,
}: PoplessHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PoplessLogo />
          <span className="text-base font-semibold text-black">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-black transition-colors">
            {loginText}
          </button>
          <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
            {getStartedText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-8 sm:px-8 lg:px-12 lg:pt-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left side - Text Content */}
          <div className="max-w-md lg:pt-8">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-gray-500 text-base mb-4"
            >
              {tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-gray-500 text-base leading-relaxed max-w-sm"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              {ctaText}
            </motion.button>
          </div>

          {/* Right side - UI Cards */}
          <div className="relative flex-1 min-h-[500px] lg:min-h-[600px]">
            {/* Earnings Dashboard - Top Left */}
            <div className="absolute top-0 left-0 lg:left-[5%]">
              <EarningsDashboard totalEarnings={totalEarnings} totalBookings={totalBookings} />
            </div>

            {/* Scheduling Card - Center */}
            <div className="absolute top-[100px] left-[80px] lg:left-[25%]">
              <SchedulingCard />
            </div>

            {/* Profile Card - Right */}
            <div className="absolute top-0 right-0">
              <ProfileCard tutorName={tutorName} tutorAvatar={tutorAvatar} />
            </div>

            {/* Review Meeting Card - Bottom Center */}
            <div className="absolute bottom-[80px] left-[60px] lg:left-[20%]">
              <ReviewMeetingCard />
            </div>

            {/* Messages Preview - Bottom Left */}
            <div className="absolute bottom-0 left-0">
              <MessagesPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
