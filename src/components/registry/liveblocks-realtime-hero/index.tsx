"use client";

import { motion } from "motion/react";
import { ArrowRight, Code, Accessibility, Users } from "lucide-react";
import "./font.css";

// Types
interface NotificationItem {
  id: string;
  avatar: string;
  name: string;
  time: string;
  message: string;
  mentions?: { name: string; color: string }[];
}

interface EmailPreviewData {
  sender: string;
  senderCompany: string;
  recipient: string;
  cc: string;
  companyName: string;
  greeting: string;
  body: string;
  commentAuthor: string;
  commentAvatar: string;
  comment: string;
  ctaText: string;
  footerText: string;
}

interface FeatureBadge {
  icon: React.ReactNode;
  label: string;
}

interface LiveblocksRealtimeHeroProps {
  badge?: string;
  headline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  features?: FeatureBadge[];
  notifications?: NotificationItem[];
  emailPreview?: EmailPreviewData;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// 3D Notification Icon Component
function NotificationIcon3D() {
  return (
    <div className="relative w-24 h-24 mx-auto">
      {/* Back layer - darker */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl"
        style={{
          backgroundColor: "#003D1A",
          transform: "translate(-50%, -50%) translateZ(-20px) rotateX(15deg) rotateY(-15deg)",
        }}
      />
      {/* Front layer - lighter with gradient */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #00D9A6 0%, #00A878 50%, #006B4D 100%)",
          transform: "translate(-40%, -60%) rotateX(15deg) rotateY(-15deg)",
          boxShadow: "0 20px 40px rgba(0, 100, 60, 0.4)",
        }}
      />
    </div>
  );
}

// Avatar Component
function Avatar({ src, name, size = 32 }: { src: string; name: string; size?: number }) {
  return (
    <div
      className="rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-200 to-gray-300"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
        }}
      />
    </div>
  );
}

// Notification Item Component
function NotificationItemCard({
  notification,
  index,
}: {
  notification: NotificationItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
      className="flex items-start gap-3 py-3"
    >
      <Avatar src={notification.avatar} name={notification.name} size={32} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-gray-900">{notification.name}</span>
          <span className="text-xs text-gray-400">{notification.time}</span>
        </div>
        <p className="text-sm text-gray-600 mt-0.5">
          {notification.message}
          {notification.mentions?.map((mention, i) => (
            <span key={i} style={{ color: mention.color }} className="font-medium">
              {" "}
              @{mention.name}
            </span>
          ))}
          {notification.mentions && notification.mentions.length > 0 && " !"}
        </p>
      </div>
    </motion.div>
  );
}

// Email Preview Card Component
function EmailPreviewCard({ data }: { data: EmailPreviewData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-sm"
    >
      {/* Email Header */}
      <div className="px-6 pt-5 pb-4 border-b border-gray-100">
        <p className="text-sm font-medium text-gray-900">{data.sender}</p>
        <p className="text-xs text-gray-500 mt-0.5">
          To: {data.recipient}, Cc: {data.cc}
        </p>
      </div>

      {/* Email Body */}
      <div className="px-6 py-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{data.companyName}</h3>
        <p className="text-sm text-gray-700 mb-3">{data.greeting}</p>
        <p className="text-sm text-gray-600 mb-5">{data.body}</p>

        {/* Comment Box */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Avatar src={data.commentAvatar} name={data.commentAuthor} size={24} />
            <span className="text-sm font-medium text-gray-900">{data.commentAuthor}</span>
          </div>
          <p className="text-sm text-gray-600">{data.comment}</p>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          {data.ctaText}
        </button>
      </div>

      {/* Footer */}
      <div className="px-6 pb-5">
        <p className="text-xs text-gray-400">{data.footerText}</p>
      </div>
    </motion.div>
  );
}

// Notifications Panel Component
function NotificationsPanel({ notifications }: { notifications: NotificationItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-sm"
    >
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">Notifications</span>
          <span className="text-xs text-gray-400">({notifications.length})</span>
        </div>
      </div>

      {/* Notification List */}
      <div className="px-5 pb-4 divide-y divide-gray-50 max-h-80 overflow-hidden">
        {notifications.map((notification, index) => (
          <NotificationItemCard key={notification.id} notification={notification} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

// Default data
const defaultFeatures: FeatureBadge[] = [
  { icon: <Users size={16} />, label: "Realtime" },
  { icon: <Code size={16} />, label: "Customizable" },
  { icon: <Accessibility size={16} />, label: "Accessible" },
];

const defaultNotifications: NotificationItem[] = [
  {
    id: "1",
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "Alicia",
    time: "Just now",
    message: "We should show this to the rest of the team!",
  },
  {
    id: "2",
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "Olivier",
    time: "Just now",
    message: "How does this control look on mobile?",
  },
  {
    id: "3",
    avatar: "https://i.pravatar.cc/100?img=3",
    name: "Nimesh",
    time: "Just now",
    message: "The color scheme is on point!",
  },
  {
    id: "4",
    avatar: "https://i.pravatar.cc/100?img=4",
    name: "Vincent",
    time: "Just now",
    message: "Great job on this section",
    mentions: [
      { name: "Pierre", color: "#E879A9" },
      { name: "Marc", color: "#E879A9" },
    ],
  },
  {
    id: "5",
    avatar: "https://i.pravatar.cc/100?img=5",
    name: "Adrien",
    time: "Just now",
    message: "Let's continue refining this iteration and consider feedback...",
  },
];

const defaultEmailPreview: EmailPreviewData = {
  sender: "Alicia via Acme Inc.",
  senderCompany: "Acme Inc.",
  recipient: "Pierre",
  cc: "Design team on Acme Inc.",
  companyName: "Acme Inc.",
  greeting: "Hello Pierre,",
  body: 'Alicia left a comment in "Comments - Design explorations".',
  commentAuthor: "Alicia",
  commentAvatar: "https://i.pravatar.cc/100?img=1",
  comment: "We should show this to the rest of the team!",
  ctaText: "View comment",
  footerText: "Turn off comment notifications for this file",
};

// Main Component
export default function LiveblocksRealtimeHero({
  badge = "NOTIFICATIONS",
  headline = "The notification system\ndesigned for collaboration",
  primaryButtonText = "Sign up for free",
  secondaryButtonText = "Read the docs",
  features = defaultFeatures,
  notifications = defaultNotifications,
  emailPreview = defaultEmailPreview,
  onPrimaryClick,
  onSecondaryClick,
}: LiveblocksRealtimeHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:px-8 sm:pt-20 lg:pt-24">
        {/* 3D Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <NotificationIcon3D />
        </motion.div>

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-xs font-medium tracking-[0.2em] text-emerald-400 mb-6"
        >
          {badge}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-instrument-serif text-center text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl whitespace-pre-line leading-[1.15]"
        >
          {headline}
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <button
            onClick={onPrimaryClick}
            className="flex items-center gap-2 rounded-full border border-gray-600 bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-gray-100"
          >
            {primaryButtonText}
            <ArrowRight size={16} />
          </button>
          <button
            onClick={onSecondaryClick}
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all hover:text-gray-300"
          >
            {secondaryButtonText}
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              {feature.icon}
              <span className="text-sm">{feature.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Demo Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Email Preview Card */}
          <div className="flex justify-center md:justify-end">
            <EmailPreviewCard data={emailPreview} />
          </div>

          {/* Notifications Panel */}
          <div className="flex justify-center md:justify-start">
            <NotificationsPanel notifications={notifications} />
          </div>
        </motion.div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
