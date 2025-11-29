"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// Social Icon Components
function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function TwitterIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Social Link Component
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1A1A1A] text-[#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-white"
    >
      <Icon className="h-3.5 w-3.5" />
    </a>
  );
}

// Types
interface SocialLink {
  platform: "tiktok" | "twitter" | "dribbble" | "instagram";
  url: string;
}

interface LiftoffCourse2022Props {
  profileImage?: string;
  name?: string;
  title?: string;
  greeting?: string;
  bio1?: string;
  bio2?: string;
  signatureName?: string;
  socialLinks?: SocialLink[];
}

// Main Component
export default function LiftoffCourse2022({
  profileImage = "https://picsum.photos/seed/mike-profile/600/800",
  name = "Mike",
  title = "Meet Mike",
  greeting = "Hey there!",
  bio1 = "I'm Mike McAlister, a long-time product designer and principal software engineer from Wisconsin. I've spent the last 10 years hand-crafting beautiful and innovative digital products like Array Themes and Atomic Blocks that millions of people use to power their websites.",
  bio2 = "Over the years, I've learned a spaceship full of knowledge about what it takes to create lucrative digital products that solve problems (and look good while they do it). I've put everything I know into the Liftoff course to help you grow an audience and start making money as a digital creator!",
  signatureName = "Mike",
  socialLinks = [
    { platform: "tiktok", url: "#" },
    { platform: "twitter", url: "#" },
    { platform: "dribbble", url: "#" },
    { platform: "instagram", url: "#" },
  ],
}: LiftoffCourse2022Props) {
  const iconMap = {
    tiktok: TikTokIcon,
    twitter: TwitterIcon,
    dribbble: DribbbleIcon,
    instagram: InstagramIcon,
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#D647B1] via-[#9F48F4] to-[#1F1036] py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col overflow-hidden rounded-2xl lg:flex-row"
        >
          {/* Left: Profile Image with gradient overlay */}
          <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:w-[45%]">
            <Image
              src={profileImage}
              alt={`${name} profile photo`}
              fill
              className="object-cover"
              priority
            />
            {/* Purple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D647B1]/70 via-[#9F48F4]/60 to-[#1F1036]/80 mix-blend-multiply" />
          </div>

          {/* Right: White Card with Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center bg-white p-6 sm:p-8 lg:w-[55%] lg:p-10"
          >
            {/* Title */}
            <h2
              className="mb-5 text-3xl font-bold text-[#1A1A1A] sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h2>

            {/* Bio Content */}
            <div className="space-y-4 text-sm leading-relaxed text-[#4A4A4A]">
              <p>
                {greeting} {bio1}
              </p>
              <p>{bio2}</p>
            </div>

            {/* Footer: Signature and Social Icons */}
            <div className="mt-8 flex items-end justify-between">
              {/* Signature */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl text-[#1A1A1A]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {signatureName}
              </motion.span>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-2"
              >
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.platform}
                    href={link.url}
                    icon={iconMap[link.platform]}
                    label={link.platform}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
