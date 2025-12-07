"use client";

import { motion } from "motion/react";

interface CoderabbitAiFooter12Props {
  mode?: "light" | "dark";
}

const CodeRabbitLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
    <path d="M10 14C10 12.8954 10.8954 12 12 12H20C21.1046 12 22 12.8954 22 14V20C22 21.1046 21.1046 22 20 22H12C10.8954 22 10 21.1046 10 20V14Z" fill="currentColor" />
    <circle cx="13" cy="16" r="1.5" fill="black" />
    <circle cx="19" cy="16" r="1.5" fill="black" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CoderabbitAiFooter12({
  mode = "dark",
}: CoderabbitAiFooter12Props) {
  const footerLinks = {
    Products: [
      { label: "Pull Request Reviews", href: "#" },
      { label: "IDE Reviews", href: "#" },
      { label: "CLI Reviews", href: "#" },
    ],
    Navigation: [
      { label: "About Us", href: "#" },
      { label: "Features", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "System Status", href: "#" },
      { label: "Careers", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Startup Program", href: "#" },
      { label: "Vulnerability", href: "#" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Trust Center", href: "#" },
      { label: "Brand Guidelines", href: "#" },
    ],
    Contact: [
      { label: "Support", href: "#" },
      { label: "Sales", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Partnerships", href: "#" },
    ],
  };

  return (
    <footer className="relative w-full bg-zinc-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-white">
              <CodeRabbitLogo />
              <span className="text-lg font-semibold">CodeRabbit</span>
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-white">
              Sign up for our newsletter<span className="text-[#FF6B35]">*</span>
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-zinc-700 bg-transparent px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#FF6B35] focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FF6B35] hover:text-[#E55A2B]">
                <ArrowRight />
              </button>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              By signing up you agree to our{" "}
              <a href="#" className="text-[#FF6B35] hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#FF6B35] hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} CodeRabbit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
