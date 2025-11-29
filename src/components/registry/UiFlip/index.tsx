"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Check, Linkedin, Dribbble, Instagram } from "lucide-react";
import "./font.css";

interface SocialLink {
  icon: "linkedin" | "dribbble" | "behance" | "instagram";
  href: string;
}

interface DesignService {
  label: string;
  hasHeart?: boolean;
}

interface UiFlipProps {
  greeting?: string;
  name?: string;
  role?: string;
  company?: string;
  profileImage?: string;
  paragraphs?: Array<{
    text: string;
    boldPhrases?: string[];
  }>;
  psNote?: string;
  socialLinks?: SocialLink[];
  servicesTitle?: string;
  servicesDescription?: string;
  designServices?: DesignService[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.825 1.286 2.574 2.816 2.574 1.18 0 1.906-.581 2.208-1.545h2.732zm-7.795-4.015h4.972c-.063-1.356-.844-2.118-2.311-2.118-1.542 0-2.41.82-2.661 2.118zM10.021 18H2V3h7.981c2.556 0 4.618 1.368 4.618 4.099 0 1.601-.854 2.848-2.252 3.493 1.858.536 2.917 1.892 2.917 3.83C15.264 16.96 12.926 18 10.021 18zM7.872 7.05H4.992v3.295h2.88c1.212 0 2.134-.625 2.134-1.731 0-1.102-.853-1.564-2.134-1.564zm.245 5.202H4.992v3.578h3.14c1.364 0 2.265-.614 2.265-1.807 0-1.193-.923-1.771-2.28-1.771z" />
    </svg>
  );
}

function WavyUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6C10 2 20 10 30 6C40 2 50 10 60 6C70 2 80 10 90 6C95 4 100 6 100 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function renderTextWithBold(text: string, boldPhrases: string[] = []) {
  if (boldPhrases.length === 0) return text;

  const parts: (string | React.ReactNode)[] = [];
  let remainingText = text;
  let keyIndex = 0;

  boldPhrases.forEach((phrase) => {
    const index = remainingText.indexOf(phrase);
    if (index !== -1) {
      if (index > 0) {
        parts.push(remainingText.substring(0, index));
      }
      parts.push(
        <strong key={keyIndex++} className="font-semibold">
          {phrase}
        </strong>
      );
      remainingText = remainingText.substring(index + phrase.length);
    }
  });

  if (remainingText) {
    parts.push(remainingText);
  }

  return parts;
}

const defaultParagraphs = [
  {
    text: "My design journey began in 2007, when I started playing with Photoshop, while waiting for the Great Recession to kill my real estate agency. Fast forward several years, I've crafted a diverse portfolio of projects ranging from creating websites, landing pages, e-commerce platforms, and blogs to designing mobile apps, web apps (with a special affinity for SaaS), and desktop apps. I worked with clients from all over the world - many of them were great marketers, smart entrepreneurs, small but fast-growing startups (my favourites), established large companies, and digital agencies.",
    boldPhrases: [
      "websites, landing pages, e-commerce platforms, and blogs",
      "designing mobile apps, web apps (with a special affinity for SaaS), and desktop apps",
      "startups (my favourites)",
    ],
  },
  {
    text: "At one point, one of my clients really wanted me just for them, so they made me an offer I couldn't refuse. And so, I spent 11 amazing years with Teamwork.com, becoming their first designer. During my tenure, I witnessed the company's epic expansion, growing from a team of 5 to a workforce of over 350, going from a single product to a product suite. I had the chance to design two of the products from the ground up, redesign the main product, mobile apps, and an award-winning website, and participate in rebranding. But the best thing was everything I learned through these years from all the teams I've been on.",
    boldPhrases: [
      "11 amazing years with Teamwork.com",
      "growing from a team of 5 to a workforce of over 350",
    ],
  },
  {
    text: "Today, I bring all my experience to UI Flip for you. While it may sound like a grand establishment, it's a one-man show, entirely run by me. Given that I only have two hands and 24 hours in a day, and I prioritise quality over quantity, I've set a limit to collaborate with only 5 clients at a time, ensuring each receives dedicated attention and top-tier design solutions flipped on time. Design that is just fine is not what I want to deliver... I'm striving for more, so both you and I are proud of the results, and these results will contribute to your business and my portfolio.",
    boldPhrases: [
      "one-man show",
      "I've set a limit to collaborate with only 5 clients at a time",
      "top-tier design solutions flipped on time",
      "just fine is not what I want to deliver",
    ],
  },
  {
    text: "Moreover, I deeply value building long-term relationships with my clients, fostering a partnership that grows and evolves over time. If you're looking to elevate your digital presence across any platform - be it a mobile app, a SaaS product, or an e-commerce site - I'm here to flip your design expectations and craft unparalleled user experiences, with the assurance of exclusivity and dedication.",
    boldPhrases: ["long-term relationships"],
  },
];

