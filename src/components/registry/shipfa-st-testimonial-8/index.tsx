"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1C1917",
    cardBackground: "#292524",
    cardBorder: "rgba(255, 255, 255, 0.1)",
    accent: "#F59E0B",
    accentText: "#1C1917",
    tweetBackground: "#0f0f0f",
  },
  dark: {
    background: "#1C1917",
    cardBackground: "#292524",
    cardBorder: "rgba(255, 255, 255, 0.1)",
    accent: "#F59E0B",
    accentText: "#1C1917",
    tweetBackground: "#0f0f0f",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { Play, Star, Heart, MessageCircle, Link2 } from "lucide-react";

interface VideoTestimonial {
  type: "video";
  id: number;
  name: string;
  quote: string;
  posterUrl: string;
  rating: number;
}

interface TextTestimonial {
  type: "text";
  id: number;
  name: string;
  handle?: string;
  avatar: string;
  content: string;
  highlight?: string;
  highlightPosition?: "before" | "after" | "middle";
  sourceIcon?: "producthunt" | "twitter";
  imageUrl?: string;
}

interface TweetTestimonial {
  type: "tweet";
  id: number;
  name: string;
  handle: string;
  avatar: string;
  content: string;
  replyingTo?: string;
  date: string;
  likes: number;
  verified?: boolean;
}

type Testimonial = VideoTestimonial | TextTestimonial | TweetTestimonial;

interface ShipfaStTestimonial8Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    type: "video",
    id: 1,
    name: "Jack F.",
    quote: "I shipped in 6 days as a noob coder... This is awesome",
    posterUrl: "https://picsum.photos/seed/jack-f/400/600",
    rating: 5,
  },
  {
    type: "text",
    id: 2,
    name: "Sergiu Chiriac",
    handle: "@sergiu",
    avatar: "https://picsum.photos/seed/sergiu/100/100",
    content: "Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!",
    sourceIcon: "producthunt",
  },
  {
    type: "tweet",
    id: 3,
    name: "Victor Abeledo",
    handle: "@VicPivots",
    avatar: "https://picsum.photos/seed/victor/100/100",
    content: "Marc, I got your boilerplate and having the payments setup with Stripe + user auth is a blessing. This will save me like a week of work for each new side project I spin up.\n\nI appreciate that is well documented, as well.\n\n100% worth it",
    replyingTo: "@marc_louvion",
    date: "Sep 1, 2023",
    likes: 12,
  },
  {
    type: "video",
    id: 4,
    name: "Alex Martinez",
    quote: "Everything you need to ship your SaaS ASAP",
    posterUrl: "https://picsum.photos/seed/alex-martinez/400/600",
    rating: 5,
  },
  {
    type: "text",
    id: 5,
    name: "Silvestro",
    avatar: "https://picsum.photos/seed/silvestro/100/100",
    content: "Even though it's Christmas, I'm shipping anyway! shipfa.st was",
    highlight: "my best purchase in 2023!",
    highlightPosition: "after",
  },
  {
    type: "text",
    id: 6,
    name: "Christian Hatch",
    avatar: "https://picsum.photos/seed/christian/100/100",
    content: "which is a new, awesome experience for me. I'd still be pre-launch if it wasn't for you and ShipFast!",
    highlight: "I launched a week and a half ago and I'm at $450 MRR",
    highlightPosition: "before",
  },
  {
    type: "video",
    id: 7,
    name: "Mateusz Siatrak",
    quote: "Yesterday I've made a first sale !!",
    posterUrl: "https://picsum.photos/seed/mateusz/400/600",
    rating: 5,
  },
  {
    type: "text",
    id: 8,
    name: "Juanjo Valino",
    avatar: "https://picsum.photos/seed/juanjo/100/100",
    content: "I wanna cry. It would have taken me months to do the website without the boilerplate.",
    highlight: "I made more in 6 days than the minimum wage here in Spain.",
    highlightPosition: "before",
    imageUrl: "https://picsum.photos/seed/juanjo-screenshot/400/300",
  },
  {
    type: "text",
    id: 9,
    name: "Gabriel",
    avatar: "https://picsum.photos/seed/gabriel/100/100",
    content: "I transitioned",
    highlight: "from using no-code tools to launching a fully-coded saas",
    highlightPosition: "middle",
  },
  {
    type: "tweet",
    id: 10,
    name: "Yifan Goh",
    handle: "@imgyf",
    avatar: "https://picsum.photos/seed/yifan/100/100",
    content: "I wanted to build a new startup with Next.js, and saw @marclou launched shipfa.st as a boilerplate for it.\n\nTried it for myself, and I have to say it's a game changer.\n\nComes with easy to follow tutorial, and saves you a ton of time. What's not to love?",
    date: "Sep 1, 2023",
    likes: 46,
    verified: true,
  },
  {
    type: "text",
    id: 11,
    name: "Sanja Velic",
    avatar: "https://picsum.photos/seed/sanja/100/100",
    content: "I managed to deploy my first Next.JS app in 2 days thanks to shipfast. Made a micro SaaS by simply updating the landing page and having a full-time job",
  },
  {
    type: "text",
    id: 12,
    name: "Anas Frilia",
    avatar: "https://picsum.photos/seed/anas/100/100",
    content: "Ive deployed many apps with ShipFast. I wouldnt have done it without the boilerplate.",
  },
];

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < rating ? "#F59E0B" : "transparent"}
          stroke={i < rating ? "#F59E0B" : "#6B7280"}
        />
      ))}
    </div>
  );
}

