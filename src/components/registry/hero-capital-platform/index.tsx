"use client";

import { motion } from "motion/react";

interface PartnerLogo {
  name: string;
  icon?: React.ReactNode;
}

interface HeroCapitalPlatformProps {
  title?: string;
  description?: string;
  highlightedText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  advanceAmount?: string;
  paymentPercentage?: string;
  paymentProgress?: number;
  partnerLogos?: PartnerLogo[];
  partnerCount?: string;
  partnerTagline?: string;
}

// Code editor content
const codeLines = [
  { lineNum: 1, content: 'import React from "react"', keyword: "import", string: '"react"' },
  { lineNum: 2, content: 'import { PipeUI } from "@pipe/ui-embedded"', keyword: "import", string: '"@pipe/ui-embedded"' },
  { lineNum: 3, content: '' },
  { lineNum: 4, content: 'function PipeEmbedPage = () => {', keyword: "function", func: "PipeEmbedPage", arrow: "=>" },
  { lineNum: 5, content: '  return (', keyword: "return" },
  { lineNum: 6, content: '    <Layout>' },
  { lineNum: 7, content: '      <PipeUI />' },
  { lineNum: 8, content: '    </Layout>' },
  { lineNum: 9, content: '  )' },
  { lineNum: 10, content: '}' },
  { lineNum: 11, content: '' },
  { lineNum: 12, content: 'export default PipeEmbedPage', keyword: "export default", func: "PipeEmbedPage" },
];

const defaultPartnerLogos: PartnerLogo[] = [
  { name: "BROOKS" },
  { name: "Love Circular" },
  { name: "BUNGALOW" },
  { name: "VISIBLE" },
  { name: "VERMAFARMS" },
  { name: "MUD" },
];

