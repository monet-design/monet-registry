"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Twitter, Linkedin, Facebook, Instagram, ExternalLink } from "lucide-react";
import "./font.css";

// Types
interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

interface EigenTherapeuticsProps {
  headline?: string;
  address?: string[];
  email?: string;
  socialLinks?: SocialLink[];
  formLabels?: {
    fullName?: string;
    email?: string;
    company?: string;
    message?: string;
    submit?: string;
    recaptcha?: string;
  };
  onSubmit?: (data: FormData) => void;
}

// Default social links
const defaultSocialLinks: SocialLink[] = [
  {
    icon: <Twitter size={18} strokeWidth={1.5} />,
    href: "#",
    label: "Twitter",
  },
  {
    icon: <Linkedin size={18} strokeWidth={1.5} />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <Facebook size={18} strokeWidth={1.5} />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <Instagram size={18} strokeWidth={1.5} />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <ExternalLink size={18} strokeWidth={1.5} />,
    href: "#",
    label: "External",
  },
];

// Form Input Component
function FormInput({
  label,
  type = "text",
  value,
  onChange,
  index,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="space-y-2"
    >
      <label className="block font-mono text-xs tracking-wide text-[#808080]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-[#3a3a3a] bg-transparent pb-3 text-sm text-white placeholder:text-[#4a4a4a] focus:border-[#606060] focus:outline-none transition-colors"
      />
    </motion.div>
  );
}

// Form Textarea Component
function FormTextarea({
  label,
  value,
  onChange,
  index,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="space-y-2"
    >
      <label className="block font-mono text-xs tracking-wide text-[#808080]">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full resize-none border-b border-[#3a3a3a] bg-transparent pb-3 text-sm text-white placeholder:text-[#4a4a4a] focus:border-[#606060] focus:outline-none transition-colors"
      />
    </motion.div>
  );
}

// Fake reCAPTCHA Component
function FakeRecaptcha({ index }: { index: number }) {
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="inline-flex items-center gap-4 rounded-sm border border-[#4a4a4a] bg-[#f9f9f9] px-4 py-3"
    >
      <button
        type="button"
        onClick={() => setChecked(!checked)}
        className={`flex h-6 w-6 items-center justify-center rounded-sm border-2 transition-colors ${
          checked ? "border-[#4285f4] bg-[#4285f4]" : "border-[#c4c4c4] bg-white"
        }`}
      >
        {checked && (
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <span className="text-sm text-[#555]">I&apos;m not a robot</span>
      <div className="ml-4 flex flex-col items-center">
        <svg
          width="28"
          height="32"
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4 14.5c0-1.3-.5-2.6-1.5-3.5l-5.6-5.1 1.3-3.2c.2-.4-.1-.9-.6-.9h-5.9V.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5v1.3H7c-.5 0-.8.5-.6.9l1.3 3.2-5.6 5.1c-1 .9-1.5 2.2-1.5 3.5v12c0 2.8 2.2 5 5 5h16.7c2.8 0 5-2.2 5-5v-12z"
            fill="#4285f4"
          />
          <path
            d="M24.3 19.3c0 1.4-1.1 2.5-2.5 2.5h-4.3v-5h4.3c1.4 0 2.5 1.1 2.5 2.5z"
            fill="#fff"
          />
          <path
            d="M10.5 16.8H6.2c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h4.3v-5z"
            fill="#fff"
          />
        </svg>
        <span className="text-[8px] text-[#555]">reCAPTCHA</span>
        <span className="text-[6px] text-[#999]">Privacy - Terms</span>
      </div>
    </motion.div>
  );
}

// Main Component
export default function EigenTherapeutics({
  headline = "Learn how we're\nunlocking the potential\nof targeted therapies",
  address = ["740 Broadway", "Redwood City, CA 94063"],
  email = "info@eigentx.com",
  socialLinks = defaultSocialLinks,
  formLabels = {
    fullName: "Full Name",
    email: "Email",
    company: "Company",
    message: "Message",
    submit: "Submit",
  },
  onSubmit,
}: EigenTherapeuticsProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateFormData = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="min-h-screen w-full bg-[#212121] font-sans">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Headline */}
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Address */}
            <div className="space-y-1">
              {address.map((line, i) => (
                <p key={i} className="font-mono text-sm text-[#626261]">
                  {line}
                </p>
              ))}
            </div>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="inline-block font-mono text-sm text-[#626261] transition-colors hover:text-white"
            >
              {email}
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3a3a3a] text-white transition-colors hover:border-white hover:bg-white/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <FormInput
              label={formLabels.fullName || "Full Name"}
              value={formData.fullName}
              onChange={updateFormData("fullName")}
              index={0}
            />
            <FormInput
              label={formLabels.email || "Email"}
              type="email"
              value={formData.email}
              onChange={updateFormData("email")}
              index={1}
            />
            <FormInput
              label={formLabels.company || "Company"}
              value={formData.company}
              onChange={updateFormData("company")}
              index={2}
            />
            <FormTextarea
              label={formLabels.message || "Message"}
              value={formData.message}
              onChange={updateFormData("message")}
              index={3}
            />

            {/* reCAPTCHA */}
            <FakeRecaptcha index={4} />

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <button
                type="submit"
                className="rounded-sm border border-[#e1e0dc] bg-transparent px-8 py-3 text-sm font-medium text-[#e1e0dc] transition-all hover:bg-[#e1e0dc] hover:text-[#212121]"
              >
                {formLabels.submit || "Submit"}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
