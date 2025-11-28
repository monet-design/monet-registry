"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TabContent {
  id: string;
  label: string;
  headline: string[];
  description: string;
}

interface FeatureTabsHeroProps {
  tabs?: TabContent[];
  defaultActiveTab?: string;
}

const defaultTabs: TabContent[] = [
  {
    id: "designers",
    label: "For Designers",
    headline: ["Work Faster. Work", "Better. Work", "Smarter."],
    description:
      "Straple lets designers focus on storytelling and problem solving, instead of production and maintenance. Providing you with all the tools you'll ever need to develop your own brand platforms, UI kits, and product designs.",
  },
  {
    id: "startups",
    label: "For Startups",
    headline: ["Scale Quickly.", "Build Boldly.", "Launch Faster."],
    description:
      "Straple empowers startups to move at lightning speed. From MVP to market launch, get the tools and workflows that help you iterate rapidly and stay ahead of the competition.",
  },
  {
    id: "agencies",
    label: "For Agencies",
    headline: ["Deliver More.", "Stress Less.", "Win Bigger."],
    description:
      "Straple gives agencies the power to handle multiple clients with ease. Streamline your workflows, maintain consistency across projects, and deliver exceptional results every time.",
  },
];

export default function FeatureTabsHero({
  tabs = defaultTabs,
  defaultActiveTab,
}: FeatureTabsHeroProps) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id || "designers"
  );

  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="w-full bg-[#2E2F33] px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Tab Navigation */}
        <nav className="mb-10 flex gap-6 sm:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-[#8A8B8F] hover:text-[#B0B1B5]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left: Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-headline"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
                {activeContent.headline.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Right: Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-description"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex items-start pt-1"
            >
              <p className="max-w-md text-sm leading-normal text-[#9A9B9F] sm:text-base">
                {activeContent.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