const defaultServices: DesignService[] = [
  { label: "UI / UX / Product design" },
  { label: "Websites" },
  { label: "Landing pages" },
  { label: "E-commerce sites" },
  { label: "SaaS", hasHeart: true },
  { label: "Web apps" },
  { label: "Mobile apps" },
  { label: "Desktop apps" },
  { label: "Design Systems" },
  { label: "Logo & Branding" },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: "linkedin", href: "#" },
  { icon: "dribbble", href: "#" },
  { icon: "behance", href: "#" },
  { icon: "instagram", href: "#" },
];

export default function UiFlip({
  greeting = "Hello",
  name = "Ivo",
  role = "Founder & Principal Designer",
  company = "UI Flip",
  profileImage = "https://picsum.photos/seed/uiflip/300/300",
  paragraphs = defaultParagraphs,
  psNote = "P.S. The above was not supposed to be that long, so thank you, if you've read it all! :)",
  socialLinks = defaultSocialLinks,
  servicesTitle = "Design Services",
  servicesDescription = "While having capabilities in diverse design disciplines, I've chosen to only offer my services exclusively in areas that align with my core strengths.",
  designServices = defaultServices,
  ctaButtonText = "See Plans",
  ctaButtonHref = "#",
}: UiFlipProps) {
  const renderSocialIcon = (icon: SocialLink["icon"]) => {
    const iconClass = "w-5 h-5";
    switch (icon) {
      case "linkedin":
        return <Linkedin className={iconClass} />;
      case "dribbble":
        return <Dribbble className={iconClass} />;
      case "behance":
        return <BehanceIcon className={iconClass} />;
      case "instagram":
        return <Instagram className={iconClass} />;
    }
  };

  return (
    <section
      className="w-full bg-[#F5F5F7] px-6 py-12 md:px-8 lg:px-12"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Left Column - Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <div className="relative inline-block">
              <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
                {greeting}{" "}
                <span role="img" aria-label="waving hand">
                  &#128075;
                </span>
              </h1>
              <WavyUnderline className="absolute -bottom-1 left-0 h-3 w-24 text-[#E8F653]" />
            </div>

            {/* Introduction */}
            <p className="text-base text-[#4a4a4a]">
              My name is {name} and I&apos;m {role} of {company}.
            </p>

            {/* Paragraphs */}
            <div className="space-y-5 text-sm leading-relaxed text-[#4a4a4a] md:text-[15px]">
              {paragraphs.map((para, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  {renderTextWithBold(para.text, para.boldPhrases)}
                </motion.p>
              ))}
            </div>

            {/* P.S. Note */}
            {psNote && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-sm text-[#4a4a4a]"
              >
                {psNote}
              </motion.p>
            )}
          </motion.div>

          {/* Right Column - Photo + Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <div className="relative mx-auto w-fit lg:mx-0">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={profileImage}
                  alt={name}
                  width={300}
                  height={300}
                  className="h-[280px] w-[280px] object-cover grayscale"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#6b6b6b]">
                Let&apos;s get connected:
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8e8ea] text-[#4a4a4a] transition-colors hover:bg-[#d8d8da] hover:text-[#1a1a1a]"
                  >
                    {renderSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Design Services */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">
                {servicesTitle}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#6b6b6b]">
                {servicesDescription}
              </p>

              {/* Services List */}
              <ul className="mt-4 space-y-2">
                {designServices.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-[#4a4a4a]"
                  >
                    <Check className="h-4 w-4 text-[#2DD4BF]" />
                    <span>
                      {service.label}
                      {service.hasHeart && (
                        <span className="ml-1 text-red-500">&#10084;</span>
                      )}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href={ctaButtonHref}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#26b8a5]"
              >
                {ctaButtonText}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
