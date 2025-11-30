"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface IntegrationLogo {
  name: string;
  icon: React.ReactNode;
}

interface OutsetaHeroProps {
  logoText?: string;
  badge?: string;
  badgeLink?: string;
  headline?: string;
  description?: string;
  highlightedWords?: string[];
  primaryCta?: string;
  secondaryCta?: string;
  integrationsText?: string;
  integrationsLinkText?: string;
  navItems?: NavItem[];
  migrationText?: string;
  migrationLink?: string;
  dashboardImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Logo Icon Component
function OutsetaLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="12" fill="#361935" />
      <circle cx="14" cy="14" r="6" fill="#FFF2BD" />
    </svg>
  );
}

// Integration Icons
function WebflowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M20.5 8.5C17.5 8.5 15.5 11 14 14C14 14 13.5 11 10.5 11C7.5 11 5 14 5 17.5H9.5C9.5 17.5 9.5 15 11.5 15C13.5 15 13.5 17.5 13.5 17.5H18.5C18.5 17.5 18.5 11.5 21 11.5V8.5C21 8.5 20.7 8.5 20.5 8.5Z"
        fill="#361935"
      />
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 6H21V12H14L21 19H14V26L7 19V6Z" fill="#361935" />
    </svg>
  );
}

function WordPressIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="#361935" strokeWidth="1.5" />
      <path
        d="M5 14L9 24L12.5 14M15.5 14L19 24L23 14M11 8L14 19L17 8"
        stroke="#361935"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GatsbyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" fill="#361935" />
      <path
        d="M7 14C7 10.5 9.5 7.5 13 7V10C11.5 10.5 10.5 11.5 10 13H13V15H7.1C7 14.7 7 14.3 7 14Z"
        fill="#FFF2BD"
      />
      <path d="M15 7V21C18.5 20.5 21 17.5 21 14C21 10.5 18.5 7.5 15 7Z" fill="#FFF2BD" />
    </svg>
  );
}

function CircleCIIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="#361935" strokeWidth="2" />
      <circle cx="14" cy="14" r="3" fill="#361935" />
    </svg>
  );
}

function WebhookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 7V14M14 14L20 18M14 14L8 18"
        stroke="#361935"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="7" r="2" fill="#361935" />
      <circle cx="20" cy="18" r="2" fill="#361935" />
      <circle cx="8" cy="18" r="2" fill="#361935" />
    </svg>
  );
}

function SquarespaceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6" y="6" width="16" height="16" rx="2" stroke="#361935" strokeWidth="2" />
      <rect x="10" y="10" width="8" height="8" fill="#361935" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6" y="5" width="16" height="18" rx="2" stroke="#361935" strokeWidth="1.5" />
      <path d="M10 9H18M10 13H16M10 17H14" stroke="#361935" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M11 11.5C11 12.3 10.3 13 9.5 13C8.7 13 8 12.3 8 11.5C8 10.7 8.7 10 9.5 10C10.3 10 11 10.7 11 11.5Z"
        fill="#361935"
      />
      <path
        d="M20 11.5C20 12.3 19.3 13 18.5 13C17.7 13 17 12.3 17 11.5C17 10.7 17.7 10 18.5 10C19.3 10 20 10.7 20 11.5Z"
        fill="#361935"
      />
      <path
        d="M6.5 9C8.5 7 11 6.5 14 6.5C17 6.5 19.5 7 21.5 9L22 12C22 15 21.5 17 21 18L18 20.5C17 20 16 19.5 14 19.5C12 19.5 11 20 10 20.5L7 18C6.5 17 6 15 6 12L6.5 9Z"
        stroke="#361935"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M6 6L14 14M14 14L22 6M14 14L6 22M14 14L22 22" stroke="#361935" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ZapierIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 6V12M14 16V22M6 14H12M16 14H22M8 8L12 12M16 16L20 20M20 8L16 12M12 16L8 20"
        stroke="#361935"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Default integration logos
const defaultIntegrations: IntegrationLogo[] = [
  { name: "Webflow", icon: <WebflowIcon /> },
  { name: "Framer", icon: <FramerIcon /> },
  { name: "WordPress", icon: <WordPressIcon /> },
  { name: "Gatsby", icon: <GatsbyIcon /> },
  { name: "CircleCI", icon: <CircleCIIcon /> },
  { name: "Webhook", icon: <WebhookIcon /> },
  { name: "Squarespace", icon: <SquarespaceIcon /> },
  { name: "Notion", icon: <NotionIcon /> },
  { name: "Discord", icon: <DiscordIcon /> },
  { name: "X", icon: <XIcon /> },
  { name: "Zapier", icon: <ZapierIcon /> },
];

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Learn", href: "#", hasDropdown: true },
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
  { label: "Support", href: "#", hasDropdown: true },
  { label: "Company", href: "#" },
  { label: "Blog", href: "#" },
];

