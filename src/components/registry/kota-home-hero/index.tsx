"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#6729E0", // 메인 퍼플
    accentHover: "#5520C0",
    bannerBg: "#3D1A8F", // 다크 퍼플
    yellowAccent: "#FCD34D", // 옐로우 강조색
  },
  dark: {
    accent: "#8B5CF6",
    accentHover: "#7C3AED",
    bannerBg: "#1F1B2E",
    yellowAccent: "#FBBF24",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  Home,
  Users,
  Gift,
  CreditCard,
  Star,
  Globe,
  Search,
  ArrowRight,
  Settings,
  LogOut,
} from "lucide-react";

// Types
interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

interface FeatureItem {
  title: string;
  description: string;
  isActive?: boolean;
}

interface CountryTab {
  name: string;
  flag: string;
}

interface BenefitPlan {
  title: string;
  type: string;
  membersAdded: number;
  currentMonthlySpend: string;
}

interface KotaHomeHeroProps {
  mode?: "light" | "dark";
  bannerText?: string;
  navItems?: NavItem[];
  headline?: string;
  subheadline?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  features?: FeatureItem[];
  countryTabs?: CountryTab[];
  benefitPlans?: BenefitPlan[];
  logoCloudTitle?: string;
  logos?: string[];
  onGetQuote?: (email: string) => void;
  onLogin?: () => void;
  onDemo?: () => void;
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Products", hasDropdown: true },
  { label: "Customers" },
  { label: "Country Availability" },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing" },
];

const defaultFeatures: FeatureItem[] = [
  {
    title: "Control",
    description: "One place to set-up, manage and bill benefits",
    isActive: true,
  },
  {
    title: "Automate",
    description: "From people management, to enrolments and finance",
  },
  {
    title: "Engage",
    description: "Benefits powered by your people through our app",
  },
  {
    title: "Reconcile",
    description: "A source of truth for benefit deductions in payroll",
  },
];

const defaultCountryTabs: CountryTab[] = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Italy", flag: "🇮🇹" },
];

const defaultBenefitPlans: BenefitPlan[] = [
  {
    title: "United Kingdom Standard Plan",
    type: "Health, Retirement",
    membersAdded: 45,
    currentMonthlySpend: "€4,830",
  },
  {
    title: "C-Level Retirement",
    type: "Retirement",
    membersAdded: 12,
    currentMonthlySpend: "€3,125",
  },
];

const defaultLogos = [
  "Spotlight Oral Care",
  "fonoa",
  "Unmind",
  "coffeeangel",
  "Spotlight Oral Care",
];

// Kota Logo Component
function KotaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L8 6M12 2l4 4M12 2v8M8 6H4M8 6l4 4M20 6h-4M16 6l-4 4M4 6v12l8 4 8-4V6" />
        <circle cx="12" cy="10" r="2" fill="currentColor" />
      </svg>
      <span className="font-semibold text-lg">Kota</span>
    </div>
  );
}

// 3D Purple Sphere SVG
function PurpleSphere({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E0C6FF" />
          <stop offset="50%" stopColor="#C7A4FC" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </radialGradient>
        <filter id="sphereShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
        </filter>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#sphereGradient)"
        filter="url(#sphereShadow)"
      />
      <ellipse cx="35" cy="35" rx="15" ry="10" fill="white" opacity="0.3" />
    </svg>
  );
}

// Orange Star/Gear Shape
function OrangeStarShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>
      </defs>
      <path
        d="M50 5 L58 25 L80 20 L70 40 L95 50 L70 60 L80 80 L58 75 L50 95 L42 75 L20 80 L30 60 L5 50 L30 40 L20 20 L42 25 Z"
        fill="url(#starGradient)"
      />
    </svg>
  );
}

