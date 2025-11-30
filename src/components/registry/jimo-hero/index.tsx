"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Route,
  CheckSquare,
  MessageCircle,
  Megaphone,
  Target,
  FileText,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

interface FeatureTab {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
}

interface JimoHeroProps {
  logo?: React.ReactNode;
  headline?: string[];
  subheadline?: string;
  emailPlaceholder?: string;
  ctaButtonText?: string;
  navItems?: { label: string; hasDropdown?: boolean }[];
  featureTabs?: FeatureTab[];
  decorationImageSrc?: string;
  onCtaClick?: (email: string) => void;
}

const defaultNavItems = [
  { label: "Features", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Customers", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Integrations", hasDropdown: true },
];

const defaultFeatureTabs: FeatureTab[] = [
  {
    id: "product-tours",
    icon: <Route className="h-5 w-5" />,
    label: "Product Tours",
    description: "Action based onboarding",
    iconColor: "#3B82F6",
    iconBgColor: "#EFF6FF",
  },
  {
    id: "checklists",
    icon: <CheckSquare className="h-5 w-5" />,
    label: "Checklists",
    description: "Key onboarding steps",
    iconColor: "#8B5CF6",
    iconBgColor: "#F5F3FF",
  },
  {
    id: "surveys",
    icon: <MessageCircle className="h-5 w-5" />,
    label: "Surveys",
    description: "Collect user insights",
    iconColor: "#F59E0B",
    iconBgColor: "#FFFBEB",
  },
  {
    id: "announcements",
    icon: <Megaphone className="h-5 w-5" />,
    label: "Announcements",
    description: "Keep users informed",
    iconColor: "#6B7280",
    iconBgColor: "#F3F4F6",
  },
  {
    id: "hints",
    icon: <Target className="h-5 w-5" />,
    label: "Hints",
    description: "Smart Tips & Stickers",
    iconColor: "#10B981",
    iconBgColor: "#ECFDF5",
  },
  {
    id: "changelog",
    icon: <FileText className="h-5 w-5" />,
    label: "Changelog Widget",
    description: "Post product updates",
    iconColor: "#EAB308",
    iconBgColor: "#FEFCE8",
  },
];

function DashboardPreview({
  activeTab,
}: {
  activeTab: string;
}) {
  return (
    <div className="relative rounded-xl border border-gray-200 bg-white shadow-xl">
      {/* Dashboard Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-blue-100" />
          <span className="text-sm font-medium text-blue-500">Tablio</span>
          <span className="text-xs text-gray-400">John</span>
          <ChevronDown className="h-3 w-3 text-gray-400" />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 border-r border-gray-100 p-3">
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-2 rounded bg-gray-100"
                style={{ width: `${60 + Math.random() * 40}%` }}
              />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-2 rounded bg-gray-200"
                style={{ width: `${50 + Math.random() * 30}%` }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
            <div className="flex items-center gap-2">
              <div className="flex h-7 items-center gap-1 rounded-md bg-gray-900 px-2 text-xs text-white">
                <span>+</span>
                <div className="h-0.5 w-6 rounded bg-white" />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-gray-50 p-3"
              >
                <div className="mb-2 h-16 rounded bg-white" />
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-gray-200" />
                    <div className="h-2 w-16 rounded bg-gray-200" />
                  </div>
                  <div className="h-2 w-12 rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>

          {/* Tooltip */}
          {activeTab === "product-tours" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute right-24 top-32"
            >
              <div className="relative">
                <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 px-4 py-3 text-white shadow-lg">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-white/20" />
                    <span className="text-xs font-medium">
                      Adelaide, Product @Tablio
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Projects help you organize your work
                    <br />
                    efficiently. Click to create one!
                  </p>
                </div>
                <div className="absolute -right-2 top-4 h-0 w-0 border-b-8 border-l-8 border-t-8 border-b-transparent border-l-teal-500 border-t-transparent" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function JimoHero({
  logo,
  headline = ["Onboard users smarter,", "Scale faster."],
  subheadline = "Jimo is the only digital adoption platform offering personalized onboarding and assistance to boost conversion, increase retention, and reduce support tickets.",
  emailPlaceholder = "Your Work Email",
  ctaButtonText = "Try for Free",
  navItems = defaultNavItems,
  featureTabs = defaultFeatureTabs,
  decorationImageSrc = "/registry/jimo-hero/j-decoration.png",
  onCtaClick,
}: JimoHeroProps) {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState(featureTabs[0]?.id || "product-tours");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCtaClick?.(email);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-8">
          {logo || (
            <span className="text-xl font-bold italic text-gray-900">jimo</span>
          )}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden text-sm text-gray-600 transition-colors hover:text-gray-900 md:block">
            Login
          </button>
          <button className="rounded-full bg-[#1E3A5F] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2D4A6F]">
            Book a demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 md:px-12 md:pt-12">
        {/* Grid Lines Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto flex h-full max-w-5xl justify-between px-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gray-100" />
            ))}
          </div>
        </div>

        {/* 3D J Decoration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -left-4 top-0 z-10 md:left-8 md:top-8"
        >
          <Image
            src={decorationImageSrc}
            alt=""
            width={300}
            height={300}
            className="h-48 w-48 object-contain md:h-72 md:w-72 lg:h-80 lg:w-80"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 mx-auto max-w-3xl pt-16 text-center md:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            {headline.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg"
          >
            {subheadline}
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#1E3A5F] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2D4A6F]"
            >
              {ctaButtonText}
            </button>
          </motion.form>
        </div>

        {/* Feature Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-20 mx-auto mt-16 max-w-6xl"
        >
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 border-b border-gray-100 px-4 py-4 md:gap-8 md:px-8">
              {featureTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="group relative flex flex-col items-center gap-2 px-2 py-2 text-center"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                    style={{
                      backgroundColor: tab.iconBgColor,
                      color: tab.iconColor,
                    }}
                  >
                    {tab.icon}
                  </div>
                  <div>
                    <span
                      className={`block text-sm font-medium transition-colors ${
                        activeTab === tab.id ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span className="block text-xs text-gray-400">
                      {tab.description}
                    </span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-500"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Dashboard Preview */}
            <div className="p-4 md:p-6">
              <DashboardPreview activeTab={activeTab} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
