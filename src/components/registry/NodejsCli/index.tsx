"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Award, Star, Mic, Pencil } from "lucide-react";
import "./font.css";

interface TextItem {
  type: "text" | "link" | "icon";
  content?: string;
  href?: string;
  underline?: boolean;
  icon?: "award" | "star" | "mic" | "pencil" | "node" | "heart";
}

interface NodejsCliProps {
  sectionTitle?: string;
  name?: string;
  profileImage?: string;
  taglineItems?: TextItem[];
  highlightItems?: TextItem[];
  credentialsItems?: TextItem[];
}

function DecorativeDots() {
  const dots = [
    { top: 20, right: 10 },
    { top: 36, right: 26 },
    { top: 52, right: 6 },
    { top: 68, right: 34 },
    { top: 84, right: 18 },
    { top: 100, right: 42 },
    { top: 116, right: 2 },
    { top: 132, right: 30 },
    { top: 148, right: 22 },
    { top: 164, right: 46 },
    { top: 180, right: -2 },
    { top: 196, right: 38 },
    { top: 212, right: 14 },
    { top: 228, right: 50 },
  ];

  return (
    <div className="absolute top-0 right-0 w-20 h-64 pointer-events-none hidden sm:block">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#508A3D]"
          style={{ top: dot.top, right: dot.right }}
        />
      ))}
    </div>
  );
}

function NodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`inline-block ${className}`}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.23.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zM12 4.14l5.56 3.21L12 10.57 6.44 7.35 12 4.14z" />
    </svg>
  );
}

function renderIcon(icon: string) {
  const iconClass = "inline-block w-3.5 h-3.5 mr-0.5 align-text-bottom";
  switch (icon) {
    case "award":
      return <Award className={iconClass} />;
    case "star":
      return <Star className={iconClass} />;
    case "mic":
      return <Mic className={iconClass} />;
    case "pencil":
      return <Pencil className={iconClass} />;
    case "node":
      return <NodeIcon className={iconClass} />;
    case "heart":
      return (
        <span className="inline-block mr-0.5" role="img" aria-label="heart">
          ❤️
        </span>
      );
    default:
      return null;
  }
}

function TextWithItems({
  items,
  className = "",
}: {
  items: TextItem[];
  className?: string;
}) {
  return (
    <span className={className}>
      {items.map((item, index) => {
        if (item.type === "icon" && item.icon) {
          return <span key={index}>{renderIcon(item.icon)}</span>;
        }
        if (item.type === "text") {
          return <span key={index}>{item.content}</span>;
        }
        if (item.type === "link") {
          return (
            <a
              key={index}
              href={item.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[#508A3D] hover:opacity-70 transition-opacity ${
                item.underline !== false
                  ? "underline decoration-1 underline-offset-2"
                  : ""
              }`}
            >
              {item.content}
            </a>
          );
        }
        return null;
      })}
    </span>
  );
}

export default function NodejsCli({
  sectionTitle = "Who's behind this?",
  name = "Ahmad Awais",
  profileImage = "https://picsum.photos/seed/developer42/200/200",
  taglineItems = [
    { type: "icon", icon: "award" },
    { type: "text", content: "Award-winning " },
    { type: "link", content: "GitHub Star", href: "https://github.com", underline: true },
    { type: "text", content: " #OpenSourcerer " },
    { type: "icon", icon: "heart" },
    { type: "text", content: " " },
    { type: "link", content: "Google Devs Expert", href: "https://developers.google.com", underline: false },
    { type: "text", content: " Web DevRel\n" },
    { type: "icon", icon: "node" },
    { type: "text", content: " " },
    { type: "link", content: "Node.js", href: "https://nodejs.org", underline: false },
    { type: "text", content: " (top-level) Community Committee Voting Member " },
    { type: "icon", icon: "star" },
    { type: "text", content: " Author of various\n" },
    { type: "link", content: "open-source dev-tools and software libraries", href: "https://github.com", underline: true },
    { type: "text", content: " used by millions of developers\nworldwide (inc. engineers at Google, Netflix, AWS, Microsoft, Intel)." },
  ],
  highlightItems = [
    { type: "text", content: "Awais has been listed as " },
    { type: "link", content: "#1 JavaScript Trending Developer", href: "#", underline: true },
    { type: "text", content: " worldwide by GitHub.\nCheck out his work on " },
    { type: "link", content: "corona-cli", href: "https://github.com", underline: true },
    { type: "text", content: ", " },
    { type: "link", content: "Shades of Purple theme", href: "https://github.com", underline: true },
    { type: "text", content: ", " },
    { type: "link", content: "wp-continuous-\ndeployment", href: "https://github.com", underline: true },
    { type: "text", content: ", " },
    { type: "link", content: "cgb", href: "https://github.com", underline: true },
    { type: "text", content: ", " },
    { type: "link", content: "Emoji Log", href: "https://github.com", underline: true },
    { type: "text", content: ", and many more " },
    { type: "link", content: "open-source projects", href: "https://github.com", underline: true },
    { type: "text", content: " on GitHub." },
  ],
  credentialsItems = [
    { type: "icon", icon: "mic" },
    { type: "text", content: " " },
    { type: "link", content: "TEDx Speaker", href: "#", underline: false },
    { type: "text", content: " & " },
    { type: "icon", icon: "star" },
    { type: "text", content: " Regular WordPress Core Developer " },
    { type: "icon", icon: "pencil" },
    { type: "text", content: " Member of\n" },
    { type: "link", content: "SmashingMagazine", href: "https://smashingmagazine.com", underline: false },
    { type: "text", content: " Experts Panel. " },
    { type: "link", content: "Featured/published author", href: "#", underline: true },
    { type: "text", content: " at CSS-Tricks, Tuts+,\nScotch.io, TorqueMag, SitePoint. Connect with Awais on twitter " },
    { type: "link", content: "@MrAhmadAwais", href: "https://twitter.com/MrAhmadAwais", underline: true },
    { type: "text", content: "." },
  ],
}: NodejsCliProps) {
  return (
    <section
      className="relative w-full min-h-screen py-16 px-6 sm:px-8 lg:px-12 overflow-hidden"
      style={{ backgroundColor: "#F3F2F0", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-2xl relative">
        {/* Decorative Dots */}
        <DecorativeDots />

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          {/* Profile Image with Brush Stroke Background */}
          <div className="relative w-28 h-28 mb-4">
            <Image
              src="/registry/nodejs-cli/brush-stroke.png"
              alt="Decorative brush stroke"
              width={140}
              height={140}
              className="absolute -top-3 -left-3 w-[140px] h-[140px] object-contain"
            />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
              <Image
                src={profileImage}
                alt={name}
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Section Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-[#8B8B8B] italic mb-1"
          >
            {sectionTitle}
          </motion.p>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold text-[#906440] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </motion.h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm leading-relaxed text-[#5A5A5A] mb-8 whitespace-pre-line"
        >
          <TextWithItems items={taglineItems} />
        </motion.p>

        {/* Highlight Section */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm leading-relaxed text-[#7A7A7A] italic mb-8 whitespace-pre-line"
        >
          <TextWithItems items={highlightItems} />
        </motion.p>

        {/* Credentials Section */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm leading-relaxed text-[#5A5A5A] whitespace-pre-line"
        >
          <TextWithItems items={credentialsItems} />
        </motion.p>
      </div>
    </section>
  );
}
