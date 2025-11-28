"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Bug,
  Link2,
  ShieldAlert,
  Share2,
  Inbox,
  ChevronLeft,
  Paperclip,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
}

interface EmailFeatureShowcaseProps {
  headlinePrefix?: string;
  headlineAccent?: string;
  headlineSuffix?: string;
  features?: Feature[];
  defaultActiveFeature?: string;
}

const defaultFeatures: Feature[] = [
  {
    id: "debug-views",
    title: "Debug Views",
    description:
      "HELO exposes an SMTP server and catches the outgoing emails from your application instead of sending them to their actual recipient.",
    icon: <Bug className="h-5 w-5" />,
  },
  {
    id: "broken-link-checker",
    title: "Broken Link Checker",
    description:
      "Automatically scan all links in your emails and get instant feedback on broken or invalid URLs before you send.",
    icon: <Link2 className="h-5 w-5" />,
  },
  {
    id: "spam-report",
    title: "Spam Report",
    description:
      "Get detailed SpamAssassin reports for your emails. See exactly what triggers spam filters and how to fix them.",
    icon: <ShieldAlert className="h-5 w-5" />,
  },
  {
    id: "sharing",
    title: "Sharing",
    description:
      "Share emails with your team or clients via unique URLs. Perfect for design reviews and collaboration.",
    icon: <Share2 className="h-5 w-5" />,
  },
  {
    id: "remote-mailboxes",
    title: "Remote Mailboxes",
    description:
      "Connect to IMAP mailboxes and pull in emails from staging or production environments for testing.",
    icon: <Inbox className="h-5 w-5" />,
  },
];

