"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface BiographySection {
  id: number;
  content: string;
}

interface PhotoSlide {
  id: number;
  src: string;
  alt: string;
}

interface SergeTiutykBiographyProps {
  sectionTitle?: string;
  introText?: string;
  sections?: BiographySection[];
  photos?: PhotoSlide[];
  watermarkText?: string;
}

const defaultSections: BiographySection[] = [
  {
    id: 1,
    content:
      "From a young age, I have been captivated by the world of engineering, which inspired me to pursue programming as its digital counterpart. Throughout my journey, I developed various programs and applications, but soon I discovered that my true passion lay in their aesthetics and the way people interacted with them. I have enjoyed creating solutions that were not only functional but also visually appealing, ultimately guiding me towards a career in design.",
  },
  {
    id: 2,
    content:
      "I started my design career in 2006. I worked as a web designer, product designer, led design teams, and headed the design department. My development background has allowed me to better understand and collaborate with development teams, assisting in solving logical tasks and finding innovative solutions.",
  },
  {
    id: 3,
    content:
      "I excel at designing user interfaces, websites, landing pages, and applications. If you need a high-quality and top-notch UI/UX Designer for your product or service, I am open to collaboration and new challenges! Let's get in touch and discuss your needs and goals.",
  },
];

const defaultPhotos: PhotoSlide[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/serge1/400/500",
    alt: "Profile photo 1",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/serge2/400/500",
    alt: "Profile photo 2",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/serge3/400/500",
    alt: "Profile photo 3",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/serge4/400/500",
    alt: "Profile photo 4",
  },
];

function PolaroidPhoto({
  photo,
  isActive,
}: {
  photo: PhotoSlide;
  isActive: boolean;
}) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, rotate: 0, scale: 0.95 }}
          animate={{ opacity: 1, rotate: 3, scale: 1 }}
          exit={{ opacity: 0, rotate: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          <div className="bg-white p-2 pb-10 shadow-lg">
            <div className="relative h-[280px] w-[220px] overflow-hidden bg-gray-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PaginationDots({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-2 w-2 rounded-full transition-colors duration-200 ${
            index === current ? "bg-black" : "bg-gray-300"
          }`}
          aria-label={`Go to photo ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default function SergeTiutykBiography({
  sectionTitle = "About",
  introText = "I'm a high-class digital designer, a loving husband, and a father of two wonderful daughters.",
  sections = defaultSections,
  photos = defaultPhotos,
  watermarkText = "about",
}: SergeTiutykBiographyProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Section Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-medium tracking-tight text-black sm:text-2xl">
                {sectionTitle}
              </h2>
              <ArrowDown className="h-5 w-5 text-black" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Center Column - Biography Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              {/* Intro Text */}
              <p className="text-sm leading-relaxed text-black">{introText}</p>

              {/* Biography Sections */}
              {sections.map((section, index) => (
                <motion.p
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-sm leading-relaxed text-gray-700"
                >
                  {section.content}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:col-span-5"
          >
            {/* Watermark Text */}
            <div
              className="pointer-events-none absolute -right-4 top-0 select-none text-[120px] font-light italic leading-none tracking-tight text-gray-100 sm:text-[150px] lg:-right-8 lg:text-[180px]"
              aria-hidden="true"
            >
              {watermarkText}
            </div>

            {/* Photo Container */}
            <div className="relative z-10 flex flex-col items-center lg:items-end">
              <div className="relative h-[340px] w-[240px]">
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <PolaroidPhoto
                      photo={photo}
                      isActive={index === currentPhotoIndex}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="mt-6">
                <PaginationDots
                  total={photos.length}
                  current={currentPhotoIndex}
                  onSelect={setCurrentPhotoIndex}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
