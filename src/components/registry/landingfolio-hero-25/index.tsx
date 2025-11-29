"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface ChecklistItem {
  text: string;
}

interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  imageSrc: string;
}

interface LandingfolioHero25Props {
  logoText?: string;
  navItems?: NavItem[];
  ctaNavText?: string;
  headline?: string;
  description?: string;
  ctaButtonText?: string;
  checklistItems?: ChecklistItem[];
  testimonial?: Testimonial;
  onCtaNavClick?: () => void;
  onCtaButtonClick?: () => void;
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

const defaultChecklistItems: ChecklistItem[] = [
  { text: "Get unlimited design blocks." },
  { text: "Build website in less than 5 minutes." },
  { text: "Made for Webflow developers." },
];

const defaultTestimonial: Testimonial = {
  quote:
    "You made it so simple. Our new site is so much faster and easier to work with than my old site. I just choose the page, make the change and it's done.",
  authorName: "Ralph Edwards",
  authorTitle: "CEO - Brain360",
  imageSrc:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
};

// Logo Component
function ClarityLogo({ text = "ClarityUI" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border-[3px] border-[#3B82F6]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#3B82F6]" />
      </div>
      <span className="text-gray-900 font-semibold text-lg tracking-tight">
        {text}
      </span>
    </div>
  );
}

// Quote Icon Component
function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 32V19.2C0 15.7333 0.533333 12.5333 1.6 9.6C2.66667 6.66667 4.26667 4.13333 6.4 2C8.53333 -0.133333 11.2 -0.666667 14.4 1.33333e-06L16 5.6C13.8667 6.13333 12.0667 7.2 10.6 8.8C9.13333 10.4 8.4 12.2667 8.4 14.4H16V32H0ZM24 32V19.2C24 15.7333 24.5333 12.5333 25.6 9.6C26.6667 6.66667 28.2667 4.13333 30.4 2C32.5333 -0.133333 35.2 -0.666667 38.4 1.33333e-06L40 5.6C37.8667 6.13333 36.0667 7.2 34.6 8.8C33.1333 10.4 32.4 12.2667 32.4 14.4H40V32H24Z"
        fill="#3B82F6"
      />
    </svg>
  );
}

// Main Component
export default function LandingfolioHero25({
  logoText = "ClarityUI",
  navItems = defaultNavItems,
  ctaNavText = "Start free trial",
  headline = "Copy, Paste & Ship\nWebsite in Minutes.",
  description = "Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for SaaS.",
  ctaButtonText = "Build your first website in Webflow",
  checklistItems = defaultChecklistItems,
  testimonial = defaultTestimonial,
  onCtaNavClick,
  onCtaButtonClick,
}: LandingfolioHero25Props) {
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 lg:px-12 xl:px-24 py-6"
      >
        {/* Logo */}
        <ClarityLogo text={logoText} />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-gray-800 hover:text-gray-900 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={onCtaNavClick}
          className="px-6 py-3 bg-white text-gray-900 text-sm font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
        >
          {ctaNavText}
        </button>
      </motion.header>

      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row px-6 lg:px-12 xl:px-24 pt-8 lg:pt-20 pb-12 lg:pb-0 min-h-[calc(100vh-88px)]">
        {/* Left Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-xl lg:max-w-[540px]">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-[1.12] tracking-[-0.02em] mb-6 whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-lg leading-[1.7] mb-8 max-w-[480px]"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <button
              onClick={onCtaButtonClick}
              className="px-8 py-4 bg-[#3C73E1] text-white text-[15px] font-medium rounded-full hover:bg-[#2F5EC4] transition-colors shadow-lg shadow-blue-500/20"
            >
              {ctaButtonText}
            </button>
          </motion.div>

          {/* Checklist */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#3C73E1] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-900 text-[15px] font-medium">
                  {item.text}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right Content - Image and Testimonial */}
        <div className="relative flex-1 mt-12 lg:mt-0 lg:ml-12">
          {/* Light Blue Background Shape */}
          <div className="absolute -top-20 -right-24 w-[calc(100%+96px)] h-[calc(100%+80px)] bg-[#EFF6FF] rounded-bl-[80px] -z-0" />

          {/* Person Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative z-10 w-full max-w-[380px] mx-auto lg:mx-0 lg:ml-8"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.authorName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 lg:-left-12 w-[95%] max-w-[360px]"
            >
              {/* Quote Icon - Outside the card, top-left */}
              <QuoteIcon className="w-10 h-8 mb-2 -ml-1" />

              {/* Testimonial Card */}
              <div className="bg-[#1C2639] rounded-xl p-5 shadow-xl">
                {/* Quote Text */}
                <p className="text-white text-[14px] leading-[1.6] mb-4">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div>
                  <p className="text-white font-semibold text-[14px]">
                    {testimonial.authorName}
                  </p>
                  <p className="text-gray-400 text-[12px]">{testimonial.authorTitle}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
