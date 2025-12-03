"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F7F6F2",
    cellBackground: "#ECEBE7",
    border: "#BBBAB6",
    textPrimary: "#000000",
    textSecondary: "#797773",
  },
  dark: {
    background: "#1A1A1A",
    cellBackground: "#2A2A2A",
    border: "#444444",
    textPrimary: "#FFFFFF",
    textSecondary: "#999999",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterDoconomyProps {
  mode?: "light" | "dark";
  companyName?: string;
  emailPlaceholder?: string;
  privacyPolicyText?: string;
  privacyPolicyUrl?: string;
  solutionsColumn?: FooterColumn;
  resourcesColumn?: FooterColumn;
  productsColumn?: FooterColumn;
  aboutColumn?: FooterColumn;
  expertiseColumn?: FooterColumn;
  developersColumn?: FooterColumn;
  legalColumn?: FooterColumn;
  companyInfo?: string;
  copyright?: string;
  onEmailSubmit?: (email: string) => void;
}

const defaultSolutions: FooterColumn = {
  title: "SOLUTIONS",
  links: [
    { label: "SUSTAINABLE BANKING", href: "#" },
    { label: "CLIMATE LITERACY", href: "#" },
    { label: "FINANCIAL WELLBEING", href: "#" },
  ],
};

const defaultResources: FooterColumn = {
  title: "RESOURCES",
  links: [
    { label: "NEWS", href: "#" },
    { label: "EVENTS", href: "#" },
    { label: "WEBINARS & RECORDINGS", href: "#" },
    { label: "RESEARCH & REPORTS", href: "#" },
    { label: "BLOG", href: "#" },
  ],
};

const defaultProducts: FooterColumn = {
  title: "PRODUCTS",
  links: [
    { label: "IMPACT TRANSACTIONS", href: "#" },
    { label: "IMPACT ACTIVITY", href: "#" },
    { label: "IMPACT EDUCATION", href: "#" },
    { label: "IMPACT FINANCE", href: "#" },
  ],
};

const defaultAbout: FooterColumn = {
  title: "ABOUT",
  links: [
    { label: "COMPANY", href: "#" },
    { label: "INVESTORS", href: "#" },
    { label: "SECURITY", href: "#" },
    { label: "EMPLOYEES", href: "#" },
    { label: "PRESS", href: "#", external: true },
    { label: "CAREERS", href: "#", external: true },
    { label: "CONTACT", href: "#" },
  ],
};

const defaultExpertise: FooterColumn = {
  title: "EXPERTISE",
  links: [
    { label: "CLIMATE DATA & METHODOLOGY", href: "#" },
    { label: "BEHAVIORAL SCIENCE", href: "#" },
    { label: "IMPACT FINANCE PORTAL", href: "#", external: true },
  ],
};

const defaultDevelopers: FooterColumn = {
  title: "DEVELOPERS",
  links: [{ label: "DEVELOPER'S PORTAL", href: "#" }],
};

const defaultLegal: FooterColumn = {
  title: "LEGAL",
  links: [
    { label: "PRIVACY NOTICE", href: "#" },
    { label: "COOKIE POLICY", href: "#" },
  ],
};

export default function FooterDoconomy({
  mode = "light",
  companyName = "Doconomy AB",
  emailPlaceholder = "E-MAIL_",
  privacyPolicyText = "By submitting this form you have read and accepted our",
  privacyPolicyUrl = "#",
  solutionsColumn = defaultSolutions,
  resourcesColumn = defaultResources,
  productsColumn = defaultProducts,
  aboutColumn = defaultAbout,
  expertiseColumn = defaultExpertise,
  developersColumn = defaultDevelopers,
  legalColumn = defaultLegal,
  companyInfo = "Doconomy AB is a company registered in Sweden (Corporate id number: 559163-0602).\nAddress: Doconomy AB, Ostermalmsgatan 26A, 114 26 Stockholm.",
  copyright = "2025 Doconomy AB. All rights reserved.",
  onEmailSubmit,
}: FooterDoconomyProps) {
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (onEmailSubmit && email) {
      onEmailSubmit(email);
    }
  };

  const LinkCell = ({
    link,
    className = "",
  }: {
    link: FooterLink;
    className?: string;
  }) => (
    <motion.a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`block px-4 py-3 text-xs tracking-wide transition-colors hover:opacity-70 ${className}`}
      style={{
        backgroundColor: colors.cellBackground,
        color: colors.textPrimary,
        borderBottom: `1px solid ${colors.border}`,
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <span className="flex items-center justify-between">
        {link.label}
        {link.external && <ArrowRight className="h-3 w-3 -rotate-45" />}
      </span>
    </motion.a>
  );

  const HeaderCell = ({
    title,
    className = "",
  }: {
    title: string;
    className?: string;
  }) => (
    <div
      className={`px-4 py-3 text-xs font-medium tracking-wide ${className}`}
      style={{
        color: colors.textSecondary,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {title}
    </div>
  );

  const EmptyCell = ({ className = "" }: { className?: string }) => (
    <div
      className={`px-4 py-3 ${className}`}
      style={{
        backgroundColor: colors.cellBackground,
        borderBottom: `1px solid ${colors.border}`,
      }}
    />
  );

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Top border line */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: colors.border }}
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Email Subscription Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="mb-4 text-xs tracking-widest"
            style={{ color: colors.textPrimary }}
          >
            GET THE LATEST NEWS FROM {companyName.toUpperCase().replace(" AB", "")}
          </p>

          <form onSubmit={handleSubmit} className="flex items-center justify-between">
            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              className="w-full bg-transparent text-6xl font-black tracking-tight outline-none placeholder:opacity-100 md:text-7xl lg:text-8xl"
              style={{
                color: colors.textPrimary,
                fontFamily: "'Inter', sans-serif",
              }}
            />
            <motion.button
              type="submit"
              className="ml-4 flex-shrink-0 p-2 transition-transform hover:scale-110"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight
                className="h-12 w-12 md:h-16 md:w-16"
                style={{ color: colors.textPrimary }}
                strokeWidth={2}
              />
            </motion.button>
          </form>

          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy-checkbox"
              className="h-4 w-4 rounded-full border-2 bg-transparent"
              style={{ borderColor: colors.textPrimary }}
            />
            <label
              htmlFor="privacy-checkbox"
              className="text-sm"
              style={{ color: colors.textPrimary }}
            >
              {privacyPolicyText}{" "}
              <a
                href={privacyPolicyUrl}
                className="underline hover:opacity-70"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </motion.div>

        {/* Horizontal divider */}
        <div
          className="mb-8 h-px w-full"
          style={{ backgroundColor: colors.border }}
        />

        {/* Footer Navigation Grid */}
        <div
          className="grid grid-cols-1 gap-0 md:grid-cols-5"
          style={{ border: `1px solid ${colors.border}` }}
        >
          {/* Column 1: Solutions & Resources */}
          <div style={{ borderRight: `1px solid ${colors.border}` }}>
            <HeaderCell title={solutionsColumn.title} />
            {solutionsColumn.links.map((link, idx) => (
              <LinkCell key={idx} link={link} />
            ))}
            <div className="h-4" style={{ borderBottom: `1px solid ${colors.border}` }} />
            <HeaderCell title={resourcesColumn.title} />
            {resourcesColumn.links.map((link, idx) => (
              <LinkCell key={idx} link={link} />
            ))}
          </div>

          {/* Column 2: Products */}
          <div style={{ borderRight: `1px solid ${colors.border}` }}>
            <HeaderCell title={productsColumn.title} />
            {productsColumn.links.map((link, idx) => (
              <LinkCell key={idx} link={link} />
            ))}
            {/* Empty cells to fill space */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <EmptyCell key={idx} />
            ))}
          </div>

          {/* Column 3: About */}
          <div style={{ borderRight: `1px solid ${colors.border}` }}>
            <HeaderCell title={aboutColumn.title} />
            {aboutColumn.links.map((link, idx) => (
              <LinkCell key={idx} link={link} />
            ))}
            {/* Empty cells to fill space */}
            <EmptyCell />
            <EmptyCell />
          </div>

          {/* Column 4: Expertise & Developers */}
          <div style={{ borderRight: `1px solid ${colors.border}` }}>
            <HeaderCell title={expertiseColumn.title} />
            {expertiseColumn.links.map((link, idx) => (
              <LinkCell key={idx} link={link} />
            ))}
            <div className="h-4" style={{ borderBottom: `1px solid ${colors.border}` }} />
            <HeaderCell title={developersColumn.title} />
            {developersColumn.links.map((link, idx) => (
              <LinkCell key={idx} link={link} />
            ))}
            {/* Empty cells to fill space */}
            {Array.from({ length: 3 }).map((_, idx) => (
              <EmptyCell key={idx} />
            ))}
          </div>

          {/* Column 5: Legal */}
          <div>
            <HeaderCell title={legalColumn.title} />
            {legalColumn.links.map((link, idx) => (
              <LinkCell key={idx} link={link} />
            ))}
            {/* Empty cells to fill space */}
            {Array.from({ length: 6 }).map((_, idx) => (
              <EmptyCell key={idx} />
            ))}
          </div>
        </div>

        {/* Bottom Company Info */}
        <motion.div
          className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="text-xs leading-relaxed"
            style={{ color: colors.textPrimary }}
          >
            <span className="font-semibold">{companyName}</span>{" "}
            {companyInfo.split(companyName)[1]}
          </div>
          <div
            className="text-xs"
            style={{ color: colors.textSecondary }}
          >
            &copy; {copyright}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
