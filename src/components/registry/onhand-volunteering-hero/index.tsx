"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FAD718",
    primary: "#0F372E",
    primaryHover: "#1a4d42",
    categoryGreen: "#A4D037",
    categoryOrange: "#FF6B35",
  },
  dark: {
    background: "#FAD718",
    primary: "#0F372E",
    primaryHover: "#1a4d42",
    categoryGreen: "#A4D037",
    categoryOrange: "#FF6B35",
  },
} as const;

const IMAGES = {
  cards: [
    {
      path: "/registry/onhand-volunteering-hero/litter-picking.jpg",
      alt: "Volunteers picking up litter",
      prompt: `Volunteers doing environmental cleanup, picking up litter in park.
Style: Candid photography, natural lighting, community engagement
Layout: Group of diverse volunteers with trash bags in outdoor setting
Composition: Active volunteers cleaning environment, wearing gloves
Color palette: Natural greens, earth tones, volunteer vests
Mood: Community spirit, environmental action, positive impact
Technical: Natural daylight, candid action shots`,
    },
    {
      path: "/registry/onhand-volunteering-hero/blood-donation.jpg",
      alt: "Blood donation volunteering",
      prompt: `Blood donation volunteer event scene.
Style: Healthcare setting photography, professional but warm
Layout: Donation center interior with volunteers and donors
Composition: Medical staff assisting donors in organized donation setup
Color palette: Medical whites, red cross symbols, warm lighting
Mood: Caring, life-saving, community health support
Technical: Indoor professional lighting, healthcare environment`,
    },
    {
      path: "/registry/onhand-volunteering-hero/food-donation.jpg",
      alt: "Food donation and distribution",
      prompt: `Volunteers organizing food donation and distribution.
Style: Documentary photography, community action
Layout: Food bank or distribution center with volunteers sorting
Composition: Volunteers packing or distributing food boxes
Color palette: Food boxes, organized shelving, diverse volunteers
Mood: Community support, food security, helping others
Technical: Indoor lighting, active volunteering scene`,
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface VolunteeringCard {
  category: string;
  categoryColor: string;
  title: string;
  image: string;
  author?: string;
  rotation: number;
  zIndex: number;
}

interface OnhandVolunteeringHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  navItems?: string[];
  cards?: VolunteeringCard[];
}

const defaultCards: VolunteeringCard[] = [
  {
    category: "ENVIRONMENT",
    categoryColor: COLORS.light.categoryGreen,
    title: "LITTER\nPICKED.\nWHAT\nNEXT?",
    image: IMAGES.cards[0].path,
    author: "Francisca H, Oak Catering Limited",
    rotation: -12,
    zIndex: 10,
  },
  {
    category: "DONATION",
    categoryColor: COLORS.light.categoryGreen,
    title: "GIVE\nBLOOD.\nALL THE\nLOVE.",
    image: IMAGES.cards[1].path,
    author: "Lisa B, MAPP Limited",
    rotation: 3,
    zIndex: 20,
  },
  {
    category: "POWER",
    categoryColor: COLORS.light.categoryOrange,
    title: "FOOD\nDROP\nNEVER\nSTOPS.",
    image: IMAGES.cards[2].path,
    author: "Holly J, Motability Operations Ltd",
    rotation: 10,
    zIndex: 10,
  },
];

const defaultNavItems = ["Product", "Resources", "Sign in", "Make a Referral"];

function SmallCard({
  card,
  style,
  colors,
}: {
  card: VolunteeringCard;
  style?: React.CSSProperties;
  colors: typeof COLORS.light;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: card.rotation }}
      animate={{ opacity: 1, y: 0, rotate: card.rotation }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute w-[180px] overflow-hidden rounded-xl bg-white shadow-xl"
      style={{ ...style, zIndex: card.zIndex }}
    >
      <div className="p-3">
        <span
          className="inline-block rounded-full px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider"
          style={{
            backgroundColor: card.categoryColor,
            color: colors.primary,
          }}
        >
          {card.category}
        </span>
        <h3 className="mt-2 text-sm font-bold leading-tight" style={{ color: colors.primary }}>
          {card.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < card.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h3>
        <div className="mt-2 h-[70px] w-full overflow-hidden rounded-lg">
          <Image
            src={card.image}
            alt={card.title.replace(/\n/g, " ")}
            width={180}
            height={70}
            className="h-full w-full object-cover"
          />
        </div>
        {card.author && (
          <p className="mt-2 text-[7px]" style={{ color: `${colors.primary}99` }}>{card.author}</p>
        )}
      </div>
    </motion.div>
  );
}

function MainCard({ card, colors }: { card: VolunteeringCard; colors: typeof COLORS.light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: card.rotation }}
      animate={{ opacity: 1, y: 0, rotate: card.rotation }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="absolute w-[340px] overflow-hidden rounded-2xl shadow-2xl"
      style={{ backgroundColor: colors.primary, zIndex: card.zIndex, top: "80px", right: "-20px" }}
    >
      <div className="relative flex min-h-[200px]">
        {/* Left content */}
        <div className="flex-1 p-5 pr-[100px]">
          <span
            className="inline-block rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: card.categoryColor,
              color: colors.primary,
            }}
          >
            {card.category}
          </span>
          <h3 className="mt-3 text-[22px] font-bold leading-[1.1] text-white">
            {card.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < card.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h3>
          {card.author && (
            <p className="mt-4 text-[10px] text-white/60">{card.author}</p>
          )}
        </div>

        {/* Right circular image */}
        <div
          className="absolute -right-[60px] top-1/2 h-[180px] w-[180px] -translate-y-1/2 overflow-hidden rounded-full border-4"
          style={{ borderColor: colors.primary }}
        >
          <Image
            src={card.image}
            alt={card.title.replace(/\n/g, " ")}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function OnhandVolunteeringHero({
  mode = "light",
  logoText = "On Hand",
  headline = "Corporate\nvolunteering that\nemployees love.",
  subheadline = "Your all-in-one tool for corporate volunteering &\nsustainability action.",
  ctaText = "Request a demo",
  onCtaClick,
  navItems = defaultNavItems,
  cards = defaultCards,
}: OnhandVolunteeringHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-[600px] w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Navigation */}
      <nav className="relative z-30 flex items-center justify-between px-8 py-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-xl font-bold italic" style={{ color: colors.primary }}>
            {logoText}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center gap-6 md:flex lg:gap-8"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: colors.primary }}
            >
              {item}
            </a>
          ))}
          <button
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors.primary }}
          >
            {ctaText}
          </button>
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-start justify-between px-8 pb-16 pt-8 lg:px-12 lg:pb-24 lg:pt-12">
        {/* Left Content */}
        <div className="max-w-[480px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[44px] font-bold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[60px]"
            style={{ color: colors.primary }}
          >
            {headline.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 text-[15px] leading-relaxed lg:text-base"
            style={{ color: `${colors.primary}bf` }}
          >
            {subheadline.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < subheadline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10"
          >
            <button
              onClick={onCtaClick}
              className="rounded-full px-7 py-4 text-[15px] font-medium text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
              style={{ backgroundColor: colors.primary }}
            >
              {ctaText}
            </button>
          </motion.div>
        </div>

        {/* Right Content - Card Collage */}
        <div className="relative hidden h-[480px] w-[420px] lg:block">
          {/* Top small card (Environment/Litter) */}
          <SmallCard
            card={cards[0]}
            style={{ top: "-30px", right: "80px" }}
            colors={colors}
          />

          {/* Main card (Donation/Blood) */}
          <MainCard card={cards[1]} colors={colors} />

          {/* Bottom small card (Food Drop) */}
          <SmallCard
            card={cards[2]}
            style={{ bottom: "-20px", right: "40px" }}
            colors={colors}
          />
        </div>
      </div>
    </section>
  );
}
