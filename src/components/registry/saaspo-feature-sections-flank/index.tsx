"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0a0a0a",
  cardBackground: "#1a1a1a",
  tabBackground: "#1f1f1f",
  tabBorder: "#333333",
  textPrimary: "#ffffff",
  textSecondary: "#888888",
  textMuted: "#666666",
  accent: "#7c5cff",
  accentGreen: "#22c55e",
  divider: "#2a2a2a",
} as const;

/**
 * 탭 데이터
 */
const DEFAULT_TABS = [
  "Answer questions",
  "Generate documents",
  "Review & negotiate contracts",
  "Complete questionnaires",
];

/**
 * 채팅 메시지 데이터
 */
const DEFAULT_MESSAGES = [
  {
    id: 1,
    sender: "Flank Agent",
    isBot: true,
    time: "09:18 PM",
    content: "Hello, I'm the Flank Agent. I'm here to help you with your questions!",
  },
  {
    id: 2,
    sender: "lili",
    isBot: false,
    time: "08:21 AM",
    content: "How do we manage password security?",
    avatar: "L",
  },
  {
    id: 3,
    sender: "Flank Agent",
    isBot: true,
    time: "08:21 AM",
    content:
      "At Berlin Enterprises GmbH, we manage password security by requiring all personnel, including employees and contractors, to have unique accounts and passwords. These passwords must be kept confidential and not shared with anyone. All user and system account passwords should be a minimum of eight characters and complex, and each account must use unique passwords not utilized elsewhere.",
  },
];

/**
 * Integration 로고 데이터
 */
const DEFAULT_INTEGRATIONS = [
  { name: "Notion", color: "#ffffff" },
  { name: "Slack", color: "#4A154B" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Gmail", color: "#EA4335" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Zapier", color: "#FF4A00" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Hash, MessageSquare, FileText, Briefcase, ClipboardList, Mail, MessageCircle } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  isBot: boolean;
  time: string;
  content: string;
  avatar?: string;
}

interface Integration {
  name: string;
  color: string;
}

interface SaaspoFeatureSectionsFlankProps {
  title?: React.ReactNode;
  description?: string;
  tabs?: string[];
  channelName?: string;
  messages?: Message[];
  integrations?: Integration[];
}

// Integration Icon Component
function IntegrationIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, React.ReactNode> = {
    Notion: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.04c-.42-.327-.98-.56-2.056-.467l-12.69.793c-.466.047-.56.28-.374.466l1.719 1.374zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.047.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.747.327-.747.933zm14.337.746c.093.42 0 .84-.42.887l-.7.14v10.264c-.607.327-1.167.514-1.634.514-.747 0-.933-.234-1.493-.933l-4.572-7.186v6.953l1.447.327s0 .84-1.167.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.62c-.094-.42.14-1.026.793-1.073l3.456-.233 4.758 7.28v-6.44l-1.213-.14c-.094-.513.28-.887.746-.933l3.227-.186zM2.008 1.12l13.217-.84c1.633-.14 2.052.093 2.752.606l3.8 2.66c.467.327.607.747.607 1.26v16.037c0 1.027-.374 1.634-1.68 1.727l-15.457.933c-.98.047-1.447-.093-1.96-.746L.774 19.757c-.56-.747-.793-1.307-.793-1.96V2.94c0-.84.374-1.54 1.307-1.634l.72-.187z"/>
      </svg>
    ),
    Slack: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
    WhatsApp: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    Gmail: (
      <Mail className="w-5 h-5" />
    ),
    Figma: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zM8.148 24c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.588 4.539zm-.001-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019c1.665 0 3.019-1.355 3.019-3.019v-3.019H8.147zM8.148 8.981c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981H8.148zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019S6.483 7.51 8.148 7.51h3.117V1.471H8.148zM8.148 15.02c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.981H8.148zm0-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.355 3.019 3.019 3.019h3.117V7.51H8.148zM15.852 15.02h-4.588V6.04h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-3.117-7.51v6.039h3.117c1.665 0 3.019-1.355 3.019-3.02s-1.355-3.019-3.019-3.019h-3.117z"/>
      </svg>
    ),
    Zapier: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.876 7.584v2.016h-3.456v3.456h-2.016v-3.456H6.948V7.584h3.456V4.128h2.016v3.456h3.456zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/>
      </svg>
    ),
  };

  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: color === "#ffffff" ? "#333" : color }}
    >
      <span className="text-white">{icons[name] || <MessageSquare className="w-5 h-5" />}</span>
    </div>
  );
}

