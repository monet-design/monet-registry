"use client";

import { motion } from "motion/react";
import { ArrowDown, Plus } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface AnnouncementItem {
  text: string;
  highlight?: boolean;
}

interface ClientLogo {
  name: string;
  logo: React.ReactNode;
}

interface CutTheCodeHeroProps {
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  languageCode?: string;
  announcementPrefix?: string;
  announcementItems?: AnnouncementItem[];
  tagline?: string;
  headline?: string;
  description?: string;
  partnerBadge?: {
    icon?: React.ReactNode;
    text: string;
  };
  ctaText?: string;
  onCtaClick?: () => void;
  clientLogos?: ClientLogo[];
  mockupImage?: string;
}

// Logo Icon Component
function CutTheCodeLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#C9A8E8" />
      <path
        d="M8 10C8 8.89543 8.89543 8 10 8H14V24H10C8.89543 24 8 23.1046 8 22V10Z"
        fill="#0d0d0d"
      />
    </svg>
  );
}

// Webflow Logo Component
function WebflowLogo() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
      <path
        d="M17.802 4.956s-1.326 4.074-1.429 4.406c-.024-.39-.621-4.406-.621-4.406H12.3s-1.188 3.991-1.285 4.374c-.089-.391-.967-4.374-.967-4.374H6.6l2.443 7.088h3.522l1.107-3.478 1.073 3.478h3.522l2.533-7.088h-3z"
        fill="#fff"
      />
    </svg>
  );
}

// Marquee Component for Announcement Bar
function AnnouncementMarquee({ items }: { items: AnnouncementItem[] }) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden flex-1 mx-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="mx-6 text-xs text-gray-400">
            <span className={item.highlight ? "text-[#C9A8E8]" : ""}>
              {item.text}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Default Data
const defaultNavItems: NavItem[] = [
  { label: "Services", href: "#", hasDropdown: true },
  { label: "No-Code", href: "#" },
  { label: "Projects", href: "#" },
  { label: "About us", href: "#" },
  { label: "Contact", href: "#" },
];

const defaultAnnouncementItems: AnnouncementItem[] = [
  { text: "impactful and striking agency web experience" },
  { text: "Fama Volat", highlight: true },
  { text: "A platform for the education of the future" },
  { text: "Reducations", highlight: true },
  { text: "Next-level inspiration platform for Gen Z" },
  { text: "Sample", highlight: true },
];

const defaultClientLogos: ClientLogo[] = [
  {
    name: "SAMSUNG",
    logo: (
      <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400">
        SAMSUNG
      </span>
    ),
  },
  {
    name: "THE AVOCADO SHOW",
    logo: (
      <div className="text-center">
        <span className="text-[8px] tracking-wider text-gray-400 block">THE</span>
        <span className="text-[11px] font-bold tracking-wider text-gray-400">AVOCADO</span>
        <span className="text-[8px] tracking-wider text-gray-400 block">SHOW</span>
      </div>
    ),
  },
  {
    name: "MOVE",
    logo: (
      <span className="text-[14px] font-bold italic text-gray-400">
        MOVE
      </span>
    ),
  },
  {
    name: "Vacature Via",
    logo: (
      <span className="text-[12px] italic text-gray-400">
        vacature <span className="font-semibold">via</span>
      </span>
    ),
  },
  {
    name: "SKYBOX",
    logo: (
      <div className="border border-gray-500 px-1.5 py-0.5">
        <span className="text-[10px] font-bold tracking-wider text-gray-400">SKY</span>
        <span className="text-[10px] font-bold tracking-wider text-gray-400 block">BOX</span>
      </div>
    ),
  },
  {
    name: "BENEFITS",
    logo: (
      <div className="flex flex-col items-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="#9ca3af" strokeWidth="1" />
          <path d="M10 6v8M6 10h8" stroke="#9ca3af" strokeWidth="1" />
        </svg>
        <span className="text-[8px] tracking-wider text-gray-400 mt-0.5">BENEFITS</span>
      </div>
    ),
  },
];

