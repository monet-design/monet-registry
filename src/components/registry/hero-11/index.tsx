"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import Image from "next/image";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface Comment {
  id: string;
  avatar: string;
  name: string;
  time: string;
  message: string;
  codeSnippet?: string;
  isHighlighted?: boolean;
}

interface LandingfolioHero11Props {
  logoText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  headlineLine3?: string;
  socialProofText?: string;
  socialProofHighlight?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  navItems?: NavItem[];
  ctaNavText?: string;
  comments?: Comment[];
  avatars?: string[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Default values
const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Automation", href: "#" },
  { label: "Login", href: "#" },
];

const defaultComments: Comment[] = [
  {
    id: "1",
    avatar: "/registry/landingfolio-hero-11/avatar-1.png",
    name: "Martin Gray",
    time: "10:25 PM, Nov 10",
    message: "This works for every browser:",
    codeSnippet: "window.location.href = 'your_url';",
    isHighlighted: true,
  },
  {
    id: "2",
    avatar: "/registry/landingfolio-hero-11/avatar-2.png",
    name: "Floyd Miles",
    time: "9:45 AM, Nov 09",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar tortor, habitasse mauris, molestie...",
    isHighlighted: false,
  },
  {
    id: "3",
    avatar: "/registry/landingfolio-hero-11/avatar-3.png",
    name: "Darlene Robertson",
    time: "8:31 AM, Nov 09",
    message: "Should just be able to set using",
    codeSnippet: "window.location",
    isHighlighted: false,
  },
  {
    id: "4",
    avatar: "/registry/landingfolio-hero-11/avatar-1.png",
    name: "Marvin McKinney",
    time: "5:15 AM, Nov 09",
    message: "",
    isHighlighted: false,
  },
];

const defaultAvatars = [
  "/registry/landingfolio-hero-11/avatar-1.png",
  "/registry/landingfolio-hero-11/avatar-2.png",
  "/registry/landingfolio-hero-11/avatar-3.png",
];

// Logo Component
function Logo({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg font-bold text-gray-900">/</span>
      <span className="text-sm font-bold tracking-wider text-gray-900">
        {text}
      </span>
    </div>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
  ctaNavText,
}: {
  logoText: string;
  navItems: NavItem[];
  ctaNavText: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-5"
    >
      <Logo text={logoText} />

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-gray-700 transition-colors hover:text-gray-900"
          >
            {item.label}
          </a>
        ))}
        <span className="mx-2 h-6 w-px bg-gray-300" />
        <a
          href="#"
          className="rounded-md border border-gray-900 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
        >
          {ctaNavText}
        </a>
      </nav>
    </motion.header>
  );
}

