"use client";

import { motion } from "motion/react";
import { ArrowRight, Plus, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
  hasIcon?: boolean;
}

interface Project {
  label: string;
  title: string;
  image: string;
  href: string;
}

interface LowesInnovationHeroProps {
  logo?: {
    text?: string;
  };
  tagline?: string;
  projectCount?: string;
  projectLabel?: string;
  exploreLabel?: string;
  navItems?: NavItem[];
  headline?: string[];
  ctaButtons?: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  project?: Project;
  pagination?: { current: number; total: number };
  wireframeMeshImage?: string;
  onCtaPrimaryClick?: () => void;
  onCtaSecondaryClick?: () => void;
  onProjectReadClick?: () => void;
  onNavPrev?: () => void;
  onNavNext?: () => void;
}

// Diamond Logo Icon
function DiamondLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2L30 16L16 30L2 16L16 2Z" />
      <path d="M16 8L24 16L16 24L8 16L16 8Z" />
    </svg>
  );
}

// Lowe's Small Logo
function LowesLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`bg-[#004990] text-white text-xs font-bold px-1.5 py-0.5 ${className}`}>
      Lowe&apos;s
    </div>
  );
}

// Main Component
export default function LowesInnovationHero({
  logo = {
    text: "Lowe's\nInnovation\nLabs",
  },
  tagline = "We bring\nthe future home.",
  projectCount = "0014",
  projectLabel = "Projects",
  exploreLabel = "Explore Labs",
  navItems = [
    { label: "Areas of Exploration", href: "#areas", hasIcon: true },
    { label: "Menu", href: "#menu", hasIcon: true },
  ],
  headline = ["We", "bring", "the", "future", "home."],
  ctaButtons = {
    primary: { label: "Partner with us", href: "#partner" },
    secondary: { label: "Learn about Labs", href: "#learn" },
  },
  project = {
    label: "Project",
    title: "Lowe's Style Studio for\nApple Vision Pro",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
    href: "#project",
  },
  pagination = { current: 1, total: 2 },
  wireframeMeshImage = "/registry/lowes-innovation-hero/wireframe-mesh.png",
  onCtaPrimaryClick,
  onCtaSecondaryClick,
  onProjectReadClick,
  onNavPrev,
  onNavNext,
}: LowesInnovationHeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-[#F7F7F7] overflow-hidden">
      {/* Header */}
      <header className="relative z-20 w-full px-6 md:px-8 pt-4">
        <div className="flex items-start justify-between">
          {/* Left: Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-3"
          >
            <DiamondLogo className="w-7 h-7 text-black mt-0.5" />
            <span className="text-black font-semibold text-sm leading-tight whitespace-pre-line">
              {logo.text}
            </span>
          </motion.div>

          {/* Center-Left: Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block text-black text-sm whitespace-pre-line leading-tight"
          >
            {tagline}
          </motion.p>

          {/* Center-Right: Projects & Explore */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden lg:flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-black text-sm font-medium">{projectCount}</span>
              <span className="text-black/50 text-sm">/</span>
              <span className="text-black text-sm">{projectLabel}</span>
            </div>
            <a
              href="#areas"
              className="flex items-center gap-2 text-black text-sm hover:opacity-70 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              <span>Areas of Exploration</span>
            </a>
          </motion.div>

          {/* Right: Explore & Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-end gap-3"
          >
            <div className="flex items-center gap-4">
              <span className="text-black text-sm hidden sm:block">{exploreLabel}</span>
              <LowesLogo />
            </div>
            <a
              href="#menu"
              className="flex items-center gap-2 text-black text-sm hover:opacity-70 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              <span>Menu</span>
            </a>
          </motion.div>
        </div>
      </header>

      {/* Wireframe Mesh Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-[5%] left-[15%] w-[60%] h-[80%] pointer-events-none z-0"
      >
        <Image
          src={wireframeMeshImage}
          alt="Wireframe mesh"
          fill
          className="object-contain opacity-60"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-120px)] px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-black font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] leading-[0.9] tracking-tight"
          >
            {headline.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Right Side Content */}
          <div className="flex flex-col gap-6 lg:max-w-[450px]">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                href={ctaButtons.primary.href}
                onClick={(e) => {
                  if (onCtaPrimaryClick) {
                    e.preventDefault();
                    onCtaPrimaryClick();
                  }
                }}
                className="flex items-start justify-between bg-[#021E62] text-white px-5 py-4 min-w-[180px] hover:bg-[#031b52] transition-colors group"
              >
                <span className="text-sm font-medium">{ctaButtons.primary.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                href={ctaButtons.secondary.href}
                onClick={(e) => {
                  if (onCtaSecondaryClick) {
                    e.preventDefault();
                    onCtaSecondaryClick();
                  }
                }}
                className="flex items-start justify-between bg-[#1657E7] text-white px-5 py-4 min-w-[180px] hover:bg-[#1450d4] transition-colors group"
              >
                <span className="text-sm font-medium">{ctaButtons.secondary.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white border border-black/10 p-4 flex gap-4"
            >
              {/* Project Label */}
              <div className="flex flex-col gap-2">
                <span className="text-black/60 text-xs uppercase tracking-wider">
                  {project.label}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative w-28 h-20 flex-shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-black text-sm font-medium whitespace-pre-line leading-tight">
                  {project.title}
                </h3>
                <button
                  onClick={onProjectReadClick}
                  className="inline-flex items-center gap-2 text-black text-xs border border-black px-3 py-1.5 w-fit hover:bg-black hover:text-white transition-colors"
                >
                  Read
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={onNavNext}
                  className="text-black/40 hover:text-black transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onNavPrev}
                    className="text-black/40 hover:text-black transition-colors"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <span className="text-black/60 text-xs">
                    {String(pagination.current).padStart(2, "0")} / {String(pagination.total).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
