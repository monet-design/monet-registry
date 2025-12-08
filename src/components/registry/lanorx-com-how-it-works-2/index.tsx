"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-neutral-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    accent: "#171717",
    accentHover: "#262626",
  },
  dark: {
    accent: "#FAFAFA",
    accentHover: "#E5E5E5",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Sparkles, LayoutGrid, Code, DollarSign, Star } from "lucide-react";

interface LanorxComHowItWorks2Props {
  mode?: "light" | "dark";
}

const frameworks = ["React", "Vue", "Next.js", "Svelte", "Angular"];

export default function LanorxComHowItWorks2({
  mode = "light",
}: LanorxComHowItWorks2Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`relative py-16 md:py-24 border-t-2 ${
        isDark
          ? "border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900"
          : "border-neutral-200 bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      <div className="">
        {/* Header */}
        <div className="mb-12 max-w-5xl container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`text-xs font-light uppercase tracking-wide mb-6 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Integration
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Build with code or clicks
          </motion.h2>
        </div>

        {/* Main Cards Preview with 3D Transform */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Mobile View */}
          <div
            className="w-full overflow-hidden lg:hidden"
            style={{
              maskImage:
                "radial-gradient(ellipse 90% 50% at 40% center, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 50% at 40% center, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <div
              className={`w-[250vw] md:w-[150vw] max-w-[1600px] ml-[-25vw] md:ml-[-15vw] p-10 space-y-8 rounded-xl ${
                isDark ? "bg-neutral-900 ring-1 ring-neutral-700" : "bg-white ring-1 ring-neutral-900/5"
              }`}
            >
              <PreviewContent isDark={isDark} />
            </div>
          </div>

          {/* Desktop View with 3D Transform */}
          <div className="hidden lg:block w-full h-[600px]">
            <div
              className="w-full h-full mx-auto p-2 from-neutral-50 to-neutral-100/50 scale-[0.75] sm:scale-75 md:scale-90 lg:scale-100 origin-center"
              style={{
                perspective: "1500px",
                maskImage:
                  "radial-gradient(ellipse 55% 55% at 40% center, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 55% 55% at 40% center, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <div
                className={`w-full h-full rounded-xl overflow-hidden ${
                  isDark ? "bg-neutral-900 ring-1 ring-neutral-700" : "bg-white ring-1 ring-neutral-900/5"
                }`}
                style={{
                  transform: "rotateX(8deg) rotateY(-10deg) scale(1.3)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`p-10 space-y-8 max-w-7xl mx-auto ${
                    isDark ? "bg-neutral-900" : "bg-white"
                  }`}
                >
                  <PreviewContent isDark={isDark} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <div className="max-w-3xl container mx-auto px-6 mb-12">
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-base font-light leading-relaxed ${
              isDark ? "text-neutral-500" : "text-neutral-500"
            }`}
          >
            Developers can integrate with our SDK. Non-developers can use the
            visual editor. Your choice.
          </motion.p>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 mb-12 max-w-5xl container mx-auto px-6">
          {/* SDK for Developers */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`space-y-5 py-12 px-8 ${
              isDark ? "md:border-r border-neutral-800" : "md:border-r border-neutral-100"
            }`}
          >
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in" as unknown as string,
              }}
            >
              <div className="w-full h-[320px]">
                <div
                  className={`w-full h-full p-6 space-y-4 border-l-2 border-t-2 shadow-sm ${
                    isDark
                      ? "bg-neutral-900 border-neutral-700"
                      : "bg-white border-neutral-200/80"
                  }`}
                >
                  {/* Framework Tabs */}
                  <div className="flex gap-2">
                    {frameworks.map((fw, idx) => (
                      <div
                        key={fw}
                        className={`px-3 py-1.5 rounded text-xs font-light ${
                          idx === 0
                            ? isDark
                              ? "bg-white text-neutral-900"
                              : "bg-neutral-900 text-white"
                            : isDark
                            ? "bg-neutral-800 border border-neutral-700 text-neutral-400"
                            : "bg-white border border-neutral-200 text-neutral-600"
                        }`}
                      >
                        {fw}
                      </div>
                    ))}
                  </div>

                  {/* Code Block */}
                  <div
                    className={`p-4 rounded-lg font-mono text-xs space-y-2 overflow-hidden ${
                      isDark ? "bg-neutral-800" : "bg-neutral-50"
                    }`}
                  >
                    <div className={isDark ? "text-neutral-500" : "text-neutral-500"}>
                      {`// Install`}
                    </div>
                    <div className="text-blue-600">npm install @lanorx/react</div>
                    <div
                      className={`pt-2 ${isDark ? "text-neutral-500" : "text-neutral-500"}`}
                    >
                      {`// Usage`}
                    </div>
                    <div>
                      <span className="text-purple-600">import</span>{" "}
                      <span className="text-amber-600">{"{ LanorxForm }"}</span>{" "}
                      <span className="text-purple-600">from</span>{" "}
                      <span className="text-green-600">&apos;@lanorx/react&apos;</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-purple-600">function</span>{" "}
                      <span className="text-amber-600">App</span>
                      <span className={isDark ? "text-neutral-300" : "text-neutral-700"}>
                        () {"{"}
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-600">return</span>
                      <span className={isDark ? "text-neutral-300" : "text-neutral-700"}>
                        {" "}
                        (
                      </span>
                    </div>
                    <div className="pl-8">
                      <span className={isDark ? "text-neutral-300" : "text-neutral-700"}>
                        &lt;
                      </span>
                      <span className="text-blue-600">LanorxForm</span>
                    </div>
                    <div className="pl-10">
                      <span className="text-blue-600">projectId</span>
                      <span className={isDark ? "text-neutral-300" : "text-neutral-700"}>
                        =
                      </span>
                      <span className="text-green-600">&quot;your-id&quot;</span>
                    </div>
                    <div className="pl-10">
                      <span className="text-blue-600">onSubmit</span>
                      <span className={isDark ? "text-neutral-300" : "text-neutral-700"}>
                        ={"{"}
                      </span>
                      <span className="text-amber-600">handleSubmit</span>
                      <span className={isDark ? "text-neutral-300" : "text-neutral-700"}>
                        {"}"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-normal mb-2 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                SDK for developers
              </h3>
              <p
                className={`text-sm font-light leading-relaxed ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                Embed in custom pages. React, Vue, Svelte, Angular SDK.
              </p>
            </div>
          </motion.div>

          {/* No-code Editor */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 py-12 px-8"
          >
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in" as unknown as string,
              }}
            >
              <div className="w-full h-[320px]">
                <div
                  className={`w-full h-full p-6 space-y-4 border-l-2 border-t-2 shadow-sm ${
                    isDark
                      ? "bg-neutral-900 border-neutral-700"
                      : "bg-white border-neutral-200/80"
                  }`}
                >
                  {/* Header */}
                  <div className="space-y-1">
                    <div
                      className={`text-sm font-normal ${
                        isDark ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      Visual Editor
                    </div>
                    <div
                      className={`text-xs font-light ${
                        isDark ? "text-neutral-500" : "text-neutral-500"
                      }`}
                    >
                      Select sections to build your landing page
                    </div>
                  </div>

                  {/* Section Buttons */}
                  <div className="space-y-2.5">
                    {/* Hero Section - Selected */}
                    <div
                      className={`w-full p-3 rounded-lg border-2 text-left ${
                        isDark
                          ? "border-white bg-neutral-800"
                          : "border-neutral-900 bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isDark ? "bg-white" : "bg-neutral-900"
                          }`}
                        >
                          <Sparkles
                            className={`w-4 h-4 ${
                              isDark ? "text-neutral-900" : "text-white"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <h4
                              className={`text-sm font-normal ${
                                isDark ? "text-white" : "text-neutral-900"
                              }`}
                            >
                              Hero Section
                            </h4>
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full font-light ${
                                isDark
                                  ? "bg-neutral-700 text-neutral-400"
                                  : "bg-neutral-200 text-neutral-600"
                              }`}
                            >
                              Required
                            </span>
                          </div>
                          <p
                            className={`text-[11px] font-light ${
                              isDark ? "text-neutral-500" : "text-neutral-600"
                            }`}
                          >
                            Main headline and call-to-action
                          </p>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isDark ? "bg-white" : "bg-neutral-900"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isDark ? "text-neutral-900" : "text-white"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Features - Selected */}
                    <div
                      className={`w-full p-3 rounded-lg border-2 text-left ${
                        isDark
                          ? "border-white bg-neutral-800"
                          : "border-neutral-900 bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isDark ? "bg-white" : "bg-neutral-900"
                          }`}
                        >
                          <LayoutGrid
                            className={`w-4 h-4 ${
                              isDark ? "text-neutral-900" : "text-white"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`text-sm font-normal mb-0.5 ${
                              isDark ? "text-white" : "text-neutral-900"
                            }`}
                          >
                            Features
                          </h4>
                          <p
                            className={`text-[11px] font-light ${
                              isDark ? "text-neutral-500" : "text-neutral-600"
                            }`}
                          >
                            Highlight key features
                          </p>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isDark ? "bg-white" : "bg-neutral-900"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isDark ? "text-neutral-900" : "text-white"
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pricing - Not Selected */}
                    <div
                      className={`w-full p-3 rounded-lg border-2 text-left ${
                        isDark
                          ? "border-neutral-700 bg-neutral-900"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isDark ? "bg-neutral-800" : "bg-neutral-100"
                          }`}
                        >
                          <DollarSign
                            className={`w-4 h-4 ${
                              isDark ? "text-neutral-500" : "text-neutral-600"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`text-sm font-normal mb-0.5 ${
                              isDark ? "text-white" : "text-neutral-900"
                            }`}
                          >
                            Pricing
                          </h4>
                          <p
                            className={`text-[11px] font-light ${
                              isDark ? "text-neutral-500" : "text-neutral-600"
                            }`}
                          >
                            Pricing plans and features
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-normal mb-2 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                No-code editor
              </h3>
              <p
                className={`text-sm font-light leading-relaxed ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                AI generates. You customize. No coding needed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Preview Content Component
function PreviewContent({ isDark }: { isDark: boolean }) {
  return (
    <>
      <div className="space-y-2">
        <div
          className={`text-2xl font-light ${
            isDark ? "text-white" : "text-neutral-900"
          }`}
        >
          How will you use this project?
        </div>
        <div
          className={`text-sm font-light ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          Choose how you want to create and use your project
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Page Builder Option - Selected */}
        <div
          className={`p-6 rounded-2xl border-2 text-left transition-all ${
            isDark ? "border-white bg-neutral-800" : "border-neutral-900 bg-neutral-50"
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isDark ? "bg-white" : "bg-neutral-900"
              }`}
            >
              <LayoutGrid
                className={`w-6 h-6 ${isDark ? "text-neutral-900" : "text-white"}`}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3
                  className={`text-lg font-normal ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  Page Builder
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-light ${
                    isDark
                      ? "bg-neutral-700 text-neutral-300"
                      : "bg-neutral-200 text-neutral-700"
                  }`}
                >
                  Recommended
                </span>
              </div>
              <p
                className={`text-sm font-light ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                Create a beautiful landing page using our no-code builder with
                templates and sections
              </p>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDark ? "bg-white" : "bg-neutral-900"
              }`}
            >
              <Check
                className={`w-4 h-4 ${isDark ? "text-neutral-900" : "text-white"}`}
              />
            </div>
          </div>
        </div>

        {/* API Only Option - Not Selected */}
        <div
          className={`p-6 rounded-2xl border-2 text-left transition-all opacity-75 ${
            isDark
              ? "border-neutral-700 bg-neutral-900"
              : "border-neutral-200 bg-white"
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isDark ? "bg-neutral-800" : "bg-neutral-100"
              }`}
            >
              <Code
                className={`w-6 h-6 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3
                  className={`text-lg font-normal ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  API Only
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-light ${
                    isDark
                      ? "bg-neutral-800 text-neutral-500"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  PRO/ENTERPRISE
                </span>
              </div>
              <p
                className={`text-sm font-light ${
                  isDark ? "text-neutral-500" : "text-neutral-600"
                }`}
              >
                Use Lanorx API to collect emails on your own website. Skip the
                page builder.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div
        className={`flex items-start gap-3 p-4 rounded-lg ${
          isDark
            ? "bg-neutral-800 border border-neutral-700"
            : "bg-neutral-50 border border-neutral-200"
        }`}
      >
        <Star
          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
            isDark ? "text-neutral-400" : "text-neutral-500"
          }`}
          fill="currentColor"
        />
        <div>
          <div
            className={`text-sm font-normal mb-1 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Page Builder includes everything
          </div>
          <div
            className={`text-xs font-light ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Get a hosted landing page, email collection, analytics, and A/B
            testing - all without writing code
          </div>
        </div>
      </div>
    </>
  );
}
