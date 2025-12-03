"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#010E11",
  accent: "#B4D756",
  accentHover: "#C8E86A",
  inputBg: "#1D1D1D",
  inputBorder: "#2A2A2A",
  cardText: "#0A0A0A",
} as const;

const IMAGES = {
  background: {
    path: "/registry/footer-sound-ethics/concert-bg.jpg",
    alt: "Concert stage with dramatic spotlight",
    prompt: `A dramatic concert silhouette scene with a performer on stage under spotlight. Very dark teal-black background with dramatic stage lighting.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState, FormEvent } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface FooterSoundEthicsProps {
  brandName?: string;
  tagline?: string;
  navLinks?: NavLink[];
  formTitle?: string;
  formSubtitle?: string;
  formDescription?: string;
  contactEmail?: string;
  socialLinks?: { label: string; href: string }[];
  address?: {
    street: string;
    city: string;
  };
  copyrightYear?: number;
  copyrightHolder?: string;
  madeBy?: string;
  onSubmit?: (data: { firstName: string; lastName: string; email: string }) => void;
}

export default function FooterSoundEthics({
  brandName = "SOUND\nETHICS",
  tagline = "Embrace AI. Champion Artists.",
  navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "NEWS", href: "#news" },
    { label: "CONTACT", href: "#contact" },
  ],
  formTitle = "YOUR VOICE MATTERS!",
  formSubtitle = "Advocate for Fair AI in Music",
  formDescription = "Sign our petition and support the future of music artists",
  contactEmail = "INFO@SOUNDETHICS.AI",
  socialLinks = [
    { label: "LINKEDIN", href: "#linkedin" },
    { label: "CAREERS", href: "#careers" },
  ],
  address = {
    street: "1800 VINE STREET",
    city: "HOLLYWOOD, CA 90028, USA",
  },
  copyrightYear = 2024,
  copyrightHolder = "Sound Ethics Inc.",
  madeBy = "SFCO",
  onSubmit,
}: FooterSoundEthicsProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.({ firstName, lastName, email });
  };

  return (
    <footer
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.background.path}
          alt={IMAGES.background.alt}
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${COLORS.background}40 0%, ${COLORS.background}80 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center px-6 md:px-12 py-6"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm md:text-base font-bold tracking-wider transition-opacity hover:opacity-70"
              style={{ color: COLORS.accent }}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-4"
          >
            {/* Logo Icon */}
            <div className="flex justify-center mb-4">
              <svg
                width="80"
                height="50"
                viewBox="0 0 80 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="0" width="35" height="8" fill={COLORS.accent} />
                <rect x="0" y="14" width="35" height="8" fill={COLORS.accent} />
                <rect x="0" y="28" width="35" height="8" fill={COLORS.accent} />
                <rect x="45" y="0" width="35" height="8" fill={COLORS.accent} />
                <rect x="45" y="14" width="35" height="8" fill={COLORS.accent} />
                <rect x="45" y="28" width="25" height="8" fill={COLORS.accent} />
              </svg>
            </div>
            <h1
              className="text-3xl md:text-4xl font-black tracking-tight whitespace-pre-line"
              style={{ color: COLORS.accent }}
            >
              {brandName}
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base italic mb-12"
            style={{ color: COLORS.accent }}
          >
            {tagline}
          </motion.p>

          {/* Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-md p-6 md:p-8"
            style={{ backgroundColor: COLORS.accent }}
          >
            <h2
              className="text-xl md:text-2xl font-black text-center mb-1"
              style={{ color: COLORS.cardText }}
            >
              {formTitle}
            </h2>
            <p
              className="text-base md:text-lg text-center mb-3"
              style={{ color: COLORS.cardText }}
            >
              {formSubtitle}
            </p>
            <p
              className="text-xs md:text-sm text-center mb-6 opacity-80"
              style={{ color: COLORS.cardText }}
            >
              {formDescription}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="FIRST NAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 text-sm font-medium placeholder:opacity-70"
                style={{
                  backgroundColor: COLORS.inputBg,
                  color: COLORS.accent,
                  border: "none",
                }}
              />
              <input
                type="text"
                placeholder="LAST NAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 text-sm font-medium placeholder:opacity-70"
                style={{
                  backgroundColor: COLORS.inputBg,
                  color: COLORS.accent,
                  border: "none",
                }}
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm font-medium placeholder:opacity-70"
                style={{
                  backgroundColor: COLORS.inputBg,
                  color: COLORS.accent,
                  border: "none",
                }}
              />
              <button
                type="submit"
                className="w-full py-3 text-sm font-bold tracking-wider flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "transparent",
                  color: COLORS.cardText,
                }}
              >
                <ArrowUpRight size={16} />
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="px-6 md:px-12 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Contact Section */}
            <div>
              <p
                className="text-xs italic mb-2"
                style={{ color: COLORS.accent }}
              >
                Questions?
              </p>
              <h3
                className="text-2xl md:text-3xl font-black mb-4"
                style={{ color: COLORS.accent }}
              >
                CONTACT US
              </h3>
              <a
                href={`mailto:${contactEmail.toLowerCase()}`}
                className="block text-sm font-bold mb-2 transition-opacity hover:opacity-70"
                style={{ color: COLORS.accent }}
              >
                {contactEmail}
              </a>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-bold transition-opacity hover:opacity-70"
                    style={{ color: COLORS.accent }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Address Section */}
            <div className="text-left md:text-right">
              <p
                className="text-xs italic mb-2"
                style={{ color: COLORS.accent }}
              >
                Visiting?
              </p>
              <h3
                className="text-2xl md:text-3xl font-black mb-4"
                style={{ color: COLORS.accent }}
              >
                FINDING US
              </h3>
              <p
                className="text-sm font-bold"
                style={{ color: COLORS.accent }}
              >
                {address.street}
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: COLORS.accent }}
              >
                {address.city}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-4 border-t border-white/10">
            <p
              className="text-xs"
              style={{ color: COLORS.accent, opacity: 0.7 }}
            >
              &copy; {copyrightYear} {copyrightHolder}
            </p>
            <p
              className="text-xs"
              style={{ color: COLORS.accent, opacity: 0.7 }}
            >
              Made by {madeBy}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
