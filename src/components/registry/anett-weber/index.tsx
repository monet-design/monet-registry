"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Instagram, Mail } from "lucide-react";

interface AnettWeberProps {
  title?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  privacyText?: string;
  privacyLinkText?: string;
  privacyLinkHref?: string;
  sendButtonText?: string;
  instagramHandle?: string;
  instagramHref?: string;
  emailText?: string;
  emailHref?: string;
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
    acceptedPrivacy: boolean;
  }) => void;
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200
        ${checked ? "bg-white" : "bg-[#4a3d8a]"}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full transition-transform duration-200
          ${checked ? "translate-x-4 bg-[#342778]" : "translate-x-1 bg-white"}
        `}
      />
    </button>
  );
}

export default function AnettWeber({
  title = "CONTACT",
  namePlaceholder = "Name",
  emailPlaceholder = "E-mail",
  messagePlaceholder = "Message",
  privacyText = "Yes, I accept the",
  privacyLinkText = "Privacy Policy",
  privacyLinkHref = "#",
  sendButtonText = "Send",
  instagramHandle = "Anett Weber",
  instagramHref = "#",
  emailText = "Email me!",
  emailHref = "mailto:hello@example.com",
  onSubmit,
}: AnettWeberProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, email, message, acceptedPrivacy });
    }
  };

  const inputBaseClasses =
    "w-full bg-transparent border border-[#4a3d8a] rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/70 focus:outline-none focus:border-white/50 transition-colors";

  return (
    <section className="w-full bg-[#342778] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl md:text-6xl lg:text-7xl italic text-[#4a3d8a] mb-12 md:mb-16"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </motion.h2>

        {/* Content Grid - Form on Left, Contact Info on Right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputBaseClasses}
              />
              <input
                type="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputBaseClasses}
              />
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder={messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className={`${inputBaseClasses} resize-none min-h-[140px]`}
            />

            {/* Bottom Row: Privacy Toggle and Send Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              {/* Privacy Toggle */}
              <div className="flex items-center gap-3">
                <Toggle
                  checked={acceptedPrivacy}
                  onChange={setAcceptedPrivacy}
                />
                <span className="text-white/80 text-sm">
                  {privacyText}{" "}
                  <a
                    href={privacyLinkHref}
                    className="text-white underline hover:no-underline transition-all"
                  >
                    {privacyLinkText}
                  </a>
                </span>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="bg-[#302769] text-white px-8 py-2.5 rounded text-sm font-medium hover:bg-[#3a3570] transition-colors"
              >
                {sendButtonText}
              </button>
            </div>
          </motion.form>

          {/* Contact Info - Right side aligned with Message area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 md:mt-[60px]"
          >
            {/* Instagram */}
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm">{instagramHandle}</span>
            </a>

            {/* Email */}
            <a
              href={emailHref}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm">{emailText}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
