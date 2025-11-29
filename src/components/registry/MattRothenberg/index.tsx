"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface Link {
  text: string;
  href: string;
}

interface WorkExperience {
  company: Link;
  description: string;
  products?: Link[];
}

interface MattRothenbergProps {
  name?: string;
  location?: string;
  roles?: string[];
  tagline?: string;
  profileImage?: string;
  sectionLabel?: string;
  workExperiences?: WorkExperience[];
}

function UnderlineLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-1 underline-offset-2 hover:opacity-70 transition-opacity ${className}`}
    >
      {children}
    </a>
  );
}

export default function MattRothenberg({
  name = "Matt Rothenburger",
  location = "New York",
  roles = ["designer", "developer", "serial tinkerer"],
  tagline = "I like my coffee strong, my side projects unfinished, and my photos sharp.",
  profileImage = "https://picsum.photos/seed/mattrothenberg/120/120",
  sectionLabel = "I'M EMPLOYABLE",
  workExperiences = [
    {
      company: { text: "Replicate", href: "https://replicate.com" },
      description:
        "I currently work at {company} where I'm helping make machine learning accessible to all software engineers.",
    },
    {
      company: { text: "GitHub Next", href: "https://githubnext.com" },
      description:
        "I previously worked at {company}, where I explored the future of software development. I had the pleasure of shipping such hits as {products}.",
      products: [
        { text: "Copilot", href: "https://github.com/features/copilot" },
        { text: "GitHub Blocks", href: "https://blocks.githubnext.com" },
      ],
    },
    {
      company: { text: "Clearbit", href: "https://clearbit.com" },
      description:
        "I also worked at {company} where I lead development of their core design system, and {company2}, where I worked on web and command-line interfaces for managed data services.",
      products: [{ text: "Heroku", href: "https://heroku.com" }],
    },
    {
      company: {
        text: "UNDP",
        href: "https://www.undp.org",
      },
      description:
        "I also had the privilege of helping the {company} build their {product}, a quick way to get detailed information on digital readiness in any country.",
      products: [
        {
          text: "Digital Development Compass",
          href: "https://data.undp.org/digital-development-compass",
        },
      ],
    },
  ],
}: MattRothenbergProps) {
  const renderDescription = (experience: WorkExperience) => {
    const { description, company, products } = experience;

    if (description.includes("{company2}") && products && products.length > 0) {
      const parts = description.split(/\{company\}|\{company2\}/);
      return (
        <>
          {parts[0]}
          <UnderlineLink href={company.href}>{company.text}</UnderlineLink>
          {parts[1]}
          <UnderlineLink href={products[0].href}>{products[0].text}</UnderlineLink>
          {parts[2]}
        </>
      );
    }

    if (description.includes("{products}") && products) {
      const parts = description.split(/\{company\}|\{products\}/);
      return (
        <>
          {parts[0]}
          <UnderlineLink href={company.href}>{company.text}</UnderlineLink>
          {parts[1]}
          {products.map((product, idx) => (
            <span key={product.text}>
              <UnderlineLink href={product.href}>{product.text}</UnderlineLink>
              {idx < products.length - 1 && " and "}
            </span>
          ))}
          {parts[2]}
        </>
      );
    }

    if (description.includes("{product}") && products && products.length > 0) {
      const parts = description.split(/\{company\}|\{product\}/);
      return (
        <>
          {parts[0]}
          <UnderlineLink href={company.href}>{company.text}</UnderlineLink>
          {parts[1]}
          <UnderlineLink href={products[0].href}>{products[0].text}</UnderlineLink>
          {parts[2]}
        </>
      );
    }

    const parts = description.split("{company}");
    return (
      <>
        {parts[0]}
        <UnderlineLink href={company.href}>{company.text}</UnderlineLink>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-12 sm:px-8 lg:px-12 font-mono">
      <div className="mx-auto max-w-2xl">
        {/* Header Section - Profile Image and Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 mb-10"
        >
          {/* Profile Image */}
          <div className="shrink-0">
            <Image
              src={profileImage}
              alt={name}
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-cover grayscale"
            />
          </div>

          {/* Introduction Text */}
          <div className="flex-1 space-y-4 text-sm leading-relaxed text-[#1a1a1a]">
            <p className="italic">
              I&apos;m {name}, a {location}-based {roles.join(", ")}.
            </p>
            <p className="italic">
              {tagline.split("photos").map((part, idx) =>
                idx === 0 ? (
                  <span key={idx}>
                    {part}
                    <UnderlineLink href="#">photos</UnderlineLink>
                  </span>
                ) : (
                  <span key={idx}>{part}</span>
                )
              )}
            </p>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          {/* Section Label */}
          <div className="shrink-0 sm:w-[120px]">
            <span
              className="text-[10px] tracking-[0.05em] text-[#1a1a1a] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {sectionLabel}
            </span>
          </div>

          {/* Work Experience Content */}
          <div className="flex-1 space-y-4 text-sm leading-relaxed text-[#1a1a1a]">
            {workExperiences.map((experience, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {renderDescription(experience)}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
