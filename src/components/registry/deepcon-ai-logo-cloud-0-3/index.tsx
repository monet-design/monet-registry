"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const CONTENT = {
  trustedBy: "Trusted by engineers at",
  logos: ["ANTHROPIC", "aws", "Google", "Microsoft", "Vercel"],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface DeepconAiLogoCloud03Props {
  mode?: "light" | "dark";
}

export default function DeepconAiLogoCloud03({
  mode = "light",
}: DeepconAiLogoCloud03Props) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-white text-black">
      {/* Top Divider */}
      <div className="w-full max-w-[976px] mx-auto h-px bg-black/[0.15] mb-12 sm:mb-16" />

      <motion.div
        className="mx-auto flex max-w-[976px] flex-col items-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-sm font-medium text-gray-500">{CONTENT.trustedBy}</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 mx-auto max-w-3xl">
            {CONTENT.logos.map((logo, index) => (
              <motion.div
                key={index}
                className="relative h-8 w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-lg font-bold text-gray-800">{logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="w-full max-w-[976px] mx-auto h-px bg-black/[0.15] mt-12 sm:mt-16" />
    </section>
  );
}
