"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "../ui/section";

interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    link?: {
      text: string;
      href: string;
    };
  };
  href?: string;
  spanTwoColumns?: boolean;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    quote: "I have asked HR and Marketing team to use it instead of Canva",
    author: {
      name: "Rupesh Sreenivasan",
      title: "Founder & CEO",
      avatar: "https://picsum.photos/56/56?random=1",
      link: {
        text: "Cloudberry360",
        href: "https://cloudberry360.com",
      },
    },
    href: "https://www.linkedin.com/posts/activity-7397272289848868864-AdrE",
  },
  {
    id: "2",
    quote:
      "DesignLumo has transformed how we create educational graphics & promotional content for myself",
    author: {
      name: "Rafeeque",
      title: "Founder",
      avatar: "https://picsum.photos/56/56?random=2",
      link: {
        text: "Scidart Academy",
        href: "https://scidart.com",
      },
    },
  },
  {
    id: "3",
    quote:
      "I have tried many Gen AI design tools since then, but DesignLumo is the first that gives me genuinely usable results. The out-of-the-box quality feels solid, and switching to the editor for quick tweaks is smooth and intuitive.",
    author: {
      name: "Shyjal",
      title: "Founder",
      avatar: "https://picsum.photos/56/56?random=3",
      link: {
        text: "micro.company",
        href: "https://micro.company",
      },
    },
    href: "https://www.producthunt.com/products/designlumo?comment=5008100",
    spanTwoColumns: true,
  },
];

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const CardContent = (
    <div
      className={cn(
        "flex flex-col h-full border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-lg transition-shadow",
        className
      )}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <img
            alt={testimonial.author.name}
            src={testimonial.author.avatar}
            className="w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <div className="text-gray-900 text-base leading-relaxed mb-6">
            <span>"{testimonial.quote}"</span>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-sm">
          <div className="font-semibold text-gray-900">
            {testimonial.author.name}
          </div>
          <div className="text-gray-600 mt-1">
            <span>{testimonial.author.title}</span>
            {testimonial.author.link && (
              <>
                <span> @ </span>
                <a
                  href={testimonial.author.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {testimonial.author.link.text}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (testimonial.href) {
    return (
      <a
        href={testimonial.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block h-full", testimonial.spanTwoColumns && "md:col-span-2")}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className={cn("h-full", testimonial.spanTwoColumns && "md:col-span-2")}>
      {CardContent}
    </div>
  );
}

export default function Testimonials({
  title = "What they are saying ❤️",
  description = "Short testimonials from real users",
  testimonials = defaultTestimonials,
  className,
}: TestimonialsProps) {
  return (
    <Section className={cn("bg-white", className)}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 items-stretch max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
}
