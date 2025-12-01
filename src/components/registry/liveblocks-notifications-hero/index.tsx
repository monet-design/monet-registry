"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#FFFFFF", // Primary button 배경
    accentText: "#000000", // Primary button 텍스트
    iconGradientFrom: "#026841", // 3D 알림 아이콘 그라데이션 시작
    iconGradientTo: "#024B28", // 3D 알림 아이콘 그라데이션 끝
    iconHighlight: "#03A65A", // 3D 알림 아이콘 하이라이트
    iconDark: "#014220", // 3D 알림 아이콘 어두운 부분
    mentionColor: "#8B5CF6", // Mention 강조 색상 (보라)
    mentionColorAlt: "#EC4899", // Mention 강조 색상 대체 (핑크)
    timeAccent: "#A855F7", // Just now 텍스트 색상
  },
  dark: {
    accent: "#FFFFFF",
    accentText: "#000000",
    iconGradientFrom: "#026841",
    iconGradientTo: "#024B28",
    iconHighlight: "#03A65A",
    iconDark: "#014220",
    mentionColor: "#8B5CF6",
    mentionColorAlt: "#EC4899",
    timeAccent: "#A855F7",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Code, Users, Accessibility } from "lucide-react";

interface NotificationItem {
  id: string;
  name: string;
  avatar: string;
  message: string;
  mentions?: { name: string; color: string }[];
}

interface EmailNotificationProps {
  senderName?: string;
  senderEmail?: string;
  recipientName?: string;
  ccText?: string;
  companyName?: string;
  greeting?: string;
  bodyText?: string;
  linkText?: string;
  commentAuthor?: string;
  commentAvatar?: string;
  commentText?: string;
  buttonText?: string;
  footerText?: string;
}

interface LiveblocksNotificationsHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  features?: { icon: React.ReactNode; label: string }[];
  emailNotification?: EmailNotificationProps;
  notifications?: NotificationItem[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

function NotificationIcon3D({ colors }: { colors: typeof COLORS.light }) {
  return (
    <div className="relative w-24 h-24 mb-8">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.iconGradientFrom} />
            <stop offset="100%" stopColor={colors.iconGradientTo} />
          </linearGradient>
          <linearGradient id="bellHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.iconHighlight} />
            <stop offset="100%" stopColor={colors.iconGradientFrom} />
          </linearGradient>
        </defs>
        {/* Back face (darker) */}
        <path
          d="M25 35 L25 60 Q25 75 50 80 Q75 75 75 60 L75 35 Q75 20 50 15 Q25 20 25 35 Z"
          fill={colors.iconDark}
          transform="translate(8, 8)"
        />
        {/* Main bell body */}
        <path
          d="M25 35 L25 60 Q25 75 50 80 Q75 75 75 60 L75 35 Q75 20 50 15 Q25 20 25 35 Z"
          fill="url(#bellGradient)"
        />
        {/* Highlight edge */}
        <path
          d="M50 15 Q75 20 75 35 L75 40 Q55 25 50 15 Z"
          fill="url(#bellHighlight)"
          opacity="0.6"
        />
        {/* Bell clapper */}
        <circle cx="58" cy="85" r="6" fill={colors.iconDark} />
        <circle cx="50" cy="82" r="6" fill="url(#bellGradient)" />
      </svg>
    </div>
  );
}

