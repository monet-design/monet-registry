"use client";

import { motion } from "motion/react";
import { Plus, RotateCcw, ChevronDown, Square } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface FrameworkItem {
  name: string;
  icon: React.ReactNode;
}

interface CodesandboxHeroProps {
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  announcementBadge?: string;
  announcementText?: string;
  announcementLinkText?: string;
  navItems?: NavItem[];
  frameworks?: FrameworkItem[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Features", hasDropdown: true },
  { label: "Use Cases", hasDropdown: true },
  { label: "iOS" },
  { label: "Discover", hasDropdown: true },
  { label: "Docs" },
  { label: "Support" },
  { label: "Blog" },
  { label: "Pricing" },
];

// Framework icons
function AngularIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M9.93 12.645h4.134L12 7.843zM12 2.252L3.227 5.427l1.347 11.666L12 21.748l7.426-4.655 1.347-11.666L12 2.252zm5.525 15.498H15.35l-1.17-2.853H9.82l-1.17 2.853H6.475L12 4.752l5.525 13z"/>
    </svg>
  );
}

function NuxtIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M13.464 19.115H21.5l-8.036-14.23 3.248-5.77L24 19.115h-3.15L13.464 5.5l-5.232 9.23h5.232v4.385zM3.15 19.115h6.79L9.94 14.73l-6.79.001 3.395-6.016L3.15 3.885 0 19.115z"/>
    </svg>
  );
}

function SvelteKitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M20.765 6.542c-1.675-2.618-5.125-3.418-7.7-1.785l-4.14 2.625a5.067 5.067 0 00-2.285 3.175 4.785 4.785 0 00.41 3.468c-.37.475-.655 1.01-.855 1.58a4.94 4.94 0 00.315 3.938c1.675 2.617 5.125 3.418 7.7 1.785l4.14-2.625a5.07 5.07 0 002.285-3.175 4.79 4.79 0 00-.41-3.47c.37-.474.655-1.009.855-1.578a4.94 4.94 0 00-.315-3.938zm-11.41 14.066a3.063 3.063 0 01-3.305-1.185 2.905 2.905 0 01-.19-2.32c.03.02.085.05.12.073l4.14 2.39c.125.075.265.11.405.15a3.03 3.03 0 01-1.17.892zm10.15-6.5l-4.14 2.625c-.125.075-.265.11-.405.15.015-.065.035-.13.045-.195.09-.5.04-1.012-.14-1.49a2.91 2.91 0 00-.96-1.29l-4.14-2.39a3.063 3.063 0 01-1.17-1.185 2.905 2.905 0 01.19-2.32 3.063 3.063 0 013.305-1.185c-.015.065-.035.13-.045.195a2.905 2.905 0 00.14 1.49c.2.485.53.91.96 1.29l4.14 2.39c.5.29.9.71 1.17 1.185a2.905 2.905 0 01-.19 2.32 3.03 3.03 0 01-.76.73z"/>
    </svg>
  );
}

function RemixIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M21.511 18.508c.216 2.773.216 4.073.216 5.492H15.31c0-.309.006-.592.013-.878.018-.711.036-1.441-.014-2.65-.073-1.828-.86-2.236-2.219-2.236H2v-4.236h11.5c1.748 0 2.547-.839 2.547-2.218 0-1.235-.799-2.236-2.547-2.236H2V5.782h12.217c4.036 0 6.051 2.2 6.051 5.236 0 2.2-1.298 3.636-3.089 4.073 1.573.436 2.26 1.527 2.332 3.417zM2 24v-4.236h9.5V24H2z"/>
    </svg>
  );
}

function GatsbyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.41 3.59-8 8-8v8H4z"/>
    </svg>
  );
}

function AstroIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M16 2L8 22M8 2l8 20"/>
      <path d="M6 12h12M8 8h8M10 16h4"/>
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function WebImageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3178C6]" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.88 15.293v2.25h-2.25v-2.25h-2.25v2.25h-2.25v-2.25H7.5v-2.25h1.755v-2.25H7.5v-2.25h2.25v2.25h2.25v-2.25h2.25v2.25h1.755v2.25h-1.755v2.25h1.755zm-4.5-2.25v2.25h2.25v-2.25h-2.25z"/>
    </svg>
  );
}

