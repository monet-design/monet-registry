"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

// Types
interface SelectOption {
  value: string;
  label: string;
}

interface HederaDxProps {
  mode?: "light" | "dark";
  sectionLabel?: string;
  headline?: string;
  companyName?: string;
  address?: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  phone?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
  imageSrc?: string;
  helpOptions?: SelectOption[];
  contactConsentText?: string;
  marketingConsentText?: string;
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  organization: string;
  businessEmail: string;
  helpWith: string;
  message: string;
  contactConsent: boolean;
  marketingConsent: boolean;
}

// Custom Select Component
function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Please select",
}: {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between border-b border-[#d4d4d4] bg-transparent py-2.5 text-left text-sm text-[#1a1a1a] transition-colors focus:border-[#6C69DF] focus:outline-none"
      >
        <span className={!selectedOption ? "text-[#999]" : ""}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#666] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2.5 text-left text-sm text-[#1a1a1a] transition-colors hover:bg-gray-50"
            >
              {option.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// Custom Checkbox Component
function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <div className="relative mt-0.5 flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <div className="h-4 w-4 rounded-sm border border-[#d4d4d4] bg-white transition-colors peer-checked:border-[#6C69DF] peer-checked:bg-[#6C69DF] peer-focus:ring-2 peer-focus:ring-[#6C69DF]/20">
          {checked && (
            <svg
              className="h-full w-full text-white"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 8L7 11L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-xs leading-relaxed text-[#666]">{label}</span>
    </label>
  );
}

// Default data
const defaultHelpOptions: SelectOption[] = [
  { value: "partnership", label: "Partnership opportunities" },
  { value: "product", label: "Product inquiry" },
  { value: "clinical", label: "Clinical collaboration" },
  { value: "investment", label: "Investment inquiry" },
  { value: "media", label: "Media inquiry" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

// Main Component
export default function HederaDx({
  mode = "light",
  sectionLabel = "Contact us",
  headline = "Let's make liquid\nbiopsies accessible to\nmore patients, together",
  companyName = "Hedera Dx",
  address = {
    street: "Route de la Corniche 5",
    postalCode: "1066 Epalinges,",
    city: "",
    country: "Switzerland",
  },
  phone = "+41 21 588 16 54",
  socialLinks = {
    twitter: "#",
    linkedin: "#",
  },
  imageSrc = "/registry/hedera-dx/campus.png",
  helpOptions = defaultHelpOptions,
  contactConsentText = "By checking this box, I declare that I accept to be further contacted by Hedera Dx regarding this request.",
  marketingConsentText = "I agree to receive information from Hedera Dx about products, services, events and promotions. I understand that I will be able to unsubscribe by using the link integrated with the communication at any time.",
  submitButtonText = "Submit",
  onSubmit,
}: HederaDxProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    organization: "",
    businessEmail: "",
    helpWith: "",
    message: "",
    contactConsent: false,
    marketingConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        {/* Left Column - Image and Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col px-6 py-10 md:px-12 lg:w-[45%] lg:py-16"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt="Company campus"
              fill
              className="object-cover"
            />
          </div>

          {/* Company Info */}
          <div className="mt-8 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#1a1a1a]">
                {companyName}
              </h2>
              <div className="mt-2 space-y-0.5 text-sm text-[#666]">
                <p>{address.street}</p>
                <p>{address.postalCode}</p>
                {address.city && <p>{address.city}</p>}
                <p>{address.country}</p>
              </div>
              <p className="mt-3 text-sm text-[#1a1a1a]">{phone}</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="text-[#1a1a1a] transition-colors hover:text-[#6C69DF]"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="text-[#1a1a1a] transition-colors hover:text-[#6C69DF]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-1 px-6 py-10 md:px-12 lg:py-16 lg:pl-8 lg:pr-16"
        >
          {/* Section Label */}
          <p className="text-sm text-[#666]">{sectionLabel}</p>

          {/* Headline */}
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-4xl">
            {headline.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-[#1a1a1a]">
                  First name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="w-full border-b border-[#d4d4d4] bg-transparent py-2.5 text-sm text-[#1a1a1a] transition-colors focus:border-[#6C69DF] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-[#1a1a1a]">
                  Last name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="w-full border-b border-[#d4d4d4] bg-transparent py-2.5 text-sm text-[#1a1a1a] transition-colors focus:border-[#6C69DF] focus:outline-none"
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="mb-1 block text-sm font-medium text-[#1a1a1a]">
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => updateField("organization", e.target.value)}
                className="w-full border-b border-[#d4d4d4] bg-transparent py-2.5 text-sm text-[#1a1a1a] transition-colors focus:border-[#6C69DF] focus:outline-none"
              />
            </div>

            {/* Business Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-[#1a1a1a]">
                Business email
              </label>
              <input
                type="email"
                value={formData.businessEmail}
                onChange={(e) => updateField("businessEmail", e.target.value)}
                className="w-full border-b border-[#d4d4d4] bg-transparent py-2.5 text-sm text-[#1a1a1a] transition-colors focus:border-[#6C69DF] focus:outline-none"
              />
            </div>

            {/* What can we help you with? */}
            <div>
              <label className="mb-1 block text-sm font-medium text-[#1a1a1a]">
                What can we help you with?
              </label>
              <CustomSelect
                options={helpOptions}
                value={formData.helpWith}
                onChange={(value) => updateField("helpWith", value)}
                placeholder="Please select"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-1 block text-sm font-medium text-[#1a1a1a]">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                rows={4}
                className="w-full resize-none border-b border-[#d4d4d4] bg-transparent py-2.5 text-sm text-[#1a1a1a] transition-colors focus:border-[#6C69DF] focus:outline-none"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 pt-2">
              <Checkbox
                checked={formData.contactConsent}
                onChange={(checked) => updateField("contactConsent", checked)}
                label={contactConsentText}
              />
              <Checkbox
                checked={formData.marketingConsent}
                onChange={(checked) => updateField("marketingConsent", checked)}
                label={marketingConsentText}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#6C69DF] px-10 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5B58C8]"
              >
                {submitButtonText}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
