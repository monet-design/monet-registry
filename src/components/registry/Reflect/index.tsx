"use client";

import { motion } from "motion/react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface Testimonial {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  content: string;
}

interface ReflectTestimonialProps {
  mode?: "light" | "dark";
  headingHighlight?: string;
  headingRest?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

// Default testimonials data based on image
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Fabrizio Rinaldi",
    handle: "@linuz90",
    avatar: "https://picsum.photos/seed/linuz90/40/40",
    content:
      "I'm keeping @reflectnotes open *all* the time, and I'm using both for simple journaling, and long form writing. It's rare to see a single app work so well for both.",
  },
  {
    id: 2,
    name: "Jeremy McPeak",
    handle: "@jwmcpeak",
    avatar: "https://picsum.photos/seed/jwmcpeak/40/40",
    content:
      "I just received an invite to @reflectnotes, and holy crap! It is well thought out, and I can see this being my note-taking platform going forward. Well done! I'm looking forward to seeing how the app progresses.",
  },
  {
    id: 3,
    name: "Chris",
    handle: "@Mr_Chris_L",
    avatar: "https://picsum.photos/seed/mrchrisl/40/40",
    content:
      "Absolutely loving @reflectnotes. The visualisation of the neural network is superb and seeing it develop makes me want to take daily notes. The back-linking makes associations effortless. Hats off to @maccaw and his team, it's exactly what I've been looking for.\u{1F64F}",
  },
  {
    id: 4,
    name: "Flour storm",
    handle: "@adnan_wahab_",
    avatar: "https://picsum.photos/seed/adnanwahab/40/40",
    content:
      "@maccaw holy shit reflect app design is so good my writing and introspective ability went up 10x since i got it. was using bear/notion before but the simplicity of reflect is beautiful.",
  },
  {
    id: 5,
    name: "demetria r giles",
    handle: "@drosewritings",
    avatar: "https://picsum.photos/seed/drose/40/40",
    content:
      "Playing around with @reflectnotes. I'm back logging key thoughts, details and soundbites from episodes, books, meetings, articles, etc from the past week. So far, it's a knowledge worker's dream come true. \u{1F60D}\u{1F44C}",
  },
  {
    id: 6,
    name: "Sean Rose",
    handle: "@seanrose",
    avatar: "https://picsum.photos/seed/seanrose/40/40",
    content:
      "Really, really liking @reflectnotes so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.",
  },
  {
    id: 7,
    name: "Ryan Delk",
    handle: "@delk",
    avatar: "https://picsum.photos/seed/delk/40/40",
    content: "Don't take it from me: @reflectnotes is magic.",
  },
  {
    id: 8,
    name: "Sam Jenkins",
    handle: "@samjenkins1987",
    avatar: "https://picsum.photos/seed/samjenkins/40/40",
    content:
      "@reflectnotes is probably the best new product I've used this year. Clearly made by a team that understand product. The little nuances, the simplicity and the automation of common daily workflows is life-changing. Well played @maccaw this is a sensational product! \u{1F64C}",
  },
  {
    id: 9,
    name: "Jonathan Simcoe",
    handle: "@jdsimcoe",
    avatar: "https://picsum.photos/seed/jdsimcoe/40/40",
    content:
      "All righty. I have to give a massive shout-out to @maccaw for pioneering @reflectnotes. It has already matured to a point where it is a daily driver for me. The speed, focus, and attention to detail (especially perfect bits of structured data) is superb.",
  },
];

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-[#2B2749]/70 bg-[#17142E] p-5"
    >
      {/* Author Info */}
      <div className="mb-3 flex items-center gap-3">
        {/* Green dot indicator - positioned inline with avatar */}
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2DD4BF]" />
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[#C084FC]">
            {testimonial.name}
          </span>
          <span className="text-xs text-[#6B7280]">{testimonial.handle}</span>
        </div>
      </div>

      {/* Quote Text */}
      <p className="text-[13px] leading-relaxed text-[#9CA3AF]">
        {testimonial.content}
      </p>
    </motion.div>
  );
}

// Main Component
export default function ReflectTestimonial({
  mode = "light",
  headingHighlight = "Loved by thin",
  headingRest = "kers",
  subtitle = "Here's what people are saying about us",
  testimonials = defaultTestimonials,
}: ReflectTestimonialProps) {
  // Split testimonials into 3 columns for masonry effect
  const columns: Testimonial[][] = [[], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 3].push(testimonial);
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#070723] py-16 sm:py-20 lg:py-24">
      {/* Background gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E1B4B]/30 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0D9488]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#2DD4BF] bg-clip-text text-transparent">
              {headingHighlight}
            </span>
            <span className="text-white">{headingRest}</span>
          </h2>
          <p className="text-sm text-[#9CA3AF] sm:text-base">{subtitle}</p>
        </motion.div>

        {/* Testimonials Grid - 3 columns masonry */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-5">
              {column.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
