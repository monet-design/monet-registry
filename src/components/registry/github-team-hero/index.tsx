"use client";

import { motion } from "motion/react";
import { Eye, Check, GitPullRequest, KeyRound, ChevronDown, Search } from "lucide-react";

// Types
interface CommentCard {
  id: string;
  username: string;
  timeAgo: string;
  message: string;
  avatar: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

interface FloatingAvatar {
  id: string;
  src: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  hasViewIcon?: boolean;
  hasPrIcon?: boolean;
}

interface GithubTeamHeroProps {
  label?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  comments?: CommentCard[];
  avatars?: FloatingAvatar[];
}

// GitHub Logo Icon
function GitHubLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

// Avatar Component
function Avatar({
  src,
  size = 48,
  className = ""
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-full overflow-hidden bg-gray-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt="User avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Comment Card Component
function CommentCardComponent({
  username,
  timeAgo,
  message,
  avatar,
  delay = 0,
}: {
  username: string;
  timeAgo: string;
  message: string;
  avatar: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 max-w-[280px]"
    >
      <Avatar src={avatar} size={36} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-semibold text-gray-900">{username}</span>
          <span className="text-gray-400">commented {timeAgo}</span>
        </div>
        <p className="text-sm text-gray-600 mt-0.5 leading-snug">{message}</p>
      </div>
    </motion.div>
  );
}

// Floating Icon Badge
function IconBadge({
  icon,
  delay = 0,
  className = ""
}: {
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`w-7 h-7 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center ${className}`}
    >
      {icon}
    </motion.div>
  );
}

// Connection Lines SVG
function ConnectionLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1200 700"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#d1d5db" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Left side curves */}
      <motion.path
        d="M 150 240 Q 250 240 320 350"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      />
      <motion.path
        d="M 120 470 Q 200 470 320 420"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.2 }}
      />

      {/* Right side curves */}
      <motion.path
        d="M 880 350 Q 950 280 1050 180"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      />
      <motion.path
        d="M 880 400 Q 950 450 1000 520"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />

      {/* Bottom center line */}
      <motion.path
        d="M 500 500 Q 550 550 600 520 Q 650 490 700 520"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      />
    </svg>
  );
}

// Default data
const defaultComments: CommentCard[] = [
  {
    id: "1",
    username: "califa",
    timeAgo: "4 days ago",
    message: "Could someone take a look at this PR?",
    avatar: "https://i.pravatar.cc/100?img=1",
    position: { top: "12%", left: "3%" },
  },
  {
    id: "2",
    username: "broccolini",
    timeAgo: "2 days ago",
    message: "Awesome work, ship it!",
    avatar: "https://i.pravatar.cc/100?img=5",
    position: { bottom: "15%", left: "3%" },
  },
  {
    id: "3",
    username: "teenage-witch",
    timeAgo: "3 days ago",
    message: "Added a few comments, otherwise LGTM!",
    avatar: "https://i.pravatar.cc/100?img=9",
    position: { top: "50%", right: "3%" },
  },
];

const defaultAvatars: FloatingAvatar[] = [
  { id: "a1", src: "https://i.pravatar.cc/100?img=11", size: 64, position: { top: "6%", left: "2%" }, hasViewIcon: false },
  { id: "a2", src: "https://i.pravatar.cc/100?img=12", size: 52, position: { top: "32%", left: "8%" }, hasViewIcon: true },
  { id: "a3", src: "https://i.pravatar.cc/100?img=13", size: 48, position: { top: "10%", right: "10%" }, hasPrIcon: true },
  { id: "a4", src: "https://i.pravatar.cc/100?img=14", size: 56, position: { top: "35%", right: "3%" }, hasViewIcon: false },
  { id: "a5", src: "https://i.pravatar.cc/100?img=15", size: 40, position: { bottom: "25%", right: "8%" }, hasViewIcon: true },
  { id: "a6", src: "https://i.pravatar.cc/100?img=16", size: 44, position: { bottom: "10%", right: "15%" }, hasViewIcon: false },
];