// Video Testimonial Card
function VideoTestimonialCard({ testimonial, colors }: { testimonial: VideoTestimonial; colors: typeof COLORS.light }) {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: colors.cardBorder }}
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
        <Image
          src={testimonial.posterUrl}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Play button and info */}
        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-end">
          <button
            className="group"
            title="Play video"
          >
            <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
            </div>
          </button>

          <div className="text-right">
            <p className="text-white font-medium drop-shadow-lg">{testimonial.name}</p>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
      </div>

      {/* Quote */}
      <div
        className="p-4 font-medium text-lg leading-tight"
        style={{ backgroundColor: colors.accent, color: colors.accentText }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </div>
    </div>
  );
}

// Text Testimonial Card
function TextTestimonialCard({ testimonial, colors }: { testimonial: TextTestimonial; colors: typeof COLORS.light }) {
  const renderContent = () => {
    if (!testimonial.highlight) {
      return <span>{testimonial.content}</span>;
    }

    const highlightSpan = (
      <span
        className="px-0.5"
        style={{ backgroundColor: colors.accent, color: colors.accentText }}
      >
        {testimonial.highlight}
      </span>
    );

    switch (testimonial.highlightPosition) {
      case "before":
        return (
          <>
            {highlightSpan} {testimonial.content}
          </>
        );
      case "after":
        return (
          <>
            {testimonial.content} {highlightSpan}
          </>
        );
      case "middle":
        return (
          <>
            {testimonial.content} {highlightSpan}
          </>
        );
      default:
        return <span>{testimonial.content}</span>;
    }
  };

  return (
    <figure
      className="rounded-xl p-5 border"
      style={{ backgroundColor: colors.cardBackground, borderColor: colors.cardBorder }}
    >
      {/* Image if exists */}
      {testimonial.imageUrl && (
        <div className="-mx-5 -mt-5 mb-5 rounded-t-xl overflow-hidden">
          <Image
            src={testimonial.imageUrl}
            alt={`${testimonial.name}'s testimonial`}
            width={400}
            height={300}
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-sm text-gray-300 leading-relaxed">
        {renderContent()}
      </blockquote>

      {/* Author */}
      <figcaption className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-medium text-white">{testimonial.name}</div>
            {testimonial.handle && (
              <div className="text-xs text-gray-500">{testimonial.handle}</div>
            )}
          </div>
        </div>

        {/* Source Icon */}
        {testimonial.sourceIcon === "producthunt" && (
          <a href="#" className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.245 26.256" className="w-6 h-6">
              <path d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128" fill="#da552f" />
              <path d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595" fill="#fff" />
            </svg>
          </a>
        )}
      </figcaption>
    </figure>
  );
}

// Tweet Card Component
function TweetCard({ testimonial, colors }: { testimonial: TweetTestimonial; colors: typeof COLORS.light }) {
  return (
    <article
      className="rounded-xl p-4 border"
      style={{ backgroundColor: colors.tweetBackground, borderColor: colors.cardBorder }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-sm">{testimonial.name}</span>
              {testimonial.verified && (
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-400 fill-current">
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                </svg>
              )}
            </div>
            <span className="text-gray-500 text-sm">{testimonial.handle}</span>
          </div>
        </div>

        {/* X (Twitter) Logo */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Replying to */}
      {testimonial.replyingTo && (
        <p className="text-gray-500 text-sm mb-2">
          Replying to <span className="text-blue-400">{testimonial.replyingTo}</span>
        </p>
      )}

      {/* Content */}
      <p className="text-white text-sm whitespace-pre-line mb-3">{testimonial.content}</p>

      {/* Date */}
      <p className="text-gray-500 text-xs mb-3">{testimonial.date}</p>

      {/* Actions */}
      <div className="flex items-center gap-6 text-gray-500">
        <button className="flex items-center gap-1 hover:text-pink-500 transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-xs">{testimonial.likes}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs">Reply</span>
        </button>
        <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
          <Link2 className="w-4 h-4" />
          <span className="text-xs">Copy link</span>
        </button>
      </div>
    </article>
  );
}

export default function ShipfaStTestimonial8({
  mode = "dark",
  title = "7890 makers built AI tools, SaaS, and more",
  subtitle = "They made their first $ online, and some even quit their 9-5!",
  ctaTitle = "Boost your app, launch, earn",
  ctaSubtitle = "Don't waste time on Stripe subscriptions or designing a pricing section...",
  testimonials = defaultTestimonials,
}: ShipfaStTestimonial8Props) {
  const colors = COLORS[mode];

  // Distribute testimonials into 4 columns for masonry
  const columns: Testimonial[][] = [[], [], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 4].push(testimonial);
  });

  return (
    <section
      className="py-16 lg:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Testimonials Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4 lg:gap-6">
              {column.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {testimonial.type === "video" && (
                    <VideoTestimonialCard testimonial={testimonial} colors={colors} />
                  )}
                  {testimonial.type === "text" && (
                    <TextTestimonialCard testimonial={testimonial} colors={colors} />
                  )}
                  {testimonial.type === "tweet" && (
                    <TweetCard testimonial={testimonial} colors={colors} />
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 pt-16 border-t border-white/10"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            {ctaTitle}
          </h3>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            {ctaSubtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
