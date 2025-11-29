"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Twitter, Instagram, Dribbble } from "lucide-react";

// Types
interface SocialLink {
  id: string;
  icon: "twitter" | "instagram" | "dribbble";
  href: string;
}

interface LiftoffCourse2021Props {
  heading?: string;
  paragraphs?: string[];
  authorName?: string;
  authorPhoto?: string;
  signatureImage?: string;
  socialLinks?: SocialLink[];
}

// Default data
const defaultParagraphs = [
  "Hey there! I'm Mike, a product designer and software engineer from Wisconsin. I've spent the last 10 years hand-crafting beautiful and innovative digital products like Array Themes and Atomic Blocks that millions of people use to power their websites.",
  "Over the years, I've learned a spaceship full of knowledge about what it takes to create successful products that solve problems (and look good while they do it). I've put everything I know into the Liftoff course to help you launch the next big thing and grow some serious recurring revenue. Let's do this!",
];

const defaultSocialLinks: SocialLink[] = [
  { id: "twitter", icon: "twitter", href: "#" },
  { id: "instagram", icon: "instagram", href: "#" },
  { id: "dribbble", icon: "dribbble", href: "#" },
];

// Social Icon Component
function SocialIcon({ type }: { type: "twitter" | "instagram" | "dribbble" }) {
  const iconProps = { size: 14, className: "text-white" };

  switch (type) {
    case "twitter":
      return <Twitter {...iconProps} />;
    case "instagram":
      return <Instagram {...iconProps} />;
    case "dribbble":
      return <Dribbble {...iconProps} />;
  }
}

// Main Component
export default function LiftoffCourse2021({
  heading = "A quick note about the course author, Mike McAlister.",
  paragraphs = defaultParagraphs,
  authorPhoto = "/registry/liftoff-course-2021/author-photo.jpg",
  signatureImage = "/registry/liftoff-course-2021/signature.png",
  socialLinks = defaultSocialLinks,
}: LiftoffCourse2021Props) {
  return (
    <section className="w-full bg-[#EEEDF2] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col overflow-hidden shadow-lg md:flex-row"
        >
          {/* Left - Duotone Photo */}
          <div className="relative h-64 w-full md:h-auto md:w-2/5">
            <div className="absolute inset-0 z-10 bg-[#BC3B5F] mix-blend-multiply" />
            <Image
              src={authorPhoto}
              alt="Course author"
              fill
              className="object-cover grayscale"
            />
          </div>

          {/* Right - Content Card */}
          <div className="flex w-full flex-col justify-between bg-white p-6 sm:p-8 md:w-3/5 lg:p-10">
            <div>
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 text-xl font-semibold leading-snug tracking-tight text-[#2D3142] sm:text-2xl"
              >
                {heading}
              </motion.h2>

              {/* Paragraphs */}
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-sm leading-relaxed text-[#6B7280]"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Footer - Signature and Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-end justify-between"
            >
              {/* Signature */}
              <div className="relative h-10 w-16">
                <Image
                  src={signatureImage}
                  alt="Signature"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D3142] transition-colors hover:bg-[#3D4155]"
                    aria-label={link.icon}
                  >
                    <SocialIcon type={link.icon} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
