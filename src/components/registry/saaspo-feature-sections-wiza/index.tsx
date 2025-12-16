"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
interface ColorScheme {
  background: string;
  cardBackground: string;
  purpleAccent: string;
  purpleLight: string;
  greenVerified: string;
  greenVerifiedBg: string;
  yellowAccent: string;
  blueLinkedin: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  borderLight: string;
}

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    background: "#f9f8fc",
    cardBackground: "#ffffff",
    purpleAccent: "#7c5cff",
    purpleLight: "#f0edff",
    greenVerified: "#22c55e",
    greenVerifiedBg: "#dcfce7",
    yellowAccent: "#fbbf24",
    blueLinkedin: "#0077b5",
    textPrimary: "#1a1a2e",
    textSecondary: "#64748b",
    textMuted: "#94a3b8",
    borderLight: "rgba(0,0,0,0.06)",
  },
  dark: {
    background: "#0f0f1a",
    cardBackground: "#1a1a2e",
    purpleAccent: "#9d8cff",
    purpleLight: "#2d2a4a",
    greenVerified: "#4ade80",
    greenVerifiedBg: "#14532d",
    yellowAccent: "#fcd34d",
    blueLinkedin: "#2ba3d9",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
    borderLight: "rgba(255,255,255,0.1)",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Sparkles,
  Check,
  Download,
  Mail,
  Phone,
  Copy,
  FileSpreadsheet,
} from "lucide-react";
import "./font.css";

interface SaaspoFeatureSectionsWizaProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
}

// LinkedIn icon component
function LinkedInIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Wiza logo component
function WizaLogo({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5L17.5 7 12 9.5 6.5 7 12 4.5zM6 8.5l5 2.5v7.5l-5-2.5V8.5zm12 0v7.5l-5 2.5V11l5-2.5z" />
    </svg>
  );
}

