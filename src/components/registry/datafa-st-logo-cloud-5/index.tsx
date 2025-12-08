"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";

interface Logo {
  name: string;
  category: "code" | "no-code";
  icon?: string;
}

interface DatafaStLogoCloud5Props {
  mode?: "light" | "dark";
  headline?: string;
  logos?: Logo[];
  ctaText?: string;
  ctaHref?: string;
  trialText?: string;
}

const defaultLogos: Logo[] = [
  { name: "Next.js", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-nextjs.3a58dc60.png&w=256&q=75" },
  { name: "FastAPI", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-fastapi.adfa24d0.png&w=256&q=75" },
  { name: "Caddy", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-caddy.8d202f7e.png&w=256&q=75" },
  { name: "express", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-expressjs.6e4a13ee.png&w=256&q=75" },
  { name: "Vue.js", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-vuejs.010f3bde.png&w=256&q=75" },
  { name: "React Router", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-reactrouter.b724a1f1.png&w=256&q=75" },
  { name: "php", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-php.858345a0.png&w=256&q=75" },
  { name: "NGINX", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-nginx.ede5ab41.png&w=256&q=75" },
  { name: "django", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-django.1260bac6.png&w=256&q=75" },
  { name: "Flask", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-flask.6e846093.png&w=256&q=75" },
  { name: "Laravel", category: "code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-laravel.dd822c6e.png&w=256&q=75" },
  { name: "Google Tag Manager", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-gtm.d7fc830d.png&w=256&q=75" },
  { name: "Framer", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-framer.06f8bb07.png&w=256&q=75" },
  { name: "Wix", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-wix.34f61b06.png&w=256&q=75" },
  { name: "Webflow", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-webflow.baf6b80a.png&w=256&q=75" },
  { name: "bubble", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-bubble.c8b7a238.png&w=256&q=75" },
  { name: "Squarespace", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-squarespace.0cda12b3.png&w=256&q=75" },
  { name: "WordPress", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-wp.e47770d1.png&w=256&q=75" },
  { name: "podia", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-podia.b5977fc1.png&w=256&q=75" },
  { name: "Lovable", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-lovable.618fffcb.png&w=256&q=75" },
  { name: "ghost", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-ghostcms.36b39cb0.png&w=256&q=75" },
  { name: "kajabi", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-kajabi.0cbc47ac.png&w=256&q=75" },
  { name: "shopify", category: "no-code", icon: "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-shopify.a664161d.png&w=256&q=75" },
];

export default function DatafaStLogoCloud5({
  mode = "dark",
  headline = "Works with your favorite tools",
  logos = defaultLogos,
  ctaText = "Add my website",
  ctaHref = "#",
  trialText = "14-day free trial. No card required",
}: DatafaStLogoCloud5Props) {
  const colors = COLORS[mode];
  const codeLogos = logos.filter((l) => l.category === "code");
  const noCodeLogos = logos.filter((l) => l.category === "no-code");

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
          style={{ color: colors.textPrimary }}
        >
          {headline}
        </motion.h2>

        {/* Logo Grids */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Code Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 text-center text-sm font-medium tracking-wider text-gray-500">
              CODE
            </div>
            <div
              className="grid grid-cols-3 gap-3 rounded-xl border border-gray-700/50 p-4"
              style={{ backgroundColor: colors.cardBg }}
            >
              {codeLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex h-14 items-center justify-center gap-2 rounded-lg bg-gray-100 px-2 text-center text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  {logo.icon && (
                    <img src={logo.icon} alt={logo.name} className="h-6 w-6 object-contain" />
                  )}
                  <span className="hidden sm:inline">{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* No-Code Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-4 text-center text-sm font-medium tracking-wider text-gray-500">
              NO-CODE
            </div>
            <div
              className="grid grid-cols-3 gap-3 rounded-xl border border-gray-700/50 p-4"
              style={{ backgroundColor: colors.cardBg }}
            >
              {noCodeLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex h-14 items-center justify-center gap-2 rounded-lg bg-gray-100 px-2 text-center text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  {logo.icon && (
                    <img src={logo.icon} alt={logo.name} className="h-6 w-6 object-contain" />
                  )}
                  <span className="hidden sm:inline">{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center overflow-hidden rounded-lg border border-gray-700">
            <div className="flex items-center bg-gray-800 px-3 py-3">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="website.com"
              className="w-48 bg-gray-800 px-3 py-3 text-white placeholder-gray-500 outline-none"
            />
          </div>
          <a
            href={ctaHref}
            className="flex w-64 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {trialText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
