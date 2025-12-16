"use client";

import { motion } from "motion/react";
import { Inbox, Building2, Users, GitBranch, LayoutGrid } from "lucide-react";

const COLORS = {
  light: {
    accent: "#3366FF",
    potential: "#3366FF",
    won: "#10B981",
  },
  dark: {
    accent: "#4D7AFF",
    potential: "#4D7AFF",
    won: "#34D399",
  },
} as const;

const INTEGRATIONS = [
  { name: "slack", label: "Slack" },
  { name: "intercom", label: "INTERCOM" },
  { name: "segment", label: "Segment" },
  { name: "amplitude", label: "Amplitude" },
  { name: "stripe", label: "stripe" },
  { name: "mixpanel", label: "mixpanel" },
];

const NAV_ITEMS = [
  { icon: Inbox, label: "Inbox" },
  { icon: Building2, label: "Organizations" },
  { icon: Users, label: "People" },
  { icon: GitBranch, label: "Pipelines", active: true },
  { icon: LayoutGrid, label: "Views" },
];

interface RelateKrFeature6Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature6({
  mode = "light",
}: RelateKrFeature6Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <p className="text-lg text-gray-600">
            Relate은 더 많은 기능보다는, 더 나은 경험에 집중합니다.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card - Simple UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">심플하고 깔끔한 UI</h3>
            <p className="text-gray-600 mb-8">
              심플하고 사용하기 쉬운 CRM으로 시작하고, 강력한 자동화 및 워크플로우를<br />
              추가할 수 있습니다.
            </p>

            {/* Mini Dashboard Preview */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="flex">
                {/* Mini Sidebar */}
                <div className="w-32 bg-gray-50 border-r border-gray-200 p-3 hidden sm:block">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                      <span className="text-white text-xs font-bold">R</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">relate</span>
                  </div>
                  <nav className="space-y-1">
                    {NAV_ITEMS.slice(0, 5).map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs ${
                          item.active ? "bg-blue-50 text-blue-600" : "text-gray-500"
                        }`}
                      >
                        <item.icon className="w-3 h-3" />
                        {item.label}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Mini Pipeline */}
                <div className="flex-1 p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.potential }} />
                        <span className="text-xs font-medium">Potential</span>
                        <span className="text-xs text-gray-400">5</span>
                        <span className="text-xs ml-auto" style={{ color: colors.potential }}>$28,400</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-2 text-xs">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-3 h-3 bg-gray-200 rounded" />
                          <span className="font-medium">Linear</span>
                        </div>
                        <p className="text-gray-500">$10,000 annual</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.won }} />
                        <span className="text-xs font-medium">Won</span>
                        <span className="text-xs text-gray-400">3</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded p-2 text-xs">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-3 h-3 bg-gray-200 rounded" />
                          <span className="font-medium">Loops</span>
                        </div>
                        <p className="text-gray-500">$800 monthly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            {/* Integration Logos */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {INTEGRATIONS.map((integration) => (
                <div
                  key={integration.name}
                  className="bg-gray-50 rounded-xl p-6 flex items-center justify-center"
                >
                  <span className="text-gray-600 font-semibold text-sm">{integration.label}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              B2B SaaS 를 위해 만들어진 플랫폼
            </h3>
            <p className="text-gray-600">
              지메일, 슬랙, 인터콤, 믹스패널, <span className="text-blue-600">스트라이프</span> 등의 툴과 연동됩니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