export default function SaaspoFeatureSectionsWiza({
  mode = "light",
  badge = "Feature-rich suite",
  title = "Mastering LinkedIn outreach\nwith Wiza's power",
}: SaaspoFeatureSectionsWizaProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const features = [
    {
      id: "export",
      title: "Export searches or lists",
      description:
        "Export entire LinkedIn searches and lists in just 1 click",
      content: <ExportCard colors={colors} />,
    },
    {
      id: "verification",
      title: "Built-in email verification",
      description:
        "Get 99%+ deliverability rates, and only pay for valid emails",
      content: <VerificationCard colors={colors} />,
    },
    {
      id: "linkedin-versions",
      title: "Supports all versions of LinkedIn",
      description:
        "Powerful tools built for LinkedIn, Sales Navigator, and Recruiter",
      content: <LinkedInVersionsCard colors={colors} />,
    },
    {
      id: "prospect-data",
      title: "Fully enriched prospect data",
      description:
        "30+ data points, like: revenue, funding, headcount, and much more",
      content: <ProspectDataCard colors={colors} />,
    },
    {
      id: "credits",
      title: "Only pay for valid contact information",
      description:
        "Your Wiza credits are only used on contact information",
      content: <CreditsCard colors={colors} />,
    },
    {
      id: "contact-points",
      title: "Find multiple contact points",
      description:
        "Finds work emails, personal emails, direct dials, and cell numbers",
      content: <ContactPointsCard colors={colors} />,
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{
              borderColor: colors.borderLight,
              backgroundColor: colors.cardBackground,
            }}
          >
            <Sparkles
              className="h-4 w-4"
              style={{ color: colors.purpleAccent }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: colors.textSecondary }}
            >
              {badge}
            </span>
          </div>

          {/* Title */}
          <h2
            className="mx-auto max-w-3xl whitespace-pre-line text-4xl font-normal leading-tight md:text-5xl"
            style={{
              color: colors.textPrimary,
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="flex flex-col overflow-hidden rounded-2xl"
              style={{
                backgroundColor: colors.cardBackground,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              variants={itemVariants}
            >
              {/* Card visual content */}
              <div className="flex flex-1 items-center justify-center p-6">
                {feature.content}
              </div>

              {/* Card text */}
              <div className="border-t px-6 pb-6 pt-5" style={{ borderColor: colors.borderLight }}>
                <h3
                  className="mb-1 text-lg font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

// Card 1: Export searches or lists
function ExportCard({ colors }: { colors: ColorScheme }) {
  // Check if it's light mode by comparing background color
  const isLightMode = colors.background === "#f9f8fc";

  return (
    <div className="w-full max-w-[280px]">
      {/* Sales Navigator header */}
      <div
        className="mb-3 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.borderLight,
        }}
      >
        <div
          className="flex h-5 w-5 items-center justify-center rounded"
          style={{ backgroundColor: colors.blueLinkedin }}
        >
          <span className="text-[10px] font-bold text-white">in</span>
        </div>
        <span className="text-xs font-medium" style={{ color: colors.textPrimary }}>
          Sales Navigator
        </span>
      </div>

      {/* Filter row */}
      <div
        className="mb-3 flex flex-wrap gap-2 rounded-xl border p-3"
        style={{
          backgroundColor: isLightMode ? "#fafafa" : colors.cardBackground,
          borderColor: colors.borderLight,
        }}
      >
        <FilterPill label="Current job title" value="CTO" colors={colors} />
        <FilterPill label="Function" value="Information Technology" colors={colors} />
        <FilterPill label="Seniority level" value="CXO" colors={colors} />
      </div>

      {/* Profiles row */}
      <div className="mb-3 flex gap-2">
        <ProfileMini
          name="Darrell Steward"
          company="Sony"
          title="Chief Technology Officer"
          colors={colors}
        />
        <ProfileMini
          name="Kathryn Murphy"
          company="Bank of America"
          title="Chief Technology..."
          colors={colors}
          faded
        />
      </div>

      {/* Export button */}
      <div
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-2"
        style={{
          borderColor: colors.borderLight,
          backgroundColor: colors.cardBackground,
        }}
      >
        <Download className="h-4 w-4" style={{ color: colors.purpleAccent }} />
        <span className="text-xs font-medium" style={{ color: colors.purpleAccent }}>
          Export leads with Wiza
        </span>
      </div>
    </div>
  );
}

function FilterPill({
  label,
  value,
  colors,
}: {
  label: string;
  value: string;
  colors: ColorScheme;
}) {
  return (
    <div
      className="rounded-lg border px-2 py-1"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderLight,
      }}
    >
      <span className="block text-[10px]" style={{ color: colors.textMuted }}>
        {label}
      </span>
      <span className="text-xs font-medium" style={{ color: colors.textPrimary }}>
        {value}
      </span>
    </div>
  );
}

function ProfileMini({
  name,
  company,
  title,
  colors,
  faded = false,
}: {
  name: string;
  company: string;
  title: string;
  colors: ColorScheme;
  faded?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border px-2 py-1.5"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderLight,
        opacity: faded ? 0.5 : 1,
      }}
    >
      <div
        className="h-7 w-7 rounded-full"
        style={{ backgroundColor: colors.purpleLight }}
      />
      <div className="min-w-0">
        <p className="truncate text-xs font-medium" style={{ color: colors.textPrimary }}>
          {name}
        </p>
        <p className="truncate text-[10px]" style={{ color: colors.textMuted }}>
          {company}
        </p>
        <p className="truncate text-[10px]" style={{ color: colors.textMuted }}>
          {title}
        </p>
      </div>
    </div>
  );
}

