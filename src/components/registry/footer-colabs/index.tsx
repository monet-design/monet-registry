"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  primary: "#0246C5", // CoLabs blue
  footerBg: "#282C2D", // Dark charcoal
  pageBg: "#EBE7E3", // Light beige
  footerText: "#9CA3AF", // Gray text
  footerTextLight: "#D1D5DB", // Lighter gray text
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  scientist: {
    path: "/registry/footer-colabs/scientist.jpg",
    alt: "Scientist working in laboratory",
    prompt: `Professional female scientist working in a laboratory, wearing a white lab coat and safety goggles`,
  },
} as const;

/**
 * 푸터 네비게이션 링크
 */
const NAV_LINKS = {
  main: [
    { label: "Services", href: "#" },
    { label: "Our Principles", href: "#" },
    { label: "About", href: "#" },
    { label: "Community", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
  ],
} as const;

/**
 * 위치 정보
 */
const LOCATIONS = [
  {
    name: "CoLabs HQ",
    address: "17/306 Albert St, Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    name: "CoLabs Coworking",
    address: "1/306 Albert St, Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    name: "",
    address: "20/306 Albert St, Brunswick",
    phone: "(03) 9111 2399",
  },
  {
    name: "",
    address: "2 Acacia Place, Notting Hill",
    phone: "(03) 9111 2399",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Image from "next/image";

interface FooterColabsProps {
  companyName?: string;
  acknowledgement?: string;
  newsletterTitle?: string;
  newsletterSubtitle?: string;
  emailPlaceholder?: string;
  copyrightYear?: string;
  onSubscribe?: (email: string) => void;
}

export default function FooterColabs({
  companyName = "CoLabs",
  acknowledgement = "Co-Labs Melbourne respectfully acknowledges the Traditional Custodians of the land on which we operate our business – the Boon Wurrung and Wurundjeri peoples of the Kulin Nation.",
  newsletterTitle = "An ecosystem to be part of.\nStay in the loop.",
  newsletterSubtitle = "Subscribe for updates, news, events, and community resources.",
  emailPlaceholder = "Your Email Address",
  copyrightYear = "2023",
  onSubscribe,
}: FooterColabsProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (onSubscribe && email) {
      onSubscribe(email);
    }
  };

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: COLORS.pageBg }}
    >
      {/* Newsletter Section */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={IMAGES.scientist.path}
              alt={IMAGES.scientist.alt}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right - Subscribe Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: COLORS.primary }}
          >
            <h2
              className="mb-8 font-serif text-3xl leading-tight text-white md:text-4xl"
              style={{ fontStyle: "italic" }}
            >
              {newsletterTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < newsletterTitle.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  className="w-full rounded-full border-2 border-white bg-white px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-white">Subscribe</span>
                <button
                  type="submit"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>

            <p className="text-sm text-white/90">{newsletterSubtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-6 py-12"
        style={{ backgroundColor: COLORS.footerBg }}
      >
        <div className="mx-auto max-w-6xl">
          {/* Top Row - Acknowledgement & Locations */}
          <div className="mb-10 grid gap-8 md:grid-cols-12">
            {/* Acknowledgement */}
            <div className="md:col-span-5">
              <p
                className="text-sm leading-relaxed"
                style={{ color: COLORS.footerTextLight }}
              >
                {acknowledgement}
              </p>
            </div>

            {/* Locations */}
            <div className="grid grid-cols-2 gap-6 md:col-span-4">
              {LOCATIONS.slice(0, 2).map((location, index) => (
                <div key={index}>
                  {location.name && (
                    <p
                      className="mb-1 text-sm font-medium"
                      style={{ color: COLORS.footerTextLight }}
                    >
                      {location.name}
                    </p>
                  )}
                  <p className="text-sm" style={{ color: COLORS.footerText }}>
                    {location.address}
                  </p>
                  <p className="text-sm" style={{ color: COLORS.footerText }}>
                    {location.phone}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 md:col-span-3">
              {LOCATIONS.slice(2, 4).map((location, index) => (
                <div key={index}>
                  {location.name && (
                    <p
                      className="mb-1 text-sm font-medium"
                      style={{ color: COLORS.footerTextLight }}
                    >
                      {location.name}
                    </p>
                  )}
                  <p className="text-sm" style={{ color: COLORS.footerText }}>
                    {location.address}
                  </p>
                  <p className="text-sm" style={{ color: COLORS.footerText }}>
                    {location.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Row - Navigation Links */}
          <div className="mb-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5" />
            <div className="md:col-span-4">
              <ul className="space-y-2">
                {NAV_LINKS.main.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: COLORS.footerText }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3">
              <ul className="space-y-2">
                {NAV_LINKS.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: COLORS.footerText }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p
                className="mt-6 text-sm"
                style={{ color: COLORS.footerText }}
              >
                &copy; {copyrightYear} {companyName}
              </p>
            </div>
          </div>

          {/* Bottom Row - Logo & Social */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-700 pt-8 md:flex-row">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 16C12 13.7909 13.7909 12 16 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-2xl font-medium">{companyName}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
