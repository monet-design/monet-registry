"use client";

import { useState } from "react";
import { motion } from "motion/react";

const CONTENT = {
  headline: "Share instantly, or record and edit locally",
  subheadline:
    "Instant Mode bypasses rendering with real-time uploading whilst you are recording. Studio Mode prioritizes quality with local recording and full editing capabilities.",
  modes: [
    {
      id: "instant",
      label: "Instant Mode",
      icon: "zap",
      active: true,
      description:
        "Hit record, stop, share link. Your video is live in seconds with automatically generated captions, a title, summary, chapters, and more. Perfect for quick feedback, bug reports, or when you just need to show something fast.",
    },
    {
      id: "studio",
      label: "Studio Mode",
      icon: "clapperboard",
      active: false,
      description:
        "Record locally with full control. Edit your footage, add effects, and export in high quality. Perfect for tutorials, demos, and polished content.",
    },
  ],
  cta: {
    primary: { label: "Download for free", href: "/download/apple-silicon" },
    secondary: { label: "Upgrade to Cap Pro", href: "/pricing" },
  },
  embedUrl: "https://cap.so/embed/8cq21vmz12tm1zf",
} as const;

interface CapSoFeature2Props {
  mode?: "light" | "dark";
}

export default function CapSoFeature2({ mode = "light" }: CapSoFeature2Props) {
  const [activeMode, setActiveMode] = useState<"instant" | "studio">("instant");
  const currentMode = CONTENT.modes.find((m) => m.id === activeMode);

  return (
    <section className="w-full py-[150px] lg:py-[200px] bg-white">
      <div className="w-full max-w-[1000px] mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h2 className="text-4xl font-medium text-gray-900">{CONTENT.headline}</h2>
          <p className="text-lg text-gray-500 w-full max-w-[670px] mx-auto">
            {CONTENT.subheadline}
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-[52px]">
          <button
            onClick={() => setActiveMode("instant")}
            className={`flex overflow-hidden relative flex-1 gap-3 justify-center items-center px-6 py-4 text-lg md:text-2xl font-medium rounded-2xl border transition-colors duration-200 cursor-pointer ${
              activeMode === "instant"
                ? "bg-blue-50 border-blue-300 text-blue-900"
                : "text-gray-900 bg-gray-50 border-gray-200 hover:bg-gray-100"
            }`}
          >
            <div className="flex gap-1.5 z-[2] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="yellow"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 md:size-6"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              Instant Mode
            </div>
          </button>
          <button
            onClick={() => setActiveMode("studio")}
            className={`flex overflow-hidden relative flex-1 gap-3 justify-center items-center px-6 py-4 text-lg md:text-2xl font-medium rounded-2xl border transition-colors duration-200 cursor-pointer ${
              activeMode === "studio"
                ? "bg-blue-50 border-blue-300 text-blue-900"
                : "text-gray-900 bg-gray-50 border-gray-200 hover:bg-gray-100"
            }`}
          >
            <div className="flex gap-1.5 z-[2] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#3B82F6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 md:size-6"
              >
                <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                <path d="m6.2 5.3 3.1 3.9" />
                <path d="m12.4 3.4 3.1 4" />
                <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
              </svg>
              Studio Mode
            </div>
          </button>
        </div>

        {/* Video Preview Card */}
        <motion.div
          key={activeMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-5 w-full rounded-2xl border shadow-xl h-fit bg-gray-50 border-gray-200 shadow-black/5"
        >
          <div className="relative h-full">
            <div
              className="overflow-hidden w-full rounded-t-xl"
              style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                src={CONTENT.embedUrl}
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-t-xl"
              />
            </div>
          </div>
          <div className="p-4 border-t border-b bg-gray-100 border-gray-200">
            <p className="mx-auto w-full text-lg text-center text-gray-900">
              {currentMode?.description}
            </p>
          </div>
          <div className="p-6">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
              <a
                href={CONTENT.cta.primary.href}
                className="transition-colors duration-200 rounded-full px-5 bg-gray-900 hover:bg-gray-800 border border-gray-900 text-white text-md h-12 flex justify-center items-center font-medium"
              >
                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                {CONTENT.cta.primary.label}
              </a>
              <a
                href={CONTENT.cta.secondary.href}
                className="transition-colors duration-200 rounded-full font-medium px-5 bg-blue-600 text-white border border-blue-800 shadow-[0_1.50px_0_0_rgba(255,255,255,0.20)_inset] hover:bg-blue-700 text-md h-12 flex items-center"
              >
                {CONTENT.cta.secondary.label}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
