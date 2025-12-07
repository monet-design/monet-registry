"use client";

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#E55A2B",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#E55A2B",
  },
} as const;

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CodeRabbitLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
    <path d="M10 14C10 12.8954 10.8954 12 12 12H20C21.1046 12 22 12.8954 22 14V20C22 21.1046 21.1046 22 20 22H12C10.8954 22 10 21.1046 10 20V14Z" fill="currentColor" />
    <circle cx="13" cy="16" r="1.5" fill="black" />
    <circle cx="19" cy="16" r="1.5" fill="black" />
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CoderabbitAiHeader0Props {
  mode?: "light" | "dark";
}

export default function CoderabbitAiHeader0({
  mode = "dark",
}: CoderabbitAiHeader0Props) {
  const colors = COLORS[mode];
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "Customers", href: "#customers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  const resourcesItems = [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Changelog", href: "#changelog" },
    { label: "Status", href: "#status" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white">
          <CodeRabbitLogo />
          <span className="text-lg font-semibold">CodeRabbit</span>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex">
          <div className="flex items-center gap-1 rounded-full bg-zinc-900 px-2 py-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                Resources
                <ChevronDown />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-zinc-900 py-2 shadow-xl"
                  >
                    {resourcesItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#login"
            className="hidden text-sm text-zinc-300 transition-colors hover:text-white sm:block"
          >
            Log In
          </a>
          <a
            href="#trial"
            className="flex items-center gap-2 rounded-full border border-[#FF6B35] px-5 py-2 text-sm font-medium text-[#FF6B35] transition-colors hover:bg-[#FF6B35] hover:text-white"
          >
            Get a free trial
            <ArrowRight />
          </a>
        </div>
      </div>
    </header>
  );
}
