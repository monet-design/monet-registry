"use client";

import { motion } from "motion/react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface Participant {
  name: string;
  imageUrl: string;
}

interface LandingfolioHero13Props {
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  tagline?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  participants?: Participant[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onCtaClick?: () => void;
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

const defaultParticipants: Participant[] = [
  {
    name: "Darlene Robertson",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Jacob Jones",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Bessie Cooper",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Kathryn Murphy",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Theresa Webb",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
];

// Logo Icon with gradient ring
function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="url(#logoGradient13)"
        strokeWidth="3"
        fill="none"
      />
      <defs>
        <linearGradient
          id="logoGradient13"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Video Participant Card
function ParticipantCard({
  participant,
  index,
}: {
  participant: Participant;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
      className="relative aspect-[4/3] overflow-hidden rounded-sm"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={participant.imageUrl}
        alt={participant.name}
        className="h-full w-full object-cover"
      />
      {/* Name overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
        <span className="text-xs font-medium text-white">
          {participant.name}
        </span>
      </div>
    </motion.div>
  );
}

// Browser Frame for Video Grid
function VideoGridFrame({
  participants,
}: {
  participants: Participant[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-t-xl bg-[#1C1C1E] shadow-2xl"
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-[#2A2A2C] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#3A3A3C]" />
          <div className="h-3 w-3 rounded-full bg-[#3A3A3C]" />
          <div className="h-3 w-3 rounded-full bg-[#3A3A3C]" />
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {participants.slice(0, 6).map((participant, index) => (
          <ParticipantCard
            key={participant.name}
            participant={participant}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero13({
  logoText = "DuskUI",
  navItems = defaultNavItems,
  ctaButtonText = "Start free trial",
  tagline = "YOUR STARTUP NEEDS A KICK",
  headlineLine1 = "Connect & grow with your",
  headlineLine2 = "targeted customers",
  primaryButtonText = "Start 14 Days Free Trial",
  secondaryButtonText = "Talk to Sales",
  participants = defaultParticipants,
  onPrimaryClick,
  onSecondaryClick,
  onCtaClick,
}: LandingfolioHero13Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-5"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <LogoIcon className="h-7 w-7" />
            <span className="text-base font-semibold text-white">
              {logoText}
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button with gradient border */}
          <button
            onClick={onCtaClick}
            className="relative rounded-full px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
            style={{
              background:
                "linear-gradient(black, black) padding-box, linear-gradient(135deg, #60A5FA, #818CF8, #A78BFA) border-box",
              border: "1px solid transparent",
            }}
          >
            {ctaButtonText}
          </button>
        </motion.nav>

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl pb-8 pt-16 text-center sm:pt-20 lg:pt-24">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D97B4A]"
          >
            {tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-10 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {headlineLine1}
            <br />
            {headlineLine2}
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary Button */}
            <button
              onClick={onPrimaryClick}
              className="w-full rounded-full border border-white/20 bg-[#2A2A2C] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#3A3A3C] sm:w-auto"
            >
              {primaryButtonText}
            </button>

            {/* Secondary Button */}
            <button
              onClick={onSecondaryClick}
              className="w-full rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              {secondaryButtonText}
            </button>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="pb-0">
          <VideoGridFrame participants={participants} />
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
