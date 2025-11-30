"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Twitter, Dribbble } from "lucide-react";
import { useState, useEffect } from "react";

interface SocialLink {
  icon: "email" | "linkedin" | "twitter" | "dribbble";
  label: string;
  href: string;
}

interface HunterHastingsProps {
  title?: string;
  questionPrefix?: string;
  questionHighlight?: string;
  questionSuffix?: string;
  socialLinks?: SocialLink[];
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  submitText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

function SocialLinkCard({
  link,
  index,
}: {
  link: SocialLink;
  index: number;
}) {
  const Icon = iconMap[link.icon];
  const glowColors = [
    "rgba(59, 130, 246, 0.4)", // blue
    "rgba(59, 130, 246, 0.3)", // blue lighter
    "rgba(234, 179, 8, 0.4)", // yellow
    "rgba(234, 179, 8, 0.3)", // yellow lighter
  ];

  return (
    <motion.a
      href={link.href}
      target={link.icon !== "email" ? "_blank" : undefined}
      rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="group relative flex items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#1a1a1b] px-4 py-3 transition-all duration-300 hover:border-[#3a3a3a] hover:bg-[#222]"
      style={{
        boxShadow: `0 0 40px ${glowColors[index % 4]}`,
      }}
    >
      <Icon className="h-4 w-4 text-gray-400 transition-colors group-hover:text-white" />
      <span className="text-sm text-gray-300 transition-colors group-hover:text-white">
        {link.label}
      </span>
    </motion.a>
  );
}

export default function HunterHastings({
  title = "Contact",
  questionPrefix = "What",
  questionHighlight = "are",
  questionSuffix = "you building?",
  socialLinks = [
    { icon: "email", label: "h@hah.to", href: "mailto:h@hah.to" },
    {
      icon: "linkedin",
      label: "/in/hahdesign",
      href: "https://linkedin.com/in/hahdesign",
    },
    { icon: "twitter", label: "@hah", href: "https://twitter.com/hah" },
    { icon: "dribbble", label: "/hah", href: "https://dribbble.com/hah" },
  ],
  namePlaceholder = "Name",
  emailPlaceholder = "Email",
  messagePlaceholder = "How can I help? Please include rough scope, budget, timeframe, etc.",
  submitText = "Send",
  onSubmit,
}: HunterHastingsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <section className="min-h-screen w-full bg-[#151515] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-md">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-normal text-white sm:text-5xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
        </motion.h1>

        {/* Social Links */}
        <div className="mb-12 flex flex-col gap-2">
          {socialLinks.map((link, index) => (
            <SocialLinkCard key={link.label} link={link} index={index} />
          ))}
        </div>

        {/* Question */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-6 text-center text-lg text-white"
        >
          {questionPrefix}{" "}
          <span
            className="italic"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {questionHighlight}
          </span>{" "}
          {questionSuffix}
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          {/* Name and Email Row */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder={namePlaceholder}
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="flex-1 rounded-lg border border-[#2a2a2a] bg-[#1a1a1b] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#3a3a3a]"
            />
            <input
              type="email"
              placeholder={emailPlaceholder}
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="flex-1 rounded-lg border border-[#2a2a2a] bg-[#1a1a1b] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#3a3a3a]"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            placeholder={messagePlaceholder}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            rows={5}
            className="w-full resize-none rounded-lg border border-[#2a2a2a] bg-[#1a1a1b] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#3a3a3a]"
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-[#2e2e2e] py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a3a3a]"
          >
            {submitText}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
