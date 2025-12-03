"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  background: "#1A3328",
  backgroundDarker: "#142922",
  text: "#FFFFFF",
  textMuted: "#8B9E94",
  textLabel: "#7A8D83",
  largeText: "#1E3A2D",
  buttonBg: "#FFFFFF",
  buttonText: "#1A3328",
  border: "#2D4A3C",
} as const;

const CONTENT = {
  logo: "MOVA",
  address: {
    title: "PRATSI AVENUE, 8,\nDNIPRO",
  },
  contacts: [
    { label: "Restaurant, Museum", phone: "+38 067 280 19 01" },
    { label: "Інтернет-магазин", phone: "+38 098 160 84 50" },
    { label: "MOVA BAR", phone: "+38 067 108 44 54" },
    { label: "Brewery", phone: "+38 067 011 03 33" },
  ],
  navColumn1: [
    { label: "Brewery", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Cooperation", href: "#" },
    { label: "Beer museum", href: "#" },
    { label: "Restaurant", href: "#" },
    { label: "Book a table", href: "#" },
    { label: "MOVA BAR", href: "#" },
  ],
  navColumn2: [
    { label: "News", href: "#" },
    { label: "Events", href: "#" },
    { label: "Contacts", href: "#" },
    { label: "Points of sale", href: "#" },
  ],
  description:
    "We are a team that built a whole project around the idea of becoming something more than just a brewery. The main goal is to become an incentive for communication and a driver of beer culture in our hometown and in Ukraine.",
  largeText: "MOVA BREWING CO",
  copyright: "Mova Brewing Co.",
  allRights: "All rights reserved",
  madeBy: "Made with love by",
  buttonText: "HOW TO REACH?",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram, Facebook, Mail, ArrowUp } from "lucide-react";
import "./font.css";

// Wheat Logo Icon
function WheatLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 40V20M12 20C8 18 6 14 6 10C6 6 8 2 12 0C16 2 18 6 18 10C18 14 16 18 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 30C9 28 7 25 8 21M12 30C15 28 17 25 16 21"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse cx="12" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// TikTok Icon (not in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1V9.4a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.33-6.33V9.37a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.8z"
        fill="currentColor"
      />
    </svg>
  );
}

// Tubik Logo (simplified)
function TubikLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <text
        x="30"
        y="16"
        fill="currentColor"
        fontSize="12"
        fontFamily="sans-serif"
      >
        tubik
      </text>
    </svg>
  );
}

interface NavLink {
  label: string;
  href: string;
}

interface ContactInfo {
  label: string;
  phone: string;
}

interface MovaBrewingFooterProps {
  logo?: string;
  address?: { title: string };
  contacts?: readonly ContactInfo[];
  navColumn1?: readonly NavLink[];
  navColumn2?: readonly NavLink[];
  description?: string;
  largeText?: string;
  copyright?: string;
  allRights?: string;
  madeBy?: string;
  buttonText?: string;
  onScrollTop?: () => void;
  onHowToReach?: () => void;
}

export default function MovaBrewingFooter({
  logo = CONTENT.logo,
  address = CONTENT.address,
  contacts = CONTENT.contacts,
  navColumn1 = CONTENT.navColumn1,
  navColumn2 = CONTENT.navColumn2,
  description = CONTENT.description,
  largeText = CONTENT.largeText,
  copyright = CONTENT.copyright,
  allRights = CONTENT.allRights,
  madeBy = CONTENT.madeBy,
  buttonText = CONTENT.buttonText,
  onScrollTop,
  onHowToReach,
}: MovaBrewingFooterProps) {
  const handleScrollTop = () => {
    if (onScrollTop) {
      onScrollTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialIcons = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: TikTokIcon, href: "#", label: "TikTok" },
    { Icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer
      className="relative w-full overflow-hidden font-sans"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main Content */}
      <div className="relative z-10 px-6 pt-12 pb-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2"
                style={{ color: COLORS.text }}
              >
                <WheatLogo className="h-6 w-4" />
                <span className="text-lg font-bold tracking-wide">{logo}</span>
              </a>
            </motion.div>

            {/* Navigation Column 1 */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
            >
              <ul className="space-y-3">
                {navColumn1.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity duration-200 hover:opacity-70"
                      style={{ color: COLORS.text }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Navigation Column 2 */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-2"
              style={{ borderLeft: `1px solid ${COLORS.border}` }}
            >
              <ul className="space-y-3 pl-6">
                {navColumn2.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity duration-200 hover:opacity-70"
                      style={{ color: COLORS.text }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Address & Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
              style={{ borderLeft: `1px solid ${COLORS.border}` }}
            >
              <div className="pl-6">
                {/* Address Title */}
                <h2
                  className="mb-6 whitespace-pre-line text-2xl font-bold uppercase leading-tight tracking-tight md:text-3xl lg:text-4xl"
                  style={{
                    color: COLORS.text,
                    fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {address.title}
                </h2>

                {/* Contact Info */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contacts.map((contact, index) => (
                    <div key={index}>
                      <p
                        className="mb-1 text-xs"
                        style={{ color: COLORS.textLabel }}
                      >
                        {contact.label}
                      </p>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        className="text-sm transition-opacity duration-200 hover:opacity-70"
                        style={{ color: COLORS.text }}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Social Icons & Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    {socialIcons.map(({ Icon, href, label }, index) => (
                      <a
                        key={index}
                        href={href}
                        aria-label={label}
                        className="flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-200 hover:bg-white/10"
                        style={{ borderColor: COLORS.border, color: COLORS.text }}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>

                  <button
                    onClick={onHowToReach}
                    className="ml-auto rounded-full px-6 py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: COLORS.buttonBg,
                      color: COLORS.buttonText,
                    }}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="hidden md:col-span-1 md:flex md:justify-end"
            >
              <button
                onClick={handleScrollTop}
                aria-label="Scroll to top"
                className="flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-200 hover:bg-white/10"
                style={{ borderColor: COLORS.text, color: COLORS.text }}
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-sm md:mt-16"
          >
            <p className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Large Text Background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative overflow-hidden"
      >
        <h2
          className="whitespace-nowrap text-center font-bold uppercase leading-none"
          style={{
            color: COLORS.largeText,
            fontSize: "clamp(60px, 15vw, 200px)",
            fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
            letterSpacing: "-0.02em",
            marginTop: "-20px",
            marginBottom: "-40px",
          }}
        >
          {largeText}
        </h2>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 px-6 py-6 md:px-12 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs md:flex-row">
          <p style={{ color: COLORS.textMuted }}>
            &copy; {copyright}
          </p>
          <p style={{ color: COLORS.textMuted }}>{allRights}</p>
          <p className="flex items-center gap-2" style={{ color: COLORS.textMuted }}>
            {madeBy}
            <TubikLogo className="h-4 w-auto" />
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
