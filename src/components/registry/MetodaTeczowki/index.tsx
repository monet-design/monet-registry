"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Facebook, Youtube } from "lucide-react";

interface SocialLink {
  icon: "facebook" | "youtube" | "spotify";
  href: string;
}

interface Paragraph {
  text: string;
}

interface MetodaTeczowkiProps {
  sidebarTitle?: string;
  heading?: string;
  paragraphs?: Paragraph[];
  profileImage?: string;
  authorName?: string;
  socialLinks?: SocialLink[];
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function SocialIcon({
  type,
  href,
}: {
  type: "facebook" | "youtube" | "spotify";
  href: string;
}) {
  const iconMap = {
    facebook: <Facebook className="w-4 h-4" />,
    youtube: <Youtube className="w-4 h-4" />,
    spotify: <SpotifyIcon className="w-4 h-4" />,
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white/60 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {iconMap[type]}
    </motion.a>
  );
}

export default function MetodaTeczowki({
  sidebarTitle = "O autorze",
  heading = "Czesc, nazywam sie Jacek Klosinski\ni pokazuje jak stawiac na swoim bez\nstawania na glowie.",
  paragraphs = [
    {
      text: "Opowiadam jak realizowac ambitne cele i dzialac po swojemu, zachowujac przy tym zdrowy rozsadek, wlasne tempo i duzy luz. Tak, to mozliwe.",
    },
    {
      text: "Skad to wiem? Bo kiedys bardzo czesto wpadaem w skrajnosci. Z kompletnego lenia zamieniaem sie w typowego pracoholika. Nabilem sobie przez to wiele guzow, ale dzieki temu zrozumialem, ze jedynym rozsadnym podejsciem jest rownowaga.",
    },
    {
      text: "Jesli skupisz sie wylacznie na ambicji, celach i produktywnosci, szybko zamienisz sie w robota. Poprzeczka bedzie podnosila sie w nieskonczonosc i nigdy nie bedzie wystarczajaco dobrze.",
    },
    {
      text: "Z drugiej strony, kompletny luz i ucieczka w Bieszczady tez nie sa rozwiazaniem. W zyciu musi przeciez chodzic",
    },
  ],
  profileImage = "https://picsum.photos/seed/metodateczowki/280/280",
  authorName = "KLOSINSKI",
  socialLinks = [
    { icon: "facebook", href: "#" },
    { icon: "youtube", href: "#" },
    { icon: "spotify", href: "#" },
  ],
}: MetodaTeczowkiProps) {
  return (
    <section className="w-full min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        {/* Left Sidebar with Rotated Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex w-20 lg:w-24 shrink-0 items-center justify-center border-r border-white/10"
        >
          <span
            className="text-white/60 text-sm tracking-[0.3em] uppercase whitespace-nowrap"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            {sidebarTitle}
          </span>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl sm:text-2xl lg:text-[1.7rem] font-normal leading-relaxed mb-8 lg:mb-10 whitespace-pre-line"
            >
              {heading}
            </motion.h1>

            {/* Paragraphs */}
            <div className="space-y-5 lg:space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-sm sm:text-[15px] leading-relaxed text-white/60"
                >
                  {paragraph.text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-[320px] xl:w-[360px] shrink-0 px-6 sm:px-10 lg:px-0 pb-12 lg:pb-0 lg:pr-10 xl:pr-16"
          >
            <div className="lg:sticky lg:top-16 space-y-6">
              {/* Profile Image */}
              <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
                <Image
                  src={profileImage}
                  alt={authorName}
                  width={280}
                  height={280}
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.icon}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <SocialIcon type={link.icon} href={link.href} />
                  </motion.div>
                ))}
              </div>

              {/* Author Name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center lg:text-left"
              >
                <span className="text-xs tracking-[0.25em] text-white/80 uppercase">
                  {authorName}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
