"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Mail, BarChart3, Smartphone, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import "./font.css";

// CUSTOMIZATION
export const CUSTOMIZATION = {};

interface Account {
  id: string;
  email: string;
  status: "critical" | "good" | "moderate";
  avatar?: string;
}

interface SecurityToolsMobileProps {
  mode?: "light" | "dark";
  badge?: string;
  headline?: string;
  tabs?: Array<{
    id: string;
    label: string;
    icon: "accounts" | "analytics" | "device";
  }>;
  onDeviceAccounts?: Account[];
  otherAccounts?: Account[];
}

const defaultTabs = [
  { id: "accounts", label: "ACCOUNTS", icon: "accounts" as const },
  { id: "analytics", label: "ANALYTICS", icon: "analytics" as const },
  { id: "device", label: "DEVICE", icon: "device" as const },
];

const defaultOnDeviceAccounts: Account[] = [
  { id: "1", email: "filipe@significa.pt", status: "critical" },
  { id: "2", email: "hello@amfilipealmeida.com", status: "good" },
  { id: "3", email: "sim.stark@gmail.com", status: "good" },
];

const defaultOtherAccounts: Account[] = [
  { id: "4", email: "harmon.lubowitz@rodriguez.tv", status: "moderate" },
];

function TabIcon({ icon, isActive }: { icon: string; isActive: boolean }) {
  const iconClass = `w-5 h-5 ${isActive ? "text-slate-800" : "text-slate-400"}`;

  switch (icon) {
    case "accounts":
      return <Mail className={iconClass} />;
    case "analytics":
      return <BarChart3 className={iconClass} />;
    case "device":
      return <Smartphone className={iconClass} />;
    default:
      return <Mail className={iconClass} />;
  }
}

function StatusBadge({ status }: { status: Account["status"] }) {
  const colors = {
    critical: "text-red-500",
    good: "text-emerald-500",
    moderate: "text-amber-500",
  };

  const labels = {
    critical: "Critical",
    good: "Good",
    moderate: "Moderate",
  };

  return (
    <span className={`text-xs ${colors[status]}`}>
      Status: {labels[status]}
    </span>
  );
}

function AccountItem({ account }: { account: Account }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between py-3 px-1"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <span className="text-xs font-medium text-slate-600">
            {account.email.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-slate-800 font-medium">
            {account.email}
          </span>
          <StatusBadge status={account.status} />
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300" />
    </motion.div>
  );
}

function PhoneMockup({
  activeTab,
  onDeviceAccounts,
  otherAccounts,
}: {
  activeTab: string;
  onDeviceAccounts: Account[];
  otherAccounts: Account[];
}) {
  return (
    <div className="relative mx-auto w-[280px]">
      {/* Phone frame */}
      <div className="relative bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
        {/* Notch area */}
        <div className="h-6 bg-white flex items-center justify-center">
          <div className="w-20 h-5 bg-slate-100 rounded-b-xl" />
        </div>

        {/* Screen content */}
        <div className="bg-white px-4 pb-4">
          {/* Isometric illustration */}
          <div className="relative h-32 mb-4 overflow-hidden rounded-lg bg-slate-50">
            <Image
              src="/registry/security-tools-mobile/devices-isometric.png"
              alt="Devices illustration"
              fill
              className="object-cover"
            />
            {/* Overlay dots */}
            <div className="absolute top-2 right-2 flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            </div>
          </div>

          {/* On Device Section */}
          <div className="mb-4">
            <h4 className="text-[10px] font-semibold text-slate-500 tracking-wider mb-2">
              ON DEVICE
            </h4>
            <div className="divide-y divide-slate-100">
              {onDeviceAccounts.map((account, index) => (
                <motion.div
                  key={account.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccountItem account={account} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Others Section */}
          <div>
            <h4 className="text-[10px] font-semibold text-slate-500 tracking-wider mb-2">
              OTHERS
            </h4>
            <div className="divide-y divide-slate-100">
              {otherAccounts.map((account, index) => (
                <motion.div
                  key={account.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (onDeviceAccounts.length + index) * 0.1 }}
                >
                  <AccountItem account={account} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FAB Button */}
        <motion.div
          className="absolute bottom-6 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5 text-slate-800" />
        </motion.div>

        {/* Home indicator */}
        <div className="h-8 bg-white flex items-center justify-center">
          <div className="w-32 h-1 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function SecurityToolsMobile({
  mode = "light",
  badge = "SECURITY TOOLS",
  headline = "Our tools to power up\nyour mobile security.",
  tabs = defaultTabs,
  onDeviceAccounts = defaultOnDeviceAccounts,
  otherAccounts = defaultOtherAccounts,
}: SecurityToolsMobileProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "accounts");

  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: "#F3F6FB" }}>
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Shield className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-medium tracking-widest text-slate-500">
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-instrument-serif text-3xl md:text-4xl text-center text-slate-800 mb-10 leading-snug"
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-8 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-1 group"
            >
              <div
                className={`p-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white shadow-md"
                    : "bg-transparent hover:bg-white/50"
                }`}
              >
                <TabIcon icon={tab.icon} isActive={activeTab === tab.id} />
              </div>
              {activeTab === tab.id && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] font-semibold tracking-wider text-slate-600"
                >
                  {tab.label}
                </motion.span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <PhoneMockup
            activeTab={activeTab}
            onDeviceAccounts={onDeviceAccounts}
            otherAccounts={otherAccounts}
          />
        </motion.div>
      </div>
    </section>
  );
}
