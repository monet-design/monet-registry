"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#151515",
  divider: "#353535",
  text: "#ffffff",
  textMuted: "#a0a0a0",
} as const;

/**
 * 콘텐츠 설정
 */
const CONTENT = {
  cta: {
    line1: "Let's make something",
    line2: "amazing together.",
  },
  acknowledgment:
    "We acknowledge all Aboriginal and Torres Strait Islander peoples across this Country where we live and work, and we pay our deepest respects to their Elders and Leaders past and present, and to those emerging.",
  location: "Melbourne",
  tagline: "Serving clients locally + beyond",
  copyright: "Double Makers 2023",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import "./font.css";

interface FooterDoubleMakersProps {
  ctaLine1?: string;
  ctaLine2?: string;
  email?: string;
  location?: string;
  tagline?: string;
  copyright?: string;
  acknowledgment?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  projectUrl?: string;
}

export default function FooterDoubleMakers({
  ctaLine1 = CONTENT.cta.line1,
  ctaLine2 = CONTENT.cta.line2,
  email = "hello@doublemakers.co",
  location = CONTENT.location,
  tagline = CONTENT.tagline,
  copyright = CONTENT.copyright,
  acknowledgment = CONTENT.acknowledgment,
  instagramUrl = "#",
  linkedinUrl = "#",
  projectUrl = "#",
}: FooterDoubleMakersProps) {
  return (
    <footer
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* CTA Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2
            className="font-instrument-serif text-4xl italic md:text-5xl lg:text-6xl"
            style={{ color: COLORS.text }}
          >
            {ctaLine1}
            <br />
            {ctaLine2}
          </h2>
        </motion.div>

        {/* Three Column Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3"
        >
          {/* Chat */}
          <div>
            <h3
              className="mb-2 text-sm font-medium tracking-wide"
              style={{ color: COLORS.text }}
            >
              Chat
            </h3>
            <a
              href={`mailto:${email}`}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: COLORS.textMuted }}
            >
              {email}
            </a>
          </div>

          {/* Create */}
          <div>
            <h3
              className="mb-2 text-sm font-medium tracking-wide"
              style={{ color: COLORS.text }}
            >
              Create
            </h3>
            <a
              href={projectUrl}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: COLORS.textMuted }}
            >
              Start a new project
            </a>
          </div>

          {/* Social */}
          <div>
            <h3
              className="mb-2 text-sm font-medium tracking-wide"
              style={{ color: COLORS.text }}
            >
              Social
            </h3>
            <div className="flex items-center justify-center gap-1 text-sm">
              <a
                href={instagramUrl}
                className="transition-opacity hover:opacity-70"
                style={{ color: COLORS.textMuted }}
              >
                Instagram
              </a>
              <span style={{ color: COLORS.textMuted }}> - </span>
              <a
                href={linkedinUrl}
                className="transition-opacity hover:opacity-70"
                style={{ color: COLORS.textMuted }}
              >
                Linkedin
              </a>
            </div>
          </div>
        </motion.div>

        {/* Acknowledgment */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-center text-xs leading-relaxed"
          style={{ color: COLORS.textMuted }}
        >
          {acknowledgment}
        </motion.p>

        {/* Divider */}
        <div
          className="mx-auto mb-8 h-px w-full max-w-2xl"
          style={{ backgroundColor: COLORS.divider }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div
            className="mb-2 flex items-center justify-center gap-2 text-sm"
            style={{ color: COLORS.text }}
          >
            <span>{location}</span>
            <Globe className="h-4 w-4" />
            <span>{tagline}</span>
          </div>
          <p className="text-sm" style={{ color: COLORS.textMuted }}>
            &copy;{copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
