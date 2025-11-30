"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Building, FileText, GraduationCap } from "lucide-react";

interface OchoSoloPageSectionHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  logoText?: string;
  navItems?: { label: string; href?: string; hasDropdown?: boolean }[];
  signInText?: string;
}

export default function OchoSoloPageSectionHero({
  badge = "Ocho Solo 401k",
  title = "A Supercharged Retirement Plan,\nDesigned For Business Owners",
  description = "The Ocho Solo 401k gives business owners the biggest tax advantages of any retirement plan. Contribute up to $66,000 and invest in any asset class with tax-free compounding. We meticulously crafted Ocho to be the simplest, easiest solo 401k experience you'll ever have. Create your account, make contributions, and invest your funds all in one place through our minimal, intuitive dashboard.",
  ctaText = "Get Started",
  onCtaClick,
  logoText = "ocho",
  navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Learn" },
  ],
  signInText = "Sign In",
}: OchoSoloPageSectionHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=Space+Mono&display=swap');
      `}</style>

      {/* Background gradient - top white, bottom dark purple */}
      <div className="absolute inset-0">
        <div className="h-[55%] bg-white" />
        <div
          className="h-[45%]"
          style={{ background: "linear-gradient(180deg, #2B1432 0%, #1a0d1f 100%)" }}
        />
      </div>

      {/* Purple diagonal line decoration */}
      <div
        className="absolute top-[40%] left-0 right-0 h-[2px] opacity-30"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #6D6FF0 50%, transparent 100%)",
          transform: "rotate(-3deg)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-8 md:px-16 py-6"
        >
          {/* Logo */}
          <div
            className="text-2xl font-semibold tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}
          >
            {logoText}
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {signInText}
            </a>
            <button
              onClick={onCtaClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: "#6D6FF0",
              }}
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center px-4 pt-12 md:pt-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex px-4 py-1.5 rounded-full mb-8"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "12px",
              backgroundColor: "rgba(43, 20, 50, 0.1)",
              color: "#2B1432",
              border: "1px solid rgba(43, 20, 50, 0.2)",
            }}
          >
            {badge}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mb-6"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              color: "#2B1432",
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-gray-600 mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={onCtaClick}
            className="px-8 py-3.5 rounded-lg text-white text-sm font-medium transition-all hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              backgroundColor: "#6D6FF0",
            }}
          >
            {ctaText}
          </motion.button>
        </div>

        {/* Dashboard Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-16 px-4 md:px-16 pb-16"
        >
          <div className="relative max-w-5xl mx-auto h-[320px]">
            {/* Revenue Chart Card */}
            <div
              className="absolute left-0 top-8 w-[300px] bg-white rounded-2xl shadow-xl p-5 z-10"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Revenue</div>
                  <div className="text-xs text-green-500" style={{ fontFamily: "'Inter', sans-serif" }}>36%</div>
                </div>
                <div className="text-xl font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}>$13,690</div>
              </div>
              {/* Chart Area */}
              <div className="relative h-24">
                <svg className="w-full h-full" viewBox="0 0 260 80">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="260" y2="20" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="0" y1="40" x2="260" y2="40" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="0" y1="60" x2="260" y2="60" stroke="#f0f0f0" strokeWidth="1" />
                  {/* Area fill */}
                  <path
                    d="M0 60 Q30 55, 60 50 T120 45 T180 35 T240 40 L260 38 L260 80 L0 80 Z"
                    fill="url(#chartGradient)"
                    opacity="0.3"
                  />
                  {/* Line */}
                  <path
                    d="M0 60 Q30 55, 60 50 T120 45 T180 35 T240 40 L260 38"
                    fill="none"
                    stroke="#AAAEF4"
                    strokeWidth="2"
                  />
                  {/* Highlight point */}
                  <circle cx="180" cy="35" r="6" fill="#6D6FF0" />
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#AAAEF4" />
                      <stop offset="100%" stopColor="#AAAEF4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Tooltip */}
                <div
                  className="absolute px-2.5 py-1 rounded-md text-xs text-white"
                  style={{
                    top: "10px",
                    left: "55%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#6D6FF0",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  $2,458
                </div>
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between mt-2 text-[10px] text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Total Earning Card */}
            <div
              className="absolute left-[32%] top-0 w-[160px] bg-white rounded-2xl shadow-xl p-4 z-20"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="text-[10px] text-gray-400 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Total earning</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}>$97,620</span>
                <span className="text-[10px] text-green-500" style={{ fontFamily: "'Inter', sans-serif" }}>36%</span>
              </div>
              {/* Bar Chart */}
              <div className="flex items-end gap-1.5 h-16">
                {[40, 65, 50, 80, 55, 70, 45].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${height}%`,
                      backgroundColor: i === 3 ? "#6D6FF0" : "#DFDEF5",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Real Estate Invest Card */}
            <div
              className="absolute right-[10%] top-16 w-[220px] bg-white rounded-2xl shadow-xl p-4 z-20"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <Building className="w-5 h-5" style={{ color: "#2B1432" }} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}>Real Estate Invest</div>
                  <div className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>Payment</div>
                </div>
                <div className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}>$9,755.00</div>
              </div>
            </div>

            {/* Tax Card */}
            <div
              className="absolute left-[28%] bottom-4 w-[200px] bg-white rounded-2xl shadow-xl p-4 z-10"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <FileText className="w-5 h-5" style={{ color: "#2B1432" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}>Tax</span>
                    <span className="text-[10px] text-green-500" style={{ fontFamily: "'Inter', sans-serif" }}>19%</span>
                  </div>
                  <div className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>Payment</div>
                </div>
                <div className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}>$9,755.00</div>
              </div>
            </div>

            {/* Retirement Course Card */}
            <div
              className="absolute right-0 bottom-0 w-[140px] bg-white rounded-2xl shadow-xl p-4 z-10"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: "#6D6FF0" }}
              >
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs text-gray-400 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Course</div>
              <div className="text-sm font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "#2B1432" }}>Retirement<br/>course</div>
              <span
                className="inline-block px-2 py-0.5 rounded text-[10px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "#E8F5E9",
                  color: "#4CAF50",
                }}
              >
                Today
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
