"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Types
interface OrdinaryfolksContactFormProps {
  title?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  buttonText?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function OrdinaryfolksContactForm({
  title = "LAUNCH YOUR EVENT",
  namePlaceholder = "YOUR NAME",
  emailPlaceholder = "EMAIL",
  messagePlaceholder = "MESSAGE",
  buttonText = "SEND",
  onSubmit,
}: OrdinaryfolksContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputBaseStyles =
    "w-full bg-transparent border border-neutral-800 text-white placeholder-neutral-600 text-center text-xs tracking-[0.15em] uppercase focus:outline-none focus:border-neutral-600 transition-colors";

  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-md mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-xl sm:text-2xl font-bold italic text-center mb-8 tracking-wide"
        >
          {title}
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Name Input */}
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={namePlaceholder}
            className={`${inputBaseStyles} h-11 px-4 rounded-[4px]`}
          />

          {/* Email Input */}
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={emailPlaceholder}
            className={`${inputBaseStyles} h-11 px-4 rounded-[4px]`}
          />

          {/* Message Textarea */}
          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={messagePlaceholder}
            rows={4}
            className={`${inputBaseStyles} py-3 px-4 rounded-[4px] resize-none`}
          />

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-2"
          >
            <button
              type="submit"
              className="px-8 py-2 bg-black text-white text-xs tracking-[0.15em] uppercase border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              {buttonText}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
