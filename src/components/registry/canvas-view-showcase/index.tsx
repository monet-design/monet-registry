"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smile,
  AtSign,
  Check,
  FolderOpen,
  X,
  Plus,
  Quote,
  Bookmark,
  MessageSquare,
  LayoutList,
  AlignLeft,
  ChevronRight,
  Send,
} from "lucide-react";
import NextImage from "next/image";

type ViewType = "list" | "canvas" | "gallery";

interface CanvasViewShowcaseProps {
  title?: string;
  views?: { id: ViewType; label: string }[];
  defaultView?: ViewType;
}

const defaultViews: { id: ViewType; label: string }[] = [
  { id: "list", label: "List View" },
  { id: "canvas", label: "Canvas View" },
  { id: "gallery", label: "Gallery View" },
];

function ViewTab({
  view,
  isActive,
  onClick,
}: {
  view: { id: ViewType; label: string };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-1.5 text-sm transition-all duration-300 ${
        isActive ? "font-semibold text-white" : "font-normal text-neutral-500 hover:text-neutral-400"
      }`}
    >
      {view.label}
      {isActive && (
        <motion.div
          layoutId="activeViewIndicator"
          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-white"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
    </button>
  );
}

function SidebarIcon({ icon: Icon, color }: { icon: React.ElementType; color?: string }) {
  return (
    <div
      className={`flex h-7 w-7 items-center justify-center rounded-md ${color || "text-neutral-500"}`}
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}

function NoteCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`rounded-lg bg-white/95 shadow-lg backdrop-blur-sm ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function CanvasContent() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-[#1E1E1E]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #666 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top left note card */}
      <NoteCard
        className="absolute left-4 top-4 w-48 p-3"
        style={{ transform: "rotate(-1deg)" }}
      >
        <p className="text-[10px] leading-relaxed text-neutral-700">
          The urban intervention has caused building degradation and urban disorganization in the surrounding neighborhood.
        </p>
      </NoteCard>

      {/* Left side longer note */}
      <NoteCard
        className="absolute left-4 top-28 w-52 p-3"
        style={{ transform: "rotate(0.5deg)" }}
      >
        <p className="text-[9px] leading-relaxed text-neutral-600">
          The Marquise du Minhocao is the most polluted place in Sao Paulo. According to the research, plants suspended from the ceiling all along the Minhocao, will filter 20% of the CO2 emission of cars. The irrigation of these plants will be ensured by a system of water collection, the vaporization will have a role of cleaning of the air and cleaning of the surfaces of the Marquise.
        </p>
      </NoteCard>

      {/* Center top image - Urban park */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute left-56 top-4 w-64 overflow-hidden rounded-lg shadow-xl"
      >
        <div className="relative aspect-video w-full">
          <NextImage
            src="/registry/canvas-view-showcase/urban-park.jpg"
            alt="Urban concept design Minhocao Park, Sao Paulo"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-neutral-900/90 px-3 py-2">
          <p className="text-[10px] text-neutral-300">
            Urban concept design Minhocao
            <br />
            Park, Sao Paulo
          </p>
        </div>
      </motion.div>

      {/* Right side architecture image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute right-4 top-4 w-40"
      >
        <div className="overflow-hidden rounded-lg shadow-xl">
          <div className="relative aspect-[3/4] w-full">
            <NextImage
              src="/registry/canvas-view-showcase/architecture.jpg"
              alt="Architecture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Center feature card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2"
      >
        <NoteCard className="overflow-hidden p-0">
          <div className="relative aspect-video w-full">
            <NextImage
              src="/registry/canvas-view-showcase/architecture.jpg"
              alt="The Minhocao marquise"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h4 className="text-xs font-semibold text-neutral-900">
              The Minhocao marquise
            </h4>
            <p className="text-[10px] text-neutral-500">
              Triptyque Architecture
            </p>
            <p className="mt-2 text-[9px] leading-relaxed text-neutral-600">
              The Minhocao marquise was built in 1971 as a symbol of modernity that gave the car a central place. Today it is a scar in the center of the city of São Paulo.
            </p>
            <a
              href="#"
              className="mt-2 block text-[9px] text-blue-600 underline"
            >
              http://triptyque.com/en/project/the-minhocao-marquise/
            </a>
          </div>
        </NoteCard>
      </motion.div>

      {/* Bottom left blueprint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-16 left-20 w-44 overflow-hidden rounded-lg shadow-xl"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="relative aspect-[4/3] w-full">
          <NextImage
            src="/registry/canvas-view-showcase/blueprint.jpg"
            alt="Blueprint"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Right side small architecture */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-24 right-8 w-36 overflow-hidden rounded-lg shadow-xl"
      >
        <div className="relative aspect-video w-full">
          <NextImage
            src="/registry/canvas-view-showcase/architecture.jpg"
            alt="Architecture detail"
            fill
            className="object-cover grayscale"
          />
        </div>
      </motion.div>

      {/* Right sidebar icons */}
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col gap-1">
        {[AlignLeft, LayoutList, LayoutList, LayoutList, Bookmark, FolderOpen].map(
          (Icon, i) => (
            <div
              key={i}
              className="flex h-6 w-6 items-center justify-center rounded text-neutral-500 hover:bg-neutral-700/50"
            >
              <Icon className="h-3 w-3" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

function ListContent() {
  const items = [
    "Urban intervention analysis",
    "Minhocao plant filtration research",
    "Architecture photography collection",
    "Triptyque Architecture references",
    "São Paulo urban planning notes",
  ];

  return (
    <div className="h-[400px] overflow-hidden bg-neutral-900/50 p-6">
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-3 rounded-lg bg-neutral-800/50 p-3"
          >
            <div className="h-2 w-2 rounded-full bg-neutral-500" />
            <span className="text-sm text-neutral-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function GalleryContent() {
  return (
    <div className="h-[400px] overflow-hidden bg-neutral-900/50 p-6">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="aspect-square overflow-hidden rounded-lg bg-neutral-800"
          >
            <div className="relative h-full w-full">
              <NextImage
                src={`/registry/canvas-view-showcase/${
                  i % 3 === 0 ? "architecture" : i % 3 === 1 ? "urban-park" : "blueprint"
                }.jpg`}
                alt={`Gallery item ${i}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AppFrame({
  children,
  activeView,
}: {
  children: React.ReactNode;
  activeView: ViewType;
}) {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Main frame */}
      <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-2xl">
        {/* Tab bar */}
        <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-2">
          {/* Draft tab */}
          <div className="flex items-center gap-2 rounded-md bg-neutral-800/50 px-3 py-1.5">
            <div className="h-4 w-4 rounded bg-neutral-700" />
            <span className="text-xs text-neutral-300">Draft</span>
            <X className="h-3 w-3 text-neutral-500" />
          </div>

          {/* Urban Design tab */}
          <div className="flex items-center gap-2 rounded-md px-3 py-1.5">
            <div className="h-4 w-4 rounded bg-red-500/80" />
            <span className="text-xs text-neutral-400">Urban Design</span>
            <X className="h-3 w-3 text-neutral-600" />
          </div>

          {/* Add tab button */}
          <button className="flex h-6 w-6 items-center justify-center rounded text-neutral-500 hover:bg-neutral-800">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Main content area with sidebar */}
        <div className="flex">
          {/* Left sidebar */}
          <div className="flex w-10 flex-col items-center gap-1 border-r border-neutral-800 bg-neutral-900/50 py-3">
            <SidebarIcon icon={Plus} />
            <div className="my-2 h-px w-6 bg-neutral-800" />
            <SidebarIcon icon={Quote} color="text-[#80888A]" />
            <SidebarIcon icon={Bookmark} color="text-[#C9CFBD]" />
            <SidebarIcon icon={MessageSquare} color="text-[#CF9484]" />
            <SidebarIcon icon={MessageSquare} color="text-[#CBD1CA]" />
            <SidebarIcon icon={MessageSquare} color="text-[#D9D3D1]" />
          </div>

          {/* Content */}
          <div className="flex-1">{children}</div>
        </div>

        {/* Bottom input bar */}
        <div className="border-t border-neutral-800 bg-neutral-900/80 px-4 py-3">
          <div className="flex items-center gap-3">
            <p className="flex-1 text-xs text-neutral-500">
              Save a quick idea. Drag to collect links and files.
            </p>
            <div className="flex items-center gap-2">
              <button className="text-neutral-500 hover:text-neutral-400">
                <Smile className="h-4 w-4" />
              </button>
              <button className="text-neutral-500 hover:text-neutral-400">
                <AtSign className="h-4 w-4" />
              </button>
              <button className="text-neutral-500 hover:text-neutral-400">
                <Check className="h-4 w-4" />
              </button>
              <button className="text-neutral-500 hover:text-neutral-400">
                <FolderOpen className="h-4 w-4" />
              </button>
              <div className="flex gap-1">
                <div className="h-4 w-4 rounded-full bg-neutral-600" />
                <div className="h-4 w-4 rounded-full bg-red-500" />
              </div>
            </div>
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-900">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CanvasViewShowcase({
  title = "Customize view, for any type of thought.",
  views = defaultViews,
  defaultView = "canvas",
}: CanvasViewShowcaseProps) {
  const [activeView, setActiveView] = useState<ViewType>(defaultView);

  const renderContent = () => {
    switch (activeView) {
      case "list":
        return <ListContent />;
      case "canvas":
        return <CanvasContent />;
      case "gallery":
        return <GalleryContent />;
      default:
        return <CanvasContent />;
    }
  };

  return (
    <section className="w-full bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          {views.map((view) => (
            <ViewTab
              key={view.id}
              view={view}
              isActive={activeView === view.id}
              onClick={() => setActiveView(view.id)}
            />
          ))}
        </motion.div>

        {/* App Preview Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AppFrame activeView={activeView}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </AppFrame>
        </motion.div>
      </div>
    </section>
  );
}
