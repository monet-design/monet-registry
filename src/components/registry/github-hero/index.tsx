"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0D1117",
  backgroundGradient: "linear-gradient(180deg, #0D1117 0%, #161B22 50%, #1A1F2E 100%)",
  accent: "#7C3AED",
  accentHover: "#6D28D9",
  textPrimary: "#FFFFFF",
  textSecondary: "#8B949E",
  inputBg: "#21262D",
  inputBorder: "#30363D",
  codeBg: "rgba(22, 27, 34, 0.8)",
  tabBg: "#21262D",
  tabActive: "#30363D",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  astronauts: {
    path: "/registry/github-hero/astronauts.png",
    alt: "Cute 3D astronaut characters floating in space",
    prompt: `Three cute 3D astronaut characters floating in space, Pixar-style render, transparent background`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import {
  ChevronDown,
  Search,
  Github,
  Play,
  MessageSquare,
  FileCode,
} from "lucide-react";

interface GithubHeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  inputPlaceholder?: string;
  tabItems?: string[];
  bottomText?: string;
}

// Navigation Item Component
function NavItem({
  label,
  hasDropdown = false,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors">
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  );
}

// Code Editor Mock Component
function CodeEditorMock() {
  const codeLines = [
    { num: 76, text: "// Player 1 controls" },
    { num: 77, text: "if (this.cursors.left.isDown) {" },
    { num: 78, text: "  this.player1.setVelocityX(-200);" },
    { num: 79, text: "} else if (this.cursors.right.isDown) {" },
    { num: 80, text: "  this.player1.setVelocityX(200);" },
    { num: 81, text: "} else {" },
    { num: 82, text: "  this.player1.setVelocityX(0);" },
    { num: 83, text: "}" },
    { num: 84, text: "" },
    { num: 85, text: "if (this.cursors.up.isDown) {" },
    { num: 86, text: "  this.player1.setVelocityY(-200);" },
    { num: 87, text: "} else if (this.cursors.down.isDown) {" },
    { num: 88, text: "  this.player1.setVelocityY(200);" },
    { num: 89, text: "} else {" },
    { num: 90, text: "  this.player1.setVelocityY(0);" },
    { num: 91, text: "}" },
  ];

  return (
    <div className="flex-1 overflow-hidden">
      {/* File tabs */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/10">
        <div className="flex items-center gap-2 px-3 py-1 rounded text-xs text-white/90 bg-white/5">
          <FileCode className="w-3 h-3 text-yellow-400" />
          game.ts
          <span className="text-white/40">×</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded text-xs text-white/50">
          <FileCode className="w-3 h-3 text-purple-400" />
          characters.module.css
          <span className="text-white/40">×</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded text-xs text-white/50">
          <FileCode className="w-3 h-3 text-yellow-400" />
          bonus-level.ts
          <span className="text-white/40">×</span>
        </div>
      </div>
      {/* Code content */}
      <div className="p-4 font-mono text-xs leading-5 overflow-auto h-64">
        {codeLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-8 text-right pr-4 text-white/30 select-none">
              {line.num}
            </span>
            <span className="text-white/80">
              {line.text.includes("//") ? (
                <span className="text-green-400">{line.text}</span>
              ) : line.text.includes("if") ||
                line.text.includes("else") ? (
                <>
                  <span className="text-purple-400">
                    {line.text.split("(")[0]}
                  </span>
                  {line.text.includes("(") && (
                    <span className="text-white/80">
                      ({line.text.split("(")[1]}
                    </span>
                  )}
                </>
              ) : line.text.includes("this.") ? (
                <>
                  <span className="text-white/40">  </span>
                  <span className="text-blue-400">this</span>
                  <span className="text-white/80">
                    {line.text.replace("  this", "")}
                  </span>
                </>
              ) : (
                line.text
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Copilot Chat Mock Component
function CopilotChatMock() {
  return (
    <div className="w-80 border-r border-white/10 flex flex-col">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-purple-400" />
        <span className="text-xs font-medium text-white/90">
          GITHUB COPILOT: CHAT
        </span>
      </div>
      <div className="flex-1 p-4 text-xs space-y-3 overflow-auto">
        <div className="space-y-2 font-mono">
          <p className="text-white/60">{`} else if (downKey.isDown) {`}</p>
          <p className="text-white/60 pl-2">player.setVelocityY(200);</p>
          <p className="text-white/60">{`} else {`}</p>
          <p className="text-white/60 pl-2">player.setVelocityY(0);</p>
          <p className="text-white/60">{`}`}</p>
        </div>
        <div className="mt-4 space-y-2 text-white/50 text-[10px] font-mono">
          <p>
            {`// Update method refactored to use the reusable function update() {`}
          </p>
          <p className="pl-2">{"// Player 1 controls"}</p>
          <p className="pl-2">
            updatePlayerVelocity(this.
            <span className="text-blue-400">player1</span>, this.cursors.left, t
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-white/80 font-medium mb-2">Explanation:</p>
          <ul className="space-y-1.5 text-white/60 text-[10px]">
            <li>
              <span className="text-white/80">Reusable Function:</span>{" "}
              <span className="bg-purple-500/20 text-purple-300 px-1 rounded">
                updatePlayerVelocity
              </span>{" "}
              handles the logic for setting the velocity based on key presses.
            </li>
            <li>
              <span className="text-white/80">Parameters:</span> The function
              takes the player object and the corresponding control keys as
              parameters.
            </li>
          </ul>
        </div>
      </div>
      <div className="p-3 border-t border-white/10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
          <input
            type="text"
            placeholder="Ask a question or type '/' for commands"
            className="flex-1 bg-transparent text-xs text-white/60 placeholder:text-white/40 outline-none"
          />
          <button className="text-white/40 hover:text-white/60">
            <Play className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Floating Astronaut SVG Component (placeholder for 3D characters)
function FloatingAstronauts() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      {/* Yellow astronaut */}
      <motion.div
        className="absolute left-1/4 top-1/4"
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/30 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-yellow-200">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-blue-400/20 flex items-center justify-center">
              <span className="text-lg">:)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Purple astronaut */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0"
        animate={{
          y: [0, -15, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/30 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-purple-200">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-purple-400/20" />
          </div>
        </div>
      </motion.div>

      {/* Orange astronaut */}
      <motion.div
        className="absolute right-1/4 bottom-0"
        animate={{
          y: [0, -8, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-orange-200">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-orange-400/20" />
          </div>
        </div>
      </motion.div>

      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function GithubHero({
  title = "Build and ship software on a\nsingle, collaborative platform",
  subtitle = "Join the world's most widely adopted AI-powered developer platform.",
  primaryButtonText = "Sign up for GitHub",
  secondaryButtonText = "Try GitHub Copilot",
  inputPlaceholder = "Enter your email",
  tabItems = ["Code", "Plan", "Collaborate", "Automate", "Secure"],
  bottomText = "Build code quickly and more securely with GitHub Copilot embedded throughout your workflows.",
}: GithubHeroProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState("");

  const navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Open Source", hasDropdown: true },
    { label: "Enterprise", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: COLORS.backgroundGradient }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.15)_0%,_transparent_70%)]" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-6 py-4"
      >
        <div className="flex items-center gap-8">
          <Github className="w-8 h-8 text-white" />
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, i) => (
              <NavItem key={i} label={item.label} hasDropdown={item.hasDropdown} />
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-white/60"
            style={{ backgroundColor: COLORS.inputBg }}
          >
            <Search className="w-4 h-4" />
            <span>Search or jump to...</span>
            <kbd className="ml-4 px-1.5 py-0.5 rounded text-xs bg-white/10 border border-white/20">
              /
            </kbd>
          </div>
          <button className="text-sm text-white/80 hover:text-white transition-colors">
            Sign in
          </button>
          <button
            className="px-3 py-1.5 rounded-md text-sm font-medium text-white border border-white/30 hover:border-white/50 transition-colors"
          >
            Sign up
          </button>
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            style={{ color: COLORS.textPrimary }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p
            className="mt-6 text-lg md:text-xl"
            style={{ color: COLORS.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Email Input + CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <div className="flex items-center rounded-md overflow-hidden border border-white/20">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={inputPlaceholder}
              className="w-56 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
              style={{ backgroundColor: COLORS.inputBg }}
            />
            <button
              className="px-5 py-3 text-sm font-medium text-white whitespace-nowrap transition-colors"
              style={{
                backgroundColor: COLORS.accent,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.accentHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.accent)
              }
            >
              {primaryButtonText}
            </button>
          </div>
          <button
            className="px-5 py-3 rounded-md text-sm font-medium text-white border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all"
          >
            {secondaryButtonText}
          </button>
        </motion.div>

        {/* Floating Astronauts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <FloatingAstronauts />
        </motion.div>

        {/* Code Editor Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ backgroundColor: COLORS.codeBg }}
        >
          {/* Window controls */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          {/* Editor content */}
          <div className="flex">
            <CopilotChatMock />
            <CodeEditorMock />
            {/* Play button */}
            <div className="absolute bottom-4 right-4">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 flex items-center justify-center"
        >
          <div
            className="inline-flex items-center rounded-full p-1"
            style={{ backgroundColor: COLORS.tabBg }}
          >
            {tabItems.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === i
                    ? "text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
                style={{
                  backgroundColor:
                    activeTab === i ? COLORS.tabActive : "transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 text-center text-sm"
          style={{ color: COLORS.textSecondary }}
        >
          {bottomText}
        </motion.p>
      </div>
    </section>
  );
}
