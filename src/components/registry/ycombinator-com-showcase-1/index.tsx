"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#F5F1EB",
  },
  dark: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#2D2A26",
  },
} as const;

/**
 * 비디오 콘텐츠
 */
const VIDEO_CONTENT = [
  {
    title: "What Founders Have To Unlearn To Become Great CEOs",
    thumbnail: "/registry/ycombinator-com-showcase-1/video1.jpg",
    duration: "",
    views: "",
    date: "4 days ago",
  },
  {
    title: "Cursor Head of Design Reviews Startup Websites",
    thumbnail: "/registry/ycombinator-com-showcase-1/video2.jpg",
    duration: "35:35",
    views: "35K views",
    date: "17 days ago",
  },
  {
    title: "AI Is Eating Logistics",
    thumbnail: "/registry/ycombinator-com-showcase-1/video3.jpg",
    duration: "33:41",
    views: "36K views",
    date: "23 days ago",
  },
];

/**
 * 리소스 카드
 */
const RESOURCE_CARDS = [
  {
    title: "Startup School",
    description: "YC's Partners teach you to build the foundation of a billion dollar company",
    image: "/registry/ycombinator-com-showcase-1/startup-school.png",
  },
  {
    title: "Essays by Paul Graham",
    description: "A collection of essays by Y Combinator co-founder Paul Graham",
    image: "/registry/ycombinator-com-showcase-1/paul-graham.jpg",
  },
  {
    title: "Explore more content",
    description: "Visit the YC Library, the hub for YC's startup videos, essays, podcasts, and more",
    image: "/registry/ycombinator-com-showcase-1/library.jpg",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComShowcase1Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComShowcase1({
  mode = "light",
}: YcombinatorComShowcase1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.beige }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-medium text-gray-900">
          The Latest from YC
        </h2>

        {/* Video Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {VIDEO_CONTENT.map((video, index) => (
            <a key={index} href="#" className="group block">
              <div className="relative overflow-hidden rounded-lg">
                <div
                  className="h-48 w-full bg-stone-300 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                {/* YC Badge */}
                <div
                  className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded text-xs font-bold text-white"
                  style={{ backgroundColor: colors.accent }}
                >
                  Y
                </div>
                {/* Duration */}
                {video.duration && (
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">
                    {video.duration}
                  </div>
                )}
              </div>
              <h3 className="mt-3 font-medium text-gray-900 group-hover:text-gray-700">
                {video.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {video.views && `${video.views} · `}{video.date}
              </p>
            </a>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {RESOURCE_CARDS.map((resource, index) => (
            <a
              key={index}
              href="#"
              className="group flex items-center gap-4 rounded-lg bg-white p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
              </div>
              <div
                className="h-20 w-20 flex-shrink-0 rounded-lg bg-stone-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${resource.image})` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
