"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Types
interface ArkiveHeroProps {
  logoText?: string;
  badgeText?: string;
  headlineWhite?: string;
  headlineAccent?: string;
  subheadline?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  headerCtaText?: string;
  onEmailSubmit?: (email: string) => void;
}

// Logo Icon Component
function ArkiveLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fill="#4ADE80"
        stroke="#4ADE80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="#4ADE80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="#4ADE80"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Header Component
function Header({
  logoText,
  headerCtaText,
}: {
  logoText: string;
  headerCtaText: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-5"
    >
      <div className="flex items-center gap-2">
        <ArkiveLogo className="h-6 w-6" />
        <span className="text-lg font-medium text-white">{logoText}</span>
      </div>
      <button className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5">
        {headerCtaText}
      </button>
    </motion.div>
  );
}

// Badge Component
function Badge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
    >
      <CheckCircle2 className="h-4 w-4 text-[#4ADE80]" />
      <span className="text-sm text-white/80">{text}</span>
    </motion.div>
  );
}

// Email Form Component
function EmailForm({
  placeholder,
  ctaText,
  onSubmit,
}: {
  placeholder: string;
  ctaText: string;
  onSubmit: (email: string) => void;
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-lg border border-white/10 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]/50"
      />
      <button
        type="submit"
        className="rounded-lg bg-[#4ADE80] px-6 py-3 text-sm font-semibold text-[#023632] transition-colors hover:bg-[#22C55E]"
      >
        {ctaText}
      </button>
    </motion.form>
  );
}

// App Preview Component
function AppPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="relative mt-12 w-full max-w-4xl"
    >
      {/* Glow effect behind the preview */}
      <div className="absolute inset-0 -z-10 blur-3xl">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_rgba(74,222,128,0.15),_transparent_70%)]" />
      </div>

      {/* App preview container */}
      <div className="overflow-hidden rounded-t-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
        {/* Browser-like top bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <div className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>
        </div>

        {/* App content area */}
        <div className="flex min-h-[300px] sm:min-h-[400px]">
          {/* Sidebar */}
          <div className="hidden w-48 border-r border-white/10 bg-[#012825] p-4 sm:block">
            <div className="space-y-3">
              <DocumentCard name="James ID" isActive />
              <DocumentCard name="Andreas ID" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-100 to-slate-200 p-6 sm:flex-row sm:p-8">
            {/* Upload front card */}
            <UploadCard
              title="Upload front"
              subtitle="or drag and drop"
              fileTypes="PDF or Doc"
            />
            {/* Upload back card */}
            <UploadCard
              title="Upload back"
              subtitle="or drag and drop"
              fileTypes="PDF or Doc"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Document Card in Sidebar
function DocumentCard({
  name,
  isActive = false,
}: {
  name: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg p-2 transition-colors ${
        isActive ? "bg-[#4ADE80]/20" : "hover:bg-white/5"
      }`}
    >
      <div
        className={`h-8 w-8 rounded-md ${isActive ? "bg-[#4ADE80]" : "bg-white/20"}`}
      />
      <span
        className={`text-xs font-medium ${isActive ? "text-[#4ADE80]" : "text-white/60"}`}
      >
        {name}
      </span>
    </div>
  );
}

// Upload Card Component
function UploadCard({
  title,
  subtitle,
  fileTypes,
}: {
  title: string;
  subtitle: string;
  fileTypes: string;
}) {
  return (
    <div className="flex h-48 w-full max-w-xs flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white p-6 transition-colors hover:border-[#4ADE80]/50">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
        <svg
          className="h-6 w-6 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      </div>
      <p className="text-center text-sm font-medium text-slate-700">{title}</p>
      <p className="text-center text-xs text-slate-500">{subtitle}</p>
      <p className="mt-2 text-center text-xs text-slate-400">{fileTypes}</p>
    </div>
  );
}

// Main Component
export default function ArkiveHero({
  logoText = "arkive",
  badgeText = "Built on research, shaped by real users.",
  headlineWhite = "When documents matter most,",
  headlineAccent = "scan it",
  subheadline = "Your important documents, instantly accessible when you need them.\nJoin early to get exclusive access before launch.",
  emailPlaceholder = "Enter your email...",
  ctaText = "Get early access",
  headerCtaText = "Get early access",
  onEmailSubmit = () => {},
}: ArkiveHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#023632]">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#034d3a]/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#034d3a]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header logoText={logoText} headerCtaText={headerCtaText} />

        {/* Hero Content */}
        <div className="flex flex-col items-center pb-8 pt-12 text-center sm:pt-16">
          {/* Badge */}
          <Badge text={badgeText} />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {headlineWhite}
            <br />
            <span className="text-[#4ADE80]">{headlineAccent}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-xl whitespace-pre-line text-base text-white/60 sm:text-lg"
          >
            {subheadline}
          </motion.p>

          {/* Email Form */}
          <div className="mt-8 w-full max-w-md">
            <EmailForm
              placeholder={emailPlaceholder}
              ctaText={ctaText}
              onSubmit={onEmailSubmit}
            />
          </div>

          {/* App Preview */}
          <AppPreview />
        </div>
      </div>
    </section>
  );
}
