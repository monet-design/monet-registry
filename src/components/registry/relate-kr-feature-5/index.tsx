"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    accent: "#3366FF",
    customer: "#10B981",
    churned: "#F59E0B",
    warning: "#EF4444",
  },
  dark: {
    accent: "#4D7AFF",
    customer: "#34D399",
    churned: "#FBBF24",
    warning: "#F87171",
  },
} as const;

const CUSTOMER_DATA = [
  { name: "Slack", health: "75 / 100", mrr: "$1,166", status: "Customer", renewal: "Today", renewalColor: "warning" },
  { name: "Carta", health: "81 / 100", mrr: "$700", status: "Customer", renewal: "in 5 days", renewalColor: "warning" },
  { name: "Loops", health: "100 / 100", mrr: "$800", status: "Customer", renewal: "in 10 days", renewalColor: "warning" },
  { name: "Framer", health: "95 / 100", mrr: "$416", status: "Customer", renewal: "in 19 days", renewalColor: "normal" },
  { name: "Sendbird", health: "30 / 100", mrr: "$2,100", status: "Customer", renewal: "in 30 days", renewalColor: "warning" },
  { name: "Rippling", health: "89 / 100", mrr: "$1,000", status: "Customer", renewal: "in 3 months", renewalColor: "normal" },
  { name: "Stripe", health: "75 / 100", mrr: "$1,665", status: "Customer", renewal: "in 3 months", renewalColor: "normal" },
];

const CHURNED_DATA = [
  { name: "Maven", reason: "Feature - Import", status: "Churned", mrr: "$800", csm: "Brian Kim" },
  { name: "Messagebird", reason: "Feature - Automation", status: "Churned", mrr: "$2,100", csm: "Joe Han" },
  { name: "Productboard", reason: "Pricing", status: "Churned", mrr: "$480", csm: "Brian Kim" },
  { name: "Twillio", reason: "Integration - Slack", status: "Churned", mrr: "$1,250", csm: "Jamie Scott" },
  { name: "Gong.io", reason: "Pricing", status: "Churned", mrr: "$416", csm: "Ray Karl" },
  { name: "Mixpanel", reason: "Integration - Figma", status: "Churned", mrr: "$640", csm: "Joe Han" },
];

interface RelateKrFeature5Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature5({
  mode = "light",
}: RelateKrFeature5Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Customer Management */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">고객 관리</h2>
            <p className="text-gray-600 mb-8">
              고객 정보를 한 곳에서 관리하고<br />
              재구매와 연장주기를 관리하세요.
            </p>

            {/* Customer Table */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Health</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">MRR</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Renewal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {CUSTOMER_DATA.map((customer) => (
                    <tr key={customer.name} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-gray-200 rounded" />
                          <span className="font-medium text-gray-900">{customer.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{customer.health}</td>
                      <td className="px-4 py-3 text-gray-900">{customer.mrr}</td>
                      <td className="px-4 py-3">
                        <span className="text-green-600">{customer.status}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={customer.renewalColor === "warning" ? "text-orange-500" : "text-gray-600"}>
                          {customer.renewal}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Right Column - Churned Customers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">영업 리사이클</h2>
            <p className="text-gray-600 mb-8">
              실패한 영업 기회와 이탈 고객 정보를<br />
              주기적으로 다시 검토하고 활용해보세요.
            </p>

            {/* Churned Table */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Churned Reason</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">MRR</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">CSM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {CHURNED_DATA.map((customer) => (
                    <tr key={customer.name} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-gray-200 rounded" />
                          <span className="font-medium text-gray-900">{customer.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{customer.reason}</td>
                      <td className="px-4 py-3">
                        <span className="text-orange-500">{customer.status}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-900">{customer.mrr}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-gray-200 rounded-full" />
                          <span className="text-gray-600">{customer.csm}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
