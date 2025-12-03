"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#F5F3EC",
  accent: "#1E3A8A",
  accentHover: "#1E40AF",
  mutedText: "#6B7280",
  ctaBanner: "#FEF08A",
  newBadge: "#EF4444",
  borderColor: "#D1D5DB",
  inputBg: "#FFFFFF",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import "./font.css";

interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterOdditProps {
  // Newsletter Section
  newsletterTitle?: string;
  newsletterDescription?: string;
  emailPlaceholder?: string;
  subscribeButtonText?: string;

  // Main CTA Section
  mainHeading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };

  // Navigation Columns
  columns?: FooterColumn[];

  // Footer Info
  logoText?: string;
  copyrightText?: string;

  // Bottom CTA Banner
  bannerText?: string;
  bannerPrimaryCta?: { label: string; href: string };
  bannerSecondaryCta?: { label: string; href: string };

  // Chat Button
  chatButtonText?: string;
  onChatClick?: () => void;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Conversion Reports", href: "#" },
      { label: "Landing Pages", href: "#", isNew: true },
      { label: "Try Oddit Free", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "#" },
      { label: "Fresh Takes", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email Us", href: "#" },
      { label: "Book a Call", href: "#" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Case Studies", href: "#" },
      { label: "WTF Is Oddit?", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    title: "Boring Stuff",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

// Sheep mascot SVG component (simplified line art style)
function SheepMascot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fluffy body outline */}
      <path
        d="M25 60C15 55 10 45 15 35C20 25 35 20 50 20C55 18 60 15 70 15C85 15 100 25 105 40C110 55 100 70 85 75C80 77 75 78 70 78"
        stroke={COLORS.accent}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Wool curls */}
      <circle cx="30" cy="40" r="8" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="45" cy="30" r="8" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="62" cy="25" r="8" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="78" cy="30" r="8" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="90" cy="42" r="8" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="85" cy="58" r="8" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      {/* Face */}
      <ellipse cx="55" cy="55" rx="15" ry="18" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      {/* Eyes */}
      <circle cx="50" cy="52" r="2" fill={COLORS.accent} />
      <circle cx="60" cy="52" r="2" fill={COLORS.accent} />
      {/* Nose */}
      <ellipse cx="55" cy="60" rx="3" ry="2" stroke={COLORS.accent} strokeWidth="1.5" fill="none" />
      {/* Ears */}
      <ellipse cx="38" cy="48" rx="6" ry="4" stroke={COLORS.accent} strokeWidth="2" fill="none" transform="rotate(-30 38 48)" />
      <ellipse cx="72" cy="48" rx="6" ry="4" stroke={COLORS.accent} strokeWidth="2" fill="none" transform="rotate(30 72 48)" />
      {/* Legs */}
      <line x1="40" y1="75" x2="40" y2="90" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="75" x2="55" y2="90" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Thinking sheep with glasses (larger mascot)
function ThinkingSheep({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fluffy wool body */}
      <circle cx="70" cy="80" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="95" cy="65" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="125" cy="60" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="150" cy="70" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="165" cy="95" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="160" cy="125" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="145" cy="145" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="115" cy="155" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="85" cy="150" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="60" cy="130" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="55" cy="100" r="15" stroke={COLORS.accent} strokeWidth="2" fill="none" />

      {/* Face */}
      <ellipse cx="115" cy="115" rx="30" ry="35" stroke={COLORS.accent} strokeWidth="2" fill="none" />

      {/* Glasses */}
      <rect x="88" y="100" width="22" height="18" rx="4" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <rect x="118" y="100" width="22" height="18" rx="4" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <line x1="110" y1="109" x2="118" y2="109" stroke={COLORS.accent} strokeWidth="2" />
      <line x1="140" y1="109" x2="165" y2="95" stroke={COLORS.accent} strokeWidth="2" />

      {/* Eyes behind glasses */}
      <circle cx="99" cy="109" r="3" fill={COLORS.accent} />
      <circle cx="129" cy="109" r="3" fill={COLORS.accent} />

      {/* Nose */}
      <ellipse cx="115" cy="125" rx="5" ry="3" stroke={COLORS.accent} strokeWidth="2" fill="none" />

      {/* Ears */}
      <ellipse cx="78" cy="100" rx="10" ry="6" stroke={COLORS.accent} strokeWidth="2" fill="none" transform="rotate(-20 78 100)" />
      <ellipse cx="152" cy="100" rx="10" ry="6" stroke={COLORS.accent} strokeWidth="2" fill="none" transform="rotate(20 152 100)" />

      {/* Hand/arm touching chin (thinking pose) */}
      <path
        d="M70 180C65 175 60 165 65 155C70 145 80 140 90 145"
        stroke={COLORS.accent}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="65" cy="155" r="8" stroke={COLORS.accent} strokeWidth="2" fill="none" />

      {/* Legs */}
      <line x1="95" y1="165" x2="90" y2="200" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" />
      <line x1="135" y1="165" x2="140" y2="200" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Small robot/mascot for CTA banner
function RobotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <rect x="8" y="8" width="24" height="20" rx="3" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      {/* Antenna */}
      <line x1="20" y1="8" x2="20" y2="3" stroke={COLORS.accent} strokeWidth="2" />
      <circle cx="20" cy="3" r="2" fill={COLORS.accent} />
      {/* Eyes */}
      <circle cx="14" cy="16" r="3" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="26" cy="16" r="3" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      <circle cx="14" cy="16" r="1" fill={COLORS.accent} />
      <circle cx="26" cy="16" r="1" fill={COLORS.accent} />
      {/* Mouth */}
      <line x1="14" y1="23" x2="26" y2="23" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" />
      {/* Body */}
      <rect x="12" y="28" width="16" height="8" rx="2" stroke={COLORS.accent} strokeWidth="2" fill="none" />
      {/* Arms */}
      <line x1="8" y1="30" x2="3" y2="34" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="30" x2="37" y2="34" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function FooterOddit({
  newsletterTitle = "The\nPerspective",
  newsletterDescription = "Conversion design, UX education,\nand founder-led breakdowns.\nPackaged up and delivered\nstraight to your inbox.",
  emailPlaceholder = "Email Address",
  subscribeButtonText = "Get Conversion Tips",
  mainHeading = "We are driven by quality and we're\n0 bullshit. If you think the same\nway, we love a good chat.",
  primaryCta = { label: "Try Oddit Free", href: "#" },
  secondaryCta = { label: "Book A Discovery Call", href: "#" },
  columns = defaultColumns,
  logoText = "oddit",
  copyrightText = "Oddit Inc. 2024",
  bannerText = "Get started with an intro call",
  bannerPrimaryCta = { label: "Book A Call", href: "#" },
  bannerSecondaryCta = { label: "View Products", href: "#" },
  chatButtonText = "We're humans, let's chat!",
  onChatClick,
}: FooterOdditProps) {
  const topColumns = columns.slice(0, 3);
  const bottomColumns = columns.slice(3, 6);

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left Section - Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 lg:border-r lg:pr-12"
            style={{ borderColor: COLORS.borderColor }}
          >
            {/* Newsletter Title with Mascot */}
            <div className="flex items-start gap-2 mb-6">
              <div className="flex flex-col">
                <span
                  className="text-3xl font-light italic leading-tight"
                  style={{
                    color: COLORS.accent,
                    fontFamily: "'Instrument Serif', serif",
                  }}
                >
                  {newsletterTitle.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < newsletterTitle.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
              <SheepMascot className="w-16 h-14 -mt-1" />
            </div>

            {/* Description */}
            <p
              className="text-sm mb-8 leading-relaxed"
              style={{ color: COLORS.mutedText }}
            >
              {newsletterDescription.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < newsletterDescription.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>

            {/* Email Input */}
            <div className="space-y-3 mb-12">
              <input
                type="email"
                placeholder={emailPlaceholder}
                className="w-full max-w-[280px] px-4 py-3 text-sm rounded-full border-2 outline-none transition-all focus:border-opacity-100"
                style={{
                  borderColor: COLORS.accent,
                  backgroundColor: COLORS.inputBg,
                  color: COLORS.accent,
                }}
              />
              <button
                className="w-full max-w-[280px] px-6 py-3 text-sm font-medium rounded-full transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: COLORS.accent,
                  color: COLORS.inputBg,
                }}
              >
                {subscribeButtonText}
              </button>
            </div>

            {/* Logo and Copyright */}
            <div className="mt-auto">
              <h2
                className="text-4xl font-bold tracking-tight mb-2"
                style={{
                  color: COLORS.accent,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {logoText}
              </h2>
              <p
                className="text-sm"
                style={{ color: COLORS.mutedText }}
              >
                &copy; {copyrightText}
              </p>
            </div>
          </motion.div>

          {/* Right Section - CTA and Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:w-2/3 lg:pl-12"
          >
            {/* Main Heading with Mascot */}
            <div className="flex items-start justify-between mb-8">
              <h3
                className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-xl"
                style={{
                  color: COLORS.accent,
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                {mainHeading.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < mainHeading.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <ThinkingSheep className="hidden md:block w-40 h-44 -mt-8 -mr-4" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={primaryCta.href}
                className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: COLORS.accent,
                  color: COLORS.inputBg,
                }}
              >
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full border-2 transition-opacity hover:opacity-70"
                style={{
                  borderColor: COLORS.accent,
                  color: COLORS.accent,
                }}
              >
                {secondaryCta.label}
              </a>
            </div>

            {/* Top Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {topColumns.map((column, columnIndex) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + columnIndex * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <h4
                    className="text-sm font-semibold"
                    style={{ color: COLORS.accent }}
                  >
                    {column.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <li key={link.label} className="flex items-center gap-2">
                        <a
                          href={link.href}
                          className="text-sm transition-opacity hover:opacity-70"
                          style={{ color: COLORS.mutedText }}
                        >
                          {link.label}
                        </a>
                        {link.isNew && (
                          <span
                            className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded"
                            style={{
                              backgroundColor: COLORS.newBadge,
                              color: COLORS.inputBg,
                            }}
                          >
                            NEW!
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Bottom Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {bottomColumns.map((column, columnIndex) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + columnIndex * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <h4
                    className="text-sm font-semibold"
                    style={{ color: COLORS.accent }}
                  >
                    {column.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm transition-opacity hover:opacity-70"
                          style={{ color: COLORS.mutedText }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full py-4"
        style={{ backgroundColor: COLORS.ctaBanner }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <RobotIcon className="w-10 h-10" />
              <span
                className="text-lg font-medium"
                style={{ color: COLORS.accent }}
              >
                {bannerText}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={bannerPrimaryCta.href}
                className="px-5 py-2 text-sm font-medium rounded-full border-2 transition-opacity hover:opacity-70"
                style={{
                  borderColor: COLORS.accent,
                  color: COLORS.accent,
                  backgroundColor: "transparent",
                }}
              >
                {bannerPrimaryCta.label}
              </a>
              <a
                href={bannerSecondaryCta.href}
                className="px-5 py-2 text-sm font-medium rounded-full border-2 transition-opacity hover:opacity-70"
                style={{
                  borderColor: COLORS.accent,
                  color: COLORS.accent,
                  backgroundColor: "transparent",
                }}
              >
                {bannerSecondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chat Button - Fixed Position */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        onClick={onChatClick}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
        style={{
          backgroundColor: COLORS.accent,
          color: COLORS.inputBg,
        }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">{chatButtonText}</span>
      </motion.button>
    </footer>
  );
}
