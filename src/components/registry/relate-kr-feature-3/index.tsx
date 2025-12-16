"use client";

import { motion } from "motion/react";
import { MoreHorizontal } from "lucide-react";

const COLORS = {
  light: {
    accent: "#3366FF",
    figma: "#F24E1E",
    sendbird: "#742DDD",
    framer: "#0099FF",
  },
  dark: {
    accent: "#4D7AFF",
    figma: "#FF6B4E",
    sendbird: "#9B5DE5",
    framer: "#33BBFF",
  },
} as const;

const CONTACTS = [
  { company: "Figma", person: "Dylan Field / CEO", time: "12m ago", color: "figma" },
  { company: "Sendbird", person: "John S. Kim / CEO", time: "1hr ago", color: "sendbird" },
  { company: "Framer", person: "Oscar Carlsson / Growth", time: "2hr ago", color: "framer" },
];

const MESSAGES = [
  {
    from: "Chris Chae <chris@relatecrm.com>",
    to: "Dylan",
    time: "5 min ago",
    content: "Hi Dylan! Chris here from Relate team. Thanks for signing up for Relate...",
    isOutgoing: true,
  },
  {
    from: "Dylan Field <dylan@figma.com>",
    to: "",
    time: "a few seconds ago",
    content: "Hey Chris. Thanks for the email. Just booked a slot for tomorrow.",
    isOutgoing: false,
  },
];

interface RelateKrFeature3Props {
  mode?: "light" | "dark";
}

export default function RelateKrFeature3({
  mode = "light",
}: RelateKrFeature3Props) {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            고객 발굴과 접촉: 프로스펙팅
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            모든 잠재고객을 한 곳으로 모으고, 관리하세요. 세일즈 데이터<br className="hidden sm:block" />
            뿐만 아니라 마케팅과 프로덕트 데이터도 활용할 수 있습니다.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-4"
          >
            <div className="space-y-2">
              {CONTACTS.map((contact) => (
                <div
                  key={contact.company}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: colors[contact.color as keyof typeof colors] }}
                    >
                      {contact.company[0]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{contact.company}</p>
                      <p className="text-sm text-gray-500">{contact.person}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{contact.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Email Thread */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: colors.figma }}>
                  F
                </div>
                <span className="font-semibold">Figma</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              {MESSAGES.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg ${msg.isOutgoing ? "bg-blue-50" : "bg-gray-50"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{msg.from}</span>
                    <span className="text-xs text-gray-400">{msg.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{msg.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Activity</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">S</span>
                </div>
                <span>Segment added the Opportunity to Prospecting</span>
                <span className="text-gray-400 text-xs">5 min ago</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: colors.figma }}>
                F
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Figma</h3>
                <p className="text-sm text-gray-500">figma.com</p>
                <p className="text-sm text-gray-500">All-in-one design software</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">People (1)</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <span className="font-medium text-gray-900">Dylan Field</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Title</span>
                  <span className="text-gray-900">CEO & Co-Founder</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email</span>
                  <span className="text-gray-900">dylan@figma.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="text-blue-600">Prospecting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Source</span>
                  <span className="text-green-600">Segment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Assignee</span>
                  <span className="text-gray-900">Chris</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Priority</span>
                  <span className="text-gray-900">High</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
