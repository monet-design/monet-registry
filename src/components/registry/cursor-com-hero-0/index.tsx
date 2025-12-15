"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#FFFFFF",
    text: "#1F1F1F",
    textSec: "#6B7280",
    card: "#F5F5F5",
    cardHover: "#EBEBEB",
    border: "#E5E5E5",
    editorBg: "#FFFFFF",
    chromeBg: "#FAFAFA",
    ansiGreen: "#22C55E",
    ansiRed: "#EF4444",
  },
  dark: {
    bg: "#0A0A0A",
    text: "#E4E4E4",
    textSec: "#9CA3AF",
    card: "#1A1A1A",
    cardHover: "#262626",
    border: "#2A2A2A",
    editorBg: "#1E1E1E",
    chromeBg: "#171717",
    ansiGreen: "#4ADE80",
    ansiRed: "#F87171",
  },
} as const;

const IMAGES = {
  hero: {
    path: "https://cursor.com/marketing-static/_next/image?url=https%3A%2F%2Fptht05hbb1ssoooe.public.blob.vercel-storage.com%2Fassets%2Fmisc%2Fasset-cc24ca462279ca23250c.jpg&w=3840&q=70",
    alt: "Cursor IDE background",
  },
} as const;

const LOGO_VIDEOS = {
  dark: {
    mp4: "https://cursor.com/marketing-static/logo/logo-dark-theme.mp4",
    webm: "https://cursor.com/marketing-static/logo/logo-dark-theme.webm",
  },
  light: {
    mp4: "https://cursor.com/marketing-static/logo/logo-light-theme.mp4",
    webm: "https://cursor.com/marketing-static/logo/logo-light-theme.webm",
  },
} as const;

// ============================================================================

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ChevronDown, Menu, X, Download } from "lucide-react";

interface CursorComHero0Props {
  mode?: "light" | "dark";
}

const CursorLogo = ({ color = "currentColor" }: { color?: string }) => (
  <svg
    fill="none"
    className="w-[95px] lg:w-[96px]"
    viewBox="0 0 2193 545"
    xmlns="http://www.w3.org/2000/svg"
    overflow="visible"
  >
    <g fill={color}>
      <path d="m466.383 137.073-206.469-119.2034c-6.63-3.8287-14.811-3.8287-21.441 0l-206.4586 119.2034c-5.5734 3.218-9.0144 9.169-9.0144 15.615v240.375c0 6.436 3.441 12.397 9.0144 15.615l206.4686 119.203c6.63 3.829 14.811 3.829 21.441 0l206.468-119.203c5.574-3.218 9.015-9.17 9.015-15.615v-240.375c0-6.436-3.441-12.397-9.015-15.615zm-12.969 25.25-199.316 345.223c-1.347 2.326-4.904 1.376-4.904-1.319v-226.048c0-4.517-2.414-8.695-6.33-10.963l-195.7577-113.019c-2.3263-1.347-1.3764-4.905 1.3182-4.905h398.6305c5.661 0 9.199 6.136 6.368 11.041h-.009z" />
      <path d="m723.253 148.84h87.856v48.397h-84.881c-45.789 0-81.527 26.432-81.527 82.273s35.738 82.273 81.527 82.273h84.881v48.397h-91.578c-76.691 0-131.039-45.043-131.039-130.66 0-85.618 58.07-130.661 134.761-130.661z" />
      <path d="m855.781 148.84h54.348v159.7c0 39.828 18.242 58.448 61.056 58.448 42.815 0 61.055-18.61 61.055-58.448v-159.7h54.35v170.866c0 58.071-36.85 94.933-115.405 94.933-78.551 0-115.404-37.231-115.404-95.301z" />
      <path d="m1370.62 222.913c0 29.04-16.75 51.372-39.09 61.056v.746c23.45 3.354 35.37 20.103 35.73 42.814l1.12 82.641h-54.35l-1.11-73.705c-.37-16.381-10.06-26.432-29.41-26.432h-90.47v100.137h-54.34v-261.33h150.02c49.15 0 81.9 24.94 81.9 74.083zm-54.73 7.454c0-22.333-11.91-34.623-34.24-34.623h-88.61v69.236h89.34c20.47 0 33.51-12.281 33.51-34.623z" />
      <path d="m1576.09 333.85c0-18.61-11.91-26.432-29.77-27.915l-60.31-5.583c-52.12-4.837-79.3-25.318-79.3-74.83 0-49.511 33.51-76.69 81.53-76.69h133.27v46.904h-129.55c-18.61 0-30.52 9.683-30.52 28.294 0 18.61 12.28 27.547 30.9 29.04l61.42 5.214c46.54 4.091 77.06 25.318 77.06 75.198s-32.38 76.69-78.17 76.69h-139.23v-46.904h134.01c17.5 0 28.66-11.912 28.66-29.408z" />
      <path d="m1789.79 144.373c81.89 0 133.65 52.487 133.65 134.761 0 82.273-53.98 135.506-135.88 135.506s-133.65-53.233-133.65-135.506c0-82.274 53.98-134.761 135.88-134.761zm77.43 135.129c0-55.095-32.02-87.479-78.56-87.479-46.53 0-78.55 32.384-78.55 87.479 0 55.094 32.02 87.478 78.55 87.478 46.54 0 78.56-32.384 78.56-87.478z" />
      <path d="m2192.95 222.913c0 29.04-16.75 51.372-39.1 61.056v.746c23.46 3.354 35.37 20.103 35.74 42.814l1.12 82.641h-54.35l-1.12-73.705c-.36-16.381-10.05-26.432-29.4-26.432h-90.47v100.137h-54.35v-261.33h150.03c49.14 0 81.9 24.94 81.9 74.083zm-54.73 7.454c0-22.333-11.91-34.623-34.25-34.623h-88.6v69.236h89.34c20.47 0 33.51-12.281 33.51-34.623z" />
    </g>
  </svg>
);

