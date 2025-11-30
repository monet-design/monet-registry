"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Triangle, Circle, Square } from "lucide-react";
import Image from "next/image";

interface TabItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  subtitle: string;
  sectionTitle: string;
  sectionDescription: string;
}

interface HeroRealtimeCollabTabsProps {
  badge?: string;
  headline?: string;
  logoSrc?: string;
  tabs?: TabItem[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const StorageIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="8" r="2" />
    <circle cx="16" cy="8" r="2" />
    <circle cx="8" cy="16" r="2" />
    <circle cx="16" cy="16" r="2" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="16" y1="10" x2="16" y2="14" />
    <line x1="10" y1="8" x2="14" y2="8" />
    <line x1="10" y1="16" x2="14" y2="16" />
  </svg>
);

const YjsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M6 6l6 8v6" />
    <path d="M18 6l-6 8" />
    <text
      x="19"
      y="20"
      fontSize="8"
      fill="currentColor"
      stroke="none"
      fontFamily="sans-serif"
    >
      js
    </text>
  </svg>
);

const defaultTabs: TabItem[] = [
  {
    id: "storage",
    icon: <StorageIcon />,
    label: "Liveblocks Storage",
    subtitle: "Sync engine for creative tools",
    sectionTitle: "Sync engine for\nmultiplayer creative tools",
    sectionDescription:
      "Liveblocks Storage is a realtime sync engine designed for multiplayer creative tools such as Figma, Pitch, and Spline.",
  },
  {
    id: "yjs",
    icon: <YjsIcon />,
    label: "Liveblocks Yjs",
    subtitle: "Sync engine for text editors",
    sectionTitle: "Sync engine for\nmultiplayer text editors",
    sectionDescription:
      "Liveblocks Yjs is a realtime sync engine designed for multiplayer text editors such as Notion, Coda, and Linear.",
  },
];

export default function HeroRealtimeCollabTabs({
  badge = "REALTIME APIS",
  headline = "Build any realtime\ncollaborative experience",
  logoSrc = "/registry/hero-realtime-collab-tabs/logo-icon.png",
  tabs = defaultTabs,
  primaryButtonText = "Sign up for free",
  secondaryButtonText = "Read the docs",
  onPrimaryClick,
  onSecondaryClick,
}: HeroRealtimeCollabTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "storage");

  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="w-full">
      {/* Top White Section */}
      <div className="bg-white px-6 pb-16 pt-24 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Image
              src={logoSrc}
              alt="Logo"
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
            />
          </motion.div>

          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-xs font-medium tracking-[0.2em] text-[#AC1447]"
          >
            {badge}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl"
          >
            {headline.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-8 sm:gap-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="group flex flex-col items-center gap-2"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg border transition-colors ${
                    activeTab === tab.id
                      ? "border-gray-300 bg-white text-black"
                      : "border-gray-200 bg-gray-50 text-gray-500"
                  }`}
                >
                  {tab.icon}
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className={`text-sm font-medium transition-colors ${
                      activeTab === tab.id ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`text-xs transition-colors ${
                      activeTab === tab.id ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {tab.subtitle}
                  </span>
                </div>
                {/* Underline indicator */}
                <div className="relative mt-2 h-[2px] w-full">
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tabUnderline"
                      className="absolute inset-0 bg-black"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="relative overflow-hidden bg-black px-6 py-24 sm:px-8 md:px-12 lg:px-16">
        {/* Background Geometric Shapes */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-80 w-80">
            {/* Triangle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2"
            >
              <Triangle
                className="h-24 w-24 text-gray-600"
                strokeWidth={1}
                fill="none"
              />
            </motion.div>

            {/* Circle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-0"
            >
              <Circle
                className="h-20 w-20 text-gray-600"
                strokeWidth={1}
                fill="none"
              />
            </motion.div>

            {/* Square */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-0 right-0"
            >
              <Square
                className="h-20 w-20 text-gray-600"
                strokeWidth={1}
                fill="none"
              />
            </motion.div>

            {/* Red Glow */}
            <div className="absolute bottom-4 right-8 h-32 w-32 rounded-full bg-red-600/30 blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Section Title */}
              <h2 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                {activeContent.sectionTitle.split("\n").map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              {/* Section Description */}
              <p className="mb-10 max-w-xl text-base text-gray-400 sm:text-lg">
                {activeContent.sectionDescription}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onPrimaryClick}
              className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100"
            >
              {primaryButtonText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onSecondaryClick}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:text-gray-300"
            >
              {secondaryButtonText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
