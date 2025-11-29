"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Glasses } from "lucide-react";

// Types
interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
}

interface AdithNareinTestimonialProps {
  headingPrefix?: string;
  headingMain?: string;
  testimonials?: Testimonial[];
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Adith brings exceptional product understanding, customer empathy, and market insight. His initiative and design leadership at Kuberks resulted in highly praised UI/UX. His work consistently elevated our product experience and became a key factor in customer satisfaction and success.",
    authorName: "Harsh",
    authorRole: "CEO",
    authorCompany: "Kuberks",
  },
  {
    id: 2,
    quote:
      "Worked with Adith on Kuberks and a few freelance projects — super easy to work with, always came up with clean and smart designs. Definitely someone you can rely on.",
    authorName: "Jevin",
    authorRole: "CTO",
    authorCompany: "Kuberks",
  },
  {
    id: 3,
    quote:
      "Adith brought a unique perspective and thoughtful design solutions to our project. His attention to detail, user-first mindset, and eagerness to learn made a great impact on the project. He is a hard working individual and will surely be a valuable asset to any design team.",
    authorName: "Imad Ahmad",
    authorRole: "Founder",
    authorCompany: "Dusk Security",
  },
  {
    id: 4,
    quote:
      "We hired Adith to work on redesigning our existing website. We were impressed by his dedication, and take ownership. A hardworking, sincere individual who consistently delivers quality work. We're looking forward to launch our website for his contributions and highly recommend him.",
    authorName: "Divya Rai",
    authorRole: "",
    authorCompany: "Computahi",
  },
];

// Avatar Icon Component - stylized person with sunglasses
function AvatarIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 ${className}`}
    >
      <Glasses className="h-4 w-4 text-gray-600" />
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full min-w-[280px] max-w-[280px] flex-shrink-0 flex-col rounded-lg bg-[#F0F0F0] p-5"
    >
      {/* Quote Text */}
      <p className="flex-1 text-[11px] leading-relaxed text-[#4A4A4A]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Info */}
      <div className="mt-5 flex items-center gap-3">
        <AvatarIcon />
        <div>
          <p
            className="text-base text-[#3A3A3A]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {testimonial.authorName}
          </p>
          <p className="text-[10px] text-[#6A6A6A]">
            {testimonial.authorRole}
            {testimonial.authorRole && testimonial.authorCompany && ", "}
            {testimonial.authorCompany}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Navigation Button Component
function NavButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 transition-all hover:border-gray-400 hover:text-gray-700"
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </button>
  );
}

// Main Component
export default function AdithNareinTestimonial({
  headingPrefix = "H",
  headingMain = "ear from the people I have worked with",
  testimonials = defaultTestimonials,
}: AdithNareinTestimonialProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFC] py-12 sm:py-16 lg:py-20">
      {/* Import Dancing Script font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-between"
        >
          <h2 className="text-xl sm:text-2xl">
            <span
              className="text-2xl sm:text-3xl text-[#3A3A3A]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {headingPrefix}
            </span>
            <span className="text-[#3A3A3A]">{headingMain}</span>
          </h2>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <NavButton direction="left" onClick={() => handleScroll("left")} />
            <NavButton
              direction="right"
              onClick={() => handleScroll("right")}
            />
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
