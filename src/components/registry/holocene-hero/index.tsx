"use client";

import { motion } from "motion/react";
import { ChevronDown, Play, Search, Settings } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface HoloceneHeroProps {
  logoText?: string;
  headline?: string;
  tagline?: string;
  description?: string;
  epochDescription?: string;
  ctaText?: string;
  loginText?: string;
  trustText?: string;
  navItems?: NavItem[];
  logos?: LogoItem[];
  videoThumbnailSrc?: string;
  desertRockSrc?: string;
  onCtaClick?: () => void;
  onLoginClick?: () => void;
}

// Holocene Logo Icon
function HoloceneLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

// Navigation Component
function Navigation({
  logoText,
  navItems,
  ctaText,
  loginText,
  onCtaClick,
  onLoginClick,
}: {
  logoText: string;
  navItems: NavItem[];
  ctaText: string;
  loginText: string;
  onCtaClick?: () => void;
  onLoginClick?: () => void;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-4 bg-white lg:px-12"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <HoloceneLogo className="w-6 h-6 text-[#1A1A1A]" />
        <span className="text-base font-semibold text-[#1A1A1A]">{logoText}</span>
      </div>

      {/* Nav Items - Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-1 text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
          >
            {item.label}
            {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={onLoginClick}
          className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
        >
          {loginText}
        </button>
        <button
          onClick={onCtaClick}
          className="px-5 py-2.5 text-sm font-medium text-white bg-[#E8875C] hover:bg-[#D67A50] rounded-full transition-colors"
        >
          {ctaText}
        </button>
      </div>
    </motion.nav>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
    >
      {/* Dashboard Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <HoloceneLogo className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-medium text-[#1A1A1A]">All Hubs</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500">
            <span>Order to Cash</span>
            <span className="font-medium text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1">Procure to Pay</span>
            <span>Planning</span>
            <span>Inventory</span>
            <span>Overview</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-500">
            <span>Search Orders</span>
            <Search className="w-4 h-4" />
          </div>
          <Settings className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col gap-4 p-4 w-12 border-r border-gray-100">
          <div className="w-6 h-6 bg-gray-100 rounded" />
          <div className="w-6 h-6 bg-[#E8875C]/20 rounded" />
          <div className="w-6 h-6 bg-gray-100 rounded" />
          <div className="w-6 h-6 bg-gray-100 rounded" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm">
              <span className="text-gray-500">Search</span>
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500">
              <span>Place</span>
              <span className="font-medium text-[#1A1A1A]">All</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500">
              <span>Time Range</span>
              <span className="font-medium text-[#1A1A1A]">All</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500">
              <span>User</span>
              <span className="font-medium text-[#1A1A1A]">All</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500">
              <span>Categories</span>
              <span className="font-medium text-[#1A1A1A]">All</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <button className="px-3 py-1.5 bg-[#E8875C] text-white rounded-lg text-sm">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Materials</p>
              <p className="text-2xl font-semibold text-[#1A1A1A]">314</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Suppliers</p>
              <p className="text-2xl font-semibold text-[#1A1A1A]">84</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Total Spend</p>
              <p className="text-2xl font-semibold text-[#1A1A1A]">3,8m</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Categories</p>
              <p className="text-2xl font-semibold text-[#1A1A1A]">112</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex gap-4">
            {/* Left Panel - Material Performance */}
            <div className="w-48 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-[#1A1A1A] mb-3">Material Performance</p>
              <div className="mb-3">
                <p className="text-[10px] text-gray-500">Raw Material Inventory Turnover</p>
                <p className="text-lg font-semibold text-[#1A1A1A]">139 d</p>
              </div>
              <div className="mb-3">
                <p className="text-[10px] text-gray-500">Expedited Material Orders</p>
                <p className="text-lg font-semibold text-[#1A1A1A]">41</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 mb-2">Country of Origin</p>
                {/* Donut Chart Placeholder */}
                <div className="relative w-16 h-16">
                  <svg viewBox="0 0 32 32" className="w-full h-full">
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#E8875C"
                      strokeWidth="4"
                      strokeDasharray="30 75"
                      transform="rotate(-90 16 16)"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      fill="none"
                      stroke="#1A1A1A"
                      strokeWidth="4"
                      strokeDasharray="20 75"
                      strokeDashoffset="-30"
                      transform="rotate(-90 16 16)"
                    />
                  </svg>
                </div>
                <div className="mt-2 space-y-1 text-[8px]">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#E8875C]" />
                    <span className="text-gray-600">Netherlands</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                    <span className="text-gray-600">USA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-gray-600">Brazil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - World Map */}
            <div className="flex-1 relative bg-[#F5F5F0] rounded-lg overflow-hidden min-h-[200px]">
              {/* Simplified World Map */}
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-30">
                <path
                  d="M150,100 Q200,80 250,100 T350,90 T450,100 T550,85 T650,100"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                />
                <path
                  d="M100,150 Q200,130 300,150 T500,140 T700,150"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                />
                <path
                  d="M120,200 Q250,180 380,200 T640,190"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                />
              </svg>
              {/* Map Points */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#E8875C] rounded-full" />
              <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-green-500 rounded-full" />
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-gray-400 rounded-full" />
            </div>

            {/* Right Panel - Planning Accuracy & Supplier Performance */}
            <div className="w-44 space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-[#1A1A1A] mb-2">Planning Accuracy</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500">Total Orders</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">874 <span className="text-green-500 text-[8px]">+24</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500">Manually Created POS</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">298</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500">Lead Time Changes</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">37</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-[#1A1A1A] mb-2">Supplier Performance</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500">Availability</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">78</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500">On Time Delivery</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">91</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500">Lead Time</span>
                    <span className="text-sm font-medium text-[#E8875C]">213 d</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-500">Defect Rate</span>
                    <span className="text-sm font-medium text-[#1A1A1A]">24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Video Thumbnail Component
function VideoThumbnail({
  src,
  ctaText,
  onCtaClick,
}: {
  src: string;
  ctaText: string;
  onCtaClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col gap-3"
    >
      <div className="relative w-48 h-28 rounded-lg overflow-hidden border-2 border-[#E8875C]">
        <Image
          src={src}
          alt="Video thumbnail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full">
            <Play className="w-4 h-4 text-[#1A1A1A] ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>
      <button
        onClick={onCtaClick}
        className="px-4 py-2.5 text-sm font-medium text-[#1A1A1A] bg-[#E8875C] hover:bg-[#D67A50] rounded-full transition-colors text-center"
      >
        {ctaText}
      </button>
    </motion.div>
  );
}

// Logo Strip Component
function LogoStrip({
  trustText,
  logos,
}: {
  trustText: string;
  logos: LogoItem[];
}) {
  return (
    <div className="mt-auto pb-8">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-sm text-white/70 mb-6"
      >
        {trustText}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex items-center gap-10 flex-wrap"
      >
        {logos.map((logo) => (
          <div key={logo.name} className="text-white/60 hover:text-white/80 transition-colors">
            {logo.logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Challenges", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Company", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
];

// Default logos
const defaultLogos: LogoItem[] = [
  {
    name: "Koppern",
    logo: (
      <span className="text-lg font-bold tracking-wide">koppern</span>
    ),
  },
  {
    name: "Resmed",
    logo: (
      <span className="text-lg font-bold tracking-wide flex items-center gap-1">
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
          <path d="M10 2L2 10l8 8 8-8-8-8z" />
        </svg>
        Resmed
      </span>
    ),
  },
  {
    name: "Sword",
    logo: (
      <span className="text-lg font-bold tracking-wide flex items-center gap-1">
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
          <circle cx="10" cy="10" r="4" />
        </svg>
        sword
      </span>
    ),
  },
  {
    name: "SALTWELL",
    logo: (
      <span className="text-lg font-bold tracking-wider">SALTWELL</span>
    ),
  },
  {
    name: "Vencorex",
    logo: (
      <span className="text-lg font-bold tracking-wide">Vencorex</span>
    ),
  },
];

// Main Component
export default function HoloceneHero({
  logoText = "Holocene",
  headline = "Embracing\nEvolution",
  tagline = "From signal to structure —",
  description = "Get complete visibility of your\nInbound Supply Chain from emails",
  epochDescription = "EPOCH by Holocene delivers PO-level truth - no supplier\nportals, no EDI. Go-live in days.",
  ctaText = "See 6-week pilot plan",
  loginText = "Login",
  trustText = "Trusted by teams turning complexity into clarity.",
  navItems = defaultNavItems,
  logos = defaultLogos,
  videoThumbnailSrc = "/registry/holocene-hero/warehouse-thumbnail.png",
  desertRockSrc = "/registry/holocene-hero/desert-rock.png",
  onCtaClick,
  onLoginClick,
}: HoloceneHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white">
      {/* Navigation */}
      <Navigation
        logoText={logoText}
        navItems={navItems}
        ctaText={ctaText}
        loginText={loginText}
        onCtaClick={onCtaClick}
        onLoginClick={onLoginClick}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2B2520] via-[#3D3830] to-[#2B2520] overflow-hidden">
        {/* Dotted Pattern Overlay - Right Side */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #E8875C 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 px-6 lg:px-12 py-12 min-h-[800px] flex flex-col">
          {/* Top Section */}
          <div className="flex justify-between items-start mb-8">
            {/* Left - Headlines */}
            <div className="max-w-md">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.1] tracking-tight whitespace-pre-line mb-8"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {headline}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-1"
              >
                <p className="text-lg text-white font-medium">{tagline}</p>
                <p className="text-base text-white/60 whitespace-pre-line">{description}</p>
              </motion.div>
            </div>

            {/* Center - EPOCH Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block max-w-sm mt-8"
            >
              <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
                {epochDescription}
              </p>
            </motion.div>

            {/* Right - Video Thumbnail */}
            <VideoThumbnail
              src={videoThumbnailSrc}
              ctaText={ctaText}
              onCtaClick={onCtaClick}
            />
          </div>

          {/* Dashboard Preview - Positioned to overlap with desert image */}
          <div className="relative flex gap-4 mt-4">
            <div className="flex-1 max-w-4xl">
              <DashboardPreview />
            </div>

            {/* Desert Rock Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block absolute right-0 top-[-60px] w-[400px] h-[600px]"
            >
              <Image
                src={desertRockSrc}
                alt="Desert rock formation"
                fill
                className="object-cover object-left"
              />
            </motion.div>
          </div>

          {/* Logo Strip */}
          <LogoStrip trustText={trustText} logos={logos} />
        </div>
      </div>
    </section>
  );
}