// Main Component
export default function OutsetaHero({
  logoText = "Outseta",
  badge = "NEW",
  badgeLink = "Community design showcase",
  headline = "The Membership\nOperating System",
  description = "Payments, auth, gating, CRM, email—it's all here. Ditch the cookie cutter platforms and monetize your",
  highlightedWords = ["membership site", "SaaS", "course", "community", "association"],
  primaryCta = "Sign up for free",
  secondaryCta = "Is Outseta for me?",
  integrationsText = "Integrate with nearly any tool or framework under the sun",
  integrationsLinkText = "View all",
  navItems = defaultNavItems,
  migrationText = "Migrating from",
  migrationLink = "Memberstack?",
  dashboardImage = "/registry/outseta-hero/dashboard.png",
  onPrimaryClick,
  onSecondaryClick,
}: OutsetaHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #FEE2D5 0%, #FDEDC9 30%, #FFF2BD 60%, #FFF1BB 100%)",
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <OutsetaLogo />
          <span className="text-lg font-semibold text-[#361935]">{logoText}</span>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#361935]/80 transition-colors hover:text-[#361935]"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-[#361935]/70 sm:block">
            {migrationText}{" "}
            <a href="#" className="font-medium text-[#361935] underline">
              {migrationLink}
            </a>{" "}
            <ArrowRight size={14} className="inline" />
          </span>
          <button className="rounded-md border border-[#361935] px-4 py-1.5 text-sm font-medium text-[#361935] transition-colors hover:bg-[#361935] hover:text-white">
            Log in
          </button>
          <button className="rounded-md bg-[#DBAD34] px-4 py-1.5 text-sm font-medium text-[#361935] transition-colors hover:bg-[#C9A030]">
            Sign up
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-8 pb-6 text-center sm:px-8 sm:pt-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#361935]/20 bg-white/60 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="rounded bg-[#361935] px-2 py-0.5 text-xs font-semibold text-[#FFF2BD]">
            {badge}
          </span>
          <span className="text-sm text-[#361935]">{badgeLink}</span>
          <ChevronDown size={14} className="-rotate-90 text-[#361935]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 whitespace-pre-line font-serif text-5xl font-bold leading-tight tracking-tight text-[#361935] sm:text-6xl md:text-7xl"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#361935]/80 sm:text-lg"
        >
          {description}{" "}
          {highlightedWords.map((word, index) => (
            <span key={word}>
              <span className="font-medium underline decoration-[#361935]/40 underline-offset-2">
                {word}
              </span>
              {index < highlightedWords.length - 2 && ", "}
              {index === highlightedWords.length - 2 && ", or "}
            </span>
          ))}{" "}
          using your favorite tools.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onPrimaryClick}
            className="rounded-lg bg-[#FFF2BD] px-6 py-3 text-sm font-semibold text-[#361935] shadow-sm transition-all hover:bg-[#FFE98A] hover:shadow-md"
          >
            {primaryCta}
          </button>
          <button
            onClick={onSecondaryClick}
            className="rounded-lg border-2 border-[#361935] bg-transparent px-6 py-3 text-sm font-semibold text-[#361935] transition-all hover:bg-[#361935] hover:text-white"
          >
            {secondaryCta}
          </button>
        </motion.div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10"
        >
          <p className="mb-4 text-sm text-[#361935]/70">
            {integrationsText}{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 font-medium text-[#361935] underline"
            >
              {integrationsLinkText} <ArrowRight size={14} />
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {defaultIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.03, duration: 0.3 }}
                className="text-[#361935]/70 transition-colors hover:text-[#361935]"
              >
                {integration.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dashboard Image */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8"
      >
        <div className="overflow-hidden rounded-t-2xl border border-b-0 border-[#361935]/10 bg-white shadow-2xl">
          <Image
            src={dashboardImage}
            alt="Outseta Dashboard"
            width={1200}
            height={675}
            className="w-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-40"
        style={{
          background: "linear-gradient(to top, #FFF1BB 0%, transparent 100%)",
        }}
      />

      {/* Google Font for DM Serif Display */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
      `}</style>
    </section>
  );
}
