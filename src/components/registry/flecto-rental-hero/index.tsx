"use client";

import { motion } from "motion/react";
import {
  ChevronDown,
  Calendar,
  Link2,
  Mail,
  Phone,
  Truck,
  Shield,
  ArrowDown,
  MessageCircle,
} from "lucide-react";

interface FlectoRentalHeroProps {
  title?: string;
  subtitle?: string;
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  profileName?: string;
  profileRole?: string;
  profileImage?: string;
  items?: {
    icon?: string;
    name: string;
    unitPrice: string;
    depositPrice: string;
    totalPrice: string;
  }[];
  services?: {
    icon: "delivery" | "insurance";
    name: string;
    description: string;
    price: string;
    total: string;
  }[];
  dateRange?: { start: string; end: string };
  rentalDays?: number;
}

export default function FlectoRentalHero({
  title = "A platform that brings it\nall together",
  subtitle = "Designed to improve the renting experience",
  logoText = "Flecto",
  navLinks = [
    { label: "About", href: "#" },
    { label: "Market", href: "#" },
  ],
  profileName = "John Cooper",
  profileRole = "Photography Store",
  profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  items = [
    {
      icon: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=50&h=50&fit=crop",
      name: "GoPro HERO10",
      unitPrice: "100",
      depositPrice: "200",
      totalPrice: "700.00",
    },
  ],
  services = [
    {
      icon: "delivery",
      name: "Delivery",
      description: "Pick up & Return",
      price: "20",
      total: "20.00",
    },
    {
      icon: "insurance",
      name: "Insurance",
      description: "",
      price: "20",
      total: "20.00",
    },
  ],
  dateRange = { start: "20/03/2022", end: "24/03/2022" },
  rentalDays = 5,
}: FlectoRentalHeroProps) {
  const titleLines = title.split("\n");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#004736]">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-12">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center">
              <svg viewBox="0 0 32 32" className="h-8 w-8">
                <rect x="0" y="0" width="14" height="14" rx="2" fill="#3CB476" />
                <rect x="18" y="0" width="14" height="14" rx="2" fill="#3CB476" />
                <rect x="0" y="18" width="14" height="14" rx="2" fill="#3CB476" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">{logoText}</span>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Nav */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <button className="flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10">
            EN
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
            <Calendar className="h-4 w-4" />
            Book a Demo
          </button>
          <button className="rounded-full bg-[#3CB476] px-6 py-2 text-sm font-medium text-white transition-all hover:bg-[#2da366]">
            Login
          </button>
        </motion.div>
      </nav>

      {/* Background Decorative Blocks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left stair pattern */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-0 top-[15%] h-[500px] w-[200px]"
        >
          <div className="absolute left-0 top-0 h-[120px] w-[80px] rounded-r-lg bg-[#3CB476]" />
          <div className="absolute left-0 top-[100px] h-[400px] w-[140px] rounded-r-lg bg-[#3CB476]" />
        </motion.div>

        {/* Right stair pattern */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-0 top-[40%] h-[400px] w-[200px]"
        >
          <div className="absolute right-0 top-0 h-[80px] w-[180px] rounded-l-lg bg-[#3CB476]" />
          <div className="absolute right-0 top-[60px] h-[80px] w-[120px] rounded-l-lg bg-[#3CB476]" />
          <div className="absolute right-0 top-[120px] h-[280px] w-[60px] rounded-l-lg bg-[#3CB476]" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 text-center lg:pt-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {titleLines.map((line, index) => (
            <span key={index} className="block italic">
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-base text-white/60 md:text-lg"
        >
          {subtitle}
        </motion.p>

        {/* Cards Section */}
        <div className="relative mt-12 flex w-full max-w-4xl items-start justify-center gap-4 px-4">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-[180px] shrink-0 rounded-xl bg-[#F5F3EE] p-5 shadow-xl"
          >
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                <img
                  src={profileImage}
                  alt={profileName}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-gray-900">
                {profileName}
              </h3>
              <p className="text-xs text-gray-500">{profileRole}</p>
              <div className="mt-4 flex gap-2">
                <button className="flex h-9 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50">
                  <Mail className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50">
                  <Phone className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 flex gap-2 text-[10px] text-gray-400">
                <span>email</span>
                <span>mobile</span>
              </div>
            </div>
          </motion.div>

          {/* Main Items Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-[320px] rounded-xl bg-white p-5 shadow-2xl"
          >
            {/* Status Tabs */}
            <div className="mb-4 flex gap-2">
              <span className="rounded-full bg-[#E8F5EE] px-3 py-1 text-xs font-medium text-[#004736]">
                On Going
              </span>
              <span className="flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Not Paid
              </span>
            </div>

            {/* Items Section */}
            <h3 className="text-lg font-semibold text-[#004736]">Items</h3>
            <div className="mt-2 grid grid-cols-4 gap-2 text-[10px] text-gray-400">
              <span></span>
              <span>Unit Price</span>
              <span>Deposit Price</span>
              <span>Total (5d)</span>
            </div>
            <div className="mt-2 border-t border-gray-100 pt-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 items-center gap-2 py-2"
                >
                  <div className="flex items-center gap-2">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-6 w-6 rounded object-cover"
                      />
                    )}
                    <span className="text-xs font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600">
                    <span className="text-[#3CB476] font-semibold">{"\u20AC"}{item.unitPrice}</span>
                    <span className="text-gray-400">/day</span>
                  </span>
                  <span className="text-xs text-gray-600">
                    <span className="text-[#3CB476] font-semibold">{"\u20AC"}{item.depositPrice}</span>
                    <span className="text-gray-400"> Blocking</span>
                  </span>
                  <span className="text-xs font-semibold text-gray-800">
                    {"\u20AC"}{item.totalPrice}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <h3 className="mt-4 text-lg font-semibold text-[#004736]">
              Additional Services
            </h3>
            <div className="mt-2 space-y-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-t border-gray-100 py-2"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        service.icon === "delivery"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {service.icon === "delivery" ? (
                        <Truck className="h-3.5 w-3.5" />
                      ) : (
                        <Shield className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-800">
                        {service.name}
                      </span>
                      {service.description && (
                        <p className="text-[10px] text-gray-400">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600">
                      <span className="text-[#3CB476] font-semibold">{"\u20AC"}{service.price}</span>
                      <span className="text-gray-400"> Booking</span>
                    </span>
                    <span className="text-xs font-semibold text-gray-800">
                      {"\u20AC"}{service.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-[180px] shrink-0 rounded-xl bg-white p-4 shadow-xl"
          >
            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-800">Dates</h4>
              <p className="text-[10px] text-gray-400">
                {rentalDays}-day rental
              </p>
            </div>
            <div className="mt-3 rounded-lg border border-gray-200 px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">
                  {dateRange.start} - {dateRange.end}
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
              </div>
            </div>
            <div className="mt-3 flex items-start gap-2">
              <div className="relative mt-0.5 h-5 w-9 rounded-full bg-[#004736]">
                <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
              </div>
              <p className="text-[9px] leading-tight text-gray-500">
                Schedule Delivery & Pick up
                <br />
                on my Calendar
              </p>
            </div>
          </motion.div>
        </div>

        {/* Send Flecto Link Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-6 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-lg transition-all hover:shadow-xl"
        >
          <Link2 className="h-4 w-4" />
          Send Flecto Link
        </motion.button>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-8 left-8">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center gap-4 text-white/40"
        >
          <span className="text-sm">01</span>
          <div className="relative">
            <span className="text-sm font-semibold text-white">02</span>
            <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-white" />
          </div>
          <span className="text-sm">03</span>
        </motion.div>
        <div className="text-right">
          <p className="text-xs text-white/60">SaaS</p>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3CB476] text-white shadow-lg transition-all hover:bg-[#2da366]"
        >
          <MessageCircle className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
