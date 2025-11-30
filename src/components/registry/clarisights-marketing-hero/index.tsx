"use client";

import { motion } from "motion/react";
import {
  Star,
  ThumbsUp,
  Settings,
  Calendar,
  RefreshCw,
  ArrowUpDown,
} from "lucide-react";
import "./font.css";

// Logo components for the logo cloud
function TradeRepublicLogo() {
  return (
    <svg
      width="100"
      height="24"
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="18"
        fontSize="12"
        fontWeight="bold"
        fill="#1A1A1A"
        fontFamily="Inter, sans-serif"
      >
        TRADE
      </text>
      <text
        x="48"
        y="18"
        fontSize="12"
        fontWeight="bold"
        fill="#1A1A1A"
        fontFamily="Inter, sans-serif"
      >
        REPUBLIC
      </text>
    </svg>
  );
}

function FoodspringLogo() {
  return (
    <span className="text-lg font-medium text-[#1A1A1A] tracking-tight">
      foodspring<sup className="text-[8px] ml-0.5">*</sup>
    </span>
  );
}

function VoiLogo() {
  return (
    <span className="text-2xl font-bold text-[#FF6B00] tracking-tight">
      voi.
    </span>
  );
}

function BitpandaLogo() {
  return (
    <span className="text-xl font-semibold text-[#00B4A0] tracking-tight">
      bitpanda
    </span>
  );
}

function PreplyLogo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-5 h-5 bg-[#00C78C] rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full" />
      </div>
      <span className="text-lg font-medium text-[#1A1A1A]">preply</span>
    </div>
  );
}

function UberLogo() {
  return (
    <span className="text-xl font-medium text-[#1A1A1A] tracking-tight">
      Uber
    </span>
  );
}

