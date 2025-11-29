"use client";

import { motion } from "motion/react";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface ProductCard {
  image: string;
  title: string;
  price: string;
}

interface LandingfolioHero14Props {
  logoText?: string;
  navItems?: NavItem[];
  createAccountText?: string;
  loginText?: string;
  cartCount?: number;
  promoText?: string;
  headline?: string;
  ctaText?: string;
  products?: ProductCard[];
  heroImage?: string;
  onCtaClick?: () => void;
  onCreateAccount?: () => void;
  onLogin?: () => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "AllBrands", href: "#" },
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Kids", href: "#" },
];

// Default products
const defaultProducts: ProductCard[] = [
  {
    image: "/landingfolio-hero/hero-14/smartwatch.png",
    title: "Fitbit Smart Watch",
    price: "$129.00",
  },
  {
    image: "/landingfolio-hero/hero-14/running-shoes.png",
    title: "Running Shoe for Fitness",
    price: "$99.00",
  },
];

// Floating Product Card Component
function FloatingProductCard({
  product,
  className = "",
  delay = 0,
}: {
  product: ProductCard;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + delay, duration: 0.7, ease: "easeOut" }}
      className={`absolute bg-white rounded-lg shadow-xl overflow-hidden ${className}`}
    >
      <div className="w-full aspect-[4/3] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={120}
          height={90}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-[#1A1A2E] leading-tight">
          {product.title}
        </p>
        <p className="text-xs text-[#6B7280] mt-1">{product.price}</p>
      </div>
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero14({
  logoText = "/RAREBLOCKS",
  navItems = defaultNavItems,
  createAccountText = "Create Free Account",
  loginText = "Login",
  cartCount = 2,
  promoText = 'Use "FIT40" coupon to get 40% flat discount',
  headline = "Fitness kits\nthat help\nyou keep fit.",
  ctaText = "Start shopping",
  products = defaultProducts,
  heroImage = "/landingfolio-hero/hero-14/fitness-woman.png",
  onCtaClick,
  onCreateAccount,
  onLogin,
}: LandingfolioHero14Props) {
  return (
    <section className="w-full min-h-screen bg-[#FAFAFA] overflow-hidden">
      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-[#1A1A2E] font-bold text-lg tracking-tight">
                {logoText}
              </span>
            </div>

            {/* Right Side - Account, Login, Search, Cart */}
            <div className="flex items-center gap-6">
              <button
                onClick={onCreateAccount}
                className="hidden sm:block text-sm text-[#1A1A2E] hover:text-gray-600 transition-colors"
              >
                {createAccountText}
              </button>
              <button
                onClick={onLogin}
                className="hidden sm:block text-sm text-[#1A1A2E] hover:text-gray-600 transition-colors"
              >
                {loginText}
              </button>
              <button className="p-2 text-[#1A1A2E] hover:text-gray-600 transition-colors">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <div className="relative">
                <button className="p-2 text-[#1A1A2E] hover:text-gray-600 transition-colors">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#1A1A2E] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-8 py-4 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#1A1A2E] hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start pt-12 lg:pt-20">
          {/* Left Content */}
          <div className="pt-4 lg:pt-12">
            {/* Promo Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm text-[#6B7280] mb-6"
            >
              {promoText}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1A1A2E] leading-[1.1] tracking-tight whitespace-pre-line"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {headline}
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10"
            >
              <button
                onClick={onCtaClick}
                className="px-8 py-4 bg-[#1A1A2E] text-white text-sm font-medium rounded-lg hover:bg-[#2D2D44] transition-colors"
              >
                {ctaText}
              </button>
            </motion.div>
          </div>

          {/* Right Content - Hero Image with Product Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full h-full"
            >
              <Image
                src={heroImage}
                alt="Fitness lifestyle"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            {/* Floating Product Cards */}
            {products[0] && (
              <FloatingProductCard
                product={products[0]}
                className="w-[180px] bottom-[15%] left-[5%] z-10"
                delay={0}
              />
            )}
            {products[1] && (
              <FloatingProductCard
                product={products[1]}
                className="w-[180px] top-[30%] right-[0%] z-10"
                delay={0.15}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
