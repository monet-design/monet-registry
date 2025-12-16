"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#FBF7F4", // Light pink/beige background
  cardBackground: "#FFFFFF",
  accent: "#7C3AED", // Purple accent
  accentLight: "#EDE9FE", // Light purple for tags
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  borderColor: "#E5E7EB",
  purple: "#7C3AED",
  pink: "#EC4899",
  green: "#10B981",
  yellow: "#F59E0B",
  blue: "#3B82F6",
  chartLine: "#EC4899",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  CreditCard,
  Users,
  Mail,
  MessageCircle,
  Lock,
  BarChart3,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// Feature data type
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
}

// Props
interface SaaspoFeatureSectionsOutsetaProps {
  label?: string;
  title?: string;
}

// Default content
const DEFAULT_CONTENT = {
  label: "ALL-IN-ONE MEMBERSHIP STACK",
  title: "Perfect for membership sites, SaaS\nproducts, courses, and communities",
};

// Payment icons component
function PaymentIcons() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
          <span className="text-white text-[8px] font-medium">Pay</span>
        </div>
        <span className="text-[10px] text-gray-500">Apple Pay</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-800 text-[8px] font-medium">G Pay</span>
        </div>
        <span className="text-[10px] text-gray-500">Google Pay</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-6 bg-pink-500 rounded flex items-center justify-center">
          <span className="text-white text-[8px] font-medium">iDEAL</span>
        </div>
        <span className="text-[10px] text-gray-500">iDEAL</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white text-[8px] font-medium">SEPA</span>
        </div>
        <span className="text-[10px] text-gray-500">SEPA</span>
      </div>
    </div>
  );
}

