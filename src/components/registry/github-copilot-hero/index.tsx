"use client";

import { motion } from "motion/react";
import { ChevronDown, Search, Mic, Send } from "lucide-react";

interface GithubCopilotHeroProps {
  badge?: string;
  headline?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  vsCodeLink?: {
    text: string;
    linkText: string;
    href: string;
  };
  navItems?: Array<{
    label: string;
    hasDropdown?: boolean;
  }>;
  subNavItems?: Array<{
    label: string;
    href: string;
  }>;
}

// GitHub Logo SVG
function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.06 10.94 15.18.8.14 1.1-.34 1.1-.76 0-.38-.02-1.64-.02-2.98-4.02.74-5.06-.98-5.38-1.88-.18-.46-.96-1.88-1.64-2.26-.56-.3-1.36-1.04-.02-1.06 1.26-.02 2.16 1.16 2.46 1.64 1.44 2.42 3.74 1.74 4.66 1.32.14-1.04.56-1.74 1.02-2.14-3.56-.4-7.28-1.78-7.28-7.9 0-1.74.62-3.18 1.64-4.3-.16-.4-.72-2.04.16-4.24 0 0 1.34-.42 4.4 1.64 1.28-.36 2.64-.54 4-.54 1.36 0 2.72.18 4 .54 3.06-2.08 4.4-1.64 4.4-1.64.88 2.2.32 3.84.16 4.24 1.02 1.12 1.64 2.54 1.64 4.3 0 6.14-3.74 7.5-7.3 7.9.58.5 1.08 1.46 1.08 2.96 0 2.14-.02 3.86-.02 4.4 0 .42.3.92 1.1.76C27.42 29.06 32 23.06 32 16c0-8.84-7.16-16-16-16Z"
      />
    </svg>
  );
}

// Copilot Icon SVG
function CopilotIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.75 14a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm4.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z" />
      <path d="M12 2c2.214 0 4.248.657 5.747 1.756.136.099.268.204.397.312.584.235 1.077.546 1.474.952.85.87 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086l.633 1.478.043.022A4.75 4.75 0 0 1 24 15.222v1.028c0 .529-.309.987-.565 1.293-.28.336-.636.653-.966.918a13.84 13.84 0 0 1-1.299.911l-.024.015-.006.004-.039.025c-.223.135-.45.264-.68.386-.46.245-1.122.571-1.941.895C16.845 21.344 14.561 22 12 22c-2.561 0-4.845-.656-6.479-1.303a19.046 19.046 0 0 1-1.942-.894 14.081 14.081 0 0 1-.535-.3l-.144-.087-.04-.025-.006-.004-.024-.015a13.16 13.16 0 0 1-1.299-.911 6.913 6.913 0 0 1-.967-.918C.31 17.237 0 16.779 0 16.25v-1.028a4.75 4.75 0 0 1 2.626-4.248l.043-.022.633-1.478a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.498 1.132-3.368.397-.406.89-.717 1.474-.952.129-.108.261-.213.397-.312C7.752 2.657 9.786 2 12 2Zm-8 9.654v6.669a17.59 17.59 0 0 0 2.073.98C7.595 19.906 9.686 20.5 12 20.5c2.314 0 4.405-.594 5.927-1.197a17.59 17.59 0 0 0 2.073-.98v-6.669l-.038-.09c-.046.061-.095.12-.145.177-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.544-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.344a4.323 4.323 0 0 1-.355.508C10.704 12.456 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a3.026 3.026 0 0 1-.145-.177Zm6.309-1.092c.445-.547.708-1.334.851-2.301.057-.357.087-.718.09-1.079v-.031c-.001-.762-.166-1.26-.43-1.568l-.008-.01c-.341-.391-1.046-.689-2.533-.529-1.505.163-2.347.537-2.824 1.024-.462.473-.705 1.18-.705 2.32 0 .605.044 1.087.135 1.472.092.384.231.672.423.89.365.413 1.084.75 2.657.75.91 0 1.611-.177 2.117-.489a2.03 2.03 0 0 0 .227-.149Z" />
    </svg>
  );
}

