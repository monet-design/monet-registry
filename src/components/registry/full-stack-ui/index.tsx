"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {},
  dark: {},
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface FullStackUiProps {
  mode?: "light" | "dark";
  greeting?: string;
  name?: string;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
}

export default function FullStackUi({
  mode = "light",
  greeting = "Hi, my name is",
  name = "Jussi Virtanen",
  description = (
    <>
      I&apos;m a full stack designer (I both design and develop)
      <br />
      from Helsinki, Finland{" "}
      <span role="img" aria-label="Finnish flag">
        🇫🇮
      </span>
      . I&apos;m passionate to teach
      <br />
      you how to combine design and development. If
      <br />
      you any have questions or suggestions, send me an
      <br />
      email to{" "}
      <a
        href="mailto:jussi@jussivirtanen.com"
        className="text-[#4A90D9] underline transition-colors hover:text-[#3A7BC8]"
      >
        jussi@jussivirtanen.com
      </a>
      .
    </>
  ),
  imageSrc = "/registry/full-stack-ui/person.png",
  imageAlt = "Portrait of Jussi Virtanen",
  backgroundColor = "#ECF6FF",
}: FullStackUiProps) {
  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl">
              {greeting} {name}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-base"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Right Column - Person Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative h-[280px] w-[200px] sm:h-[350px] sm:w-[250px] lg:h-[400px] lg:w-[300px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