function PaymentCard({
  advanceAmount = "$120,000",
  paymentPercentage = "2.1% of sales",
  paymentProgress = 75,
}: {
  advanceAmount?: string;
  paymentPercentage?: string;
  paymentProgress?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-xl shadow-2xl p-5 w-[180px]"
    >
      <p className="text-xs text-gray-500 mb-1">Advance</p>
      <p className="text-2xl font-semibold text-gray-900 mb-4">{advanceAmount}</p>

      {/* Progress bar */}
      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${paymentProgress}%` }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #D66537 0%, #E88B5A 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#2DD4BF] rounded-full border-2 border-white shadow-md"
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Payment</span>
        <span>{paymentPercentage}</span>
      </div>
    </motion.div>
  );
}

function CodeEditor() {
  const tabs = ["Typescript", "Python", "Go", "Rust", "Elixir"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="absolute right-0 top-1/3 z-30 bg-[#1A1C23] rounded-xl shadow-2xl overflow-hidden w-[300px]"
    >
      {/* Tabs */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-800">
        {tabs.map((tab, index) => (
          <span
            key={tab}
            className={`text-xs ${index === 0 ? "text-white font-medium" : "text-gray-500"}`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Code content */}
      <div className="p-4 font-mono text-[11px] leading-5">
        {codeLines.map((line, index) => (
          <motion.div
            key={line.lineNum}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
            className="flex"
          >
            <span className="w-6 text-gray-600 select-none">{line.lineNum}</span>
            <span className="flex-1">
              {line.lineNum === 1 && (
                <>
                  <span className="text-purple-400">import</span>
                  <span className="text-white"> React </span>
                  <span className="text-purple-400">from</span>
                  <span className="text-emerald-400"> &quot;react&quot;</span>
                </>
              )}
              {line.lineNum === 2 && (
                <>
                  <span className="text-purple-400">import</span>
                  <span className="text-white"> {"{"} PipeUI {"}"} </span>
                  <span className="text-purple-400">from</span>
                  <span className="text-emerald-400"> &quot;@pipe/ui-embedded&quot;</span>
                </>
              )}
              {line.lineNum === 4 && (
                <>
                  <span className="text-purple-400">function</span>
                  <span className="text-[#7DD3FC]"> PipeEmbedPage</span>
                  <span className="text-white"> = </span>
                  <span className="text-white">() </span>
                  <span className="text-orange-400">=&gt;</span>
                  <span className="text-white"> {"{"}</span>
                </>
              )}
              {line.lineNum === 5 && (
                <>
                  <span className="text-white">  </span>
                  <span className="text-purple-400">return</span>
                  <span className="text-white"> (</span>
                </>
              )}
              {line.lineNum === 6 && (
                <span className="text-gray-300">    &lt;Layout&gt;</span>
              )}
              {line.lineNum === 7 && (
                <span className="text-gray-300">      &lt;PipeUI /&gt;</span>
              )}
              {line.lineNum === 8 && (
                <span className="text-gray-300">    &lt;/Layout&gt;</span>
              )}
              {line.lineNum === 9 && (
                <span className="text-white">  )</span>
              )}
              {line.lineNum === 10 && (
                <span className="text-white">{"}"}</span>
              )}
              {line.lineNum === 12 && (
                <>
                  <span className="text-purple-400">export default</span>
                  <span className="text-[#7DD3FC]"> PipeEmbedPage</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-white"
                  >
                    |
                  </motion.span>
                </>
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function GradientCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-full h-full rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FAAE68 0%, #FF5A96 50%, #FF5A96 100%)",
      }}
    >
      {/* Decorative rounded rectangle outlines */}
      <div className="absolute top-8 left-8 right-8 h-20 rounded-2xl border-2 border-white/30" />
      <div className="absolute top-14 left-12 right-12 h-14 rounded-xl border border-white/20" />

      {/* Bottom corner geometric shape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 right-8 w-32 h-32"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            rx="4"
          />
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            rx="2"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function PartnerLogoBanner({
  partnerCount = "20K+",
  partnerTagline = "USERS HAVE SIGNED UP TO GROW ON THEIR TERMS",
  partnerLogos = defaultPartnerLogos,
}: {
  partnerCount?: string;
  partnerTagline?: string;
  partnerLogos?: PartnerLogo[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-16 pt-8 border-t border-gray-800"
    >
      <p className="text-xs text-gray-500 tracking-wider mb-6">
        {partnerCount} {partnerTagline}
      </p>
      <div className="flex items-center gap-8 flex-wrap">
        {partnerLogos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            {logo.icon || (
              <span className="text-sm font-medium tracking-wide">
                {logo.name === "BROOKS" && (
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full border border-current" />
                    BROOKS
                  </span>
                )}
                {logo.name === "Love Circular" && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                    Love Circular
                  </span>
                )}
                {logo.name === "BUNGALOW" && (
                  <span className="font-bold tracking-wider">BUNGALOW</span>
                )}
                {logo.name === "VISIBLE" && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12,2 22,20 2,20" />
                    </svg>
                    VISIBLE
                  </span>
                )}
                {logo.name === "VERMAFARMS" && (
                  <span className="tracking-widest">VERMAFARMS</span>
                )}
                {logo.name === "MUD" && (
                  <span className="italic">MUD</span>
                )}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HeroCapitalPlatform({
  title = "Our capital\nplatform\nis now yours",
  description = "Give your merchants access to Pipe's frictionless\nfinancing embedded natively",
  highlightedText = "inside your platform\nand make it your own.",
  ctaText = "Get Started",
  onCtaClick,
  advanceAmount = "$120,000",
  paymentPercentage = "2.1% of sales",
  paymentProgress = 75,
  partnerLogos = defaultPartnerLogos,
  partnerCount = "20K+",
  partnerTagline = "USERS HAVE SIGNED UP TO GROW ON THEIR TERMS",
}: HeroCapitalPlatformProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#111315] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 pt-8">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              {title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-md"
            >
              {description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < description.split("\n").length - 1 && <br />}
                </span>
              ))}{" "}
              <span className="text-[#D66537]">
                {highlightedText.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < highlightedText.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCtaClick}
                className="px-6 py-3 bg-[#D66537] text-white text-sm font-medium rounded-full hover:bg-[#C55A2F] transition-colors"
              >
                {ctaText}
              </motion.button>
            </motion.div>

            {/* Partner Logo Banner */}
            <PartnerLogoBanner
              partnerCount={partnerCount}
              partnerTagline={partnerTagline}
              partnerLogos={partnerLogos}
            />
          </div>

          {/* Right Column - Visual Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main gradient card */}
            <div className="absolute inset-0">
              <GradientCard />
            </div>

            {/* Payment card overlay */}
            <PaymentCard
              advanceAmount={advanceAmount}
              paymentPercentage={paymentPercentage}
              paymentProgress={paymentProgress}
            />

            {/* Code editor overlay */}
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
}