// Dashboard Preview Component
function DashboardPreview({
  countryTabs,
  benefitPlans,
}: {
  countryTabs: CountryTab[];
  benefitPlans: BenefitPlan[];
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: Users, label: "People" },
    { icon: Gift, label: "Benefits", active: true },
    { icon: CreditCard, label: "Billing" },
    { icon: Star, label: "Rewards" },
  ];

  const dropdownCountries = [
    { name: "Greece", flag: "🇬🇷" },
    { name: "Hungary", flag: "🇭🇺" },
    { name: "Iceland", flag: "🇮🇸" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Italy", flag: "🇮🇹" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
      style={{ boxShadow: "0 25px 80px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex">
        {/* Sidebar */}
        <div className="w-44 bg-white border-r border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-6 text-gray-800">
            <KotaLogo />
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.active
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-40">
            <div className="text-xs text-gray-500 mb-1">Lana Steiner</div>
            <div className="text-[10px] text-gray-400">lana_st@yonder.com</div>
            <div className="flex gap-2 mt-2">
              <button className="text-gray-400 hover:text-gray-600">
                <Settings className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>

          {/* Country Tabs */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              {countryTabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full transition-colors ${
                    activeTab === index
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span>{tab.flag}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Other Countries Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
              >
                <Globe className="w-4 h-4" />
                Other countries
                <ChevronDown className="w-3 h-3" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-gray-50 rounded-lg">
                      <Search className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-sm text-gray-400">Search</span>
                    </div>
                  </div>
                  {dropdownCountries.map((country) => (
                    <button
                      key={country.name}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      <span>{country.flag}</span>
                      {country.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Benefit Cards Row */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Auto-Enrol Pension Card */}
            <div className="p-4 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">
                    Auto-Enrol Pension
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Fulfil your auto enrolment obligations via our
                    <br />
                    pension partner Smart Pension.
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full">
                    Retirement
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg">
                  <CreditCard className="w-3 h-3" />
                  Set up Pension
                </button>
                <div className="flex items-center gap-1">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full" />
                  </div>
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Group Health Coverage Card */}
            <div className="p-4 border border-gray-100 rounded-xl">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">
                    Group Health covera...
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Provide custom Health covera...
                    <br />
                    partner Vitality.
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg">
                <CreditCard className="w-3 h-3" />
                Set up Health
              </button>
            </div>
          </div>

          {/* Benefit Plans */}
          <div className="grid grid-cols-2 gap-4">
            {benefitPlans.map((plan, index) => (
              <div
                key={index}
                className="p-4 border border-gray-100 rounded-xl"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-900 text-sm">
                    {plan.title}
                  </h3>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
                      <Gift className="w-3 h-3 text-pink-500" />
                    </div>
                    {plan.type.includes("Retirement") && (
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Star className="w-3 h-3 text-green-500" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Benefits</span>
                    <span className="text-gray-700">{plan.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Members added</span>
                    <span className="text-gray-700">{plan.membersAdded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Current monthly spend</span>
                    <span className="text-gray-700">
                      {plan.currentMonthlySpend}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                  Manage benefit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function KotaHomeHero({
  mode = "light",
  bannerText = "Kota's 5-star customer reviews have earned us 24 G2 badges. Book a demo to see why",
  navItems = defaultNavItems,
  headline = "Set up, pay, and manage\nyour benefits all in one\nplace.",
  subheadline = "Instant access to insurance and retirement\nproviders, with flexible contributions, automated\naccounting and a delightfully simple employee app.",
  emailPlaceholder = "What's your work email?",
  ctaText = "Get Quote",
  features = defaultFeatures,
  countryTabs = defaultCountryTabs,
  benefitPlans = defaultBenefitPlans,
  logoCloudTitle = "Powering core benefits and empowering teams at",
  logos = defaultLogos,
  onGetQuote,
  onLogin,
  onDemo,
}: KotaHomeHeroProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGetQuote?.(email);
  };

  return (
    <section className="w-full min-h-screen overflow-hidden" style={{ backgroundColor: colors.accent }}>
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-2.5 px-4"
        style={{ backgroundColor: colors.bannerBg }}
      >
        <p className="text-center text-white text-sm">
          {bannerText.split("Book a demo")[0]}
          <span className="inline-flex items-center">
            ⭐
          </span>
          {" have earned us 24 G2 badges. "}
          <button className="underline hover:no-underline inline-flex items-center gap-1">
            Book a demo to see why
            <ArrowRight className="w-3 h-3" />
          </button>
        </p>
      </motion.div>

      {/* Navigation */}
      <nav className="w-full px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <KotaLogo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={onLogin}
              className="text-white text-sm hover:text-white/80 transition-colors"
            >
              Login
            </button>
            <button
              onClick={onDemo}
              className="px-5 py-2.5 bg-white/10 border border-white/30 text-white text-sm rounded-full hover:bg-white/20 transition-colors"
            >
              See a demo
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-8">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-[10%] top-0 w-24 h-24 md:w-32 md:h-32"
        >
          <PurpleSphere className="w-full h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-[15%] top-20 w-16 h-16 md:w-20 md:h-20"
        >
          <OrangeStarShape className="w-full h-full" />
        </motion.div>

        {/* Main Text */}
        <div className="text-center relative z-10 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] whitespace-pre-line"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-white/70 text-base md:text-lg whitespace-pre-line leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="mt-8 flex justify-center"
          >
            <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1.5 max-w-md w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className="flex-1 bg-transparent px-4 py-2.5 text-white placeholder-white/50 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full transition-colors"
              >
                {ctaText}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative pl-4 ${
                index < features.length - 1
                  ? "border-r border-white/20 border-dashed"
                  : ""
              }`}
            >
              <div
                className={`absolute left-0 top-0 w-1 h-full rounded-full`}
                style={{ backgroundColor: feature.isActive ? colors.yellowAccent : "transparent" }}
              />
              <h3
                className={`text-sm font-medium`}
                style={{ color: feature.isActive ? colors.yellowAccent : "rgba(255, 255, 255, 0.6)" }}
              >
                {feature.title}
              </h3>
              <p
                className={`mt-1 text-xs leading-relaxed`}
                style={{ color: feature.isActive ? "rgba(253, 224, 71, 0.8)" : "rgba(255, 255, 255, 0.4)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <div className="px-6 md:px-12 lg:px-20 pb-16 pt-8">
        <DashboardPreview countryTabs={countryTabs} benefitPlans={benefitPlans} />
      </div>

      {/* Logo Cloud */}
      <div className="pb-12" style={{ backgroundColor: colors.accent }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center"
        >
          <p className="text-white/60 text-sm mb-8">{logoCloudTitle}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                <span className="text-sm font-medium">{logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400" />
    </section>
  );
}
