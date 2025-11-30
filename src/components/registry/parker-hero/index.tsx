"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
}

interface ParkerHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  announcementText?: string;
  announcementLinkText?: string;
  headlineBold?: string;
  headlineLight?: string;
  badgeText?: string;
  description?: string;
  primaryButtonText?: string;
  dashboardImage?: string;
}

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Card & Bill Pay", href: "#" },
  { label: "Banking", href: "#" },
  { label: "Analytics", href: "#" },
];

export default function ParkerHero({
  logoText = "Parker",
  navItems = defaultNavItems,
  ctaButtonText = "Apply now",
  announcementText = "Announcing Parker's new Banking & Analytics bundle for growing Ecommerce brands!",
  announcementLinkText = "Learn More.",
  headlineBold = "The financial stack",
  headlineLight = "for scaling your e-commerce brand faster—and more profitably.",
  badgeText = "Grow faster with Parker",
  description = "Credit, banking, and analytics designed to let you grow revenue and profitability as fast as you know you can.",
  primaryButtonText = "Get Started",
  dashboardImage = "/registry/parker-hero/dashboard.png",
}: ParkerHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-instrument-serif text-xl font-normal text-[#1D1E22]">
            {logoText}
          </span>
        </div>

        {/* Center Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#6B6B6B] hover:text-[#1D1E22] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-1.5 rounded-full bg-[#1D1E22] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#2d2e32]">
          <ArrowUpRight size={14} strokeWidth={2} />
          {ctaButtonText}
        </button>
      </motion.nav>

      {/* Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mx-6 sm:mx-10 lg:mx-16 mt-2"
      >
        <div className="flex items-center justify-center gap-2 rounded-full bg-[#7DC3A8] px-6 py-3 text-center">
          <span className="text-sm text-[#1D1E22]">
            <span className="mr-1">&#127881;</span>
            {announcementText}
            <span className="ml-1">&#127881;</span>
          </span>
          <a
            href="#"
            className="text-sm font-medium text-[#1D1E22] underline hover:no-underline"
          >
            {announcementLinkText}
          </a>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="px-6 sm:px-10 lg:px-16 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* Left Column - Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl bg-[#1D1E22] p-3 sm:p-4 overflow-hidden">
              {/* Dashboard Screenshot */}
              <div className="rounded-2xl overflow-hidden bg-white">
                <img
                  src={dashboardImage}
                  alt="Parker Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Headline below dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 lg:mt-12"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                <span className="font-instrument-serif font-normal text-[#1D1E22]">
                  {headlineBold}
                </span>{" "}
                <span className="font-instrument-serif font-light italic text-[#7F8183]">
                  {headlineLight}
                </span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Right Column - Description and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col justify-end lg:pb-4"
          >
            <div className="max-w-md lg:ml-auto">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">&#127793;</span>
                <span className="text-sm font-medium text-[#1D1E22]">
                  {badgeText}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base italic text-[#6B6B6B] leading-relaxed mb-6">
                {description}
              </p>

              {/* Get Started Button */}
              <button className="flex items-center gap-2 rounded-full border border-[#D5D5D5] bg-white px-6 py-3 text-sm font-medium text-[#1D1E22] transition-all hover:bg-[#F5F5F5] hover:border-[#1D1E22]">
                <ArrowUpRight size={14} strokeWidth={2} />
                {primaryButtonText}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