function FeatureItem({
  feature,
  isActive,
  onClick,
}: {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <h3
          className={`text-lg font-semibold transition-colors duration-300 ${
            isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {feature.title}
        </h3>
      </div>
      <AnimatePresence>
        {isActive && feature.description && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden text-sm leading-relaxed text-gray-500"
          >
            {feature.description}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}

function MacOSWindowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Gradient decoration behind */}
      <div className="absolute -bottom-8 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-300 opacity-80 blur-sm" />

      {/* Window frame */}
      <div className="relative rounded-lg border border-gray-200 bg-white shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}

function EmailListSidebar() {
  return (
    <div className="w-48 border-r border-gray-100 bg-gray-50/50 p-3">
      {/* Back button */}
      <div className="mb-3 flex items-center gap-1 text-xs text-gray-400">
        <ChevronLeft className="h-3 w-3" />
        <span>Back</span>
      </div>

      {/* Project title */}
      <div className="mb-4">
        <h4 className="text-xs font-medium text-gray-700">
          PHP Package Development
        </h4>
        <div className="mt-1 flex items-center gap-1">
          <Share2 className="h-3 w-3 text-gray-400" />
        </div>
      </div>

      {/* Email list */}
      <div className="space-y-2">
        <div className="rounded-md bg-blue-50 p-2">
          <p className="text-xs font-medium text-gray-800">
            Debugging mails in HELO
          </p>
          <p className="mt-0.5 text-[10px] text-gray-500">
            marcel@beyondcode.de
          </p>
        </div>

        <div className="p-2">
          <p className="text-xs text-gray-600">Email verification</p>
          <p className="mt-0.5 text-[10px] text-gray-400">
            marceltest@beyondco.de
          </p>
        </div>

        <div className="p-2">
          <p className="text-xs text-gray-600">Reset Password Notification</p>
          <p className="mt-0.5 text-[10px] text-gray-400">m.pociot@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function EmailDetailView() {
  return (
    <div className="flex-1 p-4">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Debugging mails in HELO
          </h3>
          <p className="mt-1 text-[10px] text-gray-500">
            Sent at: 03/31/2020, 12:24 PM &nbsp;&nbsp; Size: 44.29 kB
          </p>
        </div>
        <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
          No broken links
        </span>
      </div>

      {/* Email fields */}
      <div className="mb-4 space-y-2 text-xs">
        <div className="flex">
          <span className="w-20 text-gray-400">From</span>
          <span className="text-gray-700">Laravel &lt;hello@beyondcode.de&gt;</span>
        </div>
        <div className="flex">
          <span className="w-20 text-gray-400">To</span>
          <span className="text-gray-700">marcel@beyondcode.de</span>
        </div>
        <div className="flex">
          <span className="w-20 text-gray-400">Message ID</span>
          <span className="font-mono text-[10px] text-gray-500">
            &lt;3868bd04196a6a...
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-20 text-gray-400">Attachments</span>
          <span className="flex items-center gap-1 text-gray-700">
            <Paperclip className="h-3 w-3" />
            index.php
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-3 flex gap-4 border-b border-gray-100 text-[10px]">
        {["HTML", "HTML-Source", "Text", "Raw", "Debug", "Headers", "Links"].map(
          (tab) => (
            <button
              key={tab}
              className={`pb-2 ${
                tab === "Debug"
                  ? "border-b-2 border-blue-500 font-medium text-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Content */}
      <div className="rounded bg-gray-50 p-3">
        <pre className="text-[10px] leading-relaxed text-gray-600">
          <code>{`email::markdown

@component('mail::message')
# Hi {{ $user->name }}

Your order has been shipped!

@component('mail::button', ['url' => $url])
View Order
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent`}</code>
        </pre>
      </div>
    </div>
  );
}

function CodeSnippetPreview() {
  return (
    <div className="absolute -bottom-4 right-8 w-48 overflow-hidden rounded-lg border border-gray-700 bg-[#1e1e3f] shadow-xl">
      <div className="p-3">
        <pre className="text-[8px] leading-relaxed">
          <code>
            <span className="text-purple-400">$mailer</span>
            <span className="text-white"> = </span>
            <span className="text-blue-400">AppMailer</span>
            <span className="text-yellow-400">::</span>
            <span className="text-green-400">STIS</span>
            {"\n"}
            <span className="text-gray-500">&quot;title&quot;</span>
            <span className="text-white"> =&gt; </span>
            <span className="text-orange-300">&quot;name&quot;</span>
            {"\n"}
            <span className="text-gray-500">&quot;email&quot;</span>
            {"\n"}
            <span className="text-gray-500">&quot;sent&quot;</span>
            {"\n"}
            {"\n"}
            <span className="text-purple-400">children</span>
            <span className="text-yellow-400">: [</span>
            {"\n"}
            <span className="text-gray-500">  &quot;name&quot;</span>
            <span className="text-white"> =&gt; </span>
            <span className="text-orange-300">&quot;password&quot;</span>
            {"\n"}
            <span className="text-gray-500">  &quot;token&quot;</span>
            {"\n"}
            <span className="text-yellow-400">]</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

function BrokenLinkDetailView() {
  const links = [
    {
      url: "https://example.com/dashboard",
      status: "200 OK",
      ok: true,
    },
    {
      url: "https://beyondcode.de/pricing",
      status: "200 OK",
      ok: true,
    },
    {
      url: "https://example.com/old-page",
      status: "404 Not Found",
      ok: false,
    },
    {
      url: "https://beyondcode.de/docs/getting-started",
      status: "200 OK",
      ok: true,
    },
    {
      url: "https://example.com/broken-link",
      status: "500 Server Error",
      ok: false,
    },
  ];

  return (
    <div className="flex-1 p-4">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Link Analysis</h3>
          <p className="mt-1 text-[10px] text-gray-500">
            Found 5 links in email &nbsp;&nbsp; 2 broken links detected
          </p>
        </div>
        <span className="rounded bg-red-100 px-2 py-0.5 text-[10px] font-medium text-red-700">
          2 broken links
        </span>
      </div>

      <div className="space-y-2">
        {links.map((link, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between rounded-lg border p-2 ${
              link.ok
                ? "border-green-100 bg-green-50/50"
                : "border-red-100 bg-red-50/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`h-2 w-2 rounded-full ${
                  link.ok ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className="max-w-[200px] truncate font-mono text-[10px] text-gray-600">
                {link.url}
              </span>
            </div>
            <span
              className={`text-[10px] font-medium ${
                link.ok ? "text-green-600" : "text-red-600"
              }`}
            >
              {link.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpamReportDetailView() {
  const rules = [
    { name: "MISSING_DATE", score: 1.0, description: "Missing Date header" },
    {
      name: "HTML_IMAGE_RATIO",
      score: 0.5,
      description: "HTML has low text to image ratio",
    },
    { name: "BAYES_50", score: 0.8, description: "Bayes spam probability" },
    {
      name: "SPF_PASS",
      score: -0.5,
      description: "SPF: sender matches SPF record",
    },
    {
      name: "DKIM_SIGNED",
      score: -0.3,
      description: "Message has DKIM signature",
    },
  ];

  const totalScore = rules.reduce((sum, r) => sum + r.score, 0);

  return (
    <div className="flex-1 p-4">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            SpamAssassin Report
          </h3>
          <p className="mt-1 text-[10px] text-gray-500">
            Analyzed against 156 spam rules
          </p>
        </div>
        <div className="text-right">
          <span
            className={`rounded px-2 py-0.5 text-[10px] font-medium ${
              totalScore < 3
                ? "bg-green-100 text-green-700"
                : totalScore < 5
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            Score: {totalScore.toFixed(1)} / 5.0
          </span>
          <p className="mt-1 text-[9px] text-gray-400">Threshold: 5.0</p>
        </div>
      </div>

      <div className="mb-3 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"
          style={{ width: `${Math.min((totalScore / 5) * 100, 100)}%` }}
        />
      </div>

      <div className="space-y-1.5">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded border border-gray-100 bg-gray-50/50 px-2 py-1.5"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-10 text-right font-mono text-[10px] font-medium ${
                  rule.score > 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {rule.score > 0 ? "+" : ""}
                {rule.score.toFixed(1)}
              </span>
              <span className="font-mono text-[10px] font-medium text-gray-700">
                {rule.name}
              </span>
            </div>
            <span className="text-[9px] text-gray-400">{rule.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SharingDetailView() {
  return (
    <div className="flex-1 p-4">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Share Email</h3>
        <p className="mt-1 text-[10px] text-gray-500">
          Create a shareable link for this email
        </p>
      </div>

      <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-3">
        <label className="mb-1.5 block text-[10px] font-medium text-gray-600">
          Shareable Link
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value="https://helo.app/share/3a8f2b..."
            className="flex-1 rounded border border-gray-200 bg-white px-2 py-1.5 font-mono text-[10px] text-gray-600"
          />
          <button className="rounded bg-blue-500 px-2 py-1.5 text-[10px] font-medium text-white hover:bg-blue-600">
            Copy
          </button>
        </div>
      </div>

      <div className="mb-4 space-y-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked className="rounded" />
          <span className="text-[10px] text-gray-600">
            Include HTML preview
          </span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked className="rounded" />
          <span className="text-[10px] text-gray-600">Include headers</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded" />
          <span className="text-[10px] text-gray-600">
            Password protect link
          </span>
        </label>
      </div>

      <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-3">
        <p className="text-[10px] text-blue-700">
          <span className="font-medium">Tip:</span> Shared links expire after 7
          days by default. Premium users can set custom expiration dates.
        </p>
      </div>
    </div>
  );
}

function RemoteMailboxDetailView() {
  const mailboxes = [
    {
      name: "Production Server",
      email: "notifications@app.com",
      status: "connected",
      unread: 12,
    },
    {
      name: "Staging Environment",
      email: "staging@app.com",
      status: "connected",
      unread: 3,
    },
    {
      name: "Development",
      email: "dev@localhost",
      status: "disconnected",
      unread: 0,
    },
  ];

  return (
    <div className="flex-1 p-4">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Remote Mailboxes
          </h3>
          <p className="mt-1 text-[10px] text-gray-500">
            Connect to external IMAP mailboxes
          </p>
        </div>
        <button className="rounded bg-gray-900 px-2 py-1 text-[10px] font-medium text-white hover:bg-gray-800">
          + Add Mailbox
        </button>
      </div>

      <div className="space-y-2">
        {mailboxes.map((mb, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-3"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  mb.status === "connected" ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <Inbox
                  className={`h-4 w-4 ${
                    mb.status === "connected"
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                />
              </div>
              <div>
                <p className="text-[11px] font-medium text-gray-800">
                  {mb.name}
                </p>
                <p className="text-[10px] text-gray-400">{mb.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {mb.unread > 0 && (
                <span className="rounded-full bg-blue-500 px-1.5 py-0.5 text-[9px] font-medium text-white">
                  {mb.unread}
                </span>
              )}
              <span
                className={`text-[10px] ${
                  mb.status === "connected"
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                {mb.status === "connected" ? "Connected" : "Offline"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-lg border border-dashed border-gray-200 p-3 text-center">
        <p className="text-[10px] text-gray-400">
          Supports IMAP, Gmail, Outlook, and custom mail servers
        </p>
      </div>
    </div>
  );
}

function AppPreview({ activeFeature }: { activeFeature: string }) {
  const renderDetailView = () => {
    switch (activeFeature) {
      case "broken-link-checker":
        return <BrokenLinkDetailView />;
      case "spam-report":
        return <SpamReportDetailView />;
      case "sharing":
        return <SharingDetailView />;
      case "remote-mailboxes":
        return <RemoteMailboxDetailView />;
      default:
        return <EmailDetailView />;
    }
  };

  return (
    <div className="relative">
      <MacOSWindowFrame>
        <div className="flex">
          <EmailListSidebar />
          {renderDetailView()}
        </div>
      </MacOSWindowFrame>
      {activeFeature === "debug-views" && <CodeSnippetPreview />}
    </div>
  );
}

export default function EmailFeatureShowcase({
  headlinePrefix = "The ",
  headlineAccent = "swiss-army-knife",
  headlineSuffix = " of\nemail testing and debugging.",
  features = defaultFeatures,
  defaultActiveFeature = "debug-views",
}: EmailFeatureShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState(defaultActiveFeature);

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="whitespace-pre-line text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {headlinePrefix}
            <span className="text-[#2563eb]">{headlineAccent}</span>
            {headlineSuffix}
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
          {/* Left: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                feature={feature}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </motion.div>

          {/* Right: App preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <AppPreview activeFeature={activeFeature} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
