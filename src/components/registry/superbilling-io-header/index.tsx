"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "rgba(255, 255, 255, 0.95)",
    border: "#E5E7EB",
  },
  dark: {
    background: "rgba(17, 17, 17, 0.95)",
    border: "rgba(255, 255, 255, 0.1)",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/registry/superbilling-io-header/logo.svg",
    alt: "SuperBilling logo",
    width: 125,
    height: 21,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SuperbillingIoHeaderProps {
  mode?: "light" | "dark";
}

export default function SuperbillingIoHeader({
  mode = "dark",
}: SuperbillingIoHeaderProps) {
  const colors = COLORS[mode];

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <header
        className="w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/70"
        style={{
          backgroundColor: colors.background,
          borderColor: colors.border,
        }}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/">
              <img
                alt={IMAGES.logo.alt}
                loading="lazy"
                width={IMAGES.logo.width}
                height={IMAGES.logo.height}
                src={IMAGES.logo.path}
                style={{ color: "transparent" }}
              />
            </a>
          </div>

          {/* Navigation - empty as per original */}
          <nav className="hidden items-center gap-8 md:flex" />

          {/* Actions - empty as per original */}
          <div className="flex items-center gap-4" />
        </div>
      </header>
    </div>
  );
}
