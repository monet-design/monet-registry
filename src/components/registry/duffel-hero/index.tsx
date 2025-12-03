"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    primary: "#2E223E",         // Dark purple primary
    primaryHover: "#3d2f52",    // Purple hover
    accent: "#E6F0ED",          // Light mint badge bg
    accentText: "#2E7D5B",      // Green badge text
    banner: "#EBD5BF",          // Beige banner
  },
  dark: {
    primary: "#4a3a5e",
    primaryHover: "#5a4a6e",
    accent: "#d0e0dd",
    accentText: "#267d5b",
    banner: "#d5c5af",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, ArrowRight, Check, Plane, MapPin } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface FeatureBadge {
  icon?: React.ReactNode;
  label: string;
}

interface DuffelHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  bannerText?: string;
  bannerHighlight?: string;
  headline?: string;
  highlightWord?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  navItems?: NavItem[];
  featureBadges?: FeatureBadge[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Duffel Logo Component
function DuffelLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three vertical bars icon */}
      <rect x="0" y="4" width="4" height="16" rx="2" fill="currentColor" />
      <rect x="7" y="4" width="4" height="16" rx="2" fill="currentColor" />
      <rect x="14" y="4" width="4" height="16" rx="2" fill="currentColor" />
      {/* Duffel text */}
      <text x="24" y="17" fontFamily="Inter, system-ui, sans-serif" fontSize="14" fontWeight="600" fill="currentColor">
        Duffel
      </text>
    </svg>
  );
}

