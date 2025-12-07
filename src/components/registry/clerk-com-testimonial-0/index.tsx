"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#615CF6", // Clerk purple
    accentHover: "#5651E0",
    labelText: "#A855F7", // Purple-500 for labels
  },
  dark: {
    accent: "#615CF6",
    accentHover: "#7C78FF",
    labelText: "#C084FC",
  },
} as const;

/**
 * Testimonials 데이터
 */
const TESTIMONIALS = {
  featured: {
    name: "Guillermo Rauch",
    role: "CEO",
    company: "Vercel",
    quote:
      "The best practices built-in to their <SignIn/> and <UserProfile/> components would take months to implement in-house, yet no sacrifice is made in terms of Enterprise extensibility or customization to your brand.",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    logoType: "vercel" as const,
  },
  stripe: {
    name: "Patrick Collison",
    role: "CEO",
    company: "Stripe",
    quote:
      "We're big admirers of what the @ClerkDev team are building and looking forward to working more closely with them.",
    avatarUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&fit=crop&crop=face",
    logoType: "stripe" as const,
  },
  regular: [
    {
      name: "Theo Browne",
      role: "CEO",
      company: "Ping Labs",
      quote:
        "Clerk feels like the first time I booted my computer with an SSD. It's so much faster and simpler that it changed how I do things.",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
    },
    {
      name: "Julian Benegas",
      role: "CEO",
      company: "BaseHub",
      quote:
        "After spending many hours on auth issues that seemed simple (but were not), we moved to Clerk and all that burden was lifted. We kind of wish we'd made that decision earlier.",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
    },
    {
      name: "Kevin Van Gundy",
      role: "CEO",
      company: "Hypermode",
      quote:
        "Clerk let us spin up a new product in hours instead of weeks. As a company that deeply values developer velocity— Clerk is exactly what we needed.",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&crop=face",
    },
    {
      name: "Paul Copplestone",
      role: "CEO",
      company: "Supabase",
      quote:
        "Clerk's integration gives Supabase developers another incredible option for handling authentication. And the Clerk team are a pleasure to work with.",
      avatarUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&fit=crop&crop=face",
    },
    {
      name: "Dan Farrelly",
      role: "CTO",
      company: "Inngest",
      quote:
        "We were able to ship MFA, SSO, and SAML for our customers in a fraction of the time. Now, we have improved security and must-haves for enterprise prospects.",
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClerkComTestimonial0Props {
  mode?: "light" | "dark";
}

// Vercel Logo Component
function VercelLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 76 65" fill="currentColor">
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
    </svg>
  );
}

// Stripe Logo Component
function StripeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 25" fill="currentColor">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.48zm-6.3-5.63c-1.03 0-1.87.73-2.07 2.34h4.04c-.07-1.34-.68-2.34-1.97-2.34zm-9.95 11.14V5.96h3.96l.13 1.05c1.08-.9 2.26-1.31 3.56-1.31v4.06c-.5-.07-.88-.1-1.36-.1-1.04 0-2.05.23-2.4.48v9.65h-3.9zm-5.68-4.03c0 1.05.42 1.64 1.47 1.64.56 0 1.12-.12 1.74-.42v3.42c-.64.34-1.56.64-2.9.64-2.77 0-4.2-1.49-4.2-4.33V9.49h-1.8V5.96h1.8V2.33h3.9v3.63h3.18v3.53h-3.18v4.24zm-11.93 4.03V9.49h-1.86V5.96h1.86V4.14c0-2.64 1.86-4.58 4.61-4.58 1.33 0 2.36.34 2.74.55v3.4c-.32-.13-.78-.26-1.36-.26-.87 0-1.5.48-1.5 1.43v1.28h2.74v3.53h-2.74v10.3H25.78zm-5.82-10.82c0-1.95-1.36-3-3.35-3-1.39 0-2.82.5-3.6.99v3.67c.68-.42 1.92-.84 2.9-.84.8 0 1.33.24 1.33.94 0 .67-.52.86-1.32.96-2.37.35-4.4 1.23-4.4 4.4 0 2.35 1.52 3.83 3.63 3.83 1.2 0 2.17-.4 2.98-1.1l.12.84h3.6V9.18h-1.89v-.01zm-2.81 6.77c-.52.41-1.07.67-1.77.67-.67 0-1.17-.4-1.17-1.16 0-1.1.9-1.45 2.37-1.7.29-.05.46-.08.57-.1v2.29zM2.61 19.8V.46h4.16v7.35c.67-.58 1.72-1.11 2.87-1.11 2.57 0 4.09 1.88 4.09 4.88v8.22H9.6v-7.59c0-1.15-.42-1.81-1.41-1.81-.63 0-1.19.26-1.58.6v8.8H2.61z" />
    </svg>
  );
}

