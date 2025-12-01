"use client";

import { motion } from "motion/react";
import {
  Search,
  Users,
  Settings,
  Bell,
  Hash,
  ChevronDown,
  Plus,
} from "lucide-react";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface SupermiHeroProps {
  mode?: "light" | "dark";
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: string[];
  tagline?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  onLoginClick?: () => void;
}

// Supermi Logo Icon (sun-like)
function SupermiLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" fill="#F97316" />
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const radians = (angle * Math.PI) / 180;
        const x1 = 12 + Math.cos(radians) * 7;
        const y1 = 12 + Math.sin(radians) * 7;
        const x2 = 12 + Math.cos(radians) * 10;
        const y2 = 12 + Math.sin(radians) * 10;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#F97316"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

// Avatar Component
function Avatar({
  src,
  name,
  online = false,
  size = "md",
}: {
  src?: string;
  name: string;
  online?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-6 h-6 text-[8px]",
    md: "w-8 h-8 text-xs",
    lg: "w-10 h-10 text-sm",
  };

  const colors = [
    "bg-orange-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div className="relative">
      {src ? (
        <img
          src={src}
          alt={name}
          className={`${sizeClasses[size]} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} ${colors[colorIndex]} rounded-full flex items-center justify-center text-white font-medium`}
        >
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      {online && (
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white" />
      )}
    </div>
  );
}

// Chat Message Component
function ChatMessage({
  avatar,
  name,
  time,
  message,
  delay = 0,
}: {
  avatar?: string;
  name: string;
  time: string;
  message: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex gap-3 py-3"
    >
      <Avatar src={avatar} name={name} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">{name}</span>
          <span className="text-[10px] text-gray-400">{time}</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
          {message}
        </p>
      </div>
    </motion.div>
  );
}

// Sidebar Item Component
function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors ${
        active ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

// Main Dashboard Preview Component
function DashboardPreview({ delay = 0 }: { delay?: number }) {
  const messages = [
    {
      name: "Tiana Korsgaard",
      time: "5:20 PM",
      message:
        "It's going well. We've made some good progress on the design and we're starting to work on the development phase.",
      avatar: "https://picsum.photos/seed/tiana/100/100",
    },
    {
      name: "Corey Dias",
      time: "5:20 PM",
      message:
        "That's great to hear. Have you run into any issues or roadblocks so far?",
      avatar: "https://picsum.photos/seed/corey/100/100",
    },
    {
      name: "Talan Rosser",
      time: "5:20 PM",
      message:
        "Not really, everything has been going smoothly. We did have to make some changes to the initial plan, but we were able to adjust quickly.",
      avatar: "https://picsum.photos/seed/talan/100/100",
    },
  ];

  const members = [
    { name: "Alfredo Carder", online: true },
    { name: "Alfredo Carter", online: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Main Dashboard Card */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 overflow-hidden border border-gray-100">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-44 border-r border-gray-100 p-3 hidden sm:block">
            {/* Team Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    Asal Design
                  </span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Options Section */}
            <div className="mb-4">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider px-3">
                OPTIONS
              </span>
              <div className="mt-2 space-y-0.5">
                <SidebarItem
                  icon={<Search className="w-3.5 h-3.5" />}
                  label="Search"
                />
                <SidebarItem
                  icon={<Users className="w-3.5 h-3.5" />}
                  label="Members"
                />
                <SidebarItem
                  icon={<Settings className="w-3.5 h-3.5" />}
                  label="Settings"
                />
                <SidebarItem
                  icon={<Bell className="w-3.5 h-3.5" />}
                  label="Notification"
                />
              </div>
            </div>

            {/* Channels Section */}
            <div>
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider px-3">
                CHANNELS
              </span>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 min-w-0">
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-sm text-gray-900">
                  Superbl-Project
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <div className="flex -space-x-1.5">
                  {["T", "C", "R"].map((letter, i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white font-medium border-2 border-white ${
                        i === 0
                          ? "bg-orange-400"
                          : i === 1
                            ? "bg-blue-400"
                            : "bg-green-400"
                      }`}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-gray-400">8 Members</span>
                <span className="text-[10px] text-green-500">4 Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="px-4 py-2 h-48 overflow-hidden">
              {messages.map((msg, i) => (
                <ChatMessage
                  key={i}
                  {...msg}
                  delay={delay + 0.3 + i * 0.15}
                />
              ))}
              <div className="text-center py-2">
                <span className="text-[10px] text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Detail Channels */}
          <div className="w-44 border-l border-gray-100 p-3 hidden md:block">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Detail Channels
            </h3>

            {/* Channel Name */}
            <div className="mb-4">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                NAME CHANNEL
              </span>
              <div className="flex items-center gap-1 mt-1">
                <Hash className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-700">Superbl-Project</span>
              </div>
            </div>

            {/* About */}
            <div className="mb-4">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                ABOUT
              </span>
              <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                Discussion and Creating design with Superb result!
              </p>
            </div>

            {/* Members */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                  MEMBER
                </span>
                <Plus className="w-3 h-3 text-gray-400" />
              </div>
              <div className="space-y-2">
                {members.map((member, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Avatar name={member.name} size="sm" online={member.online} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-gray-700 truncate block">
                        {member.name}
                      </span>
                      <span className="text-[8px] text-green-500">Online</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function SupermiHero({
  mode = "light",
  logo = {
    icon: <SupermiLogo className="w-6 h-6" />,
    text: "Supermi",
  },
  navItems = ["Home", "About", "Support", "Download"],
  tagline = "UNLOCK CONVERSATIONAL POWER",
  headline = "Empower Your\nConversations with Next-Gen\nMessaging Dashboard",
  subheadline = "Unlock seamless communication and streamline your messaging\nexperience with our innovative dashboard solution",
  ctaText = "Get Started",
  onCtaClick,
  onLoginClick,
}: SupermiHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[#F2F2F2]">
        {/* Pink/peach gradient from bottom left - more intense */}
        <div
          className="absolute -bottom-20 -left-20 w-[80%] h-[80%]"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, #F7A7C0 0%, #FCBAAD 25%, #F5DACB 50%, transparent 75%)",
          }}
        />
        {/* Pink/purple gradient from right side */}
        <div
          className="absolute top-0 right-0 w-[65%] h-full"
          style={{
            background:
              "radial-gradient(ellipse at right center, #F8B5C4 0%, #EFD9EF 35%, transparent 70%)",
          }}
        />
        {/* Light blue-gray gradient in bottom right corner */}
        <div
          className="absolute -bottom-10 -right-10 w-[50%] h-[50%]"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, #E1EEF0 0%, #EFD9EF 40%, transparent 70%)",
          }}
        />
        {/* Subtle warm overlay in upper area */}
        <div
          className="absolute top-0 left-0 w-full h-[60%]"
          style={{
            background:
              "linear-gradient(180deg, #F2F2F2 0%, #F7EDE8 50%, transparent 100%)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <nav className="w-full px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              {logo.icon}
              <span className="text-gray-900 font-medium text-lg">
                {logo.text}
              </span>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center gap-8"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.div>

            {/* Login Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={onLoginClick}
              className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Login
            </motion.button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-16">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">
              {tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-dm-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 text-center mb-6 whitespace-pre-line leading-tight"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-sm sm:text-base text-center whitespace-pre-line leading-relaxed max-w-xl mx-auto mb-8"
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mb-16"
          >
            <button
              onClick={onCtaClick}
              className="px-8 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              {ctaText}
            </button>
          </motion.div>

          {/* Dashboard Preview */}
          <DashboardPreview delay={0.6} />
        </div>
      </div>
    </section>
  );
}