// Default frameworks
const defaultFrameworks: FrameworkItem[] = [
  { name: "Angular", icon: <AngularIcon /> },
  { name: "Nuxt", icon: <NuxtIcon /> },
  { name: "SvelteKit", icon: <SvelteKitIcon /> },
  { name: "Remix", icon: <RemixIcon /> },
  { name: "Gatsby", icon: <GatsbyIcon /> },
  { name: "Astro Blog", icon: <AstroIcon /> },
  { name: "Next.js Commerce", icon: <NextJsIcon /> },
  { name: "Web Image Crawler", icon: <WebImageIcon /> },
  { name: "React TypeScript", icon: <TypeScriptIcon /> },
];

// CodeSandbox Logo
function CodeSandboxLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}

// Floating UI Elements
function FloatingTerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute left-4 lg:left-16 top-32 lg:top-40 w-48 lg:w-56 bg-[#1c1c1c] rounded-lg border border-[#333] shadow-2xl overflow-hidden z-10"
    >
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#252525] border-b border-[#333]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-[10px] text-[#888]">Terminal</span>
      </div>
      <div className="p-3 text-[10px] font-mono">
        <div className="text-[#666]">excalidraw@1/projects&gt;</div>
        <div className="text-[#4ade80] mt-1">npm install</div>
      </div>
    </motion.div>
  );
}

function FloatingIDECard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute left-8 lg:left-24 top-16 lg:top-20 w-56 lg:w-72 bg-white rounded-lg border border-[#ddd] shadow-2xl overflow-hidden z-5"
    >
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f5f5f5] border-b border-[#ddd]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <div className="p-2 h-28 bg-[#fafafa] flex items-center justify-center">
        <div className="flex gap-2">
          <div className="w-8 h-12 bg-[#e8f5e9] rounded" />
          <div className="w-8 h-16 bg-[#e8f5e9] rounded" />
          <div className="w-8 h-10 bg-[#e8f5e9] rounded" />
        </div>
      </div>
    </motion.div>
  );
}

function FloatingDocsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute right-4 lg:right-16 top-16 lg:top-20 w-52 lg:w-64 bg-white rounded-lg border border-[#ddd] shadow-2xl overflow-hidden z-10"
    >
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f5f5f5] border-b border-[#ddd]">
        <span className="text-[10px] text-[#666]">&gt; Dev Assistant</span>
      </div>
      <div className="p-3 text-[9px] text-[#666] leading-relaxed">
        <p className="font-medium text-[#333] mb-1">Sandbox accessibility</p>
        <p className="mb-2">You can also use accessibility in the browser.</p>
        <div className="space-y-1 text-[8px]">
          <div><span className="text-[#888]">local:</span> http://localhost:3000</div>
          <div><span className="text-[#888]">On Your Network:</span> http://192.168.1.100</div>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingChangesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="absolute right-4 lg:right-12 top-56 lg:top-64 w-48 lg:w-56 bg-[#1c1c1c] rounded-lg border border-[#333] shadow-2xl overflow-hidden z-10"
    >
      <div className="px-3 py-2 border-b border-[#333]">
        <span className="text-[10px] text-white font-medium">Changes</span>
      </div>
      <div className="p-2 text-[9px]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#f97316]">M</span>
          <span className="text-[#aaa]">renderScene.ts</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#f97316]">M</span>
          <span className="text-[#aaa]">variables.module.scss</span>
        </div>
      </div>
      <div className="px-3 py-2 border-t border-[#333]">
        <div className="text-[8px] text-[#888] mb-2">Update 2 files...</div>
        <div className="h-12 bg-[#252525] rounded mb-2" />
        <button className="w-full py-1.5 bg-[#333] hover:bg-[#444] text-[9px] text-white rounded transition-colors">
          Commit and Push
        </button>
      </div>
    </motion.div>
  );
}

function FloatingPRCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="absolute right-20 lg:right-40 bottom-36 lg:bottom-44 w-44 lg:w-52 bg-white rounded-lg border border-[#ddd] shadow-2xl overflow-hidden z-10"
    >
      <div className="p-3">
        <div className="text-[9px] text-[#666] mb-2">Last Commits</div>
        <button className="w-full py-1.5 px-3 bg-[#238636] hover:bg-[#2ea043] text-[9px] text-white rounded-md flex items-center justify-between transition-colors">
          <span>Open pull request</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        <div className="mt-2 text-[8px] text-[#888]">Update docs</div>
      </div>
    </motion.div>
  );
}

// 3D Avatar Components
function Avatar3D({ position, delay }: { position: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute ${position} w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg z-20`}
    >
      <span className="text-lg">:)</span>
    </motion.div>
  );
}

// Framework Slider
function FrameworkSlider({ frameworks }: { frameworks: FrameworkItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="absolute bottom-0 left-0 right-0 bg-[#0d0d0d] border-t border-[#222] py-4 overflow-hidden"
    >
      <div className="flex animate-scroll">
        {[...frameworks, ...frameworks].map((framework, index) => (
          <div
            key={`${framework.name}-${index}`}
            className="flex items-center gap-2 px-6 text-[#888] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            {framework.icon}
            <span className="text-sm">{framework.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Component
export default function CodesandboxHero({
  headline = "Code.\nReview.\nDeploy.",
  subheadline = "Supercharge your workflow with instant\ncloud development environments.",
  primaryCtaText = "Create Sandbox",
  secondaryCtaText = "Import repository",
  announcementBadge = "New",
  announcementText = "Announcing Rust Support in CodeSandbox.",
  announcementLinkText = "Learn more",
  navItems = defaultNavItems,
  frameworks = defaultFrameworks,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: CodesandboxHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#161616] overflow-hidden">
      {/* Custom styles for animation */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .font-serif-italic {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-30 w-full px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-8"
          >
            <CodeSandboxLogo className="w-6 h-6 text-white" />

            {/* Nav Items - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href || "#"}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="flex items-center gap-1 text-sm text-[#999] hover:text-white transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Auth Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <button className="text-sm text-[#999] hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm text-[#161616] bg-[#D5EF73] hover:bg-[#c5df63] rounded-md transition-colors font-medium">
              Try for free
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-30 flex justify-center px-4 py-2"
      >
        <div className="inline-flex items-center gap-3 text-sm">
          <span className="px-2 py-0.5 bg-[#D5EF73] text-[#161616] text-xs font-semibold rounded">
            {announcementBadge}
          </span>
          <span className="text-white">
            {announcementText}{" "}
            <span className="text-[#888]">You can now spin up a Rust development environment!</span>
          </span>
          <a href="#" className="text-[#D5EF73] hover:underline ml-2">
            {announcementLinkText}
          </a>
        </div>
      </motion.div>

      {/* Floating UI Cards */}
      <FloatingIDECard />
      <FloatingTerminalCard />
      <FloatingDocsCard />
      <FloatingChangesCard />
      <FloatingPRCard />

      {/* 3D Avatars */}
      <Avatar3D position="left-52 lg:left-64 bottom-48 lg:bottom-56" delay={0.8} />
      <Avatar3D position="right-44 lg:right-56 top-44 lg:top-52" delay={0.9} />
      <Avatar3D position="right-32 lg:right-44 bottom-52 lg:bottom-64" delay={1} />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 pt-16 lg:pt-24 pb-32 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif-italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#D5EF73] leading-[0.95] tracking-tight mb-8"
        >
          {headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-[#999] leading-relaxed mb-10 whitespace-pre-line"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="flex items-center gap-2 text-[#D5EF73] hover:text-[#e5ff83] transition-colors text-base font-medium"
          >
            <Plus className="w-4 h-4" />
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="flex items-center gap-2 text-[#D5EF73] hover:text-[#e5ff83] transition-colors text-base font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>

      {/* Framework Slider */}
      <FrameworkSlider frameworks={frameworks} />
    </section>
  );
}
