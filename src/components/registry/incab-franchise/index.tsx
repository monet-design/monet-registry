"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Types
interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface IncabFranchiseProps {
  headline?: {
    line1: string;
    line2: string;
  };
  subtitle?: string;
  formFields?: FormField[];
  submitButtonText?: string;
  footerLinks?: FooterLink[];
  onSubmit?: (formData: Record<string, string>) => void;
}

// Default data
const defaultFormFields: FormField[] = [
  { name: "firstName", label: "First name", type: "text", placeholder: "First name" },
  { name: "lastName", label: "Last name", type: "text", placeholder: "Last name" },
  { name: "company", label: "Company", type: "text", placeholder: "Company" },
  { name: "email", label: "Email", type: "email", placeholder: "Email" },
  { name: "telephone", label: "Telephone", type: "tel", placeholder: "Telephone" },
];

const defaultFooterLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "General Terms and Conditions", href: "#" },
];

// Main Component
export default function IncabFranchise({
  headline = {
    line1: "Take the next step toward",
    line2: "franchise ownership today",
  },
  subtitle = "Complete the contact form below now to get started",
  formFields = defaultFormFields,
  submitButtonText = "Send a request",
  footerLinks = defaultFooterLinks,
  onSubmit,
}: IncabFranchiseProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F5F7F6] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#2D3B41] text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.15] tracking-tight">
            {headline.line1}
            <br />
            {headline.line2}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-sm text-[#637077] md:mt-8"
        >
          {subtitle}
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 md:mt-10"
        >
          {formFields.map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => updateField(field.name, e.target.value)}
                className="w-full rounded-md border border-[#CACECE] bg-white px-4 py-3 text-sm text-[#2D3B41] placeholder:text-[#9CA3A8] focus:border-[#48575F] focus:outline-none focus:ring-1 focus:ring-[#48575F] transition-colors"
              />
            </div>
          ))}

          {/* Footer with button and links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full bg-[#48575F] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a474e]"
            >
              {submitButtonText}
              <ArrowRight size={16} strokeWidth={2} />
            </motion.button>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-[#9CA3A8] underline underline-offset-2 transition-colors hover:text-[#637077]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
