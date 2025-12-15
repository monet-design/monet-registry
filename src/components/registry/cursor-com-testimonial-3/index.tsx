"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  title: "The new way to build software.",
} as const;

const TESTIMONIALS = [
  {
    quote:
      "It was night and day from one batch to another, adoption went from single digits to over 80%. It just spread like wildfire, all the best builders were using Cursor.",
    name: "Diana Hu",
    title: "General Partner, Y Combinator",
    avatar: "/scraped/cursor-com-2025-12-15/images/image-29.png",
  },
  {
    quote:
      "The most useful AI tool that I currently pay for, hands down, is Cursor. It's fast, autocompletes when and where you need it to, handles brackets properly, sensible keyboard shortcuts, bring-your-own-model... everything is well put together.",
    name: "shadcn",
    title: "Creator of shadcn/ui",
    avatar: "/scraped/cursor-com-2025-12-15/images/image-30.png",
  },
  {
    quote:
      "The best LLM applications have an autonomy slider: you control how much independence to give the AI. In Cursor, you can do Tab completion, Cmd+K for targeted edits, or you can let it rip with the full autonomy agentic version.",
    name: "Andrej Karpathy",
    title: "CEO, Eureka Labs",
    avatar: "/scraped/cursor-com-2025-12-15/images/image-31.png",
  },
  {
    quote:
      "Cursor quickly grew from hundreds to thousands of extremely enthusiastic Stripe employees. We spend more on R&D and software creation than any other undertaking, and there's significant economic outcomes when making that process more efficient and productive.",
    name: "Patrick Collison",
    title: "Co-Founder & CEO, Stripe",
    avatar: "/scraped/cursor-com-2025-12-15/images/image-32.png",
  },
  {
    quote: `It's official.

I hate vibe coding.
I love Cursor tab coding.

It's wild.`,
    name: "ThePrimeagen",
    title: "@ThePrimeagen",
    avatar: "/scraped/cursor-com-2025-12-15/images/image-33.png",
  },
  {
    quote:
      "It's definitely becoming more fun to be a programmer. It's less about digging through pages and more about what you want to happen. We are at the 1% of what's possible, and it's in interactive experiences like Cursor where models like GPT-5 shine brightest.",
    name: "Greg Brockman",
    title: "President, OpenAI",
    avatar: "/scraped/cursor-com-2025-12-15/images/image-34.png",
  },
] as const;

// ============================================================================

interface CursorComTestimonial3Props {
  mode?: "light" | "dark";
}

export default function CursorComTestimonial3({
  mode = "dark",
}: CursorComTestimonial3Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-16 lg:py-24 ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"}`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <h2
            className={`text-2xl font-normal text-balance md:text-3xl lg:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {CONTENT.title}
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`flex flex-col rounded-md p-6 ${
                isDark
                  ? "bg-[#141414] ring-1 ring-white/10"
                  : "bg-gray-50 ring-1 ring-gray-200"
              }`}
              style={{
                aspectRatio: "auto",
              }}
            >
              <figure className="flex h-full flex-col">
                <blockquote className="flex-1">
                  <p
                    className={`text-sm leading-relaxed whitespace-pre-wrap md:text-base ${isDark ? "text-white/90" : "text-gray-800"}`}
                  >
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      src={testimonial.avatar}
                      alt=""
                      width={42}
                      height={42}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption>
                    <div
                      className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {testimonial.name}{" "}
                      <span
                        className={`block text-sm font-normal ${isDark ? "text-white/50" : "text-gray-500"}`}
                      >
                        {testimonial.title}
                      </span>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
