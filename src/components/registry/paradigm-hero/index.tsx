"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Plane,
  QrCode,
  Wifi,
  Monitor,
  MapPin,
} from "lucide-react";
import "./font.css";

interface ParadigmHeroProps {
  mode?: "light" | "dark";
  logo?: string;
  navItems?: string[];
  ctaButtonText?: string;
  title?: {
    line1?: { normal: string; italic: string };
    line2?: { normal: string };
    line3?: { italic: string; normal: string };
  };
  primaryButtonText?: string;
}

export default function ParadigmHero({
  mode = "light",
  logo = "Paradigm",
  navItems = [
    "Services",
    "Portfolio",
    "Reviews",
    "How It Works",
    "Benefits",
    "Pricing",
  ],
  ctaButtonText = "Book call",
  title = {
    line1: { normal: "", italic: "Unlimited monthly" },
    line2: { normal: "designs from world class" },
    line3: { italic: "product", normal: " designers" },
  },
  primaryButtonText = "See Plans",
}: ParadigmHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F6F4F2]">
      {/* Header Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4L12 4L12 12L20 12L20 20L12 20L12 12L4 12L4 4Z"
                fill="#1a1a2e"
              />
            </svg>
          </div>
          <span className="font-inter text-xl font-semibold text-[#1a1a2e]">
            {logo}
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="font-inter text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="font-inter flex items-center gap-2 rounded-full border border-gray-900 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
        >
          {ctaButtonText}
          <ArrowUpRight className="h-4 w-4" />
        </motion.button>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-16 lg:pt-24">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-instrument-serif max-w-4xl text-center text-4xl leading-tight text-[#1a1a2e] md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="italic">{title.line1?.italic}</span>
          {title.line1?.normal && <span>{title.line1.normal}</span>}
          <br />
          <span>{title.line2?.normal}</span>
          <br />
          <span className="italic">{title.line3?.italic}</span>
          <span>{title.line3?.normal}</span>
        </motion.h1>

        {/* Primary CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-inter mt-12 flex items-center gap-2 rounded-full bg-[#1a1a2e] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#2a2a3e]"
        >
          {primaryButtonText}
          <ArrowUpRight className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Floating UI Cards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Flight Booking Card - Left */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-[20%] left-[-2%] w-48 rounded-2xl bg-white p-4 shadow-xl lg:left-[2%]"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-red-500">
              <span className="text-xs text-white">ES</span>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Take Off</p>
              <p className="text-xs font-medium text-gray-800">
                Barcelona, ESP
              </p>
            </div>
            <div className="ml-auto">
              <svg
                className="h-4 w-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 10l5 5 5-5" />
              </svg>
            </div>
          </div>
          <div className="mb-3 border-t border-dashed border-gray-200" />
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-100">
              <span className="text-xs">KR</span>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Landing</p>
              <p className="text-xs font-medium text-gray-800">Seoul, KOR</p>
            </div>
          </div>
          <div className="mt-3 border-t border-dashed border-gray-200 pt-3">
            <p className="text-[10px] text-gray-400">Departure</p>
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium">29 February 2024</p>
              <span className="text-[10px] text-blue-500">Change</span>
            </div>
          </div>
          <button className="mt-3 w-full rounded-lg bg-[#1a1a2e] py-2 text-xs text-white">
            Get your Flights
          </button>
        </motion.div>

        {/* Conference Room Card - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-[2%] left-[2%] w-52 rounded-2xl bg-white p-4 shadow-xl lg:left-[5%]"
        >
          <h3 className="text-base font-semibold text-gray-800">
            Conference Room
          </h3>
          <div className="mt-1 flex items-center gap-1 text-[10px] text-orange-400">
            <MapPin className="h-3 w-3" />
            <span>Herengracht, 343, 1016 OG, Amsterdam</span>
          </div>
          <div className="mt-3 flex gap-3">
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
              <span>30min</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
              <Wifi className="h-3 w-3" />
              <span>Wi-Fi</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
              <Monitor className="h-3 w-3" />
              <span>Whiteboard</span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-gray-400">
            <span>Elevator</span>
          </div>
        </motion.div>

        {/* Bank Card with Balance */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute left-[18%] top-[52%] w-56"
        >
          {/* Purple Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#6B4DE6] to-[#4B2DD0] p-4 shadow-xl">
            <p className="text-[10px] text-purple-200">Your Balance</p>
            <p className="mt-1 text-2xl font-semibold text-white">
              $ 23,586.57
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-1">
                <div className="h-4 w-6 rounded bg-red-500" />
                <div className="-ml-3 h-4 w-6 rounded bg-orange-400" />
              </div>
              <p className="text-[10px] text-purple-200">
                **** **** **** 4734
              </p>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="mt-2 flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-full bg-white py-2 text-xs font-medium text-gray-700 shadow">
              <ArrowUpRight className="h-3 w-3" />
              Send
            </button>
            <button className="flex flex-1 items-center justify-center gap-1 rounded-full bg-white py-2 text-xs font-medium text-gray-700 shadow">
              <ArrowDownLeft className="h-3 w-3" />
              Request
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6B4DE6] text-white shadow">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="6" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="18" cy="12" r="2" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Number 5 Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute left-[42%] top-[52%] flex h-24 w-20 items-center justify-center rounded-2xl bg-white shadow-xl"
        >
          <span className="font-instrument-serif text-5xl font-light text-gray-300">
            5
          </span>
        </motion.div>

        {/* Flight Ticket Card - Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute right-[8%] top-[48%] w-52 rounded-2xl bg-white p-4 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-800">BCN</p>
              <p className="text-[10px] text-gray-400">Barcelona, ESP</p>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6B4DE6]">
              <Plane className="h-3 w-3 rotate-45 text-white" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-800">SEO</p>
              <p className="text-[10px] text-gray-400">Seoul, KOR</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-dashed border-gray-200 pt-3">
            <div>
              <p className="text-[10px] text-gray-400">Boarding Time</p>
              <p className="text-xs font-medium">09:45 AM</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Arrival Time</p>
              <p className="text-xs font-medium">01:10 AM</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Passenger</p>
              <p className="text-xs font-medium">Alex Kirsh</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Date</p>
              <p className="text-xs font-medium">15/06/2023</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-dashed border-gray-200 pt-3">
            <div className="flex gap-4">
              <div>
                <p className="text-[10px] text-gray-400">Terminal</p>
                <p className="text-xs font-medium">3</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Gate</p>
                <p className="text-xs font-medium">24</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Class</p>
                <p className="text-xs font-medium">Premium</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Seat</p>
                <p className="text-xs font-medium">56 F</p>
              </div>
            </div>
            <QrCode className="h-10 w-10 text-gray-300" />
          </div>
        </motion.div>

        {/* Stats Card - Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute right-[-5%] top-[55%] w-48 rounded-2xl bg-white p-4 shadow-xl lg:right-[0%]"
        >
          <p className="text-[10px] text-gray-400">TOTAL BALANCE</p>
          <p className="text-2xl font-bold text-[#6B4DE6]">&#8364;1.241,00</p>
          <p className="mt-1 text-[10px] text-gray-400">
            You gained <span className="text-[#6B4DE6]">12</span> new paid
            subscribe
          </p>
          {/* Simple Chart */}
          <div className="mt-3 flex h-16 items-end justify-between gap-1">
            <div className="flex flex-col items-center">
              <div className="h-2 w-6 rounded bg-gray-100" />
              <span className="mt-1 text-[8px] text-gray-400">Dec</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-4 w-6 rounded bg-gray-100" />
              <span className="mt-1 text-[8px] text-gray-400">Jan</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded bg-gray-100" />
              <span className="mt-1 text-[8px] text-gray-400">Feb</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-6 rounded bg-[#6B4DE6]" />
              <span className="mt-1 text-[8px] text-gray-400">Mar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-6 rounded bg-[#6B4DE6]/30" />
              <span className="mt-1 text-[8px] text-gray-400">Apr</span>
            </div>
          </div>
        </motion.div>

        {/* Airplane Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-[8%] left-[28%] w-40 overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="relative h-32 w-full bg-gradient-to-br from-orange-200 to-pink-200">
            <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/80">
              <svg
                className="h-3 w-3 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 h-24 w-32">
              <Plane className="h-full w-full -rotate-12 text-white/80" />
            </div>
          </div>
        </motion.div>

        {/* Conference Room Price Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="absolute bottom-[2%] left-[45%] rounded-xl bg-white px-4 py-3 shadow-lg"
        >
          <p className="text-[10px] text-gray-400">Conference Room</p>
          <p className="text-lg font-semibold text-gray-800">$42 / day</p>
        </motion.div>

        {/* Recent Transactions Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-[2%] right-[5%] rounded-xl bg-white px-4 py-3 shadow-lg"
        >
          <p className="text-[10px] text-gray-400">RECENT TRANSACTIONS</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100">
              <span className="text-xs">G</span>
            </div>
            <span className="text-xs text-gray-600">timwong@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
