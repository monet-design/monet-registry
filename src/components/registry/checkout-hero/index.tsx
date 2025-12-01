"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    primary: "#0052FF",           // Blue primary button
    primaryHover: "#0041CC",       // Blue hover
    accent: "#25D366",            // WhatsApp green
    accentRed: "#1A1F71",         // Visa dark blue
    background: "#E8F4FC",        // Light blue globe bg
    backgroundGradient: "#D1EAF7", // Globe gradient
  },
  dark: {
    primary: "#3B7EFF",
    primaryHover: "#2563EB",
    accent: "#34D875",
    accentRed: "#2A2F81",
    background: "#1a2332",
    backgroundGradient: "#2a3444",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronDown, ArrowRight, X } from "lucide-react";

// Types
interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

interface PartnerLogo {
  name: string;
  component?: React.ReactNode;
}

interface CheckoutHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  headline?: string;
  description?: string;
  ctaButtonText?: string;
  secondaryButtonText?: string;
  badgeText?: string;
  navItems?: NavItem[];
  partnerLogos?: PartnerLogo[];
  signInText?: string;
  getInTouchText?: string;
  onCtaClick?: () => void;
  onSecondaryClick?: () => void;
}

// Logo Icon (X mark similar to checkout.com)
function CheckoutLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 flex items-center justify-center">
        <X className="w-4 h-4 text-black" strokeWidth={2.5} />
      </div>
      <span className="text-base font-medium text-black">checkout.com</span>
    </div>
  );
}

// Navigation Item Component
function NavItemComponent({ label, hasDropdown = true }: NavItem) {
  return (
    <button className="flex items-center gap-1 text-sm text-[#1A1A1A] hover:text-black transition-colors">
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  );
}

// Floating UI Card Components
function NotificationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="absolute top-0 right-0 bg-white rounded-xl shadow-lg p-3 w-44 border border-gray-100"
    >
      <div className="flex items-start gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-gray-800">Notification</span>
            <span className="text-[8px] text-gray-400">now</span>
          </div>
          <p className="text-[9px] text-gray-600 mt-0.5 font-medium">Prisme Beauty</p>
          <p className="text-[8px] text-gray-500 leading-tight">Product back in stock! Click to complete payment.</p>
        </div>
      </div>
    </motion.div>
  );
}

function PaymentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="absolute top-20 right-0 bg-white rounded-xl shadow-lg p-4 w-44 border border-gray-100"
    >
      <div className="text-xs font-semibold text-gray-800 mb-3">PAYMENT</div>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-4 bg-[#1A1F71] rounded flex items-center justify-center">
          <span className="text-[6px] text-white font-bold">VISA</span>
        </div>
        <span className="text-[10px] text-gray-700">Visa Debit</span>
        <div className="ml-auto w-3 h-3 border border-gray-300 rounded" />
      </div>
      <div className="space-y-2 mb-3">
        <div className="h-6 bg-gray-50 rounded border border-gray-200 flex items-center px-2">
          <span className="text-[8px] text-gray-400">Name on card</span>
        </div>
        <div className="flex gap-1">
          <div className="h-6 bg-gray-50 rounded border border-gray-200 flex-1 flex items-center px-2">
            <span className="text-[8px] text-gray-400">10/25</span>
          </div>
          <div className="h-6 bg-gray-50 rounded border border-gray-200 flex-1 flex items-center px-2">
            <span className="text-[8px] text-gray-400">CVC</span>
          </div>
        </div>
      </div>
      <button className="w-full h-7 bg-[#0052FF] rounded text-white text-[10px] font-medium">
        PAY
      </button>
    </motion.div>
  );
}

function WhatsAppCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.5 }}
      className="absolute bottom-24 left-8 bg-white rounded-xl shadow-lg p-3 w-40 border border-gray-100"
    >
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </div>
        <span className="text-[10px] font-semibold text-gray-800">WhatsApp</span>
      </div>
      <p className="text-[9px] text-gray-800 font-medium">Hi Martha,</p>
      <p className="text-[8px] text-gray-500 leading-tight mt-1">
        Please confirm your app upgrade by completing payment through the link below.
      </p>
      <p className="text-[8px] text-[#0052FF] mt-1.5 underline">pay.checkout.com/link/...</p>
    </motion.div>
  );
}

function GmailCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="absolute bottom-8 right-0 bg-white rounded-xl shadow-lg p-3 w-36 border border-gray-100"
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-4 h-4 flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
        </div>
        <span className="text-[10px] font-semibold text-gray-800">Gmail</span>
        <span className="text-[7px] text-gray-400 ml-auto">9:04</span>
      </div>
      <p className="text-[9px] text-gray-800 font-medium">Electro Cube</p>
      <p className="text-[8px] text-gray-500">Deposit payment link</p>
    </motion.div>
  );
}

function ApplePayBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.4 }}
      className="absolute top-16 left-20 bg-black rounded-lg px-2 py-1 flex items-center gap-1"
    >
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z" />
      </svg>
      <span className="text-[8px] text-white font-medium">Pay</span>
    </motion.div>
  );
}

function ChatBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="absolute top-4 left-8 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md border border-gray-100"
    >
      <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    </motion.div>
  );
}

// Globe illustration with map
function GlobeIllustration() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#E8F4FC] to-[#D1EAF7] mx-auto relative overflow-hidden shadow-inner"
      >
        {/* Simple world map silhouette */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="90" ry="90" fill="none" stroke="#7CC5E8" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="60" ry="90" fill="none" stroke="#7CC5E8" strokeWidth="0.5" />
          <ellipse cx="100" cy="100" rx="30" ry="90" fill="none" stroke="#7CC5E8" strokeWidth="0.5" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="#7CC5E8" strokeWidth="0.5" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="#7CC5E8" strokeWidth="0.5" />
          <ellipse cx="100" cy="60" rx="85" ry="20" fill="none" stroke="#7CC5E8" strokeWidth="0.5" />
          <ellipse cx="100" cy="140" rx="85" ry="20" fill="none" stroke="#7CC5E8" strokeWidth="0.5" />
        </svg>
        {/* Continent shapes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          {/* North America */}
          <path
            d="M40 60 Q50 50 70 55 Q80 60 85 75 Q75 85 60 80 Q45 75 40 60"
            fill="#9DD5EC"
            opacity="0.6"
          />
          {/* Europe */}
          <path
            d="M100 45 Q115 40 125 50 Q130 60 120 70 Q110 65 100 55 Q95 50 100 45"
            fill="#9DD5EC"
            opacity="0.6"
          />
          {/* Africa */}
          <path
            d="M95 85 Q105 80 115 90 Q120 105 115 120 Q105 130 95 120 Q85 110 90 95 Q92 88 95 85"
            fill="#9DD5EC"
            opacity="0.6"
          />
          {/* Asia */}
          <path
            d="M130 55 Q145 50 160 60 Q170 75 165 90 Q155 95 140 85 Q125 75 130 55"
            fill="#9DD5EC"
            opacity="0.6"
          />
        </svg>
        {/* Location markers */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-[30%] left-[25%] w-2 h-2 bg-[#0052FF] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute top-[35%] left-[55%] w-2 h-2 bg-[#0052FF] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute top-[55%] left-[45%] w-2 h-2 bg-[#0052FF] rounded-full"
        />
      </motion.div>

      {/* Browser window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute bottom-0 left-0 bg-white rounded-lg shadow-lg w-36 overflow-hidden border border-gray-200"
      >
        <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-100">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="p-2 h-12 flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-1 h-4 bg-gray-200 rounded" />
            <div className="w-1 h-6 bg-gray-300 rounded" />
            <div className="w-1 h-3 bg-gray-200 rounded" />
            <div className="w-1 h-5 bg-gray-300 rounded" />
          </div>
        </div>
      </motion.div>

      {/* Floating UI Elements */}
      <ChatBubble />
      <ApplePayBadge />
      <NotificationCard />
      <PaymentCard />
      <WhatsAppCard />
      <GmailCard />
    </div>
  );
}

// Partner Logo Components
function PatreonLogo() {
  return (
    <svg className="h-5 w-auto" viewBox="0 0 36 40" fill="currentColor">
      <path d="M35.975 11.392c0 .312.021.627-.004.937-.03.361-.082.722-.149 1.08a22.535 22.535 0 0 1-.331 1.512 8.59 8.59 0 0 1-.359 1.084c-.313.767-.66 1.518-1.117 2.21-.282.427-.57.849-.864 1.266a4.12 4.12 0 0 1-.37.431c-.225.238-.442.483-.686.695a13.5 13.5 0 0 1-1.123.905c-.356.25-.756.431-1.12.674-.404.268-.866.384-1.296.587-.384.18-.795.24-1.186.38-.498.18-1.021.222-1.531.331-.544.117-1.097.203-1.643.315-.449.09-.894.198-1.34.298-.254.056-.51.098-.756.173-.304.093-.6.214-.896.324-.201.072-.412.126-.604.219-.28.14-.544.315-.823.464-.457.242-.838.585-1.184.96-.292.32-.546.681-.8 1.036-.418.587-.706 1.244-.964 1.916-.254.657-.487 1.322-.725 1.986-.221.625-.43 1.252-.655 1.875-.197.543-.407 1.079-.618 1.615a13.447 13.447 0 0 1-1.12 2.215c-.331.531-.685 1.049-1.142 1.478-.366.343-.72.704-1.17.944-.446.24-.906.448-1.4.557a6.636 6.636 0 0 1-1.807.129c-.229-.012-.455-.075-.684-.117-.137-.026-.276-.047-.409-.089-.112-.035-.215-.097-.322-.151-.302-.147-.624-.264-.9-.448a8.802 8.802 0 0 1-.96-.776c-.554-.492-.97-1.103-1.342-1.74a13.04 13.04 0 0 1-.681-1.319c-.192-.436-.336-.893-.492-1.345a24.916 24.916 0 0 1-.34-1.063c-.092-.317-.165-.641-.243-.963-.073-.298-.15-.594-.212-.895-.112-.536-.215-1.073-.32-1.609a35.827 35.827 0 0 1-.133-.68c-.06-.34-.114-.681-.171-1.022-.044-.254-.092-.506-.13-.76-.044-.28-.08-.56-.124-.839-.036-.242-.078-.483-.112-.725-.032-.226-.06-.452-.089-.678a70.143 70.143 0 0 1-.094-.73c-.03-.236-.055-.471-.082-.707a19421 19421 0 0 1-.096-.818c-.011-.098-.023-.193-.03-.291-.034-.401-.068-.804-.1-1.208-.02-.25-.04-.501-.05-.75-.021-.39-.042-.777-.05-1.166C.01 18.46.001 17.819 0 17.18c0-.378.002-.755.027-1.13.026-.392.08-.784.122-1.176.034-.312.064-.622.105-.934.023-.175.064-.348.1-.52.092-.432.176-.863.281-1.292.076-.31.181-.61.266-.916.157-.571.393-1.11.623-1.653.106-.25.236-.49.368-.725.186-.329.366-.66.576-.97.259-.378.533-.744.823-1.098.275-.336.567-.66.873-.965.24-.24.512-.448.77-.665.254-.212.501-.433.77-.624.412-.296.835-.576 1.263-.849.249-.158.514-.294.774-.434.405-.219.81-.44 1.22-.648.26-.13.527-.244.794-.354.683-.277 1.364-.557 2.055-.816.46-.17.932-.303 1.399-.452.24-.077.475-.161.717-.229.2-.056.402-.086.604-.133.22-.05.434-.119.656-.16.299-.059.603-.1.907-.147.34-.052.679-.105 1.02-.152.139-.019.283-.02.425-.03.47-.026.944-.054 1.414-.077.188-.01.382-.051.565-.019.443.08.889.017 1.332.05.428.03.853.076 1.278.127.306.038.608.103.914.15.268.04.535.065.802.107.215.035.43.081.645.128.46.103.919.196 1.374.317.404.11.797.275 1.204.37.469.113.899.332 1.351.479.462.149.86.424 1.3.608.515.217.96.546 1.418.858.347.238.685.492 1 .77.467.41.92.836 1.356 1.28.258.26.478.564.713.85.38.464.658.993.928 1.523.215.424.393.874.537 1.329.12.373.156.774.245 1.156.098.42.096.844.073 1.27l-.012.008Z" />
    </svg>
  );
}

function WiseLogo() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg font-bold text-black tracking-tight">
        <span className="text-[#00B9FF]">2</span>7WISE
      </span>
    </div>
  );
}

