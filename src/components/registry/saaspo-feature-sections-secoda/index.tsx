"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Home,
  Inbox,
  Sparkles,
  Users,
  FolderOpen,
  DollarSign,
  Database,
  Plug,
  MessageSquare,
  Activity,
  Shield,
  Zap,
  BarChart3,
  ChevronUp,
  ChevronDown,
  HelpCircle,
  Settings,
  ThumbsUp,
  Copy,
  RefreshCw,
  BarChart2,
} from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#06b6d4", // Cyan/Teal
    accentLight: "#ccfbf1",
    pink: "#fce7f3",
    purple: "#ede9fe",
    mint: "#ccfbf1",
    gray: "#f3f4f6",
  },
} as const;

// ============================================================================
// TYPES
// ============================================================================

interface FeatureCard {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
}

interface SaaspoFeatureSectionsSecodaProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
  accordionItems?: AccordionItem[];
}

// ============================================================================
// DEFAULT DATA
// ============================================================================

const defaultFeatures: FeatureCard[] = [
  {
    icon: <Search className="w-5 h-5 text-pink-600" />,
    iconBg: COLORS.light.pink,
    title: "Discover",
    description: "AI powered search across your entire data landscape.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
    iconBg: COLORS.light.purple,
    title: "Catalog",
    description: "Single source of truth for all data lineage, context, and docs.",
  },
  {
    icon: <Activity className="w-5 h-5 text-teal-600" />,
    iconBg: COLORS.light.mint,
    title: "Monitor",
    description: "Reduce risk and ensure the integrity of your data.",
  },
  {
    icon: <Shield className="w-5 h-5 text-gray-600" />,
    iconBg: COLORS.light.gray,
    title: "Govern",
    description: "Enforce policies and enable secure access to data at scale.",
  },
];

const defaultAccordionItems: AccordionItem[] = [
  {
    id: "ai",
    title: "AI",
    description:
      "Let Secoda AI take the grunt work out of your day. Uncover insights, automate repetitive tasks, and focus on what really matters.",
    ctaText: "Learn more",
  },
  {
    id: "search",
    title: "Search",
    description:
      "Find any data asset instantly with our powerful search capabilities across your entire data ecosystem.",
    ctaText: "Learn more",
  },
  {
    id: "lineage",
    title: "Lineage",
    description:
      "Understand the complete journey of your data from source to consumption with visual lineage mapping.",
    ctaText: "Learn more",
  },
  {
    id: "chrome",
    title: "Chrome extension",
    description:
      "Access Secoda directly from your browser without switching contexts. Search, discover, and document data on the go.",
    ctaText: "Learn more",
  },
];

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function FeatureCardComponent({ feature, index }: { feature: FeatureCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: feature.iconBg }}
      >
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

