"use client";

import { motion } from "motion/react";
import { ArrowRight, Menu } from "lucide-react";

interface AkerHeroProps {
  logoText?: string;
  tagline?: string;
  collectiveTitle?: string;
  collectiveDescription?: string;
  locationsLabel?: string;
  careersLabel?: string;
  teamLabel?: string;
  contactLabel?: string;
  backgroundImage?: string;
  devicesImage?: string;
  careersImage?: string;
  onTeamClick?: () => void;
  onContactClick?: () => void;
  onLocationsClick?: () => void;
  onCareersClick?: () => void;
  onCollectiveClick?: () => void;
}

// AKER Logo Component with Hamburger Menu
function AkerHeader({ logoText = "AKER" }: { logoText?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="absolute right-6 top-6 z-30 flex items-center gap-3 bg-[#181918] px-4 py-2"
    >
      <span className="text-sm font-medium tracking-wider text-white">
        {logoText}
      </span>
      <Menu className="h-5 w-5 text-white" strokeWidth={2} />
    </motion.div>
  );
}

// Large AKER Logo Text at bottom left
function LargeLogoText({ text = "AKER" }: { text?: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="absolute bottom-12 left-8 z-20 font-inter text-[100px] font-bold leading-none tracking-[-0.02em] text-white md:text-[140px] lg:text-[180px]"
      style={{ letterSpacing: "0.08em" }}
    >
      {text}
    </motion.h1>
  );
}

// Tagline Component
function Tagline({
  text = "Aker invests in residential communities\nat the intersection of urban and\noutdoor environments.",
}: {
  text?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="absolute left-8 top-[35%] z-20 max-w-[280px] whitespace-pre-line text-sm leading-relaxed text-white/90 md:text-base"
    >
      {text}
    </motion.p>
  );
}

// The Collective Card Component
function CollectiveCard({
  title = "The Collective",
  description = "Connecting people with local\nbusinesses to foster strong\ncommunities.",
  image,
  onClick,
}: {
  title?: string;
  description?: string;
  image?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="flex cursor-pointer gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/15"
      onClick={onClick}
    >
      {/* Device mockup image */}
      <div className="h-[90px] w-[120px] flex-shrink-0 overflow-hidden rounded-lg bg-[#a8c4c0]">
        {image ? (
          <img
            src={image}
            alt="Device mockup"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-white/60">
            Devices
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-center flex-1">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-white">{title}</span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div>
        <p className="whitespace-pre-line text-xs leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Navigation Button Component
function NavButton({
  label,
  onClick,
  delay = 0.7,
}: {
  label: string;
  onClick?: () => void;
  delay?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onClick={onClick}
      className="rounded-full bg-[#4a4f47] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#5a5f57]"
    >
      {label}
    </motion.button>
  );
}

// Locations Card Component
function LocationsCard({
  label = "Locations",
  onClick,
}: {
  label?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      onClick={onClick}
      className="group flex h-[110px] cursor-pointer flex-col justify-end overflow-hidden rounded-xl bg-[#2a2c29] p-4 transition-all duration-300 hover:bg-[#363835]"
    >
      {/* US Map SVG */}
      <div className="mb-2 flex flex-1 items-center justify-center">
        <svg
          viewBox="0 0 959 593"
          className="h-[60px] w-auto opacity-50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M833 532L830 527L827 524L824 524L820 521L814 521L810 518L805 514L801 512L796 511L791 508L786 505L781 503L776 500L771 497L765 495L760 493L754 490L748 487L742 484L736 481L730 477L724 474L717 470L711 466L704 463L698 459L691 455L684 451L677 447L670 443L663 439L656 434L649 430L642 425L635 421L627 416L620 411L613 407L606 402L598 397L591 392L584 387L577 382L569 377L562 372L555 367L548 362L541 357L534 352L527 346L520 341L513 336L506 331L500 325L493 320L486 315L480 309L473 304L467 299L460 294L454 288L448 283L442 278L436 273L430 267L424 262L418 257L413 252L407 247L402 242L396 237L391 232L386 227L381 222L376 217L371 212L366 207L362 203L357 198L353 193L349 189L344 184L340 180L336 175L332 171L329 167L325 163L321 159L318 155L315 151L312 147L309 143L306 139L303 136L300 132L298 129L295 125L293 122L291 119L288 116L286 113L284 110L282 107L280 104L279 102L277 99L275 97L274 94L272 92L271 89L270 87L268 85L267 83L266 81L265 79L264 77L263 76L262 74L261 73L260 71L260 70L259 68L258 67L258 66L257 65L257 64L256 63L256 62L256 61L255 60L255 59L255 58L255 58L255 57L254 57L254 56L254 56L254 55L254 55L254 55L254 54L254 54L254 54L254 54L254 54L254 54"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      <span className="text-sm font-medium text-white">{label}</span>
    </motion.div>
  );
}

// Careers Card Component
function CareersCard({
  label = "Careers",
  image,
  onClick,
}: {
  label?: string;
  image?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      onClick={onClick}
      className="group relative flex h-[110px] cursor-pointer flex-col justify-end overflow-hidden rounded-xl transition-all duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {image ? (
          <img src={image} alt="Careers" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-amber-600 to-amber-800" />
        )}
        <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/20" />
      </div>
      <span className="relative z-10 p-4 text-sm font-medium text-white">
        {label}
      </span>
    </motion.div>
  );
}

export default function AkerHero({
  logoText = "AKER",
  tagline = "Aker invests in residential communities\nat the intersection of urban and\noutdoor environments.",
  collectiveTitle = "The Collective",
  collectiveDescription = "Connecting people with local\nbusinesses to foster strong\ncommunities.",
  locationsLabel = "Locations",
  careersLabel = "Careers",
  teamLabel = "Our team",
  contactLabel = "Contact",
  backgroundImage = "/registry/aker-hero/forest-background.jpg",
  devicesImage = "/registry/aker-hero/devices-mockup.jpg",
  careersImage = "/registry/aker-hero/careers-image.jpg",
  onTeamClick,
  onContactClick,
  onLocationsClick,
  onCareersClick,
  onCollectiveClick,
}: AkerHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Header with Logo */}
      <AkerHeader logoText={logoText} />

      {/* Large Logo Text */}
      <LargeLogoText text={logoText} />

      {/* Tagline */}
      <Tagline text={tagline} />

      {/* Right Side Cards Grid */}
      <div className="absolute right-8 top-[30%] z-20 flex w-[320px] flex-col gap-4 lg:right-12 lg:w-[360px]">
        {/* The Collective Card */}
        <CollectiveCard
          title={collectiveTitle}
          description={collectiveDescription}
          image={devicesImage}
          onClick={onCollectiveClick}
        />

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <NavButton label={teamLabel} onClick={onTeamClick} delay={0.7} />
          <NavButton label={contactLabel} onClick={onContactClick} delay={0.75} />
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          <LocationsCard label={locationsLabel} onClick={onLocationsClick} />
          <CareersCard
            label={careersLabel}
            image={careersImage}
            onClick={onCareersClick}
          />
        </div>
      </div>
    </section>
  );
}
