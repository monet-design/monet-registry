"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface UiuxBookHeroProps {
  headline?: React.ReactNode;
  description?: string;
  emailPlaceholder?: string;
  ctaText?: string;
  bookImage?: string;
  onSubmit?: (email: string) => void;
}

export default function UiuxBookHero({
  headline = (
    <>
      Fundamentals of Creating a Great
      <br />
      UI/UX
    </>
  ),
  description = "After 8 years of crafting next generation's web design tools, UI Kits, Admin Dashboards and Mobile App Templates, we decided to write this UI/UX book guide based on our experience.",
  emailPlaceholder = "Your email",
  ctaText = "FREE PREVIEW",
  bookImage = "/registry/uiux-book-hero/books.png",
  onSubmit,
}: UiuxBookHeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0D1025] text-white">
      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-6xl flex-col px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-16">
        <div className="flex-1 space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-playfair text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md text-sm leading-relaxed text-slate-400"
          >
            {description}
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              className="h-10 flex-1 rounded-md border border-slate-600/50 bg-[#1A1D35] px-4 text-sm text-white placeholder:text-slate-500 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 sm:max-w-[200px]"
              required
            />
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#E86C4F] px-6 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#d55f44] focus:outline-none focus:ring-2 focus:ring-[#E86C4F] focus:ring-offset-2 focus:ring-offset-[#0D1025]"
            >
              {ctaText}
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-10 flex-1 lg:mt-0"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none">
            <Image
              src={bookImage}
              alt="UI/UX Design Book"
              fill
              className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] [filter:drop-shadow(0_8px_16px_rgba(232,108,79,0.15))]"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-[#C9A962]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-48 w-48 rounded-full bg-[#1A1D35]/50 blur-3xl" />
      </div>
    </section>
  );
}
