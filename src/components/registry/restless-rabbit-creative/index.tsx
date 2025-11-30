"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronUp } from "lucide-react";

interface ContactInfo {
  locations: { city: string; state: string; zip: string }[];
  phone: string;
  instagram: string;
}

interface RestlessRabbitCreativeProps {
  title?: string;
  contactInfo?: ContactInfo;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

const defaultContactInfo: ContactInfo = {
  locations: [
    { city: "Winston Salem", state: "NC", zip: "27104" },
    { city: "Myrtle Beach", state: "SC", zip: "29677" },
  ],
  phone: "508-361-8820",
  instagram: "Instagram",
};

function RabbitLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* R letter with rabbit ears */}
      <path d="M10 90V10h30c15 0 25 8 25 22 0 10-6 18-16 21l20 37h-18l-18-35h-8v35H10zm15-48h14c7 0 11-4 11-10s-4-10-11-10H25v20z" />
      {/* Rabbit face integrated into design */}
      <path d="M75 55c0-12 10-22 22-22s22 10 22 22c0 8-4 15-10 19v16h-24V74c-6-4-10-11-10-19z" />
      {/* Eyes */}
      <circle cx="88" cy="52" r="4" fill="white" />
      <circle cx="106" cy="52" r="4" fill="white" />
      {/* Nose */}
      <path d="M94 62l3 4 3-4" stroke="white" strokeWidth="2" fill="none" />
      {/* Ears */}
      <path d="M82 33V15c0-3-5-3-5 0v18" />
      <path d="M112 33V15c0-3 5-3 5 0v18" />
    </svg>
  );
}

function RabbitPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 40"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified jumping rabbit silhouette */}
      <ellipse cx="15" cy="28" rx="8" ry="10" />
      <circle cx="15" cy="14" r="6" />
      <ellipse cx="10" cy="6" rx="2" ry="6" />
      <ellipse cx="20" cy="6" rx="2" ry="6" />
      <ellipse cx="6" cy="32" rx="3" ry="2" transform="rotate(-30 6 32)" />
      <ellipse cx="24" cy="32" rx="3" ry="2" transform="rotate(30 24 32)" />
    </svg>
  );
}

function ScatteredRabbits() {
  const rabbits = [
    { x: 12, y: 5, rotate: -20, scale: 0.7 },
    { x: 28, y: 18, rotate: 30, scale: 0.55 },
    { x: 18, y: 35, rotate: -45, scale: 0.8 },
    { x: 35, y: 8, rotate: 15, scale: 0.5 },
    { x: 48, y: 55, rotate: -30, scale: 0.65 },
    { x: 62, y: 25, rotate: 25, scale: 0.5 },
    { x: 72, y: 48, rotate: -15, scale: 0.7 },
    { x: 85, y: 15, rotate: 35, scale: 0.45 },
    { x: 22, y: 60, rotate: 20, scale: 0.55 },
    { x: 42, y: 75, rotate: -25, scale: 0.6 },
    { x: 58, y: 85, rotate: 40, scale: 0.45 },
    { x: 78, y: 68, rotate: -35, scale: 0.55 },
    { x: 90, y: 40, rotate: 10, scale: 0.5 },
    { x: 5, y: 80, rotate: -10, scale: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {rabbits.map((rabbit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          className="absolute"
          style={{
            left: `${rabbit.x}%`,
            top: `${rabbit.y}%`,
            transform: `rotate(${rabbit.rotate}deg) scale(${rabbit.scale})`,
          }}
        >
          <RabbitPattern className="w-8 h-10 text-[#8a8785] opacity-60" />
        </motion.div>
      ))}
    </div>
  );
}

export default function RestlessRabbitCreative({
  title = "Get in touch",
  contactInfo = defaultContactInfo,
  onSubmit,
}: RestlessRabbitCreativeProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[600px] bg-[#DCD8D7] py-12 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
      `}</style>

      {/* Scattered rabbit pattern background */}
      <ScatteredRabbits />

      <div className="relative z-10 max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 lg:gap-12 h-full">
          {/* Left Column - Form & Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  required
                  className="w-full bg-transparent border-b border-[#999795] py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                  className="w-full bg-transparent border-b border-[#999795] py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  required
                  rows={1}
                  className="w-full bg-transparent border-b border-[#999795] py-3 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Send Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 px-10 py-2.5 border border-[#1a1a1a] rounded-full text-sm font-medium text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-[#DCD8D7] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send
              </motion.button>
            </form>

            {/* Title - Get in touch */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-auto pt-12 text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1a1a1a] italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {title}
            </motion.h2>
          </motion.div>

          {/* Right Column - Contact Info & Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between h-full"
          >
            {/* Contact Information - Top Right */}
            <div className="flex gap-x-16">
              {/* Locations & Phone */}
              <div className="space-y-3">
                {contactInfo.locations.map((location, index) => (
                  <p
                    key={index}
                    className="text-sm text-[#1a1a1a] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {location.city},
                    <br />
                    {location.state} {location.zip}
                  </p>
                ))}

                {/* Phone */}
                <p
                  className="text-sm text-[#1a1a1a] pt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {contactInfo.phone}
                </p>
              </div>

              {/* Instagram */}
              <div>
                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {contactInfo.instagram}
                </a>
              </div>
            </div>

            {/* Logo - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto flex justify-end"
            >
              <div className="relative">
                {/* Custom Rb Logo with rabbit face in b */}
                <svg
                  viewBox="0 0 140 100"
                  fill="currentColor"
                  className="w-40 h-28 sm:w-48 sm:h-32 lg:w-56 lg:h-40 text-[#1a1a1a]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* R letter */}
                  <path d="M0 95V5h28c16 0 27 9 27 24 0 12-7 20-18 23l22 43H40L21 55H16v40H0zm16-50h11c8 0 12-5 12-12s-4-12-12-12H16v24z" />
                  {/* b stem */}
                  <path d="M72 95V5h14v90H72z" />
                  {/* b bowl (rabbit head shape) */}
                  <path d="M86 60c0-20 14-32 30-32 8 0 14 2 14 2v14s-5-2-11-2c-11 0-18 8-18 18s7 18 18 18c6 0 11-2 11-2v14s-6 2-14 2c-16 0-30-12-30-32z" />
                  {/* Rabbit ears on b */}
                  <path d="M102 28V8c0-3 4-3 4 0v20h-4z" />
                  <path d="M114 28V8c0-3 4-3 4 0v20h-4z" />
                  {/* Rabbit eye in b */}
                  <circle cx="118" cy="58" r="6" fill="#DCD8D7" />
                  <circle cx="119" cy="57" r="2.5" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-6 right-6 p-2 text-[#1a1a1a] hover:opacity-70 transition-opacity"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
