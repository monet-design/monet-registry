"use client";

import { useState } from "react";
import { Twitter, Linkedin } from "lucide-react";

const COLORS = {
  light: {
    accent: "#3366FF",
  },
  dark: {
    accent: "#4D7AFF",
  },
} as const;

const FOOTER_LINKS = {
  Product: [
    { label: "제품", href: "#" },
    { label: "제품 가이드", href: "#" },
    { label: "가격", href: "#" },
    { label: "체인지로그", href: "#" },
    { label: "리퍼럴 프로그램", href: "#" },
  ],
  Learn: [
    { label: "블로그", href: "#" },
    { label: "고객 사례", href: "#" },
    { label: "자료", href: "#" },
    { label: "SaaS List", href: "#" },
  ],
  Company: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Global site", href: "#" },
  ],
};

interface RelateKrFooter9Props {
  mode?: "light" | "dark";
}

export default function RelateKrFooter9({
  mode = "light",
}: RelateKrFooter9Props) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  return (
    <footer className="relative w-full bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: colors.accent }}
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-semibold">relate</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              풀스택 B2B 세일즈 플랫폼
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="work@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{ backgroundColor: colors.accent }}
              >
                이메일 구독
              </button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Pixelic, Inc. dba Relate.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
              Y
            </div>
            <span>Backed by Y Combinator</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
