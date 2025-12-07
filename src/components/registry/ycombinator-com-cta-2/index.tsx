"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    background: "#FFFFFF",
  },
  dark: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    background: "#1F2937",
  },
} as const;

/**
 * 리소스 링크
 */
const RESOURCES = [
  {
    title: "YC Library",
    description: "Videos, podcasts, and essays for startup founders",
    image: "/registry/ycombinator-com-cta-2/library.jpg",
  },
  {
    title: "Newsletter",
    description: "Keep up with the latest news, launches, jobs, and events from the YC community",
    image: "/registry/ycombinator-com-cta-2/newsletter.jpg",
  },
  {
    title: "Launch YC",
    description: "Discover new YC companies and products",
    image: "/registry/ycombinator-com-cta-2/launch.jpg",
  },
  {
    title: "Work at a Startup",
    description: "Find your next role at a YC startup",
    image: "/registry/ycombinator-com-cta-2/work.jpg",
  },
  {
    title: "Blog",
    description: "Essays, events, and announcements from YC",
    image: "/registry/ycombinator-com-cta-2/blog.jpg",
  },
  {
    title: "Co-Founder Matching",
    description: "Meet a potential co-founder to start a startup with",
    image: "/registry/ycombinator-com-cta-2/cofounder.jpg",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComCta2Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComCta2({
  mode = "light",
}: YcombinatorComCta2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-medium text-gray-900">
          Want to learn more?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource, index) => (
            <a
              key={index}
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
              </div>
              <div
                className="h-20 w-20 flex-shrink-0 rounded-lg bg-stone-200 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url(${resource.image})` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
