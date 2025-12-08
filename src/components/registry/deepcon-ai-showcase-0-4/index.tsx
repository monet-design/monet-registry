"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const CONTENT = {
  databaseExample: {
    title: "Example from our Database",
    docId: "Official Docs #7025",
    docTitle: "OpenAI Docs Latest",
    status: "Live",
    contextDepth: "Context Depth",
    scanType: "Deep Scan",
    result: {
      title: "Result",
      description:
        'GPT-5 API via client.responses.create() with model: "gpt-5". Supports input prompts, returns output_text. Import from "openai" package. Developer quickstart available on platform.openai.com...',
    },
    metrics: [
      { label: "Library docs", value: "130" },
      { label: "Web references", value: "45" },
      { label: "Context Token", value: "1.6M tokens" },
      { label: "Last Updated at", value: "Nov 3, 2025 PST" },
    ],
    deliverables: {
      query:
        '"OpenAI gpt-image-1 api with url output, square size, high quality. typescript"',
      items: [
        { name: "GPT image api guide", tokens: "2k tokens" },
        { name: "code examples", tokens: "500 tokens" },
        { name: "references", tokens: "17" },
      ],
    },
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface DeepconAiShowcase04Props {
  mode?: "light" | "dark";
}

export default function DeepconAiShowcase04({
  mode = "light",
}: DeepconAiShowcase04Props) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-white text-black">
      <motion.div
        className="mx-auto flex max-w-[976px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-4xl bg-white p-6 sm:p-10 text-left mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-black">
              {CONTENT.databaseExample.title}
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-medium text-gray-500">{CONTENT.databaseExample.docId}</span>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-black flex items-center gap-2">
                <span className="inline-block w-6 h-6 bg-black rounded-full" />
                {CONTENT.databaseExample.docTitle}
              </p>
            </div>
            <span className="border border-black/10 px-3 py-1 text-xs font-medium text-gray-500">
              {CONTENT.databaseExample.status}
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Context Depth */}
            <motion.div
              className="border border-black/10 bg-gray-50 p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{CONTENT.databaseExample.contextDepth}</span>
                <span>{CONTENT.databaseExample.scanType}</span>
              </div>
              <div className="mt-4 h-2 bg-gray-200">
                <motion.div
                  className="h-full bg-black"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Result */}
            <motion.div
              className="border border-black/10 bg-white p-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between text-sm font-medium text-black">
                <span>{CONTENT.databaseExample.result.title}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{CONTENT.databaseExample.result.description}</p>
            </motion.div>

            {/* Metrics */}
            {CONTENT.databaseExample.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between border border-black/10 bg-white px-4 py-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <span className="font-medium text-gray-500">{metric.label}</span>
                <span className="text-black">{metric.value}</span>
              </motion.div>
            ))}

            {/* Deliverables */}
            <motion.div
              className="border border-black/10 bg-white p-5 md:col-span-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm font-medium text-gray-500">
                Deliverables for query {CONTENT.databaseExample.deliverables.query}
              </span>
              <div className="mt-4 grid gap-3 text-sm text-gray-600 md:grid-cols-3">
                {CONTENT.databaseExample.deliverables.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border border-black/10 bg-gray-50 px-3 py-2">
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-500">{item.tokens}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
