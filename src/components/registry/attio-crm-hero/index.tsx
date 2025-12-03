"use client";

import { motion } from "motion/react";
import {
  Search,
  Activity,
  CheckSquare,
  FileText,
  Mail,
  ChevronDown,
  SlidersHorizontal,
  ArrowUpDown,
  Settings,
  Plus,
  Download,
  Calendar,
  MoreVertical,
  Users,
} from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Navigation item type
interface NavItem {
  label: string;
  href?: string;
  badge?: string;
}

// Company logo item type
interface CompanyLogo {
  name: string;
  logo: React.ReactNode;
}

// Props for the component
interface AttioCrmHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  logoCloudText?: string;
  companyLogos?: CompanyLogo[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Attio Logo Component
function AttioLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Company logos (simplified SVG representations)
function CocaColaLogo() {
  return (
    <svg viewBox="0 0 120 40" className="h-7 w-auto fill-current text-[#666]">
      <text
        x="0"
        y="28"
        fontFamily="serif"
        fontStyle="italic"
        fontSize="24"
        fontWeight="bold"
      >
        Coca-Cola
      </text>
    </svg>
  );
}

function DoptLogo() {
  return (
    <svg viewBox="0 0 80 32" className="h-6 w-auto fill-current text-[#333]">
      <text x="0" y="24" fontFamily="monospace" fontSize="20" fontWeight="bold">
        DOPT
      </text>
    </svg>
  );
}

function PalletLogo() {
  return (
    <div className="flex items-center gap-1.5 text-[#333]">
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <rect x="14" y="2" width="8" height="8" rx="2" />
        <rect x="2" y="14" width="8" height="8" rx="2" />
        <rect x="14" y="14" width="8" height="8" rx="2" opacity="0.4" />
      </svg>
      <span className="text-lg font-semibold">Pallet</span>
    </div>
  );
}

function OpenAILogo() {
  return (
    <div className="flex items-center gap-1.5 text-[#333]">
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" />
      </svg>
      <span className="text-lg font-medium">OpenAI</span>
    </div>
  );
}

function CausalLogo() {
  return (
    <div className="flex items-center gap-1.5 text-[#333]">
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current fill-none">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
      </svg>
      <span className="text-lg font-medium tracking-wider">CAUSAL</span>
    </div>
  );
}

// Default company logos
const defaultCompanyLogos: CompanyLogo[] = [
  { name: "Coca-Cola", logo: <CocaColaLogo /> },
  { name: "Dopt", logo: <DoptLogo /> },
  { name: "Pallet", logo: <PalletLogo /> },
  { name: "OpenAI", logo: <OpenAILogo /> },
  { name: "Causal", logo: <CausalLogo /> },
];

// Default navigation items
const defaultNavItems: NavItem[] = [
  { label: "Updates" },
  { label: "Help" },
  { label: "Pricing" },
  { label: "Careers", badge: "4" },
];

// CRM Dashboard Mock Component
function CRMDashboardMock() {
  const companies = [
    {
      name: "Stripe",
      icon: "S",
      color: "#635BFF",
      stage: "Won",
      stageEmoji: true,
      nextMeeting: "In 4 days",
      meetingColor: "#22C55E",
    },
    {
      name: "Figma",
      icon: "F",
      color: "#A259FF",
      stage: "Opportunity for Expansion",
      nextMeeting: "In 2 days",
      meetingColor: "#22C55E",
    },
    {
      name: "DigitalOcean",
      icon: "D",
      color: "#0080FF",
      stage: "Won",
      stageEmoji: true,
      nextMeeting: "In 30 minutes",
      meetingColor: "#22C55E",
    },
    {
      name: "Adobe",
      icon: "A",
      color: "#FF0000",
      stage: "Demo Scheduled",
      stageColor: "#EF4444",
      nextMeeting: "Tomorrow",
      meetingColor: "#F59E0B",
    },
    {
      name: "Linear",
      icon: "L",
      color: "#5E6AD2",
      stage: "In Trial",
      stageColor: "#EF4444",
      nextMeeting: "In 3 days",
      meetingColor: "#22C55E",
    },
    {
      name: "OpenAI",
      icon: "O",
      color: "#10A37F",
      stage: "Opportunity for Expansion",
      nextMeeting: "In 4 hours",
      meetingColor: "#22C55E",
    },
    {
      name: "Dropbox",
      icon: "D",
      color: "#0061FF",
      stage: "Won",
      stageEmoji: true,
      nextMeeting: "No contact",
      meetingColor: "#EF4444",
    },
    {
      name: "Miro",
      icon: "M",
      color: "#FFD02F",
      stage: "Demo Seen",
      nextMeeting: "In 1 week",
      meetingColor: "#22C55E",
    },
    {
      name: "Retool",
      icon: "R",
      color: "#3D3D3D",
      stage: "Demo Scheduled",
      nextMeeting: "In 5 days",
      meetingColor: "#22C55E",
    },
    {
      name: "Webflow",
      icon: "W",
      color: "#4353FF",
      stage: "In Trial",
      stageColor: "#EF4444",
      nextMeeting: "In 2 weeks",
      meetingColor: "#22C55E",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-t-xl border border-[#E5E5E5] bg-white shadow-2xl">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-[#F9F9F9] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex items-center gap-2 ml-2 text-[#999] text-xs">
          <ChevronDown size={12} />
          <ChevronDown size={12} className="rotate-180" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 rounded-md bg-[#F0F0F0] px-3 py-1 text-xs text-[#666]">
            <span>attio.com/workspace</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#999]">
          <Settings size={14} />
          <Plus size={14} />
          <MoreVertical size={14} />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex h-[420px]">
        {/* Left Sidebar */}
        <div className="w-56 border-r border-[#E5E5E5] bg-[#FAFAFA] p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-6 rounded bg-[#6366F1] flex items-center justify-center">
              <span className="text-white text-xs font-medium">P</span>
            </div>
            <span className="text-sm font-medium text-[#333]">
              Progession.io
            </span>
            <ChevronDown size={14} className="text-[#999]" />
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E5E5E5] bg-white px-3 py-2 mb-4">
            <Search size={14} className="text-[#999]" />
            <span className="text-sm text-[#999]">Search</span>
            <div className="ml-auto flex gap-1 text-[10px] text-[#999]">
              <span className="rounded bg-[#F0F0F0] px-1">K</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#666]">
              <Activity size={14} />
              <span>Activity</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#666]">
              <CheckSquare size={14} />
              <span>Tasks</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#666]">
              <FileText size={14} />
              <span>Notes</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#666]">
              <Mail size={14} />
              <span>Emails</span>
            </div>
          </div>

          {/* Views Section */}
          <div className="mt-6">
            <div className="text-[10px] uppercase tracking-wide text-[#999] mb-2 px-2">
              Views
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-[#E8F4FF] px-2 py-1.5 text-sm text-[#0066CC]">
                <div className="h-2 w-2 rounded-sm bg-[#0066CC]" />
                <span>All Deals</span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#666]">
                <div className="h-2 w-2 rounded-sm bg-[#22C55E]" />
                <span>Sales Pipeline</span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#666]">
                <div className="h-2 w-2 rounded-sm bg-[#8B5CF6]" />
                <span>Q4 Report</span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#999]">
                <Plus size={12} />
                <span>Create new</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">✨</span>
              <span className="font-medium text-[#333]">
                Startup Sales Pipeline
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-[#667EEA] to-[#764BA2]"
                  />
                ))}
                <div className="h-7 w-7 rounded-full border-2 border-white bg-[#F0F0F0] flex items-center justify-center text-[10px] text-[#666]">
                  +3
                </div>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <button className="flex items-center gap-1.5 rounded-md border border-[#E5E5E5] bg-white px-3 py-1.5 text-[#333]">
              <span>Table View</span>
              <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1.5 rounded-md border border-[#E5E5E5] bg-white px-3 py-1.5 text-[#333]">
              <SlidersHorizontal size={14} />
              <span>Filter</span>
              <span className="rounded bg-[#E8F4FF] px-1 text-xs text-[#0066CC]">
                7
              </span>
            </button>
            <button className="flex items-center gap-1.5 rounded-md border border-[#E5E5E5] bg-white px-3 py-1.5 text-[#333]">
              <ArrowUpDown size={14} />
              <span>Sort</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-md border border-[#E5E5E5] bg-white px-3 py-1.5 text-[#333]">
              <Settings size={14} />
              <span>View settings</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-md border border-[#E5E5E5] bg-white px-3 py-1.5 text-[#333]">
              <Download size={14} />
              <span>Import</span>
            </button>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-[#E5E5E5] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-[#FAFAFA] border-b border-[#E5E5E5] text-xs text-[#666] font-medium">
              <div className="px-4 py-2 flex items-center gap-2">
                <div className="h-3 w-3 rounded border border-[#D1D5DB]" />
                Record
              </div>
              <div className="px-4 py-2 flex items-center gap-1">
                <span className="text-[10px]">⚡</span>
                Stage
              </div>
              <div className="px-4 py-2 flex items-center gap-1">
                <Calendar size={12} />
                Next meeting
              </div>
              <div className="px-4 py-2">Relationship</div>
            </div>

            {/* Table Rows */}
            {companies.map((company, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b border-[#E5E5E5] text-sm hover:bg-[#F9F9F9] transition-colors"
              >
                <div className="px-4 py-2.5 flex items-center gap-2">
                  <div className="h-3 w-3 rounded border border-[#D1D5DB]" />
                  <div
                    className="h-5 w-5 rounded flex items-center justify-center text-white text-[10px] font-medium"
                    style={{ backgroundColor: company.color }}
                  >
                    {company.icon}
                  </div>
                  <span className="text-[#333]">{company.name}</span>
                </div>
                <div className="px-4 py-2.5">
                  <span
                    className={`inline-flex items-center gap-1 ${company.stageColor ? "text-[" + company.stageColor + "]" : "text-[#333]"}`}
                  >
                    {company.stageEmoji && "🎉"}
                    {company.stage}
                  </span>
                </div>
                <div className="px-4 py-2.5">
                  <span
                    className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs"
                    style={{
                      backgroundColor:
                        company.meetingColor === "#22C55E"
                          ? "#DCFCE7"
                          : company.meetingColor === "#F59E0B"
                            ? "#FEF3C7"
                            : "#FEE2E2",
                      color: company.meetingColor,
                    }}
                  >
                    <Calendar size={10} />
                    {company.nextMeeting}
                  </span>
                </div>
                <div className="px-4 py-2.5 text-[#666] truncate">
                  Very strong with...
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Access Panel */}
        <div className="w-64 border-l border-[#E5E5E5] bg-[#FAFAFA] p-4">
          <div className="text-[10px] uppercase tracking-wide text-[#999] mb-2">
            Collection Access
          </div>
          <div className="rounded-lg border border-[#E5E5E5] bg-white p-3 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-[#6366F1] flex items-center justify-center">
                  <Users size={12} className="text-white" />
                </div>
                <span className="text-sm font-medium text-[#333]">
                  Workspace access
                </span>
              </div>
              <button className="text-xs text-[#666] border border-[#E5E5E5] rounded px-2 py-1">
                Full Access
              </button>
            </div>
            <p className="text-[10px] text-[#999] mb-3">
              This collection is public to your workspace and can be edited by
              all members.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Joel"
                className="flex-1 rounded border border-[#E5E5E5] px-2 py-1.5 text-sm"
              />
              <button className="rounded bg-[#6366F1] px-3 py-1.5 text-sm text-white">
                Invite
              </button>
            </div>
          </div>

          <div className="text-[10px] uppercase tracking-wide text-[#999] mb-2">
            Collection Access
          </div>
          <div className="space-y-2">
            {[
              { name: "Julia Arowa", email: "julia@progession.io" },
              { name: "Ellery White", email: "enellw@progession.io" },
              { name: "Martin Ford", email: "mford@progession.io" },
            ].map((user, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#667EEA] to-[#764BA2]" />
                <div>
                  <div className="text-sm text-[#333]">{user.name}</div>
                  <div className="text-[10px] text-[#999]">{user.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function AttioCrmHero({
  mode = "light",
  logoText = "attio",
  navItems = defaultNavItems,
  headline = "Customer\nrelationship magic.",
  subheadline = "Powerful, flexible and data-driven, Attio makes it easy to build the\nexact CRM your business needs.",
  primaryCtaText = "Get started",
  secondaryCtaText = "Talk to sales",
  logoCloudText = "Powering leading companies like",
  companyLogos = defaultCompanyLogos,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: AttioCrmHeroProps) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <AttioLogo />
          <span
            className="text-lg font-semibold text-[#1A1A1A]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {logoText}
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="flex items-center gap-1 text-sm text-[#666] hover:text-[#1A1A1A] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
              {item.badge && (
                <span className="flex items-center justify-center h-4 w-4 rounded-full bg-[#1A1A1A] text-white text-[10px]">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="hidden sm:block rounded-full border border-[#E5E5E5] bg-white px-5 py-2 text-sm font-medium text-[#1A1A1A] hover:bg-[#F9F9F9] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sign in
          </button>
          <button
            className="rounded-full bg-[#1A1A1A] px-5 py-2 text-sm font-medium text-white hover:bg-[#333] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get started
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-8 sm:pt-20 lg:pt-24 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#1A1A1A]"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
          }}
        >
          {headline.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#666]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {subheadline.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < subheadline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white hover:bg-[#333] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="rounded-full border border-[#E5E5E5] bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] hover:bg-[#F9F9F9] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>

      {/* CRM Dashboard Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative mx-auto max-w-7xl px-6 sm:px-8 mt-8"
      >
        <CRMDashboardMock />
        {/* Fade out gradient at bottom of screenshot */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </motion.div>

      {/* Logo Cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
      >
        <p
          className="text-center text-sm text-[#999] mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {logoCloudText}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {companyLogos.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="flex items-center"
            >
              {company.logo}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