function EmailCard({
  senderName = "Alicia via Acme Inc.",
  senderEmail = "To: Pierre, Cc: Design team on Acme Inc.",
  companyName = "Acme Inc.",
  greeting = "Hello Pierre,",
  bodyText = 'Alicia left a comment in "Comments - Design explorations".',
  commentAuthor = "Alicia",
  commentAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alicia",
  commentText = "We should show this to the rest of the team!",
  buttonText = "View comment",
  footerText = "Turn off comment notifications for this file",
}: EmailNotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm"
    >
      {/* Email header */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-900">{senderName}</p>
        <p className="text-xs text-gray-500">{senderEmail}</p>
      </div>

      {/* Email body */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-gray-900">{companyName}</h4>
        <p className="text-sm text-gray-700">{greeting}</p>
        <p className="text-sm text-gray-700">
          {bodyText.split('"')[0]}
          {bodyText.includes('"') && (
            <>
              &quot;<span className="font-semibold">{bodyText.split('"')[1]}</span>&quot;
              {bodyText.split('"')[2]}
            </>
          )}
        </p>

        {/* Comment preview */}
        <div className="bg-gray-50 rounded-lg p-3 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={commentAvatar}
              alt={commentAuthor}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium text-gray-900">{commentAuthor}</span>
          </div>
          <p className="text-sm text-gray-700">{commentText}</p>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors mt-4">
          {buttonText}
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-3">{footerText}</p>
      </div>
    </motion.div>
  );
}

function NotificationsInbox({
  colors,
  notifications = [
    {
      id: "1",
      name: "Alicia",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alicia",
      message: "We should show this to the rest of the team!",
    },
    {
      id: "2",
      name: "Olivier",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivier",
      message: "How does this control look on mobile?",
    },
    {
      id: "3",
      name: "Nimesh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nimesh",
      message: "The color scheme is on point!",
    },
    {
      id: "4",
      name: "Vincent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vincent",
      message: "Great job on this section",
      mentions: [
        { name: "@Pierre", color: "#8B5CF6" },
        { name: "@Marc", color: "#EC4899" },
      ],
    },
    {
      id: "5",
      name: "Adrien",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adrien",
      message: "Let's continue refining this iteration and consider feedback...",
    },
  ],
}: {
  colors: typeof COLORS.light;
  notifications?: NotificationItem[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white rounded-xl shadow-2xl p-4 w-full max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-900">Notifications</h3>
        <span className="text-xs text-gray-400">({notifications.length})</span>
      </div>

      {/* Notification list */}
      <div className="space-y-1">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            className={`flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors ${
              index === notifications.length - 1 ? "opacity-50" : ""
            }`}
          >
            <img
              src={notification.avatar}
              alt={notification.name}
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {notification.name}
                </span>
                <span className="text-xs" style={{ color: colors.timeAccent }}>Just now</span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {notification.message}
                {notification.mentions?.map((mention, i) => (
                  <span key={i} style={{ color: mention.color }} className="font-medium">
                    {" "}
                    {mention.name}
                  </span>
                ))}
                {notification.mentions && <span className="text-gray-900">!</span>}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function LiveblocksNotificationsHero({
  mode = "dark",
  badge = "NOTIFICATIONS",
  title = "The notification system\ndesigned for collaboration",
  primaryButtonText = "Sign up for free",
  secondaryButtonText = "Read the docs",
  features = [
    { icon: <Users className="w-4 h-4" />, label: "Realtime" },
    { icon: <Code className="w-4 h-4" />, label: "Customizable" },
    { icon: <Accessibility className="w-4 h-4" />, label: "Accessible" },
  ],
  emailNotification,
  notifications,
  onPrimaryClick,
  onSecondaryClick,
}: LiveblocksNotificationsHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-16 md:pt-24 px-4">
        {/* 3D Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NotificationIcon3D colors={colors} />
        </motion.div>

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm tracking-[0.2em] text-gray-400 mb-4"
        >
          {badge}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center leading-tight mb-8 whitespace-pre-line"
        >
          {title}
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <button
            onClick={onPrimaryClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            style={{ backgroundColor: colors.accent, color: colors.accentText }}
          >
            {primaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onSecondaryClick}
            className="flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 transition-colors"
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-6 mb-12 md:mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              {feature.icon}
              <span>{feature.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Cards section */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Email notification card */}
            <div className="flex justify-center md:justify-end">
              <EmailCard {...emailNotification} />
            </div>

            {/* Notifications inbox card */}
            <div className="flex justify-center md:justify-start">
              <NotificationsInbox colors={colors} notifications={notifications} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
