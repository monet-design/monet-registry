"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

// Font imports
import "./font.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  postcode: string;
  location: string;
  phone: string;
  message: string;
}

interface PressContact {
  title: string;
  company: string;
  contacts: {
    name: string;
    email: string;
  }[];
  phone: string;
}

interface HpqFrankfurtProps {
  mode?: "light" | "dark";
  title?: string;
  labels?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    postcode?: string;
    location?: string;
    phone?: string;
    message?: string;
  };
  submitText?: string;
  pressContact?: PressContact;
  projectLabel?: string;
  companyName?: string;
  companyGroup?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  paperAirplaneImage?: string;
  onSubmit?: (data: FormData) => void;
}

export default function HpqFrankfurt({
  mode = "light",
  title = "Contact",
  labels = {
    firstName: "First name",
    lastName: "Last name",
    email: "E-mail",
    postcode: "Postcode",
    location: "Location",
    phone: "Phone",
    message: "Message",
  },
  submitText = "Submit",
  pressContact = {
    title: "Press contact",
    company: "PR + press agency textschwester",
    contacts: [
      { name: "Alex Iwan", email: "alex@textschwester.de" },
      { name: "Kim Adriana Kohler", email: "kim.koehler@textschwester.de" },
    ],
    phone: "+49 211 749 59 69 1",
  },
  projectLabel = "A project of the",
  companyName = "B&L",
  companyGroup = "GRUPPE",
  linkedinUrl = "#",
  instagramUrl = "#",
  paperAirplaneImage = "/registry/hpq-frankfurt/paper-airplane.png",
  onSubmit,
}: HpqFrankfurtProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    postcode: "",
    location: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputFields: { key: keyof FormData; label: string }[] = [
    { key: "firstName", label: labels.firstName || "First name" },
    { key: "lastName", label: labels.lastName || "Last name" },
    { key: "email", label: labels.email || "E-mail" },
    { key: "postcode", label: labels.postcode || "Postcode" },
    { key: "location", label: labels.location || "Location" },
    { key: "phone", label: labels.phone || "Phone" },
  ];

  return (
    <section className="w-full min-h-screen bg-[#E6D9D1] py-10 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between mb-8"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-black"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            <span className="not-italic">*</span>
            {title}
          </h1>
          <div className="flex items-center gap-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.5} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
        >
          {/* Left Column - Input Fields */}
          <div className="space-y-1">
            {inputFields.map((field) => (
              <div key={field.key} className="relative">
                <input
                  type={field.key === "email" ? "email" : "text"}
                  value={formData[field.key]}
                  onChange={(e) => updateField(field.key, e.target.value)}
                  placeholder={field.label}
                  className="w-full py-1.5 bg-transparent border-b border-black/70 text-xs text-black placeholder-black/70 focus:outline-none focus:border-black transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
            ))}
          </div>

          {/* Right Column - Message & Submit */}
          <div className="flex flex-col">
            <div className="relative flex-1 min-h-[180px]">
              <textarea
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder={labels.message}
                className="w-full h-full py-2 px-3 bg-transparent border border-black/70 text-xs text-black placeholder-black/70 focus:outline-none focus:border-black transition-colors resize-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="flex items-center justify-end gap-3 mt-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-1.5 border border-black/70 text-xs text-black hover:bg-black hover:text-[#E6D9D1] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {submitText}
              </motion.button>
              <div className="w-20 h-14 relative">
                <Image
                  src={paperAirplaneImage}
                  alt="Paper airplane"
                  fill
                  className="object-contain"
                  style={{ transform: "rotate(-5deg)" }}
                />
              </div>
            </div>
          </div>
        </motion.form>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {/* Press Contact */}
          <div>
            <h3
              className="text-xs mb-1.5"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              {pressContact.title}
            </h3>
            <p className="text-[10px] text-black/80 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              {pressContact.company}
              <br />
              {pressContact.contacts.map((contact, index) => (
                <span key={index}>
                  {contact.name}, {contact.email}
                  {index < pressContact.contacts.length - 1 && <br />}
                </span>
              ))}
              <br />
              Phone {pressContact.phone}
            </p>
          </div>

          {/* Company Branding */}
          <div className="flex flex-col items-start md:items-end">
            <p
              className="text-[10px] text-black/70 mb-0.5"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              {projectLabel}
            </p>
            <div className="flex items-baseline gap-0.5">
              <span className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                {companyName}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                {companyGroup}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
