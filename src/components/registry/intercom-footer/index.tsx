"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
interface ColorScheme {
  background: string;
  categoryText: string;
  linkText: string;
  linkHover: string;
  borderColor: string;
  legalText: string;
}

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    background: "#FAFAFA",
    categoryText: "#888888",
    linkText: "#1A1A1A",
    linkHover: "#000000",
    borderColor: "#E5E5E5",
    legalText: "#666666",
  },
  dark: {
    background: "#0A0A0A",
    categoryText: "#888888",
    linkText: "#E5E5E5",
    linkHover: "#FFFFFF",
    borderColor: "#333333",
    legalText: "#999999",
  },
};

/**
 * Footer 링크 데이터
 */
const FOOTER_LINKS = {
  helpdeskFeatures: {
    title: "HELPDESK FEATURES",
    links: [
      { label: "Inbox", href: "#" },
      { label: "Copilot", href: "#" },
      { label: "Tickets", href: "#" },
      { label: "Omnichannel", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Apps & Integrations", href: "#" },
      { label: "Reporting", href: "#" },
      { label: "Knowledge Hub", href: "#" },
      { label: "Outbound", href: "#" },
    ],
  },
  finFeaturesAndPricing: {
    sections: [
      {
        title: "FIN FEATURES",
        links: [
          { label: "Fin overview", href: "#" },
          { label: "Capabilities", href: "#" },
          { label: "AI Engine", href: "#" },
        ],
      },
      {
        title: "PRICING",
        links: [
          { label: "Intercom Suite pricing", href: "#" },
          { label: "Fin pricing", href: "#" },
        ],
      },
    ],
  },
  learnAndEvaluate: {
    sections: [
      {
        title: "LEARN",
        links: [
          { label: "Events", href: "#" },
          { label: "Intercom blog", href: "#" },
          { label: "Academy", href: "#" },
          { label: "YouTube", href: "#" },
          { label: "AI Agent Blueprint", href: "#" },
        ],
      },
      {
        title: "EVALUATE",
        links: [
          { label: "Why choose Intercom", href: "#" },
          { label: "Safety & security", href: "#" },
          { label: "ROI calculator", href: "#" },
          { label: "Customer case studies", href: "#" },
        ],
      },
    ],
  },
  supportAndCompany: {
    sections: [
      {
        title: "SUPPORT",
        links: [
          { label: "Changes", href: "#" },
          { label: "Help Center", href: "#" },
          { label: "Developer hub", href: "#" },
          { label: "Intercom community", href: "#" },
          { label: "Status", href: "#" },
        ],
      },
      {
        title: "COMPANY",
        links: [
          { label: "About", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact Press", href: "#" },
        ],
      },
    ],
  },
  programs: {
    title: "PROGRAMS",
    links: [
      { label: "Solution partner", href: "#" },
      { label: "Technology partner", href: "#" },
      { label: "Early stage", href: "#" },
    ],
  },
  intercomInAction: {
    title: "INTERCOM IN ACTION",
    links: [
      { label: "View demo", href: "#" },
      { label: "Free trial", href: "#" },
      { label: "Contact sales", href: "#" },
      { label: "Sign in", href: "#" },
    ],
  },
} as const;

const LEGAL_LINKS = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Security", href: "#" },
  { label: "Your Privacy Choices", href: "#", hasIcon: true },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLinkProps {
  href: string;
  label: string;
  colors: ColorScheme;
}

function FooterLink({ href, label, colors }: FooterLinkProps) {
  return (
    <motion.a
      href={href}
      className="block text-sm py-0.5 transition-colors duration-200"
      style={{ color: colors.linkText }}
      whileHover={{ color: colors.linkHover }}
    >
      {label}
    </motion.a>
  );
}

interface FooterSectionProps {
  title: string;
  links: readonly { label: string; href: string }[];
  colors: ColorScheme;
}

function FooterSection({ title, links, colors }: FooterSectionProps) {
  return (
    <div className="mb-6">
      <h4
        className="text-xs font-medium tracking-wider mb-3"
        style={{ color: colors.categoryText }}
      >
        {title}
      </h4>
      <nav className="flex flex-col gap-1.5">
        {links.map((link) => (
          <FooterLink
            key={link.label}
            href={link.href}
            label={link.label}
            colors={colors}
          />
        ))}
      </nav>
    </div>
  );
}

interface PrivacyChoicesIconProps {
  className?: string;
}

function PrivacyChoicesIcon({ className }: PrivacyChoicesIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 14"
      className={className}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8zm8.6 0h6.6c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8h-3.4l-3.2 11.6z"
      />
      <path d="M22.6 2.4c2.6 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6-4.6-2.1-4.6-4.6 2-4.6 4.6-4.6z" fill="#06f" />
    </svg>
  );
}

interface IntercomFooterProps {
  mode?: "light" | "dark";
  helpdeskFeatures?: typeof FOOTER_LINKS.helpdeskFeatures;
  finFeaturesAndPricing?: typeof FOOTER_LINKS.finFeaturesAndPricing;
  learnAndEvaluate?: typeof FOOTER_LINKS.learnAndEvaluate;
  supportAndCompany?: typeof FOOTER_LINKS.supportAndCompany;
  programs?: typeof FOOTER_LINKS.programs;
  intercomInAction?: typeof FOOTER_LINKS.intercomInAction;
  legalLinks?: typeof LEGAL_LINKS;
}

export default function IntercomFooter({
  mode = "light",
  helpdeskFeatures = FOOTER_LINKS.helpdeskFeatures,
  finFeaturesAndPricing = FOOTER_LINKS.finFeaturesAndPricing,
  learnAndEvaluate = FOOTER_LINKS.learnAndEvaluate,
  supportAndCompany = FOOTER_LINKS.supportAndCompany,
  programs = FOOTER_LINKS.programs,
  intercomInAction = FOOTER_LINKS.intercomInAction,
  legalLinks = LEGAL_LINKS,
}: IntercomFooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-12 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Links Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Column 1: Helpdesk Features */}
          <div>
            <FooterSection
              title={helpdeskFeatures.title}
              links={helpdeskFeatures.links}
              colors={colors}
            />
          </div>

          {/* Column 2: Fin Features & Pricing */}
          <div>
            {finFeaturesAndPricing.sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
                colors={colors}
              />
            ))}
          </div>

          {/* Column 3: Learn & Evaluate */}
          <div>
            {learnAndEvaluate.sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
                colors={colors}
              />
            ))}
          </div>

          {/* Column 4: Support & Company */}
          <div>
            {supportAndCompany.sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
                colors={colors}
              />
            ))}
          </div>

          {/* Column 5: Programs */}
          <div>
            <FooterSection
              title={programs.title}
              links={programs.links}
              colors={colors}
            />
          </div>

          {/* Column 6: Intercom In Action */}
          <div>
            <FooterSection
              title={intercomInAction.title}
              links={intercomInAction.links}
              colors={colors}
            />
          </div>
        </motion.div>

        {/* Legal Links Section */}
        <motion.div
          className="pt-8 border-t"
          style={{ borderColor: colors.borderColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <nav className="flex flex-wrap items-center gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm flex items-center gap-1.5 transition-colors duration-200"
                style={{ color: colors.legalText }}
                whileHover={{ color: colors.linkHover }}
              >
                {"hasIcon" in link && link.hasIcon && (
                  <PrivacyChoicesIcon className="w-6 h-3.5" />
                )}
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
