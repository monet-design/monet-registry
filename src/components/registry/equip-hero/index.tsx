"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface EquipHeroProps {
  logo?: string;
  navLinks?: { label: string; href: string }[];
  loginButtonText?: string;
  headline?: string;
  subheadline?: string;
  ctaButtonText?: string;
  yellowCardTitle?: string;
  yellowCardDuration?: string;
  yellowCardTag?: string;
  orangeCardTitle?: string;
  orangeCardBadge?: string;
  orangeCardAmount?: string;
  orangeCardMilestones?: { label: string; position: "top" | "bottom" }[];
  pinkCardName?: string;
  pinkCardRole?: string;
  pinkCardMessage?: string;
  partnerLogos?: { name: string; logo: React.ReactNode }[];
  avatar1Src?: string;
  avatar2Src?: string;
}

export default function EquipHero({
  logo = "equip",
  navLinks = [
    { label: "Publications", href: "#" },
    { label: "About", href: "#" },
    { label: "Get in touch", href: "#" },
  ],
  loginButtonText = "Log in",
  headline = "Give your\nemployees financial\npeace-of-mind",
  subheadline = "The all-in-one financial planning platform for employees.\nExperience the magic of a happy, healthy and loyal workforce.",
  ctaButtonText = "Get started",
  yellowCardTitle = "How to create\na financial plan\nthat works",
  yellowCardDuration = "20 min • Podcast",
  yellowCardTag = "For you",
  orangeCardTitle = "Financial plan",
  orangeCardBadge = "ON TRACK",
  orangeCardAmount = "€35,154",
  orangeCardMilestones = [
    { label: "Retirement", position: "top" },
    { label: "Buying a house", position: "bottom" },
  ],
  pinkCardName = "Tina Berg",
  pinkCardRole = "Certified financial coach",
  pinkCardMessage = "Hi Tina, I have a question\nabout my pension.",
  partnerLogos = [],
  avatar1Src = "/registry/equip-hero/avatar-1.png",
  avatar2Src = "/registry/equip-hero/avatar-2.png",
}: EquipHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tight text-black">{logo}</div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-gray-800 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="bg-[#6981E7] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#5a72d8] transition-colors">
          {loginButtonText}
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-8 pt-12 pb-24">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-black leading-[1.1] tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            {subheadline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < subheadline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-[#7E95E7] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#6981E7] transition-colors"
          >
            {ctaButtonText}
          </motion.button>
        </motion.div>

        {/* Yellow Card - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute top-[20vh] right-0 md:right-[-40px] lg:right-[-60px] w-56 bg-[#FBE182] rounded-3xl p-5 shadow-lg transform translate-x-1/4"
        >
          <h3
            className="text-black text-lg font-semibold leading-snug"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {yellowCardTitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < yellowCardTitle.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h3>
          <p className="text-gray-700 text-xs mt-2">{yellowCardDuration}</p>
          <div className="flex items-center gap-2 mt-4">
            <span className="bg-white/50 text-black text-xs font-medium px-3 py-1.5 rounded-full">
              {yellowCardTag}
            </span>
            <button className="bg-white/50 p-2 rounded-full hover:bg-white/70 transition-colors">
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </motion.div>

        {/* Orange Card - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute bottom-[-4vh] left-0 md:left-[-20px] lg:left-[-40px] w-64 bg-[#FC7155] rounded-3xl p-5 shadow-lg"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#e86549]">
              <Image
                src={avatar1Src}
                alt="User avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">{orangeCardTitle}</h4>
              <span className="inline-block bg-black/20 text-white text-[10px] font-medium px-2 py-0.5 rounded-full mt-0.5">
                {orangeCardBadge}
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-28 mt-2">
            <svg className="w-full h-full" viewBox="0 0 200 80">
              <path
                d="M 10 70 Q 50 65 80 50 T 150 20 T 190 10"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              />
              <path
                d="M 10 70 Q 50 65 80 50 T 120 35"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="120" cy="35" r="4" fill="white" />
            </svg>

            {/* Milestones */}
            {orangeCardMilestones.map((milestone, i) => (
              <span
                key={i}
                className={`absolute ${
                  milestone.position === "top"
                    ? "top-0 right-4"
                    : "bottom-8 left-8"
                } bg-[#e86549] text-white text-[10px] font-medium px-2 py-1 rounded-full`}
              >
                {milestone.label}
              </span>
            ))}

            {/* Today marker */}
            <span className="absolute bottom-0 left-1/3 bg-white text-black text-[10px] font-medium px-2 py-0.5 rounded-full">
              Today
            </span>
          </div>

          {/* Amount */}
          <div className="mt-4 text-white text-3xl font-bold">{orangeCardAmount}</div>
        </motion.div>

        {/* Pink Card - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute bottom-[-12vh] right-8 md:right-16 lg:right-24 w-64 bg-[#FEACFF] rounded-3xl p-5 shadow-lg"
        >
          {/* Coach Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#f59af7]">
              <Image
                src={avatar2Src}
                alt="Coach avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-black text-sm font-semibold">{pinkCardName}</h4>
              <p className="text-black/70 text-xs">{pinkCardRole}</p>
            </div>
          </div>

          {/* Chat Message */}
          <div className="bg-white rounded-2xl p-3 shadow-sm">
            <p className="text-black text-sm leading-relaxed">
              {pinkCardMessage.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < pinkCardMessage.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Reply indicator */}
          <div className="mt-3 text-[#d946ef] text-sm font-medium flex items-center gap-1">
            <span>Sure! Would you rather talk...</span>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-8 py-4 text-gray-400"
        >
          {partnerLogos.length > 0 ? (
            partnerLogos.map((partner, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium">
                {partner.logo}
                <span>{partner.name}</span>
              </div>
            ))
          ) : (
            <>
              <span className="text-xs tracking-widest opacity-50">LOGOS...</span>
              <div className="flex items-center gap-1 text-xs font-bold tracking-wide opacity-40">
                <span>WAR</span>
                <span className="text-[10px]">child</span>
              </div>
              <span className="text-xs tracking-wider font-semibold opacity-40">TRECHT</span>
              <span className="text-xs tracking-wider font-medium opacity-40">ANTLER</span>
            </>
          )}
        </motion.div>
      </div>

      {/* Google Font for DM Serif Display */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      `}</style>
    </section>
  );
}