// Navigation Component
function Navigation({
  logoText,
  navItems,
}: {
  logoText: string;
  navItems: NavItem[];
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-6 py-4 lg:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#1a1625]">
          <DuffelLogo className="h-6" />
        </div>

        {/* Nav Items - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#5D5469] hover:text-[#1a1625] transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-[#5D5469] hover:text-[#1a1625] transition-colors px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300">
            Log in
          </button>
          <button className="text-sm text-white bg-[#1a1625] hover:bg-[#2E223E] transition-colors px-4 py-2 rounded-lg">
            Sign up
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// Announcement Banner
function AnnouncementBanner({
  highlight,
  text,
}: {
  highlight: string;
  text: string;
}) {
  return (
    <div className="w-full bg-[#EBD5BF] py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <span className="font-semibold text-[#1a1625] tracking-wide uppercase text-xs">
          {highlight}
        </span>
        <span className="text-[#1a1625]/70">|</span>
        <span className="text-[#1a1625]/80">{text}</span>
        <ArrowRight className="w-4 h-4 text-[#1a1625]" />
      </div>
    </div>
  );
}

// Feature Badge Component
function FeatureBadge({ icon, label }: FeatureBadge) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 px-3 py-2 bg-[#E6F0ED] rounded-full"
    >
      {icon || <Check className="w-4 h-4 text-[#2E7D5B]" />}
      <span className="text-sm text-[#1a1625]">{label}</span>
    </motion.div>
  );
}

// Flight Search Card
function FlightSearchCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="absolute left-[2%] top-[5%] w-[260px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-10"
    >
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="trip" defaultChecked className="accent-[#2E223E]" />
          <span className="text-sm text-gray-600">One way</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="trip" className="accent-[#2E223E]" />
          <span className="text-sm text-gray-600">Return</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="trip" className="accent-[#2E223E]" />
          <span className="text-sm text-gray-600">Multi-city</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Origin</label>
          <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">SFO</div>
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Destination</label>
          <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium">LHR</div>
        </div>
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-500 mb-1 block">Departure date</label>
        <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm">14 / 04 / 2023</div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Passengers</label>
          <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm">2 Adults</div>
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Cabin class</label>
          <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm">Business</div>
        </div>
      </div>

      <button className="w-full bg-[#2E223E] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#3d2f52] transition-colors">
        Search flights
      </button>
    </motion.div>
  );
}

// Code Editor Card
function CodeEditorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="absolute left-[0%] bottom-[0%] w-[280px] bg-[#1E1E2E] rounded-xl shadow-xl overflow-hidden z-5"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-[#2D2D3A] border-b border-gray-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
      </div>
      <div className="p-4 font-mono text-xs leading-relaxed">
        <div className="text-gray-500">1</div>
        <div className="flex">
          <span className="text-gray-500 mr-3">2</span>
          <span className="text-[#C586C0]">import</span>
          <span className="text-gray-300">{" { Duffel } "}</span>
          <span className="text-[#C586C0]">from</span>
          <span className="text-[#CE9178]">{" 'duffel/api'"}</span>
        </div>
        <div className="text-gray-500">3</div>
        <div className="flex">
          <span className="text-gray-500 mr-3">4</span>
          <span className="text-[#569CD6]">const</span>
          <span className="text-[#9CDCFE]"> duffel</span>
          <span className="text-gray-300"> = </span>
          <span className="text-[#569CD6]">new</span>
          <span className="text-[#4EC9B0]"> Duffel</span>
          <span className="text-gray-300">{"({"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-3">5</span>
          <span className="text-[#9CDCFE]">  token</span>
          <span className="text-gray-300">: </span>
          <span className="text-[#CE9178]">YOUR_ACCESS_TOKEN</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-3">6</span>
          <span className="text-gray-300">{"})"}</span>
        </div>
        <div className="text-gray-500">7</div>
        <div className="flex">
          <span className="text-gray-500 mr-3">8</span>
          <span className="text-[#9CDCFE]">duffel</span>
          <span className="text-gray-300">.</span>
          <span className="text-[#DCDCAA]">offerRequests</span>
          <span className="text-gray-300">.</span>
          <span className="text-[#DCDCAA]">create</span>
          <span className="text-gray-300">{"({"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-3">9</span>
          <span className="text-[#9CDCFE]">  slices</span>
          <span className="text-gray-300">: [</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-2">10</span>
          <span className="text-gray-300">{"    {"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 mr-2">11</span>
          <span className="text-[#9CDCFE]">      origin</span>
          <span className="text-gray-300">: </span>
          <span className="text-[#CE9178]">"SFO"</span>
          <span className="text-gray-300">,</span>
        </div>
      </div>
    </motion.div>
  );
}

// Trips Card
function TripsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="absolute left-[38%] top-[0%] w-[180px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-20"
    >
      <div className="p-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-500">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 bg-gray-300 rounded-sm" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-sm">Upcoming trips</span>
          <span className="text-xs text-[#2E223E]">View all</span>
        </div>
        <div className="bg-gray-100 rounded-lg h-20 mb-2 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <Plane className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        <div className="text-xs font-medium">Product Team Meet-up</div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <MapPin className="w-3 h-3" />
          <span>New York, USA</span>
        </div>
      </div>
    </motion.div>
  );
}

// Hotel Card
function HotelCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, rotate: 3 }}
      animate={{ opacity: 1, x: 0, rotate: 3 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="absolute right-[2%] top-[0%] w-[200px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-15"
    >
      <div className="h-28 bg-gradient-to-br from-gray-200 to-gray-300 relative">
        <div className="absolute top-2 left-2 flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <div className="absolute bottom-2 left-2 bg-[#E6F0ED] text-[#2E7D5B] text-xs px-2 py-1 rounded-full">
          Exclusive deal
        </div>
      </div>
      <div className="p-3">
        <div className="font-semibold text-sm mb-1">The Park Avenue</div>
        <div className="text-xs text-gray-500 mb-2">444 Park Avenue South - New York City</div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">4 nights from</span>
          <span className="font-semibold text-sm">US$ 1,524.12</span>
        </div>
      </div>
    </motion.div>
  );
}

// Booking Status Card
function BookingStatusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="absolute right-[0%] bottom-[0%] w-[240px] bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-20"
    >
      {[
        { status: "Confirmed", route: "LHR -> JFK", date: "14 Mar 2022, 22:00", price: "234.12", passenger: "Pepper Potts", color: "text-green-600" },
        { status: "Confirmed", route: "SEA -> JFK", date: "14 Mar 2022, 22:00", price: "1,230.45", passenger: "James Wair", color: "text-green-600", extra: "+3 more" },
        { status: "Confirmed", route: "JFK -> SEA", date: "14 Mar 2022, 22:00", price: "123.67", passenger: "Steve Domin", color: "text-green-600" },
      ].map((booking, index) => (
        <div key={index} className={`flex items-start gap-2 ${index < 2 ? "pb-2 mb-2 border-b border-gray-100" : ""}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-medium truncate">{booking.route.split(" -> ")[0]}</span>
              <span className={`text-xs ${booking.color}`}>{booking.status}</span>
            </div>
            <div className="text-xs text-gray-500">{booking.route}</div>
            {booking.extra && <span className="text-xs text-[#2E223E]">{booking.extra}</span>}
            <div className="text-xs text-gray-400">{booking.date}</div>
            <div className="text-xs text-gray-400">{booking.passenger}</div>
          </div>
          <div className="text-xs font-medium shrink-0">{booking.price}</div>
        </div>
      ))}
    </motion.div>
  );
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Use cases", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
  { label: "Company", href: "#", hasDropdown: true },
];

const defaultFeatureBadges: FeatureBadge[] = [
  { label: "Global inventory" },
  { label: "Easy-to-use APIs" },
  { label: "No need for accreditation" },
];

// Main Component
export default function DuffelHero({
  mode = "light",
  logoText = "Duffel",
  bannerHighlight = "WE LAUNCHED DUFFEL STAYS",
  bannerText = "Check out the fastest way to start selling accommodation",
  headline = "Sell travel,",
  highlightWord = "without the complexity.",
  description = "Any business - from travel startups to financial enterprises - can build with Duffel. Shop flights and accommodation, purchase extras, manage bookings and more.",
  primaryCtaText = "Start now",
  secondaryCtaText = "Contact us",
  navItems = defaultNavItems,
  featureBadges = defaultFeatureBadges,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: DuffelHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Announcement Banner */}
      <AnnouncementBanner highlight={bannerHighlight} text={bannerText} />

      {/* Navigation */}
      <Navigation logoText={logoText} navItems={navItems} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1a1625] leading-[1.1] tracking-tight mb-2"
        >
          {headline}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1a1625] leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }}
        >
          {highlightWord}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-[#5D5469] leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E223E] hover:bg-[#3d2f52] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {primaryCtaText}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-[#1a1625] font-medium rounded-lg border border-gray-300 hover:border-gray-400 transition-all duration-300"
          >
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>

      {/* UI Cards Showcase */}
      <div className="relative h-[450px] max-w-6xl mx-auto">
        {/* Feature Badges - Left side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute left-[28%] top-[35%] flex flex-col gap-2 z-30"
        >
          {featureBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <FeatureBadge {...badge} />
            </motion.div>
          ))}
        </motion.div>

        {/* Cards */}
        <FlightSearchCard />
        <CodeEditorCard />
        <TripsCard />
        <HotelCard />
        <BookingStatusCard />
      </div>

      {/* Google Fonts for Instrument Serif */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
      `}</style>
    </section>
  );
}
