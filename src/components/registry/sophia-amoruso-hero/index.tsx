"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
}

interface ExternalLink {
  label: string;
  href: string;
}

interface CredentialLabel {
  text: string;
}

interface SophiaAmorusoHeroProps {
  name?: string;
  tagline?: string;
  navItems?: NavItem[];
  externalLinks?: ExternalLink[];
  credentials?: CredentialLabel[];
  location?: string;
  time?: string;
  modalTitle?: string;
  modalDescription?: string;
  modalButtonText?: string;
  backgroundImage?: string;
  onFormSubmit?: (data: { name: string; email: string }) => void;
}

// Star Icon for logo
function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "My Story", href: "#" },
  { label: "Press", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Newsletter", href: "#" },
  { label: "Contact", href: "#" },
];

const defaultExternalLinks: ExternalLink[] = [
  { label: "Business Class", href: "#" },
  { label: "Trust Fund", href: "#" },
];

const defaultCredentials: CredentialLabel[] = [
  { text: "VENTURE CAPITALIST" },
  { text: "NYT BESTSELLING\nAUTHOR" },
  { text: "LOS ANGELES\nWORLDWIDE" },
];

export default function SophiaAmorusoHero({
  name = "sophia amoruso",
  tagline = "TRIED TO SMASH CAPITALISM AND\nWOUND UP WITH IT IN MY JOB TITLE",
  navItems = defaultNavItems,
  externalLinks = defaultExternalLinks,
  credentials = defaultCredentials,
  location = "LOS ANGELES\nWORLDWIDE",
  time = "10:54EST",
  modalTitle = "WRITE YOUR BIO\nLIKE A PRO",
  modalDescription = "Talking about yourself can feel weird. Lucky for you, I've made a career out of it. I'll teach you how to showcase your experience, how to embellish without lying, and generate interest that makes you money.",
  modalButtonText = "Download for Free",
  backgroundImage = "/registry/sophia-amoruso-hero/hero-bg.jpg",
  onFormSubmit,
}: SophiaAmorusoHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit?.(formData);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Orange Accent Bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-[5%] top-0 h-full w-[12%] origin-top bg-[#D17036]"
        style={{ zIndex: 1 }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-8 lg:px-12"
      >
        {/* Left side - Logo + Nav Items */}
        <div className="flex items-center gap-6">
          <StarIcon className="h-4 w-4 text-[#1a1a1a]" />
          <div className="hidden items-center gap-1 sm:flex">
            {navItems.map((item, index) => (
              <span key={item.label} className="flex items-center">
                <a
                  href={item.href}
                  className="text-sm text-[#1a1a1a] transition-colors hover:text-[#4a4a4a]"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <span className="mx-1 text-[#1a1a1a]">,</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right side - External Links */}
        <div className="flex items-center gap-4">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm text-[#1a1a1a] transition-colors hover:text-[#4a4a4a]"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-24 sm:px-8 lg:px-12">
        {/* Large Name Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-instrument-serif text-[8vw] font-normal italic leading-[0.9] text-[#1a1a1a] sm:text-[7vw] lg:text-[6vw]"
        >
          {name}
        </motion.h1>

        {/* Credentials Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-start gap-8 sm:gap-16 lg:gap-24"
        >
          {credentials.map((credential, index) => (
            <div key={index} className="text-[10px] font-medium uppercase tracking-wider text-[#1a1a1a]">
              {credential.text.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}
          <div className="text-[10px] font-medium uppercase tracking-wider text-[#1a1a1a]">
            {time}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-8 left-6 max-w-[280px] text-[10px] font-medium uppercase leading-relaxed tracking-wider text-[#1a1a1a] sm:left-8 lg:left-12"
        >
          {tagline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < tagline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute right-6 top-16 z-30 w-[320px] bg-white p-6 shadow-xl sm:right-8 lg:right-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#CFCECC] text-[#1a1a1a] transition-colors hover:bg-[#b8b7b5]"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Title */}
            <h2 className="text-lg font-bold uppercase leading-tight tracking-tight text-[#1a1a1a]">
              {modalTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < modalTitle.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Modal Description */}
            <p className="mt-3 text-xs italic leading-relaxed text-[#535556]">
              {modalDescription}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div>
                <label className="mb-1 block text-[10px] uppercase tracking-wider text-[#535556]">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#323232] px-4 py-3 text-sm text-white placeholder-[#888] focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] uppercase tracking-wider text-[#535556]">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#323232] px-4 py-3 text-sm text-white placeholder-[#888] focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full border border-[#1a1a1a] bg-white py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
              >
                {modalButtonText}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
