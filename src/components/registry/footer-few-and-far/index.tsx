"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#000000",
  textPrimary: "#FFFFFF",
  textSecondary: "#A0A0A0",
  border: "#333333",
  buttonBorder: "#FFFFFF",
} as const;

/**
 * 컨텐츠 텍스트
 */
const CONTENT = {
  leftSection: {
    title: "Being the ",
    titleItalic: "best",
    titleEnd: " we can be",
    description:
      "As a Certified B Corp and Living Wage Employer, we consider the impact of every single one of our decisions on our team, our clients and our suppliers. We also provide 1% of our profits each year to environmental causes.",
  },
  rightSection: {
    title: "Digital tips and charity tricks to your inbox",
    description:
      "Sign up to our newsletter to hear about our latest digital news, events we are speaking at in the charity sector and industry news and tips to provide as much value as we can to you.",
    buttonText: "Sign up",
  },
  footer: {
    copyright: "Few and Far Ltd",
    registration:
      "Registered in England and Wales under company number 11616669",
    address: "30—38 Dock Street, Leeds, LS10 1JF",
    links: [
      { label: "Contact us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Colophon", href: "#" },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Threads", href: "#" },
    ],
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Sun/Star Icon Component
function SunIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="24"
        y1="4"
        x2="24"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="24"
        y1="36"
        x2="24"
        y2="44"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="4"
        y1="24"
        x2="12"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="36"
        y1="24"
        x2="44"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="9.86"
        y1="9.86"
        x2="15.52"
        y2="15.52"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="32.48"
        y1="32.48"
        x2="38.14"
        y2="38.14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="9.86"
        y1="38.14"
        x2="15.52"
        y2="32.48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="32.48"
        y1="15.52"
        x2="38.14"
        y2="9.86"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// Paper Plane Icon Component
function PaperPlaneIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 28L20 24L16 20L32 24L16 28Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 24L32 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 24V30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// B Corp Badge Component
function BCorp({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-white tracking-wide mb-1">
          Certified
        </span>
        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-white text-lg font-bold">B</span>
        </div>
        <span className="text-[8px] text-white mt-1">Corporation</span>
      </div>
    </div>
  );
}

// 1% For The Planet Badge
function OnePercentPlanet({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-1 bg-white text-black px-3 py-2 rounded-full">
        <span className="text-lg font-bold">1%</span>
        <div className="flex flex-col text-[8px] leading-tight">
          <span className="font-bold">FOR THE</span>
          <span className="font-bold">PLANET</span>
        </div>
      </div>
    </div>
  );
}

// Living Wage Badge
function LivingWage({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
        <div className="text-center text-black">
          <div className="text-[7px] leading-tight">We pay the</div>
          <div className="text-[10px] font-bold italic leading-tight">
            Living
          </div>
          <div className="text-[10px] font-bold italic leading-tight">Wage</div>
          <div className="text-[6px] leading-tight">Real Living Wage</div>
        </div>
      </div>
    </div>
  );
}

// Mindful Employer Badge
function MindfulEmployer({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M5 12L10 17L20 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col text-white">
          <span className="text-xs font-bold tracking-wide">MINDFUL</span>
          <span className="text-xs font-bold tracking-wide">EMPLOYER</span>
        </div>
      </div>
    </div>
  );
}

// Logo Icon Component
function LogoIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 12C8 12 10 8 12 8C14 8 16 12 16 12C16 12 14 16 12 16C10 16 8 12 8 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

interface FooterFewAndFarProps {
  companyName?: string;
  companyNumber?: string;
  address?: string;
  leftTitle?: string;
  leftDescription?: string;
  rightTitle?: string;
  rightDescription?: string;
  signUpButtonText?: string;
  onSignUp?: () => void;
  footerLinks?: readonly { label: string; href: string }[];
  socialLinks?: readonly { label: string; href: string }[];
}

export default function FooterFewAndFar({
  companyName = CONTENT.footer.copyright,
  companyNumber = CONTENT.footer.registration,
  address = CONTENT.footer.address,
  leftTitle,
  leftDescription = CONTENT.leftSection.description,
  rightTitle = CONTENT.rightSection.title,
  rightDescription = CONTENT.rightSection.description,
  signUpButtonText = CONTENT.rightSection.buttonText,
  onSignUp,
  footerLinks = CONTENT.footer.links,
  socialLinks = CONTENT.footer.socialLinks,
}: FooterFewAndFarProps) {
  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Left Section - Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pr-16 lg:border-r relative"
            style={{ borderColor: COLORS.border }}
          >
            {/* Dot indicator on border */}
            <div
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS.textPrimary }}
            />

            <SunIcon
              className="mb-8"
              style={{ color: COLORS.textPrimary } as React.CSSProperties}
            />

            <h2
              className="text-2xl lg:text-3xl mb-6"
              style={{ color: COLORS.textPrimary }}
            >
              {leftTitle || (
                <>
                  {CONTENT.leftSection.title}
                  <span className="italic font-serif">
                    {CONTENT.leftSection.titleItalic}
                  </span>
                  {CONTENT.leftSection.titleEnd}
                </>
              )}
            </h2>

            <p
              className="text-sm leading-relaxed mb-12 max-w-md"
              style={{ color: COLORS.textSecondary }}
            >
              {leftDescription}
            </p>

            {/* Certification Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <BCorp />
              <OnePercentPlanet />
              <LivingWage />
            </div>
            <div className="mt-6">
              <MindfulEmployer />
            </div>
          </motion.div>

          {/* Right Section - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-16"
          >
            <PaperPlaneIcon
              className="mb-8"
              style={{ color: COLORS.textPrimary } as React.CSSProperties}
            />

            <h2
              className="text-2xl lg:text-3xl mb-6 max-w-md"
              style={{ color: COLORS.textPrimary }}
            >
              {rightTitle}
            </h2>

            <p
              className="text-sm leading-relaxed mb-8 max-w-md"
              style={{ color: COLORS.textSecondary }}
            >
              {rightDescription}
            </p>

            <button
              onClick={onSignUp}
              className="px-6 py-3 text-sm border transition-colors hover:bg-white hover:text-black"
              style={{
                color: COLORS.textPrimary,
                borderColor: COLORS.buttonBorder,
                backgroundColor: "transparent",
              }}
            >
              {signUpButtonText}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t"
        style={{ borderColor: COLORS.border }}
      >
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left - Company Info */}
            <div className="space-y-4">
              <p
                className="text-sm font-medium"
                style={{ color: COLORS.textPrimary }}
              >
                &copy; {companyName}
              </p>

              <div className="space-y-1">
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                  {companyNumber}
                </p>
                <p className="text-xs" style={{ color: COLORS.textSecondary }}>
                  {address}
                </p>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap gap-4 pt-2">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-xs hover:underline transition-colors"
                    style={{ color: COLORS.textPrimary }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Social Links */}
            <div className="flex flex-col items-start lg:items-end gap-4">
              <div className="flex gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm hover:underline transition-colors"
                    style={{ color: COLORS.textPrimary }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <LogoIcon
                className="mt-4"
                style={{ color: COLORS.textPrimary } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
