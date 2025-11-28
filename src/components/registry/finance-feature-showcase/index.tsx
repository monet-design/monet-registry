"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import "./font.css";

// Types
interface TabItem {
  id: string;
  label: string;
}

interface Section {
  id: string;
  title: string;
  tabs: TabItem[];
  defaultTab: string;
}

interface TransactionItem {
  name: string;
  tag: string;
  tagColor: string;
  amount: string;
}

interface FinanceFeatureShowcaseProps {
  sections?: Section[];
}

// Tab Button Component
function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: TabItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${
        isActive
          ? "bg-[#1a2432] text-white"
          : "text-slate-400 hover:text-slate-300"
      }`}
    >
      {tab.label}
    </button>
  );
}

// Bank Logo Card Component
function BankLogoCard() {
  const banks = [
    { name: "CHASE", logo: "CHASE" },
    { name: "BANK OF AMERICA", logo: "Bank of America" },
    { name: "Capital One", logo: "Capital One" },
    { name: "AMERICAN EXPRESS", logo: "AMEX" },
    { name: "WELLS FARGO", logo: "Wells Fargo" },
    { name: "Citi", logo: "citi" },
    { name: "Apple Card", logo: "Apple Card" },
    { name: "Venmo", logo: "venmo" },
    { name: "10,000+ more", logo: "" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-[#0f1923] p-4 shadow-xl"
    >
      <div className="grid grid-cols-3 gap-2">
        {banks.map((bank, index) => (
          <motion.div
            key={bank.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex h-12 items-center justify-center rounded-lg bg-white px-2 text-center"
          >
            {bank.logo ? (
              <span className="text-[10px] font-semibold text-slate-800 leading-tight">
                {bank.logo}
              </span>
            ) : (
              <span className="text-[9px] font-medium text-emerald-600">
                10,000+
                <br />
                more
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Transaction Card Component
function TransactionCard() {
  const transactions: TransactionItem[] = [
    { name: "Shell", tag: "CAR", tagColor: "bg-orange-500", amount: "$23.98" },
    {
      name: "Trader Joe's",
      tag: "GROCERIES",
      tagColor: "bg-emerald-500",
      amount: "$56.42",
    },
    {
      name: "Men's Lightweight Fren...",
      tag: "CLOTHING",
      tagColor: "bg-yellow-500",
      amount: "$34.90",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 rounded-xl bg-[#0f1923] p-4 shadow-xl"
    >
      <div className="mb-3 text-xs text-slate-400">Today</div>
      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <motion.div
            key={tx.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-white truncate max-w-[100px]">
                {tx.name}
              </span>
              <span
                className={`${tx.tagColor} rounded px-1.5 py-0.5 text-[8px] font-semibold text-white`}
              >
                {tx.tag}
              </span>
            </div>
            <span className="text-xs font-medium text-white">{tx.amount}</span>
          </motion.div>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="mt-4 w-full text-center text-xs font-medium text-sky-400"
      >
        MARK AS REVIEWED
      </motion.button>
    </motion.div>
  );
}

// Net Worth Chart Component
function NetWorthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-72 rounded-xl bg-[#0f1923] p-5 shadow-xl"
    >
      <div className="mb-4 flex justify-between">
        <div>
          <div className="text-xl font-semibold text-white">$34,626</div>
          <div className="text-[10px] text-slate-400">in assets</div>
        </div>
        <div>
          <div className="text-xl font-semibold text-white">$378</div>
          <div className="text-[10px] text-slate-400">in debt</div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-24 w-full">
        <svg viewBox="0 0 200 80" className="h-full w-full">
          {/* Grid lines */}
          <line
            x1="0"
            y1="60"
            x2="200"
            y2="60"
            stroke="#1a2432"
            strokeWidth="1"
          />

          {/* Blue area fill */}
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 10 55 Q 40 50 70 45 T 130 35 T 190 25 L 190 60 L 10 60 Z"
            fill="url(#blueGradient)"
          />
          <path
            d="M 10 55 Q 40 50 70 45 T 130 35 T 190 25"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
          />

          {/* Dotted line at bottom */}
          <line
            x1="10"
            y1="58"
            x2="190"
            y2="58"
            stroke="#475569"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        </svg>
      </div>

      {/* Time range buttons */}
      <div className="mt-3 flex justify-between text-[10px]">
        <span className="text-slate-500">1W</span>
        <span className="text-slate-500">1M</span>
        <span className="rounded bg-sky-500/20 px-2 py-0.5 text-sky-400">
          6M
        </span>
        <span className="text-slate-500">1Y</span>
      </div>
    </motion.div>
  );
}

// Section Content Renderer
function SectionContent({
  sectionId,
  activeTab,
}: {
  sectionId: string;
  activeTab: string;
}) {
  if (sectionId === "banking") {
    return (
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-6 md:items-start">
          <BankLogoCard />
          <div className="relative h-40 w-64">
            <Image
              src="/registry/finance-feature-showcase/sofa-scene.png"
              alt="Relaxing illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-xs text-center text-sm leading-relaxed text-slate-300 md:text-left"
        >
          Your finances deserve a
          <br />
          better home. See them all in
          <br />
          high-definition.
        </motion.p>
      </div>
    );
  }

  if (sectionId === "spending") {
    return (
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-xs text-center text-sm leading-relaxed text-slate-300 md:text-left"
        >
          Review your recent
          <br />
          spending, check on that
          <br />
          refund, and see what&apos;s
          <br />
          coming up.
        </motion.p>
        <div className="flex flex-col items-center gap-4">
          <TransactionCard />
          <div className="relative h-32 w-72">
            <Image
              src="/registry/finance-feature-showcase/photos-scene.png"
              alt="Photos illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  if (sectionId === "insights") {
    return (
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-4">
          <NetWorthChart />
          <div className="relative h-32 w-56">
            <Image
              src="/registry/finance-feature-showcase/cloud-scene.png"
              alt="Cloud illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-xs text-center text-sm leading-relaxed text-slate-300 md:text-left"
        >
          Keep tabs on your net worth
          <br />
          with consolidated views of
          <br />
          your accounts and
          <br />
          investments.
        </motion.p>
      </div>
    );
  }

  return null;
}

// Default sections data
const defaultSections: Section[] = [
  {
    id: "banking",
    title: "Integrated with your banks\nand favorite services",
    tabs: [
      { id: "all-in-one", label: "All-in-one" },
      { id: "venmo", label: "Venmo" },
      { id: "crypto", label: "Crypto" },
      { id: "apple-card", label: "Apple Card" },
    ],
    defaultTab: "all-in-one",
  },
  {
    id: "spending",
    title: "Track your spending and boost\nyour savings",
    tabs: [
      { id: "daily-snapshot", label: "Daily snapshot" },
      { id: "smart-categorization", label: "Smart categorization" },
      { id: "rollovers", label: "Rollovers" },
      { id: "recurring-payments", label: "Recurring payments" },
    ],
    defaultTab: "daily-snapshot",
  },
  {
    id: "insights",
    title: "Cut through the noise with\ninsights you can actually use",
    tabs: [
      { id: "net-worth", label: "Net worth" },
      { id: "cash-flow", label: "Cash flow" },
      { id: "investments", label: "Investments" },
    ],
    defaultTab: "net-worth",
  },
];

// Feature Section Component
function FeatureSection({ section }: { section: Section }) {
  const [activeTab, setActiveTab] = useState(section.defaultTab);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="py-16"
    >
      {/* Title */}
      <h2 className="font-instrument-serif mb-6 text-center text-3xl font-normal tracking-tight text-white sm:text-4xl whitespace-pre-line">
        {section.title}
      </h2>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {section.tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-3xl px-4"
        >
          <SectionContent sectionId={section.id} activeTab={activeTab} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// Main Component
export default function FinanceFeatureShowcase({
  sections = defaultSections,
}: FinanceFeatureShowcaseProps) {
  return (
    <section className="w-full bg-[#010A13] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {sections.map((section) => (
          <FeatureSection key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}