// Card 2: Built-in email verification
function VerificationCard({ colors }: { colors: ColorScheme }) {
  return (
    <div className="flex flex-col items-center">
      {/* Profile card */}
      <div className="relative mb-3">
        {/* Verified badge */}
        <div
          className="absolute -right-2 -top-2 z-10 flex items-center gap-1 rounded-full px-2 py-0.5"
          style={{
            backgroundColor: colors.greenVerifiedBg,
            color: colors.greenVerified,
          }}
        >
          <Check className="h-3 w-3" />
          <span className="text-xs font-medium">Verified</span>
        </div>

        {/* Avatar */}
        <div
          className="h-20 w-20 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${colors.purpleLight} 0%, ${colors.purpleAccent}40 100%)`,
          }}
        />
      </div>

      {/* Name and email */}
      <h4 className="mb-1 text-base font-semibold" style={{ color: colors.textPrimary }}>
        Elanor Pera
      </h4>
      <p className="mb-4 text-sm" style={{ color: colors.textMuted }}>
        elanor.pera@uber.com
      </p>

      {/* Decorative lines */}
      <div className="relative w-full">
        <svg viewBox="0 0 200 60" className="w-full" style={{ opacity: 0.3 }}>
          <path
            d="M10 50 Q50 20 100 30 T190 20"
            stroke={colors.purpleAccent}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M10 55 Q50 35 100 40 T190 25"
            stroke={colors.purpleAccent}
            strokeWidth="1"
            fill="none"
          />
        </svg>
        {/* Wiza logo badge */}
        <div
          className="absolute bottom-0 right-4 flex items-center gap-1 rounded-full border bg-white px-2 py-1"
          style={{ borderColor: colors.borderLight }}
        >
          <WizaLogo className="h-3 w-3" style={{ color: colors.purpleAccent }} />
          <span className="text-[10px]" style={{ color: colors.textMuted }}>
            wiza
          </span>
        </div>
      </div>
    </div>
  );
}