// Payments Card Content
function PaymentsContent() {
  const checkItems = ["Subscriptions", "One-time products", "Free trials", "Team billing"];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="flex justify-end mb-4">
          <PaymentIcons />
        </div>
        <div className="flex items-end justify-between">
          <div className="space-y-1.5">
            {checkItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={2.5} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold"
                style={{ backgroundColor: COLORS.purple, color: "white" }}
              >
                S
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
              <span>Credit/Debit</span>
              <span>iDEAL</span>
              <span>Bank transfer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// CRM Card Content
function CRMContent() {
  const members = [
    { name: "Koray Okumus", status: "Trialing", color: "bg-purple-100 text-purple-700" },
    { name: "Caitlyn King", status: "Subscribing", color: "bg-green-100 text-green-700" },
    { name: "Ashwin Santiago", status: "Cancelling", color: "bg-red-100 text-red-700" },
    { name: "Lana Steiner", status: "Subscribing", color: "bg-green-100 text-green-700" },
    { name: "Zaid Schwartz", status: "Subscribing", color: "bg-green-100 text-green-700" },
    { name: "Rene Wells", status: "Trialing", color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="divide-y divide-gray-100">
        {members.map((member, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
              <span className="text-sm text-gray-700">{member.name}</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${member.color}`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Email Card Content
function EmailContent() {
  const emails = [
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-yellow-500" />,
      title: "Q4 company update",
      subtitle: "Monthly newsletter list",
      iconBg: "bg-yellow-50",
    },
    {
      icon: <Check className="w-3.5 h-3.5 text-green-500" />,
      title: "Paid subscription created",
      subtitle: "sales@yourcompany.com",
      iconBg: "bg-green-50",
    },
    {
      icon: <Check className="w-3.5 h-3.5 text-blue-500" />,
      title: "Registration confirmation",
      subtitle: "customer@acme.com",
      iconBg: "bg-blue-50",
    },
    {
      icon: <ChevronRight className="w-3.5 h-3.5 text-purple-500" />,
      title: "Onboarding drip sequence",
      subtitle: "New trialing account",
      iconBg: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-2">
      {emails.map((email, i) => (
        <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <div className={`w-7 h-7 rounded-full ${email.iconBg} flex items-center justify-center flex-shrink-0`}>
            {email.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{email.title}</p>
            <p className="text-xs text-gray-500 truncate">{email.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Help Desk Card Content
function HelpDeskContent() {
  const messages = [
    {
      sender: "Customer",
      text: "I need some help integrating with my Webflow site.",
      isCustomer: true,
    },
    {
      sender: "Geoff assigned this ticket to James",
      text: "",
      isSystem: true,
    },
    {
      sender: "James",
      text: "Hi Mathilde! We have lots of documentation on integrating with Webflow. Take a look here.",
      isCustomer: false,
    },
    {
      sender: "Customer",
      text: "Ok wow, that's super helpful!",
      isCustomer: true,
    },
    {
      sender: "James closed this ticket",
      text: "",
      isSystem: true,
    },
  ];

  return (
    <div className="space-y-2">
      {messages.map((msg, i) => {
        if (msg.isSystem) {
          return (
            <p key={i} className="text-xs text-gray-400 text-center py-1">
              {msg.sender}
            </p>
          );
        }
        return (
          <div
            key={i}
            className={`flex ${msg.isCustomer ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                msg.isCustomer
                  ? "bg-gray-100 text-gray-700 rounded-tl-none"
                  : "bg-purple-600 text-white rounded-tr-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Auth Card Content
function AuthContent() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      {/* Login Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 w-32 shadow-sm">
        <div className="space-y-2">
          <div className="h-2 w-12 bg-gray-200 rounded" />
          <div className="h-6 w-full bg-gray-100 rounded" />
          <div className="h-2 w-10 bg-gray-200 rounded" />
          <div className="h-6 w-full bg-gray-100 rounded" />
          <div className="h-6 w-full bg-purple-600 rounded mt-2 flex items-center justify-center">
            <span className="text-white text-[10px]">Log in</span>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight className="w-5 h-5 text-gray-400" />

      {/* Dashboard Preview */}
      <div className="bg-white border border-gray-200 rounded-lg p-3 w-40 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded bg-yellow-400" />
          <span className="text-[10px] text-gray-500">Build like the pros</span>
        </div>
        <div className="h-16 bg-gray-50 rounded flex items-center justify-center">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
        <div className="mt-2 text-[10px] text-gray-600 text-center">
          Welcome back, Jane
        </div>
      </div>
    </div>
  );
}

// Reporting Card Content
function ReportingContent() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">MRR as of today</p>
          <p className="text-2xl font-bold text-gray-900">$49,835</p>
        </div>
        <button className="text-xs text-purple-600 flex items-center gap-1">
          Share <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Chart */}
      <div className="h-24 relative">
        <svg viewBox="0 0 200 80" className="w-full h-full">
          {/* Grid lines */}
          {[0, 20, 40, 60, 80].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="200"
              y2={y}
              stroke="#E5E7EB"
              strokeWidth="0.5"
            />
          ))}

          {/* Chart line */}
          <path
            d="M 0 70 Q 20 65 40 55 T 80 45 T 120 35 T 160 25 T 200 15"
            fill="none"
            stroke={COLORS.chartLine}
            strokeWidth="2"
          />

          {/* Area under line */}
          <path
            d="M 0 70 Q 20 65 40 55 T 80 45 T 120 35 T 160 25 T 200 15 L 200 80 L 0 80 Z"
            fill={COLORS.chartLine}
            fillOpacity="0.1"
          />

          {/* End dot */}
          <circle cx="198" cy="15" r="3" fill={COLORS.chartLine} />
        </svg>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  // Determine card size based on position
  const isLargeCard = index === 0 || index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 ${
        isLargeCard ? "md:col-span-1" : "md:col-span-1"
      }`}
    >
      {/* Icon and Title */}
      <div className="flex items-start gap-2 mb-2">
        <div className="text-gray-900">{feature.icon}</div>
        <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{feature.description}</p>

      {/* Content */}
      <div className="mt-auto">{feature.content}</div>
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsOutseta({
  label = DEFAULT_CONTENT.label,
  title = DEFAULT_CONTENT.title,
}: SaaspoFeatureSectionsOutsetaProps) {
  const features: Feature[] = [
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Payments",
      description:
        "Connect to Stripe and start accepting payments in minutes with a beautifully optimized checkout experience.",
      content: <PaymentsContent />,
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "CRM",
      description:
        "All of your member data in one place. Simplify your stack and stop jumping between tools.",
      content: <CRMContent />,
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email",
      description:
        "Marketing, transactional, product emails, and notifications in the same platform—with 99% deliverability.",
      content: <EmailContent />,
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      title: "Help Desk",
      description:
        "Responding to your members via live chat or support tickets. Publish how-to content and documentation in your branded knowledge base.",
      content: <HelpDeskContent />,
    },
    {
      icon: <Lock className="w-4 h-4" />,
      title: "Auth and Protected Content",
      description:
        "Allow users to login to your site with an email address and password, or their Google account. Our protected content features make it easy to control access your content.",
      content: <AuthContent />,
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: "Reporting",
      description:
        "Track subscription metrics, analyze engagement with your product or site, and understand why members are cancelling.",
      content: <ReportingContent />,
    },
  ];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: COLORS.purple }}
          >
            {label}
          </motion.span>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 whitespace-pre-line leading-tight"
          >
            {title}
          </motion.h2>
        </div>

        {/* Features Grid - 3 columns on desktop */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
