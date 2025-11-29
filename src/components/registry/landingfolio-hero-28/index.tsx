"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero28Props {
  logoText?: string;
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  startFreeTrialText?: string;
  headlineTop?: string;
  headlineBottom?: string;
  description?: string;
  primaryButtonText?: string;
  trialText?: string;
  pricingText?: string;
  deliveryStatus?: string;
  deliveryMessage?: string;
  phoneImageSrc?: string;
  onStartFreeTrialClick?: () => void;
  onPrimaryClick?: () => void;
  onNavClick?: (href: string) => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

// Logo Icon Component
function LogoIcon() {
  return (
    <div className="w-8 h-8 rounded-full border-[3px] border-[#3B82F6] flex items-center justify-center">
      <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
    </div>
  );
}

// Phone Mockup Component
function PhoneMockup({
  imageSrc,
  deliveryStatus,
  deliveryMessage,
}: {
  imageSrc: string;
  deliveryStatus: string;
  deliveryMessage: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, rotate: 0 }}
      animate={{ opacity: 1, x: 0, rotate: -5 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="relative w-[280px] md:w-[320px] lg:w-[360px]">
        {/* Phone Body */}
        <div className="relative bg-[#1a1a1a] rounded-[40px] p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />

          {/* Screen */}
          <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19]">
            {/* App Content */}
            <img
              src={imageSrc}
              alt="Delivery person"
              className="w-full h-full object-cover"
            />

            {/* Notification Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-6 left-4 right-4"
            >
              <div className="bg-[#1E2433]/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-[#3B4B6B]">
                <div className="flex items-center gap-3">
                  {/* Location Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-white/60 text-xs">{deliveryStatus}</p>
                    <p className="text-white text-sm font-medium">
                      {deliveryMessage}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero28({
  logoText = "DuskUI",
  logoIcon,
  navItems = defaultNavItems,
  startFreeTrialText = "Start free trial",
  headlineTop = "GET GOODS",
  headlineBottom = "DELIVERED",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.",
  primaryButtonText = "Download Now",
  trialText = "30 days free trial.",
  pricingText = "then plans start at $9.99",
  deliveryStatus = "Delivery on the way",
  deliveryMessage = "Mark is delivering parcel",
  phoneImageSrc = "/landingfolio-hero/hero-28/delivery-person.jpg",
  onStartFreeTrialClick,
  onPrimaryClick,
  onNavClick,
}: LandingfolioHero28Props) {
  return (
    <section className="w-full min-h-screen bg-[#18181A] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {logoIcon || <LogoIcon />}
              <span className="text-white font-semibold text-lg">
                {logoText}
              </span>
            </div>

            {/* Nav Links - Center */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (onNavClick) {
                      e.preventDefault();
                      onNavClick(item.href);
                    }
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Start Free Trial Button */}
            <button
              onClick={onStartFreeTrialClick}
              className="px-5 py-2.5 border border-gray-600 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors"
            >
              {startFreeTrialText}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 lg:pt-16 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Phone Mockup */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <PhoneMockup
              imageSrc={phoneImageSrc}
              deliveryStatus={deliveryStatus}
              deliveryMessage={deliveryMessage}
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center order-1 lg:order-2">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide"
            >
              <span className="text-white block">{headlineTop}</span>
              <span
                className="block bg-gradient-to-r from-[#06B6D4] via-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent"
                style={{ fontStyle: "italic" }}
              >
                {headlineBottom}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto"
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10"
            >
              <button
                onClick={onPrimaryClick}
                className="px-8 py-4 bg-gradient-to-r from-[#06B6D4] via-[#8B5CF6] to-[#A855F7] text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                {primaryButtonText}
              </button>
            </motion.div>

            {/* Trial Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-gray-500 text-sm"
            >
              <p>{trialText}</p>
              <p>{pricingText}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
