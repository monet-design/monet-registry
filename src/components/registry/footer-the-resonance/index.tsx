"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#3a4544",
    cardBackground: "#2d3b3a",
    accent: "#c8e64a",
    text: "#ffffff",
    textMuted: "#a0a8a7",
    inputBackground: "#3a4544",
    inputBorder: "#4a5756",
  },
  dark: {
    background: "#3a4544",
    cardBackground: "#2d3b3a",
    accent: "#c8e64a",
    text: "#ffffff",
    textMuted: "#a0a8a7",
    inputBackground: "#3a4544",
    inputBorder: "#4a5756",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";

interface LabProduct {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

interface FooterTheResonanceProps {
  mode?: "light" | "dark";
  labProducts?: LabProduct[];
  copyrightYear?: string;
  companyName?: string;
  privacyPolicyHref?: string;
  onSubscribe?: (email: string) => void;
}

// The Resonance Logo Component
function ResonanceLogo({ color }: { color: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized bars representing resonance/sound waves */}
      <rect x="2" y="10" width="4" height="20" fill={color} />
      <rect x="10" y="5" width="4" height="30" fill={color} />
      <rect x="18" y="0" width="4" height="40" fill={color} />
      <rect x="26" y="5" width="4" height="30" fill={color} />
      <rect x="34" y="10" width="4" height="20" fill={color} />
    </svg>
  );
}

// 3D Abstract Shape SVG Component
function Abstract3DShape({ accentColor }: { accentColor: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="shineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="1" />
          <stop offset="40%" stopColor="#e5f788" stopOpacity="1" />
          <stop offset="60%" stopColor={accentColor} stopOpacity="1" />
          <stop offset="100%" stopColor="#8fb82e" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="shineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e5f788" stopOpacity="1" />
          <stop offset="50%" stopColor={accentColor} stopOpacity="1" />
          <stop offset="100%" stopColor="#6b9a1e" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4a6b15" stopOpacity="1" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Main curved tube 1 */}
      <path
        d="M 50 180
           C 50 100, 150 50, 280 50
           C 410 50, 460 120, 460 180
           C 460 220, 430 250, 380 250
           C 280 250, 180 250, 120 250
           C 80 250, 50 220, 50 180 Z"
        fill="url(#shineGradient1)"
        filter="url(#glow)"
      />

      {/* Inner highlight for tube 1 */}
      <path
        d="M 80 170
           C 80 120, 160 80, 280 80
           C 400 80, 430 140, 430 170
           C 430 195, 410 215, 370 215
           C 280 215, 190 215, 140 215
           C 100 215, 80 195, 80 170 Z"
        fill="url(#shineGradient2)"
        opacity="0.7"
      />

      {/* Main curved tube 2 */}
      <path
        d="M 50 300
           C 50 220, 150 170, 280 170
           C 410 170, 460 240, 460 300
           C 460 340, 430 370, 380 370
           C 280 370, 180 370, 120 370
           C 80 370, 50 340, 50 300 Z"
        fill="url(#shineGradient1)"
        filter="url(#glow)"
      />

      {/* Inner highlight for tube 2 */}
      <path
        d="M 80 290
           C 80 240, 160 200, 280 200
           C 400 200, 430 260, 430 290
           C 430 315, 410 335, 370 335
           C 280 335, 190 335, 140 335
           C 100 335, 80 315, 80 290 Z"
        fill="url(#shineGradient2)"
        opacity="0.7"
      />

      {/* Main curved tube 3 */}
      <path
        d="M 50 420
           C 50 340, 150 290, 280 290
           C 410 290, 460 360, 460 420
           C 460 460, 430 490, 380 490
           C 280 490, 180 490, 120 490
           C 80 490, 50 460, 50 420 Z"
        fill="url(#shadowGradient)"
        filter="url(#glow)"
      />

      {/* Inner highlight for tube 3 */}
      <path
        d="M 80 410
           C 80 360, 160 320, 280 320
           C 400 320, 430 380, 430 410
           C 430 435, 410 455, 370 455
           C 280 455, 190 455, 140 455
           C 100 455, 80 435, 80 410 Z"
        fill="url(#shineGradient1)"
        opacity="0.5"
      />

      {/* Decorative circles at the ends */}
      <ellipse cx="50" cy="420" rx="30" ry="40" fill="url(#shadowGradient)" />
      <ellipse cx="50" cy="300" rx="30" ry="40" fill="url(#shineGradient1)" />
      <ellipse cx="50" cy="180" rx="30" ry="40" fill="url(#shineGradient2)" />
    </svg>
  );
}

// Label with icon component
function LabelWithIcon({
  text,
  accentColor
}: {
  text: string;
  accentColor: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill={accentColor}
      >
        <path d="M0 6 L6 0 L12 6 L6 12 Z" />
      </svg>
      <span
        className="text-xs font-medium tracking-[0.2em] uppercase"
        style={{ color: accentColor }}
      >
        {text}
      </span>
    </div>
  );
}

export default function FooterTheResonance({
  mode = "dark",
  labProducts = [
    {
      title: "Promptly",
      description: "Manage and organize your AI prompts\nefficiently in one place",
      href: "#",
    },
    {
      title: "This or That",
      description: "Define your brand's visual identity",
      href: "#",
    },
  ],
  copyrightYear = "2024",
  companyName = "THE RESONANCE",
  privacyPolicyHref = "#",
  onSubscribe,
}: FooterTheResonanceProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (onSubscribe && email) {
      onSubscribe(email);
      setEmail("");
    }
  };

  return (
    <footer
      className="relative w-full min-h-[500px] overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Subtle border around the whole footer */}
      <div
        className="absolute inset-3 rounded-2xl pointer-events-none"
        style={{
          border: `1px solid ${colors.inputBorder}`,
          backgroundColor: colors.cardBackground,
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row h-full">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
          {/* FROM OUR LAB Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LabelWithIcon text="FROM OUR LAB" accentColor={colors.accent} />

            {/* Product Cards */}
            <div className="flex flex-col gap-3 mb-8">
              {labProducts.map((product, index) => (
                <motion.a
                  key={index}
                  href={product.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg transition-all hover:translate-x-1"
                  style={{
                    backgroundColor: colors.cardBackground,
                    border: `1px solid ${colors.inputBorder}`,
                  }}
                >
                  <div>
                    <h3
                      className="text-base font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-sm whitespace-pre-line"
                      style={{ color: colors.textMuted }}
                    >
                      {product.description}
                    </p>
                  </div>
                  {product.image && (
                    <div
                      className="w-24 h-16 rounded-lg overflow-hidden ml-4 flex-shrink-0"
                      style={{ backgroundColor: colors.inputBorder }}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {!product.image && (
                    <div
                      className="w-24 h-16 rounded-lg ml-4 flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: colors.inputBorder }}
                    >
                      <div
                        className="w-16 h-10 rounded"
                        style={{
                          background: `linear-gradient(135deg, ${colors.accent}40, ${colors.cardBackground})`
                        }}
                      />
                    </div>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Subscribe Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LabelWithIcon text="SUBSCRIBE FOR UPDATES" accentColor={colors.accent} />

              {/* Email Input */}
              <div className="flex flex-col gap-3 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2"
                  style={{
                    backgroundColor: colors.inputBackground,
                    border: `1px solid ${colors.inputBorder}`,
                    color: colors.text,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.accent;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.inputBorder;
                  }}
                />
                <motion.button
                  onClick={handleSubscribe}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all"
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.cardBackground,
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 mt-8 lg:mt-12"
          >
            <ResonanceLogo color={colors.accent} />
            <div
              className="text-xs tracking-wider uppercase"
              style={{ color: colors.textMuted }}
            >
              <span>&copy; {copyrightYear} {companyName}</span>
              <span className="mx-2">|</span>
              <a
                href={privacyPolicyHref}
                className="transition-opacity hover:opacity-70"
              >
                PRIVACY POLICY
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Graphic Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <Abstract3DShape accentColor={colors.accent} />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