// Spinner Icon
const SpinnerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="animate-spin"
  >
    <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z" />
  </svg>
);

// Check Circle Icon
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 13.9766C4.70117 13.9766 2.02344 11.2988 2.02344 8C2.02344 4.70117 4.70117 2.02344 8 2.02344C11.2988 2.02344 13.9766 4.70117 13.9766 8C13.9766 11.2988 11.2988 13.9766 8 13.9766ZM8 12.9805C10.7539 12.9805 12.9805 10.7539 12.9805 8C12.9805 5.24609 10.7539 3.01953 8 3.01953C5.24609 3.01953 3.01953 5.24609 3.01953 8C3.01953 10.7539 5.24609 12.9805 8 12.9805ZM7.35547 10.7832C7.16211 10.7832 7.00391 10.7012 6.85742 10.5078L5.42773 8.75C5.3457 8.63867 5.29297 8.51562 5.29297 8.38672C5.29297 8.12891 5.49219 7.92383 5.74414 7.92383C5.9082 7.92383 6.03711 7.9707 6.17773 8.1582L7.33203 9.65234L9.76367 5.75C9.875 5.58008 10.0215 5.48633 10.168 5.48633C10.4141 5.48633 10.6484 5.65625 10.6484 5.91992C10.6484 6.04883 10.5723 6.17773 10.5078 6.29492L7.83008 10.5078C7.71289 10.6895 7.54883 10.7832 7.35547 10.7832Z" />
  </svg>
);

