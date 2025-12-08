"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    barPrimary: "from-black to-gray-800",
    barSecondary: "from-gray-400 to-gray-300",
  },
  dark: {
    barPrimary: "from-white to-gray-200",
    barSecondary: "from-gray-600 to-gray-500",
  },
} as const;

const CONTENT = {
  badge: {
    href: "https://github.com/opactorai/context-bench",
  },
  benchmarkTitle: "Context Benchmark Results",
  benchmarkDescription:
    "Measuring how effectively MCP servers provide context for implementing complex AI framework workflows",
  benchmarkResults: [
    { name: "Deepcon", score: 18, total: 20, percentage: 90, isHighlight: true },
    { name: "Context7", score: 13, total: 20, percentage: 65, isHighlight: false },
    { name: "Nia", score: 11, total: 20, percentage: 55, isHighlight: false },
    { name: "Exa", score: 5, total: 20, percentage: 25, isHighlight: false },
    { name: "Sonnet 4.5", score: 0, total: 20, percentage: 0, isHighlight: false },
  ],
  benchmarkAnalysis: {
    title: "Deepcon leads with 90% accuracy",
    description:
      "Tested across 20 real-world scenarios implementing Autogen, LangGraph, OpenAI Agents, Agno, and OpenRouter SDK. Each scenario evaluated by 3 LLMs (GPT-5, Grok-4, Deepseek-v3.2) for completeness and relevance. Deepcon provided sufficient context in 18/20 scenarios, outperforming all competitors by 25+ percentage points.",
  },
  tokenUsage: [
    { name: "Context7", value: 5626, isHighlight: false },
    { name: "Exa", value: 4753, isHighlight: false },
    { name: "Deepcon", value: 2365, isHighlight: true },
    { name: "Nia", value: 1873, isHighlight: false },
  ],
  efficiencyData: [
    { name: "Exa", value: 1.06 },
    { name: "Context7", value: 2.33 },
    { name: "Nia", value: 5.91 },
    { name: "Deepcon", value: 7.65 },
  ],
  tokenEfficiencyNote: {
    title: "Token efficiency matters.",
    description:
      "Deepcon achieves 90% success with only 2,365 avg tokens—less than half of Context7's 5,626 tokens at 65% success.",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Github } from "lucide-react";

interface DeepconAiBenchmark02Props {
  mode?: "light" | "dark";
}

export default function DeepconAiBenchmark02({
  mode = "light",
}: DeepconAiBenchmark02Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-white text-black">
      <motion.div
        className="w-full max-w-4xl p-8 sm:p-10 text-left mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <a
            href={CONTENT.badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-3 mb-3 group"
          >
            <Github className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-tight text-black group-hover:underline whitespace-nowrap">
              {CONTENT.benchmarkTitle}
            </h3>
          </a>
          <p className="text-sm sm:text-base text-gray-600">{CONTENT.benchmarkDescription}</p>
        </div>

        {/* Benchmark Bars */}
        <div className="space-y-5">
          {CONTENT.benchmarkResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-36 sm:w-44 flex items-center gap-3 flex-shrink-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-xs font-bold">{result.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-black">{result.name}</span>
                </div>
                <div className="flex-1 relative">
                  <div className={`h-12 sm:h-14 relative overflow-hidden ${result.isHighlight ? "bg-gradient-to-r from-gray-200 to-gray-100" : "bg-gray-100"}`}>
                    <div
                      className={`h-full bg-gradient-to-r ${result.isHighlight ? colors.barPrimary : colors.barSecondary}`}
                      style={{ width: `${result.percentage}%` }}
                    />
                    <div className="absolute inset-0 flex items-center px-4">
                      <span className={`text-sm sm:text-base font-bold ${result.percentage > 20 ? "text-white" : "text-black"}`}>
                        {result.score}/{result.total}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-16 sm:w-20 text-right flex-shrink-0">
                  <span className={`text-lg sm:text-2xl font-bold ${result.isHighlight ? "text-black" : result.percentage > 50 ? "text-gray-600" : "text-gray-400"}`}>
                    {result.percentage}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analysis Section */}
        <div className="mt-8 pt-6 border-t border-black/10 space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-1 h-24 bg-black flex-shrink-0" />
            <div>
              <p className="text-base sm:text-lg font-semibold text-black mb-2">
                {CONTENT.benchmarkAnalysis.title}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                {CONTENT.benchmarkAnalysis.description}
              </p>
            </div>
          </div>

          {/* Charts */}
          <div className="py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Token Usage Chart */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-black mb-8 text-center">
                  Average Token Usage per Task
                </h4>
                <div
                  className="flex items-end justify-center gap-8 sm:gap-12 mx-auto"
                  style={{ height: 320, maxWidth: 600 }}
                >
                  {CONTENT.tokenUsage.map((item, index) => {
                    const maxValue = Math.max(...CONTENT.tokenUsage.map((i) => i.value));
                    const heightPercent = (item.value / maxValue) * 100;
                    return (
                      <div key={index} className="flex flex-col items-center" style={{ height: "100%", width: 80 }}>
                        <div className="w-full relative" style={{ height: "calc(100% - 60px)" }}>
                          <motion.div
                            className={`absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t ${item.isHighlight ? colors.barPrimary : colors.barSecondary}`}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${heightPercent}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                          >
                            <div className="absolute -top-8 left-0 right-0 text-center whitespace-nowrap">
                              <span className={`text-xs sm:text-sm font-bold ${item.isHighlight ? "text-black" : "text-gray-600"}`}>
                                {item.value.toLocaleString()}
                              </span>
                            </div>
                          </motion.div>
                        </div>
                        <div className="mt-4 text-center h-[40px] flex items-center justify-center">
                          <div className={`text-xs sm:text-sm font-semibold ${item.isHighlight ? "text-black" : "text-gray-600"}`}>
                            {item.name}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Efficiency Chart */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-black mb-8 text-center">
                  Efficiency (Accuracy per 1K Tokens)
                </h4>
                <div className="relative mx-auto" style={{ height: 320, maxWidth: 600 }}>
                  <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-gray-500">
                    <span>8.8</span>
                    <span>4.4</span>
                    <span>0</span>
                  </div>
                  <div className="ml-12 relative" style={{ height: 260 }}>
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200" />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
                    </div>
                    <svg
                      className="absolute inset-0 w-full h-full overflow-visible"
                      viewBox="0 0 400 260"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d={`M 0 ${260 - (CONTENT.efficiencyData[0].value / 8.8) * 260} L 133.33 ${260 - (CONTENT.efficiencyData[1].value / 8.8) * 260} L 266.66 ${260 - (CONTENT.efficiencyData[2].value / 8.8) * 260} L 400 ${260 - (CONTENT.efficiencyData[3].value / 8.8) * 260}`}
                        stroke="black"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                      {CONTENT.efficiencyData.map((item, index) => {
                        const x = (index / 3) * 400;
                        const y = 260 - (item.value / 8.8) * 260;
                        const isLast = index === CONTENT.efficiencyData.length - 1;
                        return (
                          <motion.circle
                            key={index}
                            cx={x}
                            cy={y}
                            r="4"
                            fill={isLast ? "black" : "white"}
                            stroke="black"
                            strokeWidth="1.5"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                          />
                        );
                      })}
                    </svg>
                  </div>
                  <div className="ml-12 mt-2 flex justify-between text-xs sm:text-sm font-semibold">
                    {CONTENT.efficiencyData.map((item, index) => (
                      <span key={index} className={index === CONTENT.efficiencyData.length - 1 ? "text-black" : "text-gray-600"}>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 -mt-2">
            <span className="font-semibold text-black">{CONTENT.tokenEfficiencyNote.title}</span>
            <br />
            {CONTENT.tokenEfficiencyNote.description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
