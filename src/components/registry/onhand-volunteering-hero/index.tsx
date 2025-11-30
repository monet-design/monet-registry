"use client";

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
    categoryColor: "#A4D037",
    title: "LITTER\nPICKED.\nWHAT\nNEXT?",
    image: "/registry/onhand-volunteering-hero/litter-picking.jpg",
    author: "Francisca H, Oak Catering Limited",
    rotation: -12,
    zIndex: 10,
  },
  {
    category: "DONATION",
    categoryColor: "#A4D037",
    title: "GIVE\nBLOOD.\nALL THE\nLOVE.",
    image: "/registry/onhand-volunteering-hero/blood-donation.jpg",
    author: "Lisa B, MAPP Limited",
    rotation: 3,
    zIndex: 20,
  },
  {
    category: "POWER",
    categoryColor: "#FF6B35",
    title: "FOOD\nDROP\nNEVER\nSTOPS.",
    image: "/registry/onhand-volunteering-hero/food-donation.jpg",
    author: "Holly J, Motability Operations Ltd",
    rotation: 10,
    zIndex: 10,
  },
];

const defaultNavItems = ["Product", "Resources", "Sign in", "Make a Referral"];

function SmallCard({
  card,
  style,
}: {
  card: VolunteeringCard;
  style?: React.CSSProperties;
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
            color: "#0F372E",
          }}
        >
          {card.category}
        </span>
        <h3 className="mt-2 text-sm font-bold leading-tight text-[#0F372E]">
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
          <p className="mt-2 text-[7px] text-[#0F372E]/60">{card.author}</p>
        )}
      </div>
    </motion.div>
  );
}

function MainCard({ card }: { card: VolunteeringCard }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: card.rotation }}
      animate={{ opacity: 1, y: 0, rotate: card.rotation }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="absolute w-[340px] overflow-hidden rounded-2xl bg-[#0F372E] shadow-2xl"
      style={{ zIndex: card.zIndex, top: "80px", right: "-20px" }}
    >
      <div className="relative flex min-h-[200px]">
        {/* Left content */}
        <div className="flex-1 p-5 pr-[100px]">
          <span
            className="inline-block rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: card.categoryColor,
              color: "#0F372E",
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
        <div className="absolute -right-[60px] top-1/2 h-[180px] w-[180px] -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#0F372E]">
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
  logoText = "On Hand",
  headline = "Corporate\nvolunteering that\nemployees love.",
  subheadline = "Your all-in-one tool for corporate volunteering &\nsustainability action.",
  ctaText = "Request a demo",
  onCtaClick,
  navItems = defaultNavItems,
  cards = defaultCards,
}: OnhandVolunteeringHeroProps) {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#FAD718]">
      {/* Navigation */}
      <nav className="relative z-30 flex items-center justify-between px-8 py-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-xl font-bold italic text-[#0F372E]">
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
              className="text-sm font-medium text-[#0F372E] transition-opacity hover:opacity-70"
            >
              {item}
            </a>
          ))}
          <button className="rounded-full bg-[#0F372E] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
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
            className="text-[44px] font-bold leading-[1.05] tracking-tight text-[#0F372E] sm:text-[52px] lg:text-[60px]"
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
            className="mt-6 text-[15px] leading-relaxed text-[#0F372E]/75 lg:text-base"
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
              className="rounded-full bg-[#0F372E] px-7 py-4 text-[15px] font-medium text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
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
          />

          {/* Main card (Donation/Blood) */}
          <MainCard card={cards[1]} />

          {/* Bottom small card (Food Drop) */}
          <SmallCard
            card={cards[2]}
            style={{ bottom: "-20px", right: "40px" }}
          />
        </div>
      </div>
    </section>
  );
}
