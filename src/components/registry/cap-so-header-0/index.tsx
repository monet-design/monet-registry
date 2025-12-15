"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CONTENT = {
  logo: "Cap",
  navItems: [
    { label: "Product", href: "#", hasDropdown: true },
    { label: "Download", href: "/download" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Help", href: "#", hasDropdown: true },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
  ],
  cta: {
    github: { label: "Github", href: "https://github.com/CapSoftware/Cap" },
    login: { label: "Login", href: "/login" },
    signup: { label: "Sign Up", href: "/signup" },
  },
} as const;

interface CapSoHeader0Props {
  mode?: "light" | "dark";
}

export default function CapSoHeader0({ mode = "light" }: CapSoHeader0Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 z-50 top-4 lg:top-6 animate-in fade-in slide-in-from-top-4 duration-500">
      <nav className="p-2 mx-auto w-full max-w-[calc(100%-20px)] bg-white rounded-full border backdrop-blur-md lg:max-w-fit border-zinc-200">
        <div className="flex gap-12 justify-between items-center mx-auto max-w-4xl h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <svg
                viewBox="0 0 60 40"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                className="w-[45.5px] h-10 transition-all duration-200 ease-out"
                aria-label="Cap Logo"
              >
                <path
                  fill="#4785FF"
                  d="M20 36c8.837 0 16-7.163 16-16 0-8.836-7.163-16-16-16-8.836 0-16 7.164-16 16 0 8.837 7.164 16 16 16z"
                />
                <path
                  fill="#ADC9FF"
                  d="M20 33c7.18 0 13-5.82 13-13S27.18 7 20 7 7 12.82 7 20s5.82 13 13 13z"
                />
                <path
                  fill="#fff"
                  d="M20 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
                />
              </svg>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <nav className="flex relative z-10 flex-1 justify-center items-center max-w-max">
                <ul className="flex flex-1 justify-center items-center px-0 list-none space-x-0">
                  {CONTENT.navItems.map((item) => (
                    <li key={item.label}>
                      {"hasDropdown" in item ? (
                        <button className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent transition-colors hover:bg-gray-100 px-2 py-0 text-sm font-medium text-gray-700 hover:text-blue-600">
                          {item.label}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent transition-colors hover:bg-gray-100 px-2 py-0 text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center space-x-2 lg:flex">
            <a
              href={CONTENT.cta.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-colors duration-200 rounded-full px-5 gap-1 border border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-gray-900 text-sm h-10 font-medium"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {CONTENT.cta.github.label}
            </a>
            <a
              href={CONTENT.cta.login.href}
              className="flex items-center justify-center transition-colors duration-200 rounded-full px-5 gap-1 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900 text-sm h-10 font-medium"
            >
              {CONTENT.cta.login.label}
            </a>
            <a
              href={CONTENT.cta.signup.href}
              className="flex items-center justify-center transition-colors duration-200 rounded-full px-5 gap-1 bg-gray-900 hover:bg-gray-800 border border-gray-900 text-white text-sm h-10 font-medium"
            >
              {CONTENT.cta.signup.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <motion.div
                className="w-6 h-0.5 bg-black"
                animate={
                  mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                }
              />
              <motion.div
                className="w-6 h-0.5 bg-black"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-black"
                animate={
                  mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 mx-auto w-[calc(100%-20px)] bg-white rounded-2xl border border-zinc-200 p-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-2">
              {CONTENT.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              <hr className="my-2 border-gray-200" />
              <a
                href={CONTENT.cta.github.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                {CONTENT.cta.github.label}
              </a>
              <a
                href={CONTENT.cta.login.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                {CONTENT.cta.login.label}
              </a>
              <a
                href={CONTENT.cta.signup.href}
                className="px-4 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full text-center"
              >
                {CONTENT.cta.signup.label}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
