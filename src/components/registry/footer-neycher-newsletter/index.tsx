"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#3A3A3A",
    text: "#FFFFFF",
    textMuted: "#9A9A9A",
    inputBorder: "#6B6B6B",
    checkboxBorder: "#6B6B6B",
  },
  dark: {
    background: "#3A3A3A",
    text: "#FFFFFF",
    textMuted: "#9A9A9A",
    inputBorder: "#6B6B6B",
    checkboxBorder: "#6B6B6B",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import "./font.css";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterNeycherNewsletterProps {
  mode?: "light" | "dark";
  newsletterTitle?: string;
  firstNamePlaceholder?: string;
  emailPlaceholder?: string;
  checkboxLabel?: string;
  privacyPolicyLabel?: string;
  privacyPolicyHref?: string;
  submitLabel?: string;
  infoLinks?: LinkItem[];
  shopLinks?: LinkItem[];
  socialLinks?: LinkItem[];
  showPaymentIcons?: boolean;
}

// Payment Icon Components
function VisaIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
      <text
        x="0"
        y="16"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fontStyle="italic"
        fill={color}
      >
        VISA
      </text>
    </svg>
  );
}

function MastercardIcon({ color }: { color: string }) {
  return (
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
      <text
        x="0"
        y="16"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontStyle="italic"
        fill={color}
      >
        MasterCard
      </text>
    </svg>
  );
}

function PaypalIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
      <text
        x="0"
        y="16"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontStyle="italic"
        fill={color}
      >
        PayPal
      </text>
    </svg>
  );
}

function ApplePayIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
      <path
        d="M8 6C8 6 7 6.5 7 8C7 9.5 8 10 8 10C8 10 7.5 11 7.5 12.5C7.5 15 9 17 10.5 17C10.5 17 9.5 18 11 18C12.5 18 13 17 13 17C14.5 17 15.5 15 15.5 12.5C15.5 11 15 10 15 10C15 10 16 9.5 16 8C16 6.5 15 6 15 6C15 6 14 5 11.5 5C9 5 8 6 8 6Z"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      <text
        x="18"
        y="14"
        fontFamily="Arial, sans-serif"
        fontSize="9"
        fill={color}
      >
        Pay
      </text>
    </svg>
  );
}

function GooglePayIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
      <text
        x="0"
        y="14"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontWeight="500"
        fill={color}
      >
        G Pay
      </text>
    </svg>
  );
}

export default function FooterNeycherNewsletter({
  mode = "dark",
  newsletterTitle = "Enjoy 15% off your first order, access new\nproduct launches and special offers.",
  firstNamePlaceholder = "First Name",
  emailPlaceholder = "Email",
  checkboxLabel = "Sign up for our newsletter to know the latest in the world\nof La Mer. To learn more, view our ",
  privacyPolicyLabel = "Privacy Policy",
  privacyPolicyHref = "#",
  submitLabel = "Submit",
  infoLinks = [
    { label: "About", href: "#" },
    { label: "Jornal", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Uses", href: "#" },
    { label: "Shipping & Return\nPolicy", href: "#" },
  ],
  shopLinks = [
    { label: "Yeast Away", href: "#" },
    { label: "BV Away", href: "#" },
    { label: "Vaginal Moisturizer", href: "#" },
    { label: "Boric Acid Complex", href: "#" },
    { label: "Vaginal Symbiotic", href: "#" },
    { label: "Botanical Vulva\nBalm", href: "#" },
  ],
  socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  showPaymentIcons = true,
}: FooterNeycherNewsletterProps) {
  const colors = COLORS[mode];
  const [checked, setChecked] = useState(false);

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
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8"
        >
          {/* Newsletter Form Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-6"
          >
            {/* Title - Italic Serif */}
            <h2
              className="text-base leading-relaxed whitespace-pre-line font-instrument-serif italic"
              style={{ color: colors.text }}
            >
              {newsletterTitle}
            </h2>

            {/* Form */}
            <form className="space-y-5">
              {/* First Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={firstNamePlaceholder}
                  className="w-full bg-transparent border-0 border-b py-2 text-sm placeholder-current outline-none focus:ring-0"
                  style={{
                    color: colors.textMuted,
                    borderBottomColor: colors.inputBorder,
                  }}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder={emailPlaceholder}
                  className="w-full bg-transparent border-0 border-b py-2 text-sm placeholder-current outline-none focus:ring-0"
                  style={{
                    color: colors.textMuted,
                    borderBottomColor: colors.inputBorder,
                  }}
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setChecked(!checked)}
                  className="flex-shrink-0 w-4 h-4 border mt-0.5"
                  style={{ borderColor: colors.checkboxBorder }}
                >
                  {checked && (
                    <svg
                      viewBox="0 0 16 16"
                      fill={colors.text}
                      className="w-full h-full"
                    >
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  )}
                </button>
                <p
                  className="text-xs leading-relaxed whitespace-pre-line"
                  style={{ color: colors.textMuted }}
                >
                  {checkboxLabel}
                  <a
                    href={privacyPolicyHref}
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: colors.textMuted }}
                  >
                    {privacyPolicyLabel}
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-6 py-2.5 border rounded-full text-sm font-normal transition-opacity hover:opacity-80"
                style={{
                  color: colors.text,
                  borderColor: colors.text,
                  backgroundColor: "transparent",
                }}
              >
                {submitLabel}
              </motion.button>
            </form>

            {/* Payment Icons */}
            {showPaymentIcons && (
              <div className="flex items-center gap-3 pt-8">
                <VisaIcon color={colors.text} />
                <MastercardIcon color={colors.text} />
                <PaypalIcon color={colors.text} />
                <ApplePayIcon color={colors.text} />
                <GooglePayIcon color={colors.text} />
              </div>
            )}
          </motion.div>

          {/* Links Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 lg:pl-12"
          >
            {/* Info Column */}
            <div className="space-y-4">
              <h3
                className="text-sm font-normal"
                style={{ color: colors.textMuted }}
              >
                Info
              </h3>
              <nav className="space-y-2.5">
                {infoLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm hover:opacity-80 transition-opacity whitespace-pre-line leading-relaxed"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Shop Column */}
            <div className="space-y-4">
              <h3
                className="text-sm font-normal"
                style={{ color: colors.textMuted }}
              >
                Shop
              </h3>
              <nav className="space-y-2.5">
                {shopLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm hover:opacity-80 transition-opacity whitespace-pre-line leading-relaxed"
                    style={{ color: colors.text }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Column */}
            <div className="space-y-4">
              <h3
                className="text-sm font-normal"
                style={{ color: colors.textMuted }}
              >
                Social
              </h3>
              <nav className="space-y-2.5">
                {socialLinks.map((link, index) => (
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
        </motion.div>
      </div>
    </footer>
  );
}
