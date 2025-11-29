"use client";

import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface LandingfolioHero32Props {
  logoText?: string;
  navItems?: NavItem[];
  createAccountText?: string;
  loginText?: string;
  cartCount?: number;
  tagline?: string;
  headline?: React.ReactNode;
  formLabel?: string;
  emailPlaceholder?: string;
  submitButtonText?: string;
  bookImage?: string;
  bookAlt?: string;
  onCreateAccount?: () => void;
  onLogin?: () => void;
  onCartClick?: () => void;
  onSubmit?: (email: string) => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "All Artworks", href: "#artworks" },
  { label: "All Artists", href: "#artists" },
  { label: "Sell Your Artwork", href: "#sell" },
];

// Lorem ipsum background text
const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Cras fringilla. Cras eget leo. Nam libero tempus, congue a, convallis eget, tristique nec, sem. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu.`;

// Logo Component
function Logo({ text = "/RAREBLOCKS" }: { text?: string }) {
  return (
    <span className="text-base font-bold tracking-wide text-[#1a1a1a]">
      {text}
    </span>
  );
}

// Main Component
export default function LandingfolioHero32({
  logoText = "/RAREBLOCKS",
  navItems = defaultNavItems,
  createAccountText = "Create Free Account",
  loginText = "Login",
  cartCount = 3,
  tagline = "The only book you'll need to earn more",
  headline = (
    <>
      Learn to earn more
      <br />
      money
      <span className="inline-flex flex-col justify-center mx-0.5 gap-[2px] w-[16px] align-middle">
        <span className="w-full h-[3px] bg-[#1a1a1a]" />
        <span className="w-full h-[3px] bg-[#1a1a1a]" />
        <span className="w-full h-[3px] bg-[#1a1a1a]" />
      </span>
      without
      <br />
      loosing time.
    </>
  ),
  formLabel = "Get your free chapter now",
  emailPlaceholder = "Your email where we'll send the book",
  submitButtonText = "Send My Free Chapter",
  bookImage = "/registry/landingfolio-hero-32/psychology-of-money-book.png",
  bookAlt = "The Psychology of Money Book",
  onCreateAccount,
  onLogin,
  onCartClick,
  onSubmit,
}: LandingfolioHero32Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#FFEA43] overflow-hidden">
      {/* Lorem Ipsum Background Text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden px-8 py-24 text-[11px] leading-[1.6] text-[#BFB142]/60 font-normal select-none"
        style={{
          wordSpacing: "4px",
          letterSpacing: "0.3px",
          columns: "4",
          columnGap: "30px",
        }}
      >
        {loremIpsumText}
        {loremIpsumText}
        {loremIpsumText}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 lg:px-12"
      >
        {/* Logo */}
        <Logo text={logoText} />

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#1a1a1a] hover:text-[#1a1a1a]/70 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <button
            onClick={onCreateAccount}
            className="hidden sm:block text-sm text-[#1a1a1a] hover:text-[#1a1a1a]/70 transition-colors"
          >
            {createAccountText}
          </button>
          <button
            onClick={onLogin}
            className="text-sm text-[#1a1a1a] hover:text-[#1a1a1a]/70 transition-colors"
          >
            {loginText}
          </button>
          <button
            onClick={onCartClick}
            className="relative text-[#1a1a1a] hover:text-[#1a1a1a]/70 transition-colors"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] font-medium flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative flex-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-[280px] sm:w-[340px] lg:w-[420px] aspect-[3/4]">
              <Image
                src={bookImage}
                alt={bookAlt}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 mt-12 lg:mt-0 max-w-xl">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[#1a1a1a]/70 text-base italic mb-6"
            >
              {tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight"
            >
              {headline}
            </motion.h1>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10"
            >
              <p className="text-sm font-semibold text-[#1a1a1a] mb-3">
                {formLabel}
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceholder}
                  className="w-full px-5 py-4 bg-[#FEFDED] border border-[#e5e5dc] rounded-md text-[#1a1a1a] text-sm placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white text-sm font-medium rounded-md hover:bg-[#333333] transition-colors"
                >
                  {submitButtonText}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
