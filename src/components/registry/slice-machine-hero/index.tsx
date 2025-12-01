"use client";

import { motion } from "motion/react";
import { ChevronDown, Plus, X, Image as ImageIcon } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface SliceMachineHeroProps {
  announcementTag?: string;
  announcementText?: string;
  announcementLinkText?: string;
  announcementLinkHref?: string;
  logoText?: string;
  navItems?: NavItem[];
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  loginText?: string;
  demoText?: string;
  startBuildingText?: string;
  mode?: "light" | "dark";
}

const CUSTOMIZATION = {};

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Showcase", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
];

// Prismic Logo SVG
function PrismicLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.16 17.64L8.53 14.28L11.89 17.64L8.53 21L5.16 17.64Z"
        fill="currentColor"
      />
      <path
        d="M8.53 14.28L11.89 10.92L15.26 14.28L11.89 17.64L8.53 14.28Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M11.89 10.92L15.26 7.56L18.62 10.92L15.26 14.28L11.89 10.92Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M15.26 7.56L18.62 4.2L22 7.56L18.62 10.92L15.26 7.56Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

// Browser Window Component
function BrowserWindow({
  title,
  children,
  isDark = false,
  className,
}: {
  title: string;
  children: React.ReactNode;
  isDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl shadow-2xl ${
        isDark ? "bg-[#2A2A2A]" : "bg-white"
      } ${className}`}
    >
      {/* Browser Chrome */}
      <div
        className={`flex items-center gap-2 px-4 py-3 ${
          isDark ? "bg-[#393838]" : "bg-[#F5F5F5]"
        }`}
      >
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-2 flex-1">
          <span
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {title}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}

// Slice Editor (Left Browser) Component
function SliceEditorContent() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Slices</span>
          <span>/</span>
          <span className="text-white">Hero</span>
          <span>/</span>
          <span className="text-gray-500">Default</span>
        </div>
        <button className="rounded-md bg-[#AE76E4] px-3 py-1.5 text-xs font-medium text-white">
          Publish slice
        </button>
      </div>

      {/* Fields */}
      <div className="space-y-3">
        {/* Title Field */}
        <div className="rounded-lg border border-[#3D3D3D] bg-[#323232] p-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#AE76E4]">T</span>
            <span className="text-white">Title</span>
            <span className="text-gray-500">slice.primary.title</span>
          </div>
          <div className="mt-2 rounded bg-[#3D3D3D] p-2">
            <code className="text-xs text-[#AE76E4]">
              &lt;PrismicRichText field=&#123;slice.primary.title&#125; /&gt;
            </code>
          </div>
        </div>

        {/* Image Field */}
        <div className="rounded-lg border border-[#AE76E4] bg-[#3D3246] p-3">
          <div className="flex items-center gap-2 text-sm">
            <ImageIcon size={14} className="text-[#AE76E4]" />
            <span className="text-white">Image</span>
          </div>
          <p className="mt-1 text-xs text-gray-400">
            A responsive image field with constraints
          </p>
        </div>

        {/* Subtitle Field */}
        <div className="rounded-lg border border-[#3D3D3D] bg-[#323232] p-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#AE76E4]">T</span>
            <span className="text-white">Subtitle</span>
            <span className="text-gray-500">slice.primary.subtitle</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 rounded bg-[#3D3D3D] p-2">
              <code className="text-xs text-[#AE76E4]">
                &lt;PrismicRichText field=&#123;slice.primary.subtitle&#125;
                /&gt;
              </code>
            </div>
            <span className="rounded bg-[#8ECCEC] px-2 py-1 text-xs font-medium text-[#1A1A1A]">
              Developer
            </span>
          </div>
        </div>

        {/* Description Field */}
        <div className="rounded-lg border border-[#3D3D3D] bg-[#323232] p-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#AE76E4]">T</span>
            <span className="text-white">Description</span>
            <span className="text-gray-500">slice.primary.description</span>
          </div>
          <div className="mt-2 rounded bg-[#3D3D3D] p-2">
            <code className="text-xs text-[#AE76E4]">
              &lt;PrismicRichText field=&#123;slice.primary.description&#125;
              /&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

// Page Builder (Right Browser) Component
function PageBuilderContent() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">Homepage</span>
        <button className="rounded-md bg-[#5D5E5A] px-3 py-1.5 text-xs font-medium text-white">
          Publish
        </button>
      </div>

      {/* Content Preview Modal */}
      <div className="relative rounded-lg border border-gray-200 bg-white p-3">
        <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
          <X size={14} />
        </button>

        {/* Page Preview Cards */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {/* Hero Card */}
          <div className="flex-shrink-0 rounded border border-gray-200 p-2">
            <div className="h-12 w-16 rounded bg-gradient-to-br from-purple-100 to-blue-100" />
            <p className="mt-1 text-[10px] text-gray-500">Hero</p>
          </div>

          {/* Feature Card */}
          <div className="flex-shrink-0 rounded border border-blue-400 bg-blue-50 p-2">
            <div className="h-12 w-16 rounded bg-gradient-to-br from-blue-100 to-cyan-100" />
            <p className="mt-1 text-[10px] text-blue-600">Feature Focus</p>
            <span className="mt-0.5 inline-block rounded bg-[#8ECCEC] px-1 py-0.5 text-[8px] font-medium text-[#1A1A1A]">
              Marketer
            </span>
          </div>

          {/* New Card */}
          <div className="flex-shrink-0 rounded border border-green-400 bg-green-50 p-2">
            <div className="h-12 w-16 rounded bg-gradient-to-br from-green-100 to-emerald-100" />
            <p className="mt-1 text-[10px] text-green-600">New</p>
          </div>

          {/* Global CTA Card */}
          <div className="flex-shrink-0 rounded border border-gray-200 p-2">
            <div className="h-12 w-16 rounded bg-gradient-to-br from-gray-100 to-gray-200" />
            <p className="mt-1 text-[10px] text-gray-500">Global CTA</p>
          </div>
        </div>

        {/* Add Button */}
        <div className="mt-2 flex justify-center">
          <button className="flex items-center justify-center rounded-full border border-gray-300 p-1 text-gray-400 hover:bg-gray-50">
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Slice List */}
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
          <span className="text-sm text-gray-700">Feature Focus Slice</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
          <span className="text-sm text-gray-700">Global CTA Slice</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3">
          <span className="text-sm text-gray-700">Feature Focus Slice</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function SliceMachineHero({
  announcementTag = "New Website",
  announcementText = "We spent 9 months refreshing our website, learn from our experience",
  announcementLinkText = "Read the blog",
  announcementLinkHref = "#",
  logoText = "prismic",
  navItems = defaultNavItems,
  eyebrow = "Slice Machine",
  headline = "It's how you build the builder",
  description = "Slice Machine transforms the way you code reusable components and lets you deliver them directly to marketers in a custom page builder.",
  ctaText = "Start building",
  ctaHref = "#",
  loginText = "Login",
  demoText = "Get a demo",
  startBuildingText = "Start Building",
  mode = "light",
}: SliceMachineHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white">
      {/* Announcement Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#2A2A2A] px-4 py-3"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-sm">
          <span className="rounded bg-[#3D3D3D] px-2.5 py-1 text-xs font-medium text-white">
            {announcementTag}
          </span>
          <span className="text-gray-300">{announcementText}</span>
          <a
            href={announcementLinkHref}
            className="font-medium text-white underline underline-offset-2 hover:text-gray-300"
          >
            {announcementLinkText}
          </a>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PrismicLogo className="text-[#1A1A1A]" />
          <span className="text-lg font-medium text-[#1A1A1A]">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A]"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown size={14} className="text-[#888]" />
              )}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] sm:block"
          >
            {loginText}
          </a>
          <a
            href="#"
            className="hidden text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] sm:block"
          >
            {demoText}
          </a>
          <a
            href="#"
            className="rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F5]"
          >
            {startBuildingText}
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-4xl px-6 pt-12 text-center sm:pt-16 lg:pt-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base font-medium text-[#AE76E4]"
        >
          {eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B6B6B] sm:text-lg"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8"
        >
          <a
            href={ctaHref}
            className="inline-block rounded-full border border-[#E5E5E5] bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] shadow-sm transition-all hover:shadow-md"
          >
            {ctaText}
          </a>
        </motion.div>
      </div>

      {/* Browser Mockups */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative mx-auto mt-12 max-w-6xl px-6 pb-20 sm:mt-16"
      >
        <div className="relative flex flex-col gap-4 md:flex-row md:gap-0">
          {/* Left Browser - Slice Machine */}
          <div className="relative z-10 w-full md:w-[55%]">
            <BrowserWindow
              title="Slice Machine - localhost"
              isDark={true}
              className="border border-[#3D3D3D]"
            >
              <SliceEditorContent />
            </BrowserWindow>
          </div>

          {/* Right Browser - Page Builder */}
          <div className="relative w-full md:-ml-8 md:mt-8 md:w-[55%]">
            <BrowserWindow
              title="Page Builder - company.prismic.io"
              isDark={false}
              className="border border-gray-200"
            >
              <PageBuilderContent />
            </BrowserWindow>
          </div>
        </div>
      </motion.div>

      {/* Bottom dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[#151515]" style={{ zIndex: -1 }} />
    </section>
  );
}