// Copilot Mascot SVG Component (3D Robot character)
function CopilotMascot({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow effect behind the mascot */}
      <defs>
        <radialGradient id="mascotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f6feb" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Glow background */}
      <ellipse cx="100" cy="120" rx="90" ry="100" fill="url(#mascotGlow)" />

      {/* Body */}
      <ellipse cx="100" cy="160" rx="55" ry="45" fill="url(#bodyGradient)" />

      {/* Head/Helmet */}
      <ellipse cx="100" cy="95" rx="65" ry="55" fill="#6366f1" />

      {/* Visor/Face area */}
      <path
        d="M45 90 Q45 65 100 65 Q155 65 155 90 Q155 120 100 130 Q45 120 45 90Z"
        fill="#1e1e2e"
        stroke="#4c1d95"
        strokeWidth="3"
      />

      {/* Visor shine */}
      <path
        d="M55 85 Q55 72 100 72 Q145 72 145 85 Q145 108 100 115 Q55 108 55 85Z"
        fill="url(#visorGradient)"
        opacity="0.3"
      />

      {/* Eyes */}
      <ellipse cx="75" cy="95" rx="12" ry="16" fill="#a855f7" />
      <ellipse cx="125" cy="95" rx="12" ry="16" fill="#a855f7" />

      {/* Eye highlights */}
      <circle cx="78" cy="90" r="4" fill="white" opacity="0.8" />
      <circle cx="128" cy="90" r="4" fill="white" opacity="0.8" />

      {/* Antenna */}
      <line x1="100" y1="40" x2="100" y2="55" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="35" r="8" fill="#a855f7" />
      <circle cx="100" cy="35" r="4" fill="#ffffff" opacity="0.6" />

      {/* Ear pieces */}
      <ellipse cx="38" cy="95" rx="10" ry="15" fill="#4c1d95" />
      <ellipse cx="162" cy="95" rx="10" ry="15" fill="#4c1d95" />

      {/* Arms */}
      <ellipse cx="40" cy="160" rx="15" ry="25" fill="#6366f1" />
      <ellipse cx="160" cy="160" rx="15" ry="25" fill="#6366f1" />

      {/* Chest detail */}
      <ellipse cx="100" cy="165" rx="20" ry="15" fill="#4c1d95" opacity="0.5" />
    </svg>
  );
}

