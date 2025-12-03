"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#C5CED6", // 연한 청회색 배경
  accentYellow: "#E4FF4D", // 형광 라임/노란색
  textPrimary: "#1A1A1A", // 주요 텍스트 (검정)
  textSecondary: "#4A4A4A", // 보조 텍스트
  textMuted: "#6B6B6B", // 흐린 텍스트
  inputBackground: "#FFFFFF", // 입력 필드 배경
  buttonDark: "#1A1A1A", // Send 버튼 배경
  borderColor: "#A0A9B2", // 구분선
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin, Instagram, Twitter, ChevronDown, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import "./font.css";

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LocationInfo {
  name: string;
  address: string[];
  phone: string;
}

interface FooterMoveAgencyProps {
  newsletterHeading?: string;
  emailPlaceholder?: string;
  privacyAgreementText?: string;
  logoText?: string;
  tagline?: string[];
  directlyToLinks?: NavLink[];
  aboutLinks?: NavLink[];
  locations?: LocationInfo[];
  contactEmail?: string;
  privacyPolicyText?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  onSubscribe?: (email: string) => void;
}

const defaultDirectlyToLinks: NavLink[] = [
  { label: "Vision", href: "#" },
  { label: "Cases", href: "#" },
  { label: "Solutions", href: "#", hasDropdown: true },
];

const defaultAboutLinks: NavLink[] = [
  { label: "About Move", href: "#" },
  { label: "Updates", href: "#" },
  { label: "Work", href: "#", hasDropdown: true },
];

const defaultLocations: LocationInfo[] = [
  {
    name: "Move Zwolle",
    address: ["Hanzelaan 351", "8017 JM  Zwolle", "Netherlands"],
    phone: "+31 (0)38 - 760 1750",
  },
  {
    name: "Move Amsterdam",
    address: ["Moermanskade 313", "1013 BC  Amsterdam", "Netherlands"],
    phone: "+31 (0)20 - 354 0259",
  },
  {
    name: "Move Lisbon",
    address: ["Av. Fontes Pereira de Melo 14", "1050-121  Lisboa", "Portugal"],
    phone: "+31 (0)20 - 354 0359",
  },
];

export default function FooterMoveAgency({
  newsletterHeading = "Mobile Thinking in your\nmailbox",
  emailPlaceholder = "name@example.com",
  privacyAgreementText = "I agree to the privacy statement",
  logoText = "MOVE",
  tagline = ["MOBILE", "FIRST", "AGENCY"],
  directlyToLinks = defaultDirectlyToLinks,
  aboutLinks = defaultAboutLinks,
  locations = defaultLocations,
  contactEmail = "info@moveagency.com",
  privacyPolicyText = "Privacy Policy",
  socialLinks = {
    linkedin: "#",
    instagram: "#",
    twitter: "#",
  },
  onSubscribe,
}: FooterMoveAgencyProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed && onSubscribe) {
      onSubscribe(email);
    }
  };

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Section - Newsletter and Logo */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 mb-12">
          {/* Left - Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 max-w-md"
          >
            <h2
              className="text-3xl lg:text-4xl leading-tight"
              style={{
                color: COLORS.textPrimary,
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              {newsletterHeading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < newsletterHeading.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm flex items-center gap-1.5"
                  style={{ color: COLORS.textSecondary }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: COLORS.accentYellow }}
                  />
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={emailPlaceholder}
                    className="w-full px-4 py-3 pr-24 rounded-full text-sm outline-none"
                    style={{
                      backgroundColor: COLORS.inputBackground,
                      color: COLORS.textPrimary,
                    }}
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: COLORS.buttonDark }}
                  >
                    Send
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer group">
                <div
                  className="w-4 h-4 border rounded flex items-center justify-center transition-colors"
                  style={{
                    borderColor: COLORS.textMuted,
                    backgroundColor: agreed ? COLORS.textPrimary : "transparent",
                  }}
                  onClick={() => setAgreed(!agreed)}
                >
                  {agreed && <Check className="w-3 h-3 text-white" />}
                </div>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="sr-only"
                />
                <span
                  className="text-sm"
                  style={{ color: COLORS.textSecondary }}
                >
                  I agree to the{" "}
                  <a href="#" className="underline hover:no-underline">
                    privacy statement
                  </a>
                </span>
              </label>
            </form>
          </motion.div>

          {/* Right - Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-start lg:items-end gap-2"
          >
            <span
              className="text-5xl lg:text-6xl font-bold italic tracking-tight"
              style={{
                color: COLORS.textPrimary,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {logoText}
            </span>
            <div
              className="flex flex-col items-start lg:items-end text-xs font-medium tracking-widest"
              style={{ color: COLORS.textSecondary }}
            >
              {tagline.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-10"
          style={{ backgroundColor: COLORS.borderColor }}
        />

        {/* Middle Section - Navigation and Locations */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8 mb-12">
          {/* Left - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3
              className="text-sm font-medium"
              style={{ color: COLORS.textMuted }}
            >
              Directly to
            </h3>
            <div className="flex gap-16">
              {/* Column 1 */}
              <ul className="flex flex-col gap-3">
                {directlyToLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm flex items-center gap-1 transition-opacity hover:opacity-70"
                      style={{ color: COLORS.textPrimary }}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Column 2 */}
              <ul className="flex flex-col gap-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm flex items-center gap-1 transition-opacity hover:opacity-70"
                      style={{ color: COLORS.textPrimary }}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Location Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {locations.map((location, index) => (
              <div key={location.name} className="flex flex-col gap-3">
                <h4
                  className="text-sm font-semibold"
                  style={{ color: COLORS.textPrimary }}
                >
                  {location.name}
                </h4>
                <div className="flex flex-col gap-0.5">
                  {location.address.map((line, i) => (
                    <p
                      key={i}
                      className="text-sm"
                      style={{ color: COLORS.textSecondary }}
                    >
                      {line}
                    </p>
                  ))}
                  <p
                    className="text-sm mt-1"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {location.phone}
                  </p>
                </div>
                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium w-fit transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: COLORS.accentYellow,
                    color: COLORS.textPrimary,
                  }}
                >
                  Route
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ backgroundColor: COLORS.borderColor }}
        />

        {/* Bottom Section - Email, Social Icons, Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          {/* Left - Contact Email */}
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS.accentYellow }}
            />
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: COLORS.textPrimary }}
            >
              {contactEmail}
            </a>
          </div>

          {/* Right - Social Icons and Privacy */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ borderColor: COLORS.textMuted }}
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    className="w-4 h-4"
                    style={{ color: COLORS.textPrimary }}
                  />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ borderColor: COLORS.textMuted }}
                  aria-label="Instagram"
                >
                  <Instagram
                    className="w-4 h-4"
                    style={{ color: COLORS.textPrimary }}
                  />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ borderColor: COLORS.textMuted }}
                  aria-label="Twitter"
                >
                  <Twitter
                    className="w-4 h-4"
                    style={{ color: COLORS.textPrimary }}
                  />
                </a>
              )}
            </div>

            {/* Privacy Policy */}
            <a
              href="#"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: COLORS.textSecondary }}
            >
              {privacyPolicyText}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
