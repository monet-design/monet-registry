"use client";

import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero8Props {
  logoText?: string;
  navItems?: NavItem[];
  cartCount?: number;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Live Preview", href: "#" },
  { label: "Features", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Help", href: "#" },
];

// Floating Card Component
function FloatingCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + delay, duration: 0.8, ease: "easeOut" }}
      className={`absolute rounded-lg bg-white shadow-2xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Sample Card Contents
function BlogCard() {
  return (
    <div className="w-[180px] h-[240px] p-3 bg-white">
      <div className="w-full h-[100px] bg-gradient-to-br from-pink-200 to-pink-300 rounded-md mb-2 flex items-center justify-center">
        <div className="w-12 h-16 bg-pink-400/50 rounded" />
      </div>
      <p className="text-[8px] text-gray-500 mb-1">The unseen of spending three years at Pixelgrade</p>
      <p className="text-[6px] text-gray-400">November 21, 2022</p>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="w-[160px] h-[200px] p-3 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-200" />
        <span className="text-[8px] font-medium">Aveeno</span>
        <div className="flex ml-auto">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[6px] text-yellow-400">&#9733;</span>
          ))}
        </div>
      </div>
      <div className="w-full h-[90px] bg-gradient-to-b from-green-50 to-green-100 rounded flex items-center justify-center mb-2">
        <div className="w-8 h-16 bg-green-200 rounded" />
      </div>
      <p className="text-[6px] text-gray-400 uppercase">AVEENO</p>
      <p className="text-[8px] font-medium">Positively Radiant Skin Brightening Facial Scrub</p>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-[6px] text-gray-400">(3536)</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[5px] text-yellow-400">&#9733;</span>
          ))}
        </div>
      </div>
      <p className="text-[10px] font-bold mt-1">$11.99</p>
    </div>
  );
}

function FashionCard() {
  return (
    <div className="w-[140px] h-[180px] bg-white">
      <div className="w-full h-[110px] bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
        <div className="w-16 h-20 bg-amber-300/50 rounded" />
      </div>
      <div className="p-2">
        <p className="text-[10px] font-semibold text-orange-500">Fashion</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[6px] text-yellow-400">&#9733;</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CollaborationCard() {
  return (
    <div className="w-[220px] h-[160px] bg-[#1a1a2e] rounded-lg p-4">
      <p className="text-white text-[12px] font-semibold leading-tight">
        Collaborate<br />remotely, with<br />
        <span className="text-orange-500">Postcrafts.</span>
      </p>
      <p className="text-gray-400 text-[6px] mt-2 leading-relaxed">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </p>
      <button className="mt-2 px-3 py-1 bg-orange-500 text-white text-[6px] rounded">
        Start now
      </button>
      <div className="flex items-center gap-1 mt-2">
        <div className="w-4 h-4 rounded-full bg-gray-600" />
        <span className="text-[5px] text-gray-400">@sara_collins</span>
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="w-[140px] h-[160px] bg-white p-3 rounded-lg">
      <p className="text-[8px] text-gray-400">Enterprise</p>
      <p className="text-[20px] font-bold">$399</p>
      <p className="text-[6px] text-gray-400 mt-1">Best for large companies seeking landing pages or landing pages for their entire business.</p>
      <button className="mt-2 w-full py-1 bg-gray-900 text-white text-[6px] rounded">
        Get Started
      </button>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="w-[160px] h-[100px] bg-white p-3 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200" />
        <div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[6px] text-yellow-400">&#9733;</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[6px] text-gray-600 leading-relaxed">
        &quot;Simply the best! I&apos;d recommend it to beginners and pros alike.&quot;
      </p>
    </div>
  );
}

function SpotifyCard() {
  return (
    <div className="w-[180px] h-[80px] bg-[#282828] rounded-lg p-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
        <span className="text-black text-[10px] font-bold">S</span>
      </div>
      <div>
        <p className="text-green-500 text-[10px] font-semibold">Spotify</p>
        <p className="text-gray-400 text-[5px] leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint.
        </p>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="w-[120px] h-[140px] bg-white rounded-lg overflow-hidden">
      <div className="w-full h-[80px] bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-orange-400/50" />
      </div>
      <div className="p-2">
        <p className="text-[8px] font-medium text-center">Design Expert</p>
        <p className="text-[6px] text-gray-400 text-center">@designer</p>
      </div>
    </div>
  );
}

// Main Component
export default function LandingfolioHero8({
  logoText = "/RAREBLOCKS",
  navItems = defaultNavItems,
  cartCount = 3,
  headline = "Build SaaS Landing\nPage without Writing\na Single Code",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.",
  primaryButtonText = "Get UI Kit Now",
  secondaryButtonText = "Check live preview",
  onPrimaryClick,
  onSecondaryClick,
}: LandingfolioHero8Props) {
  return (
    <section className="w-full min-h-screen bg-[#18181A] overflow-hidden">
      {/* Navigation - Dark Background */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#18181A] border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-white font-bold text-lg tracking-tight">
                {logoText}
              </span>
            </div>

            {/* Nav Links - Center */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#9CA3AF] text-sm font-medium hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Cart Icon */}
            <div className="relative">
              <button className="p-2 text-white hover:text-gray-300 transition-colors">
                <ShoppingCart size={22} strokeWidth={1.5} />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6366F1] text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="pt-8 lg:pt-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-[#878787] text-base leading-relaxed max-w-md"
            >
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              <button
                onClick={onPrimaryClick}
                className="px-8 py-4 bg-white text-[#18181A] text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
              >
                {secondaryButtonText}
              </button>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[500px] lg:h-[600px] hidden md:block">
            {/* Floating Cards with 3D perspective effect */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute inset-0"
              style={{
                perspective: "1500px",
                perspectiveOrigin: "center center"
              }}
            >
              {/* Cards Container with 3D rotation */}
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateY(-15deg) rotateX(5deg)"
                }}
              >
                {/* Blog Card - Back left */}
                <FloatingCard
                  className="top-[12%] left-[0%] z-10"
                  delay={0}
                >
                  <BlogCard />
                </FloatingCard>

                {/* Product Card - Center top */}
                <FloatingCard
                  className="top-[5%] left-[30%] z-20"
                  delay={0.1}
                >
                  <ProductCard />
                </FloatingCard>

                {/* Fashion Card - Right top */}
                <FloatingCard
                  className="top-[0%] right-[-5%] z-30"
                  delay={0.15}
                >
                  <FashionCard />
                </FloatingCard>

                {/* Testimonial Card - Right top below fashion */}
                <FloatingCard
                  className="top-[22%] right-[-10%] z-25"
                  delay={0.2}
                >
                  <TestimonialCard />
                </FloatingCard>

                {/* Collaboration Card - Left middle */}
                <FloatingCard
                  className="top-[42%] left-[-5%] z-40"
                  delay={0.25}
                >
                  <CollaborationCard />
                </FloatingCard>

                {/* Pricing Card - Right middle */}
                <FloatingCard
                  className="top-[35%] right-[0%] z-35"
                  delay={0.3}
                >
                  <PricingCard />
                </FloatingCard>

                {/* Profile Card - Center bottom */}
                <FloatingCard
                  className="bottom-[12%] left-[20%] z-30"
                  delay={0.35}
                >
                  <ProfileCard />
                </FloatingCard>

                {/* Spotify Card - Bottom right */}
                <FloatingCard
                  className="bottom-[5%] right-[5%] z-45"
                  delay={0.4}
                >
                  <SpotifyCard />
                </FloatingCard>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