// Code Editor Component
function CodeEditor() {
  const codeLines = [
    { num: 1, content: <><span className="text-[#c586c0]">import</span> {"{ "}<span className="text-[#4ec9b0]">type</span> <span className="text-[#4ec9b0]">Runner</span>{" }"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;@prisma/client&apos;</span>;</> },
    { num: 2, content: <><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">prisma</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;$lib/data/prisma&apos;</span>;</> },
    { num: 3, content: "" },
    { num: 4, content: <><span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">interface</span> <span className="text-[#4ec9b0]">RunnerService</span> {"{"}</> },
    { num: 5, content: <>&nbsp;&nbsp;<span className="text-[#dcdcaa]">getById</span>(<span className="text-[#9cdcfe]">id</span>: <span className="text-[#4ec9b0]">number</span>): <span className="text-[#4ec9b0]">Promise</span>&lt;<span className="text-[#4ec9b0]">Runner</span> | <span className="text-[#569cd6]">null</span>&gt;;</> },
    { num: 6, content: "}" },
    { num: 7, content: "" },
    { num: 8, content: <><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">runnerService</span>: <span className="text-[#4ec9b0]">RunnerService</span> = {"{"}</> },
    { num: 9, content: <>&nbsp;&nbsp;<span className="text-[#dcdcaa]">getById</span>: <span className="text-[#569cd6]">async</span> (<span className="text-[#9cdcfe]">id</span>: <span className="text-[#4ec9b0]">number</span>) =&gt; {"{"}</> },
    { num: 10, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">return</span> <span className="text-[#c586c0]">await</span> <span className="text-[#9cdcfe]">prisma</span>.<span className="text-[#9cdcfe]">runner</span>.<span className="text-[#dcdcaa]">findUnique</span>({"{"}</> },
    { num: 11, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9cdcfe]">where</span>: {"{ "}<span className="text-[#9cdcfe]">id</span> {"}"},</> },
    { num: 12, content: <>&nbsp;&nbsp;&nbsp;&nbsp;{"}"});</> },
    { num: 13, content: <>&nbsp;&nbsp;{"}"},</> },
    { num: 14, content: "};" },
    { num: 15, content: "" },
    { num: 16, content: <><span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">default</span> <span className="text-[#9cdcfe]">runnerService</span>;</> },
  ];

  return (
    <div className="flex-1 bg-[#1e1e1e] font-mono text-[11px] leading-[1.6] overflow-hidden">
      {/* Tabs */}
      <div className="flex items-center border-b border-[#2d2d2d] bg-[#252526]">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1e] border-r border-[#2d2d2d]">
          <span className="text-[#519aba] text-[10px]">TS</span>
          <span className="text-[#cccccc] text-[11px]">runner-service.ts</span>
          <span className="text-[#6e6e6e] text-[10px] ml-1">x</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-r border-[#2d2d2d]">
          <span className="text-[#519aba] text-[10px]">TS</span>
          <span className="text-[#6e6e6e] text-[11px]">runner-service.test.ts</span>
          <span className="text-[#6e6e6e] text-[10px] ml-1">x</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5">
          <span className="text-[#519aba] text-[10px]">TS</span>
          <span className="text-[#6e6e6e] text-[11px]">runner-service.ts</span>
          <span className="text-[#6e6e6e] text-[10px] ml-1">x</span>
        </div>
      </div>
      {/* Code content */}
      <div className="p-3 overflow-hidden">
        {codeLines.map((line) => (
          <div key={line.num} className="flex">
            <span className="w-6 text-right text-[#6e6e6e] mr-4 select-none">{line.num}</span>
            <span className="text-[#d4d4d4]">{line.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Chat Panel Component
function ChatPanel() {
  return (
    <div className="w-[280px] bg-[#1e1e1e] border-l border-[#2d2d2d] flex flex-col">
      {/* Chat header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#2d2d2d] bg-[#252526]">
        <span className="text-[#cccccc] text-[11px] font-medium">CHAT</span>
        <div className="flex items-center gap-2 text-[#6e6e6e]">
          <span className="text-[10px]">{"<-"}</span>
          <span className="text-[10px]">{"->"}</span>
          <span className="text-[10px]">+</span>
        </div>
      </div>

      {/* Chat content */}
      <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
        <CopilotIcon className="w-10 h-10 text-[#8b5cf6] mb-3" />
        <h3 className="text-white text-sm font-medium mb-1">Edit with Copilot</h3>
        <p className="text-[#6e6e6e] text-[10px] mb-3">Agent mode</p>
        <p className="text-[#8b8b8b] text-[10px] leading-relaxed px-2">
          Start your editing session by defining a set of files that you want to work with. Then ask Copilot for the changes you want to make.
        </p>
        <p className="text-[#6e6e6e] text-[9px] mt-4 leading-relaxed px-2">
          Copilot is powered by AI, so mistakes are possible. Review output carefully before use.
        </p>
        <div className="flex items-center gap-1 text-[#6e6e6e] text-[9px] mt-3">
          <span className="text-[10px]">@</span>
          <span>or type # to attach context</span>
        </div>
      </div>

      {/* Chat input */}
      <div className="p-3 border-t border-[#2d2d2d]">
        <div className="bg-[#252526] rounded-lg border border-[#3d3d3d] p-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] text-[#6e6e6e] bg-[#3d3d3d] px-2 py-0.5 rounded flex items-center gap-1">
              <span className="text-[8px]">@</span> Add Context...
            </span>
            <span className="text-[9px] text-[#6e6e6e] bg-[#3d3d3d] px-2 py-0.5 rounded flex items-center gap-1">
              service.md
              <span className="text-[8px] ml-1">x</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#6e6e6e] text-[10px]">Edit files in your workspace in agent mode</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <Mic className="w-3.5 h-3.5 text-[#6e6e6e]" />
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-[#6e6e6e]">Agent</span>
              <ChevronDown className="w-3 h-3 text-[#6e6e6e]" />
              <span className="text-[9px] text-[#6e6e6e]">Claude 3.5 Sonnet</span>
              <ChevronDown className="w-3 h-3 text-[#6e6e6e]" />
              <div className="w-6 h-6 rounded-full bg-[#8b5cf6] flex items-center justify-center">
                <Send className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// IDE Mockup Component
function IDEMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto max-w-[900px] rounded-xl overflow-hidden shadow-2xl border border-[#30363d]"
    >
      {/* Window controls */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#252526] border-b border-[#2d2d2d]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* IDE content */}
      <div className="flex h-[340px]">
        {/* Sidebar icons */}
        <div className="w-12 bg-[#252526] flex flex-col items-center py-3 gap-4 border-r border-[#2d2d2d]">
          <div className="w-6 h-6 text-[#6e6e6e] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <div className="w-6 h-6 text-[#6e6e6e] flex items-center justify-center">
            <Search className="w-5 h-5" />
          </div>
          <div className="w-6 h-6 text-[#6e6e6e] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <div className="w-6 h-6 text-[#6e6e6e] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4" />
            </svg>
          </div>
          <div className="w-6 h-6 text-[#6e6e6e] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18M3 9h6M3 15h6" />
            </svg>
          </div>
        </div>

        {/* Code Editor */}
        <CodeEditor />

        {/* Chat Panel */}
        <ChatPanel />
      </div>
    </motion.div>
  );
}

// Speaker icon for VS Code
function SpeakerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function GithubCopilotHero({
  badge = "Now supercharged with agent mode",
  headline = "AI that builds with you",
  primaryCta = { text: "Get started for free", href: "#" },
  secondaryCta = { text: "See plans & pricing", href: "#" },
  vsCodeLink = {
    text: "Already have",
    linkText: "Open now",
    href: "#",
  },
  navItems = [
    { label: "Product", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Open Source", hasDropdown: true },
    { label: "Enterprise", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ],
  subNavItems = [
    { label: "For business", href: "#" },
    { label: "Extensions", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "What's new", href: "#" },
    { label: "Plans & pricing", href: "#" },
  ],
}: GithubCopilotHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0d1117]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue glow left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1f6feb]/20 blur-[150px] rounded-full" />
        {/* Purple/magenta glow right */}
        <div className="absolute top-0 right-0 w-[500px] h-[700px] bg-[#a855f7]/15 blur-[120px] rounded-full" />
        {/* Cyan accent */}
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#22d3ee]/10 blur-[100px] rounded-full" />
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4"
      >
        <div className="flex items-center gap-6">
          <GitHubLogo className="w-8 h-8 text-white" />
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-white/60">
            <Search className="w-4 h-4" />
            <span>Search or jump to...</span>
            <span className="text-xs border border-white/20 rounded px-1.5 py-0.5">/</span>
          </div>
          <button className="text-sm text-white/90 hover:text-white transition-colors">
            Sign in
          </button>
          <button className="px-3 py-1.5 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors">
            Sign up
          </button>
        </div>
      </motion.nav>

      {/* Sub Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative z-10 border-b border-white/10"
      >
        <div className="px-6 py-3 flex items-center gap-6 overflow-x-auto">
          <span className="text-white font-semibold text-sm whitespace-nowrap">GitHub Copilot</span>
          <span className="text-white/40">/</span>
          {subNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-16 pb-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="text-sm text-white/90">{badge}</span>
        </motion.div>

        {/* Headline with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-10"
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, #7ee8fa 40%, #ee5eea 80%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {headline}
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href={primaryCta.href}
            className="px-6 py-3 text-base font-medium text-[#0d1117] bg-white rounded-md hover:bg-white/90 transition-colors"
          >
            {primaryCta.text}
          </a>
          <a
            href={secondaryCta.href}
            className="px-6 py-3 text-base font-medium text-white bg-[#1f6feb] rounded-md hover:bg-[#1a5fd1] transition-colors"
          >
            {secondaryCta.text}
          </a>
        </motion.div>

        {/* VS Code Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-sm text-white/70"
        >
          <span>{vsCodeLink.text}</span>
          <SpeakerIcon className="w-4 h-4 text-[#1f6feb]" />
          <span className="text-white/90">Visual Studio Code?</span>
          <a href={vsCodeLink.href} className="text-[#58a6ff] hover:underline">
            {vsCodeLink.linkText}
          </a>
        </motion.p>
      </div>

      {/* IDE Mockup */}
      <div className="relative z-10 px-6 mt-8">
        <IDEMockup />
      </div>

      {/* Copilot Mascot - positioned at the right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-[280px] right-[5%] z-20 hidden xl:block"
      >
        <CopilotMascot className="w-[180px] h-auto" />
      </motion.div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none z-10" />
    </section>
  );
}