// Bot Avatar Component
function BotAvatar() {
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: `linear-gradient(135deg, ${COLORS.accent} 0%, #5b3fd4 100%)` }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
        <path
          d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// User Avatar Component
function UserAvatar({ initial }: { initial: string }) {
  return (
    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600">
      <span className="text-white text-sm font-medium">{initial}</span>
    </div>
  );
}

export default function SaaspoFeatureSectionsFlank({
  title = (
    <>
      <span className="text-white font-semibold">Flank agents handle routine workflows autonomously</span>{" "}
      <span style={{ color: COLORS.textSecondary }}>
        from reviewing & drafting contracts to filling out forms & answering FAQs. They integrate into your existing
        systems, with built-in security, audit trails, and enterprise-grade control.
      </span>
    </>
  ),
  description,
  tabs = DEFAULT_TABS,
  channelName = "ai-supervision",
  messages = DEFAULT_MESSAGES,
  integrations = DEFAULT_INTEGRATIONS,
}: SaaspoFeatureSectionsFlankProps) {
  return (
    <section
      className="relative w-full py-20 px-6 lg:px-16 overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:pt-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-normal">{title}</h2>
          </motion.div>

          {/* Right Column - UI Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full text-sm border"
                  style={{
                    backgroundColor: COLORS.tabBackground,
                    borderColor: COLORS.tabBorder,
                    color: COLORS.textPrimary,
                  }}
                >
                  {tab}
                </motion.div>
              ))}
            </div>

            {/* Chat Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: COLORS.cardBackground }}
            >
              {/* Channel Header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: COLORS.divider }}
              >
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4" style={{ color: COLORS.textSecondary }} />
                  <span className="font-medium" style={{ color: COLORS.textPrimary }}>
                    {channelName}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-[#1a1a1a]" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-[#1a1a1a]" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-[#1a1a1a]" />
                  </div>
                  <span className="ml-2 text-sm" style={{ color: COLORS.textSecondary }}>
                    10
                  </span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-4">
                {/* First Bot Message */}
                {messages[0] && (
                  <div className="flex gap-3">
                    <BotAvatar />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm" style={{ color: COLORS.textPrimary }}>
                          {messages[0].sender}
                        </span>
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                          style={{ backgroundColor: "#333", color: COLORS.textSecondary }}
                        >
                          APP
                        </span>
                        <span className="text-xs" style={{ color: COLORS.textMuted }}>
                          {messages[0].time}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: COLORS.textSecondary }}>
                        {messages[0].content}
                      </p>
                    </div>
                  </div>
                )}

                {/* Today Divider */}
                <div className="flex items-center justify-center py-2">
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: COLORS.divider, color: COLORS.textSecondary }}
                  >
                    Today
                  </span>
                </div>

                {/* User Message */}
                {messages[1] && (
                  <div className="flex gap-3">
                    <UserAvatar initial={messages[1].avatar || messages[1].sender[0].toUpperCase()} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm" style={{ color: COLORS.textPrimary }}>
                          {messages[1].sender}
                        </span>
                        <span className="text-xs" style={{ color: COLORS.textMuted }}>
                          {messages[1].time}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: COLORS.textPrimary }}>
                        {messages[1].content}
                      </p>
                    </div>
                  </div>
                )}

                {/* Second Bot Message */}
                {messages[2] && (
                  <div className="flex gap-3">
                    <BotAvatar />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm" style={{ color: COLORS.textPrimary }}>
                          {messages[2].sender}
                        </span>
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                          style={{ backgroundColor: "#333", color: COLORS.textSecondary }}
                        >
                          APP
                        </span>
                        <span className="text-xs" style={{ color: COLORS.textMuted }}>
                          {messages[2].time}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
                        {messages[2].content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-end gap-4 mt-6"
            >
              <span className="text-sm" style={{ color: COLORS.textSecondary }}>
                Integrated in:
              </span>
              <div className="flex gap-2">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <IntegrationIcon name={integration.name} color={integration.color} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