// Navigation Component
function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#24292f] text-white px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <GitHubLogo className="w-8 h-8 text-white" />
          <div className="hidden md:flex items-center gap-4 text-sm">
            <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              Product <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              Solutions <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              Open Source <ChevronDown className="w-3 h-3" />
            </button>
            <button className="hover:text-gray-300 transition-colors">
              Pricing
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-[#3c434a] rounded-md px-3 py-1.5 text-sm">
            <Search className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Search GitHub</span>
            <span className="text-gray-500 border border-gray-500 rounded px-1.5 text-xs">/</span>
          </div>
          <button className="text-sm hover:text-gray-300 transition-colors">
            Sign in
          </button>
          <button className="text-sm bg-transparent border border-gray-500 hover:border-white rounded-md px-3 py-1.5 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// Main Component
export default function GithubTeamHero({
  label = "GITHUB FOR TEAMS",
  headline = "Build like the best\nteams on the planet",
  subheadline = "With CI/CD, Dependabot, and the world's largest developer\ncommunity, GitHub gives your team everything they need to ship\nbetter software faster.",
  primaryCtaText = "Get started with Team",
  secondaryCtaText = "Sign up for free",
  onPrimaryClick,
  onSecondaryClick,
  comments = defaultComments,
  avatars = defaultAvatars,
}: GithubTeamHeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Connection Lines */}
      <ConnectionLines />

      {/* Floating Avatars */}
      {avatars.map((avatar, index) => (
        <motion.div
          key={avatar.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          className="absolute z-10"
          style={{
            top: avatar.position.top,
            bottom: avatar.position.bottom,
            left: avatar.position.left,
            right: avatar.position.right,
          }}
        >
          <div className="relative">
            <Avatar src={avatar.src} size={avatar.size} />
            {avatar.hasViewIcon && (
              <IconBadge
                icon={<Eye className="w-3.5 h-3.5 text-gray-500" />}
                delay={0.5 + index * 0.1}
                className="absolute -bottom-1 -right-1"
              />
            )}
            {avatar.hasPrIcon && (
              <IconBadge
                icon={<GitPullRequest className="w-3.5 h-3.5 text-gray-500" />}
                delay={0.5 + index * 0.1}
                className="absolute -bottom-1 -right-1"
              />
            )}
          </div>
        </motion.div>
      ))}

      {/* Floating Comment Cards */}
      {comments.map((comment, index) => (
        <div
          key={comment.id}
          className="absolute z-20"
          style={{
            top: comment.position.top,
            bottom: comment.position.bottom,
            left: comment.position.left,
            right: comment.position.right,
          }}
        >
          <CommentCardComponent
            username={comment.username}
            timeAgo={comment.timeAgo}
            message={comment.message}
            avatar={comment.avatar}
            delay={0.4 + index * 0.15}
          />
        </div>
      ))}

      {/* Floating Check Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute bottom-[38%] left-[26%] z-10"
      >
        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
          <Check className="w-4 h-4 text-gray-400" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="absolute bottom-[30%] right-[42%] z-10"
      >
        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
          <Check className="w-4 h-4 text-gray-400" />
        </div>
      </motion.div>

      {/* Key Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute bottom-[25%] left-[42%] z-10"
      >
        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
          <KeyRound className="w-4 h-4 text-gray-400" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center px-6 pt-20 pb-32">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-6"
        >
          {label}
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1b1f23] leading-tight tracking-tight whitespace-pre-line mb-6"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-base sm:text-lg text-[#57606a] leading-relaxed whitespace-pre-line max-w-2xl mb-8"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={onPrimaryClick}
            className="px-5 py-2.5 bg-[#24292f] hover:bg-[#32383f] text-white text-sm font-medium rounded-md transition-colors"
          >
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="px-5 py-2.5 bg-white hover:bg-gray-50 text-[#24292f] text-sm font-medium rounded-md border border-[#d0d7de] transition-colors"
          >
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
