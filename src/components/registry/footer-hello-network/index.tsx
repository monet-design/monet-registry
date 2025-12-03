"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F3F6F8",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    textLight: "#9CA3AF",
    border: "#E5E7EB",
    gradientStart: "#F7E557", // Yellow
    gradientMid: "#A5D36C", // Green
    gradientEnd: "#5BB5A0", // Teal
  },
  dark: {
    background: "#0F172A",
    text: "#F8FAFC",
    textMuted: "#94A3B8",
    textLight: "#64748B",
    border: "#334155",
    gradientStart: "#F7E557",
    gradientMid: "#A5D36C",
    gradientEnd: "#5BB5A0",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, ArrowUpRight } from "lucide-react";
import "./font.css";

interface NavLink {
  number: string;
  label: string;
  href: string;
}

interface ResourceLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: "facebook" | "instagram" | "linkedin" | "youtube";
  href: string;
}

interface FooterHelloNetworkProps {
  mode?: "light" | "dark";
  navLinks?: NavLink[];
  address?: {
    street: string;
    city: string;
    postalCode: string;
  };
  email?: string;
  socialLinks?: SocialLink[];
  resourceLinks?: ResourceLink[];
  openingHours?: string;
  copyright?: string;
  legalText?: string;
  partnerText?: string;
}

// Gradient Circle Button Component
function GradientCircleButton({ mode }: { mode: "light" | "dark" }) {
  const colors = COLORS[mode];

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientMid} 50%, ${colors.gradientEnd} 100%)`,
      }}
    >
      <ArrowRight className="w-4 h-4 text-white" />
    </div>
  );
}

// Social Icon Component
function SocialIcon({
  icon,
  mode
}: {
  icon: "facebook" | "instagram" | "linkedin" | "youtube";
  mode: "light" | "dark";
}) {
  const colors = COLORS[mode];
  const iconProps = {
    className: "w-4 h-4",
    style: { color: colors.text }
  };

  const icons = {
    facebook: <Facebook {...iconProps} />,
    instagram: <Instagram {...iconProps} />,
    linkedin: <Linkedin {...iconProps} />,
    youtube: <Youtube {...iconProps} />,
  };

  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-gray-100"
      style={{
        borderColor: colors.border,
        backgroundColor: mode === "light" ? "#FFFFFF" : colors.background,
      }}
    >
      {icons[icon]}
    </motion.a>
  );
}

export default function FooterHelloNetwork({
  mode = "light",
  navLinks = [
    { number: "1", label: "Solutions", href: "#" },
    { number: "2", label: "Bénéfices", href: "#" },
    { number: "3", label: "À propos", href: "#" },
  ],
  address = {
    street: "1224, rue Ste-Catherine Ouest, 3e étage",
    city: "Montréal (Québec)",
    postalCode: "H3G 1P1",
  },
  email = "contact@hellonetwork.ca",
  socialLinks = [
    { icon: "facebook", href: "#" },
    { icon: "instagram", href: "#" },
    { icon: "linkedin", href: "#" },
    { icon: "youtube", href: "#" },
  ],
  resourceLinks = [
    { label: "Calculateur d'employeur", href: "#" },
    { label: "Ressources visuelles", href: "#" },
  ],
  openingHours = "Lun-Ven: 9h à 17h",
  copyright = "© 2023 Tous droits réservés.",
  legalText = "La carte prépayée Hello Visa est émise par la Compagnie de Fiducie Peoples, en vertu d'une licence de Visa Inc.",
  partnerText = "Nos partenaires financiers de confiance",
}: FooterHelloNetworkProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="relative w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Left - Navigation Links */}
          <div className="lg:col-span-4 space-y-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <span
                  className="text-sm"
                  style={{
                    color: colors.textLight,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {link.number}
                </span>
                <span
                  className="text-3xl md:text-4xl lg:text-5xl font-normal italic"
                  style={{
                    color: colors.text,
                    fontFamily: "'Instrument Serif', Georgia, serif",
                  }}
                >
                  {link.label}
                </span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <GradientCircleButton mode={mode} />
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Center - Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            {/* Coordinates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <h3
                className="text-sm font-medium tracking-wide"
                style={{ color: colors.text }}
              >
                Coordonnées
              </h3>
              <div className="space-y-1">
                <p
                  className="text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {address.street}
                </p>
                <p
                  className="text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {address.city}
                </p>
                <p
                  className="text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {address.postalCode}
                </p>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-sm underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity inline-block mt-2"
                style={{ color: colors.text }}
              >
                {email}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-3"
            >
              <h3
                className="text-sm font-medium tracking-wide"
                style={{ color: colors.text }}
              >
                Réseaux sociaux
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <SocialIcon key={index} icon={link.icon} mode={mode} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Resources & Hours */}
          <div className="lg:col-span-4 space-y-8">
            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <h3
                className="text-sm font-medium tracking-wide"
                style={{ color: colors.text }}
              >
                Ressources
              </h3>
              <div className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                    style={{ color: colors.textMuted }}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-3"
            >
              <h3
                className="text-sm font-medium tracking-wide"
                style={{ color: colors.text }}
              >
                Heures d&apos;ouverture
              </h3>
              <p
                className="text-sm"
                style={{ color: colors.textMuted }}
              >
                {openingHours}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-8 border-t"
          style={{ borderColor: colors.border }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {/* Copyright & Legal */}
            <div className="lg:col-span-1 space-y-3">
              <p
                className="text-sm font-medium"
                style={{ color: colors.text }}
              >
                {copyright}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: colors.textLight }}
              >
                {legalText}
              </p>
            </div>

            {/* Financial Partners */}
            <div className="lg:col-span-2 flex flex-col md:flex-row md:items-center md:justify-end gap-4">
              <p
                className="text-xs"
                style={{ color: colors.textLight }}
              >
                {partnerText}
              </p>
              <div className="flex items-center gap-6">
                {/* VISA Logo */}
                <svg
                  viewBox="0 0 60 20"
                  className="h-5 w-auto"
                  style={{ color: colors.text }}
                >
                  <text
                    x="0"
                    y="16"
                    className="text-base font-bold italic"
                    style={{
                      fill: "#1A1F71",
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    VISA
                  </text>
                </svg>
                {/* Peoples Group Logo */}
                <div className="flex items-center gap-1">
                  <div
                    className="w-5 h-5 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "#2563EB" }}
                  >
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <span className="font-medium" style={{ color: colors.text }}>Peoples</span> Group
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
