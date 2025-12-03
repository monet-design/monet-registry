"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#1a1a1a",
    textSecondary: "#6b7280",
    border: "#e5e7eb",
    cardBg: "#f9fafb",
    pillBg: "#f3f4f6",
    pillBorder: "#e5e7eb",
  },
  dark: {
    background: "#0a0a0a",
    text: "#e5e5e5",
    textSecondary: "#737373",
    border: "#262626",
    cardBg: "#171717",
    pillBg: "#262626",
    pillBorder: "#404040",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { Monitor, Sun, Moon, Globe, ChevronDown, Check } from "lucide-react";

// Types
interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

type ThemeMode = "system" | "light" | "dark";

interface Language {
  code: string;
  label: string;
}

interface CursorFooterProps {
  mode?: "light" | "dark";
  columns?: FooterColumn[];
  companyName?: string;
  companyUrl?: string;
  year?: number;
  certificationText?: string;
  certificationUrl?: string;
  languages?: Language[];
  defaultLanguage?: string;
  defaultTheme?: ThemeMode;
  onThemeChange?: (theme: ThemeMode) => void;
  onLanguageChange?: (language: string) => void;
}

// Default columns
const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Bugbot", href: "/bugbot" },
      { label: "CLI", href: "/cli" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Download", href: "/download" },
      { label: "Web Agents", href: "/agents", external: true },
      { label: "Changelog", href: "/changelog" },
      { label: "Docs", href: "/docs" },
      { label: "Forum", href: "https://forum.cursor.com/", external: true },
      { label: "Status", href: "https://status.cursor.com/", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Community", href: "/community" },
      { label: "Students", href: "/students" },
      { label: "Brand", href: "/brand" },
      { label: "Anysphere", href: "https://anysphere.inc/", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Data Use", href: "/data-use" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "X", href: "https://x.com/cursor_ai", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/cursorai",
        external: true,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@cursor_ai",
        external: true,
      },
    ],
  },
];

const defaultLanguages: Language[] = [
  { code: "en", label: "English" },
  { code: "zh-CN", label: "简体中文" },
  { code: "ja", label: "日本語" },
  { code: "zh-TW", label: "繁體中文" },
];

// FooterLink Component
function FooterLinkItem({
  link,
  mode,
}: {
  link: FooterLink;
  mode: "light" | "dark";
}) {
  const colors = COLORS[mode];

  return (
    <li>
      <a
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        className="inline-block py-1 transition-colors duration-200"
        style={{
          color: colors.text,
          fontSize: "14px",
          lineHeight: "1.5",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {link.label}
        {link.external && (
          <span className="ml-0.5 text-xs opacity-60">&nbsp;↗</span>
        )}
      </a>
    </li>
  );
}

// Theme Toggle Component
function ThemeToggle({
  mode,
  currentTheme,
  onThemeChange,
}: {
  mode: "light" | "dark";
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}) {
  const colors = COLORS[mode];
  const themes: { value: ThemeMode; icon: React.ReactNode; label: string }[] = [
    { value: "system", icon: <Monitor size={14} />, label: "System theme" },
    { value: "light", icon: <Sun size={14} />, label: "Light theme" },
    { value: "dark", icon: <Moon size={14} />, label: "Dark theme" },
  ];

  const activeIndex = themes.findIndex((t) => t.value === currentTheme);

  return (
    <div
      className="relative flex rounded-full p-0.5"
      style={{ backgroundColor: colors.pillBg }}
    >
      <div
        className="absolute rounded-full transition-all duration-200"
        style={{
          backgroundColor: mode === "dark" ? colors.border : colors.background,
          border: `1px solid ${colors.border}`,
          left: `${activeIndex * 36 + 2}px`,
          width: "36px",
          top: "2px",
          bottom: "2px",
        }}
      />
      {themes.map((theme) => (
        <button
          key={theme.value}
          onClick={() => onThemeChange(theme.value)}
          aria-label={theme.label}
          className="relative z-10 flex h-8 w-9 cursor-pointer items-center justify-center rounded-full transition-colors"
          style={{
            color:
              currentTheme === theme.value
                ? colors.text
                : colors.textSecondary,
          }}
        >
          {theme.icon}
        </button>
      ))}
    </div>
  );
}

// Language Selector Component
function LanguageSelector({
  mode,
  languages,
  currentLanguage,
  onLanguageChange,
}: {
  mode: "light" | "dark";
  languages: Language[];
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const colors = COLORS[mode];
  const currentLang =
    languages.find((l) => l.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors"
        style={{
          backgroundColor: colors.pillBg,
          border: `1px solid ${colors.border}`,
          color: colors.text,
        }}
      >
        <Globe size={14} />
        {currentLang.label}
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div
            className="absolute bottom-full right-0 z-50 mb-2 min-w-[10rem] rounded-lg py-2 shadow-lg"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
            }}
          >
            <ul>
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsOpen(false);
                    }}
                    className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm transition-colors"
                    style={{ color: colors.text }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        mode === "dark"
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {lang.label}
                    {currentLanguage === lang.code && (
                      <Check size={14} style={{ color: colors.text }} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

// Main Component
export default function CursorFooter({
  mode = "dark",
  columns = defaultColumns,
  companyName = "Anysphere, Inc.",
  companyUrl = "https://anysphere.inc",
  year = new Date().getFullYear(),
  certificationText = "SOC 2 Certified",
  certificationUrl = "/security",
  languages = defaultLanguages,
  defaultLanguage = "en",
  defaultTheme = "system",
  onThemeChange,
  onLanguageChange,
}: CursorFooterProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(defaultTheme);
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  const colors = COLORS[mode];

  const handleThemeChange = (theme: ThemeMode) => {
    setCurrentTheme(theme);
    onThemeChange?.(theme);
  };

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    onLanguageChange?.(language);
  };

  return (
    <footer
      className="relative px-6 pb-6 pt-12 md:px-8 md:pb-8"
      style={{ backgroundColor: colors.background }}
    >
      {/* Navigation Links */}
      <div className="container mx-auto mb-12 max-w-6xl">
        <nav>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
            {columns.map((column) => (
              <div key={column.title}>
                <h3
                  className="pb-3 text-sm font-normal"
                  style={{ color: colors.textSecondary }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-0.5">
                  {column.links.map((link) => (
                    <FooterLinkItem key={link.label} link={link} mode={mode} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        {/* Copyright & Certification */}
        <div
          className="flex flex-wrap items-center gap-4"
          style={{ color: colors.textSecondary }}
        >
          <small className="text-sm">
            © {year}{" "}
            <a
              href={companyUrl}
              className="transition-colors hover:opacity-80"
              style={{ color: colors.textSecondary }}
            >
              {companyName}
            </a>
          </small>
          <small className="text-sm">
            <a
              href={certificationUrl}
              className="inline-flex items-center gap-1 transition-colors hover:opacity-80"
              style={{ color: colors.textSecondary }}
            >
              <span>🛡</span>
              {certificationText}
            </a>
          </small>
        </div>

        {/* Theme & Language Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle
            mode={mode}
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
          />
          <LanguageSelector
            mode={mode}
            languages={languages}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </div>
    </footer>
  );
}
