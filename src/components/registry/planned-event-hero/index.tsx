"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F2F4F5",
    accent: "#46A5F0",
    accentHover: "#3590d8",
  },
} as const;

const IMAGES = {
  eventCatering: {
    path: "/registry/planned-event-hero/event-catering.jpg",
    alt: "Event catering",
    prompt: `Professional event catering service.
Style: High-quality event photography
Layout: Elegant food presentation, catering setup
Composition: Professional event service
Color palette: Warm, appetizing tones
Mood: Premium, elegant, professional
Technical: High resolution, appealing presentation`,
  },
  eventVenue: {
    path: "/registry/planned-event-hero/event-venue.jpg",
    alt: "Event venue",
    prompt: `Modern event venue interior.
Style: Architectural event photography
Layout: Spacious venue, elegant setting
Composition: Professional event space
Color palette: Neutral, sophisticated tones
Mood: Elegant, spacious, professional
Technical: High resolution, well-lit`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  ChevronDown,
  CheckSquare,
  Square,
  FileText,
  CheckCircle,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

interface TrustedLogo {
  name: string;
  width?: number;
}

interface ChecklistItem {
  label: string;
  checked: boolean;
}

interface PaymentDetail {
  label: string;
  value: string;
}

interface PlannedEventHeroProps {
  mode?: "light";
  brandName?: string;
  navItems?: NavItem[];
  headline?: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  trustedByText?: string;
  trustedLogos?: TrustedLogo[];
  venueLabel?: string;
  venueLocation?: string;
  venueName?: string;
  venueRating?: number;
  checklistTitle?: string;
  checklistItems?: ChecklistItem[];
  paymentTitle?: string;
  invoiceLabel?: string;
  paymentDetails?: PaymentDetail[];
  discountLabel?: string;
  discountValue?: string;
  paidBadgeText?: string;
  eventImage1?: string;
  eventImage2?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Product", hasDropdown: true },
  { label: "Marketplace", hasDropdown: true },
  { label: "Learn", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

const defaultTrustedLogos: TrustedLogo[] = [
  { name: "airbnb", width: 70 },
  { name: "amazon", width: 80 },
  { name: "Google", width: 60 },
  { name: "SAMSUNG", width: 80 },
  { name: "TURO", width: 50 },
  { name: "Nespresso", width: 80 },
];

const defaultChecklistItems: ChecklistItem[] = [
  { label: "Approve event budget", checked: false },
  { label: "Set-up RSVP email", checked: true },
];

const defaultPaymentDetails: PaymentDetail[] = [
  { label: "Amount", value: "$47,620 USD" },
  { label: "Payment method", value: "Credit card" },
];

export default function PlannedEventHero({
  mode = "light",
  brandName = "Planned",
  navItems = defaultNavItems,
  headline = "Where your\nevents come\ntogether",
  description = "Planned makes it easy for anyone to plan\nsuccessful events while giving procurement teams\nthe visibility and control they need to maximize their\nbudget.",
  primaryCta = "Book a demo",
  secondaryCta = "Quick product tour",
  trustedByText = "Trusted by",
  trustedLogos = defaultTrustedLogos,
  venueLabel = "Venue",
  venueLocation = "New York",
  venueName = "Industrial loft",
  venueRating = 4.9,
  checklistTitle = "Checklist",
  checklistItems = defaultChecklistItems,
  paymentTitle = "Payment schedule",
  invoiceLabel = "Invoice",
  paymentDetails = defaultPaymentDetails,
  discountLabel = "Discount",
  discountValue = "15%",
  paidBadgeText = "Paid",
  eventImage1 = "/registry/planned-event-hero/event-catering.jpg",
  eventImage2 = "/registry/planned-event-hero/event-venue.jpg",
}: PlannedEventHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-8 lg:px-16 py-4"
      >
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-[#1A1A1A] tracking-tight">
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-1 text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors">
            Become a supplier
          </button>
          <button className="hidden sm:block text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors">
            Log in
          </button>
          <button
            className="px-4 py-2 text-sm text-white rounded-full transition-colors"
            style={{ backgroundColor: colors.accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
          >
            {primaryCta}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between px-8 lg:px-16 pt-8 lg:pt-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl z-10"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-[#1A1A1A] leading-tight mb-6">
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
            <span className="inline-block ml-2 text-[#1A1A1A]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="inline-block"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base text-[#5A5A5A] leading-relaxed mb-8">
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < description.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#393B3C] rounded-full hover:bg-[#2a2c2d] transition-colors">
              {primaryCta}
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-[#4A4A4A] bg-white border border-[#D0D0D0] rounded-full hover:bg-gray-50 transition-colors">
              {secondaryCta}
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[#7A7A7A]">{trustedByText}</p>
            <div className="flex flex-wrap items-center gap-6">
              {trustedLogos.map((logo, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-[#6A6A6A] font-medium text-sm"
                  style={{
                    fontFamily:
                      logo.name === "airbnb"
                        ? "sans-serif"
                        : logo.name === "TURO"
                          ? "serif"
                          : "inherit",
                    fontStyle: logo.name === "airbnb" ? "normal" : "normal",
                    letterSpacing:
                      logo.name === "SAMSUNG" ? "0.2em" : "normal",
                  }}
                >
                  {logo.name === "airbnb" && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C8.7 0 6.3 2.4 5.5 5.5c-.3.9-.4 1.9-.4 3 0 2.6 1.1 5.4 2.4 8 1.4 2.7 3.1 5.2 4.5 6.9.4.5.9.6 1.4.6s1-.1 1.4-.6c1.4-1.7 3.1-4.2 4.5-6.9 1.3-2.6 2.4-5.4 2.4-8 0-1.1-.1-2.1-.4-3C18.7 2.4 16.3 0 12 0zm0 11.5c-1.9 0-3.5-1.6-3.5-3.5S10.1 4.5 12 4.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
                      </svg>
                      {logo.name}
                    </span>
                  )}
                  {logo.name === "TURO" && (
                    <span className="border border-[#9A9A9A] px-2 py-0.5 rounded text-xs">
                      {logo.name}
                    </span>
                  )}
                  {logo.name !== "airbnb" && logo.name !== "TURO" && logo.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content - Images and Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex-1 w-full lg:w-auto mt-12 lg:mt-0 lg:ml-8"
        >
          <div className="relative w-full h-[500px] lg:h-[600px]">
            {/* First curved image - Catering */}
            <div
              className="absolute left-0 top-0 w-[280px] lg:w-[340px] h-[380px] lg:h-[460px] overflow-hidden"
              style={{
                borderRadius: "0 0 200px 0",
              }}
            >
              <Image
                src={IMAGES.eventCatering.path}
                alt={IMAGES.eventCatering.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Second curved image - Venue */}
            <div
              className="absolute right-0 top-0 w-[220px] lg:w-[280px] h-[320px] lg:h-[400px] overflow-hidden"
              style={{
                borderRadius: "0 0 0 200px",
              }}
            >
              <Image
                src={IMAGES.eventVenue.path}
                alt={IMAGES.eventVenue.alt}
                fill
                className="object-cover"
              />
              {/* Venue Card Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 bg-[#F0F0F0] rounded text-[#5A5A5A]">
                    {venueLabel}
                  </span>
                  <span className="flex items-center gap-1 text-[#5A5A5A]">
                    <MapPin className="w-3 h-3" />
                    {venueLocation}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    {venueName}
                  </span>
                  <span className="flex items-center gap-0.5 text-xs text-[#1A1A1A]">
                    {venueRating}
                    <Star className="w-3 h-3 fill-[#46A5F0] text-[#46A5F0]" />
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Checklist Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute left-[100px] lg:left-[180px] top-[200px] lg:top-[240px] bg-white rounded-2xl shadow-xl p-5 w-[220px]"
            >
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                {checklistTitle}
              </h3>
              <div className="space-y-3">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.checked ? (
                      <CheckCircle className="w-5 h-5 text-[#46A5F0]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#D0D0D0]" />
                    )}
                    <span
                      className={`text-sm ${item.checked ? "text-[#46A5F0]" : "text-[#5A5A5A]"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Payment Schedule Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute right-0 lg:right-[-20px] top-[320px] lg:top-[350px] bg-white rounded-2xl shadow-xl p-5 w-[240px]"
            >
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-3">
                {paymentTitle}
              </h3>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F0F0F0]">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#5A5A5A]" />
                </div>
                <span className="text-sm font-medium text-[#1A1A1A]">
                  {invoiceLabel}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {paymentDetails.map((detail, index) => (
                  <div key={index}>
                    <p className="text-xs text-[#9A9A9A] mb-0.5">
                      {detail.label}
                    </p>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0]">
                <div>
                  <p className="text-xs text-[#9A9A9A] mb-0.5">
                    {discountLabel}
                  </p>
                  <p className="text-sm font-medium text-[#4CAF50]">
                    {discountValue}
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-[#4CAF50] bg-[#E8F5E9] rounded-full">
                  {paidBadgeText}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-[#F0F0F0]">
                <div>
                  <p className="text-xs text-[#9A9A9A] mb-0.5">Amount</p>
                  <p className="text-sm font-medium text-[#1A1A1A]">
                    $7,000 USD
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#9A9A9A] mb-0.5">Due date</p>
                  <p className="text-sm font-medium text-[#1A1A1A]">
                    10/23/2022
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
