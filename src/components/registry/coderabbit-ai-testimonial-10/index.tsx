"use client";

import { motion } from "motion/react";

interface CoderabbitAiTestimonial10Props {
  mode?: "light" | "dark";
}

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function CoderabbitAiTestimonial10({
  mode = "dark",
}: CoderabbitAiTestimonial10Props) {
  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahdev",
      avatar: "SC",
      content: "Just tried @coderabbitai on our repo and wow! Caught a subtle race condition that we missed in 3 code reviews. This is the future of code review.",
      likes: 234,
      date: "2d",
    },
    {
      name: "Marcus Johnson",
      handle: "@marcusj_dev",
      avatar: "MJ",
      content: "Been using CodeRabbit for 2 months now. Our PR turnaround time dropped by 40%. The AI suggestions are actually helpful, not just noise.",
      likes: 189,
      date: "5d",
    },
    {
      name: "Emily Rodriguez",
      handle: "@emilycodes",
      avatar: "ER",
      content: "The best part about @coderabbitai? It learns from our codebase. After a few weeks, it started catching patterns specific to our architecture.",
      likes: 312,
      date: "1w",
    },
    {
      name: "David Park",
      handle: "@davidpark_io",
      avatar: "DP",
      content: "Skeptical at first, but CodeRabbit found security issues that our SAST tools missed. Now it's part of our standard CI pipeline.",
      likes: 156,
      date: "3d",
    },
  ];

  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            What our users are saying
          </h2>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl bg-zinc-900 p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">{testimonial.handle}</p>
                  </div>
                </div>
                <TwitterIcon />
              </div>

              {/* Content */}
              <p className="text-zinc-300 leading-relaxed mb-4">
                {testimonial.content}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <span>{testimonial.likes} likes</span>
                <span>{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
