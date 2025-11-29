"use client";

import { motion } from "motion/react";
import {
  Rocket,
  MessageSquare,
  Calendar,
  Mail,
  Slack,
  MoreHorizontal,
  Pin,
  FileText,
  Users,
  Clock,
  Check,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface PingSpaceHeroProps {
  logoText?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  navItems?: NavItem[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Logo Component
function PingSpaceLogo({ text = "PingSpace" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
        <Rocket className="h-4 w-4 text-white" strokeWidth={2} />
      </div>
      <span className="text-sm font-semibold text-slate-700">{text}</span>
    </div>
  );
}

// Star decoration component
function StarDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z"
        fill="#F59E0B"
        stroke="#F59E0B"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Floating label component
function FloatingLabel({
  text,
  position,
}: {
  text: string;
  position: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className={`absolute top-[38%] hidden lg:block ${
        position === "left" ? "left-4 xl:left-8" : "right-4 xl:right-8"
      }`}
    >
      <p className="max-w-[100px] text-xs font-medium leading-tight text-slate-500">
        {text}
      </p>
    </motion.div>
  );
}

// Mock App Screenshot Component
function AppScreenshot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative mx-auto max-w-5xl px-4"
    >
      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-300/40">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="ml-4 flex flex-1 items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200">
              <PingSpaceLogo text="" />
              <span>2023 Retail Strategy</span>
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="flex min-h-[300px] sm:min-h-[380px]">
          {/* Sidebar */}
          <div className="hidden w-48 shrink-0 border-r border-slate-100 bg-slate-50/50 p-3 sm:block">
            <div className="space-y-1">
              <SidebarItem icon={<MessageSquare className="h-4 w-4" />} label="Messenger" active />
              <SidebarItem icon={<Calendar className="h-4 w-4" />} label="Calendar" />
              <SidebarItem icon={<Users className="h-4 w-4" />} label="Meetings" />
              <SidebarItem icon={<Mail className="h-4 w-4" />} label="Email" />
              <SidebarItem icon={<Slack className="h-4 w-4" />} label="Slack" />
              <SidebarItem icon={<MoreHorizontal className="h-4 w-4" />} label="More" />
            </div>
            <div className="mt-4 border-t border-slate-100 pt-3">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Shortcuts
              </p>
              <div className="space-y-1">
                <ShortcutItem icon={<Pin className="h-3 w-3" />} label="PingSpace Sync Notes with ChatGPT" color="purple" />
                <ShortcutItem icon={<FileText className="h-3 w-3" />} label="Return Policy" color="blue" />
                <ShortcutItem icon={<Clock className="h-3 w-3" />} label="Issue Tracking" color="green" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-1 flex-col">
            {/* Messages Panel */}
            <div className="flex-1 border-r border-slate-100 p-4">
              <div className="space-y-3">
                <MessageBubble
                  sender="Lance Simons"
                  time="11:44 AM"
                  message="Done reviewing the document"
                  avatar="https://picsum.photos/32/32?random=1"
                />
                <MessageBubble
                  sender="Steve Jobs"
                  time="11:55 AM"
                  message="Let's sync up shortly to review the feedback together and make sure we're aligned."
                  avatar="https://picsum.photos/32/32?random=2"
                />
                <MessageBubble
                  sender="Lance Simons"
                  time="12:31 PM"
                  message="Sounds good! Based on that, we'll move forward. @MikeDavis @LindaJohnson @EllaYokov - please check the updated planning doc below when you're available."
                  avatar="https://picsum.photos/32/32?random=1"
                  highlight
                />
              </div>

              {/* Article Card */}
              <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="p-3">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    What is The Lark Suite From ChatGPT
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    Lark Suite is an all-in-one cloud-based productivity and collaboration platform...
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                    WHAT IS THE PINGSPACE
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                    SUITE FROM CHATGPT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Thread Panel */}
          <div className="hidden w-64 shrink-0 border-l border-slate-100 p-4 lg:block">
            <h3 className="mb-3 text-sm font-semibold text-slate-700">Thread</h3>
            <div className="space-y-3">
              <ThreadMessage
                sender="Lance Simons"
                time="11:44 AM"
                message="Sounds good! Based on that, we'll move forward. @MikeDavis @BillyJohnson @EllaYokov"
                avatar="https://picsum.photos/32/32?random=1"
              />
              <ThreadMessage
                sender="Lance Simons"
                time="12:31 PM"
                message="Quick thought - we may need more time for dev. Let's tweak the timeline."
                avatar="https://picsum.photos/32/32?random=1"
              />
              <ThreadReply
                text="agreed!"
                sender="Updating the plan"
                avatar="https://picsum.photos/32/32?random=3"
              />
              <ThreadReply
                text="Let's add 1-2 days buffer"
                avatar="https://picsum.photos/32/32?random=4"
              />
            </div>

            {/* Approval Section */}
            <div className="mt-4 rounded-lg bg-amber-50 p-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-amber-700">Approval</span>
                <span className="rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-medium text-amber-800">
                  anytime, anywhere
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-xs text-slate-600">PingSpace Sync Notes with ChatGPT</span>
              </div>
            </div>
          </div>
        </div>
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
      className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

// Shortcut Item Component
function ShortcutItem({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: "purple" | "blue" | "green";
}) {
  const colorClasses = {
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className="flex items-center gap-2 rounded-md px-2 py-1 text-[10px] text-slate-600">
      <span className={`rounded p-1 ${colorClasses[color]}`}>{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}

// Message Bubble Component
function MessageBubble({
  sender,
  time,
  message,
  avatar,
  highlight = false,
}: {
  sender: string;
  time: string;
  message: string;
  avatar: string;
  highlight?: boolean;
}) {
  return (
    <div className={`flex gap-2 ${highlight ? "rounded-lg bg-blue-50/50 p-2" : ""}`}>
      <img
        src={avatar}
        alt={sender}
        className="h-6 w-6 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-medium text-slate-700">{sender}</span>
          <span className="text-[10px] text-slate-400">{time}</span>
        </div>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{message}</p>
      </div>
    </div>
  );
}

// Thread Message Component
function ThreadMessage({
  sender,
  time,
  message,
  avatar,
}: {
  sender: string;
  time: string;
  message: string;
  avatar: string;
}) {
  return (
    <div className="flex gap-2">
      <img
        src={avatar}
        alt={sender}
        className="h-5 w-5 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-1">
          <span className="text-[10px] font-medium text-slate-700">{sender}</span>
          <span className="text-[9px] text-slate-400">{time}</span>
        </div>
        <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">{message}</p>
      </div>
    </div>
  );
}

// Thread Reply Component
function ThreadReply({
  text,
  sender,
  avatar,
}: {
  text: string;
  sender?: string;
  avatar: string;
}) {
  return (
    <div className="ml-7 flex items-center gap-2">
      <img
        src={avatar}
        alt="reply"
        className="h-4 w-4 shrink-0 rounded-full object-cover"
      />
      <div className="rounded-full bg-slate-100 px-2 py-0.5">
        <span className="text-[10px] text-slate-600">{text}</span>
      </div>
      {sender && <span className="text-[9px] text-slate-400">{sender}</span>}
    </div>
  );
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

// Main Component
export default function PingSpaceHero({
  logoText = "PingSpace",
  headline = "Everything your team\nneeds. In one place.",
  subheadline = "Chat, collaborate on docs, schedule meetings, and manage tasks - seamlessly. Lark unifies your workspace for effortless teamwork.",
  primaryCtaText = "Get started",
  secondaryCtaText = "Live demo",
  navItems = defaultNavItems,
  onPrimaryClick,
  onSecondaryClick,
}: PingSpaceHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#B7D0E5] via-[#CDDDE2] to-[#DEE0DE]">
      {/* Sky Background with Clouds */}
      <div className="pointer-events-none absolute inset-0">
        {/* Cloud shapes */}
        <div className="absolute left-[5%] top-[15%] h-16 w-32 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute left-[15%] top-[20%] h-12 w-24 rounded-full bg-white/30 blur-xl" />
        <div className="absolute right-[10%] top-[12%] h-20 w-40 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute right-[20%] top-[18%] h-14 w-28 rounded-full bg-white/30 blur-xl" />
        <div className="absolute left-[40%] top-[8%] h-10 w-20 rounded-full bg-white/35 blur-xl" />
      </div>

      {/* Desert/Sandy terrain at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#E4D0C1] via-[#E4D0C1]/70 to-transparent" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        <PingSpaceLogo text={logoText} />

        {/* Nav Items - Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
            Sign in
          </button>
          <Button
            size="sm"
            className="rounded-full bg-blue-500 px-4 text-sm font-medium text-white hover:bg-blue-600"
          >
            Get started
          </Button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 pb-8 sm:pt-16 lg:pt-20">
        {/* Star Decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="absolute right-[15%] top-4 sm:right-[20%]"
        >
          <StarDecoration className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="absolute right-[10%] top-20 sm:right-[15%]"
        >
          <StarDecoration className="h-4 w-4" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-3xl font-light italic tracking-tight text-slate-600 sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          style={{ lineHeight: 1.2 }}
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-slate-500 sm:text-base"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            onClick={onPrimaryClick}
            className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600"
          >
            {primaryCtaText}
          </Button>
          <Button
            variant="outline"
            onClick={onSecondaryClick}
            className="rounded-full border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {secondaryCtaText}
          </Button>
        </motion.div>
      </div>

      {/* Floating Labels */}
      <FloatingLabel text="All your work in one place" position="left" />
      <FloatingLabel text="Approval anytime, anywhere" position="right" />

      {/* App Screenshot */}
      <div className="relative z-10 mt-8 pb-20">
        <AppScreenshot />
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#E4D0C1]/80 to-transparent" />
    </section>
  );
}
