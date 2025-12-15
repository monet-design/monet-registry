"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    stepNumber: "#52525B",
    titleHighlight: "#FAFAFA",
  },
  dark: {
    bg: "#141414",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    stepNumber: "#52525B",
    titleHighlight: "#FAFAFA",
  },
} as const;

const CONTENT = {
  title: "How it works",
  steps: [
    {
      number: "1.",
      title: "Add your repo.",
      description: "Conductor clones it and works entirely on your Mac.",
    },
    {
      number: "2.",
      title: "Deploy agents.",
      description: "Each Claude Code you spin up gets an isolated workspace.",
    },
    {
      number: "3.",
      title: "Conduct.",
      description:
        "See who's working, what needs attention, and review code.",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface ConductorBuildHowItWorks3Props {
  mode?: "light" | "dark";
}

export default function ConductorBuildHowItWorks3({
  mode = "dark",
}: ConductorBuildHowItWorks3Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-20" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-2xl px-6">
        {/* Section Title */}
        <h2
          className="mb-12 font-mono text-sm font-medium underline underline-offset-4"
          style={{ color: colors.text }}
        >
          {CONTENT.title}
        </h2>

        {/* Steps */}
        <div className="space-y-8">
          {CONTENT.steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <span
                className="font-mono text-sm"
                style={{ color: colors.stepNumber }}
              >
                {step.number}
              </span>
              <div>
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: colors.titleHighlight }}
                >
                  {step.title}
                </span>
                <br />
                <span
                  className="font-mono text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
