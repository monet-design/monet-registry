"use client";

import { motion } from "motion/react";
import Image from "next/image";

const CONTENT = {
  headline: "Loved by builders, trusted by teams",
  subheadline:
    "Join thousands who've made Cap their daily driver for visual communication.",
  testimonials: [
    {
      name: "Olivia",
      handle: "@olivialawson.co",
      avatar: "/testimonials/olivialawson.png",
      quote:
        "I've been testing Cap.so for no other reason than some old habits die hard for this former software analyst. Whew that UI is so polished and crispy. Between the open source code, self hosted vids, editing features and price point -- gone give Loom some competition",
      link: "https://www.threads.com/@olivialawson.co/post/DIj1kOfpPgX",
      rotation: 8,
      position: { right: "5%", top: "5%" },
      zIndex: 4,
    },
    {
      name: "abdul",
      handle: "@NerdyProgramme2",
      avatar: "/testimonials/NerdyProgramme2.png",
      quote:
        "Cap is hands down the best screen recorder I've ever used. The instant sharing feature saves me so much time. Highly recommend it!",
      link: "https://x.com/NerdyProgramme2/status/1913593977124671956",
      rotation: -5,
      position: { right: "25%", top: "15%" },
      zIndex: 3,
    },
    {
      name: "Bilal Budhani",
      handle: "@BilalBudhani",
      avatar: "/testimonials/BilalBudhani.png",
      quote:
        "Just discovered Cap and I'm impressed! Clean UI, fast recording, and the fact that it's open source makes it even better.",
      link: "https://x.com/BilalBudhani",
      rotation: 3,
      position: { left: "5%", top: "10%" },
      zIndex: 2,
    },
    {
      name: "Greg_Ld",
      handle: "@Greg__LD",
      avatar: "/testimonials/Greg__LD.png",
      quote:
        "Finally a screen recorder that respects my privacy and gives me full control over my data. Cap is exactly what I needed.",
      link: "https://x.com/Greg__LD",
      rotation: -8,
      position: { left: "20%", top: "40%" },
      zIndex: 1,
    },
    {
      name: "evening kid",
      handle: "@eveningkid",
      avatar: "/testimonials/eveningkid.png",
      quote:
        "The Studio Mode in Cap is a game changer. Being able to edit locally before sharing is so valuable for creating polished content.",
      link: "https://x.com/eveningkid",
      rotation: 6,
      position: { right: "15%", top: "50%" },
      zIndex: 2,
    },
    {
      name: "Hrushi",
      handle: "@BorhadeHrushi",
      avatar: "/testimonials/BorhadeHrushi.png",
      quote:
        "Cap's AI features are surprisingly useful. Auto-generated titles and transcriptions save me tons of time on every recording.",
      link: "https://x.com/BorhadeHrushi",
      rotation: -3,
      position: { left: "35%", top: "60%" },
      zIndex: 3,
    },
  ],
} as const;

interface CapSoTestimonial4Props {
  mode?: "light" | "dark";
}

export default function CapSoTestimonial4({ mode = "light" }: CapSoTestimonial4Props) {
  return (
    <section className="w-full py-[150px] lg:py-[200px] bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="px-5 mb-16 text-center">
          <h2 className="mx-auto mb-3 w-full text-4xl font-medium text-gray-900 text-balance">
            {CONTENT.headline}
          </h2>
          <p className="text-lg text-gray-500 w-full max-w-[400px] mx-auto leading-[1.75rem]">
            {CONTENT.subheadline}
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:block relative w-full min-h-[600px] py-10">
          {CONTENT.testimonials.map((testimonial, index) => (
            <motion.a
              key={testimonial.handle}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
              className="absolute bg-white p-6 rounded-xl border border-gray-200 shadow-lg w-full max-w-[300px] cursor-pointer"
              style={{
                ...testimonial.position,
                transform: `rotate(${testimonial.rotation}deg)`,
                zIndex: testimonial.zIndex,
              }}
            >
              <div className="flex items-center mb-4">
                <div className="overflow-hidden relative mr-3 w-12 h-12 rounded-full border-2 border-gray-100">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s profile picture`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{testimonial.quote}</p>
            </motion.a>
          ))}
        </div>

        {/* Testimonials Grid - Mobile */}
        <div className="md:hidden flex flex-col gap-4 px-5">
          {CONTENT.testimonials.map((testimonial, index) => (
            <motion.a
              key={testimonial.handle}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="overflow-hidden relative mr-3 w-12 h-12 rounded-full border-2 border-gray-100">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s profile picture`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{testimonial.quote}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
