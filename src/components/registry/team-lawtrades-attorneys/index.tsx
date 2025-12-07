"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0a0a0a",
  textPrimary: "#ffffff",
  textSecondary: "#9ca3af",
  borderColor: "#374151",
  inputBackground: "transparent",
} as const;

/**
 * Footer 링크 데이터
 */
const FOOTER_LINKS = {
  talent: {
    title: "Talent",
    links: [
      { label: "How It Works", href: "#" },
      { label: "Opportunities", href: "#" },
    ],
  },
  companies: {
    title: "Companies",
    links: [
      { label: "Why Lawtrades", href: "#" },
      { label: "Legal Practice Areas", href: "#" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  community: {
    title: "Community",
    links: [
      { label: "About", href: "#" },
      { label: "Lawtrades Hub", href: "#" },
      { label: "Articles", href: "#" },
      { label: "Podcasts", href: "#" },
      { label: "Events", href: "#" },
      { label: "Join our Slack", href: "#" },
    ],
  },
} as const;

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

// Custom Icons for social media
const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Lawtrades Logo Component
const LawtradesLogo = () => (
  <div className="flex items-center gap-2">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L10 20H14L20 4H16L12 16L8 4H4Z"
        fill="white"
      />
    </svg>
    <span className="text-xl font-semibold text-white">Lawtrades</span>
  </div>
);

// App Store Button Component
const AppStoreButton = ({ type }: { type: "ios" | "android" }) => (
  <button
    className="flex items-center gap-2 rounded-md border border-gray-600 bg-transparent px-3 py-2 text-white transition-colors hover:bg-gray-800"
  >
    {type === "ios" ? (
      <>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col items-start text-xs">
          <span className="text-[10px] opacity-80">Download on the</span>
          <span className="font-semibold">App Store</span>
        </div>
      </>
    ) : (
      <>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
        <div className="flex flex-col items-start text-xs">
          <span className="text-[10px] opacity-80">GET IT ON</span>
          <span className="font-semibold">Google Play</span>
        </div>
      </>
    )}
  </button>
);

interface FooterLinkGroupProps {
  title: string;
  links: readonly { label: string; href: string }[];
}

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-base font-medium text-white">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

interface TeamLawtradesAttorneysProps {
  companyName?: string;
  logoComponent?: React.ReactNode;
  talentLinks?: { label: string; href: string }[];
  companiesLinks?: { label: string; href: string }[];
  aboutLinks?: { label: string; href: string }[];
  communityLinks?: { label: string; href: string }[];
  newsletterTitle?: string;
  newsletterDescription?: string;
  inputPlaceholder?: string;
  submitButtonText?: string;
  copyrightYear?: string;
  showAppStoreButtons?: boolean;
  onNewsletterSubmit?: (email: string) => void;
}

export default function TeamLawtradesAttorneys({
  companyName = "Lawtrades",
  logoComponent,
  talentLinks = [...FOOTER_LINKS.talent.links],
  companiesLinks = [...FOOTER_LINKS.companies.links],
  aboutLinks = [...FOOTER_LINKS.about.links],
  communityLinks = [...FOOTER_LINKS.community.links],
  newsletterTitle = "Don't miss a thing",
  newsletterDescription = "Sign up for our newsletter.",
  inputPlaceholder = "Email address...",
  submitButtonText = "Submit",
  copyrightYear = "2022",
  showAppStoreButtons = true,
  onNewsletterSubmit,
}: TeamLawtradesAttorneysProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (onNewsletterSubmit && email) {
      onNewsletterSubmit(email);
    }
  };

  return (
    <footer
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start justify-between"
        >
          {/* Logo */}
          <div className="mb-12">
            {logoComponent || <LawtradesLogo />}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="flex flex-col items-center gap-1 text-white transition-opacity hover:opacity-80"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="text-xs">Top</span>
          </button>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5"
        >
          {/* Talent & Companies Column */}
          <div className="flex flex-col gap-10">
            <FooterLinkGroup title="Talent" links={talentLinks} />
            <FooterLinkGroup title="Companies" links={companiesLinks} />
          </div>

          {/* About Column */}
          <FooterLinkGroup title="About" links={aboutLinks} />

          {/* Community Column */}
          <FooterLinkGroup title="Community" links={communityLinks} />

          {/* Newsletter Column */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-2">
            <h3 className="text-base font-medium text-white">{newsletterTitle}</h3>
            <p className="text-sm text-gray-400">{newsletterDescription}</p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="flex items-center border-b border-gray-600">
                <input
                  type="email"
                  name="email"
                  placeholder={inputPlaceholder}
                  className="flex-1 bg-transparent py-2 text-sm text-white placeholder-gray-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white transition-opacity hover:opacity-80"
                >
                  {submitButtonText}
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href={SOCIAL_LINKS[0].href}
                className="text-white transition-opacity hover:opacity-80"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={SOCIAL_LINKS[1].href}
                className="text-white transition-opacity hover:opacity-80"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href={SOCIAL_LINKS[2].href}
                className="text-white transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 md:flex-row"
        >
          {/* Privacy & Terms */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>

          {/* App Store Buttons */}
          {showAppStoreButtons && (
            <div className="flex items-center gap-3">
              <AppStoreButton type="ios" />
              <AppStoreButton type="android" />
            </div>
          )}

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {companyName} {copyrightYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
