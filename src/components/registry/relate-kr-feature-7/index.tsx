"use client";

import { motion } from "motion/react";
import { Inbox, Building2, Users, LayoutGrid, PieChart } from "lucide-react";

const COLORS = {
  light: {
    accent: "#3366FF",
    positive: "#10B981",
    closing: "#F59E0B",
    customer: "#10B981",
    nurturing: "#8B5CF6",
  },
  dark: {
    accent: "#4D7AFF",
    positive: "#34D399",
    closing: "#FBBF24",
    customer: "#34D399",
    nurturing: "#A78BFA",
  },
} as const;

const ORG_DATA = [
  { name: "Docker", website: "docker.com", yc: "S10", status: "Potential", statusColor: "accent" },
  { name: "Linear", website: "linear.app", yc: "", status: "Closing", statusColor: "closing" },
  { name: "Sendbird", website: "sendbird.com", yc: "W16", status: "Customer", statusColor: "customer" },
  { name: "Amplitude", website: "amplitude.com", yc: "W12", status: "Customer", statusColor: "customer" },
  { name: "Loops", website: "loops.so", yc: "W22", status: "Nurturing", statusColor: "nurturing" },
];

const NAV_ITEMS = [
  { icon: Inbox, label: "Inbox" },
  { icon: Building2, label: "Organizations", active: true },
  { icon: Users, label: "People" },
  { icon: LayoutGrid, label: "Views" },
  { icon: PieChart, label: "Pipeline" },
];

interface RelateKrFeature7Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature7({
  mode = "light",
}: RelateKrFeature7Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card - Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            {/* Revenue Stats */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-gray-900">$175,000</span>
                <span className="text-sm text-green-500 bg-green-50 px-2 py-1 rounded">+4%</span>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="relative h-40 mb-6">
              <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                <path
                  d="M0,120 Q100,100 150,80 T250,60 T350,40 L400,35"
                  fill="none"
                  stroke={colors.accent}
                  strokeWidth="2"
                />
                <circle cx="250" cy="60" r="6" fill={colors.accent} />
                <text x="245" y="45" fontSize="10" fill={colors.accent}>$43k</text>
              </svg>
            </div>

            {/* Stats */}
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">Target win rate</p>
                <p className="font-semibold text-gray-900">29%</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Target revenue</p>
                <p className="font-semibold text-gray-900">$600,000</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Cycle 기능을 통해 영업팀의 모멘텀을 가속화하세요.
              </h3>
              <p className="text-gray-600 text-sm">
                우리 팀의 목표 수치를 일원화하고<br />
                팀내 강력한 모멘텀을 만들어보세요.
              </p>
            </div>
          </motion.div>

          {/* Right Card - Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Relate은 CRM의 기본적인 모든 것을 충족합니다.
              </h3>
              <p className="text-gray-600 text-sm">
                더 많은 기능보다는, 더 나은 경험에 집중합니다.
              </p>
            </div>

            {/* Mini Dashboard */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
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
                    {NAV_ITEMS.map((item) => (
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

                {/* Organizations Table */}
                <div className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">BUILDING</span>
                      <span className="text-sm font-semibold">Organizations</span>
                      <span className="text-xs text-gray-400">36</span>
                    </div>
                    <button className="text-xs text-blue-600 border border-blue-200 rounded px-2 py-1">
                      + Deal
                    </button>
                  </div>

                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-100">
                        <th className="text-left py-2 font-medium">Name</th>
                        <th className="text-left py-2 font-medium">Website</th>
                        <th className="text-left py-2 font-medium">YC</th>
                        <th className="text-left py-2 font-medium">Lead Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ORG_DATA.map((org) => (
                        <tr key={org.name} className="border-b border-gray-50">
                          <td className="py-2">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-4 bg-gray-200 rounded" />
                              <span className="font-medium text-gray-900">{org.name}</span>
                            </div>
                          </td>
                          <td className="py-2 text-gray-500">{org.website}</td>
                          <td className="py-2 text-gray-500">{org.yc}</td>
                          <td className="py-2">
                            <span style={{ color: colors[org.statusColor as keyof typeof colors] }}>
                              {org.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
