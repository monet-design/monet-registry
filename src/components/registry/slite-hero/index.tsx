"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface DocumentCard {
  title: string;
  subtitle: string;
  bgColor: string;
  rotation: number;
  position: "left" | "right";
  offsetX: number;
  offsetY: number;
  image?: string;
}

interface SliteHeroProps {
  logoText?: string;
  headline?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  announcementBadge?: string;
  announcementText?: string;
  navItems?: NavItem[];
  documentCards?: DocumentCard[];
  onSubmit?: (email: string) => void;
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
  { label: "Resources", href: "#", hasDropdown: true },
];

// Default document cards
const defaultDocumentCards: DocumentCard[] = [
  {
    title: "Company Wiki",
    subtitle: "DOCUMENTATION",
    bgColor: "#DF6F46",
    rotation: -15,
    position: "left",
    offsetX: -80,
    offsetY: 180,
  },
  {
    title: "OKRs 2023",
    subtitle: "PLANNING",
    bgColor: "#FFFFFF",
    rotation: -8,
    position: "left",
    offsetX: 40,
    offsetY: -20,
    image: "/registry/slite-hero/hand-pen.png",
  },
  {
    title: "Employee Checklist",
    subtitle: "ONBOARDING",
    bgColor: "#ECCFD0",
    rotation: 12,
    position: "right",
    offsetX: -40,
    offsetY: -20,
    image: "/registry/slite-hero/checklist.png",
  },
  {
    title: "Product Roadmap",
    subtitle: "PLANNING",
    bgColor: "#F1C4D1",
    rotation: 18,
    position: "right",
    offsetX: 60,
    offsetY: 160,
    image: "/registry/slite-hero/document.png",
  },
];

// Logo Component
function SliteLogo({ text = "slite" }: { text?: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xl font-semibold text-[#1A1A1A] tracking-tight">
        {text}
      </span>
    </div>
  );
}

// Document Card Component
function DocumentCardComponent({
  card,
  index,
}: {
  card: DocumentCard;
  index: number;
}) {
  const isLeft = card.position === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: card.rotation * 0.5 }}
      animate={{ opacity: 1, y: 0, rotate: card.rotation }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.7, ease: "easeOut" }}
      className="absolute w-[160px] sm:w-[180px] rounded-xl shadow-lg overflow-hidden"
      style={{
        backgroundColor: card.bgColor,
        transform: `rotate(${card.rotation}deg)`,
        left: isLeft ? `calc(50% - 380px + ${card.offsetX}px)` : "auto",
        right: !isLeft ? `calc(50% - 380px + ${-card.offsetX}px)` : "auto",
        top: `calc(50% + ${card.offsetY}px)`,
      }}
    >
      <div className="p-4 h-[180px] sm:h-[200px] flex flex-col">
        {card.image && (
          <div className="flex-1 flex items-center justify-center mb-2">
            <Image
              src={card.image}
              alt={card.title}
              width={80}
              height={80}
              className="object-contain opacity-80"
            />
          </div>
        )}
        <div className={card.image ? "" : "mt-auto"}>
          <h3
            className={`font-semibold text-sm leading-tight ${
              card.bgColor === "#DF6F46" ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`text-[10px] mt-1 uppercase tracking-wider ${
              card.bgColor === "#DF6F46"
                ? "text-white/70"
                : "text-[#666]"
            }`}
          >
            {card.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function SliteHero({
  logoText = "slite",
  headline = "Your team's go-to for\ninstant answers.",
  subheadline = "Slite's AI-powered knowledge base is the fastest way to access trusted company information. From onboarding guides to all-hands notes — just ask Slite for it.",
  inputPlaceholder = "name@company.com",
  ctaText = "Start for free",
  announcementBadge = "New",
  announcementText = "Unlock the power of collective wisdom. Tell me how.",
  navItems = defaultNavItems,
  documentCards = defaultDocumentCards,
  onSubmit,
}: SliteHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F9EFE5] overflow-hidden">
      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#9D7E93] py-2 px-4 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-sm text-white">
          <span className="bg-[#DF6F46] text-white text-xs font-medium px-2 py-0.5 rounded">
            {announcementBadge}
          </span>
          <span className="text-white/90">{announcementText}</span>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <SliteLogo text={logoText} />

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#1A1A1A] hover:text-[#666] transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:block text-sm text-[#1A1A1A] hover:text-[#666] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            className="hidden sm:block text-sm text-[#1A1A1A] border border-[#1A1A1A] rounded-full px-4 py-2 hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            Book a demo
          </a>
          <a
            href="#"
            className="text-sm text-white bg-[#1A1A1A] rounded-full px-4 py-2 hover:bg-[#333] transition-colors"
          >
            Start for free
          </a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-12 sm:px-8 sm:pt-24 lg:pt-32">
        {/* Document Cards - Left Side */}
        <div className="hidden lg:block">
          {documentCards
            .filter((card) => card.position === "left")
            .map((card, index) => (
              <DocumentCardComponent key={card.title} card={card} index={index} />
            ))}
        </div>

        {/* Document Cards - Right Side */}
        <div className="hidden lg:block">
          {documentCards
            .filter((card) => card.position === "right")
            .map((card, index) => (
              <DocumentCardComponent
                key={card.title}
                card={card}
                index={index + 2}
              />
            ))}
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl font-normal tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl whitespace-pre-line leading-[1.15]"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-[#666] sm:text-lg"
        >
          {subheadline}
        </motion.p>

        {/* Email Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md items-center gap-0 rounded-full border border-[#E0D8D0] bg-white p-1.5 shadow-sm sm:mt-10"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={inputPlaceholder}
            className="flex-1 bg-transparent px-4 py-2 text-sm text-[#1A1A1A] placeholder:text-[#999] focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-[#DF6F46] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#C85F3A]"
          >
            {ctaText}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
