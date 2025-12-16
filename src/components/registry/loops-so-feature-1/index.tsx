"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC5200",
    accentHover: "#E54A00",
    background: "#fafaf9",
    cardBorder: "rgba(231, 229, 228, 0.5)",
    titleText: "#1f2937",
    bodyText: "#6b7280",
    subtitleText: "#78716c",
  },
  dark: {
    accent: "#FC5200",
    accentHover: "#FF6B20",
    background: "#1c1917",
    cardBorder: "rgba(68, 64, 60, 0.5)",
    titleText: "#f5f5f4",
    bodyText: "#a8a29e",
    subtitleText: "#a8a29e",
  },
} as const;

const IMAGES = {
  themesScreenshot: "/scraped/loops-so-2025-12-15/images/image-5.png",
  componentsScreenshot: "/scraped/loops-so-2025-12-15/images/image-6.png",
} as const;

const VIDEO_URL = "https://framerusercontent.com/assets/gX1079xlNJeHfnE5CRC8Z0hMw.mp4";
const VIDEO_POSTER = "/scraped/loops-so-2025-12-15/videos/thumb-0.png";

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoopsSoFeature1Props {
  mode?: "light" | "dark";
}

const features = [
  {
    title: "Write",
    description: "Craft an email like you're writing a doc",
    link: "Learn more",
    videoUrl: VIDEO_URL,
    posterUrl: VIDEO_POSTER,
  },
  {
    title: "Polish",
    description: "Your email, your branding",
    link: "Learn more",
    videoUrl: VIDEO_URL,
    posterUrl: VIDEO_POSTER,
  },
  {
    title: "Personalize",
    description: "Make it relevant, out of the box",
    link: "Learn more",
    videoUrl: VIDEO_URL,
    posterUrl: VIDEO_POSTER,
  },
];

export default function LoopsSoFeature1({
  mode = "light",
}: LoopsSoFeature1Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activeTab]);

  return (
    <section
      className={`relative w-full py-20 ${isDark ? "bg-stone-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span
            className="text-sm tracking-wide"
            style={{ color: colors.subtitleText }}
          >
            Designers
          </span>
          <h2
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: colors.titleText }}
          >
            Simplicity meets polish at scale
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl"
          style={{ backgroundColor: colors.background }}
        >
          <div
            className="grid lg:grid-cols-2 rounded-3xl border"
            style={{ borderColor: colors.cardBorder }}
          >
            {/* Left Column - Feature Tabs */}
            <div
              className="flex flex-col border-r"
              style={{ borderColor: colors.cardBorder }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex-1 flex flex-col"
                >
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 flex flex-col justify-center text-left px-6 py-8 transition-all duration-200 ${
                      activeTab === index
                        ? isDark
                          ? "bg-stone-900"
                          : "bg-white"
                        : "bg-transparent"
                    } ${activeTab !== index ? "opacity-70" : "opacity-100"}`}
                  >
                    <h3
                      className="text-lg font-medium"
                      style={{ color: colors.titleText }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: colors.bodyText }}
                    >
                      {feature.description}
                    </p>
                    <a
                      href="#"
                      className="mt-3 inline-flex items-center gap-1.5 text-base font-medium"
                      style={{ color: colors.accent }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {feature.link}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                      </svg>
                    </a>
                  </button>
                  {/* Divider with progress indicator */}
                  {index < features.length - 1 && (
                    <div
                      className="h-[1px] relative flex-shrink-0"
                      style={{ backgroundColor: colors.cardBorder }}
                    >
                      {activeTab === index && (
                        <motion.div
                          className="absolute inset-0 h-full origin-left"
                          style={{ backgroundColor: colors.accent }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Video Preview (1:1 aspect ratio) */}
            <div className="flex items-center justify-center p-6 lg:p-8">
              <div
                className="w-full overflow-hidden rounded-xl"
                style={{
                  aspectRatio: "1 / 1",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 0.722625px 1.87882px -1.16667px, rgba(0, 0, 0, 0.18) 0px 2.74624px 7.14022px -2.33333px, rgba(0, 0, 0, 0.09) 0px 12px 31.2px -3.5px",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.video
                    key={activeTab}
                    ref={videoRef}
                    src={features[activeTab].videoUrl}
                    poster={features[activeTab].posterUrl}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Cards - Themes & Components */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Themes Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border p-8"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.cardBorder,
            }}
          >
            {/* Theme Editor Preview */}
            <div className="mb-6 flex justify-center">
              <img
                src={IMAGES.themesScreenshot}
                alt="Themes - Save attributes in a single, reusable theme"
                className="w-full max-w-xs rounded-lg"
              />
            </div>
            <h3
              className="text-center text-xl font-semibold"
              style={{ color: colors.titleText }}
            >
              Themes
            </h3>
            <p
              className="mt-2 text-center text-sm"
              style={{ color: colors.bodyText }}
            >
              Save attributes in a single, reusable theme that anyone on your
              team can apply to any email.
            </p>
            <div className="mt-4 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-base font-medium"
                style={{ color: colors.accent }}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Components Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border p-8"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.cardBorder,
            }}
          >
            {/* Component Search Preview */}
            <div className="mb-6 flex justify-center">
              <img
                src={IMAGES.componentsScreenshot}
                alt="Components - Create and reuse components"
                className="w-full max-w-xs rounded-lg"
              />
            </div>
            <h3
              className="text-center text-xl font-semibold"
              style={{ color: colors.titleText }}
            >
              Components
            </h3>
            <p
              className="mt-2 text-center text-sm"
              style={{ color: colors.bodyText }}
            >
              Create a Component, update it in one place, and it updates
              everywhere.
            </p>
            <div className="mt-4 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-base font-medium"
                style={{ color: colors.accent }}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