function NeweggLogo() {
  return (
    <span className="text-lg font-bold text-black italic">newegg</span>
  );
}

function GEHealthCareLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
        <span className="text-[8px] font-bold text-black">GE</span>
      </div>
      <span className="text-sm font-medium text-black">HealthCare</span>
    </div>
  );
}

function FreshlyLogo() {
  return (
    <span className="text-lg font-medium text-black tracking-wide">FRESHLY</span>
  );
}

function SainsburysLogo() {
  return (
    <span className="text-lg font-medium text-[#F06C00]">Sainsbury&apos;s</span>
  );
}

function TsLogo() {
  return (
    <span className="text-lg font-light text-gray-600 tracking-widest">ts</span>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Products", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Documentation & Resources", hasDropdown: true },
  { label: "Company", hasDropdown: true },
];

const defaultPartnerLogos: PartnerLogo[] = [
  { name: "ts", component: <TsLogo /> },
  { name: "Patreon", component: <PatreonLogo /> },
  { name: "Wise", component: <WiseLogo /> },
  { name: "Newegg", component: <NeweggLogo /> },
  { name: "GE HealthCare", component: <GEHealthCareLogo /> },
  { name: "Freshly", component: <FreshlyLogo /> },
  { name: "Sainsburys", component: <SainsburysLogo /> },
];