function AccordionItemComponent({
  item,
  isOpen,
  onClick,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2 rounded-lg"
      >
        <span className="text-xl font-semibold text-gray-900">{item.title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-2">
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                {item.ctaText}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DashboardUI() {
  const mrrData = [
    { month: "Sep", value: 5000 },
    { month: "Oct", value: 6500 },
    { month: "Nov", value: 8000 },
    { month: "Dec", value: 9500 },
    { month: "Jan", value: 11000 },
    { month: "Feb", value: 14000 },
    { month: "Mar", value: 17000 },
    { month: "Apr", value: 20000 },
    { month: "May", value: 24000 },
    { month: "Jun", value: 28000 },
    { month: "Jul", value: 39000 },
    { month: "Aug", value: 35000 },
  ];

  const maxValue = 40000;

  const sidebarItems = [
    { icon: Search, label: "Search", active: false },
    { icon: Home, label: "Home", active: false },
    { icon: Inbox, label: "Inbox", active: false, badge: "99+" },
    { icon: Sparkles, label: "Secoda AI", active: true },
  ];

  const teamItems = [
    { icon: Users, label: "Browse teams" },
    { icon: FolderOpen, label: "General" },
    { icon: DollarSign, label: "Finance" },
    { icon: Database, label: "Data Platform" },
  ];

  const workspaceItems = [
    { icon: Plug, label: "Integrations" },
    { icon: MessageSquare, label: "Requests", badge: "4" },
    { icon: Activity, label: "Monitors" },
    { icon: Shield, label: "Policies" },
    { icon: Zap, label: "Automations" },
    { icon: BarChart3, label: "Analytics" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
    >
      <div className="flex h-[420px]">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Truffle Shop Demo</span>
              <ChevronDown className="w-3 h-3 text-gray-500 ml-auto" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-2">
            {sidebarItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs ${
                  item.active ? "bg-cyan-50 text-cyan-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-[10px] bg-gray-200 px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}

            <div className="mt-3 mb-1 px-2 text-[10px] font-medium text-gray-500 uppercase">
              Teams
            </div>
            {teamItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </div>
            ))}

            <div className="mt-3 mb-1 px-2 text-[10px] font-medium text-gray-500 uppercase">
              Workspace
            </div>
            {workspaceItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-[10px] bg-gray-200 px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-2 border-t border-gray-200 flex items-center justify-between">
            <HelpCircle className="w-4 h-4 text-gray-500" />
            <Settings className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-gray-900">Secoda AI</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-gray-400" />
              <Copy className="w-4 h-4 text-gray-400" />
              <RefreshCw className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            {/* Key Insights */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Insights:</h4>
              <ul className="text-[10px] text-gray-600 space-y-1 list-disc list-inside">
                <li>The data covers the period from September 2022 to August 2023 (most recent data available in our system)</li>
                <li>Our MRR shows a strong upward trend over this period, with particularly strong growth in Q2 2023</li>
                <li>Peak MRR was achieved in July 2023 at $39,232.06, which represents a 305% increase from September 2022</li>
                <li>There was a slight decrease in August 2023, though this remains our second-highest month for the year</li>
              </ul>
            </div>

            {/* Chart */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 mb-3">
                Monthly Recurring Revenue (Sep 2022 - Aug 2023)
              </h4>
              <div className="flex items-end gap-1 h-32">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-full text-[8px] text-gray-500 pr-1">
                  <span>40,000</span>
                  <span>35,000</span>
                  <span>30,000</span>
                  <span>25,000</span>
                  <span>20,000</span>
                  <span>15,000</span>
                  <span>10,000</span>
                  <span>5,000</span>
                </div>
                {/* Bars */}
                <div className="flex-1 flex items-end gap-1">
                  {mrrData.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(item.value / maxValue) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="w-full rounded-t"
                        style={{ backgroundColor: COLORS.light.accent }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <span className="text-xs text-gray-400">Ask Secoda AI...</span>
              <div className="ml-auto flex items-center gap-1">
                <BarChart2 className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[10px] text-gray-500 bg-white px-1.5 py-0.5 rounded">Chart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Cyan Element */}
      <div
        className="h-16 w-40 absolute -bottom-4 -right-4 rounded-full blur-2xl opacity-50"
        style={{ backgroundColor: COLORS.light.accent }}
      />
    </motion.div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function SaaspoFeatureSectionsSecoda({
  title = "Meet the AI-first data governance platform",
  subtitle = "Search and AI built from the ground up with governance at its core. Secoda enables secure data access and decisions across your business.",
  features = defaultFeatures,
  accordionItems = defaultAccordionItems,
}: SaaspoFeatureSectionsSecodaProps) {
  const [openAccordion, setOpenAccordion] = useState<string>("ai");

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <FeatureCardComponent key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-3xl p-6 md:p-10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Accordion */}
            <div className="space-y-2">
              {accordionItems.map((item) => (
                <AccordionItemComponent
                  key={item.id}
                  item={item}
                  isOpen={openAccordion === item.id}
                  onClick={() => setOpenAccordion(openAccordion === item.id ? "" : item.id)}
                />
              ))}
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <DashboardUI />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
