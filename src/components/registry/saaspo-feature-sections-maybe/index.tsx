"use client";

import { motion } from "motion/react";
import { Home, Car, Clock } from "lucide-react";

// ============================================================================
// BRAND ICONS - SVG icons for financial institutions
// ============================================================================

const ChaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#117ACA" />
    <path
      d="M6 10h5v-4l-5 4zm8-4v5h4l-4-5zm-4 8h-4l4 5v-5zm5 0v4l5-4h-5z"
      fill="white"
    />
  </svg>
);

const MercuryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="4" fill="#5856D6" />
    <path d="M6 8h3v8H6V8zm4.5 0H14l2 4-2 4h-3.5l2-4-2-4zm5.5 0h2v8h-2V8z" fill="white" />
  </svg>
);

const RevolutIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#191C1F" />
    <path d="M8 6h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-2v4H8V6zm2 6h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v4z" fill="white" />
  </svg>
);

const VanguardIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#C41230" />
    <path d="M12 4l-6 14h3l3-7 3 7h3L12 4z" fill="white" />
  </svg>
);

const InteractiveBrokersIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#D41F27" />
    <circle cx="12" cy="12" r="6" fill="white" />
    <circle cx="12" cy="12" r="3" fill="#D41F27" />
  </svg>
);

const RobinhoodIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#00C805" />
    <path d="M8 8c0 0 2-2 4-2s4 2 4 2v8c0 0-2-2-4-2s-4 2-4 2V8z" fill="white" />
  </svg>
);

const CoinbaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#0052FF" />
    <circle cx="12" cy="12" r="6" fill="white" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#00DCFA" />
    <path d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h8v2H8v-2z" fill="white" />
  </svg>
);

const KrakenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#5741D9" />
    <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.7 0 3.2-.7 4.2-1.8l-2.1-2.1c-.5.5-1.3.9-2.1.9-1.7 0-3-1.3-3-3s1.3-3 3-3c.8 0 1.6.4 2.1.9l2.1-2.1C15.2 6.7 13.7 6 12 6z" fill="white" />
  </svg>
);

const LedgerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="4" fill="#000" />
    <path d="M6 6v5h2V8h10v8h-5v2h7V6H6zm0 7v5h7v-2H8v-3H6z" fill="white" />
  </svg>
);

// Currency icons
const DollarIcon = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-600 font-bold text-lg">$</span>
);

const EuroIcon = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">€</span>
);

const PoundIcon = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 font-bold text-lg">£</span>
);

// ============================================================================
// ACCOUNT DATA
// ============================================================================

const accounts = [
  { name: "Chase Savings", icon: ChaseIcon, balance: "$16,408", change: "-4.4%", isPositive: false },
  { name: "Business Account", icon: MercuryIcon, balance: "$70,144", change: "+2.7%", isPositive: true },
  { name: "Coinbase", icon: CoinbaseIcon, balance: "$30,728", change: "+1.1%", isPositive: true },
  { name: "Interactive Brokers", icon: InteractiveBrokersIcon, balance: "$19,224", change: "+0.9%", isPositive: true },
  { name: "Robinhood", icon: RobinhoodIcon, balance: "$23,261", change: "-5.2%", isPositive: false },
  { name: "Ledger Wallet", icon: LedgerIcon, balance: "$5,873", change: "", isPositive: true },
];

// ============================================================================
// COMPONENT
// ============================================================================

interface SaaspoFeatureSectionsMaybeProps {
  mode?: "light" | "dark";
}