// Separator SVG
function Separator({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.25 1.75-2.5 6.5"
        stroke="currentColor"
      />
    </svg>
  );
}

// Regular Testimonial Card
function TestimonialCard({
  name,
  role,
  company,
  quote,
  avatarUrl,
  className = "",
}: {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  className?: string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex rounded-xl bg-gray-50 ring-1 ring-gray-950/5 shadow ${className}`}
    >
      <figure className="flex w-full flex-col items-start p-8">
        <blockquote className="mb-auto text-base/6 text-gray-950">
          <p
            className={`relative before:absolute before:right-full before:top-0 before:content-['"'] after:content-['"']`}
          >
            {quote}
          </p>
        </blockquote>
        <figcaption className="mt-6 flex w-full items-center justify-between">
          <dl className="flex flex-wrap text-sm">
            <dt className="sr-only">Name</dt>
            <dd className="w-full flex-none font-medium text-gray-950">
              {name}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-0.5 text-gray-600">{role}</dd>
            <dt className="sr-only">Company</dt>
            <dd className="mt-0.5 flex items-center text-gray-600">
              <Separator className="mx-1 h-2.5 w-2.5 flex-none stroke-gray-500" />
              {company}
            </dd>
          </dl>
          <div className="relative flex-none overflow-hidden rounded-lg bg-black/5">
            <img
              alt={name}
              loading="lazy"
              width={48}
              height={48}
              className="size-12 object-cover"
              src={avatarUrl}
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
          </div>
        </figcaption>
      </figure>
    </motion.li>
  );
}

// Featured Testimonial Card (Vercel)
function FeaturedTestimonialCard({
  name,
  role,
  company,
  quote,
  avatarUrl,
  logoType,
}: {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  logoType: "vercel" | "stripe";
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex rounded-xl bg-white ring-1 ring-gray-950/5 z-10 row-span-2"
      style={{
        boxShadow:
          "0 10px 32px rgb(33 33 38 / 0.15), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px var(--tw-ring-color), 0 4px 6px rgb(33 33 38 / 0.08), 0 24px 68px rgb(33 33 38 / 0.10)",
      }}
    >
      <figure className="flex w-full flex-col items-start p-8">
        {logoType === "vercel" && (
          <VercelLogo className="mb-10 h-5 w-auto text-gray-950" />
        )}
        <blockquote className="mt-auto text-xl font-normal text-gray-950">
          <p
            className={`relative before:absolute before:right-full before:top-0 before:content-['"'] after:content-['"']`}
          >
            {quote}
          </p>
        </blockquote>
        <figcaption className="mt-6 flex w-full items-center justify-between">
          <dl className="flex flex-wrap text-sm">
            <dt className="sr-only">Name</dt>
            <dd className="w-full flex-none font-medium text-gray-950">
              {name}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-0.5 text-gray-600">{role}</dd>
            <dt className="sr-only">Company</dt>
            <dd className="mt-0.5 flex items-center text-gray-600">
              <Separator className="mx-1 h-2.5 w-2.5 flex-none stroke-gray-500" />
              {company}
            </dd>
          </dl>
          <div className="relative flex-none overflow-hidden rounded-lg bg-black/5">
            <img
              alt={name}
              loading="lazy"
              width={48}
              height={48}
              className="size-12 object-cover"
              src={avatarUrl}
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
          </div>
        </figcaption>
      </figure>
    </motion.li>
  );
}

// Stripe Featured Card (Purple background)
function StripeTestimonialCard({
  name,
  role,
  company,
  quote,
  avatarUrl,
}: {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}) {
  const colors = COLORS.light;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex rounded-xl z-10 row-span-2 md:col-start-2 md:row-start-4 xl:col-start-3 xl:row-start-2"
      style={{
        backgroundColor: colors.accent,
        boxShadow:
          "0 10px 32px rgb(33 33 38 / 0.15), 0 1px 1px rgb(0 0 0 / 0.05), 0 0 0 1px #6C47FF, 0 4px 6px rgb(33 33 38 / 0.08), 0 24px 68px rgb(33 33 38 / 0.10)",
      }}
    >
      <figure className="flex w-full flex-col items-start p-8">
        <StripeLogo className="mb-10 h-7 w-auto text-white" />
        <blockquote className="mt-auto text-xl font-normal text-white">
          <p
            className={`relative before:absolute before:right-full before:top-0 before:content-['"'] after:content-['"']`}
          >
            {quote}
          </p>
        </blockquote>
        <figcaption className="mt-6 flex w-full items-center justify-between">
          <dl className="flex flex-wrap text-sm">
            <dt className="sr-only">Name</dt>
            <dd className="w-full flex-none font-medium text-white">{name}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-0.5 text-white/80">{role}</dd>
            <dt className="sr-only">Company</dt>
            <dd className="mt-0.5 flex items-center text-white/80">
              <Separator className="mx-1 h-2.5 w-2.5 flex-none stroke-white/50" />
              {company}
            </dd>
          </dl>
          <div className="relative flex-none overflow-hidden rounded-lg bg-black/10">
            <img
              alt={name}
              loading="lazy"
              width={48}
              height={48}
              className="size-12 object-cover"
              src={avatarUrl}
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
          </div>
        </figcaption>
      </figure>
    </motion.li>
  );
}

export default function ClerkComTestimonial0({
  mode = "light",
}: ClerkComTestimonial0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium"
            style={{ color: colors.labelText }}
          >
            What people are saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-md text-balance text-3xl font-semibold tracking-tight text-gray-950"
          >
            Trusted by startups and the world&apos;s largest companies
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-base/6 text-gray-600"
          >
            Join the growing number of customers and champions who trust Clerk
            for authentication and user management.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative mt-16">
          {/* Decorative borders */}
          <div
            className="absolute opacity-30 inset-x-0 h-px -top-px"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 1'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
              maskImage:
                "linear-gradient(to right, transparent, white 4rem, white calc(100% - 4rem), transparent)",
              marginLeft: "-4rem",
              marginRight: "-4rem",
            }}
          />
          <div
            className="absolute opacity-30 inset-y-0 w-px -right-px"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 4'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
              maskImage:
                "linear-gradient(to bottom, transparent, white 4rem, white calc(100% - 4rem), transparent)",
              marginTop: "-4rem",
              marginBottom: "-4rem",
            }}
          />
          <div
            className="absolute opacity-30 inset-x-0 h-px -bottom-px"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 1'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
              maskImage:
                "linear-gradient(to right, transparent, white 4rem, white calc(100% - 4rem), transparent)",
              marginLeft: "-4rem",
              marginRight: "-4rem",
            }}
          />
          <div
            className="absolute opacity-30 inset-y-0 w-px -left-px"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 4'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
              maskImage:
                "linear-gradient(to bottom, transparent, white 4rem, white calc(100% - 4rem), transparent)",
              marginTop: "-4rem",
              marginBottom: "-4rem",
            }}
          />

          {/* Grid */}
          <ul
            role="list"
            className="isolate grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3"
          >
            {/* Featured Vercel Card */}
            <FeaturedTestimonialCard {...TESTIMONIALS.featured} />

            {/* Regular Cards - First Row */}
            <TestimonialCard {...TESTIMONIALS.regular[0]} />
            <TestimonialCard {...TESTIMONIALS.regular[1]} />

            {/* Regular Card */}
            <TestimonialCard {...TESTIMONIALS.regular[2]} />

            {/* Stripe Featured Card */}
            <StripeTestimonialCard {...TESTIMONIALS.stripe} />

            {/* More Regular Cards */}
            <TestimonialCard {...TESTIMONIALS.regular[3]} />
            <TestimonialCard {...TESTIMONIALS.regular[4]} />
          </ul>
        </div>
      </div>
    </section>
  );
}
