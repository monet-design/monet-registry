"use client";

import { motion } from "motion/react";

interface CoderabbitAiFeature4Props {
  mode?: "light" | "dark";
}

export default function CoderabbitAiFeature4({
  mode = "dark",
}: CoderabbitAiFeature4Props) {
  return (
    <section className="relative w-full bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Agentic Chat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-zinc-900 p-8"
          >
            <h3 className="text-2xl font-bold text-white">
              Ship faster with agentic Chat!
            </h3>
            <p className="mt-4 text-zinc-400">
              Get advice or kick off multi-step tasks with a simple chat. From generating code and unit tests to creating issues and resolving feedback, our agentic workflows help you ship faster. The more you interact, the more it learns.
            </p>
          </motion.div>

          {/* Code Diff Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-zinc-900 p-6"
          >
            <div className="rounded-lg bg-zinc-800 overflow-hidden">
              <div className="bg-zinc-700 px-4 py-2 text-xs text-zinc-400">
                utils/validation.py
              </div>
              <div className="p-4 font-mono text-xs">
                <div className="flex">
                  <span className="w-6 text-zinc-600">-</span>
                  <span className="bg-red-900/30 text-red-400 flex-1 px-2 rounded">
                    return [x.strip() for x in items]
                  </span>
                </div>
                <div className="flex mt-1">
                  <span className="w-6 text-zinc-600">+</span>
                  <span className="bg-green-900/30 text-green-400 flex-1 px-2 rounded">
                    return [x.strip() for x in items if x]
                  </span>
                </div>
              </div>
              <div className="border-t border-zinc-700 p-4 text-xs text-zinc-400">
                <p>The list comprehension should filter out empty strings to prevent processing blank items later.</p>
              </div>
            </div>

            {/* Chat Thread */}
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2">
                <div className="rounded bg-zinc-800 px-3 py-2 text-xs">
                  <span className="font-semibold text-white">sambuilds</span>
                  <span className="ml-2 text-zinc-500">1 min ago</span>
                  <span className="ml-2 rounded bg-zinc-700 px-2 py-0.5 text-zinc-400">Author</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                @coderabbitai Won&apos;t this break backward compatibility? Some functions might expect...
              </p>
              <div className="flex items-start gap-2">
                <div className="rounded bg-zinc-800 px-3 py-2 text-xs">
                  <span className="font-semibold text-orange-400">coderabbitai</span>
                  <span className="ml-2 text-zinc-500">1 min ago</span>
                  <span className="ml-2 rounded bg-zinc-700 px-2 py-0.5 text-zinc-400">bot</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                Sounds good! The original implementation maintains the expected behavior.
              </p>
            </div>
          </motion.div>

          {/* More Signal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-zinc-900 p-8"
          >
            <h3 className="text-2xl font-bold text-white">
              More signal. Less noise.
            </h3>
            <p className="mt-4 text-zinc-400">
              Automatically runs popular static analyzers, linters, and security tools combined with Gen-AI&apos;s advanced reasoning models. Code graph analysis enhances context for deeper code understanding, delivering best-in-class signal-to-noise ratio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
