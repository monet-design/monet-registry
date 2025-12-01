"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import "./font.css";

// Types
interface ContactInfo {
  title: string;
  email?: string;
  phone?: string;
}

interface SelectOption {
  value: string;
  label: string;
}

interface VivtelContactFormProps {
  mode?: "preview" | "live";
  headline?: {
    line1: string;
    line2: string;
  };
  description?: string;
  brandName?: string;
  contactSections?: ContactInfo[];
  interestAreaOptions?: SelectOption[];
  hearAboutUsOptions?: SelectOption[];
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
}

// [CUSTOMIZATION]
export const CUSTOMIZATION = {};
// [/CUSTOMIZATION]

interface FormData {
  name: string;
  email: string;
  companyName: string;
  interestArea: string;
  message: string;
  hearAboutUs: string;
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
        className="flex w-full items-center justify-between rounded-sm border border-transparent bg-white px-3 py-2.5 text-left text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        <span className={!selectedOption ? "text-[#666]" : ""}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#333] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 z-10 mt-1 w-full rounded-sm border border-gray-200 bg-white shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="block w-full px-3 py-2 text-left text-sm text-[#333] transition-colors hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// Default data
const defaultContactSections: ContactInfo[] = [
  {
    title: "HOTEL OWNERS & LANDLORD",
    email: "development@kokoglobalhospitality.com",
  },
  {
    title: "CONTACT US",
    phone: "(+66) 2026 3218",
  },
];

const defaultInterestAreaOptions: SelectOption[] = [
  { value: "franchise", label: "Franchise Opportunity" },
  { value: "partnership", label: "Partnership" },
  { value: "investment", label: "Investment" },
  { value: "management", label: "Hotel Management" },
  { value: "other", label: "Other" },
];

const defaultHearAboutUsOptions: SelectOption[] = [
  { value: "search", label: "Search Engine" },
  { value: "social", label: "Social Media" },
  { value: "referral", label: "Referral" },
  { value: "event", label: "Event/Conference" },
  { value: "news", label: "News/Press" },
  { value: "other", label: "Other" },
];

// Main Component
export default function VivtelContactForm({
  mode = "live",
  headline = {
    line1: "Join Us in the",
    line2: "Journey of Love",
  },
  description = "If you're interested in opening VIVTEL without the hassle of hands-on management, you should contact the Koko Global Hospitality Business Development Team.",
  brandName = "VIVTEL",
  contactSections = defaultContactSections,
  interestAreaOptions = defaultInterestAreaOptions,
  hearAboutUsOptions = defaultHearAboutUsOptions,
  submitButtonText = "Submit",
  onSubmit,
}: VivtelContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
    interestArea: "",
    message: "",
    hearAboutUs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Parse description to bold the brand name
  const renderDescription = () => {
    if (!description.includes(brandName)) {
      return description;
    }
    const parts = description.split(brandName);
    return (
      <>
        {parts[0]}
        <span className="font-bold">{brandName}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg,
              #1a2d47 0%,
              #1e3651 20%,
              #243a52 40%,
              #2a3f55 60%,
              #3d3845 80%,
              #5a3c35 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:gap-16 md:px-12 md:py-16 lg:gap-24 lg:px-16 lg:py-20">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center md:w-2/5"
        >
          {/* Headline */}
          <h1 className="font-playfair text-3xl leading-tight text-white md:text-4xl lg:text-[42px]">
            <span className="italic">{headline.line1}</span>
            <br />
            <span className="italic">{headline.line2}</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-sm leading-relaxed text-white/90 md:mt-8 md:text-[13px]"
          >
            {renderDescription()}
          </motion.p>

          {/* Contact Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 space-y-6 md:mt-10"
          >
            {contactSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xs font-bold tracking-wide text-white">
                  {section.title}
                </h3>
                {section.email && (
                  <a
                    href={`mailto:${section.email}`}
                    className="mt-1 block text-sm text-white/80 underline decoration-white/50 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
                  >
                    {section.email}
                  </a>
                )}
                {section.phone && (
                  <a
                    href={`tel:${section.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {section.phone}
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-1 md:w-3/5"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full rounded-sm border border-transparent bg-white px-3 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>

            {/* Email & Company Name Row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-sm border border-transparent bg-white px-3 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white">
                  Company Name (if applicable)
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  className="w-full rounded-sm border border-transparent bg-white px-3 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
            </div>

            {/* Interest Area */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white">
                Interest Area
              </label>
              <CustomSelect
                options={interestAreaOptions}
                value={formData.interestArea}
                onChange={(value) => updateField("interestArea", value)}
                placeholder="Please select"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                rows={5}
                className="w-full resize-none rounded-sm border border-transparent bg-white px-3 py-2.5 text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white">
                How did you hear about us?
              </label>
              <CustomSelect
                options={hearAboutUsOptions}
                value={formData.hearAboutUs}
                onChange={(value) => updateField("hearAboutUs", value)}
                placeholder="Please select"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 rounded-sm bg-[#1a2d47] px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#243a52]"
            >
              {submitButtonText}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
