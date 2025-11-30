"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

// Types
interface CustomerCard {
  id: string;
  tags: string[];
  quote?: string;
  logo: {
    text: string;
    icon?: React.ReactNode;
  };
  variant: "dark" | "yellow" | "blue";
}

interface CanopyCustomersHeroProps {
  headline?: string;
  customers?: CustomerCard[];
}

// Default customer data
const defaultCustomers: CustomerCard[] = [
  {
    id: "novo",
    tags: ["Commercial", "Multiloan"],
    logo: {
      text: "novo",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      ),
    },
    variant: "dark",
  },
  {
    id: "flexport",
    tags: ["Commercial", "Invoice Factoring"],
    quote:
      "Canopy allows you to re-simulate all of the accounts that we have to produce historical data and get real granular access to the data across all of our products to report more effectively.",
    logo: {
      text: "flexport.",
    },
    variant: "yellow",
  },
  {
    id: "tandym",
    tags: ["Commercial", "Installment"],
    logo: {
      text: "tandym",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      ),
    },
    variant: "blue",
  },
];

// Tag Component
function Tag({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark" | "blue";
}) {
  const variantStyles = {
    light: "bg-white/90 text-gray-900",
    dark: "bg-white/15 text-white border border-white/20",
    blue: "bg-white/20 text-white border border-white/30",
  };

  return (
    <span
      className={`px-3 py-1.5 rounded-full text-xs font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}

// Architectural Pillars Background for Yellow Card
function ArchitecturalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Yellow gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F05A] via-[#E5ED58] to-[#D4E048]" />

      {/* Architectural pillars pattern */}
      <div className="absolute bottom-0 left-0 right-1/2 top-1/4 flex">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex-1 mx-0.5"
            style={{
              background:
                i % 2 === 0
                  ? "linear-gradient(180deg, #E8F05A 0%, #F0F5D8 30%, #FAFBF0 100%)"
                  : "linear-gradient(180deg, #BCC43A 0%, #D8DD88 50%, #E8EAC8 100%)",
              borderRadius: "2px 2px 0 0",
              transform: `perspective(500px) rotateY(${i < 4 ? -15 : 15}deg)`,
              transformOrigin: i < 4 ? "right center" : "left center",
            }}
          />
        ))}
      </div>

      {/* Diagonal shadow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.1) 100%)",
        }}
      />
    </div>
  );
}

// Customer Card Component
function CustomerCardComponent({
  card,
  index,
}: {
  card: CustomerCard;
  index: number;
}) {
  const baseClasses =
    "relative w-full max-w-[340px] min-h-[360px] rounded-2xl overflow-hidden flex flex-col";

  const variantStyles = {
    dark: "bg-[#1a1a1a]",
    yellow: "",
    blue: "bg-gradient-to-br from-[#5B9DFF] to-[#3366FF]",
  };

  const getTagVariant = (variant: string) => {
    if (variant === "dark") return "dark";
    if (variant === "blue") return "blue";
    return "light";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className={`${baseClasses} ${variantStyles[card.variant]}`}
    >
      {/* Background for Yellow card */}
      {card.variant === "yellow" && <ArchitecturalBackground />}

      {/* Tags */}
      <div className="relative z-10 p-5 flex gap-2">
        {card.tags.map((tag) => (
          <Tag key={tag} variant={getTagVariant(card.variant)}>
            {tag}
          </Tag>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        {/* Quote Section (for Flexport card) */}
        {card.quote && (
          <div className="mx-4 mb-4 bg-gradient-to-b from-[#F5F8C7] to-white rounded-xl p-5 shadow-sm">
            <div className="text-[#1a1a1a]/40 text-3xl font-serif leading-none mb-2">
              "
            </div>
            <p className="text-[#1a1a1a] text-[13px] leading-relaxed">
              {card.quote}
            </p>
          </div>
        )}

        {/* Logo Footer */}
        <div
          className={`p-5 flex items-center justify-between ${card.quote ? "" : "mt-auto"}`}
        >
          <div
            className={`flex items-center gap-2 ${card.variant === "dark" ? "text-white" : card.variant === "blue" ? "text-white" : "text-[#1a1a1a]"}`}
          >
            {card.logo.icon}
            <span className="font-semibold text-lg tracking-tight">
              {card.logo.text}
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              card.variant === "dark"
                ? "bg-white/10 text-white hover:bg-white/20"
                : card.variant === "blue"
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-black/5 text-black hover:bg-black/10"
            }`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Decorative Graphics - Left side (circle with plus)
function LeftDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute left-8 lg:left-20 top-[30%]"
    >
      <div className="relative w-28 h-28">
        {/* Circle outline */}
        <div className="absolute inset-0 border-2 border-[#E0E4E8] rounded-full" />
        {/* Plus icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="text-[#C8D0D8]"
          >
            <path
              d="M18 6V30M6 18H30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// Decorative Graphics - Right side (rectangle with asterisk)
function RightDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute right-8 lg:right-20 top-[18%]"
    >
      <div className="relative">
        {/* Rectangle with rounded corners and line above */}
        <div className="relative">
          <div className="absolute -top-3 left-0 right-4 h-0.5 bg-[#E0E4E8] rounded-full" />
          <div className="w-20 h-14 border-2 border-[#E0E4E8] rounded-xl" />
        </div>
        {/* Rotated X/asterisk - 4 pointed star */}
        <div className="absolute -bottom-8 -right-2">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            className="text-[#1a1a1a]"
          >
            <path
              d="M22 6V38M6 22H38M10 10L34 34M34 10L10 34"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function CanopyCustomersHero({
  headline = "Join the companies offering\nnext-gen commercial lending.",
  customers = defaultCustomers,
}: CanopyCustomersHeroProps) {
  // Load Instrument Serif font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-16 lg:py-24">
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden lg:block">
        <LeftDecoration />
        <RightDecoration />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] whitespace-pre-line leading-[1.15]"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {headline}
          </h1>
        </motion.div>

        {/* Customer Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-5">
          {customers.map((customer, index) => (
            <CustomerCardComponent
              key={customer.id}
              card={customer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
