"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#333333",
    textPrimary: "#FFFFFF",
    textSecondary: "#B0B0B0",
    categoryTitle: "#9A9A9A",
  },
  dark: {
    background: "#333333",
    textPrimary: "#FFFFFF",
    textSecondary: "#B0B0B0",
    categoryTitle: "#9A9A9A",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

/**
 * 기본 컨텐츠 설정
 */
const DEFAULT_CONTENT = {
  brand: {
    name: "Oyster",
    copyright: "Oyster HR, Inc 2020-2023, All rights reserved.",
  },
  columns: {
    howOysterWorks: {
      title: "HOW OYSTER WORKS",
      links: [
        { label: "Platform Overview", href: "#" },
        { label: "Automated Global Hiring", href: "#" },
        { label: "International Hiring", href: "#" },
        { label: "Convert Contractors", href: "#" },
        { label: "Global Payroll Software", href: "#" },
        { label: "Global Compensation\n& Benefits", href: "#" },
        { label: "Global Equity", href: "#" },
        { label: "International Compliance", href: "#" },
        { label: "Country Hiring Guides", href: "#" },
        { label: "Global Employment Cost\nCalculator", href: "#" },
        { label: "Oyster for Refugees", href: "#" },
        { label: "Oyster for Impact", href: "#" },
      ],
    },
    resources: {
      title: "RESOURCES",
      links: [
        { label: "Blogs", href: "#" },
        { label: "Guides", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Events", href: "#" },
        { label: "Global HR Glossary", href: "#" },
        { label: "Oyster Academy", href: "#" },
        { label: "People Builders", href: "#" },
        { label: "Remote Work Regulations", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Contractor vs. Full-Time\nEmployee Analyzer", href: "#" },
        { label: "Oyster Merch Store", href: "#" },
        { label: "Global Employment Pass", href: "#" },
        { label: "Direct+", href: "#" },
      ],
    },
    usingOyster: {
      title: "USING OYSTER",
      links: [
        { label: "Pricing", href: "#" },
        { label: "Global Hiring Cost Calculators", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Developer API", href: "#" },
        { label: "Countries Served", href: "#" },
        { label: "Become a Partner", href: "#" },
        { label: "Affiliates", href: "#" },
        { label: "Customer Referral Program", href: "#" },
        { label: "Global Employment Tools", href: "#" },
        { label: "Global Employment Pass", href: "#" },
        { label: "About Oyster", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    legal: {
      title: "LEGAL",
      links: [
        { label: "Trust Center", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
    contact: {
      title: "CONTACT",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Media Inquiries", href: "#" },
        { label: "hello@oysterhr.com", href: "mailto:hello@oysterhr.com" },
        { label: "sales@oysterhr.com", href: "mailto:sales@oysterhr.com" },
      ],
    },
  },
  socials: [
    { name: "facebook", href: "#" },
    { name: "instagram", href: "#" },
    { name: "linkedin", href: "#" },
    { name: "notion", href: "#" },
    { name: "twitter", href: "#" },
  ],
  certification: {
    title: "Certified\nB Corp",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
}

interface FooterOysterProps {
  mode?: "light" | "dark";
  brandName?: string;
  copyrightText?: string;
  howOysterWorks?: FooterColumn;
  resources?: FooterColumn;
  usingOyster?: FooterColumn;
  legal?: FooterColumn;
  contact?: FooterColumn;
  socials?: SocialLink[];
  certificationTitle?: string;
}

// Social icon component
function SocialIcon({ name, className }: { name: string; className?: string }) {
  const iconClass = className || "w-5 h-5";

  switch (name) {
    case "facebook":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "notion":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.62c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
        </svg>
      );
    default:
      return null;
  }
}

// B Corp badge component
function BCorpBadge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="2" />
      <text
        x="30"
        y="22"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Certified
      </text>
      <text
        x="30"
        y="38"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        B
      </text>
      <text
        x="30"
        y="50"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontFamily="sans-serif"
      >
        Corporation
      </text>
    </svg>
  );
}

// Oyster logo component (script style)
function OysterLogo({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 120"
      fill={color || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized "Oyster" script logo */}
      <path
        d="M0 85C0 85 25 20 65 20C90 20 95 45 90 65C85 85 60 100 40 100C20 100 0 85 0 85ZM50 85C65 85 75 70 78 55C81 40 75 35 65 35C45 35 25 65 25 80C25 80 35 85 50 85Z"
        fill={color || "currentColor"}
      />
      <path
        d="M85 105C85 105 90 85 100 65L80 65C80 65 82 60 88 60L105 60L125 20L140 20L115 65L135 65C135 65 133 70 127 70L110 70C100 90 90 110 90 110L85 105Z"
        fill={color || "currentColor"}
      />
      <path
        d="M125 95C115 95 110 85 115 70C120 55 140 45 155 45C165 45 175 50 172 65L138 65C135 75 140 82 150 82C160 82 168 75 168 75L173 80C173 80 162 95 140 95C135 95 130 95 125 95ZM158 55C160 50 155 48 150 48C142 48 135 55 133 60L158 60C158 58 158 56 158 55Z"
        fill={color || "currentColor"}
      />
      <path
        d="M175 95L180 90C180 90 200 60 210 60C215 60 215 65 212 75L200 95L215 95L230 60C235 50 230 45 220 45C205 45 185 70 185 70L200 45L185 45L160 95L175 95Z"
        fill={color || "currentColor"}
      />
      <path
        d="M240 95C230 95 225 85 230 70C235 55 255 45 270 45C280 45 290 50 287 65L253 65C250 75 255 82 265 82C275 82 283 75 283 75L288 80C288 80 277 95 255 95C250 95 245 95 240 95ZM273 55C275 50 270 48 265 48C257 48 250 55 248 60L273 60C273 58 273 56 273 55Z"
        fill={color || "currentColor"}
      />
      <path
        d="M290 95L305 60C305 60 300 60 295 60C295 60 298 55 305 55L310 55L318 35L333 35L325 55L340 55C340 55 337 60 330 60L320 60L308 90C305 97 310 98 318 95L320 100C320 100 305 110 295 100C290 95 290 95 290 95Z"
        fill={color || "currentColor"}
      />
      <path
        d="M335 95C325 95 320 85 325 70C330 55 350 45 365 45C375 45 385 50 382 65L348 65C345 75 350 82 360 82C370 82 378 75 378 75L383 80C383 80 372 95 350 95C345 95 340 95 335 95ZM368 55C370 50 365 48 360 48C352 48 345 55 343 60L368 60C368 58 368 56 368 55Z"
        fill={color || "currentColor"}
      />
      <path
        d="M380 95L395 60C400 50 395 48 390 50L388 45C388 45 405 40 415 50C420 55 415 65 410 75L400 95L380 95Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}

export default function FooterOyster({
  mode = "dark",
  brandName = DEFAULT_CONTENT.brand.name,
  copyrightText = DEFAULT_CONTENT.brand.copyright,
  howOysterWorks = DEFAULT_CONTENT.columns.howOysterWorks,
  resources = DEFAULT_CONTENT.columns.resources,
  usingOyster = DEFAULT_CONTENT.columns.usingOyster,
  legal = DEFAULT_CONTENT.columns.legal,
  contact = DEFAULT_CONTENT.columns.contact,
  socials = DEFAULT_CONTENT.socials,
  certificationTitle = DEFAULT_CONTENT.certification.title,
}: FooterOysterProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const renderColumn = (column: FooterColumn, colIndex: number) => (
    <motion.div key={colIndex} variants={columnVariants} className="space-y-4">
      <h3
        className="text-xs font-medium tracking-widest"
        style={{ color: colors.categoryTitle }}
      >
        {column.title}
      </h3>
      <ul className="space-y-2">
        {column.links.map((link, linkIndex) => (
          <li key={linkIndex}>
            <a
              href={link.href}
              className="text-sm leading-relaxed transition-colors duration-200 hover:opacity-80 whitespace-pre-line"
              style={{ color: colors.textPrimary }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <footer
      className="relative w-full py-12 px-6 lg:px-12"
      style={{ backgroundColor: colors.background }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap");
            .serif-italic-oyster {
              font-family: "Instrument Serif", serif;
              font-style: italic;
            }
          `,
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Links Section */}
        <motion.div
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* HOW OYSTER WORKS */}
          {renderColumn(howOysterWorks, 0)}

          {/* RESOURCES */}
          {renderColumn(resources, 1)}

          {/* USING OYSTER */}
          {renderColumn(usingOyster, 2)}

          {/* LEGAL & CONTACT combined for last column */}
          <motion.div variants={columnVariants} className="space-y-8">
            {/* LEGAL */}
            <div className="space-y-4">
              <h3
                className="text-xs font-medium tracking-widest"
                style={{ color: colors.categoryTitle }}
              >
                {legal.title}
              </h3>
              <ul className="space-y-2">
                {legal.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm leading-relaxed transition-colors duration-200 hover:opacity-80"
                      style={{ color: colors.textPrimary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="space-y-4">
              <h3
                className="text-xs font-medium tracking-widest"
                style={{ color: colors.categoryTitle }}
              >
                {contact.title}
              </h3>
              <ul className="space-y-2">
                {contact.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm leading-relaxed transition-colors duration-200 hover:opacity-80"
                      style={{ color: colors.textPrimary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Large Oyster Logo */}
          <div className="flex-shrink-0">
            <OysterLogo className="h-24 md:h-32 w-auto" color={colors.textPrimary} />
          </div>

          {/* Right side - Stay Connected + Copyright + B Corp */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            {/* Stay Connected */}
            <div className="space-y-3">
              <h4
                className="serif-italic-oyster text-xl"
                style={{ color: colors.textPrimary }}
              >
                Stay Connected
              </h4>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="transition-opacity duration-200 hover:opacity-70"
                    style={{ color: colors.textPrimary }}
                    aria-label={social.name}
                  >
                    <SocialIcon name={social.name} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright + B Corp */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <div className="space-y-1">
                <p
                  className="text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  {copyrightText}
                </p>
                <p
                  className="text-base font-semibold whitespace-pre-line"
                  style={{ color: colors.textPrimary }}
                >
                  {certificationTitle}
                </p>
              </div>
              <BCorpBadge className="w-14 h-14 flex-shrink-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
