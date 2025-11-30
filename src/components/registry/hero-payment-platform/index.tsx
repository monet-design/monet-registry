"use client";

import { motion } from "motion/react";
import { ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

interface HeroPaymentPlatformProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  illustrationSrc?: string;
}

export default function HeroPaymentPlatform({
  logo,
  navItems = [
    { label: "Solution", href: "#" },
    { label: "Use cases", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Developers", href: "#" },
    { label: "About us", href: "#" },
    { label: "Support", href: "#" },
    { label: "Login", href: "#" },
  ],
  title = "Payment\nsolution for\nplatforms &\nmarketplaces",
  description = "Focused on streamlining and empowering\ninnovative platforms with payments.",
  primaryButtonText = "Start now",
  secondaryButtonText = "Use cases",
  onPrimaryClick,
  onSecondaryClick,
  illustrationSrc = "/registry/hero-payment-platform/illustration.png",
}: HeroPaymentPlatformProps) {
  const defaultLogo = (
    <svg
      width="80"
      height="32"
      viewBox="0 0 80 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8C8 3.58172 11.5817 0 16 0C20.4183 0 24 3.58172 24 8C24 12.4183 20.4183 16 16 16C11.5817 16 8 12.4183 8 8Z"
        fill="#574FF2"
      />
      <path
        d="M0 16C0 11.5817 3.58172 8 8 8V24C3.58172 24 0 20.4183 0 16Z"
        fill="#574FF2"
      />
      <path
        d="M24 16C24 11.5817 27.5817 8 32 8C36.4183 8 40 11.5817 40 16C40 20.4183 36.4183 24 32 24C27.5817 24 24 20.4183 24 16Z"
        fill="#574FF2"
      />
      <path
        d="M16 24C16 19.5817 19.5817 16 24 16V32C19.5817 32 16 28.4183 16 24Z"
        fill="#574FF2"
      />
      <path
        d="M40 24C40 19.5817 43.5817 16 48 16C52.4183 16 56 19.5817 56 24C56 28.4183 52.4183 32 48 32C43.5817 32 40 28.4183 40 24Z"
        fill="#574FF2"
      />
      <path
        d="M32 32C32 27.5817 35.5817 24 40 24V40C35.5817 40 32 36.4183 32 32Z"
        fill="#574FF2"
        transform="translate(0, -8)"
      />
    </svg>
  );

  return (
    <section className="relative w-full bg-white font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16"
      >
        <div className="flex items-center">
          {logo || defaultLogo}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 md:flex">
            <span className="text-xs">EN</span>
          </button>
          <button className="flex h-10 items-center gap-2 rounded-full bg-[#7A78E8] px-5 text-sm font-medium text-white transition-all hover:bg-[#6B69D6]">
            Contact
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="mx-6 mt-4 overflow-hidden rounded-3xl md:mx-12 lg:mx-16">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Blue Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center bg-[#574FF2] px-8 py-16 md:px-12 lg:w-[55%] lg:px-16 lg:py-24"
          >
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              {title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-8 text-base leading-relaxed text-white/80 md:text-lg">
              {description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < description.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onPrimaryClick}
                className="flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-gray-900 shadow-lg transition-all hover:shadow-xl"
              >
                {primaryButtonText}
                <ChevronRight className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onSecondaryClick}
                className="flex h-12 items-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                {secondaryButtonText}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Dark Blue Background with Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex items-center justify-center bg-[#3D35A8] px-8 py-16 lg:w-[45%] lg:px-12 lg:py-24"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
            >
              <Image
                src={illustrationSrc}
                alt="Payment illustration"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
