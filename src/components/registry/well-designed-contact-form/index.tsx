"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Instagram, Facebook } from "lucide-react";

// Types
interface ContactInfo {
  address: string[];
  phone: string;
  email: string;
}

interface SocialLink {
  platform: "instagram" | "facebook";
  url: string;
  label: string;
}

interface WellDesignedContactFormProps {
  contactTitle?: string;
  contactDescription?: string;
  formTitle?: string;
  formDescription?: string;
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

// Default data
const defaultContactInfo: ContactInfo = {
  address: ["Kristalli 3, 45444,", "Ioannina, Greece"],
  phone: "+30 2651065744",
  email: "info@welldesigned.gr",
};

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "instagram",
    url: "https://instagram.com/welldesigned___",
    label: "instagram.com/welldesigned___",
  },
  {
    platform: "facebook",
    url: "https://facebook.com/welldesigned.gr",
    label: "facebook.com/welldesigned.gr",
  },
];

// Social Icon Component
function SocialIcon({ platform }: { platform: "instagram" | "facebook" }) {
  const iconClass = "w-4 h-4 text-white/80";

  if (platform === "instagram") {
    return <Instagram className={iconClass} />;
  }
  return <Facebook className={iconClass} />;
}

// Input Component with underline style
function UnderlineInput({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full bg-transparent border-b border-white/30 pb-3 pt-2 text-sm text-white/90 placeholder:text-white/50 focus:border-white/60 focus:outline-none transition-colors ${className}`}
    />
  );
}

// Textarea Component with underline style
function UnderlineTextarea({
  placeholder,
  value,
  onChange,
  className = "",
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={3}
      className={`w-full bg-transparent border-b border-white/30 pb-3 pt-2 text-sm text-white/90 placeholder:text-white/50 focus:border-white/60 focus:outline-none transition-colors resize-none ${className}`}
    />
  );
}

// Main Component
export default function WellDesignedContactForm({
  contactTitle = "Contact Us",
  contactDescription = "Let us be your creative partners on this journey, helping you create an indelible mark on Greece's hospitality landscape.",
  formTitle = "Enquiry Form",
  formDescription = "Let us be your creative partners on this journey, helping you create an indelible mark on Greece's hospitality landscape.",
  contactInfo = defaultContactInfo,
  socialLinks = defaultSocialLinks,
  namePlaceholder = "What's your name?",
  emailPlaceholder = "Your email address?",
  messagePlaceholder = "How can we help?",
  submitButtonText = "SEND ENQUIRY",
  onSubmit,
}: WellDesignedContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1A2928 0%, #263847 50%, #304046 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16 sm:px-8 lg:px-12">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Title */}
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-white tracking-wide">
                  {contactTitle}
                </h2>
                <div className="w-8 h-px bg-white/40 mt-4" />
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/60 max-w-sm">
                {contactDescription}
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
                  Contact Details
                </h3>

                <div className="space-y-1.5">
                  {contactInfo.address.map((line, index) => (
                    <p key={index} className="text-sm text-white/60">
                      {line}
                    </p>
                  ))}
                  <p className="text-sm text-white/60 mt-3">{contactInfo.phone}</p>
                  <p className="text-sm text-white/60">{contactInfo.email}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
                  Follow Us
                </h3>

                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-white/60 hover:text-white/90 transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <SocialIcon platform={link.platform} />
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Title */}
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-white tracking-wide">
                  {formTitle}
                </h2>
                <div className="w-8 h-px bg-white/40 mt-4" />
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/60 max-w-sm">
                {formDescription}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <UnderlineInput
                  placeholder={namePlaceholder}
                  value={formData.name}
                  onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                />

                <UnderlineInput
                  type="email"
                  placeholder={emailPlaceholder}
                  value={formData.email}
                  onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
                />

                <UnderlineTextarea
                  placeholder={messagePlaceholder}
                  value={formData.message}
                  onChange={(value) => setFormData((prev) => ({ ...prev, message: value }))}
                />

                <motion.button
                  type="submit"
                  className="w-full mt-4 py-4 px-6 bg-white text-[#1A2928] text-sm font-medium tracking-[0.15em] rounded-full hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitButtonText}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
