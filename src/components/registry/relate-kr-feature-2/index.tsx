"use client";

import { motion } from "motion/react";
import { Search, Inbox, Building2, Users, GitBranch, LayoutGrid } from "lucide-react";

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

const PIPELINE_COLUMNS = [
  { name: "Potential", count: 8, amount: "$44,000", color: "potential" },
  { name: "Pending", count: 6, amount: "$62,300", color: "pending" },
  { name: "Closed Won", count: 4, amount: "$50,600", color: "closedWon" },
  { name: "Lost", count: 3, amount: "$12,000", color: "lost" },
];

const DEALS = {
  potential: [
    { company: "Linear", amount: "$10,000 annual", note: "Scheduled a meeting for next week", person: "Jamie Scott", time: "5 sec" },
    { company: "Deel", amount: "$500 monthly", note: "Sent an introductory email, awaiting reply", person: "Ray Karl", time: "2 min" },
    { company: "Docker", amount: "$350 monthly", note: "Followed up on our previous discussion", person: "Brian Kim", time: "45 min" },
  ],
  pending: [
    { company: "Framer", amount: "$5,000 annual", note: "Scheduled a meeting for next week", person: "Jamie Scott", time: "1 min" },
    { company: "Sendbird", amount: "$20,000 annual", note: "Did a product demo, set up follow up call", person: "Ray Karl", time: "30 min" },
  ],
  closedWon: [
    { company: "Loops", amount: "$800 monthly", note: "Scheduled a meeting for next week", person: "Brian Kim", time: "2 d" },
    { company: "Stripe", amount: "$20,000", note: "Scheduled a meeting for next week", person: "Jamie Scott", time: "3 d" },
  ],
};

const LOGOS = [
  { name: "imweb", logo: "imweb" },
  { name: "veluga", logo: "veluga" },
  { name: "SNOW", logo: "SNOW" },
  { name: "publy", logo: "publy" },
  { name: "Mendable", logo: "Mendable" },
  { name: "Hexlant", logo: "Hexlant" },
  { name: "AIMMO", logo: "AIMMO" },
  { name: "SELECTSTAR", logo: "SELECTSTAR" },
];

const NAV_ITEMS = [
  { icon: Inbox, label: "Inbox" },
  { icon: Building2, label: "Organizations" },
  { icon: Users, label: "People" },
  { icon: GitBranch, label: "Pipelines", active: true },
  { icon: LayoutGrid, label: "Views" },
];

interface RelateKrFeature2Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature2({
  mode = "light",
}: RelateKrFeature2Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CRM Dashboard UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-16"
        >
          <img
            src="/scraped/relate-kr-2025-12-15/sections/section-2.png"
            alt="Relate CRM Pipeline Dashboard"
            className="w-full"
          />
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8">B2B 팀들이 매일 사용하는 세일즈 CRM 소프트웨어</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {LOGOS.map((logo) => (
              <div key={logo.name} className="text-gray-400 font-semibold text-lg">
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DealCard({ deal }: { deal: { company: string; amount: string; note: string; person: string; time: string } }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <span className="font-medium text-gray-900">{deal.company}</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{deal.amount}</p>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{deal.note}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gray-200 rounded-full" />
          <span>{deal.person}</span>
        </div>
        <span>{deal.time}</span>
      </div>
    </div>
  );
}
