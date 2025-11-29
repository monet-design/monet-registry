"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

// Social Link type
interface SocialLink {
  type: "twitter" | "dribbble" | "instagram" | "linkedin" | "email";
  href: string;
}

// Text Link type for inline links in description
interface TextLink {
  text: string;
  href: string;
}

interface SlideframeProps {
  sectionTitle?: string;
  authorName?: string;
  authorNameHref?: string;
  profileImage?: string;
  descriptionParts?: Array<string | TextLink>;
  socialLinks?: SocialLink[];
}

// Dribbble icon component (not available in lucide-react)
function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
  );
}

// Social Icon component
function SocialIcon({
  type,
  href,
}: {
  type: SocialLink["type"];
  href: string;
}) {
  const iconClass = "w-4 h-4";

  const icons = {
    twitter: <Twitter className={iconClass} />,
    dribbble: <DribbbleIcon className={iconClass} />,
    instagram: <Instagram className={iconClass} />,
    linkedin: <Linkedin className={iconClass} />,
    email: <Mail className={iconClass} />,
  };

  return (
    <motion.a
      href={type === "email" ? `mailto:${href}` : href}
      target={type === "email" ? undefined : "_blank"}
      rel={type === "email" ? undefined : "noopener noreferrer"}
      className="text-[#1a1a1a] hover:text-[#666666] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icons[type]}
    </motion.a>
  );
}

// Default description parts with links
const defaultDescriptionParts: Array<string | TextLink> = [
  { text: "Jonas Pelzer", href: "https://jonaspelzer.com" },
  " is a designer & developer, known for creating the website builder ",
  { text: "temper", href: "https://temper.one" },
  " and the web design gallery ",
  { text: "collected", href: "https://collected.design" },
  ", as well as running the digital type foundry ",
  { text: "Jonas Type", href: "https://jonastype.com" },
  ". Besides working on commissioned interaction design work and digital-focussed branding projects, he engages in self-initiated research and practice revolving around topics such as communication, literature, visual culture, the web, and typography. He lives and works in Berlin.",
];

// Default social links
const defaultSocialLinks: SocialLink[] = [
  { type: "twitter", href: "https://twitter.com/jonaspelzer" },
  { type: "dribbble", href: "https://dribbble.com/jonaspelzer" },
  { type: "instagram", href: "https://instagram.com/jonaspelzer" },
  { type: "linkedin", href: "https://linkedin.com/in/jonaspelzer" },
  { type: "email", href: "hello@jonaspelzer.com" },
];

export default function Slideframe({
  sectionTitle = "ABOUT\nTHE AUTHOR",
  profileImage = "https://picsum.photos/seed/jonaspelzer/200/200",
  descriptionParts = defaultDescriptionParts,
  socialLinks = defaultSocialLinks,
}: SlideframeProps) {
  // Parse section title for line breaks
  const titleLines = sectionTitle.split("\n");

  return (
    <section className="w-full bg-[#F5F5F5] px-6 py-12 sm:px-8 lg:px-16 font-sans">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start">
          {/* Left Column - Title & Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-8"
          >
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] uppercase tracking-tight leading-tight">
              {titleLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {/* Profile Image */}
            <div className="shrink-0">
              <Image
                src={profileImage}
                alt="Author profile"
                width={120}
                height={120}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Description & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Description with inline links */}
            <p className="text-sm sm:text-[15px] text-[#1a1a1a] leading-relaxed">
              {descriptionParts.map((part, index) => {
                if (typeof part === "string") {
                  return <span key={index}>{part}</span>;
                }
                return (
                  <a
                    key={index}
                    href={part.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-[#1a1a1a] hover:text-[#666666] transition-colors"
                  >
                    {part.text}
                  </a>
                );
              })}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} type={link.type} href={link.href} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
