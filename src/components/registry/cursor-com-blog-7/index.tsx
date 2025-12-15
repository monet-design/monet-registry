"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const BLOG_POSTS = [
  {
    title: "Introducing Cursor 2.0 and Composer",
    description:
      "A new interface and our first coding model, both purpose-built for working with agents.",
    category: "Product",
    date: "Oct 29, 2025",
    datetime: "2025-10-29T04:54:48.600Z",
    href: "/blog/2-0",
  },
  {
    title: "Improving Cursor Tab with online RL",
    description:
      "Our new Tab model makes 21% fewer suggestions while having 28% higher accept rate.",
    category: "Research",
    date: "Sep 12, 2025",
    datetime: "2025-09-12T01:16:00.000Z",
    href: "/blog/tab-rl",
  },
  {
    title: "1.5x faster MoE training with custom MXFP8 kernels",
    description:
      "Achieving a 3.5x MoE layer speedup with a complete rebuild for Blackwell GPUs.",
    category: "Research",
    date: "Aug 29, 2025",
    datetime: "2025-08-29T02:55:25.007Z",
    href: "/blog/kernels",
  },
] as const;

// ============================================================================

interface CursorComBlog7Props {
  mode?: "light" | "dark";
}

export default function CursorComBlog7({
  mode = "dark",
}: CursorComBlog7Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-20 ${
        isDark ? "bg-[#141414] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-24">
          {/* Section Title */}
          <div className="col-span-full mb-4 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-9 lg:mb-0 xl:col-start-1 xl:col-end-7">
            <h2
              className={`sticky top-20 text-base ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Recent highlights
            </h2>
          </div>

          {/* Blog Posts */}
          <div className="col-span-full md:col-start-7 md:col-end-25 lg:col-start-9 lg:col-end-25 xl:col-start-7 xl:col-end-19">
            {BLOG_POSTS.map((post, index) => (
              <article
                key={post.title}
                className={`flex grow flex-col ${
                  index < BLOG_POSTS.length - 1 ? "mb-4" : ""
                }`}
              >
                <a
                  href={post.href}
                  className={`grow rounded-sm p-6 transition-colors ${
                    isDark
                      ? "bg-[#1a1a1a] hover:bg-[#222222]"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="grow">
                      <p
                        className={`text-base text-pretty ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {post.title}
                      </p>
                      <p
                        className={`text-base text-pretty ${
                          isDark ? "text-white/60" : "text-gray-600"
                        }`}
                      >
                        {post.description}
                      </p>
                    </div>
                    <div
                      className={`mt-4 flex shrink-0 items-center text-base ${
                        isDark ? "text-white/60" : "text-gray-500"
                      }`}
                    >
                      <span className="capitalize">{post.category}&nbsp;·&nbsp;</span>
                      <time dateTime={post.datetime}>{post.date}</time>
                    </div>
                  </div>
                </a>
              </article>
            ))}

            <a
              href="/blog"
              className="mt-4 inline-flex text-base transition-opacity hover:opacity-80"
              style={{ color: "#f54e00" }}
            >
              View more posts →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