// Dashboard mockup component
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Decorative wave background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-24 -z-10">
        <svg viewBox="0 0 1200 100" fill="none" className="w-full h-full">
          <path
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50"
            stroke="#D4C9A8"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M0,60 Q150,30 300,60 T600,60 T900,60 T1200,60"
            stroke="#E8DFC5"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Main dashboard card */}
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Dashboard header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#1A1A1A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <RefreshCw className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
            <span className="text-sm font-medium text-[#1A1A1A]">
              All countries performance
            </span>
            <ThumbsUp className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center gap-3">
            <Settings className="w-4 h-4 text-gray-400" />
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">
              Feb&apos;23 comparing Jan&apos;23
            </span>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 px-5 py-2 border-b border-gray-100">
          <span className="text-sm font-medium text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-2">
            Overall
          </span>
          <span className="text-sm text-gray-400 pb-2">Platform</span>
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-5">
          {/* Charts row */}
          <div className="grid grid-cols-2 gap-5">
            {/* Acquisition overview chart */}
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    Acquisition overview
                  </span>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#8BC34A]" />
                      Total Cost
                    </span>
                    <span>New Customers (net)</span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#9C27B0]" />
                      CAC (net)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Settings className="w-3 h-3" />
                  <Calendar className="w-3 h-3" />
                  <span>Last 5 weeks</span>
                </div>
              </div>

              {/* Chart area */}
              <div className="relative h-40">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400">
                  <span>$1.5M</span>
                  <span>$1.2M</span>
                  <span>$900k</span>
                  <span>$600k</span>
                  <span>$300k</span>
                  <span>0</span>
                </div>
                <div className="absolute left-12 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400">
                  <span>$100</span>
                  <span>$90</span>
                  <span>$80</span>
                  <span>$70</span>
                  <span>$60</span>
                  <span>$50</span>
                </div>

                {/* Bar chart */}
                <div className="ml-20 h-full flex items-end justify-between gap-2 pb-6">
                  {[
                    { h1: 45, h2: 65 },
                    { h1: 50, h2: 70 },
                    { h1: 55, h2: 75 },
                    { h1: 48, h2: 68 },
                    { h1: 52, h2: 72 },
                  ].map((bar, i) => (
                    <div key={i} className="flex gap-0.5">
                      <div
                        className="w-4 bg-[#C8E6C9] rounded-t"
                        style={{ height: `${bar.h1}%` }}
                      />
                      <div
                        className="w-4 bg-[#8BC34A] rounded-t"
                        style={{ height: `${bar.h2}%` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Line chart overlay */}
                <svg className="absolute inset-0 ml-20" viewBox="0 0 200 120">
                  <path
                    d="M10,80 L50,75 L90,60 L130,55 L170,50"
                    stroke="#9C27B0"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="170" cy="50" r="4" fill="#9C27B0" />
                  <text x="175" y="45" fontSize="8" fill="#9C27B0">
                    CAC $92
                  </text>
                </svg>

                {/* Total Cost label */}
                <div className="absolute bottom-12 right-8 flex items-center gap-1 text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-[#8BC34A]" />
                  <span className="text-[#8BC34A]">Total Cost $400k</span>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-20 right-0 flex justify-between text-[10px] text-gray-400">
                  <span>20 Feb</span>
                  <span>27 Feb</span>
                  <span>06 Mar</span>
                  <span>13 Mar</span>
                  <span>20 Mar</span>
                </div>

                {/* Secondary Y-axis */}
                <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400">
                  <span>40k</span>
                  <span>32k</span>
                  <span>24k</span>
                  <span>16k</span>
                  <span>8k</span>
                  <span>0</span>
                </div>
              </div>
            </div>

            {/* Total spend per channel */}
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-[#1A1A1A]">
                  Total spend per channel
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ArrowUpDown className="w-3 h-3" />
                  <Settings className="w-3 h-3" />
                  <Calendar className="w-3 h-3" />
                  <span>This quarter</span>
                </div>
              </div>

              {/* Line chart */}
              <div className="relative h-40">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400">
                  <span>$2.4m</span>
                  <span>$1.8m</span>
                  <span>$1.2m</span>
                  <span>$600k</span>
                  <span>0</span>
                </div>

                {/* Line chart area */}
                <svg className="ml-12 h-full w-[calc(100%-3rem)]" viewBox="0 0 300 120">
                  {/* Grid lines */}
                  {[0, 30, 60, 90, 120].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="300"
                      y2={y}
                      stroke="#f0f0f0"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Google line - red */}
                  <path
                    d="M20,90 L80,85 L140,80 L200,70 L260,40"
                    stroke="#E53935"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="260" cy="40" r="4" fill="#E53935" />
                  <text x="265" y="35" fontSize="8" fill="#E53935">
                    Google
                  </text>
                  <text x="265" y="45" fontSize="6" fill="#E53935">
                    Total spend $2.1M
                  </text>

                  {/* Meta line - blue */}
                  <path
                    d="M20,95 L80,92 L140,88 L200,85 L260,82"
                    stroke="#1E88E5"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="260" cy="82" r="3" fill="#1E88E5" />

                  {/* Snapchat line - yellow */}
                  <path
                    d="M20,100 L80,98 L140,95 L200,93 L260,90"
                    stroke="#FFC107"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="260" cy="90" r="3" fill="#FFC107" />

                  {/* Twitter line - teal */}
                  <path
                    d="M20,105 L80,103 L140,100 L200,98 L260,95"
                    stroke="#00ACC1"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="260" cy="95" r="3" fill="#00ACC1" />
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-12 right-0 flex justify-between text-[10px] text-gray-400">
                  <span>Jan</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                    Google
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1E88E5]" />
                    Meta
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFC107]" />
                    Snapchat
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00ACC1]" />
                    Twitter
                  </span>
                  <span>Mar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-3 gap-5">
            {/* W16 insights */}
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-2">W16</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                ASA is still the best performing channel in terms of CAC.
                <br />
                No change in TV spot performance.
                <br />
                $50K budget moved from Snap to Meta on April 18.
              </p>
            </div>

            {/* Total cost */}
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs text-gray-400">Total cost</span>
                  <div className="text-sm font-semibold text-[#1A1A1A]">
                    $ 10,848,073
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Projection</span>
                  <div className="text-sm text-gray-500">$ 9,174,400</div>
                </div>
              </div>
              {/* Mini chart */}
              <svg className="w-full h-12" viewBox="0 0 200 50">
                <path
                  d="M0,40 L30,35 L60,30 L90,25 L120,20 L150,15 L200,10"
                  stroke="#8BC34A"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            {/* Budget */}
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Budget</span>
                  <Calendar className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="text-2xl font-semibold text-[#1A1A1A] mt-2">
                $ 10,500,000
              </div>
            </div>
          </div>

          {/* ROAS Trend */}
          <div className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#1A1A1A]">
                  ROAS Trend
                </span>
                <span className="text-xs text-[#4CAF50] bg-[#E8F5E9] px-2 py-0.5 rounded">
                  2.5% WoW
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Settings className="w-3 h-3" />
                <Calendar className="w-3 h-3" />
                <span>This week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Props interface
interface ClarisightsMarketingHeroProps {
  title?: string;
  subtitle?: string;
  logoCloudTitle?: string;
}

// Main component
export default function ClarisightsMarketingHero({
  title = "Operational Reporting\nfor Marketing Teams",
  subtitle = "Clarisights provides a self-service and collaborative data workspace.\nAutomatically integrate, process, and visualize data from all of your marketing sources.",
  logoCloudTitle = "Empowering global market leaders",
}: ClarisightsMarketingHeroProps) {
  const logos = [
    { id: "trade-republic", component: <TradeRepublicLogo /> },
    { id: "foodspring", component: <FoodspringLogo /> },
    { id: "voi", component: <VoiLogo /> },
    { id: "bitpanda", component: <BitpandaLogo /> },
    { id: "preply", component: <PreplyLogo /> },
    { id: "uber", component: <UberLogo /> },
  ];

  return (
    <section className="relative w-full font-inter overflow-hidden bg-gradient-to-b from-[#F6F6F6] via-[#F4F4F1] to-[#FBF8F2]">
      {/* Content container */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        {/* Hero text */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-instrument-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1A1A] leading-tight whitespace-pre-line"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <DashboardMockup />
        </motion.div>

        {/* Logo cloud section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 sm:mt-28 text-center"
        >
          <p className="text-sm sm:text-base text-[#666666] mb-8">
            {logoCloudTitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.5 }}
                className="flex items-center"
              >
                {logo.component}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
