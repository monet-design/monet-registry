"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, CreditCard, Mail, MessageCircle, Smartphone, Bell } from "lucide-react";

interface CheckoutProductHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  logos?: Array<{ name: string; logo: React.ReactNode }>;
}

// Floating notification card component
function NotificationCard({
  icon,
  title,
  message,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  message: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute bg-white rounded-xl shadow-lg p-3 min-w-[180px] ${className}`}
    >
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-900 truncate">{title}</p>
          <p className="text-[10px] text-gray-500 line-clamp-2">{message}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Payment form card component
function PaymentCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="absolute right-0 top-1/4 bg-white rounded-xl shadow-xl p-4 w-[200px]"
    >
      <p className="text-xs font-bold text-gray-900 mb-3">PAYMENT</p>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
          <CreditCard className="w-2.5 h-2.5 text-white" />
        </div>
        <span className="text-xs text-gray-700">Visa Debit</span>
        <div className="ml-auto w-3 h-3 border border-gray-300 rounded-sm" />
      </div>
      <div className="space-y-2">
        <div className="h-7 bg-gray-100 rounded border border-gray-200" />
        <div className="flex gap-2">
          <div className="h-7 bg-gray-100 rounded border border-gray-200 flex-1" />
          <div className="h-7 bg-gray-100 rounded border border-gray-200 w-12" />
        </div>
        <button className="w-full h-8 bg-[#2D79F0] text-white text-xs font-medium rounded">
          PAY
        </button>
      </div>
    </motion.div>
  );
}

// Logo components for trust badges
function PatreonLogo() {
  return (
    <svg viewBox="0 0 100 24" className="h-5 w-auto fill-gray-800">
      <text x="0" y="18" className="text-[16px] font-bold tracking-wider">PATREON</text>
    </svg>
  );
}

function WiseLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto fill-gray-800">
      <text x="0" y="18" className="text-[16px] font-bold">WISE</text>
    </svg>
  );
}

function NeweggLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto fill-gray-800">
      <text x="0" y="18" className="text-[14px] font-medium italic">newegg</text>
    </svg>
  );
}

function FreshlyLogo() {
  return (
    <svg viewBox="0 0 90 24" className="h-5 w-auto fill-gray-800">
      <text x="0" y="18" className="text-[16px] font-medium tracking-wide">FRESHLY</text>
    </svg>
  );
}

function SainsburysLogo() {
  return (
    <svg viewBox="0 0 110 24" className="h-5 w-auto fill-gray-800">
      <text x="0" y="18" className="text-[14px] font-medium">Sainsbury&apos;s</text>
    </svg>
  );
}

function GEHealthCareLogo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-5 h-5 rounded-full border-2 border-gray-800 flex items-center justify-center">
        <span className="text-[8px] font-bold text-gray-800">GE</span>
      </div>
      <span className="text-xs text-gray-800">HealthCare</span>
    </div>
  );
}

const defaultLogos = [
  { name: "Patreon", logo: <PatreonLogo /> },
  { name: "Wise", logo: <WiseLogo /> },
  { name: "Newegg", logo: <NeweggLogo /> },
  { name: "GE HealthCare", logo: <GEHealthCareLogo /> },
  { name: "Freshly", logo: <FreshlyLogo /> },
  { name: "Sainsbury's", logo: <SainsburysLogo /> },
];

export default function CheckoutProductHero({
  badge = "ACCEPT ONLINE",
  title = "ACCEPT",
  subtitle = "PAYMENTS.",
  description = "Accept payments online wherever your customers are – on your website, in your app, or with flexible payments links embedded in key interaction channels.",
  primaryButtonText = "Get in touch",
  secondaryButtonText = "See documentation",
  onPrimaryClick,
  onSecondaryClick,
  logos = defaultLogos,
}: CheckoutProductHeroProps) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block px-3 py-1.5 bg-[#E9E9E9] text-gray-900 text-[10px] font-semibold tracking-[0.15em] uppercase rounded">
                {badge}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                <span className="italic">{title}</span>
                <br />
                <span className="italic">{subtitle}</span>
                <br />
                <span className="italic tracking-[0.02em]">ACCESS SCALE.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-base lg:text-lg max-w-md leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onPrimaryClick}
                className="px-6 py-3 bg-[#2D79F0] hover:bg-[#2563eb] text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors duration-200"
              >
                {secondaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right content - Illustration */}
          <div className="relative h-[400px] lg:h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              {/* World map image */}
              <Image
                src="/registry/checkout-product-hero/world-map.png"
                alt="Global payment network"
                fill
                className="object-contain"
                priority
              />

              {/* Floating UI elements */}
              <NotificationCard
                icon={
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Bell className="w-3 h-3 text-white" />
                  </div>
                }
                title="Notification"
                message="Prisme Beauty
Product back in stock!
Click to complete payment."
                className="top-0 right-4 lg:right-8"
                delay={0.4}
              />

              <NotificationCard
                icon={
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-white" />
                  </div>
                }
                title="WhatsApp"
                message="Hi Martha,
Please confirm your app
upgrade by completing
payment through the
link below."
                className="top-1/3 left-1/4"
                delay={0.5}
              />

              <NotificationCard
                icon={
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-red-500" />
                  </div>
                }
                title="Gmail"
                message="Electro Cube
Deposit payment link"
                className="bottom-1/4 right-8 lg:right-12"
                delay={0.7}
              />

              <PaymentCard delay={0.6} />

              {/* Apple Pay floating icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-1/4 right-1/3 bg-white rounded-lg shadow-lg p-2"
              >
                <Smartphone className="w-5 h-5 text-gray-800" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trust badges / Logo cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-gray-100"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-70">
            {logos.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                {item.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