// Avatar Group Component
function AvatarGroup({ avatars }: { avatars: string[] }) {
  return (
    <div className="flex -space-x-3">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white"
        >
          <Image
            src={avatar}
            alt={`User avatar ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

// Code Editor Component
function CodeEditor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
    >
      {/* Browser Chrome */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-gray-400">rareblocks.com</span>
        </div>
        <div className="w-12" />
      </div>

      {/* Code Content */}
      <div className="p-4">
        {/* User Info */}
        <div className="mb-4 flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200">
            <Image
              src="/registry/landingfolio-hero-11/avatar-1.png"
              alt="Kristin Watson"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Kristin Watson</p>
            <p className="text-xs text-gray-400">Added on November 08, 2021</p>
          </div>
        </div>

        {/* Code Block */}
        <div className="space-y-4 font-mono text-xs">
          {/* Datasource block */}
          <div className="rounded bg-gray-50 p-3">
            <div className="text-gray-500">
              <span className="text-purple-600">datasource</span>{" "}
              <span className="text-gray-700">db</span> {"{"}
            </div>
            <div className="ml-4 text-gray-600">
              <span className="text-gray-500">url</span> ={" "}
              <span className="text-green-600">env</span>(
              <span className="text-amber-600">&quot;DATABASE_URL&quot;</span>)
            </div>
            <div className="ml-4 text-gray-600">
              <span className="text-gray-500">provider</span> ={" "}
              <span className="text-amber-600">&quot;postgresql&quot;</span>
            </div>
            <div className="text-gray-500">{"}"}</div>
          </div>

          {/* Model User block */}
          <div className="rounded bg-gray-50 p-3">
            <div className="text-gray-500">
              <span className="text-purple-600">model</span>{" "}
              <span className="text-blue-600">User</span> {"{"}
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">id</span>
              <span className="text-blue-600">Int</span>
              <span className="text-cyan-600">
                @id @default(autoincrement())
              </span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">createdAt</span>
              <span className="text-blue-600">DateTime</span>
              <span className="text-cyan-600">@default(now())</span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">email</span>
              <span className="text-blue-600">String</span>
              <span className="text-cyan-600">@unique</span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">name</span>
              <span className="text-blue-600">String?</span>
              <span></span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">role</span>
              <span className="text-blue-600">Role</span>
              <span className="text-cyan-600">@default(USER)</span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">posts</span>
              <span className="text-blue-600">Post[]</span>
              <span></span>
            </div>
            <div className="text-gray-500">{"}"}</div>
          </div>

          {/* Model Post block */}
          <div className="rounded bg-gray-50 p-3">
            <div className="text-gray-500">
              <span className="text-purple-600">model</span>{" "}
              <span className="text-blue-600">Post</span> {"{"}
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">id</span>
              <span className="text-blue-600">Int</span>
              <span className="text-cyan-600">
                @id @default(autoincrement())
              </span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">createdAt</span>
              <span className="text-blue-600">DateTime</span>
              <span className="text-cyan-600">@default(now())</span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">updatedAt</span>
              <span className="text-blue-600">DateTime</span>
              <span className="text-cyan-600">@updatedAt</span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">published</span>
              <span className="text-blue-600">Boolean</span>
              <span className="text-cyan-600">@default(false)</span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">title</span>
              <span className="text-blue-600">String</span>
              <span className="text-cyan-600">@db.VarChar(255)</span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">author</span>
              <span className="text-blue-600">User?</span>
              <span className="text-cyan-600">
                @relation(fields: [authorId], references: [id])
              </span>
            </div>
            <div className="ml-4 grid grid-cols-3 gap-x-4 text-gray-600">
              <span className="text-gray-700">authorId</span>
              <span className="text-blue-600">Int?</span>
              <span></span>
            </div>
            <div className="text-gray-500">{"}"}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Comment Card Component
function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div
      className={`rounded-lg p-4 ${
        comment.isHighlighted
          ? "bg-[#3A3A3C] text-white"
          : "border border-gray-100 bg-white"
      }`}
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={comment.avatar}
            alt={comment.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p
            className={`text-sm font-medium ${
              comment.isHighlighted ? "text-white" : "text-gray-900"
            }`}
          >
            {comment.name}
          </p>
          <p
            className={`text-xs ${
              comment.isHighlighted ? "text-gray-400" : "text-gray-400"
            }`}
          >
            {comment.time}
          </p>
        </div>
      </div>
      {comment.message && (
        <p
          className={`text-sm ${
            comment.isHighlighted ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {comment.message}
        </p>
      )}
      {comment.codeSnippet && (
        <code
          className={`mt-2 inline-block rounded px-2 py-1 font-mono text-xs ${
            comment.isHighlighted
              ? "bg-[#C1904E]/20 text-[#E8A854]"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {comment.codeSnippet}
        </code>
      )}
    </div>
  );
}

// Comments Panel Component
function CommentsPanel({ comments }: { comments: Comment[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-64 space-y-3"
    >
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </motion.div>
  );
}

// Main Component
export default function LandingfolioHero11({
  logoText = "RAREBLOCKS",
  headlineLine1 = "Get meaningful",
  headlineLine2 = "feedbacks on",
  headlineLine3 = "your code",
  socialProofText = "and start getting feedbacks right now",
  socialProofHighlight = "4600+ Developers",
  ctaPrimaryText = "Get feedback",
  ctaSecondaryText = "Download iOS App",
  navItems = defaultNavItems,
  ctaNavText = "Create free account",
  comments = defaultComments,
  avatars = defaultAvatars,
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: LandingfolioHero11Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F9FAFC]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <Header logoText={logoText} navItems={navItems} ctaNavText={ctaNavText} />

        {/* Hero Content */}
        <div className="flex flex-col gap-12 py-16 lg:flex-row lg:items-start lg:gap-16 lg:py-24">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-8 lg:max-w-lg">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[56px]"
            >
              <span className="block font-serif italic">{headlineLine1}</span>
              <span className="block font-serif italic">{headlineLine2}</span>
              <span className="block font-serif italic">{headlineLine3}</span>
            </motion.h1>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <AvatarGroup avatars={avatars} />
              <p className="text-sm text-gray-600">
                Join with{" "}
                <span className="font-semibold text-gray-900">
                  {socialProofHighlight}
                </span>{" "}
                {socialProofText}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onPrimaryClick}
                className="rounded-full bg-[#222837] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1a1f2b]"
              >
                {ctaPrimaryText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                <Download className="h-5 w-5" />
                {ctaSecondaryText}
              </button>
            </motion.div>
          </div>

          {/* Right side - Code Editor and Comments */}
          <div className="relative flex flex-1 items-start justify-center gap-4">
            <CodeEditor />
            <CommentsPanel comments={comments} />
          </div>
        </div>
      </div>
    </section>
  );
}
