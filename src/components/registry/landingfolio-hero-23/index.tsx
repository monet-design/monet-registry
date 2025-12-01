"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#3B82F6", // 블루 로고 및 액센트
    ctaBg: "#111727", // 다크 CTA 버튼
    ctaHover: "#1F2937",
  },
  dark: {
    accent: "#60A5FA",
    ctaBg: "#1F2937",
    ctaHover: "#374151",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play, ChevronDown } from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LandingfolioHero23Props {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  headlineAccent?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Features", href: "#features", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support", hasDropdown: true },
];

// ClarityUI Logo Icon
function ClarityLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="11" stroke="#3B82F6" strokeWidth="3" />
      <circle cx="14" cy="14" r="4" fill="#3B82F6" />
    </svg>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <div className="relative">
      {/* Dashboard Container with shadow */}
      <div className="rounded-xl overflow-hidden bg-white shadow-[0_25px_100px_-12px_rgba(0,0,0,0.15)] border border-gray-100">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">C</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ClarityUI
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 h-7 rounded-md bg-gray-50 border border-gray-200 flex items-center px-2">
              <svg
                className="w-3 h-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span className="text-xs text-gray-400 ml-2">Type to search</span>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-[180px] border-r border-gray-100 bg-white p-3 hidden lg:block">
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium mb-4">
              <span className="text-white">+</span>
              Connect New Account
            </button>

            <div className="space-y-1">
              <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-600">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Dashboard
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[9px] font-medium text-gray-400 tracking-wider uppercase px-3 mb-2">
                ANALYTICS
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m18 9-5 5-4-4-6 6" />
                  </svg>
                  Performance
                </div>
                <div className="flex items-center justify-between px-3 py-1.5 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    Hotjar
                  </div>
                  <span className="px-1.5 py-0.5 bg-blue-100 text-blue-600 text-[8px] font-medium rounded">
                    NEW
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[9px] font-medium text-gray-400 tracking-wider uppercase px-3 mb-2">
                SUPPORT
              </p>
              <div className="space-y-1">
                <div className="flex items-center justify-between px-3 py-1.5 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Tickets
                  </div>
                  <span className="w-4 h-4 flex items-center justify-center bg-gray-100 text-[8px] text-gray-600 rounded-full">
                    15
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Agents
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  Customers
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[9px] font-medium text-gray-400 tracking-wider uppercase px-3 mb-2">
                SHOP
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                  Products
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  Orders
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Reports
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Settings
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                Logout
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 bg-[#F7F9FB]">
            <div className="mb-4">
              <p className="text-sm text-gray-800">
                <span className="font-medium">Hey Mariana -</span>{" "}
                <span className="text-gray-500">
                  here&apos;s what&apos;s happening with your store today
                </span>
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 bg-white rounded-lg p-3 border border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  TODAY&apos;S SALE
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-xl font-semibold text-gray-900">$12,426</p>
                  <span className="text-[10px] text-green-500">+36% *</span>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-lg p-3 border border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  TOTAL SALES
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-xl font-semibold text-gray-900">
                    $2,38,485
                  </p>
                  <span className="text-[10px] text-green-500">+14% *</span>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-lg p-3 border border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  TOTAL ORDERS
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-xl font-semibold text-gray-900">84,382</p>
                  <span className="text-[10px] text-green-500">+36% *</span>
                </div>
              </div>
            </div>

            {/* Chart and Traffic Sources */}
            <div className="flex gap-4">
              {/* Sales Report Chart */}
              <div className="flex-[2] bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    Sales Report
                  </h4>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 text-[10px] bg-gray-100 text-gray-700 rounded">
                      12 Months
                    </button>
                    <button className="px-2 py-1 text-[10px] text-gray-500">
                      6 Months
                    </button>
                    <button className="px-2 py-1 text-[10px] text-gray-500">
                      30 Days
                    </button>
                    <button className="px-2 py-1 text-[10px] text-gray-500">
                      7 Days
                    </button>
                    <button className="px-2 py-1 text-[10px] text-gray-500 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                      Export PDF
                    </button>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="h-32 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q50,70 100,60 T200,50 T300,30 T400,20"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0,80 Q50,70 100,60 T200,50 T300,30 T400,20 L400,100 L0,100 Z"
                      fill="url(#chartGradient)"
                    />
                  </svg>
                  <div className="absolute top-8 left-[60%] bg-gray-800 text-white text-[9px] px-2 py-1 rounded">
                    June 2021
                    <br />
                    $45,591
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-[9px] text-gray-400 mt-2">
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="flex-1 bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-4">
                  Traffic Sources
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-600 w-12">
                      Direct
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "55%" }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-600 w-12">
                      Referral
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-600 w-12">
                      Social Media
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: "25%" }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-600 w-12">
                      Twitter
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transactions and Recent Customers */}
            <div className="flex gap-4 mt-4">
              {/* Transactions */}
              <div className="flex-[2] bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Transactions
                    </h4>
                    <p className="text-[10px] text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipis.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-[10px] text-blue-500 hover:underline"
                  >
                    See All Transactions &gt;
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-green-100 text-green-600 text-[9px] rounded">
                        Completed
                      </span>
                      <div>
                        <p className="text-xs text-gray-900">
                          Visa card **** 4831
                        </p>
                        <p className="text-[9px] text-gray-400">Card payment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-900">$182.94</p>
                      <p className="text-[9px] text-gray-400">Jan 17, 2022</p>
                    </div>
                    <div className="text-xs text-gray-500">Amazon</div>
                    <button className="text-gray-400">...</button>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-green-100 text-green-600 text-[9px] rounded">
                        Completed
                      </span>
                      <div>
                        <p className="text-xs text-gray-900">
                          Mastercard **** 6442
                        </p>
                        <p className="text-[9px] text-gray-400">Card payment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-900">$99.00</p>
                      <p className="text-[9px] text-gray-400">Jan 17, 2022</p>
                    </div>
                    <div className="text-xs text-gray-500">Facebook</div>
                    <button className="text-gray-400">...</button>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-600 text-[9px] rounded">
                        Pending
                      </span>
                      <div>
                        <p className="text-xs text-gray-900">Account ****882</p>
                        <p className="text-[9px] text-gray-400">Bank payment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-900">$249.94</p>
                      <p className="text-[9px] text-gray-400">Jan 17, 2022</p>
                    </div>
                    <div className="text-xs text-gray-500">Netflix</div>
                    <button className="text-gray-400">...</button>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[9px] rounded">
                        Cancelled
                      </span>
                      <div>
                        <p className="text-xs text-gray-900">
                          Amex card **** 5466
                        </p>
                        <p className="text-[9px] text-gray-400">Card payment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-900">$199.24</p>
                      <p className="text-[9px] text-gray-400">Jan 17, 2022</p>
                    </div>
                    <div className="text-xs text-gray-500">Amazon Prime</div>
                    <button className="text-gray-400">...</button>
                  </div>
                </div>
              </div>

              {/* Recent Customers */}
              <div className="flex-1 bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Recent Customers
                </h4>
                <p className="text-[10px] text-gray-400 mb-3">
                  Lorem ipsum dolor sit
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Jenny Wilson
                      </p>
                      <p className="text-[9px] text-gray-400">w.lawson@...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Devon Lane
                      </p>
                      <p className="text-[9px] text-gray-400">dat.roberts@...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Jane Cooper
                      </p>
                      <p className="text-[9px] text-gray-400">jgraham@boa...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600" />
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Dianne Russell
                      </p>
                      <p className="text-[9px] text-gray-400">curts_d@esa...</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="block text-center text-[10px] text-blue-500 mt-4 hover:underline"
                >
                  SEE ALL CUSTOMERS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function LandingfolioHero23({
  mode = "light",
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  ctaButtonText = "Start free trial",
  headline = "Meet the New",
  headlineAccent = "Landingfolio Kit",
  description = "Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.",
  primaryButtonText = "Start using LandingFolio",
  secondaryButtonText = "Watch 1 min intro",
  onPrimaryClick,
  onSecondaryClick,
}: LandingfolioHero23Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <ClarityLogo />
            <span className="text-base font-semibold text-gray-900">
              {logoText}
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={14} className="text-gray-400" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <button className="px-5 py-2.5 text-sm font-medium text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
          {ctaButtonText}
        </button>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0 px-6 lg:px-16 pt-16 lg:pt-24">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] lg:pr-12">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-instrument-serif text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-[#111727] tracking-tight"
          >
            {headline}
            <br />
            {headlineAccent}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-base leading-relaxed text-gray-500 max-w-md"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              onClick={onPrimaryClick}
              className="px-7 py-3.5 text-white text-sm font-medium rounded-full transition-colors"
              style={{ backgroundColor: colors.ctaBg }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.ctaHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.ctaBg)}
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                <Play size={10} className="text-gray-600 ml-0.5" fill="currentColor" />
              </div>
              {secondaryButtonText}
            </button>
          </motion.div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full lg:w-[55%] lg:absolute lg:right-0 lg:top-24 lg:translate-x-[10%]"
        >
          <div className="relative p-4 lg:p-0">
            <div className="bg-[#F7F9FB] rounded-2xl p-4 lg:p-8 lg:rounded-l-3xl lg:rounded-r-none">
              <DashboardPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
