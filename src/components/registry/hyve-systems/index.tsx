"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "./font.css";

// Types
interface FormData {
  name: string;
  email: string;
  businessName: string;
  message: string;
}

interface HyveSystemsProps {
  subtitle?: string;
  headline?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  businessNamePlaceholder?: string;
  messagePlaceholder?: string;
  contactButtonText?: string;
  bookButtonText?: string;
  dividerText?: string;
  calendlyText?: string;
  onContactSubmit?: (data: FormData) => void;
  onBookConsultation?: () => void;
}

// Calendly Logo SVG Component
function CalendlyLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.655 14.262c-.281.655-.648 1.209-1.09 1.65-.442.443-.996.81-1.65 1.091-.656.281-1.378.422-2.162.422h-.84c-.14 0-.258-.047-.353-.14a.48.48 0 0 1-.141-.353v-1.318c0-.14.047-.258.14-.353a.48.48 0 0 1 .354-.14h.84c.468 0 .87-.094 1.209-.282.337-.187.615-.439.833-.757.217-.318.38-.684.489-1.097.109-.413.164-.85.164-1.31v-.35c0-.46-.055-.897-.164-1.31a3.373 3.373 0 0 0-.49-1.097 2.405 2.405 0 0 0-.832-.757c-.338-.188-.74-.281-1.209-.281h-.84a.48.48 0 0 1-.353-.141.48.48 0 0 1-.14-.352V6.169c0-.14.046-.258.14-.352a.48.48 0 0 1 .353-.141h.84c.784 0 1.506.14 2.162.421.654.282 1.208.649 1.65 1.091.442.443.809.996 1.09 1.65.282.656.423 1.378.423 2.163v.84c0 .785-.14 1.507-.423 2.162v.259z"
        fill="#006BFF"
      />
      <path
        d="M12.422 14.262c-.281.655-.648 1.209-1.09 1.65-.443.443-.997.81-1.651 1.091-.655.281-1.377.422-2.162.422h-.84a.48.48 0 0 1-.352-.14.48.48 0 0 1-.14-.353v-1.318c0-.14.046-.258.14-.353a.48.48 0 0 1 .352-.14h.84c.47 0 .872-.094 1.21-.282.337-.187.615-.439.832-.757.218-.318.38-.684.49-1.097.109-.413.163-.85.163-1.31v-.35c0-.46-.054-.897-.164-1.31a3.373 3.373 0 0 0-.489-1.097 2.405 2.405 0 0 0-.832-.757c-.338-.188-.74-.281-1.21-.281h-.84a.48.48 0 0 1-.352-.141.48.48 0 0 1-.14-.352V6.169c0-.14.046-.258.14-.352a.48.48 0 0 1 .352-.141h.84c.785 0 1.507.14 2.162.421.655.282 1.208.649 1.65 1.091.443.443.81.996 1.091 1.65.281.656.422 1.378.422 2.163v.84c0 .785-.14 1.507-.422 2.162v.259z"
        fill="#006BFF"
      />
    </svg>
  );
}

// Custom Input Component
function FormInput({
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white/50 focus:outline-none transition-colors"
    />
  );
}

// Custom Textarea Component
function FormTextarea({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full rounded-md border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white/50 focus:outline-none transition-colors resize-none"
    />
  );
}

// Main Component
export default function HyveSystems({
  subtitle = "Get in touch",
  headline = "Book a discovery call to discuss what AI can bring to your business",
  namePlaceholder = "Your name*",
  emailPlaceholder = "email@email.com*",
  businessNamePlaceholder = "Business name*",
  messagePlaceholder = "Message (optional)",
  contactButtonText = "Contact Sales",
  bookButtonText = "Book a Consultation",
  dividerText = "or",
  calendlyText = "Calendly",
  onContactSubmit,
  onBookConsultation,
}: HyveSystemsProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContactSubmit?.(formData);
  };

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-[#028D6C]"
      >
        <div className="grid grid-cols-1 md:grid-cols-[38%_62%] lg:grid-cols-[40%_60%]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm text-white/80"
            >
              {subtitle}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-instrument-serif mt-4 text-[28px] font-normal italic leading-[1.2] text-white md:text-[32px] lg:text-[36px]"
            >
              {headline}
            </motion.h2>
          </div>

          {/* Right Form */}
          <div className="px-8 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name Field */}
              <FormInput
                placeholder={namePlaceholder}
                value={formData.name}
                onChange={updateField("name")}
                required
              />

              {/* Email and Business Name Row */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <FormInput
                    type="email"
                    placeholder={emailPlaceholder}
                    value={formData.email}
                    onChange={updateField("email")}
                    required
                  />
                </div>
                <div className="flex-1">
                  <FormInput
                    placeholder={businessNamePlaceholder}
                    value={formData.businessName}
                    onChange={updateField("businessName")}
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <FormTextarea
                placeholder={messagePlaceholder}
                value={formData.message}
                onChange={updateField("message")}
              />

              {/* Contact Sales Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#028D6C] transition-all hover:bg-white/90"
              >
                {contactButtonText}
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              {/* Divider */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm text-white/60">{dividerText}</span>
              </div>

              {/* Book a Consultation */}
              <div className="flex items-center gap-3">
                <motion.button
                  type="button"
                  onClick={onBookConsultation}
                  whileHover={{ x: 2 }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/80"
                >
                  {bookButtonText}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>

                <span className="text-sm text-white/40">via</span>

                <div className="flex items-center gap-1.5">
                  <CalendlyLogo />
                  <span className="text-sm font-medium text-white">
                    {calendlyText}
                  </span>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
