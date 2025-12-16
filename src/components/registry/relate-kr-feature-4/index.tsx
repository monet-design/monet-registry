"use client";

import { motion } from "motion/react";
import { Inbox, Building2, Users, GitBranch, LayoutGrid } from "lucide-react";

const COLORS = {
  light: {
    accent: "#3366FF",
    potential: "#3366FF",
    pending: "#F59E0B",
    closedWon: "#10B981",
    lost: "#EF4444",
  },
  dark: {
    accent: "#4D7AFF",
    potential: "#4D7AFF",
    pending: "#FBBF24",
    closedWon: "#34D399",
    lost: "#F87171",
  },
} as const;

const PIPELINE_DATA = [
  { status: "Potential", count: 5, amount: "$28,400", color: "potential", deals: [
    { company: "Linear", amount: "$10,000 annual", person: "Jamie Scott", time: "3 min" },
    { company: "Pulley", amount: "$1,200 annual", person: "Brian Kim", time: "1 d" },
    { company: "Carta", amount: "$700 monthly", person: "Jamie Scott", time: "1 d" },
    { company: "Mailchimp", amount: "$3,800 annual", person: "", time: "" },
  ]},
  { status: "Pending", count: 3, amount: "$31,000", color: "pending", deals: [
    { company: "Framer", amount: "$5,000 annual", person: "Jamie Scott", time: "1 min" },
    { company: "Rippling", amount: "$12,000 annual", person: "Joe Han", time: "3 d" },
    { company: "Slack", amount: "$14,000 annual", person: "Brian Kim", time: "5 d" },
  ]},
  { status: "Closed Won", count: 3, amount: "$38,600", color: "closedWon", deals: [
    { company: "Loops", amount: "$800 monthly", person: "Brian Kim", time: "2 d" },
    { company: "Footprint", amount: "$8,000 annual", person: "Ray Karl", time: "4 d" },
    { company: "Stripe", amount: "$20,000", person: "Jamie Scott", time: "3 d" },
    { company: "Mintlify", amount: "$600 monthly", person: "", time: "" },
  ]},
  { status: "Lost", count: 2, amount: "$6,000", color: "lost", deals: [
    { company: "Supabase", amount: "$1,000 monthly", person: "Ray Karl", time: "" },
    { company: "Roam", amount: "$5,000 annual", person: "Ray Karl", time: "" },
  ]},
];

const NAV_ITEMS = [
  { icon: Inbox, label: "Inbox" },
  { icon: Building2, label: "Organizations" },
  { icon: Users, label: "People" },
  { icon: GitBranch, label: "Pipelines", active: true },
  { icon: LayoutGrid, label: "Views" },
];

interface RelateKrFeature4Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature4({
  mode = "light",
}: RelateKrFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            영업 파이프라인 관리
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            영업 파이프라인을 한 눈에 보고,<br />
            각 영업 단계별로 현황을 파악할 수 있습니다.
          </p>
        </motion.div>

        {/* Pipeline Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 bg-gray-50 border-r border-gray-200 p-4 hidden lg:block">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                  <span className="text-white text-sm font-bold">R</span>
                </div>
                <span className="font-semibold text-gray-900">relate</span>
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                      item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-x-auto">
              <div className="grid grid-cols-4 gap-4 min-w-[800px]">
                {PIPELINE_DATA.map((column) => (
                  <div key={column.status} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: colors[column.color as keyof typeof colors] }}
                        />
                        <span className="font-medium text-gray-900">{column.status}</span>
                        <span className="text-sm text-gray-500">{column.count}</span>
                      </div>
                      <span className="text-sm font-medium" style={{ color: colors[column.color as keyof typeof colors] }}>
                        {column.amount}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {column.deals.map((deal, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-4 bg-gray-200 rounded" />
                            <span className="font-medium text-gray-900 text-sm">{deal.company}</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{deal.amount}</p>
                          {deal.person && (
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <div className="w-4 h-4 bg-gray-200 rounded-full" />
                                <span>{deal.person}</span>
                              </div>
                              {deal.time && <span>{deal.time}</span>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
