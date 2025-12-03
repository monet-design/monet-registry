"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0C0C08",
  text: {
    primary: "#EAE6DC",
    secondary: "#9A9A94",
    muted: "#6B6B65",
  },
  input: {
    background: "#1A1A16",
    border: "#2A2A26",
  },
  button: {
    background: "#0C0C08",
    text: "#EAE6DC",
    border: "#2A2A26",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const DEFAULT_CONTENT = {
  logo: {
    name: "theDen",
  },
  address: {
    title: "Address",
    value: "Lange Kleiweg 40, 2288 GK Rijswijk",
  },
  contacts: [
    {
      company: "CBRE",
      people: [
        {
          name: "Boudewijn van der Reijden",
          email: "boudewijn.vanderreijden@cbre.com",
        },
        {
          name: "Michiel Swart",
          email: "michiel.swart@cbre.com",
        },
      ],
      phone: {
        label: "Call us",
        number: "+31 70 750 89 00",
      },
    },
    {
      company: "RBM Real Estate",
      people: [
        {
          name: "Marcel Leeflang",
          email: "marcel@rbm.nl",
        },
        {
          name: "Bas Thijssen",
          email: "bas@rbm.nl",
        },
      ],
      phone: {
        label: "Call us",
        number: "+31 70 200 18 00",
      },
    },
  ],
  brochure: {
    title: "Download Brochure",
    placeholder: "Email",
    buttonText: "Submit",
  },
  social: [
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
  ],
  disclaimer:
    "Although the information on this website has been compiled with the greatest care, no rights can be derived from its contents. The published images provide inspiration for a possible delivery, but no guarantees are given for this.",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";

// Star/sparkle icon for logo
function StarIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0L17.5 12.5L28 8L17.5 14.5L32 16L17.5 17.5L28 24L17.5 17.5L16 32L14.5 17.5L4 24L14.5 17.5L0 16L14.5 14.5L4 8L14.5 12.5L16 0Z" />
    </svg>
  );
}

interface ContactInfo {
  company: string;
  people: { name: string; email: string }[];
  phone: { label: string; number: string };
}

interface FooterDenProps {
  logoName?: string;
  address?: { title: string; value: string };
  contacts?: ContactInfo[];
  brochure?: { title: string; placeholder: string; buttonText: string };
  socialLinks?: { name: string; url: string }[];
  disclaimer?: string;
  onSubmit?: (email: string) => void;
}

export default function FooterDen({
  logoName = DEFAULT_CONTENT.logo.name,
  address = DEFAULT_CONTENT.address,
  contacts = DEFAULT_CONTENT.contacts as unknown as ContactInfo[],
  brochure = DEFAULT_CONTENT.brochure,
  socialLinks = DEFAULT_CONTENT.social as unknown as { name: string; url: string }[],
  disclaimer = DEFAULT_CONTENT.disclaimer,
  onSubmit,
}: FooterDenProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    setEmail("");
  };

  return (
    <footer
      className="relative w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start"
          >
            <div className="flex items-center gap-3">
              <StarIcon
                className="w-10 h-10 md:w-12 md:h-12"
                style={{ color: COLORS.text.primary }}
              />
              <span
                className="text-3xl md:text-4xl font-light italic"
                style={{
                  color: COLORS.text.primary,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                }}
              >
                {logoName}
              </span>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10"
          >
            {/* Address */}
            <div>
              <h3
                className="text-lg md:text-xl mb-2"
                style={{
                  color: COLORS.text.primary,
                  fontFamily: "'Instrument Serif', Georgia, serif",
                }}
              >
                {address.title}
              </h3>
              <p
                className="text-sm md:text-base"
                style={{ color: COLORS.text.secondary }}
              >
                {address.value}
              </p>
            </div>

            {/* Contacts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {contacts.map((contact, index) => (
                <div key={index} className="space-y-6">
                  <h3
                    className="text-lg md:text-xl"
                    style={{
                      color: COLORS.text.primary,
                      fontFamily: "'Instrument Serif', Georgia, serif",
                    }}
                  >
                    {contact.company}
                  </h3>

                  {/* People */}
                  {contact.people.map((person, pIndex) => (
                    <div key={pIndex}>
                      <p
                        className="text-sm md:text-base mb-1"
                        style={{ color: COLORS.text.secondary }}
                      >
                        {person.name}
                      </p>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-sm md:text-base hover:underline transition-all"
                        style={{ color: COLORS.text.secondary }}
                      >
                        {person.email}
                      </a>
                    </div>
                  ))}

                  {/* Phone */}
                  <div>
                    <p
                      className="text-sm md:text-base mb-1"
                      style={{ color: COLORS.text.secondary }}
                    >
                      {contact.phone.label}
                    </p>
                    <a
                      href={`tel:${contact.phone.number.replace(/\s/g, "")}`}
                      className="text-sm md:text-base hover:underline transition-all"
                      style={{ color: COLORS.text.secondary }}
                    >
                      {contact.phone.number}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Download Brochure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 lg:mt-20 lg:ml-auto lg:max-w-[calc(50%-2.5rem)]"
        >
          <h3
            className="text-xl md:text-2xl mb-6"
            style={{
              color: COLORS.text.primary,
              fontFamily: "'Instrument Serif', Georgia, serif",
            }}
          >
            {brochure.title}
          </h3>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={brochure.placeholder}
              className="flex-1 px-4 py-3 text-sm md:text-base rounded-none outline-none transition-colors"
              style={{
                backgroundColor: COLORS.input.background,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: COLORS.input.border,
                color: COLORS.text.primary,
              }}
            />
            <button
              type="submit"
              className="px-8 py-3 text-sm md:text-base transition-opacity hover:opacity-80"
              style={{
                backgroundColor: COLORS.button.background,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: COLORS.button.border,
                color: COLORS.button.text,
              }}
            >
              {brochure.buttonText}
            </button>
          </form>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8"
        >
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-xs md:text-sm hover:underline transition-all"
                style={{ color: COLORS.text.muted }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Disclaimer */}
          <p
            className="text-xs md:text-sm max-w-2xl lg:text-right"
            style={{ color: COLORS.text.muted }}
          >
            {disclaimer}
          </p>
        </motion.div>
      </div>

      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </footer>
  );
}
