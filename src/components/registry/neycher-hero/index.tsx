"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
}

interface ProductCardProps {
  productImage?: string;
  productName?: string;
  tagline?: string;
  highlightedText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

interface NeycherHeroProps {
  brandName?: string;
  navItems?: NavItem[];
  headline?: string;
  subheadline?: string;
  loginText?: string;
  cartCount?: number;
  flowerImageSrc?: string;
  womanImageSrc?: string;
  productCard?: ProductCardProps;
  onLoginClick?: () => void;
  onCartClick?: () => void;
}

function ProductCard({
  productImage = "/registry/neycher-hero/product.png",
  tagline = "Cure",
  highlightedText = "BV-causing bacteria",
  ctaText = "Shop Now",
  onCtaClick,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute bottom-16 right-8 w-56 overflow-hidden rounded-2xl bg-white shadow-xl lg:bottom-24 lg:right-16 lg:w-64"
    >
      {/* Product Image Section */}
      <div className="relative h-28 w-full bg-[#F6F6F6] p-4 lg:h-32">
        <div className="relative mx-auto h-full w-32 lg:w-36">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Product package placeholder */}
            <div className="relative h-20 w-full rounded-lg bg-gradient-to-br from-[#E8D4E8] to-[#D4B8D4] p-2 shadow-sm lg:h-24">
              <div className="absolute left-2 top-2 text-[8px] font-medium text-[#8B5A8B] lg:text-[9px]">
                Neycher
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="h-1 w-full rounded bg-[#C89BC8]/40" />
                <div className="mt-1 h-1 w-3/4 rounded bg-[#C89BC8]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-4 text-center">
        <p className="text-sm text-[#333] lg:text-base">
          {tagline}{" "}
          <span className="italic">{highlightedText}</span>
          {" "}in <span className="font-medium">1-3 days</span>.
        </p>
        <button
          onClick={onCtaClick}
          className="mt-3 w-full rounded-lg bg-[#5B9BD5] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4A8BC5] lg:py-3"
        >
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Shop", href: "#" },
  { label: "About", href: "#" },
  { label: "Journal", href: "#" },
];

export default function NeycherHero({
  brandName = "Neycher",
  navItems = defaultNavItems,
  headline = "It's time to break up with\nvaginal dryness, BV, and\nyeast infection.",
  subheadline = "We are your trusted companion on this path,\nbringing confidence and validity.",
  loginText = "Log In",
  cartCount = 0,
  flowerImageSrc = "/registry/neycher-hero/flower-bg.jpg",
  womanImageSrc = "/registry/neycher-hero/woman-portrait.jpg",
  productCard,
  onLoginClick,
  onCartClick,
}: NeycherHeroProps) {
  return (
    <section className="relative flex min-h-[600px] w-full flex-col lg:min-h-[700px] lg:flex-row">
      {/* Left Section - Pink Flower Background */}
      <div className="relative flex-1 overflow-hidden">
        {/* Flower Background Image */}
        <div className="absolute inset-0">
          <Image
            src={flowerImageSrc}
            alt="Pink flower background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex h-full flex-col p-6 lg:p-10">
          {/* Navigation - Left Side */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <span className="font-instrument-serif text-xl font-normal tracking-tight text-white lg:text-2xl">
              {brandName}
            </span>
            <div className="flex items-center gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>

          {/* Headline */}
          <div className="mt-auto pb-8 lg:pb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-instrument-serif text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {headline.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-sm leading-relaxed text-white/80 lg:text-base"
            >
              {subheadline.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < subheadline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Right Section - Woman Image */}
      <div className="relative flex-1 overflow-hidden bg-[#C5C9CC]">
        {/* Woman Portrait Image */}
        <div className="absolute inset-0">
          <Image
            src={womanImageSrc}
            alt="Smiling woman"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Right Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute right-6 top-6 z-10 flex items-center gap-4 lg:right-10 lg:top-10"
        >
          <button
            onClick={onLoginClick}
            className="text-sm text-[#333] transition-colors hover:text-black"
          >
            {loginText}
          </button>
          <button
            onClick={onCartClick}
            className="text-sm text-[#333] transition-colors hover:text-black"
          >
            Cart ({cartCount})
          </button>
        </motion.div>

        {/* Product Card */}
        <ProductCard {...productCard} />
      </div>
    </section>
  );
}
