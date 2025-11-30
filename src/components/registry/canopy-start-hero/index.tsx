"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// Types
interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

interface FormFieldOption {
  value: string;
  label: string;
}

interface CanopyStartHeroProps {
  logoText?: string;
  headlineNormal?: string;
  headlineAccent?: string;
  subheadline?: string;
  testimonial?: TestimonialProps;
  formTitle?: string;
  formSubtitle?: string;
  b2bOptions?: FormFieldOption[];
  loanStageOptions?: FormFieldOption[];
  submitButtonText?: string;
}

// Canopy Logo Component
function CanopyLogo({ text = "Canopy" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1A1A1A]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="2" fill="white" />
        </svg>
      </div>
      <span className="text-lg font-semibold text-[#1A1A1A]">{text}</span>
    </div>
  );
}

// Decorative Diagram Component
function DecorativeDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="relative w-48 h-48"
    >
      {/* Outer circle with dashed border */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D1D5DB]" />

      {/* Inner content - Plus icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8V24M8 16H24"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Small decorative dots */}
      <div className="absolute top-1/4 -right-1 w-2 h-2 rounded-full bg-[#D1D5DB]" />
      <div className="absolute bottom-1/4 -left-1 w-2 h-2 rounded-full bg-[#D1D5DB]" />
    </motion.div>
  );
}

// Quote Icon Component
function QuoteIcon() {
  return (
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 22V14.6667C0 12.4444 0.388889 10.3611 1.16667 8.41667C1.94444 6.47222 3.11111 4.66667 4.66667 3C6.22222 1.33333 8.16667 0 10.5 -1.04907e-07L11.6667 3.5C9.72222 4.16667 8.19444 5.22222 7.08333 6.66667C5.97222 8.11111 5.33333 9.72222 5.16667 11.5H10.5V22H0ZM17.5 22V14.6667C17.5 12.4444 17.8889 10.3611 18.6667 8.41667C19.4444 6.47222 20.6111 4.66667 22.1667 3C23.7222 1.33333 25.6667 0 28 -1.04907e-07L29.1667 3.5C27.2222 4.16667 25.6944 5.22222 24.5833 6.66667C23.4722 8.11111 22.8333 9.72222 22.6667 11.5H28V22H17.5Z"
        fill="#94A6E7"
        fillOpacity="0.6"
      />
    </svg>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="rounded-2xl bg-[#F5F6F8] p-6 max-w-md"
    >
      <QuoteIcon />
      <p className="mt-4 text-[#1A1A1A] text-base leading-relaxed font-medium">
        {testimonial.quote}
      </p>
      <div className="mt-4">
        <p className="text-sm font-medium text-[#1A1A1A]">{testimonial.author}</p>
        <p className="text-sm text-[#6B7280]">{testimonial.title}</p>
      </div>
    </motion.div>
  );
}

// Custom Select Component
function CustomSelect({
  label,
  placeholder,
  options,
}: {
  label: string;
  placeholder: string;
  options: FormFieldOption[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-medium tracking-wider text-[#6B7280] uppercase">
        {label}
      </label>
      <div className="relative">
        <select
          className="w-full appearance-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 pr-10 text-sm text-[#6B7280] focus:border-[#94A6E7] focus:outline-none focus:ring-1 focus:ring-[#94A6E7]"
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm({
  formTitle,
  formSubtitle,
  b2bOptions,
  loanStageOptions,
  submitButtonText,
}: {
  formTitle: string;
  formSubtitle: string;
  b2bOptions: FormFieldOption[];
  loanStageOptions: FormFieldOption[];
  submitButtonText: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-black/5"
    >
      <h2 className="text-2xl font-bold text-[#1A1A1A]">{formTitle}</h2>
      <p className="mt-1 text-sm text-[#6B7280]">{formSubtitle}</p>

      <form className="mt-6 space-y-4">
        {/* Name fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium tracking-wider text-[#6B7280] uppercase">
              First Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#94A6E7] focus:outline-none focus:ring-1 focus:ring-[#94A6E7]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium tracking-wider text-[#6B7280] uppercase">
              Last Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#94A6E7] focus:outline-none focus:ring-1 focus:ring-[#94A6E7]"
            />
          </div>
        </div>

        {/* Email and Company */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium tracking-wider text-[#6B7280] uppercase">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#94A6E7] focus:outline-none focus:ring-1 focus:ring-[#94A6E7]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium tracking-wider text-[#6B7280] uppercase">
              Company
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#94A6E7] focus:outline-none focus:ring-1 focus:ring-[#94A6E7]"
            />
          </div>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-4">
          <CustomSelect
            label="For B2B or B2C"
            placeholder="Select one..."
            options={b2bOptions}
          />
          <CustomSelect
            label="Loan Product Stage"
            placeholder="Select one..."
            options={loanStageOptions}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium tracking-wider text-[#6B7280] uppercase">
            Tell us what you hope to accomplish (optional)
          </label>
          <textarea
            rows={4}
            placeholder="Write us a message"
            className="w-full resize-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#94A6E7] focus:outline-none focus:ring-1 focus:ring-[#94A6E7]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg border border-[#1A1A1A] bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white"
        >
          {submitButtonText}
        </button>
      </form>
    </motion.div>
  );
}

// Default data
const defaultTestimonial: TestimonialProps = {
  quote:
    "Canopy allows you to re-simulate all of the accounts that we have to produce historical data and get real granular access to the data across all of our products to report more effectively.",
  author: "Justin Sherlock",
  title: "Former Head of Capital at Flexport",
};

const defaultB2bOptions: FormFieldOption[] = [
  { value: "b2b", label: "B2B" },
  { value: "b2c", label: "B2C" },
  { value: "both", label: "Both" },
];

const defaultLoanStageOptions: FormFieldOption[] = [
  { value: "idea", label: "Idea Stage" },
  { value: "development", label: "In Development" },
  { value: "launched", label: "Already Launched" },
  { value: "scaling", label: "Scaling" },
];

// Main Component
export default function CanopyStartHero({
  logoText = "Canopy",
  headlineNormal = "Lending innovation.",
  headlineAccent = "Built on Canopy.",
  subheadline = "Canopy's API-first platform allows you to embed financial products, go to market quickly, and service borrowers in a secure, compliant way.",
  testimonial = defaultTestimonial,
  formTitle = "Let's chat!",
  formSubtitle = "Launch your next lending product with Canopy",
  b2bOptions = defaultB2bOptions,
  loanStageOptions = defaultLoanStageOptions,
  submitButtonText = "Send message",
}: CanopyStartHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CanopyLogo text={logoText} />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-12"
            >
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
                {headlineNormal}
                <br />
                <span className="text-[#7B8AD9]">{headlineAccent}</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 max-w-md text-base leading-relaxed text-[#6B7280]"
            >
              {subheadline}
            </motion.p>

            {/* Decorative Diagram */}
            <div className="mt-8">
              <DecorativeDiagram />
            </div>

            {/* Testimonial Card */}
            <div className="mt-8">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex items-start justify-center lg:justify-end lg:pt-16">
            <ContactForm
              formTitle={formTitle}
              formSubtitle={formSubtitle}
              b2bOptions={b2bOptions}
              loanStageOptions={loanStageOptions}
              submitButtonText={submitButtonText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
