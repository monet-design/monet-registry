"use client";

import { motion } from "motion/react";
import {
  HelpCircle,
  FileText,
  Activity,
  ArrowRight,
} from "lucide-react";

// Types
interface TagItem {
  label: string;
  href?: string;
}

interface SupportCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href?: string;
}

interface CodesandboxSupportHeroProps {
  brandName?: string;
  pageTitle?: string;
  headline?: string;
  tags?: TagItem[];
  cards?: SupportCard[];
  onTagClick?: (tag: string) => void;
  onCardClick?: (card: string) => void;
}

// Default tags data
const defaultTags: TagItem[] = [
  { label: "Your First Repository" },
  { label: "Creating a Sandbox" },
  { label: "Workspaces" },
  { label: "DevTools" },
  { label: "Docker Integration" },
  { label: "Environment variables" },
  { label: "VS Code Integration" },
  { label: "iOS" },
  { label: "GitHub App" },
  { label: "Team and Access" },
  { label: "Plans and Billing" },
];

// Default cards data
const defaultCards: SupportCard[] = [
  {
    icon: <HelpCircle size={32} strokeWidth={1.5} />,
    title: "FAQ",
    description: "Find answers to common questions.",
    linkText: "Open FAQ",
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: "Docs",
    description: "Learn more about CodeSandbox.",
    linkText: "Go to documentation",
  },
  {
    icon: <Activity size={32} strokeWidth={1.5} />,
    title: "System Status",
    description: "Check the status of our services.",
    linkText: "Access now",
  },
];

// Tag Component
function Tag({
  label,
  index,
  onClick,
}: {
  label: string;
  index: number;
  onClick?: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.03, duration: 0.4 }}
      onClick={onClick}
      className="rounded-full border border-[#3a3a3a] bg-transparent px-4 py-2 text-sm text-[#a0a0a0] transition-all hover:border-[#555] hover:bg-[#2a2a2a] hover:text-white"
    >
      {label}
    </motion.button>
  );
}

// Support Card Component
function SupportCardComponent({
  card,
  index,
  onClick,
}: {
  card: SupportCard;
  index: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col rounded-2xl bg-[#1c1c1c] p-8 transition-all hover:bg-[#222]"
    >
      {/* Icon */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#2a2a2a] text-[#888]">
        {card.icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-semibold text-white">{card.title}</h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-lg leading-relaxed text-[#888]">
        {card.description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-[#d4ff00] transition-all group-hover:gap-3">
        <span className="text-base font-medium">{card.linkText}</span>
        <ArrowRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}

// Main Component
export default function CodesandboxSupportHero({
  brandName = "CodeSandbox",
  pageTitle = "Support",
  headline = "Find the help\nyou need.",
  tags = defaultTags,
  cards = defaultCards,
  onTagClick,
  onCardClick,
}: CodesandboxSupportHeroProps) {
  return (
    <section className="relative w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <span className="text-lg text-white sm:text-xl">
            <span className="font-semibold">{brandName}</span>{" "}
            <span className="font-normal text-[#888]">{pageTitle}</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 text-center text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mb-16 flex max-w-4xl flex-wrap justify-center gap-3"
        >
          {tags.map((tag, index) => (
            <Tag
              key={tag.label}
              label={tag.label}
              index={index}
              onClick={() => onTagClick?.(tag.label)}
            />
          ))}
        </motion.div>

        {/* Support Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <SupportCardComponent
              key={card.title}
              card={card}
              index={index}
              onClick={() => onCardClick?.(card.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
