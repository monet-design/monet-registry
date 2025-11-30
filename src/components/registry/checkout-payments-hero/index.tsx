"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface CompanyLogo {
  name: string;
  logoText?: string;
}

interface CheckoutPaymentsHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  heroTitle?: string[];
  subHeadingLine1?: string;
  subHeadingLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  companyLogos?: CompanyLogo[];
  accentColor?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Documentation & Resources", href: "#", hasDropdown: true },
  { label: "Company", href: "#", hasDropdown: true },
];

const defaultCompanyLogos: CompanyLogo[] = [
  { name: "Freshly", logoText: "FRESHLY" },
  { name: "Sainsburys", logoText: "Sainsbury's" },
  { name: "Financial Times", logoText: "FT" },
  { name: "Rail Europe", logoText: "Rail Europe" },
  { name: "Sony", logoText: "SONY" },
  { name: "Shein", logoText: "SHEIN" },
  { name: "DocuSign", logoText: "DocuSign" },
];

export default function CheckoutPaymentsHero({
  logoText = "checkout.com",
  navItems = defaultNavItems,
  heroTitle = ["GLOBAL", "DIGITAL", "PAYMENTS"],
  subHeadingLine1 = "ONE PLATFORM.",
  subHeadingLine2 = "UNRIVALED PERFORMANCE.",
  description = "Payments move money; high-performance payments make money. Checkout.com delivers a global platform, transparent pricing, payments expertise and committed partnership – so you can thrive.",
  primaryButtonText = "Get in touch",
  primaryButtonHref = "#",
  secondaryButtonText = "Sign In",
  secondaryButtonHref = "#",
  companyLogos = defaultCompanyLogos,
  accentColor = "#317BF3",
}: CheckoutPaymentsHeroProps) {
  return (
    <section className="relative w-full bg-white min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full px-6 lg:px-12 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-black"
          >
            <path
              d="M12 2L2 7v10l10 5 10-5V7L12 2z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="currentColor" />
          </svg>
          <span className="text-black font-medium text-lg">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={secondaryButtonHref}
            className="px-5 py-2.5 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            style={{ color: accentColor }}
          >
            {secondaryButtonText}
          </a>
          <a
            href={primaryButtonHref}
            className="px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            {primaryButtonText}
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center px-6 lg:px-12 py-12 lg:py-0">
        {/* Left - Big Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 lg:flex-[1.2]"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-black leading-[0.9] tracking-tight text-black">
            {heroTitle.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Right - Subheading & Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:flex-1 mt-12 lg:mt-0 lg:pl-12 max-w-lg"
        >
          <h2 className="text-2xl lg:text-3xl font-bold tracking-wide leading-tight">
            <span className="block text-black">{subHeadingLine1}</span>
            <span className="block" style={{ color: accentColor }}>
              {subHeadingLine2}
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            {description}
          </p>

          <motion.a
            href={primaryButtonHref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-8 px-6 py-3.5 text-sm font-medium text-white rounded-lg transition-all"
            style={{ backgroundColor: accentColor }}
          >
            {primaryButtonText}
          </motion.a>
        </motion.div>
      </div>

      {/* Company Logos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full px-6 lg:px-12 py-8 border-t border-gray-100"
      >
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-4">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="text-gray-400 font-semibold text-sm lg:text-base tracking-wider"
              style={{
                fontFamily:
                  logo.name === "Sainsburys"
                    ? "serif"
                    : logo.name === "Financial Times"
                      ? "serif"
                      : "inherit",
                fontStyle:
                  logo.name === "Sainsburys" || logo.name === "Financial Times"
                    ? "italic"
                    : "normal",
              }}
            >
              {logo.logoText}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
