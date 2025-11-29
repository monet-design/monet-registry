"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  bgColor: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: "small" | "medium" | "large";
  cardPosition?: "left" | "right" | "bottom-left" | "bottom-right";
}

interface LandingfolioHero20Props {
  logoText?: string;
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  startFreeTrialText?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  watchIntroText?: string;
  teamMembers?: TeamMember[];
  onStartFreeTrialClick?: () => void;
  onPrimaryClick?: () => void;
  onWatchIntroClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

// Default team members
const defaultTeamMembers: TeamMember[] = [
  {
    name: "Albert Flores",
    role: "Product Team Lead",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    bgColor: "#FBBF24",
    position: { top: "18%", left: "2%" },
    size: "large",
    cardPosition: "bottom-right",
  },
  {
    name: "Jacob Jones",
    role: "UX Designer",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bgColor: "#94A3B8",
    position: { top: "5%", right: "2%" },
    size: "large",
    cardPosition: "bottom-left",
  },
  {
    name: "Jane Cooper",
    role: "Account Manager",
    imageSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
    bgColor: "#A78BFA",
    position: { top: "52%", right: "12%" },
    size: "medium",
    cardPosition: "bottom-left",
  },
  {
    name: "Ralph Edwards",
    role: "Front-end Developer",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    bgColor: "#D1D5DB",
    position: { bottom: "5%", left: "28%" },
    size: "large",
    cardPosition: "left",
  },
];

// Partial team members (shown at edges)
const partialMembers = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    bgColor: "#34D399",
    position: { bottom: "2%", left: "-3%" },
    size: "medium" as const,
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    bgColor: "#22D3EE",
    position: { bottom: "2%", right: "-3%" },
    size: "medium" as const,
  },
];

// Logo Icon Component
function LogoIcon() {
  return (
    <div className="w-8 h-8 rounded-full border-[3px] border-[#2563EB] flex items-center justify-center">
      <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
    </div>
  );
}

// Team Member Card Component
function TeamMemberCard({
  member,
  delay = 0,
}: {
  member: TeamMember;
  delay?: number;
}) {
  const sizeClasses = {
    small: "w-24 h-24 md:w-28 md:h-28",
    medium: "w-32 h-32 md:w-40 md:h-40",
    large: "w-40 h-40 md:w-52 md:h-52",
  };

  const cardPositionClasses = {
    left: "-left-2 bottom-8",
    right: "-right-2 bottom-8",
    "bottom-left": "-left-4 -bottom-4",
    "bottom-right": "-right-4 -bottom-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + delay, duration: 0.6, ease: "easeOut" }}
      className="absolute"
      style={member.position}
    >
      <div className="relative">
        {/* Circular Avatar with Background */}
        <div
          className={`${sizeClasses[member.size]} rounded-full overflow-hidden flex items-end justify-center`}
          style={{ backgroundColor: member.bgColor }}
        >
          <img
            src={member.imageSrc}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + delay, duration: 0.4 }}
          className={`absolute ${cardPositionClasses[member.cardPosition || "bottom-right"]} bg-white rounded-lg shadow-lg px-3 py-2 min-w-max z-10`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-gray-900">
              {member.name}
            </span>
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <p className="text-xs text-gray-500">{member.role}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Partial Team Member (shown at edges, no card)
function PartialMember({
  imageSrc,
  bgColor,
  position,
  size,
  delay = 0,
}: {
  imageSrc: string;
  bgColor: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  size: "small" | "medium" | "large";
  delay?: number;
}) {
  const sizeClasses = {
    small: "w-24 h-24 md:w-28 md:h-28",
    medium: "w-32 h-32 md:w-40 md:h-40",
    large: "w-40 h-40 md:w-52 md:h-52",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + delay, duration: 0.6, ease: "easeOut" }}
      className="absolute"
      style={position}
    >
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden flex items-end justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero20({
  logoText = "ClarityUI",
  logoIcon,
  navItems = defaultNavItems,
  startFreeTrialText = "Start free trial",
  headline = "Communicate Better",
  description = "Clarity gives you the blocks & components you need to create a truly professional website.",
  primaryButtonText = "Start Our 14 Days Free Trial",
  watchIntroText = "Watch 1 min intro",
  teamMembers = defaultTeamMembers,
  onStartFreeTrialClick,
  onPrimaryClick,
  onWatchIntroClick,
}: LandingfolioHero20Props) {
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {logoIcon || <LogoIcon />}
              <span className="text-gray-900 font-semibold text-lg">
                {logoText}
              </span>
            </div>

            {/* Nav Links - Center */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Start Free Trial Button */}
            <button
              onClick={onStartFreeTrialClick}
              className="px-5 py-2.5 border border-gray-300 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
            >
              {startFreeTrialText}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-32">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-20">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight italic"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-6"
          >
            <button
              onClick={onPrimaryClick}
              className="px-8 py-4 bg-[#2563EB] text-white text-sm font-semibold rounded-full hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/25"
            >
              {primaryButtonText}
            </button>

            <button
              onClick={onWatchIntroClick}
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </span>
              <span className="text-sm font-medium">{watchIntroText}</span>
            </button>
          </motion.div>
        </div>

        {/* Team Members - Positioned around the content */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              delay={index * 0.1}
            />
          ))}

          {/* Partial members at edges */}
          {partialMembers.map((member, index) => (
            <PartialMember
              key={index}
              {...member}
              delay={0.4 + index * 0.1}
            />
          ))}
        </div>

        {/* Mobile: Show fewer team members */}
        <div className="mt-16 flex justify-center gap-4 lg:hidden">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div
                className="w-20 h-20 rounded-full overflow-hidden"
                style={{ backgroundColor: member.bgColor }}
              >
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
