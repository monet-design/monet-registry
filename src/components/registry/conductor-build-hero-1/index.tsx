"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    buttonPrimaryBg: "#FAFAFA",
    buttonPrimaryText: "#141414",
    buttonSecondaryBg: "transparent",
    buttonSecondaryText: "#FAFAFA",
    buttonSecondaryBorder: "#3F3F46",
  },
  dark: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    buttonPrimaryBg: "#FAFAFA",
    buttonPrimaryText: "#141414",
    buttonSecondaryBg: "transparent",
    buttonSecondaryText: "#FAFAFA",
    buttonSecondaryBorder: "#3F3F46",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/registry/conductor-build-hero-1/logo.png",
    alt: "Conductor Logo",
  },
  appScreenshot: {
    path: "/registry/conductor-build-hero-1/app-screenshot.png",
    alt: "Conductor App Screenshot - IDE interface showing multiple Claude Code agents working in parallel",
  },
} as const;

const CONTENT = {
  badge: "See what's new in 0.25.11",
  title: "CONDUCTOR",
  subtitle: "Run a team of coding agents on your Mac.",
  description:
    "Create parallel Codex + Claude Code agents in isolated workspaces. See at a glance what they're working on, then review and merge their changes.",
  primaryCta: "Download Conductor",
  secondaryCta: "Learn how it works",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

interface ConductorBuildHero1Props {
  mode?: "light" | "dark";
}

export default function ConductorBuildHero1({
  mode = "dark",
}: ConductorBuildHero1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full pt-24 pb-16"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Version Badge */}
        <div className="mb-8 flex justify-center">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 font-mono text-sm transition-colors hover:opacity-80"
            style={{ color: colors.textMuted }}
          >
            {CONTENT.badge}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ASCII Art Title */}
        <div className="mb-8 flex justify-center">
          <pre
            className="font-mono text-xs leading-tight sm:text-sm md:text-base"
            style={{ color: colors.text }}
          >
            {`  ██████╗ ██████╗ ███╗   ██╗██████╗ ██╗   ██╗ ██████╗████████╗ ██████╗ ██████╗
 ██╔════╝██╔═══██╗████╗  ██║██╔══██╗██║   ██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
 ██║     ██║   ██║██╔██╗ ██║██║  ██║██║   ██║██║        ██║   ██║   ██║██████╔╝
 ██║     ██║   ██║██║╚██╗██║██║  ██║██║   ██║██║        ██║   ██║   ██║██╔══██╗
 ╚██████╗╚██████╔╝██║ ╚████║██████╔╝╚██████╔╝╚██████╗   ██║   ╚██████╔╝██║  ██║
  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═════╝  ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝`}
          </pre>
        </div>

        {/* Subtitle */}
        <h1
          className="mb-4 text-center font-mono text-2xl font-medium md:text-3xl"
          style={{ color: colors.text }}
        >
          {CONTENT.subtitle}
        </h1>

        {/* Description */}
        <p
          className="mx-auto mb-8 max-w-2xl text-center font-mono text-sm leading-relaxed md:text-base"
          style={{ color: colors.textMuted }}
        >
          {CONTENT.description}
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/download"
            className="flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm transition-colors hover:opacity-90"
            style={{
              backgroundColor: colors.buttonPrimaryBg,
              color: colors.buttonPrimaryText,
            }}
          >
            {CONTENT.primaryCta}
            <Download className="h-4 w-4" />
          </Link>
          <Link
            href="/how-it-works"
            className="flex items-center gap-2 rounded-md border px-6 py-3 font-mono text-sm transition-colors hover:opacity-80"
            style={{
              backgroundColor: colors.buttonSecondaryBg,
              color: colors.buttonSecondaryText,
              borderColor: colors.buttonSecondaryBorder,
            }}
          >
            {CONTENT.secondaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* App Screenshot */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-zinc-800 shadow-2xl">
          <Image
            src={IMAGES.appScreenshot.path}
            alt={IMAGES.appScreenshot.alt}
            width={1440}
            height={990}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