// Main Component
export default function CheckoutHero({
  mode = "light",
  headline = "ACCEPT\nPAYMENTS.\nACCESS SCALE.",
  description = "Accept payments online wherever your customers are – on your website, in your app, or with flexible payments links embedded in key interaction channels.",
  ctaButtonText = "Get in touch",
  secondaryButtonText = "See documentation",
  badgeText = "ACCEPT ONLINE",
  navItems = defaultNavItems,
  partnerLogos = defaultPartnerLogos,
  signInText = "Sign In",
  getInTouchText = "Get in touch",
  onCtaClick,
  onSecondaryClick,
}: CheckoutHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative w-full bg-white min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16"
      >
        {/* Logo */}
        <CheckoutLogo />

        {/* Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavItemComponent key={item.label} {...item} />
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-4 py-2 text-sm font-medium text-[#0052FF] border border-[#0052FF] rounded-md hover:bg-[#0052FF]/5 transition-colors">
            {signInText}
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#0052FF] rounded-md hover:bg-[#0041CC] transition-colors">
            {getInTouchText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="px-3 py-1.5 text-xs font-medium tracking-widest text-gray-600 bg-[#F0F0F0] rounded-md">
                  {badgeText}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black italic text-black leading-[1.1] tracking-tight whitespace-pre-line"
              >
                {headline}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                {description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap items-center gap-4 mt-8"
              >
                <button
                  onClick={onCtaClick}
                  className="px-6 py-3 text-sm font-medium text-white bg-[#0052FF] rounded-md hover:bg-[#0041CC] transition-colors"
                >
                  {ctaButtonText}
                </button>
                <button
                  onClick={onSecondaryClick}
                  className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-700 transition-colors"
                >
                  {secondaryButtonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right Content - Globe Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative h-[400px] sm:h-[450px] lg:h-[500px]"
            >
              <GlobeIllustration />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="px-6 sm:px-8 lg:px-12 xl:px-16 py-12 mt-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-12">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                {logo.component}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
