"use client";

import { motion } from "motion/react";
import { ArrowRight, Settings, Users } from "lucide-react";
import Image from "next/image";

interface IntegrationCard {
  icon: React.ReactNode;
  name: string;
}

interface AgencyHeroWithShowcaseProps {
  /** Top banner text */
  bannerText?: string;
  /** Banner link text */
  bannerLinkText?: string;
  /** Banner link URL */
  bannerLinkUrl?: string;
  /** Logo text */
  logoText?: string;
  /** Navigation items */
  navItems?: { label: string; href: string; active?: boolean }[];
  /** Main title - first part */
  titlePart1?: string;
  /** Main title - italic part */
  titleItalic?: string;
  /** Main title - second part */
  titlePart2?: string;
  /** Subtitle text */
  subtitle?: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button URL */
  ctaUrl?: string;
  /** Integration cards on the left */
  integrations?: IntegrationCard[];
  /** Central product name */
  productName?: string;
  /** Right card title */
  rightCardTitle?: string;
  /** Right card subtitle (italic) */
  rightCardSubtitle?: string;
  /** Person image URL */
  personImageUrl?: string;
}

// Default integration icons as simple colored circles/shapes
const CRIOIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-white font-bold text-sm">
    CR
  </div>
);

const FacebookIcon = () => (
  <div className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  </div>
);

const GoogleIcon = () => (
  <div className="w-10 h-10 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  </div>
);

const AdvarraIcon = () => (
  <div className="w-10 h-10 flex items-center justify-center">
    <svg viewBox="0 0 40 40" className="w-10 h-10">
      <polygon points="20,5 35,35 5,35" fill="#7CB342" />
    </svg>
  </div>
);

const CustomSystemsIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
    <Settings className="w-5 h-5 text-white" />
  </div>
);

const PatientNetworkIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
    <Users className="w-5 h-5 text-white" />
  </div>
);

const defaultIntegrations: IntegrationCard[] = [
  { icon: <CRIOIcon />, name: "CRIO" },
  { icon: <FacebookIcon />, name: "Facebook" },
  { icon: <GoogleIcon />, name: "Google" },
  { icon: <AdvarraIcon />, name: "Advarra" },
  { icon: <CustomSystemsIcon />, name: "Custom Systems" },
  { icon: <PatientNetworkIcon />, name: "Patient Network" },
];

export default function AgencyHeroWithShowcase({
  bannerText = "Sign up for an exclusive demo at CNS Summit from 11/10 to 11/12",
  bannerLinkText = "Schedule an In-person Demo Now",
  bannerLinkUrl = "#",
  logoText = "grove",
  navItems = [
    { label: "AI Agent", href: "#" },
    { label: "AI PRM", href: "#", active: true },
    { label: "About Us", href: "#" },
  ],
  titlePart1 = "All your ",
  titleItalic = "participants",
  titlePart2 = ",\nin one unified platform.",
  subtitle = "Introducing the Grove AI PRM, the most intelligent AI-powered participant relationship\nmanagement platform for leading sites, CROs, and sponsors.",
  ctaText = "Book a Demo",
  ctaUrl = "#",
  integrations = defaultIntegrations,
  productName = "Grove AI PRM™",
  rightCardTitle = "Recruit & Engage",
  rightCardSubtitle = "Grace",
  personImageUrl = "/registry/agency-hero-with-showcase/person-portrait.png",
}: AgencyHeroWithShowcaseProps) {
  return (
    <section className="relative w-full bg-[#FAFCFE] overflow-hidden">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#2C9271] text-white py-2.5 px-4 text-center text-sm"
      >
        <span className="mr-2">🎉</span>
        <span>{bannerText}</span>
        <a
          href={bannerLinkUrl}
          className="ml-2 font-semibold underline hover:no-underline"
        >
          {bannerLinkText}
        </a>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between px-8 lg:px-16 py-4"
      >
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-[#2C9271]"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-xl font-semibold text-[#1a1a2e]">
            {logoText}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`text-sm ${
                item.active
                  ? "text-[#1a1a2e] font-medium underline underline-offset-4"
                  : "text-gray-600 hover:text-[#1a1a2e]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600 hover:text-[#1a1a2e]">
            Sign In
          </a>
          <a
            href={ctaUrl}
            className="flex items-center gap-2 bg-[#38524B] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#2d433d] transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="px-8 lg:px-16 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#1a1a2e] font-serif">
            {titlePart1}
            <em className="italic">{titleItalic}</em>
            {titlePart2.split("\n").map((line, idx) => (
              <span key={idx}>
                {idx > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {subtitle}
          </p>
          <motion.a
            href={ctaUrl}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-8 bg-[#1a1a2e] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#2a2a3e] transition-colors"
          >
            {ctaText}
          </motion.a>
        </motion.div>
      </div>

      {/* Showcase Section */}
      <div className="relative px-8 lg:px-16 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Left - Integration Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100"
              >
                {integration.icon}
                <span className="text-sm font-medium text-[#1a1a2e]">
                  {integration.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Product Box with Connection Lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative flex-1 flex items-center justify-center min-h-[320px]"
          >
            {/* Connection Lines SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 320"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Left connection lines - curved bezier paths converging to center */}
              <path
                d="M0 30 C80 30, 180 80, 260 160"
                stroke="#2C9271"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                fill="none"
              />
              <path
                d="M0 80 C100 80, 160 110, 260 160"
                stroke="#2C9271"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                fill="none"
              />
              <path
                d="M0 130 C120 130, 180 145, 260 160"
                stroke="#2C9271"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                fill="none"
              />
              <path
                d="M0 190 C120 190, 180 175, 260 160"
                stroke="#2C9271"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                fill="none"
              />
              <path
                d="M0 240 C100 240, 160 210, 260 160"
                stroke="#2C9271"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                fill="none"
              />
              <path
                d="M0 290 C80 290, 180 240, 260 160"
                stroke="#2C9271"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                fill="none"
              />
              {/* Right connection line */}
              <path
                d="M340 160 C420 160, 500 130, 600 100"
                stroke="#2C9271"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                fill="none"
              />
              {/* Connection dots at endpoints */}
              <circle cx="260" cy="160" r="4" fill="#2C9271" opacity="0.5" />
              <circle cx="340" cy="160" r="4" fill="#2C9271" opacity="0.5" />
            </svg>

            {/* Central Product Box */}
            <div className="relative z-10 bg-[#D0EFE5] rounded-2xl px-8 py-6 border border-[#B8E0D4] shadow-sm">
              <div className="flex items-center gap-2">
                {/* Dots grid */}
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#2C9271]/40"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-[#2C9271] mx-4">
                  {productName}
                </span>
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#2C9271]/40"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Person Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 w-64">
              {/* Card Header */}
              <div className="px-4 py-3 text-center">
                <p className="text-sm text-[#1a1a2e]">{rightCardTitle}</p>
                <p className="text-sm text-[#1a1a2e]">
                  with <em className="italic font-serif">{rightCardSubtitle}</em>
                </p>
              </div>
              {/* Person Image */}
              <div className="relative h-48 bg-gradient-to-b from-gray-50 to-gray-100">
                <Image
                  src={personImageUrl}
                  alt="Team member"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