export default function CursorComHero0({ mode = "dark" }: CursorComHero0Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoVideos = LOGO_VIDEOS[mode];

  const handleLogoHover = () => {
    setIsLogoHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleLogoLeave = () => {
    setIsLogoHovered(false);
  };

  const resourceLinks = [
    { label: "Changelog", href: "/changelog" },
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "https://cursor.com/docs", external: true },
    { label: "Community", href: "/community" },
    { label: "Learn", href: "https://cursor.com/learn", external: true },
    { label: "Workshops", href: "/workshops" },
    { label: "Forum", href: "https://forum.cursor.com/", external: true },
    { label: "Careers", href: "/careers" },
  ];

  const inProgressItems = [
    "Enterprise Order Management System",
    "Analyze Tab vs Agent Usage Patterns",
    "Fix PR Comments Fetching Issue",
  ];

  const readyForReviewItems = [
    {
      title: "PyTorch MNIST Experiments",
      time: "now",
      added: 162,
      removed: 37,
      active: true,
    },
    {
      title: "Set up Cursor Rules for Dashboard",
      time: "30m",
      added: 37,
      removed: 0,
      active: false,
    },
    {
      title: "Bioinformatics Tools",
      time: "45m",
      added: 135,
      removed: 21,
      active: false,
    },
  ];

  return (
    <section style={{ backgroundColor: colors.bg, color: colors.text }}>
      {/* Header */}
      <header
        className="fixed left-0 top-0 z-50 w-full px-4 md:px-8"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="container relative grid h-16 grid-cols-[1fr_auto_auto] items-center lg:grid-cols-[auto_1fr_auto]">
          {/* Logo */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <a
              href="/"
              className="relative inline-flex"
              aria-label="Homepage"
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            >
              <div className="relative top-[0.2rem] left-[-2px]">
                <div className="pointer-events-none absolute left-0 top-0 h-full">
                  <video
                    ref={videoRef}
                    className="h-full w-auto transition-opacity duration-500"
                    playsInline
                    muted
                    preload="auto"
                    style={{ opacity: isLogoHovered ? 1 : 0 }}
                  >
                    <source type="video/webm" src={logoVideos.webm} />
                    <source type="video/mp4" src={logoVideos.mp4} />
                  </video>
                </div>
                <CursorLogo color={colors.text} />
              </div>
              <span className="sr-only">Cursor</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ul className="flex items-center justify-center">
                {[
                  { label: "Features", href: "/features" },
                  { label: "Enterprise", href: "/enterprise" },
                  { label: "Pricing", href: "/pricing" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="px-4 py-2 text-sm transition-opacity hover:opacity-70"
                      style={{ color: colors.text }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li
                  className="relative"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm transition-opacity hover:opacity-70"
                    style={{ color: colors.text }}
                  >
                    Resources
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </button>
                  {isResourcesOpen && (
                    <div className="absolute left-0 top-full pt-3">
                      <div
                        className="grid grid-cols-2 gap-x-4 rounded-lg p-4 shadow-lg"
                        style={{
                          backgroundColor: colors.card,
                          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        }}
                      >
                        {resourceLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={
                              link.external ? "noopener noreferrer" : undefined
                            }
                            className="min-w-[8rem] rounded px-3 py-2 text-sm transition-colors hover:opacity-70"
                            style={{ color: colors.text }}
                          >
                            {link.label}
                            {link.external && (
                              <span className="ml-1 text-xs opacity-50">↗</span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: colors.text }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: colors.text }} />
              )}
            </button>
          </div>

          {/* Right Side Buttons */}
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center gap-3 justify-self-end lg:col-start-3">
            <a
              href="https://cursor.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-70 md:block"
              style={{ color: colors.textSec }}
            >
              Sign in
            </a>
            <a
              href="/download"
              className="hidden rounded-md px-4 py-1.5 text-sm font-medium sm:block"
              style={{
                backgroundColor: isDark ? colors.text : colors.bg,
                color: isDark ? colors.bg : colors.text,
                border: isDark ? "none" : `1px solid ${colors.border}`,
              }}
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 overflow-auto px-4 pt-20 lg:hidden"
          style={{ backgroundColor: colors.bg }}
        >
          <ul className="flex flex-col">
            {[
              { label: "Features", href: "/features" },
              { label: "Enterprise", href: "/enterprise" },
              { label: "Pricing", href: "/pricing" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 text-lg"
                  style={{ color: colors.text }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="flex w-full items-center py-3 text-lg"
                style={{ color: colors.text }}
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <span className="ml-2">{isResourcesOpen ? "↓" : "→"}</span>
              </button>
              {isResourcesOpen && (
                <ul className="ml-4">
                  {resourceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="block py-2 text-base opacity-70"
                        style={{ color: colors.text }}
                      >
                        {link.label}
                        {link.external && (
                          <span className="ml-1 text-xs">↗</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 md:px-8">
        {/* Hero Text */}
        <div className="mb-6 max-w-3xl text-left">
          <h1 className="mb-4 text-balance text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
            Built to make you extraordinarily productive, Cursor is the best way
            to code with AI.
          </h1>
          <div className="flex items-center gap-4">
            <a
              href="https://api2.cursor.sh/updates/download/golden/darwin-arm64/cursor/2.2"
              className="hidden items-center gap-2 rounded-md px-4 py-2 text-sm font-medium md:inline-flex"
              style={{
                backgroundColor: isDark ? colors.text : colors.bg,
                color: isDark ? colors.bg : colors.text,
                border: isDark ? "none" : `1px solid ${colors.border}`,
              }}
            >
              Download for macOS
              <Download className="h-4 w-4" />
            </a>
            <a
              href="/agents"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium md:hidden"
              style={{
                backgroundColor: isDark ? colors.text : colors.bg,
                color: isDark ? colors.bg : colors.text,
              }}
            >
              Try mobile agent
              <span>→</span>
            </a>
          </div>
        </div>

        {/* IDE Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-lg"
          style={{
            height: "min(780px, 70vh)",
            minHeight: "500px",
            background: `linear-gradient(135deg, ${colors.card} 0%, ${colors.bg} 100%)`,
          }}
        >
          {/* Background Image */}
          <img
            src={IMAGES.hero.path}
            alt={IMAGES.hero.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: isDark ? "brightness(0.6)" : "brightness(0.9)" }}
          />

          {/* IDE Window */}
          <div
            className="absolute left-1/2 top-1/2 hidden w-[1024px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[10px] md:flex md:flex-col"
            style={{
              height: "560px",
              backgroundColor: colors.chromeBg,
              boxShadow: `0 28px 70px rgba(0,0,0,0.14), 0 14px 32px rgba(0,0,0,0.1), 0 0 0 1px ${colors.border}`,
            }}
          >
            {/* Window Title Bar */}
            <div
              className="relative flex h-7 items-center justify-between border-b px-2"
              style={{ borderColor: colors.border }}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: colors.border }}
                />
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: colors.border }}
                />
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: colors.border }}
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs opacity-70">
                Cursor
              </div>
            </div>

            {/* IDE Content */}
            <div className="flex min-h-0 flex-1 overflow-hidden">
              {/* Sidebar */}
              <aside
                className="h-full w-[220px] overflow-hidden border-r"
                style={{
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                }}
              >
                <div className="py-1">
                  {/* In Progress */}
                  <div className="px-3 py-1">
                    <span
                      className="text-xs font-medium uppercase"
                      style={{ color: colors.textSec }}
                    >
                      In Progress <span className="opacity-50">3</span>
                    </span>
                  </div>
                  {inProgressItems.map((item) => (
                    <button
                      key={item}
                      className="flex w-full items-start gap-2 px-3 py-2 text-left text-sm transition-colors"
                    >
                      <SpinnerIcon />
                      <div className="min-w-0 flex-1">
                        <div
                          className="truncate"
                          style={{ color: colors.textSec }}
                        >
                          {item}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: colors.textSec }}
                        >
                          Generating
                        </div>
                      </div>
                    </button>
                  ))}

                  {/* Ready for Review */}
                  <div className="mt-2 px-3 py-1">
                    <span
                      className="text-xs font-medium uppercase"
                      style={{ color: colors.textSec }}
                    >
                      Ready for Review <span className="opacity-50">3</span>
                    </span>
                  </div>
                  {readyForReviewItems.map((item) => (
                    <button
                      key={item.title}
                      className="flex w-full items-start gap-2 px-3 py-2 text-left text-sm transition-colors"
                      style={{
                        backgroundColor: item.active
                          ? colors.cardHover
                          : "transparent",
                      }}
                    >
                      <CheckCircleIcon
                        className={item.active ? "" : "opacity-50"}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`truncate ${
                              item.active ? "" : "opacity-70"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className="shrink-0 text-xs"
                            style={{ color: colors.textSec }}
                          >
                            {item.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <span style={{ color: colors.ansiGreen }}>
                            +{item.added}
                          </span>
                          <span style={{ color: colors.ansiRed }}>
                            -{item.removed}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </aside>

              {/* Main Panel */}
              <div className="flex min-w-0 flex-1">
                {/* Chat Panel */}
                <div
                  className="flex w-[420px] flex-col border-r"
                  style={{
                    backgroundColor: colors.chromeBg,
                    borderColor: colors.border,
                  }}
                >
                  {/* Chat Header */}
                  <div className="flex h-8 items-center px-3 text-sm font-medium">
                    PyTorch MNIST Experiments
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1 overflow-auto px-3 pb-2">
                    {/* User Message */}
                    <div
                      className="mb-4 rounded-lg border px-3 py-2 text-sm"
                      style={{
                        backgroundColor: colors.editorBg,
                        borderColor: colors.border,
                      }}
                    >
                      Add mixed precision training, learning rate scheduling,
                      and proper validation. Also create an experiment config
                      system so I can easily run different hyperparameter
                      settings.
                    </div>

                    {/* Agent Response */}
                    <div className="space-y-2 text-sm">
                      <div
                        className="flex items-center gap-1"
                        style={{ color: colors.textSec }}
                      >
                        <span>Thought</span>{" "}
                        <span className="opacity-60">10s</span>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        style={{ color: colors.textSec }}
                      >
                        <span>Searched</span>{" "}
                        <span className="truncate opacity-60">
                          PyTorch mixed precision training best practices
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        style={{ color: colors.textSec }}
                      >
                        <span>Read</span>{" "}
                        <span className="truncate opacity-60">
                          notebooks/train_model.py (current implementation)
                        </span>
                      </div>
                      <div className="mt-2">
                        I&apos;ll enhance your MNIST trainer with a complete
                        experiment framework including mixed precision,
                        validation splitting, and proper configuration
                        management.
                      </div>
                      <div
                        className="mt-2 rounded border p-2"
                        style={{
                          backgroundColor: colors.editorBg,
                          borderColor: colors.border,
                        }}
                      >
                        <span className="font-medium">train_model.py</span>
                        <span
                          className="ml-2"
                          style={{ color: colors.ansiGreen }}
                        >
                          +156
                        </span>
                        <span
                          className="ml-1"
                          style={{ color: colors.ansiRed }}
                        >
                          -34
                        </span>
                      </div>
                      <div className="mt-2">
                        Done, configurable MNIST experiment framework with AMP
                        and reports.
                      </div>
                      <div>
                        <span
                          className="mr-1"
                          style={{ color: colors.textSec }}
                        >
                          •
                        </span>
                        <span className="font-semibold">Training</span>: AMP,
                        train/val split, cosine schedule
                      </div>
                      <div>
                        <span
                          className="mr-1"
                          style={{ color: colors.textSec }}
                        >
                          •
                        </span>
                        <span className="font-semibold">Experimentation</span>:
                        YAML config, saved history
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="p-3 pt-0">
                    <div
                      className="flex items-center gap-2 rounded-lg border px-2 py-1.5"
                      style={{ borderColor: colors.border }}
                    >
                      <span
                        className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
                        style={{
                          backgroundColor: colors.card,
                          color: colors.textSec,
                        }}
                      >
                        Agent
                      </span>
                      <span
                        className="flex-1 text-sm"
                        style={{ color: colors.textSec }}
                      >
                        Plan, search, build anything...
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: colors.textSec }}
                      >
                        GPT-5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Code Editor */}
                <div
                  className="flex min-w-0 flex-1 flex-col"
                  style={{ backgroundColor: colors.editorBg }}
                >
                  {/* Tabs */}
                  <div
                    className="flex h-8 items-center gap-0 border-b text-sm"
                    style={{
                      borderColor: colors.border,
                      backgroundColor: colors.chromeBg,
                    }}
                  >
                    <div
                      className="flex h-full items-center gap-2 border-r px-3"
                      style={{
                        backgroundColor: colors.editorBg,
                        borderColor: colors.border,
                      }}
                    >
                      <span>train_model.py</span>
                    </div>
                    <div
                      className="flex h-full items-center gap-2 border-r border-b px-3"
                      style={{
                        borderColor: colors.border,
                        color: colors.textSec,
                      }}
                    >
                      <span>run_experiment.py</span>
                    </div>
                    <div
                      className="flex h-full items-center gap-2 border-r border-b px-3"
                      style={{
                        borderColor: colors.border,
                        color: colors.textSec,
                      }}
                    >
                      <span>config.yaml</span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="flex-1 overflow-auto p-2 font-mono text-xs leading-relaxed">
                    <pre>
                      <code>
                        <span style={{ color: "#83D6C5" }}>import</span> torch
                        {"\n"}
                        <span style={{ color: "#83D6C5" }}>import</span>{" "}
                        torch.nn <span style={{ color: "#83D6C5" }}>as</span> nn
                        {"\n"}
                        <span
                          className="block"
                          style={{
                            backgroundColor: "rgba(239,68,68,0.1)",
                            color: colors.ansiRed,
                          }}
                        >
                          - <span style={{ color: "#83D6C5" }}>from</span>{" "}
                          torch.utils.data{" "}
                          <span style={{ color: "#83D6C5" }}>import</span>{" "}
                          DataLoader
                        </span>
                        <span
                          className="block"
                          style={{
                            backgroundColor: "rgba(34,197,94,0.1)",
                            color: colors.ansiGreen,
                          }}
                        >
                          + <span style={{ color: "#83D6C5" }}>from</span>{" "}
                          torch.utils.data{" "}
                          <span style={{ color: "#83D6C5" }}>import</span>{" "}
                          DataLoader, random_split
                        </span>
                        <span
                          className="block"
                          style={{
                            backgroundColor: "rgba(239,68,68,0.1)",
                            color: colors.ansiRed,
                          }}
                        >
                          - <span style={{ color: "#83D6C5" }}>from</span>{" "}
                          torchvision{" "}
                          <span style={{ color: "#83D6C5" }}>import</span>{" "}
                          datasets
                        </span>
                        <span
                          className="block"
                          style={{
                            backgroundColor: "rgba(34,197,94,0.1)",
                            color: colors.ansiGreen,
                          }}
                        >
                          + <span style={{ color: "#83D6C5" }}>from</span>{" "}
                          torchvision{" "}
                          <span style={{ color: "#83D6C5" }}>import</span>{" "}
                          datasets, transforms
                        </span>
                        <span
                          className="block"
                          style={{
                            backgroundColor: "rgba(34,197,94,0.1)",
                            color: colors.ansiGreen,
                          }}
                        >
                          + <span style={{ color: "#83D6C5" }}>from</span> tqdm{" "}
                          <span style={{ color: "#83D6C5" }}>import</span> tqdm
                        </span>
                        <span
                          className="block"
                          style={{
                            backgroundColor: "rgba(34,197,94,0.1)",
                            color: colors.ansiGreen,
                          }}
                        >
                          + <span style={{ color: "#83D6C5" }}>import</span>{" "}
                          yaml
                        </span>
                        <span
                          className="block"
                          style={{
                            backgroundColor: "rgba(34,197,94,0.1)",
                            color: colors.ansiGreen,
                          }}
                        >
                          + <span style={{ color: "#83D6C5" }}>from</span>{" "}
                          pathlib{" "}
                          <span style={{ color: "#83D6C5" }}>import</span> Path
                        </span>
                        {"\n"}
                        <span style={{ color: "#82D2CE" }}>def</span>{" "}
                        <span style={{ color: "#EFB080" }}>load_config</span>
                        (config_path=
                        <span style={{ color: "#E394DC" }}>
                          &quot;experiments/config.yaml&quot;
                        </span>
                        ):{"\n"}
                        {"  "}
                        <span style={{ color: "#83D6C5" }}>with</span>{" "}
                        <span style={{ color: "#EFB080" }}>open</span>
                        (config_path){" "}
                        <span style={{ color: "#83D6C5" }}>as</span> f:{"\n"}
                        {"    "}
                        <span style={{ color: "#83D6C5" }}>return</span>{" "}
                        yaml.safe_load(f)
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