export default function SaaspoFeatureSectionsMaybe({
  mode = "light",
}: SaaspoFeatureSectionsMaybeProps) {
  return (
    <section className="relative w-full bg-[#f8f8f8] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium leading-tight tracking-tight">
            <span className="text-gray-400">Track your </span>
            <span className="text-gray-900">bank accounts </span>
            <span className="inline-flex items-center gap-1 align-middle">
              <ChaseIcon />
              <MercuryIcon />
              <RevolutIcon />
            </span>
            <span className="text-gray-400">, check how</span>
            <br className="hidden md:block" />
            <span className="text-gray-400"> your </span>
            <span className="text-gray-900">stocks </span>
            <span className="inline-flex items-center gap-1 align-middle">
              <VanguardIcon />
              <InteractiveBrokersIcon />
              <RobinhoodIcon />
            </span>
            <span className="text-gray-400"> and </span>
            <span className="text-gray-900">crypto </span>
            <span className="inline-flex items-center gap-1 align-middle">
              <CoinbaseIcon />
              <GeminiIcon />
              <KrakenIcon />
            </span>
            <span className="text-gray-400"> are doing,</span>
            <br className="hidden md:block" />
            <span className="text-gray-400"> and monitor your </span>
            <span className="text-gray-900">everything</span>
            <span className="text-gray-400"> else </span>
            <span className="inline-flex items-center gap-1 align-middle text-amber-500">
              <Home className="w-6 h-6" />
              <Car className="w-6 h-6" />
              <Clock className="w-6 h-6" />
            </span>
            <span className="text-gray-400"> in any</span>
            <br className="hidden md:block" />
            <span className="text-gray-900"> currency </span>
            <span className="inline-flex items-center gap-1 align-middle">
              <DollarIcon />
              <EuroIcon />
              <PoundIcon />
            </span>
            <span className="text-gray-400"> all in one place.</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Account List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1">
              <div className="space-y-3">
                {accounts.map((account, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <account.icon />
                      <span className="text-gray-900 font-medium text-sm">{account.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900 font-medium text-sm">{account.balance}</div>
                      {account.change && (
                        <div className="flex items-center gap-1 justify-end">
                          <svg className="w-3 h-3" viewBox="0 0 12 12">
                            <path
                              d="M2 6c1 1 2-1 3 0s2-1 3 0 2-1 3 0"
                              stroke={account.isPositive ? "#22c55e" : "#ef4444"}
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                          <span
                            className={`text-xs ${
                              account.isPositive ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            {account.change}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 px-1">
              <h3 className="text-gray-900 font-semibold text-lg mb-1">
                Link everything automagically
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Over 10,000+ institutions to choose from when linking all your accounts.
              </p>
            </div>
          </motion.div>

          {/* Card 2: IBKR Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <InteractiveBrokersIcon />
                  <span className="text-gray-500 text-sm">IBKR</span>
                </div>
                <div className="text-4xl font-semibold text-gray-900 mb-1">$104,228.81</div>
                <div className="text-sm">
                  <span className="text-green-500">+$1,553.43 (+0.9%)</span>
                  <span className="text-gray-400 ml-1">vs last month</span>
                </div>
              </div>

              {/* Date selector */}
              <div className="border border-dashed border-gray-200 rounded-xl p-3 mb-4 text-center">
                <div className="text-gray-500 text-xs mb-1">11 Mar 2025</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-gray-900 font-medium">$91,531.23</span>
                  <span className="text-green-500 text-sm">+$428 (+0.2%)</span>
                </div>
              </div>

              {/* Chart */}
              <div className="h-32 relative">
                <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 80 Q30 75 60 70 T120 65 T180 50 T240 45 T300 30"
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0 80 Q30 75 60 70 T120 65 T180 50 T240 45 T300 30 L300 100 L0 100 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* Dot indicator */}
                  <circle cx="200" cy="45" r="4" fill="#22c55e" />
                </svg>
                {/* Vertical dashed line */}
                <div className="absolute top-0 left-[67%] h-full border-l border-dashed border-gray-300"></div>
              </div>
            </div>
            <div className="mt-4 px-1">
              <h3 className="text-gray-900 font-semibold text-lg mb-1">
                All your assets & debts charted
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Visualize your accounts with charts, making it easy to understand at a glance.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Loan Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1">
              <h4 className="text-gray-900 font-semibold mb-4">Enter loan details</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Name</label>
                  <input
                    type="text"
                    defaultValue="Loan for SF Apartment"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Current balance</label>
                  <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2">
                    <span className="text-gray-400 text-sm mr-1">$</span>
                    <input
                      type="text"
                      defaultValue="650,000"
                      className="w-full text-sm text-gray-900 focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Interest rate</label>
                    <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2">
                      <input
                        type="text"
                        defaultValue="4.25%"
                        className="w-full text-sm text-gray-900 focus:outline-none"
                        readOnly
                      />
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">Rate type</label>
                    <input
                      type="text"
                      defaultValue="Fixed"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Term</label>
                  <input
                    type="text"
                    defaultValue="360"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Link loan to asset (optional)</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-400 focus:outline-none">
                    <option>Select asset(s)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4 px-1">
              <h3 className="text-gray-900 font-semibold text-lg mb-1">
                Prefer manual? No problem
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Add any account manually with custom built flows and import accounts via CSV.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
