"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1e1e1e",
  backgroundLighter: "#2a2a2a",
  textPrimary: "#FFFFFF",
  textSecondary: "#a0a0a0",
  textMuted: "#6b7280",
  accentYellow: "#d4ff00",
  accentPurple: "#c4a7e7",
  cardDark: "#3a3a3a",
  cardGreen: "#1a4a3a",
  border: "#3a3a3a",
} as const;

/**
 * 기본 텍스트 콘텐츠
 */
const DEFAULT_CONTENT = {
  cta: {
    heading: "Built for teams of\ntoday, like yours.",
    emailPlaceholder: "What's your work email?",
    buttonText: "Get Started",
    subtext: "Get started with zero commitments",
  },
  footer: {
    copyright: "Copyright 2024",
    tagline: "Built with love from Europe",
    legalText:
      "Yonder Technology Limited, trading as Kota, is a Tied Intermediary of NFP Ireland Consultants Ltd for Insurance and Pensions. NFP Ireland Consultants Ltd is regulated by the Central Bank of Ireland. Company Registration No. 711366. Registered Office: 128 Baggot Street Lower, Dublin 2, D02 A430, Ireland. Yonder Financial Technology Ltd, trading as Kota, is an appointed representative of Innovative Risk Labs Ltd (FRN: 609155) which is authorised and regulated by the Financial Conduct Authority.",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Snowflake } from "lucide-react";
import { Input } from "@/components/ui/input";

// Blog Article Type
interface BlogArticle {
  title: string;
  image?: string;
  category?: string;
  bgColor?: string;
}

// Navigation Link Type
interface NavLink {
  label: string;
  href: string;
}

// Navigation Section Type
interface NavSection {
  title: string;
  links: NavLink[];
}

// Social Link Type
interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// Legal Link Type
interface LegalLink {
  label: string;
  href: string;
}

interface KotaFooterWithCtaProps {
  // CTA Section
  heading?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  subtext?: string;
  onSubmit?: (email: string) => void;

  // Hero Images
  heroImages?: {
    left?: string;
    right?: string;
  };

  // Navigation
  navigation?: NavSection[];

  // Blog Section
  blogCategories?: string[];
  blogArticles?: BlogArticle[];

  // Social & Legal
  socialLinks?: SocialLink[];
  legalLinks?: LegalLink[];

  // Footer Text
  copyright?: string;
  tagline?: string;
  legalText?: string;

  // Brand
  brandName?: string;
}

// App Store Button Component
const AppStoreButton = ({ className }: { className?: string }) => (
  <a
    href="#"
    className={`inline-flex items-center justify-center bg-black border border-white/20 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors ${className}`}
  >
    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div className="text-left">
      <div className="text-[8px] text-white/80">Download on the</div>
      <div className="text-sm font-semibold text-white">App Store</div>
    </div>
  </a>
);

// Google Play Button Component
const GooglePlayButton = ({ className }: { className?: string }) => (
  <a
    href="#"
    className={`inline-flex items-center justify-center bg-black border border-white/20 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors ${className}`}
  >
    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#4285F4" />
      <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#34A853" />
      <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="#FBBC04" />
      <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#EA4335" />
    </svg>
    <div className="text-left">
      <div className="text-[8px] text-white/80">GET IT ON</div>
      <div className="text-sm font-semibold text-white">Google Play</div>
    </div>
  </a>
);

// ISO Badge Component
const ISOBadge = ({ className }: { className?: string }) => (
  <div
    className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 ${className}`}
  >
    <span className="text-[8px] text-white/60 text-center leading-tight">
      ISO
      <br />
      27001
    </span>
  </div>
);

// Blog Card Component
const BlogCard = ({
  article,
  index,
}: {
  article: BlogArticle;
  index: number;
}) => {
  const bgColors = [COLORS.cardDark, COLORS.cardGreen];
  const bgColor = article.bgColor || bgColors[index % bgColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-4"
    >
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-white/60 text-xs text-center px-2">
            {article.category || "Blog"}
          </div>
        )}
      </div>
      <p className="text-sm text-white leading-snug">{article.title}</p>
    </motion.div>
  );
};

export default function KotaFooterWithCta({
  heading = DEFAULT_CONTENT.cta.heading,
  emailPlaceholder = DEFAULT_CONTENT.cta.emailPlaceholder,
  buttonText = DEFAULT_CONTENT.cta.buttonText,
  subtext = DEFAULT_CONTENT.cta.subtext,
  onSubmit,
  heroImages = {},
  navigation = [
    {
      title: "Benefits",
      links: [
        { label: "Health insurance", href: "#" },
        { label: "Retirement", href: "#" },
        { label: "Life Assurance", href: "#" },
        { label: "Bring Your Own", href: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Startups", href: "#" },
        { label: "Mid-sized", href: "#" },
        { label: "Developers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Help centre", href: "#" },
        { label: "Security", href: "#" },
        { label: "Trust Centre", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Cost Calculator", href: "#" },
        { label: "Benefits in Europe Report", href: "#" },
        { label: "Become a partner", href: "#" },
        { label: "Refer and earn €250*", href: "#" },
      ],
    },
  ],
  blogCategories = ["PARTNERSHIPS", "PRODUCT", "MEET THE TEAM", "COMPANY NEWS"],
  blogArticles = [
    {
      title: "Kota raise €5M Seed led by EQT Ventures",
      category: "€5M\nSeed Round",
      bgColor: "#5a3a8a",
    },
    {
      title: "Life Assurance is now available on Kota",
      category: "Life\nAssurance",
      bgColor: "#1a4a3a",
    },
  ],
  socialLinks = [
    { name: "Instagram", href: "#", icon: <Instagram className="w-5 h-5" /> },
    { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> },
  ],
  legalLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Regulatory", href: "#" },
  ],
  copyright = DEFAULT_CONTENT.footer.copyright,
  tagline = DEFAULT_CONTENT.footer.tagline,
  legalText = DEFAULT_CONTENT.footer.legalText,
  brandName = "Kota",
}: KotaFooterWithCtaProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 whitespace-pre-line"
                style={{ color: COLORS.textPrimary }}
              >
                {heading}
              </h2>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-full overflow-hidden p-1">
                  <Input
                    type="email"
                    name="email"
                    placeholder={emailPlaceholder}
                    className="flex-1 border-0 bg-transparent text-gray-800 placeholder:text-gray-400 focus-visible:ring-0 px-4 py-3 h-auto rounded-full"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-colors whitespace-nowrap"
                  >
                    {buttonText}
                  </button>
                </div>
              </form>

              <p
                className="text-sm"
                style={{ color: COLORS.textSecondary }}
              >
                {subtext}
              </p>
            </motion.div>

            {/* Right Content - Images Collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full lg:w-1/2 h-[300px] md:h-[350px]"
            >
              {/* Purple Background Shape */}
              <div
                className="absolute top-0 right-0 w-48 h-64 rounded-bl-[80px] opacity-60"
                style={{ backgroundColor: COLORS.accentPurple }}
              />

              {/* Left Image - Person with laptop */}
              <div className="absolute left-0 bottom-0 w-48 h-56 rounded-2xl overflow-hidden shadow-xl bg-gray-300">
                {heroImages.left ? (
                  <img
                    src={heroImages.left}
                    alt="Person working"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                    <span className="text-white/60 text-xs">Image</span>
                  </div>
                )}
              </div>

              {/* Yellow Accent Circle */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
                style={{ backgroundColor: COLORS.accentYellow }}
              />

              {/* Right Image - Relaxing person */}
              <div className="absolute right-4 top-8 w-44 h-52 rounded-2xl overflow-hidden shadow-xl bg-gray-300">
                {heroImages.right ? (
                  <img
                    src={heroImages.right}
                    alt="Person relaxing"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-white/60 text-xs">Image</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: COLORS.border }}
      />

      {/* Main Footer Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-2"
          >
            <Snowflake
              className="w-6 h-6"
              style={{ color: COLORS.textPrimary }}
            />
            <span
              className="text-xl font-bold"
              style={{ color: COLORS.textPrimary }}
            >
              {brandName}
            </span>
          </motion.div>

          {/* Navigation Columns */}
          {navigation.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (sectionIndex + 1) * 0.1 }}
              className="border-l border-white/10 pl-6"
            >
              <h3
                className="text-base font-semibold mb-4"
                style={{ color: COLORS.textPrimary }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
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
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: COLORS.border }}
      />

      {/* Blog & App Store Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              <AppStoreButton />
              <GooglePlayButton />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="transition-colors hover:text-white"
                  style={{ color: COLORS.textSecondary }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Blog Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l border-white/10 pl-6"
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: COLORS.textPrimary }}
            >
              Our Blog
            </h3>

            {/* Blog Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blogCategories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-white/20"
                  style={{ color: COLORS.textSecondary }}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Blog Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogArticles.map((article, index) => (
                <BlogCard key={index} article={article} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ backgroundColor: COLORS.border }}
      />

      {/* Legal Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Copyright & Tagline */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span style={{ color: COLORS.textSecondary }}>
              &copy; {copyright}
            </span>
            <span style={{ color: COLORS.textMuted }}>·</span>
            <span style={{ color: COLORS.textSecondary }}>{tagline} </span>
            <span className="text-red-400">♡</span>
          </div>

          {/* Legal Text */}
          <p
            className="text-xs leading-relaxed max-w-5xl"
            style={{ color: COLORS.textMuted }}
          >
            {legalText}
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <ISOBadge />
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4">
                {index > 0 && (
                  <span style={{ color: COLORS.textMuted }}>·</span>
                )}
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: COLORS.textSecondary }}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </footer>
  );
}
