"use client";

import { motion } from "motion/react";
import { Copy } from "lucide-react";

interface PatchSecurityHeroProps {
  logo?: string;
  navItems?: { label: string; href: string }[];
  ctaButtonText?: string;
  sectionLabel?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  onCtaClick?: () => void;
}

export default function PatchSecurityHero({
  logo = "patch",
  navItems = [
    { label: "Product", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Blog", href: "#" },
  ],
  ctaButtonText = "Early Access",
  sectionLabel = "SECURITY",
  headline = "Secure platform,\ninfrastructure and\ndata.",
  description = "Your data is sensitive. We are constantly improving our security,compliance and audit initiatives with your trust in mind.",
  primaryButtonText = "Book a demo",
  onPrimaryClick,
  onCtaClick,
}: PatchSecurityHeroProps) {
  const tokenValue = "eyJhGciOiJIUzI1NiIsI9ey0I6b2ubl";

  const codeLines = [
    { num: 1, content: "{" },
    { num: 2, content: '  "patch.tech": {' },
    {
      num: 3,
      content: '    "tenantId": "tnt_2BE4e5UUYkf8vqVkhlkQ1W2982B",',
      highlight: "string",
    },
    {
      num: 4,
      content: '    "sourceId": "cxn_2J0kdYj5boZg0G9qAziqTksadIG",',
      highlight: "string",
    },
    {
      num: 5,
      content: '    "datasetName": "exec_dashboard_prod",',
      highlight: "string",
    },
    { num: 6, content: '    "filters": [{' },
    {
      num: 7,
      content: '      "tableName": "events_table",',
      highlight: "string",
    },
    {
      num: 8,
      content: '      "columnName": "account_id",',
      highlight: "string",
    },
    { num: 9, content: '      "value": 7839272', highlight: "number" },
    { num: 10, content: "    }]" },
    { num: 11, content: "  }" },
    { num: 12, content: "}" },
  ];

  const renderCodeLine = (line: { num: number; content: string; highlight?: string }) => {
    if (!line.highlight) {
      return <span className="text-gray-400">{line.content}</span>;
    }

    const parts = line.content.split(/(["'][^"']*["']|:\s*\d+)/g);
    return parts.map((part, i) => {
      if (part.match(/["'][^"']*["']/)) {
        return (
          <span key={i} className="text-[#C1D162]">
            {part}
          </span>
        );
      }
      if (part.match(/:\s*\d+/)) {
        const [colon, num] = part.split(/(\d+)/);
        return (
          <span key={i}>
            <span className="text-gray-400">{colon}</span>
            <span className="text-[#7FB3D5]">{num}</span>
          </span>
        );
      }
      return (
        <span key={i} className="text-gray-400">
          {part}
        </span>
      );
    });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F8FCF2] overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 lg:px-16">
        <div className="flex items-center gap-10">
          <a href="#" className="text-xl font-semibold text-[#0F1A19]">
            {logo}
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-sm text-[#0F1A19] hover:text-[#0F1A19]/70 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <motion.button
          onClick={onCtaClick}
          className="bg-[#C1D162] text-[#0F1A19] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#b3c356] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaButtonText}
        </motion.button>
      </nav>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 px-8 lg:px-16 pt-12 lg:pt-20">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.2em] text-[#7C7F79] mb-6"
          >
            {sectionLabel}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#0F1A19] leading-[1.1] mb-6 whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-[#7C7F79] leading-relaxed mb-8 max-w-md"
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={onPrimaryClick}
            className="w-fit bg-[#C1D162] text-[#0F1A19] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#b3c356] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {primaryButtonText}
          </motion.button>
        </div>

        {/* Right Column - Floating Cards */}
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          {/* Token Created Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-0 top-0 lg:-top-8 lg:right-8 w-[280px] bg-[#070E0C] rounded-lg p-4 shadow-2xl z-20"
          >
            <h3 className="text-white text-sm font-semibold mb-2">Token Created</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-3">
              Your token has been created. Please save it as a DPM_AUTH_TOKEN environment variable.
              You will not be able to see it again.
            </p>
            <div className="flex items-center justify-between bg-[#0F1A19] rounded px-3 py-2">
              <code className="text-xs text-gray-300 truncate mr-2">{tokenValue}</code>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Copy size={14} />
              </button>
            </div>
          </motion.div>

          {/* Code Editor Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-0 lg:-left-8 top-24 lg:top-32 w-[340px] lg:w-[380px] bg-[#070E0C] rounded-lg shadow-2xl overflow-hidden z-10"
          >
            {/* Tab Bar */}
            <div className="flex items-center bg-[#0F1A19] px-3 py-2 border-b border-[#1a2625]">
              <div className="flex items-center gap-2 bg-[#070E0C] px-3 py-1.5 rounded-t text-xs">
                <span className="text-[#0C7677]">TS</span>
                <span className="text-gray-300">first_query.ts</span>
                <span className="text-[#C1D162] ml-1">9</span>
                <span className="text-gray-500 ml-1">x</span>
              </div>
              <div className="ml-auto flex items-center gap-2 text-gray-500">
                <Copy size={12} />
                <span className="text-xs">...</span>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-500 border-b border-[#1a2625]">
              <span>demo-project</span>
              <span>&gt;</span>
              <span className="text-[#0C7677]">TS</span>
              <span className="text-gray-400">first_query.ts</span>
              <span>&gt;</span>
              <span className="text-[#C1D162]">main</span>
            </div>

            {/* Code Content */}
            <div className="p-4 font-mono text-xs leading-relaxed">
              {codeLines.map((line) => (
                <div key={line.num} className="flex">
                  <span className="w-6 text-gray-600 select-none">{line.num}</span>
                  <span className="pl-2">{renderCodeLine(line)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute right-4 lg:right-0 bottom-0 lg:bottom-8 w-[300px] bg-[#0C7677] rounded-lg p-4 shadow-2xl z-30"
          >
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
            </div>
            <code className="text-xs text-white font-mono">
              <span className="text-[#C1D162]">$</span> pat dataset key get{" "}
              <span className="text-gray-300">&lt;data_access_key_id&gt;</span>
            </code>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
