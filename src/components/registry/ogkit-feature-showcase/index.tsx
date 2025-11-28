"use client";

import { motion } from "motion/react";
import { Code2, Sparkles, Globe } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  delay?: number;
}

function FeatureCard({
  icon,
  label,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.1, ease: "backOut" }}
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/25"
      >
        {icon}
      </motion.div>
      <span className="mb-2 text-xs font-medium tracking-wide text-blue-500">
        {label}
      </span>
      <h3 className="mb-2 text-base font-semibold leading-snug text-gray-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>
    </motion.div>
  );
}

function CodeEditorMockup() {
  const codeLines = [
    { indent: 0, content: '<html><head>' },
    { indent: 1, content: '' },
    { indent: 1, content: '<meta property="og:image" content="https://ogkit.dev/api(...)" />' },
    { indent: 1, content: '<meta name="twitter:image" content="https://ogkit.dev/api(...)" />' },
    { indent: 1, content: '<meta name="twitter:card" content="summary_large_image" />' },
    { indent: 1, content: '' },
    { indent: 0, content: '</head>' },
    { indent: 0, content: '' },
    { indent: 0, content: '<body>' },
    { indent: 0, content: '' },
    { indent: 1, content: '<template data-og-template>' },
    { indent: 2, content: '<div class="bg-slate-200 w-full h-full p-10 flex flex-col justify-between">' },
    { indent: 3, content: '' },
    { indent: 3, content: '<img src="/logo.svg" alt="Intersect Logo" class="">' },
    { indent: 3, content: '' },
    { indent: 3, content: '<h1 class="text-5xl font-semibold max-w-4xl grid gap-1.5">' },
    { indent: 4, content: 'At the intersection of everything' },
    { indent: 3, content: '</h1>' },
    { indent: 3, content: '' },
    { indent: 2, content: '</template>' },
    { indent: 1, content: '' },
    { indent: 0, content: '</body>' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30, rotateY: 5 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="absolute left-4 top-4 z-10 h-[280px] w-[340px] overflow-hidden rounded-xl border border-slate-700/50 bg-[#012b37] shadow-2xl"
    >
      {/* Window controls */}
      <div className="flex items-center gap-2 border-b border-slate-700/50 bg-[#012b37] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-4 text-xs text-slate-400">ogkit.app</span>
      </div>
      {/* Code content */}
      <div className="overflow-hidden p-4 font-mono text-[10px] leading-relaxed">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.02 }}
            className="flex"
            style={{ paddingLeft: `${line.indent * 12}px` }}
          >
            <span className="mr-4 w-4 select-none text-right text-slate-600">
              {index + 1}
            </span>
            <span className="text-slate-300">
              {line.content.includes("meta") && (
                <>
                  <span className="text-pink-400">&lt;meta</span>
                  <span className="text-cyan-300"> {line.content.match(/property="[^"]*"|name="[^"]*"/)?.[0]}</span>
                  <span className="text-cyan-300"> content=</span>
                  <span className="text-amber-300">&quot;...&quot;</span>
                  <span className="text-pink-400"> /&gt;</span>
                </>
              )}
              {line.content.includes("template") && (
                <>
                  <span className="text-pink-400">&lt;template</span>
                  <span className="text-cyan-300"> data-og-template</span>
                  <span className="text-pink-400">&gt;</span>
                </>
              )}
              {line.content.includes("div class") && (
                <>
                  <span className="text-pink-400">&lt;div</span>
                  <span className="text-cyan-300"> class=</span>
                  <span className="text-amber-300">&quot;bg-slate-200 ...&quot;</span>
                  <span className="text-pink-400">&gt;</span>
                </>
              )}
              {line.content.includes("img src") && (
                <>
                  <span className="text-pink-400">&lt;img</span>
                  <span className="text-cyan-300"> src=</span>
                  <span className="text-amber-300">&quot;/logo.svg&quot;</span>
                  <span className="text-cyan-300"> alt=</span>
                  <span className="text-amber-300">&quot;Intersect Logo&quot;</span>
                  <span className="text-pink-400">&gt;</span>
                </>
              )}
              {line.content.includes("<h1") && (
                <>
                  <span className="text-pink-400">&lt;h1</span>
                  <span className="text-cyan-300"> class=</span>
                  <span className="text-amber-300">&quot;text-5xl ...&quot;</span>
                  <span className="text-pink-400">&gt;</span>
                </>
              )}
              {line.content === "At the intersection of everything" && (
                <span className="text-white">{line.content}</span>
              )}
              {(line.content.includes("</h1>") || line.content.includes("</template>") || line.content.includes("</body>") || line.content.includes("</head>")) && (
                <span className="text-pink-400">{line.content}</span>
              )}
              {(line.content === "<html><head>" || line.content === "<body>") && (
                <span className="text-pink-400">{line.content}</span>
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function OGPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="absolute left-[40%] top-[55%] z-20 w-[200px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white shadow-2xl"
    >
      <div className="p-5">
        {/* Logo */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-pink-500">
            <span className="text-xs font-bold text-white">I</span>
          </div>
          <span className="text-xs font-semibold text-gray-900">Intersect</span>
        </div>
        {/* Tagline */}
        <h4 className="text-base font-semibold leading-snug text-gray-900">
          At the intersection of
          <br />
          everything{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            &mdash; and everyone
          </span>
        </h4>
      </div>
    </motion.div>
  );
}

function BrowserPreviewMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, rotateY: -5 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute right-4 top-4 z-10 w-[180px] rotate-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl"
    >
      {/* Browser header */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-2.5 py-1.5">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          <div className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="ml-1.5 flex-1 rounded bg-gray-100 px-1.5 py-0.5">
          <span className="text-[8px] text-gray-400">intersect.io</span>
        </div>
      </div>
      {/* Browser content - OG image preview */}
      <div className="bg-slate-100 p-2.5">
        <div className="rounded-lg bg-slate-200 p-2.5">
          {/* Mini OG preview */}
          <div className="mb-2 flex items-center gap-1.5">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-orange-400 to-pink-500">
              <span className="text-[6px] font-bold text-white">I</span>
            </div>
            <span className="text-[8px] font-medium text-gray-700">
              Intersect
            </span>
          </div>
          <p className="text-[8px] leading-snug text-gray-600">
            At the intersection of
            <br />
            everything &mdash; and e...
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface OgkitFeatureShowcaseProps {
  features?: {
    icon: React.ReactNode;
    label: string;
    title: string;
    description: string;
  }[];
}

export default function OgkitFeatureShowcase({
  features = [
    {
      icon: <Code2 className="h-6 w-6 text-white" strokeWidth={1.5} />,
      label: "Just HTML",
      title: "Define Open Graph images with a simple HTML tag.",
      description:
        "Add a single <template> tag with your own HTML and CSS to any page on your website and Ogkit will render it as a beautiful Open Graph image.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" strokeWidth={1.5} />,
      label: "Amazing developer experience",
      title: "Iterate on your designs in real time right in your browser.",
      description:
        "Add ?ogkit-render to any URL and your OG template becomes a full-page preview. Use your browser's dev tools to inspect, tweak, and polish until it's perfect.",
    },
    {
      icon: <Globe className="h-6 w-6 text-white" strokeWidth={1.5} />,
      label: "Works everywhere",
      title: "Works with your existing tech stack and website assets.",
      description:
        "Ogkit renders with your own CSS, fonts, images, and templating language. If it works on your site, it works in your previews.",
    },
  ],
}: OgkitFeatureShowcaseProps) {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Feature cards */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              label={feature.label}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Visual preview section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto h-[300px] max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#c1d4f7] via-[#dce5f5] to-[#e0e7f2]"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
          </div>

          {/* Code editor */}
          <CodeEditorMockup />

          {/* OG Preview card */}
          <OGPreviewCard />

          {/* Browser preview */}
          <BrowserPreviewMockup />
        </motion.div>
      </div>
    </section>
  );
}
