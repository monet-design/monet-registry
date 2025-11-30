"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Menu } from "lucide-react";

interface PriceTagProps {
  price: string;
  className?: string;
}

function PriceTag({ price, className = "" }: PriceTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className={`flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-lg ${className}`}
    >
      <div className="w-6 h-6 rounded-full bg-[#D4E157] flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#1a1a1a"/>
        </svg>
      </div>
      <span className="font-semibold text-sm text-gray-900">{price}</span>
    </motion.div>
  );
}

interface EventbedsHeroProps {
  tagline?: string;
  headline?: string;
  logoText?: string;
  getHelpText?: string;
  menuText?: string;
  priceTags?: { price: string; position: string }[];
  onGetHelpClick?: () => void;
  onMenuClick?: () => void;
}

export default function EventbedsHero({
  tagline = "Discover your next",
  headline = "PERFECT STAY",
  logoText = "eventbeds",
  getHelpText = "Get help",
  menuText = "Menu",
  priceTags = [
    { price: "£335", position: "top-left" },
    { price: "£349", position: "top-right" },
    { price: "£285", position: "bottom-right" },
  ],
  onGetHelpClick,
  onMenuClick,
}: EventbedsHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#F7F7F7] overflow-hidden">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4C9.373 4 4 9.373 4 16c0 4.418 2.388 8.268 5.938 10.344C9.344 22.156 12.344 19 16 19s6.656 3.156 6.063 7.344C25.612 24.268 28 20.418 28 16c0-6.627-5.373-12-12-12z" fill="#1a1a1a"/>
          </svg>
          <span className="text-xl font-medium text-gray-900">{logoText}</span>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <button
            onClick={onGetHelpClick}
            className="px-5 py-2.5 bg-[#404040] text-white text-sm font-medium rounded-lg hover:bg-[#333333] transition-colors"
          >
            {getHelpText}
          </button>
          <button
            onClick={onMenuClick}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#E5E5E5] text-gray-900 text-sm font-medium rounded-lg hover:bg-[#D9D9D9] transition-colors"
          >
            {menuText}
            <Menu size={16} />
          </button>
        </motion.div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 md:pt-16">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#656565] italic mb-2"
        >
          {tagline}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight text-center"
        >
          {headline}
        </motion.h1>
      </div>

      {/* Background City */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <Image
            src="/registry/eventbeds-hero/city-background.png"
            alt="3D City Background"
            width={1920}
            height={600}
            className="w-full h-auto object-cover object-bottom"
            priority
          />
        </motion.div>
      </div>

      {/* Stadium */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-[5%] md:left-[10%] bottom-[15%] md:bottom-[20%] z-10 w-[180px] md:w-[280px] lg:w-[320px]"
      >
        <Image
          src="/registry/eventbeds-hero/stadium.png"
          alt="Stadium"
          width={320}
          height={320}
          className="w-full h-auto"
        />
        {/* Floating emoji on stadium */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -top-4 right-4 bg-white rounded-full p-2 shadow-lg"
        >
          <span className="text-lg">😊</span>
        </motion.div>
      </motion.div>

      {/* Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 w-[200px] md:w-[280px] lg:w-[320px]"
      >
        <Image
          src="/registry/eventbeds-hero/phone-mockup.png"
          alt="Eventbeds App"
          width={320}
          height={640}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Price Tags */}
      {priceTags.map((tag, index) => {
        const positionClasses: Record<string, string> = {
          "top-left": "left-[20%] top-[35%] md:left-[25%] md:top-[40%]",
          "top-right": "right-[15%] top-[45%] md:right-[20%] md:top-[50%]",
          "bottom-right": "right-[10%] bottom-[35%] md:right-[15%] md:bottom-[40%]",
        };
        return (
          <PriceTag
            key={index}
            price={tag.price}
            className={`absolute z-30 ${positionClasses[tag.position] || ""}`}
          />
        );
      })}
    </section>
  );
}