// Main Component
export default function CutTheCodeHero({
  logoIcon,
  navItems = defaultNavItems,
  languageCode = "EN",
  announcementPrefix = "Now creating",
  announcementItems = defaultAnnouncementItems,
  tagline = "Leading No-Code & Webflow Agency",
  headline = "We enable rapid growth\nthrough digital creation",
  description = "Cut the Code is a leading no-code agency & Webflow\nPartner based in Amsterdam, The Netherlands.\nWe push our clients forward into tomorrow - and fast -\nby creating the next generation of web experiences.",
  partnerBadge = {
    icon: <WebflowLogo />,
    text: "Professional Partner",
  },
  ctaText = "Learn more",
  onCtaClick,
  clientLogos = defaultClientLogos,
  mockupImage,
}: CutTheCodeHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0d0d0d] overflow-hidden">
      {/* Announcement Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full border-b border-white/10 py-2.5 flex items-center"
      >
        <div className="flex items-center gap-2 pl-4 sm:pl-6 shrink-0">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="text-xs text-white font-medium">{announcementPrefix}</span>
        </div>
        <AnnouncementMarquee items={announcementItems} />
        <div className="pr-4 sm:pr-6 shrink-0">
          <button className="bg-white/10 hover:bg-white/20 transition-colors text-white text-xs px-3 py-1.5 rounded-full">
            {languageCode}
          </button>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4"
      >
        {/* Logo */}
        <div className="flex items-center">
          {logoIcon || <CutTheCodeLogo />}
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasDropdown && <Plus size={12} className="opacity-60" />}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A8E8]" />
          <span className="text-sm text-white font-medium">{tagline}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-instrument-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight whitespace-pre-line mb-6"
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base text-gray-400 leading-relaxed whitespace-pre-line max-w-lg mb-8"
        >
          {description}
        </motion.p>

        {/* Partner Badge & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          {/* Partner Badge */}
          <div className="flex items-center gap-2">
            {partnerBadge.icon}
            <span className="text-sm text-white font-medium">{partnerBadge.text}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center">
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowDown size={18} className="text-white" />
            </button>
            <button
              onClick={onCtaClick}
              className="bg-[#D4BDE8] hover:bg-[#C9A8E8] transition-colors text-[#0d0d0d] text-sm font-medium px-6 py-2.5 rounded-full ml-[-1px]"
            >
              {ctaText}
            </button>
          </div>
        </motion.div>

        {/* Device Mockup Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative"
        >
          {/* Decorative Shape */}
          <div className="absolute right-0 top-0 w-32 sm:w-48 lg:w-64 h-48 sm:h-64 lg:h-80">
            <svg viewBox="0 0 200 250" className="w-full h-full" fill="none">
              <path
                d="M200 0H60C26.8629 0 0 26.8629 0 60V250H200V0Z"
                fill="#D4BDE8"
              />
            </svg>
          </div>

          {/* Mockup Container */}
          <div className="relative z-10 flex items-end gap-4 sm:gap-6">
            {/* Laptop Mockup */}
            <div className="flex-1 max-w-4xl">
              <div className="bg-[#1a1a1a] rounded-t-lg overflow-hidden border border-[#2a2a2a]">
                {/* Laptop Screen */}
                <div className="aspect-[16/10] bg-gradient-to-br from-[#2a1f35] via-[#1a1a2e] to-[#0d0d1a] p-4 sm:p-6 relative">
                  {mockupImage ? (
                    <img
                      src={mockupImage}
                      alt="Website preview"
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <>
                      {/* Mock website content */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#C9A8E8]" />
                        <span className="text-[10px] text-white/60">WELCOME TO THE SHOW</span>
                      </div>

                      {/* Hero text */}
                      <div className="absolute top-1/3 left-4 sm:left-6">
                        <span className="text-white font-bold text-lg sm:text-2xl lg:text-3xl block">STUNNING</span>
                        <span className="text-white font-bold text-lg sm:text-2xl lg:text-3xl block">AND DELICIOUS</span>
                        <span className="text-white font-bold text-lg sm:text-2xl lg:text-3xl block">DISHES</span>
                      </div>

                      {/* Food images placeholder */}
                      <div className="absolute right-4 sm:right-8 top-1/4 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                          <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400" />
                        </div>
                      </div>

                      {/* Additional food element */}
                      <div className="absolute right-8 sm:right-16 bottom-8 sm:bottom-12 w-20 sm:w-28 lg:w-36 h-16 sm:h-20 lg:h-24">
                        <div className="w-full h-full rounded-lg bg-gradient-to-b from-amber-200 via-red-400 to-amber-300" />
                      </div>

                      {/* Fish decoration */}
                      <div className="absolute left-1/4 bottom-1/4 w-12 sm:w-16 h-8 sm:h-10">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-orange-400 opacity-60" />
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* Laptop Base */}
              <div className="h-3 sm:h-4 bg-[#2a2a2a] rounded-b-sm" />
              <div className="h-1 sm:h-1.5 bg-[#1a1a1a] mx-auto w-1/3 rounded-b-lg" />
            </div>

            {/* Tablet Mockup */}
            <div className="hidden sm:block w-24 lg:w-32">
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2a2a2a] aspect-[3/4]">
                <div className="w-full h-full bg-gradient-to-br from-[#2a1f35] to-[#1a1a2e] p-2">
                  <div className="w-full h-full rounded bg-[#0d0d0d]/50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 mt-4"
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              {client.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
