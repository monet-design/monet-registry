"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F3F2E9",
    accent: "#282625",
    accentHover: "#3a3835",
  },
  dark: {
    background: "#1A1D1A",
    accent: "#282625",
    accentHover: "#3a3835",
  },
} as const;

const IMAGES = {
  gallery: [
    {
      path: "/registry/moxion-industries-hero/gallery-1.jpg",
      alt: "MP-75 at construction site",
      prompt: `Moxion MP-75 mobile power unit at active construction site.
Style: Documentary industrial photography, natural daylight
Layout: Medium shot showing equipment in work environment context
Composition: Mobile battery unit with construction activity in background
Color palette: Industrial equipment grays, construction site earth tones, safety yellow accents
Mood: Reliable, industrial, in-use, professional
Technical: High resolution, natural lighting, documentary style`,
    },
    {
      path: "/registry/moxion-industries-hero/gallery-2.jpg",
      alt: "MP-75 being serviced",
      prompt: `Technician servicing Moxion MP-75 power unit.
Style: Professional industrial photography, clear documentation
Layout: Service action shot showing maintenance accessibility
Composition: Technician working on open panel, equipment detail visible
Color palette: Professional work environment, equipment grays, safety gear
Mood: Serviceable, well-engineered, accessible maintenance
Technical: Sharp focus on service action, professional lighting`,
    },
    {
      path: "/registry/moxion-industries-hero/gallery-3.jpg",
      alt: "MP-75 in desert environment",
      prompt: `Moxion MP-75 deployed in desert landscape.
Style: Environmental portrait photography, golden hour lighting
Layout: Equipment prominent against dramatic desert backdrop
Composition: Unit placed in arid environment showing versatility
Color palette: Desert browns and oranges, equipment grays, blue sky
Mood: Rugged, versatile, all-environment capable
Technical: Wide landscape shot, dramatic natural lighting`,
    },
    {
      path: "/registry/moxion-industries-hero/gallery-4.jpg",
      alt: "MP-75 at production site",
      prompt: `Moxion MP-75 powering industrial production site.
Style: Industrial action photography
Layout: Equipment in active production environment
Composition: Power unit with industrial operations visible
Color palette: Industrial equipment tones, work site environment
Mood: Productive, reliable power delivery
Technical: Clear equipment visibility, contextual environment`,
    },
    {
      path: "/registry/moxion-industries-hero/gallery-5.jpg",
      alt: "MP-75 fleet storage",
      prompt: `Multiple Moxion MP-75 units in fleet storage yard.
Style: Clean corporate photography, organized composition
Layout: Multiple units arranged showing scale of operations
Composition: Fleet of equipment demonstrating deployment capability
Color palette: Uniform equipment appearance, organized storage environment
Mood: Professional fleet management, scalability
Technical: Wide shot showing multiple units, clear branding visibility`,
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface MoxionIndustriesHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  navItems?: NavItem[];
  galleryImages?: GalleryImage[];
  contactText?: string;
  onContactClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Technology", href: "#" },
  { label: "Industries", href: "#", isActive: true },
  { label: "Mission", href: "#" },
  { label: "Careers", href: "#" },
];

const defaultGalleryImages: GalleryImage[] = IMAGES.gallery.map((img) => ({
  src: img.path,
  alt: img.alt,
}));

export default function MoxionIndustriesHero({
  mode = "light",
  logoText = "MOXION",
  headline = "The MP-75\nin The Wild",
  navItems = defaultNavItems,
  galleryImages = defaultGalleryImages,
  contactText = "Contact",
  onContactClick,
}: MoxionIndustriesHeroProps) {
  const colors = COLORS[mode];
  const headlineLines = headline.split("\n");

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm font-bold tracking-wider text-gray-900 dark:text-gray-100"
        >
          {logoText}
        </motion.div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
              className={`text-sm text-gray-900 dark:text-gray-100 transition-colors hover:opacity-70 ${
                item.isActive ? "underline underline-offset-4 decoration-1" : ""
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Contact Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onClick={onContactClick}
          className="flex items-center gap-2 text-sm text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity"
        >
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full text-white"
            style={{ backgroundColor: colors.accent }}
          >
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="hidden sm:inline">{contactText}</span>
        </motion.button>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-24">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center"
        >
          {headlineLines.map((line, index) => (
            <span
              key={index}
              className="block text-[clamp(3rem,12vw,9rem)] font-black leading-[0.9] tracking-tight text-[#333D38]"
            >
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mt-12 sm:mt-16 lg:mt-20"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-sm overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mt-2 text-xs text-[#333D38] font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 lg:bottom-16 lg:right-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-8 h-8 sm:w-10 sm:h-10 text-[#333D38] stroke-[1.5]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
