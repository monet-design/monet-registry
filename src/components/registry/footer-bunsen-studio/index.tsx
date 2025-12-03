"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0B0C0C",
  textPrimary: "#FFFFFF",
  textSecondary: "#B8B8B8",
  textMuted: "#636162",
  textDark: "#6B6B6B",
  separator: "#1F1F1F",
  inputBorder: "#2A2A2A",
  glow: {
    purple: "#9427B0",
    blue: "#1D245C",
    orange: "#DB9F46",
  },
} as const;

/**
 * 네비게이션 링크 구조
 */
const DEFAULT_NAV_LINKS = {
  what: {
    title: "What",
    links: [
      { label: "Services", href: "#" },
      { label: "Our Work", href: "#" },
    ],
  },
  who: {
    title: "Who",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#" },
      { label: "Jobs", href: "#" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Linkedin", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NavLink {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

interface FooterBunsenStudioProps {
  /** CTA 제목 */
  ctaTitle?: string;
  /** CTA 버튼 텍스트 */
  ctaButtonText?: string;
  /** CTA 버튼 링크 */
  ctaButtonHref?: string;
  /** 브랜드 이름 */
  brandName?: string;
  /** 네비게이션 링크 */
  navLinks?: {
    what?: NavSection;
    who?: NavSection;
    connect?: NavSection;
  };
  /** 뉴스레터 제목 */
  newsletterTitle?: string;
  /** 이메일 플레이스홀더 */
  emailPlaceholder?: string;
  /** 연락처 이메일 */
  contactEmail?: string;
  /** 연락처 전화번호 */
  contactPhone?: string;
  /** 저작권 텍스트 */
  copyrightText?: string;
  /** 뉴스레터 제출 핸들러 */
  onNewsletterSubmit?: (email: string) => void;
}

export default function FooterBunsenStudio({
  ctaTitle = "Ready to light it up?",
  ctaButtonText = "Start a Project",
  ctaButtonHref = "#",
  brandName = "BUNSEN",
  navLinks = DEFAULT_NAV_LINKS,
  newsletterTitle = "Subscribe to Updates",
  emailPlaceholder = "Email Address",
  contactEmail = "info@bunsenstudio.com",
  contactPhone = "+1 (415) 854-0347",
  copyrightText = "Copyright 2023 Bunsen.\nAll Rights Reserved.",
}: FooterBunsenStudioProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* CTA Section with Gradient Glow */}
      <div className="relative py-20 md:py-28">
        {/* Gradient Glow Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Purple glow */}
            <div
              className="absolute top-[20%] left-[30%] w-[300px] h-[300px] rounded-full blur-[100px]"
              style={{ backgroundColor: COLORS.glow.purple, opacity: 0.6 }}
            />
            {/* Blue glow */}
            <div
              className="absolute top-[10%] right-[20%] w-[250px] h-[250px] rounded-full blur-[80px]"
              style={{ backgroundColor: COLORS.glow.blue, opacity: 0.8 }}
            />
            {/* Orange glow */}
            <div
              className="absolute top-[30%] right-[10%] w-[200px] h-[200px] rounded-full blur-[80px]"
              style={{ backgroundColor: COLORS.glow.orange, opacity: 0.7 }}
            />
          </motion.div>
        </div>

        {/* CTA Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light italic mb-8"
            style={{
              color: COLORS.textPrimary,
              fontFamily: "'Playfair Display', serif",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {ctaTitle}
          </motion.h2>
          <motion.a
            href={ctaButtonHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {ctaButtonText}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Separator */}
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="w-full h-px"
          style={{ backgroundColor: COLORS.separator }}
        />
      </div>

      {/* Footer Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="text-2xl font-bold tracking-tight leading-tight"
              style={{ color: COLORS.textPrimary }}
            >
              {brandName.split("").slice(0, 3).join("")}
              <br />
              {brandName.split("").slice(3).join("")}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="md:col-span-6 grid grid-cols-3 gap-8">
            {Object.entries(navLinks).map(([key, section], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3
                  className="text-sm mb-4"
                  style={{ color: COLORS.textMuted }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm hover:opacity-80 transition-opacity"
                        style={{ color: COLORS.textSecondary }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Empty space for alignment */}
          <div className="hidden md:block md:col-span-3" />
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3
            className="text-lg font-medium whitespace-nowrap"
            style={{ color: COLORS.textPrimary }}
          >
            {newsletterTitle}
          </h3>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Input
                type="email"
                placeholder={emailPlaceholder}
                className="w-full h-12 pl-4 pr-14 rounded-lg border bg-transparent text-white placeholder:text-gray-500"
                style={{ borderColor: COLORS.inputBorder }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border transition-colors hover:bg-white/10"
                style={{ borderColor: COLORS.textSecondary }}
              >
                <ArrowRight
                  className="w-4 h-4"
                  style={{ color: COLORS.textSecondary }}
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs"
          style={{ color: COLORS.textDark }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Contact Info */}
          <div className="flex flex-col gap-1">
            <a href={`mailto:${contactEmail}`} className="hover:opacity-80 transition-opacity">
              {contactEmail}
            </a>
            <a href={`tel:${contactPhone.replace(/\s/g, "")}`} className="hover:opacity-80 transition-opacity">
              {contactPhone}
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              Terms & Conditions
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-right whitespace-pre-line">
            &copy; {copyrightText}
          </div>
        </motion.div>
      </div>

      {/* Google Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
      `}</style>
    </section>
  );
}
