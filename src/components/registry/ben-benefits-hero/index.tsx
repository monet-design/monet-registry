"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Check } from "lucide-react";
import Image from "next/image";

// Types
interface BenefitCard {
  icon: React.ReactNode;
  name: string;
  price: string;
  period: string;
  iconBg: string;
}

interface TrustedLogo {
  name: string;
  logo: React.ReactNode;
}

interface BenBenefitsHeroProps {
  headline?: string;
  description?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  privacyText?: string;
  loginText?: string;
  loginLinkText?: string;
  trustedByText?: string;
  benefitCards?: BenefitCard[];
  trustedLogos?: TrustedLogo[];
  illustrationSrc?: string;
  onSubmit?: (email: string) => void;
  onLoginClick?: () => void;
}

// Default Benefit Cards
const defaultBenefitCards: BenefitCard[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="white" />
        <path d="M7 12h10M12 7v10" stroke="#1a4a7c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "Allianz",
    price: "$249.00",
    period: "",
    iconBg: "#1a4a7c",
  },
  {
    icon: (
      <div className="w-6 h-6 rounded-full bg-[#f26522]" />
    ),
    name: "Headspace",
    price: "$79.99",
    period: "monthly",
    iconBg: "#f26522",
  },
  {
    icon: (
      <div className="flex items-center justify-center w-6 h-6 bg-[#ffd600] rounded text-[8px] font-bold text-[#003087]">
        AVIVA
      </div>
    ),
    name: "Aviva",
    price: "$78.99",
    period: "monthly",
    iconBg: "#ffd600",
  },
];

// Default Trusted Logos
const defaultTrustedLogos: TrustedLogo[] = [
  {
    name: "Improbable",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 border-2 border-[#002A21] flex items-center justify-center text-[8px] font-bold">
          I
        </div>
        <span className="text-sm font-semibold tracking-tight">IMPROBABLE</span>
      </div>
    ),
  },
  {
    name: "Zalando",
    logo: (
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#002A21">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="text-sm font-medium">zalando</span>
      </div>
    ),
  },
  {
    name: "itsu",
    logo: <span className="text-sm font-medium italic">itsu</span>,
  },
  {
    name: "Pleo",
    logo: (
      <span className="text-sm font-medium">
        P<span className="text-xs align-super">L</span>E
        <span className="text-xs align-sub">O</span>
      </span>
    ),
  },
  {
    name: "Sygnature Discovery",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">SYGNATURE</span>
        <svg viewBox="0 0 16 16" className="w-4 h-4" fill="#002A21">
          <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
        </svg>
        <span className="text-[10px] block">DISCOVERY</span>
      </div>
    ),
  },
  {
    name: "Octopus Energy",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">octopus</span>
        <span className="text-[10px] text-gray-500">energy</span>
      </div>
    ),
  },
];

// Benefit Card Component
function BenefitCardItem({
  card,
  index,
}: {
  card: BenefitCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: index * 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
      className="flex items-center gap-3 bg-white rounded-xl shadow-lg px-4 py-3 min-w-[180px]"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: card.iconBg }}
      >
        {card.icon}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-[#002A21]">{card.name}</h4>
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500">
            {card.price}
            {card.period && ` ${card.period}`}
          </span>
          <div className="w-4 h-4 rounded-full bg-[#2A4E49] flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Ben Logo
function BenLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 bg-[#002A21] rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-[#F8F9F2] rounded-full" />
      </div>
      <span className="text-xl font-semibold text-[#002A21]">Ben</span>
    </div>
  );
}

// Main Component
export default function BenBenefitsHero({
  headline = "Get benefits that get\nyour people",
  description = "Switch Ben On — the all-in-one global employee benefits platform that's\nflexible, automated, and budget-friendly.",
  emailPlaceholder = "Enter your email",
  ctaText = "Get started",
  privacyText = "By submitting you agree to our privacy policy.",
  loginText = "Already have an account?",
  loginLinkText = "Log in here",
  trustedByText = "Trusted by",
  benefitCards = defaultBenefitCards,
  trustedLogos = defaultTrustedLogos,
  illustrationSrc = "/registry/ben-benefits-hero/toucan-illustration.png",
  onSubmit,
  onLoginClick,
}: BenBenefitsHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="w-full min-h-screen bg-[#F8F9F2] overflow-hidden">
      {/* Navigation */}
      <nav className="w-full px-6 md:px-12 lg:px-20 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BenLogo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-8"
          >
            <button className="text-sm text-[#002A21] hover:text-[#2A4E49] transition-colors">
              Solutions
            </button>
            <button className="text-sm text-[#002A21] hover:text-[#2A4E49] transition-colors">
              How it works
            </button>
            <button className="text-sm text-[#002A21] hover:text-[#2A4E49] transition-colors">
              Pricing
            </button>
            <button className="text-sm text-[#002A21] hover:text-[#2A4E49] transition-colors">
              Resources
            </button>
            <button className="text-sm text-[#002A21] hover:text-[#2A4E49] transition-colors">
              Company
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <button className="px-5 py-2.5 text-sm text-[#002A21] border border-[#002A21] rounded-full hover:bg-[#002A21] hover:text-white transition-colors">
              Login
            </button>
            <button className="px-5 py-2.5 text-sm text-white bg-[#2A4E49] rounded-full hover:bg-[#1a3a36] transition-colors">
              Book a Demo
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#002A21] leading-[1.1] whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-[#4a5a56] whitespace-pre-line leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>

            {/* Email Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={emailPlaceholder}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-full text-[#002A21] placeholder-gray-400 text-sm focus:outline-none focus:border-[#2A4E49] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#2A4E49] hover:bg-[#1a3a36] text-white text-sm font-medium rounded-full transition-colors whitespace-nowrap"
                >
                  {ctaText}
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-400">{privacyText}</p>
                <p className="text-sm text-[#002A21]">
                  {loginText}{" "}
                  <button
                    type="button"
                    onClick={onLoginClick}
                    className="text-[#2A4E49] underline hover:text-[#1a3a36] transition-colors"
                  >
                    {loginLinkText}
                  </button>
                </p>
              </div>
            </motion.form>
          </div>

          {/* Right Content - Illustration & Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Benefit Cards */}
            <div className="absolute left-0 top-8 z-10 flex flex-col gap-4">
              {benefitCards.map((card, index) => (
                <BenefitCardItem key={card.name} card={card} index={index} />
              ))}
            </div>

            {/* Toucan Illustration */}
            <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px]">
              <Image
                src={illustrationSrc}
                alt="Toucan working at desk illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-sm text-[#002A21] font-medium mb-6">
            {trustedByText}
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="text-[#002A21] opacity-70 hover:opacity-100 transition-opacity"
              >
                {logo.logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
