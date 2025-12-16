"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    accent: "#E85C4A",
    accentHover: "#D14836",
    background: "#1E3A3A",
    cardBg: "#F5F0E8",
    cardBgGreen: "#C4D9B6",
  },
  dark: {
    accent: "#E85C4A",
    accentHover: "#D14836",
    background: "#1E3A3A",
    cardBg: "#F5F0E8",
    cardBgGreen: "#C4D9B6",
  },
} as const;

const IMAGES = {
  portfolio: {
    path: "/scraped/antler-co-2025-12-15/images/image-3.avif",
    alt: "Female investor portrait",
    prompt: "Professional portrait of a young female investor in business casual attire, soft natural lighting, modern office background",
  },
  aiEra: {
    path: "/scraped/antler-co-2025-12-15/images/image-5.avif",
    alt: "Founder pitching at Antler event",
    prompt: "Startup founder presenting on stage with Antler branding, professional event setting, warm lighting",
  },
  investors: {
    path: "/scraped/antler-co-2025-12-15/images/image-7.avif",
    alt: "Team of investors in discussion",
    prompt: "Diverse group of investors having a discussion in a modern office, professional setting",
  },
} as const;

const LOCATIONS_ROW1 = ["New York", "Amsterdam", "Berlin", "Seoul", "Oslo", "Sydney"];
const LOCATIONS_ROW2 = ["London", "Tokyo", "Jakarta", "Austin", "Lagos", "Sao Paulo"];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface AntlerCoHero0Props {
  mode?: "light" | "dark";
}

export default function AntlerCoHero0({
  mode = "light",
}: AntlerCoHero0Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight">
              FURTHER
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic tracking-tight opacity-50"
              style={{ color: colors.accent }}
            >
              —FASTER
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-8">
            Antler founders are solving the world&apos;s biggest challenges. Build fast.
            Access capital. And scale through our extraordinary global network of
            builders, partners and investors.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-colors"
              style={{ backgroundColor: colors.accent }}
              whileHover={{ backgroundColor: colors.accentHover }}
            >
              Apply
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <a
              href="#newsletter"
              className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium border border-white/30 hover:bg-white/10 transition-colors"
            >
              Subscribe to our newsletter
            </a>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Portfolio Card */}
          <motion.a
            href="#portfolio"
            className="relative group col-span-1 lg:col-span-1 rounded-2xl overflow-hidden"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex h-full">
              <div className="w-1/2">
                <img
                  src={IMAGES.portfolio.path}
                  alt={IMAGES.portfolio.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Browse our
                    <br />
                    <span className="italic">—portfolio</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Learn more about Antler&apos;s early-stage investments around the world.
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* AI Era Card - Large */}
          <motion.a
            href="#ai"
            className="relative group col-span-1 md:col-span-1 lg:col-span-2 row-span-2 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={IMAGES.aiEra.path}
              alt={IMAGES.aiEra.alt}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="relative h-full min-h-[300px] md:min-h-[400px] flex flex-col justify-end p-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Build for the AI era
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  If you&apos;re looking to build the next category-defining company,
                  there&apos;s no better place to pursue your ambition.
                </p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Locations Card */}
          <motion.a
            href="#locations"
            className="relative group col-span-1 rounded-2xl overflow-hidden p-4"
            style={{ backgroundColor: colors.cardBgGreen }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 rounded-full border border-gray-600/30 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="mb-4 overflow-hidden">
              <div className="flex gap-2 mb-2 animate-marquee">
                {[...LOCATIONS_ROW1, ...LOCATIONS_ROW1].map((location, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/50 text-sm text-gray-800 whitespace-nowrap"
                  >
                    <span className="w-4 h-4 rounded bg-red-500/80" />
                    {location}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 animate-marquee-reverse">
                {[...LOCATIONS_ROW2, ...LOCATIONS_ROW2].map((location, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/50 text-sm text-gray-800 whitespace-nowrap"
                  >
                    <span className="w-4 h-4 rounded bg-red-500/80" />
                    {location}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mt-auto">
              Find your
              <br />
              <span className="italic">Location</span>
            </h3>
          </motion.a>

          {/* For Investors Card */}
          <motion.a
            href="#investors"
            className="relative group col-span-1 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={IMAGES.investors.path}
              alt={IMAGES.investors.alt}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full min-h-[150px] flex flex-col justify-end p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">
                  For investors
                </h3>
                <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-gray-900 transition-colors" />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
