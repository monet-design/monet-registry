"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#0A3D32",
    text: "#FFFFFF",
    textMuted: "#9BB8B0",
    sectionTitle: "#7AA89E",
    divider: "#1A5A4A",
    buttonBg: "#A8D5D0",
    buttonText: "#0A3D32",
  },
  dark: {
    background: "#0A3D32",
    text: "#FFFFFF",
    textMuted: "#9BB8B0",
    sectionTitle: "#7AA89E",
    divider: "#1A5A4A",
    buttonBg: "#A8D5D0",
    buttonText: "#0A3D32",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LinkItem {
  label: string;
  href: string;
}

interface OpeningHour {
  day: string;
  hours: string;
}

interface FooterHawthorneSkinProps {
  mode?: "light" | "dark";
  brandName?: string;
  address?: string[];
  phone?: string;
  email?: string;
  quickLinks?: LinkItem[];
  skinTreatments?: LinkItem[];
  bodyTreatments?: LinkItem[];
  beautyBrows?: LinkItem[];
  openingHours?: OpeningHour[];
  ctaText?: string;
  ctaHref?: string;
  copyrightText?: string;
  bottomLinks?: LinkItem[];
  showAfterpay?: boolean;
}

function AfterpayLogo({ color }: { color: string }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
      style={{ borderColor: color }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
        <path
          d="M8 12L11 15L16 9"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xs font-medium" style={{ color }}>
        afterpay
      </span>
    </div>
  );
}

export default function FooterHawthorneSkin({
  mode = "dark",
  brandName = "Hawthorne\nSkin &\nBeauty.",
  address = ["250 Hawthorne Road, Hawthorne", "QLD 4171"],
  phone = "0482 099 558",
  email = "angels@hawthorneskindandbeauty.com.au",
  quickLinks = [
    { label: "Shop", href: "#" },
    { label: "Packages & Promos", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ],
  skinTreatments = [
    { label: "DMK Enzyme Therapy", href: "#" },
    { label: "Dermalogica Facials", href: "#" },
    { label: "Dermalux LED Light Therapy", href: "#" },
    { label: "Dermaplaning", href: "#" },
    { label: "Dermatonics Facials", href: "#" },
    { label: "IPL Facial Therapy", href: "#" },
    { label: "Peels & Skin Resurfacing", href: "#" },
    { label: "Pro Microneedling", href: "#" },
  ],
  bodyTreatments = [
    { label: "DMK Body Enzyme Therapy", href: "#" },
    { label: "Gut Health & Supplements", href: "#" },
    { label: "Massage", href: "#" },
  ],
  beautyBrows = [
    { label: "Brow Sculpting & Tinting", href: "#" },
    { label: "Lash Lift & Tint", href: "#" },
    { label: "Makeup", href: "#" },
    { label: "Mani & Pedi Care", href: "#" },
    { label: "Spray Tanning", href: "#" },
    { label: "Waxing & IPL Hair Removal", href: "#" },
  ],
  openingHours = [
    { day: "Monday", hours: "By Appointment" },
    { day: "Tuesday", hours: "9:30 AM - 7:30 PM" },
    { day: "Wednesday", hours: "9:30 AM - 7:30 PM" },
    { day: "Thursday", hours: "9:30 AM - 7:30 PM" },
    { day: "Friday", hours: "9:30 AM - 5 PM" },
    { day: "Saturday", hours: "9 AM - 2 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  ctaText = "Book a Treatment",
  ctaHref = "#",
  copyrightText = "@2023 Hawthorne Skin & Beauty",
  bottomLinks = [{ label: "Shipping & Returns", href: "#" }],
  showAfterpay = true,
}: FooterHawthorneSkinProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer
      className="relative w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Column 1: Logo & Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Logo */}
            <div className="flex items-start gap-3">
              <div
                className="w-12 h-12 rounded-full border-2 flex-shrink-0"
                style={{ borderColor: colors.text }}
              />
              <h2
                className="text-sm font-medium leading-tight whitespace-pre-line"
                style={{ color: colors.text }}
              >
                {brandName}
              </h2>
            </div>

            {/* Address */}
            <div className="space-y-1">
              {address.map((line, index) => (
                <p
                  key={index}
                  className="text-sm"
                  style={{ color: colors.text }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Phone */}
            <p className="text-sm" style={{ color: colors.text }}>
              {phone}
            </p>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="text-sm block hover:opacity-80 transition-opacity"
              style={{ color: colors.text }}
            >
              {email}
            </a>

            {/* Afterpay Badge */}
            {showAfterpay && (
              <div className="pt-2">
                <AfterpayLogo color={colors.text} />
              </div>
            )}
          </motion.div>

          {/* Column 2: Quick Links & Skin Treatments */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: colors.sectionTitle }}
              >
                Quick Links
              </h3>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm hover:opacity-80 transition-opacity"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Skin Treatments */}
            <div className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: colors.sectionTitle }}
              >
                Skin Treatments
              </h3>
              <nav className="space-y-2">
                {skinTreatments.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm hover:opacity-80 transition-opacity"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Column 3: Body Treatments & Beauty & Brows */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Body Treatments */}
            <div className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: colors.sectionTitle }}
              >
                Body Treatments
              </h3>
              <nav className="space-y-2">
                {bodyTreatments.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm hover:opacity-80 transition-opacity"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Beauty & Brows */}
            <div className="space-y-4">
              <h3
                className="text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: colors.sectionTitle }}
              >
                Beauty{" "}
                <span className="italic font-normal not-italic">&</span> Brows
              </h3>
              <nav className="space-y-2">
                {beautyBrows.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm hover:opacity-80 transition-opacity"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Column 4: Opening Hours */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3
              className="text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: colors.sectionTitle }}
            >
              Opening Hours
            </h3>
            <div className="space-y-2">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between gap-4 text-sm"
                >
                  <span style={{ color: colors.text }}>{item.day}</span>
                  <span
                    className="text-right"
                    style={{ color: colors.textMuted }}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 5: CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex items-start justify-start lg:justify-end"
          >
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
              }}
            >
              {ctaText}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px mt-16 mb-8"
          style={{ backgroundColor: colors.divider }}
        />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <p className="text-sm" style={{ color: colors.textMuted }}>
            {copyrightText}
          </p>

          <nav className="flex items-center gap-6">
            {bottomLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm italic hover:opacity-80 transition-opacity"
                style={{ color: colors.textMuted }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
