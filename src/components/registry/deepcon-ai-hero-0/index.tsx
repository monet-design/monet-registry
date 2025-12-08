"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#000000",
    accentHover: "#1f1f1f",
  },
  dark: {
    accent: "#FFFFFF",
    accentHover: "#E5E5E5",
  },
} as const;

const CONTENT = {
  badge: {
    prefix: "Introducing",
    text: "Context Benchmark",
    href: "https://github.com/opactorai/context-bench",
  },
  headline: {
    line1: "The most Accurate Context",
    line2: "for your Coding Agent",
  },
  subheadline: {
    prefix: "Token-optimized context—",
    emphasis: "the only tool your coding agent needs.",
    suffix: "Docs, code, web, deep research integrated.",
  },
  searchPlaceholder: "Search external documentation for your",
  searchPlaceholderMobile: "Search docs for",
  typingWords: ["Codex", "React", "Next.js", "Python", "LangChain"],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";

interface DeepconAiHero0Props {
  mode?: "light" | "dark";
}

// Typing animation hook
function useTypingAnimation(words: readonly string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
}

export default function DeepconAiHero0({
  mode = "light",
}: DeepconAiHero0Props) {
  const typingText = useTypingAnimation(CONTENT.typingWords);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16 md:pb-24 bg-white text-black">
      {/* Hero Section */}
      <motion.div
        className="mx-auto flex max-w-[976px] flex-col items-center text-center gap-6 sm:gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.a
          href={CONTENT.badge.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2 border border-black/10 bg-white px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-600 cursor-pointer hover:border-black/20 transition-colors mt-6 sm:mt-8 md:mt-12"
          variants={itemVariants}
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-black/70 rounded-full" />
            <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 bg-black rounded-full" />
          </span>
          <span className="whitespace-nowrap">{CONTENT.badge.prefix}</span>
          <span className="font-semibold text-black hover:underline whitespace-nowrap">
            {CONTENT.badge.text}
          </span>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />
        </motion.a>

        {/* Headlines */}
        <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-black whitespace-nowrap">
            {CONTENT.headline.line1}
          </h1>
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-black whitespace-nowrap">
            {CONTENT.headline.line2}
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-2 sm:px-4">
            <span className="block sm:inline">{CONTENT.subheadline.prefix}</span>
            <span className="font-semibold text-black">{CONTENT.subheadline.emphasis}</span>
            <span className="block pt-2 sm:pt-3 text-sm sm:text-base text-gray-500">
              {CONTENT.subheadline.suffix}
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Search Form */}
      <motion.div
        className="w-full relative mt-8 sm:mt-10 md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.15]" style={{ zIndex: 1 }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/[0.15]" style={{ zIndex: 1 }} />
        <form className="mx-auto max-w-[976px] relative" style={{ zIndex: 2 }}>
          <div className="flex flex-col md:flex-row bg-white border border-black/40">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder=""
                className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-transparent text-sm sm:text-base text-black outline-none border-b md:border-b-0 md:border-r border-black/40"
                autoComplete="off"
              />
              <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-sm sm:text-base text-gray-400 pointer-events-none pr-4">
                <span className="hidden sm:inline">{CONTENT.searchPlaceholder} </span>
                <span className="sm:hidden">{CONTENT.searchPlaceholderMobile} </span>
                <span className="inline-block min-w-[100px] sm:min-w-[120px]">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
            <input
              type="text"
              placeholder="Language"
              className="md:w-[200px] px-4 sm:px-6 py-4 sm:py-5 bg-transparent text-sm sm:text-base text-black placeholder-gray-400 outline-none border-b md:border-b-0 md:border-r border-black/40"
              autoComplete="off"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-4 sm:py-5 bg-black text-white text-sm sm:text-base font-medium transition-colors hover:bg-gray-900 cursor-pointer -m-px"
            >
              Search
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
