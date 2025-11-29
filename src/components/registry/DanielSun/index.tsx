"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Heart } from "lucide-react";
import "./font.css";

interface PolaroidPhoto {
  src: string;
  alt: string;
  caption: string;
  rotation?: number;
}

interface DanielSunProps {
  photos?: PolaroidPhoto[];
  paragraphs?: string[];
}

function PolaroidCard({
  photo,
  index,
}: {
  photo: PolaroidPhoto;
  index: number;
}) {
  const isFirst = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: photo.rotation ?? 0 }}
      animate={{ opacity: 1, y: 0, rotate: photo.rotation ?? 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="absolute bg-white p-2 pb-10 shadow-lg"
      style={{
        transform: `rotate(${photo.rotation ?? 0}deg)`,
        zIndex: isFirst ? 1 : 2,
        left: isFirst ? 0 : 80,
        top: isFirst ? 40 : 0,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative w-[140px] h-[140px] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
        />
      </div>
      <div
        className="absolute bottom-2 left-2 right-2 text-center font-handwriting text-sm text-gray-700"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {photo.caption.includes("Family") ? (
          <span className="flex items-center justify-center gap-1">
            {photo.caption.replace(" heart", "")}
            <Heart className="w-4 h-4 fill-red-500 text-red-500 inline" />
          </span>
        ) : (
          photo.caption
        )}
      </div>
    </motion.div>
  );
}

export default function DanielSun({
  photos = [
    {
      src: "https://picsum.photos/seed/rome-obelisk/280/280",
      alt: "Person at St. Peter's Square in Rome",
      caption: 'Wow, it\'s like I\'m holding\nan obelisk in my hand "..."',
      rotation: -8,
    },
    {
      src: "https://picsum.photos/seed/couple-family/280/280",
      alt: "Couple photo",
      caption: "My Family heart",
      rotation: 3,
    },
  ],
  paragraphs = [
    "Born in Kharkiv, Ukraine. Thriving in Porto, Portugal. I've spent the past 4+ years collaborating with VC-backed products on branding, websites, apps, and marketing.",
    "I join forces with founders to create compelling stories and digital experiences. Ones that make their products shine, resonate with users, and attract more investors.",
  ],
}: DanielSunProps) {
  return (
    <section
      className="w-full bg-white px-6 py-12 sm:px-8 lg:px-16 font-body"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left - Polaroid Photos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-[260px] h-[220px] shrink-0"
          >
            {photos.map((photo, index) => (
              <PolaroidCard key={index} photo={photo} index={index} />
            ))}
          </motion.div>

          {/* Right - Text Content */}
          <div className="flex-1 space-y-5 pt-2">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="text-[15px] leading-[1.7] text-gray-800 tracking-[-0.01em]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
