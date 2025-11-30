"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, FlaskConical } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Testimonial {
  logo: React.ReactNode;
  quote: string;
  author: string;
  role: string;
}

interface HeroLlmInferenceTestimonialsProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  testimonials?: Testimonial[];
}

const RampLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-[#B4F461] font-bold text-xl">ramp</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 16L16 4" stroke="#B4F461" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  </div>
);

const StructifyLogo = () => (
  <span className="font-serif text-white text-xl italic">Structify</span>
);

const DatalabLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 rounded border border-[#B4F461] flex items-center justify-center">
      <FlaskConical className="w-4 h-4 text-[#B4F461]" />
    </div>
    <span className="text-white font-medium">Datalab</span>
  </div>
);

const ModalLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14z" fill="#3D8C40"/>
      <path d="M8 14c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" fill="#5BA24F"/>
    </svg>
    <span className="text-white font-semibold text-xl">Modal</span>
  </div>
);

const defaultNavItems: NavItem[] = [
  { label: "Use Cases", href: "#", isActive: true },
  { label: "Pricing", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Company", href: "#" },
];

const defaultTestimonials: Testimonial[] = [
  {
    logo: <RampLogo />,
    quote: "\"Modal's user-friendly interface and efficient tools have truly empowered our team to navigate data-intensive tasks with ease, enabling us to achieve our project goals more efficiently.\"",
    author: "Karim Atiyeh,",
    role: "Co-Founder & CTO",
  },
  {
    logo: <StructifyLogo />,
    quote: "\"Switched to Modal for our LLM inference instead of Azure. 1/4 the price for GPUs and so much simpler to set up/scale. Big fan.\"",
    author: "Alex Reichenbach,",
    role: "CEO",
  },
  {
    logo: <DatalabLogo />,
    quote: "\"Using Modal for inference is like having an extra infra team - it's reliable, scalable, and fast - meaning I can get back to training models\"",
    author: "Vik Paruchari,",
    role: "Founder",
  },
];

export default function HeroLlmInferenceTestimonials({
  logo = <ModalLogo />,
  navItems = defaultNavItems,
  title = "Language model\ninference",
  description = "Run the latest open-source LLM and embedding models with Modal's serverless GPUs.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "#",
  secondaryButtonText = "Book a Demo",
  secondaryButtonHref = "#",
  testimonials = defaultTestimonials,
}: HeroLlmInferenceTestimonialsProps) {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 py-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center">
          {logo}
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-sm transition-colors ${
                item.isActive
                  ? "text-[#5BA24F]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Log In
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-[#5BA24F] hover:text-[#6db85f] transition-colors"
          >
            Sign Up
            <div className="w-5 h-5 rounded-full border border-[#5BA24F] flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight whitespace-pre-line font-serif">
              {title}
            </h1>

            <p className="mt-8 text-lg text-white/70 max-w-md">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href={primaryButtonHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#5BA24F] text-black font-medium rounded-full text-sm hover:bg-[#6db85f] transition-colors"
              >
                {primaryButtonText}
              </motion.a>
              <motion.a
                href={secondaryButtonHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#303030] text-white font-medium rounded-full text-sm hover:bg-[#404040] transition-colors"
              >
                {secondaryButtonText}
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Speech Bubbles Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="/registry/hero-llm-inference-testimonials/speech-bubbles.png"
              alt="3D Speech Bubbles"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
            >
              <div className="mb-4">
                {testimonial.logo}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="text-sm">
                <span className="text-white font-medium">{testimonial.author}</span>
                <span className="text-white/50"> {testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
