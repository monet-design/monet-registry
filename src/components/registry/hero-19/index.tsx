"use client";

import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface NFTArtwork {
  id: string;
  image: string;
  title: string;
  reservedPrice: string;
  priceETH: string;
  priceUSD: string;
  backgroundColor: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface LandingfolioHero19Props {
  logoText?: string;
  navItems?: NavItem[];
  cartCount?: number;
  headline?: string;
  headlineEmoji?: string;
  description?: string;
  primaryButtonText?: string;
  stats?: StatItem[];
  artworks?: NFTArtwork[];
  onPrimaryClick?: () => void;
  onPlaceBid?: (artworkId: string) => void;
  onViewArtwork?: (artworkId: string) => void;
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "All Artworks", href: "#" },
  { label: "All Artists", href: "#" },
  { label: "Sell Your Artwork", href: "#" },
];

// Default stats
const defaultStats: StatItem[] = [
  { value: "50k+", label: "Artwork" },
  { value: "17k+", label: "Artists" },
];

// Default artworks
const defaultArtworks: NFTArtwork[] = [
  {
    id: "1",
    image: "/landingfolio-hero/hero-19/nft-1.png",
    title: "Ely-The Angry Girl",
    reservedPrice: "RESERVED PRICE",
    priceETH: "2.00 ETH",
    priceUSD: "$9,394",
    backgroundColor: "#E2FFE9",
  },
  {
    id: "2",
    image: "/landingfolio-hero/hero-19/nft-2.png",
    title: "Jenny-Retro Art",
    reservedPrice: "RESERVED PRICE",
    priceETH: "1.67 ETH",
    priceUSD: "$7,627",
    backgroundColor: "#FFE8E2",
  },
  {
    id: "3",
    image: "/landingfolio-hero/hero-19/nft-3.png",
    title: "Naila-The Angry",
    reservedPrice: "RESERVED PRICE",
    priceETH: "2.40 ETH",
    priceUSD: "$11,273",
    backgroundColor: "#DDE0FF",
  },
];

// Decorative diagonal lines pattern component
function DiagonalLines() {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 32 }).map((_, i) => (
        <div
          key={i}
          className="w-[2px] h-3 bg-gray-300 rotate-[30deg]"
        />
      ))}
    </div>
  );
}

// NFT Card Component
function NFTCard({
  artwork,
  index,
  onPlaceBid,
  onViewArtwork,
}: {
  artwork: NFTArtwork;
  index: number;
  onPlaceBid?: (artworkId: string) => void;
  onViewArtwork?: (artworkId: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="flex-shrink-0 w-[320px] bg-white rounded-none overflow-visible"
    >
      {/* Image Container */}
      <div
        className="w-full h-[280px] relative overflow-hidden"
        style={{ backgroundColor: artwork.backgroundColor }}
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1C2332] mb-3">{artwork.title}</h3>

        <p className="text-[11px] font-medium tracking-[0.15em] text-gray-400 mb-1">
          {artwork.reservedPrice}
        </p>

        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-lg font-bold text-[#1C2332]">{artwork.priceETH}</span>
          <span className="text-sm text-gray-400">({artwork.priceUSD})</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onPlaceBid?.(artwork.id)}
            className="px-5 py-3 bg-[#1C2332] text-white text-sm font-medium hover:bg-[#2a3444] transition-colors"
          >
            Place a bid
          </button>
          <button
            onClick={() => onViewArtwork?.(artwork.id)}
            className="px-5 py-3 bg-white text-[#1C2332] text-sm font-medium border border-[#1C2332] hover:bg-gray-50 transition-colors"
          >
            View artwork
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero19({
  logoText = "RAREBLOCKS",
  navItems = defaultNavItems,
  cartCount = 3,
  headline = "Collect rare\ndigital artworks",
  headlineEmoji = "✨",
  description = "Buy & sell NFTs from world's top artist",
  primaryButtonText = "Explore all artwork",
  stats = defaultStats,
  artworks = defaultArtworks,
  onPrimaryClick,
  onPlaceBid,
  onViewArtwork,
}: LandingfolioHero19Props) {
  return (
    <section className="w-full min-h-screen bg-[#F3F4F6] overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b border-gray-100"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-1">
                <span className="text-[#E74C3C] font-bold text-lg">/</span>
                <span className="text-[#1C2332] font-bold text-sm tracking-[0.1em]">
                  {logoText}
                </span>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-10">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[#575C66] text-sm font-medium hover:text-[#1C2332] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hidden sm:block text-[#1C2332] text-sm font-medium hover:text-[#575C66] transition-colors"
              >
                Create Free Account
              </a>
              <a
                href="#"
                className="hidden sm:block text-[#1C2332] text-sm font-medium hover:text-[#575C66] transition-colors"
              >
                Login
              </a>

              {/* Cart Icon */}
              <div className="relative">
                <button className="p-2 text-[#1C2332] hover:text-[#575C66] transition-colors">
                  <ShoppingCart size={22} strokeWidth={1.5} />
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#3B82F6] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="lg:w-[420px] flex-shrink-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[#1C2332] text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight"
            >
              {headline.split("\n").map((line, idx) => (
                <span key={idx}>
                  {idx === 0 ? (
                    <>
                      {line} {headlineEmoji}
                    </>
                  ) : (
                    line
                  )}
                  {idx < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-[#575C66] text-base leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Primary Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8"
            >
              <button
                onClick={onPrimaryClick}
                className="px-8 py-4 bg-[#1C2332] text-white text-sm font-medium rounded-full hover:bg-[#2a3444] transition-colors"
              >
                {primaryButtonText}
              </button>
            </motion.div>

            {/* Decorative Lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10"
            >
              <DiagonalLines />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 flex items-center gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-[#1C2332]">{stat.value}</p>
                  <p className="text-sm text-[#575C66]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - NFT Cards Carousel */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-6 lg:gap-8">
              {artworks.map((artwork, index) => (
                <NFTCard
                  key={artwork.id}
                  artwork={artwork}
                  index={index}
                  onPlaceBid={onPlaceBid}
                  onViewArtwork={onViewArtwork}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
