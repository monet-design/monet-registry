"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface Award {
  count: number;
  title: string;
  source: string;
}

interface MargheritaFortunaProps {
  introText?: string;
  introHighlight1?: string;
  introHighlight2?: string;
  profileImage1?: string;
  profileImage2?: string;
  bioIntro?: string;
  bioParagraph1?: string;
  bioParagraph2?: string;
  bioParagraph3?: string;
  awardsIntroHighlight1?: string;
  awardsIntroHighlight2?: string;
  awardsIntroText?: string;
  awards?: Award[];
  closingHighlight1?: string;
  closingHighlight2?: string;
  closingText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function MargheritaFortuna({
  introText = "Despite my last name, nothing is entirely left to chance in my approach. From concept to final execution, I design each project with the same",
  introHighlight1 = "exquisite attention",
  introHighlight2 = "detail",
  profileImage1 = "/registry/margherita-fortuna/profile-1.jpg",
  profileImage2 = "/registry/margherita-fortuna/profile-2.jpg",
  bioIntro = "I was born in Rome, the Eternal City, where the air you breathe smells of art and beauty. I spent my childhood in a bright house, always watching my mother and older sister painting.",
  bioParagraph1 = "It's no surprise that such innate creativity guided me towards discovering my own form of art in the digital world, which has become what today is the ground of my profession.",
  bioParagraph2 = "Over the years my job has taken me to several Italian cities, where I have worked in both small studios and big communication agencies, each time gaining new personal experiences and skills that I keep in my suitcase always ready for new journeys.",
  bioParagraph3 = "Today I find myself facing one of the trickiest parts of my journey: life as a freelancer feels like riding a roller coaster, but despite all the challenges, the view from the top rewards me with a rather beautiful and inspiring landscape.",
  awardsIntroHighlight1 = "FWA &",
  awardsIntroHighlight2 = "Awwwards jury",
  awardsIntroText = "I've been a proud member of",
  awards = [
    { count: 4, title: "FWA OF THE DAY", source: "FWA" },
    { count: 2, title: "AWWWARDS OF THE DAY", source: "Awwwards" },
    { count: 7, title: "CSSDA WEBSITE OF THE DAY", source: "CSS Design Awards" },
    { count: 4, title: "DDA OF THE WEEK", source: "Digital Design Award" },
    { count: 2, title: "DDA OF THE MONTH", source: "Digital Design Award" },
  ],
  closingHighlight1 = "balanced",
  closingHighlight2 = "elegant",
  closingText = "I love to create",
  ctaText = "REQUEST FULL PORTFOLIO",
  onCtaClick,
}: MargheritaFortunaProps) {
  return (
    <section className="w-full bg-[#2B322A] px-6 py-16 sm:px-8 lg:px-16 font-instrument-serif">
      <div className="mx-auto max-w-xl">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C9A86C] mt-3 shrink-0" />
            <p className="text-[#D4C5B0] text-xl sm:text-2xl leading-relaxed">
              {introText.split(introHighlight1)[0]}
              <em className="text-[#C9A86C] italic">{introHighlight1}</em>
              {" to "}
              <em className="text-[#C9A86C] italic">{introHighlight2}</em>
              {" "}
              {introText.split(introHighlight2)[1]?.replace(" to ", "") ||
                "harmoniously blending my skills with other specialists ones."}
            </p>
          </div>
        </motion.div>

        {/* Profile and Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {/* Profile Image */}
          <div className="relative">
            <Image
              src={profileImage1}
              alt="Margherita Fortuna"
              width={280}
              height={350}
              className="w-full max-w-[280px] h-auto object-cover"
            />
          </div>

          {/* Bio Text */}
          <div className="space-y-4">
            <p className="text-[#D4C5B0] text-sm leading-relaxed">
              <span className="text-[#D4C5B0] text-3xl font-normal float-left mr-2 leading-none">
                I
              </span>
              {bioIntro.substring(1)}
            </p>
            <p className="text-[#9A958C] text-sm leading-relaxed">
              {bioParagraph1}
            </p>
            <p className="text-[#9A958C] text-sm leading-relaxed">
              {bioParagraph2}
            </p>
            <p className="text-[#9A958C] text-sm leading-relaxed italic">
              {bioParagraph3}
            </p>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          {/* Awards Intro */}
          <div className="flex items-start gap-2 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C9A86C] mt-3 shrink-0" />
            <p className="text-[#D4C5B0] text-xl sm:text-2xl leading-relaxed">
              {awardsIntroText}{" "}
              <em className="text-[#C9A86C] italic">
                {awardsIntroHighlight1}
                <br />
                {awardsIntroHighlight2}
              </em>{" "}
              for quite some time now — and over the last few years I've also
              been involved in different projects that have won several awards.
            </p>
          </div>

          {/* Awards List */}
          <div className="space-y-0 border-t border-[#4A524A]">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center justify-between py-3 border-b border-[#4A524A]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#D4C5B0] text-base font-normal w-6">
                    {award.count}
                  </span>
                  <span className="text-[#9A958C] text-sm">—</span>
                  <span className="text-[#D4C5B0] text-sm tracking-wide uppercase">
                    {award.title}
                  </span>
                </div>
                <span className="text-[#6B6860] text-xs">{award.source}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Second Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-16"
        >
          <Image
            src={profileImage2}
            alt="Creative portrait"
            width={320}
            height={240}
            className="w-full max-w-[320px] h-auto object-cover"
          />
        </motion.div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C9A86C] mt-3 shrink-0" />
            <p className="text-[#D4C5B0] text-xl sm:text-2xl leading-relaxed">
              {closingText}{" "}
              <em className="text-[#C9A86C] italic">{closingHighlight1}</em> &{" "}
              <em className="text-[#C9A86C] italic">{closingHighlight2}</em>
              <br />
              experiences and even if they haven't
              <br />
              found a rightful place on the web (yet)
              <br />
              I'm still worthy of your next big
              <br />
              project.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-4"
        >
          <button
            onClick={onCtaClick}
            className="w-full bg-[#B66369] hover:bg-[#A55660] transition-colors py-4 px-8 text-[#D4C5B0] text-xs tracking-[0.2em] uppercase font-sans"
          >
            {ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
