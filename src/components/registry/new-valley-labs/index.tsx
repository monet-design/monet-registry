"use client";

import { useState } from "react";
import { motion } from "motion/react";
import "./font.css";

interface FormData {
  name: string;
  email: string;
  pronouns: string;
  resourceLink: string;
  howDidYouFindUs: string;
  subscribeNewsletter: boolean;
}

interface NewValleyLabsProps {
  title?: string;
  subtitle?: string;
  subtitleSmall?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  pronounsPlaceholder?: string;
  resourceLabel?: string;
  resourcePlaceholder?: string;
  howFoundLabel?: string;
  howFoundPlaceholder?: string;
  newsletterLabel?: string;
  submitButtonText?: string;
  onSubmit?: (data: FormData) => void;
  characterImage?: string;
}

export default function NewValleyLabs({
  title = "CONTACT US",
  subtitle = "WHAT'S THE TEA?",
  subtitleSmall = "LET'S CHAT",
  namePlaceholder = "Trixie Mattel",
  emailPlaceholder = "hello@trixiemattel.com",
  pronounsPlaceholder = "She/Her",
  resourceLabel = "HAVE A RESOURCE OR PITCH DECK YOU'D LIKE TO SHARE?",
  resourcePlaceholder = "googledrive.com/awesomedeck",
  howFoundLabel = "HOW'D YOU FIND US?",
  howFoundPlaceholder = "We'd love to know!",
  newsletterLabel = "Subscribe to our newsletter!",
  submitButtonText = "SUBMIT",
  onSubmit,
  characterImage = "/registry/new-valley-labs/flower-character.png",
}: NewValleyLabsProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    pronouns: "",
    resourceLink: "",
    howDidYouFindUs: "",
    subscribeNewsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#E4D9B9] px-6 py-12 md:px-12 lg:px-20 font-dm-sans overflow-hidden">
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tight"
          style={{
            color: "#D85636",
            textShadow: "4px 4px 0px #8B4513",
            WebkitTextStroke: "1px #8B4513",
          }}
        >
          {title}
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5"
        >
          <div className="mb-6">
            <p className="text-[10px] tracking-[0.2em] text-[#3D3D3D] uppercase font-bold mb-1">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tight">
              {subtitleSmall}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-[10px] tracking-[0.15em] text-[#3D3D3D] uppercase font-bold mb-1.5">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={namePlaceholder}
                className="w-full bg-transparent border-b-2 border-[#3D3D3D] py-2 text-sm text-[#3D3D3D] placeholder-[#8B8B8B] focus:outline-none focus:border-[#D85636] transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[10px] tracking-[0.15em] text-[#3D3D3D] uppercase font-bold mb-1.5">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={emailPlaceholder}
                className="w-full bg-transparent border-b-2 border-[#3D3D3D] py-2 text-sm text-[#3D3D3D] placeholder-[#8B8B8B] focus:outline-none focus:border-[#D85636] transition-colors"
              />
            </div>

            {/* Pronouns Field */}
            <div>
              <label className="block text-[10px] tracking-[0.15em] text-[#3D3D3D] uppercase font-bold mb-1.5">
                PRONOUNS
              </label>
              <input
                type="text"
                name="pronouns"
                value={formData.pronouns}
                onChange={handleChange}
                placeholder={pronounsPlaceholder}
                className="w-full bg-transparent border-b-2 border-[#3D3D3D] py-2 text-sm text-[#3D3D3D] placeholder-[#8B8B8B] focus:outline-none focus:border-[#D85636] transition-colors"
              />
            </div>

            {/* Resource Link Field */}
            <div>
              <label className="block text-[10px] tracking-[0.15em] text-[#3D3D3D] uppercase font-bold mb-1.5">
                {resourceLabel}
              </label>
              <input
                type="text"
                name="resourceLink"
                value={formData.resourceLink}
                onChange={handleChange}
                placeholder={resourcePlaceholder}
                className="w-full bg-transparent border-b-2 border-[#3D3D3D] py-2 text-sm text-[#3D3D3D] placeholder-[#8B8B8B] focus:outline-none focus:border-[#D85636] transition-colors"
              />
            </div>

            {/* How'd you find us Field */}
            <div>
              <label className="block text-[10px] tracking-[0.15em] text-[#3D3D3D] uppercase font-bold mb-1.5">
                {howFoundLabel}
              </label>
              <textarea
                name="howDidYouFindUs"
                value={formData.howDidYouFindUs}
                onChange={handleChange}
                placeholder={howFoundPlaceholder}
                rows={4}
                className="w-full bg-transparent border-2 border-[#3D3D3D] rounded-md p-3 text-sm text-[#3D3D3D] placeholder-[#8B8B8B] focus:outline-none focus:border-[#D85636] transition-colors resize-none"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                name="subscribeNewsletter"
                id="subscribeNewsletter"
                checked={formData.subscribeNewsletter}
                onChange={handleChange}
                className="w-4 h-4 border-2 border-[#3D3D3D] rounded-sm bg-transparent accent-[#D85636] cursor-pointer"
              />
              <label
                htmlFor="subscribeNewsletter"
                className="text-xs text-[#3D3D3D] cursor-pointer"
              >
                {newsletterLabel}
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 px-8 py-3 bg-[#D85636] text-white text-sm font-bold tracking-wider rounded-full hover:bg-[#C44A2E] transition-colors shadow-md"
            >
              {submitButtonText}
            </motion.button>
          </form>
        </motion.div>

        {/* Character Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:flex w-2/5 justify-center items-end mt-auto"
        >
          <motion.img
            src={characterImage}
            alt="Friendly flower character mascot"
            className="w-64 h-auto object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
