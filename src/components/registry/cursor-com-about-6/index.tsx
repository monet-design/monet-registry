"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  title: "Cursor is an applied team focused on building the future of coding.",
  buttonText: "Join us",
  buttonHref: "/careers",
} as const;

const IMAGES = {
  teamPhoto: {
    path: "/scraped/cursor-com-2025-12-15/images/image-39.png",
    alt: "Cursor team photo",
    width: 800,
    height: 450,
  },
} as const;

// ============================================================================

interface CursorComAbout6Props {
  mode?: "light" | "dark";
}

export default function CursorComAbout6({
  mode = "dark",
}: CursorComAbout6Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-16 lg:py-24 ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"}`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Text Content */}
        <div className="mb-8 max-w-3xl text-left lg:mb-10">
          <h2
            className={`mb-6 text-2xl font-normal text-balance md:text-3xl lg:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {CONTENT.title}
          </h2>
          <div className="flex items-center justify-start">
            <a
              href={CONTENT.buttonHref}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                isDark
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {CONTENT.buttonText}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Team Photo */}
        <div className="relative overflow-hidden rounded-md">
          <a href={CONTENT.buttonHref} className="block h-full w-full">
            <img
              src={IMAGES.teamPhoto.path}
              alt={IMAGES.teamPhoto.alt}
              width={IMAGES.teamPhoto.width}
              height={IMAGES.teamPhoto.height}
              className="h-auto w-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
