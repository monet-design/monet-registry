"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    buttonBg: "#FAFAFA",
    buttonText: "#141414",
  },
  dark: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    buttonBg: "#FAFAFA",
    buttonText: "#141414",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/registry/conductor-build-header-0/logo.png",
    alt: "Conductor Logo",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

interface ConductorBuildHeader0Props {
  mode?: "light" | "dark";
}

export default function ConductorBuildHeader0({
  mode = "dark",
}: ConductorBuildHeader0Props) {
  const colors = COLORS[mode];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={IMAGES.logo.path}
            alt={IMAGES.logo.alt}
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/docs"
            className="font-mono text-sm transition-colors hover:opacity-80"
            style={{ color: colors.text }}
          >
            Docs
          </Link>
          <Link
            href="/join"
            className="font-mono text-sm transition-colors hover:opacity-80"
            style={{ color: colors.text }}
          >
            Join Us
          </Link>
          <Link
            href="/download"
            className="flex items-center gap-2 rounded-md px-4 py-2 font-mono text-sm transition-colors hover:opacity-90"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
            }}
          >
            Download
            <Download className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
