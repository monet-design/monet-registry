"use client";

import { motion } from "motion/react";
import { Users, CheckSquare, Shield, ArrowRight } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface CreditCard {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  variant: "purple" | "teal" | "dark-teal";
  rotation: number;
  position: { left?: string; right?: string; bottom: string };
  zIndex: number;
}

interface LandingfolioHero9Props {
  logoText?: string;
  headline?: React.ReactNode;
  subheadline?: string;
  ctaText?: string;
  loginText?: string;
  navItems?: NavItem[];
  features?: FeatureItem[];
  cards?: CreditCard[];
}

// Logo Icon Component
function LogoIcon() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#115965]">
      <div className="h-3.5 w-3.5 rounded-sm bg-white/90" />
    </div>
  );
}

// Credit Card Component
function CreditCardComponent({
  card,
  index,
}: {
  card: CreditCard;
  index: number;
}) {
  const getCardBackground = () => {
    switch (card.variant) {
      case "purple":
        return "bg-gradient-to-br from-[#9B59B6] via-[#8E44AD] to-[#7D3C98]";
      case "teal":
        return "bg-gradient-to-br from-[#1A3A3A] via-[#0F2A2A] to-[#0A1F1F]";
      case "dark-teal":
        return "bg-gradient-to-br from-[#1D5B5B] via-[#156565] to-[#0F4F4F]";
      default:
        return "bg-gradient-to-br from-[#1A3A3A] to-[#0F2A2A]";
    }
  };

  const renderCardDesign = () => {
    switch (card.variant) {
      case "purple":
        return (
          <>
            {/* Purple card pattern - concentric circles */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/30" />
                <div className="absolute inset-4 rounded-full border-2 border-purple-400/25" />
                <div className="absolute inset-8 rounded-full border-2 border-purple-400/20" />
                <div className="absolute inset-12 rounded-full border-2 border-purple-400/15" />
              </div>
            </div>
          </>
        );
      case "teal":
        return (
          <>
            {/* Teal card pattern - colorful circles */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <div className="relative h-28 w-28">
                {/* Blue circle */}
                <div className="absolute -left-4 top-0 h-20 w-20 rounded-full bg-[#2E7D9A] opacity-90" />
                {/* Yellow circle */}
                <div className="absolute -right-2 top-0 h-20 w-20 rounded-full bg-[#E9B44C] opacity-90" />
                {/* Green circle */}
                <div className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#2ECC71] opacity-90" />
              </div>
            </div>
          </>
        );
      case "dark-teal":
        return (
          <>
            {/* Dark teal card pattern - wave lines */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                className="opacity-40"
              >
                <path
                  d="M10 40 Q 30 10, 60 40 T 110 40"
                  stroke="#D4A574"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M10 50 Q 30 20, 60 50 T 110 50"
                  stroke="#D4A574"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            {/* Coral/Orange decoration */}
            <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br from-[#E67E5B] to-[#D4694A] opacity-80" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: card.rotation }}
      animate={{ opacity: 1, y: 0, rotate: card.rotation }}
      transition={{
        delay: 0.6 + index * 0.15,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="absolute w-[320px] sm:w-[380px]"
      style={{
        left: card.position.left,
        right: card.position.right,
        bottom: card.position.bottom,
        zIndex: card.zIndex,
      }}
    >
      <div
        className={`relative h-[200px] sm:h-[220px] overflow-hidden rounded-2xl ${getCardBackground()} p-6 shadow-2xl`}
      >
        {/* Card Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-white/20">
            <div className="h-2.5 w-2.5 rounded-sm bg-white/80" />
          </div>
          <span className="text-sm font-medium text-white/90">Postcrafts</span>
        </div>

        {/* Card Design Pattern */}
        {renderCardDesign()}

        {/* Card Number */}
        <div className="mt-8 font-mono text-xl tracking-[0.2em] text-white/90 sm:text-2xl">
          {card.cardNumber}
        </div>

        {/* Card Details */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] italic text-white/50">Cardholder name</p>
            <p className="mt-0.5 text-sm italic text-white/80">
              {card.cardholderName}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] italic text-white/50">Expiry date</p>
            <p className="mt-0.5 text-sm text-white/80">{card.expiryDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
];

const defaultFeatures: FeatureItem[] = [
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Over 12,000",
    subtitle: "students joined",
  },
  {
    icon: <CheckSquare size={20} strokeWidth={1.5} />,
    title: "No yearly charges,",
    subtitle: "maximum limits",
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: "Secured & safe",
    subtitle: "online payment",
  },
];

const defaultCards: CreditCard[] = [
  {
    cardNumber: "1048  3948  3048  8732",
    cardholderName: "Ronald Richards",
    expiryDate: "05/2025",
    variant: "purple",
    rotation: -12,
    position: { left: "-5%", bottom: "-15%" },
    zIndex: 10,
  },
  {
    cardNumber: "8573  3875  5735  3857",
    cardholderName: "Kristin Watson",
    expiryDate: "10/2024",
    variant: "teal",
    rotation: 5,
    position: { left: "30%", bottom: "-25%" },
    zIndex: 20,
  },
  {
    cardNumber: "5837  4857  8084  2894",
    cardholderName: "Albert Flores",
    expiryDate: "07/2026",
    variant: "dark-teal",
    rotation: 15,
    position: { right: "-5%", bottom: "-10%" },
    zIndex: 15,
  },
];

// Main Component
export default function LandingfolioHero9({
  logoText = "Postcrafts",
  headline = (
    <>
      <span className="italic">Simplified credit</span>
      <br />
      <span className="italic">cards for students</span>
    </>
  ),
  subheadline = "No more hassle taking loans and making payments. Try Postcrats credit card, make your life simple.",
  ctaText = "Apply for free",
  loginText = "Log in",
  navItems = defaultNavItems,
  features = defaultFeatures,
  cards = defaultCards,
}: LandingfolioHero9Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0C1615]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-base font-semibold text-white">{logoText}</span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden text-sm text-white/80 transition-colors hover:text-white sm:block">
            {loginText}
          </button>
          <button className="rounded-lg bg-[#1A2A29] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#243635]">
            {ctaText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 pt-16 text-center sm:px-8 sm:pt-20 lg:pt-24">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-dm-serif text-4xl leading-tight text-[#81E7BF] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10"
        >
          <button className="group inline-flex items-center gap-3 rounded-xl bg-[#115965] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#156D7B]">
            {ctaText}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
              <ArrowRight size={16} />
            </span>
          </button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-white/60">{feature.icon}</span>
              <div className="text-left">
                <p className="text-sm font-medium text-white">{feature.title}</p>
                <p className="text-sm text-white/60">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Credit Cards */}
      <div className="relative mx-auto mt-16 h-[280px] max-w-6xl sm:mt-20 sm:h-[320px] lg:h-[380px]">
        {cards.map((card, index) => (
          <CreditCardComponent key={index} card={card} index={index} />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C1615] to-transparent" />
    </section>
  );
}
