"use client";

import { motion } from "motion/react";
import { ArrowRight, Play, Search, Home, Users, FileText, Star, Plus, Settings, Apple, Monitor, Globe } from "lucide-react";

interface ClayCrmHeroProps {
  badge?: string;
  badgeText?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  watchVideoText?: string;
  watchVideoHref?: string;
  availableOnText?: string;
}

// Mock avatar data for the app UI
const mockAvatars = [
  { name: "Delphine Arnault", color: "bg-amber-100" },
  { name: "Winnie Byanyima", color: "bg-pink-100" },
  { name: "John Maeda", color: "bg-emerald-100" },
  { name: "Erika James", color: "bg-purple-100" },
  { name: "Daron K. Roberts", color: "bg-blue-100" },
  { name: "Laysha", color: "bg-rose-100" },
  { name: "Khadija", color: "bg-orange-100" },
  { name: "Ayo", color: "bg-teal-100" },
  { name: "Marie Kondo", color: "bg-yellow-100" },
  { name: "Issey", color: "bg-indigo-100" },
  { name: "Alison", color: "bg-cyan-100" },
  { name: "Melanie", color: "bg-lime-100" },
];

function Avatar({ name, color, size = "sm" }: { name: string; color: string; size?: "sm" | "md" }) {
  const sizeClasses = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <div className={`${sizeClasses} ${color} rounded-full flex items-center justify-center font-medium text-gray-700`}>
      {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
    </div>
  );
}

function AppMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100" style={{ width: "520px" }}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-44 border-r border-gray-100 p-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="font-semibold text-gray-900">Clay</span>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 px-2 py-1.5">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </div>

          {/* Nav items */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-gray-900 text-sm px-2 py-1.5 bg-gray-50 rounded-lg">
              <Home className="w-4 h-4" />
              <span>Home</span>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-auto" />
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm px-2 py-1.5">
              <Users className="w-4 h-4" />
              <span>People</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm px-2 py-1.5">
              <FileText className="w-4 h-4" />
              <span>Notes</span>
            </div>
          </div>

          {/* Groups */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider mb-2 px-2">
              <span>Groups</span>
              <Plus className="w-3 h-3" />
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2 px-2 py-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>Starred</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span className="w-3 h-3 text-center">*</span>
                <span>B.E.T.</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span className="w-3 h-3 text-center">*</span>
                <span>Emmy Awards</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <span className="w-3 h-3 text-center">*</span>
                <span>Lunch Party</span>
              </div>
            </div>
          </div>

          {/* New Person */}
          <div className="mt-auto pt-6">
            <div className="flex items-center justify-between text-sm text-gray-500 px-2 py-2 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>New Person</span>
              </div>
              <Settings className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Home</h2>

          <div className="space-y-3 text-sm">
            {/* Feed items */}
            <div className="flex items-start gap-3">
              <Avatar name="Delphine Arnault" color="bg-amber-100" />
              <div>
                <p><span className="font-medium text-orange-500">Delphine Arnault</span> invited you to the shared group <span className="font-medium">LVI...</span></p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-amber-50/50 -mx-2 px-2 py-2 rounded-lg">
              <Avatar name="Winnie Byanyima" color="bg-pink-100" />
              <div>
                <p>Wish <span className="font-medium text-orange-500">Winnie Byanyima</span> happy birthday today! <span className="text-base">🥳</span></p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-emerald-50/50 -mx-2 px-2 py-2 rounded-lg">
              <Avatar name="John Maeda" color="bg-emerald-100" />
              <div>
                <p>Your contact <span className="font-medium">John Maeda</span> joined Clay. Give them a w...</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar name="Erika James" color="bg-purple-100" />
              <div>
                <p><span className="font-medium text-orange-500">Erika James</span> shared the profile <span className="font-medium">Brian Blake</span> with you...</p>
              </div>
            </div>

            {/* Yesterday section */}
            <div className="text-xs text-gray-400 uppercase tracking-wider pt-2">Yesterday</div>

            <div className="flex items-start gap-3">
              <Avatar name="Daron K. Roberts" color="bg-blue-100" />
              <div>
                <p>You set a reminder for <span className="font-medium">Daron K. Roberts</span> today at 8a...</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex -space-x-2">
                <Avatar name="Laysha" color="bg-rose-100" />
                <Avatar name="Khadija" color="bg-orange-100" />
                <Avatar name="Ayo" color="bg-teal-100" />
              </div>
              <div>
                <p><span className="font-medium text-orange-500">Laysha, Khadija, Ayo</span> and <span className="font-medium text-orange-500">2 others</span></p>
                <p className="text-gray-400 text-xs">APR 21 · 7PM - 8PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar name="Marie Kondo" color="bg-yellow-100" />
              <div>
                <p><span className="font-medium">Marie Kondo</span></p>
                <p className="text-gray-400 text-xs">IN THE NEWS · APR 21</p>
                <div className="mt-1 p-2 bg-gray-50 rounded text-xs">
                  <p className="font-medium">Marie Kondo Takes On a New Role: Life Coach</p>
                  <p className="text-orange-500">VIA NYT <ArrowRight className="w-3 h-3 inline" /></p>
                </div>
              </div>
            </div>

            {/* Last Week */}
            <div className="text-xs text-gray-400 uppercase tracking-wider pt-2">Last Week</div>

            <div className="flex items-start gap-3">
              <div className="flex -space-x-2">
                {mockAvatars.slice(9, 12).map((avatar, i) => (
                  <Avatar key={i} name={avatar.name} color={avatar.color} />
                ))}
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500">+31</div>
              </div>
              <div>
                <p><span className="font-medium text-orange-500">Issey, Alison, Melanie</span> & <span className="font-medium text-orange-500">34 more</span> people have been added...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClayCrmHero({
  badge = "NEW",
  badgeText = "Introducing Clay for Teams",
  title = "Finally, manage\nall your personal\nand professional\nrelationships",
  description = "Move beyond the CRM—automatically organize, intelligently search and keep your entire network in sync.",
  ctaText = "GET CLAY FREE",
  ctaHref = "#",
  watchVideoText = "WATCH VIDEO",
  watchVideoHref = "#",
  availableOnText = "AVAILABLE ON",
}: ClayCrmHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: "#F7F5F3" }}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "system-ui" }}>clay</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">STORIES</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">CAREERS</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">PRICING</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">ABOUT</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">SIGN IN</a>
          <a
            href="#"
            className="text-sm text-white px-4 py-2 rounded-full transition-colors"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            GET STARTED
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="text-xs font-semibold px-2 py-1 rounded border"
                style={{ color: "#F57739", borderColor: "#F57739" }}
              >
                {badge}
              </span>
              <span className="text-sm text-gray-500">{badgeText}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl font-serif leading-tight text-gray-900 mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-full transition-transform hover:scale-105"
                style={{ backgroundColor: "#F57739" }}
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={watchVideoHref}
                className="inline-flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                {watchVideoText}
              </a>
            </motion.div>

            {/* Available On */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-xs text-gray-400 tracking-wider">{availableOnText}</span>
              <div className="flex items-center gap-3">
                <Apple className="w-5 h-5 text-gray-400" />
                <Monitor className="w-5 h-5 text-gray-400" />
                <Globe className="w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            className="flex-1 flex justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