// Card 3: Supports all versions of LinkedIn
function LinkedInVersionsCard({ colors }: { colors: ColorScheme }) {
  const versions = [
    { icon: <WizaLogo className="h-4 w-4" style={{ color: colors.purpleAccent }} />, label: "wiza" },
    {
      icon: (
        <div className="flex items-center gap-1">
          <div
            className="flex h-4 w-4 items-center justify-center rounded"
            style={{ backgroundColor: colors.blueLinkedin }}
          >
            <span className="text-[8px] font-bold text-white">in</span>
          </div>
        </div>
      ),
      label: "Recruiter",
    },
    {
      icon: (
        <div className="flex items-center gap-1">
          <div
            className="flex h-4 w-4 items-center justify-center rounded"
            style={{ backgroundColor: colors.blueLinkedin }}
          >
            <span className="text-[8px] font-bold text-white">in</span>
          </div>
        </div>
      ),
      label: "Sales Navigator",
    },
    {
      icon: <LinkedInIcon className="h-5 w-5" style={{ color: colors.blueLinkedin }} />,
      label: null,
    },
  ];

  return (
    <div className="flex flex-col items-end gap-2">
      {versions.map((version, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg border px-3 py-2"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.borderLight,
          }}
        >
          {version.icon}
          {version.label && (
            <span className="text-sm font-medium" style={{ color: colors.textPrimary }}>
              {version.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// Card 4: Fully enriched prospect data
function ProspectDataCard({ colors }: { colors: ColorScheme }) {
  const dataFields = [
    { label: "Phone Number", value: "+1 (234) 567-8900" },
    { label: "Company Ind...", value: "Software De..." },
    { label: "Headcount", value: "2,384" },
    { label: "Founded", value: "2003" },
    { label: "Work Ma...", value: "Team Le..." },
    { label: "Job Title", value: "Product Manager" },
    { label: "Location", value: "California, Uni..." },
  ];

  return (
    <div className="w-full max-w-[260px]">
      <div className="mb-3 grid grid-cols-2 gap-2">
        {dataFields.slice(0, 2).map((field, i) => (
          <DataField key={i} {...field} colors={colors} />
        ))}
      </div>
      <div className="mb-3 grid grid-cols-3 gap-2">
        {dataFields.slice(2, 5).map((field, i) => (
          <DataField key={i} {...field} colors={colors} small />
        ))}
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        {dataFields.slice(5).map((field, i) => (
          <DataField key={i} {...field} colors={colors} />
        ))}
      </div>
      {/* CSV download */}
      <div
        className="inline-flex items-center gap-2 rounded-lg border px-3 py-2"
        style={{
          borderColor: colors.borderLight,
          backgroundColor: colors.cardBackground,
        }}
      >
        <FileSpreadsheet className="h-4 w-4" style={{ color: colors.textMuted }} />
        <span className="text-xs font-medium" style={{ color: colors.textPrimary }}>
          magical_data.csv
        </span>
      </div>
    </div>
  );
}

function DataField({
  label,
  value,
  colors,
  small = false,
}: {
  label: string;
  value: string;
  colors: ColorScheme;
  small?: boolean;
}) {
  return (
    <div
      className="rounded-lg border px-2 py-1.5"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderLight,
      }}
    >
      <span
        className="block truncate"
        style={{
          color: colors.textMuted,
          fontSize: small ? "9px" : "10px",
        }}
      >
        {label}
      </span>
      <span
        className="truncate font-medium"
        style={{
          color: colors.textPrimary,
          fontSize: small ? "10px" : "11px",
        }}
      >
        {value}
      </span>
    </div>
  );
}

// Card 5: Only pay for valid contact information
function CreditsCard({ colors }: { colors: ColorScheme }) {
  return (
    <div className="flex flex-col items-center">
      {/* Avatar */}
      <div
        className="mb-4 h-10 w-10 rounded-full"
        style={{ backgroundColor: colors.purpleLight }}
      />

      {/* Credits display */}
      <div className="flex gap-8">
        <CreditDonut
          value={51}
          label="Email credits left"
          color={colors.yellowAccent}
          colors={colors}
        />
        <CreditDonut
          value={43}
          label="Phone credits left"
          color={colors.purpleAccent}
          colors={colors}
        />
      </div>
    </div>
  );
}

function CreditDonut({
  value,
  label,
  color,
  colors,
}: {
  value: number;
  label: string;
  color: string;
  colors: ColorScheme;
}) {
  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12">
        <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke={colors.borderLight}
            strokeWidth="4"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <p className="text-xl font-bold" style={{ color: colors.textPrimary }}>
          {value}
        </p>
        <p className="text-xs" style={{ color: colors.textMuted }}>
          {label}
        </p>
      </div>
    </div>
  );
}

// Card 6: Find multiple contact points
function ContactPointsCard({ colors }: { colors: ColorScheme }) {
  const contacts = [
    { type: "email", icon: <Mail className="h-3 w-3" />, value: "ralph.edwards@nintendo.com" },
    { type: "email", icon: <Mail className="h-3 w-3" />, value: "ralphedwards@gmail.com" },
    { type: "phone", icon: <Phone className="h-3 w-3" />, value: "+1 (234) 567..." },
    { type: "phone", icon: <Phone className="h-3 w-3" />, value: "+1 (321) 456-7..." },
  ];

  return (
    <div className="w-full max-w-[260px]">
      {/* Header */}
      <div
        className="mb-2 flex items-center gap-1.5 rounded-lg border px-3 py-1.5"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.borderLight,
        }}
      >
        <Sparkles className="h-3 w-3" style={{ color: colors.textMuted }} />
        <span className="text-xs font-medium" style={{ color: colors.textPrimary }}>
          Email(s)
        </span>
      </div>

      {/* Contact list */}
      <div className="space-y-2">
        {contacts.map((contact, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border px-3 py-2"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: colors.borderLight,
            }}
          >
            <div className="flex items-center gap-2">
              <span style={{ color: colors.textMuted }}>{contact.icon}</span>
              <span className="text-xs" style={{ color: colors.textPrimary }}>
                {contact.value}
              </span>
            </div>
            <Copy className="h-3.5 w-3.5" style={{ color: colors.textMuted }} />
          </div>
        ))}
      </div>
    </div>
  );
}
