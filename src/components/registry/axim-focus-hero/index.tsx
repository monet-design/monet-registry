"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface AximFocusHeroProps {
  logo?: {
    text: string;
    href?: string;
  };
  navItems?: NavItem[];
  heroHeadline?: string;
  heroDescription?: string;
  heroDescriptionHighlight?: string;
  imageSrc?: string;
  imageAlt?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  readMoreLabel?: string;
  onReadMoreClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "Our Focus", href: "#", isActive: true },
  { label: "Projects & Insights", href: "#" },
  { label: "About Us", href: "#" },
  { label: "News & Events", href: "#" },
  { label: "Get In Touch", href: "#" },
];

export default function AximFocusHero({
  logo = { text: "axim\ncollaborative", href: "#" },
  navItems = defaultNavItems,
  heroHeadline = "Access is not enough. We need\nto focus on student success.",
  heroDescription = "The vast majority of postsecondary students are looking for ",
  heroDescriptionHighlight = "engaging and\nrelevant courses",
  imageSrc = "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=600&fit=crop",
  imageAlt = "Diverse group of students holding books and laptops",
  sectionTitle = "Research shows that postsecondary\neducation is the key to economic mobility\nand sustainability.",
  sectionDescription = "There is growing consensus that technology-enabled, career-aligned courses and hybrid modalities are the future of education, especially to expand reach to underserved students. But questions remain about how to ensure quality, how to balance in-person and online instruction, how to bridge pathways from high school to postsecondary to work, and how to make sure students complete their education goals.",
  readMoreLabel = "READ MORE",
  onReadMoreClick,
}: AximFocusHeroProps) {
  const descriptionAfterHighlight =
    " that improve their career options and increase their earnings. But for many learners, rising educational costs, barriers to access, and a lack of job-aligned courses stand in their way.";

  return (
    <section className="relative w-full bg-[#dce5ed] font-['Inter',sans-serif]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between px-12 pt-6 pb-4 lg:px-16"
      >
        {/* Left Nav Items */}
        <ul className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`text-[13px] tracking-wide transition-colors hover:text-[#0a1628] ${
                  item.isActive
                    ? "text-[#0a1628] underline underline-offset-4"
                    : "text-[#0a1628]/70"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a
          href={logo.href}
          className="text-right text-[15px] font-bold leading-tight text-[#0a1628]"
        >
          {logo.text.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </a>
      </motion.nav>

      {/* Hero Content */}
      <div className="px-12 pt-8 lg:px-16">
        {/* Headline and Description Row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-16">
          {/* Left - Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[520px] font-['Instrument_Serif',serif] text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[#0a1628] lg:text-[3.25rem]"
          >
            {heroHeadline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Right - Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[480px] text-right text-[15px] leading-[1.6] text-[#0a1628]/80 lg:pt-2"
          >
            {heroDescription}
            <span className="font-semibold text-[#0a1628]">
              {heroDescriptionHighlight.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </span>
            {descriptionAfterHighlight}
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 overflow-hidden"
        >
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />
          </div>
        </motion.div>

        {/* Section Content */}
        <div className="pb-16 pt-12">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-[680px] font-['Instrument_Serif',serif] text-[2.25rem] font-normal leading-[1.15] tracking-tight text-[#0a1628] lg:text-[2.75rem]"
          >
            {sectionTitle.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          {/* Section Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-[480px] text-[14px] leading-[1.7] text-[#0a1628]/70"
          >
            {sectionDescription}
          </motion.p>

          {/* Read More Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            onClick={onReadMoreClick}
            className="mt-8 flex items-center gap-3 text-[12px] font-semibold tracking-wider text-[#0a1628] transition-opacity hover:opacity-70"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
            {readMoreLabel}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
