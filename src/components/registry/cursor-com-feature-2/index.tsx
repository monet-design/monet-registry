"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const IMAGES = {
  agentBg: "/scraped/cursor-com-2025-12-15/images/image-17.png",
  tabBgLight: "/scraped/cursor-com-2025-12-15/images/image-18.png",
  tabBgDark: "/scraped/cursor-com-2025-12-15/images/image-19.png",
  ecosystemBg: "/scraped/cursor-com-2025-12-15/images/image-20.png",
  avatarDylan: "/scraped/cursor-com-2025-12-15/images/image-25.png",
  avatarEric: "/scraped/cursor-com-2025-12-15/images/image-26.png",
  avatarRikki: "/scraped/cursor-com-2025-12-15/images/image-23.png",
  avatarRyo: "/scraped/cursor-com-2025-12-15/images/image-24.png",
  avatarCursor: "/scraped/cursor-com-2025-12-15/images/image-27.png",
} as const;

const FEATURES = [
  {
    id: "agent",
    title: "Agent turns ideas into code",
    description:
      "A human-AI programmer, orders of magnitude more effective than any developer alone.",
    link: "Learn about Agent →",
    linkHref: "/features#agent",
  },
  {
    id: "tab",
    title: "Magically accurate autocomplete",
    description:
      "Our custom Tab model predicts your next action with striking speed and precision.",
    link: "Learn about Tab →",
    linkHref: "/features#tab",
  },
  {
    id: "ecosystem",
    title: "Everywhere software gets built",
    description:
      "Cursor is in GitHub reviewing your PRs, a teammate in Slack, and anywhere else you work.",
    link: "Learn about Cursor's ecosystem →",
    linkHref: "/features#ecosystem",
  },
] as const;

// ============================================================================

interface CursorComFeature2Props {
  mode?: "light" | "dark";
}

// Agent Demo Window Component
function AgentDemoWindow() {
  const tasks = {
    inProgress: [
      "Enterprise Order Management System",
      "PyTorch MNIST Experiments",
      "Fix PR Comments Fetching Issue",
    ],
    readyForReview: [
      {
        title: "Analyze Tab vs Agent Usage Patterns",
        time: "now",
        summary:
          "All set! We now track focus share, switching rates, and rolling engagement so PMs can compare tab-first and agent-first",
        active: true,
      },
      {
        title: "Set up Cursor Rules for Dashboard",
        time: "30m",
        changes: { added: 37, removed: 0 },
      },
      {
        title: "Bioinformatics Tools",
        time: "45m",
        changes: { added: 135, removed: 21 },
      },
    ],
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-[#1e1e1e] shadow-2xl ring-1 ring-white/10">
      {/* Window Chrome */}
      <div className="flex h-7 items-center justify-between border-b border-white/10 px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="text-xs text-white/50">Cursor</span>
        <div className="w-12" />
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <div className="w-56 border-r border-white/10 bg-[#252525] p-2">
          <div className="mb-2">
            <div className="mb-1 px-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
              In Progress <span className="text-white/30">3</span>
            </div>
            {tasks.inProgress.map((task) => (
              <div
                key={task}
                className="flex items-start gap-2 rounded px-2 py-1.5 hover:bg-white/5"
              >
                <div className="mt-0.5 h-3.5 w-3.5 animate-spin rounded-full border border-white/30 border-t-transparent" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[11px] text-white/60">
                    {task}
                  </div>
                  <div className="text-[10px] text-white/30">Generating</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="mb-1 px-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
              Ready for Review <span className="text-white/30">3</span>
            </div>
            {tasks.readyForReview.map((task) => (
              <div
                key={task.title}
                className={`flex items-start gap-2 rounded px-2 py-1.5 ${
                  task.active ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <svg
                  className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${task.active ? "text-white" : "text-white/40"}`}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 13.9766C4.70117 13.9766 2.02344 11.2988 2.02344 8C2.02344 4.70117 4.70117 2.02344 8 2.02344C11.2988 2.02344 13.9766 4.70117 13.9766 8C13.9766 11.2988 11.2988 13.9766 8 13.9766ZM7.35547 10.7832C7.16211 10.7832 7.00391 10.7012 6.85742 10.5078L5.42773 8.75C5.3457 8.63867 5.29297 8.51562 5.29297 8.38672C5.29297 8.12891 5.49219 7.92383 5.74414 7.92383C5.9082 7.92383 6.03711 7.9707 6.17773 8.1582L7.33203 9.65234L9.76367 5.75C9.875 5.58008 10.0215 5.48633 10.168 5.48633C10.4141 5.48633 10.6484 5.65625 10.6484 5.91992C10.6484 6.04883 10.5723 6.17773 10.5078 6.29492L7.83008 10.5078C7.71289 10.6895 7.54883 10.7832 7.35547 10.7832Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <div
                      className={`truncate text-[11px] ${task.active ? "text-white" : "text-white/60"}`}
                    >
                      {task.title}
                    </div>
                    <div className="flex-shrink-0 text-[10px] text-white/30">
                      {task.time}
                    </div>
                  </div>
                  {"summary" in task ? (
                    <div className="truncate text-[10px] text-white/40">
                      {task.summary}
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-[10px]">
                      <span className="text-green-400">
                        +{task.changes?.added}
                      </span>
                      <span className="text-red-400">
                        -{task.changes?.removed}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col bg-[#1e1e1e]">
          <div className="border-b border-white/10 px-4 py-2 text-xs font-medium text-white/80">
            Analyze Tab vs Agent Usage Patterns
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="mb-3 rounded-lg border border-white/10 bg-[#252525] px-3 py-2 text-[11px] text-white/70">
              Help me understand how teams split their focus between the tab
              view and the agents panel across our workspaces.
            </div>
            <div className="space-y-3 text-[11px]">
              <div className="flex items-center gap-1 text-white/40">
                <span>Thought</span>
                <span className="text-white/20">7s</span>
              </div>
              <div className="flex items-center gap-1 text-white/40">
                <span>Reviewed</span>
                <span className="text-white/20">
                  workspace usage exports and historical engagement notes
                </span>
              </div>
              <div className="text-white/80">
                I&apos;ll build an analytics toolkit that highlights tab versus
                agent adoption and switching behavior:
              </div>
              {[
                { name: "summary.py", added: 150, removed: 0 },
                { name: "segmentation.py", added: 94, removed: 0 },
                { name: "report.py", added: 40, removed: 0 },
                { name: "test_usage.py", added: 90, removed: 0 },
              ].map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-2 rounded border border-white/10 bg-[#252525] px-3 py-2"
                >
                  <svg
                    className="h-3.5 w-3.5 text-white/40"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M4.14746 12.7578C3.03564 12.7578 2.48242 12.1992 2.48242 11.0767V2.92871C2.48242 1.81152 3.04102 1.24219 4.14746 1.24219H6.69873C7.30029 1.24219 7.63867 1.3335 8.04688 1.75244L11.0063 4.76562C11.436 5.20605 11.5166 5.50684 11.5166 6.19971V11.0767C11.5166 12.1938 10.9634 12.7578 9.85156 12.7578H4.14746Z" />
                  </svg>
                  <span className="font-medium text-white/80">{file.name}</span>
                  <span className="text-green-400">+{file.added}</span>
                  {file.removed > 0 && (
                    <span className="text-red-400">-{file.removed}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 p-3">
            <div className="rounded-lg border border-white/10 bg-[#252525] px-3 py-2">
              <span className="text-[11px] text-white/30">
                Plan, search, build anything...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab Demo Window Component
function TabDemoWindow() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-[#1e1e1e] shadow-2xl ring-1 ring-white/10">
      {/* Window Chrome */}
      <div className="flex h-7 items-center justify-between border-b border-white/10 px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="text-xs text-white/50">Cursor</span>
        <div className="w-12" />
      </div>

      {/* Tabs */}
      <div className="flex h-8 items-center border-b border-white/10 bg-[#252525]">
        <div className="flex h-full items-center gap-2 border-r border-white/10 bg-[#1e1e1e] px-3">
          <span className="text-[11px] text-white/80">Dashboard.tsx</span>
          <button className="text-white/30 hover:text-white/60">×</button>
        </div>
        <div className="flex h-full items-center gap-2 border-r border-white/10 px-3">
          <span className="text-[11px] text-white/40">SupportChat.tsx</span>
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 overflow-auto p-4 font-mono text-[11px]">
        <pre className="leading-5">
          <code>
            <span className="text-[#E394DC]">&quot;use client&quot;</span>
            <span className="text-white/80">;</span>
            {"\n\n"}
            <span className="text-[#83D6C5]">import</span>
            <span className="text-[#94C1FA]"> React</span>
            <span className="text-white/80">, {"{ "}</span>
            <span className="text-[#94C1FA]">useState</span>
            <span className="text-white/80">{" }"} </span>
            <span className="text-[#83D6C5]">from</span>
            <span className="text-[#E394DC]"> &quot;react&quot;</span>
            <span className="text-white/80">;</span>
            {"\n"}
            <span className="text-[#83D6C5]">import</span>
            <span className="text-[#94C1FA]"> Navigation</span>
            <span className="text-[#83D6C5]"> from</span>
            <span className="text-[#E394DC]">
              {" "}
              &quot;./Navigation&quot;
            </span>
            <span className="text-white/80">;</span>
            {"\n"}
            <span className="text-[#83D6C5]">import</span>
            <span className="text-[#94C1FA]"> SupportChat</span>
            <span className="text-[#83D6C5]"> from</span>
            <span className="text-[#E394DC]">
              {" "}
              &quot;./SupportChat&quot;
            </span>
            <span className="text-white/80">;</span>
            {"\n\n"}
            <span className="text-[#83D6C5]">export</span>
            <span className="text-[#83D6C5]"> default</span>
            <span className="text-[#82D2CE]"> function</span>
            <span className="text-[#EFB080]"> Dashboard</span>
            <span className="text-white/80">() {"{"}</span>
            {"\n"}
            <span className="text-[#82D2CE]">{"  "}const</span>
            <span className="text-white/80"> [</span>
            <span className="text-[#AA9BF5]">activeTab</span>
            <span className="text-white/80">, </span>
            <span className="text-[#AA9BF5]">setActiveTab</span>
            <span className="text-white/80">] = </span>
            <span className="text-[#EFB080]">useState</span>
            <span className="text-white/80">(</span>
            <span className="text-[#E394DC]">&quot;support&quot;</span>
            <span className="text-white/80">);</span>
            {"\n\n"}
            <span className="text-[#83D6C5]">{"  "}return</span>
            <span className="text-white/80"> (</span>
            {"\n"}
            <span className="text-[#A4A4A4]">{"    "}&lt;</span>
            <span className="text-[#FAD075]">div </span>
            <span className="text-[#AAA0FA] italic">className</span>
            <span className="text-white/50">=</span>
            <span className="text-[#E394DC]">
              &quot;flex h-[600px] border rounded-lg overflow-hidden&quot;
            </span>
            <span className="text-[#A4A4A4]">&gt;</span>
            {"\n"}
            <span className="text-[#A4A4A4]">{"      "}&lt;</span>
            <span className="text-[#FAD075]">div </span>
            <span className="text-[#AAA0FA] italic">className</span>
            <span className="text-white/50">=</span>
            <span className="text-[#E394DC]">&quot;w-64 border-r&quot;</span>
            <span className="text-[#A4A4A4]">&gt;</span>
            {"\n"}
            <span className="bg-[#201e18]/40">
              {"       "}
              <span className="text-[#A4A4A4]">&lt;</span>
              <span className="text-[#87C3FF]">Navigation</span>
              <span className="text-[#AAA0FA] italic"> activeTab</span>
              <span className="text-white/50">=</span>
              <span className="text-[#83D6C5]">{"{"}</span>
              <span className="text-[#94C1FA]">activeTab</span>
              <span className="text-[#83D6C5]">{"}"}</span>
              <span className="text-[#AAA0FA] italic"> onSelectTab</span>
              <span className="text-white/50">=</span>
              <span className="text-[#83D6C5]">{"{"}</span>
              <span className="text-[#94C1FA]">setActiveTab</span>
              <span className="text-[#83D6C5]">{"}"}</span>
              <span className="text-[#A4A4A4]"> /&gt;</span>
            </span>
            {"\n"}
            <span className="text-[#A4A4A4]">{"      "}&lt;/</span>
            <span className="text-[#FAD075]">div</span>
            <span className="text-[#A4A4A4]">&gt;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

// Ecosystem Demo - Slack Window
function SlackDemoWindow() {
  const messages = [
    {
      user: "dylan",
      avatar: IMAGES.avatarDylan,
      time: "9/16/2025",
      content:
        "small thing but would be really good to have anchor links on the website for releases",
    },
    {
      user: "dylan",
      avatar: IMAGES.avatarDylan,
      time: "9/16/2025",
      content:
        "wanna be able to go to cursor.com/changelog#1.0 to see 1.0 changelog",
      isThread: true,
    },
    {
      user: "eric",
      avatar: IMAGES.avatarEric,
      time: "9/16/2025",
      content: (
        <>
          checks out
          <br />
          <span className="font-semibold text-blue-500">@cursor</span> can you
          take a stab?
        </>
      ),
    },
    {
      user: "Cursor",
      avatar: IMAGES.avatarCursor,
      time: "9/16/2025",
      isBot: true,
      content:
        "I implemented direct linking for changelog entries and updated Node.js version constraints across the project to improve compatibility and maintainability.",
      actions: ["View PR", "Open in Cursor", "Open in Web"],
    },
    {
      user: "dylan",
      avatar: IMAGES.avatarDylan,
      time: "9/16/2025",
      content: (
        <>
          Nice <span className="font-semibold text-blue-500">@eric</span> can
          you take a look?
        </>
      ),
    },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-white shadow-2xl ring-1 ring-black/10 dark:bg-[#1e1e1e] dark:ring-white/10">
      {/* Window Chrome */}
      <div className="flex h-7 items-center justify-between border-b border-black/10 px-3 dark:border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
        </div>
        <span className="text-xs text-black/50 dark:text-white/50">Slack</span>
        <div className="w-12" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 bg-gray-50 px-4 py-2 dark:border-white/10 dark:bg-[#252525]">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            #ask-cursor
          </span>
          <span className="text-xs text-gray-500 dark:text-white/40">
            8 members
          </span>
        </div>
        <div className="flex -space-x-1">
          {[
            IMAGES.avatarDylan,
            IMAGES.avatarEric,
            IMAGES.avatarRikki,
            IMAGES.avatarRyo,
          ].map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt=""
              className="h-6 w-6 rounded-full border-2 border-white object-cover dark:border-[#252525]"
            />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-1 overflow-auto p-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 rounded px-2 py-1.5 ${msg.isThread ? "ml-10" : ""}`}
          >
            {!msg.isThread && (
              <img
                src={msg.avatar}
                alt=""
                className="h-7 w-7 rounded object-cover"
              />
            )}
            <div className="min-w-0 flex-1">
              {!msg.isThread && (
                <div className="flex items-baseline gap-1">
                  <span className="text-[11px] font-semibold text-gray-900 dark:text-white">
                    {msg.user}
                  </span>
                  {msg.isBot && (
                    <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-[9px] font-medium text-gray-500 dark:bg-white/10 dark:text-white/40">
                      APP
                    </span>
                  )}
                  <span className="text-[10px] text-gray-400 dark:text-white/30">
                    {msg.time}
                  </span>
                </div>
              )}
              <div className="text-[11px] leading-relaxed text-gray-700 dark:text-white/70">
                {msg.content}
              </div>
              {msg.actions && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {msg.actions.map((action) => (
                    <button
                      key={action}
                      className={`rounded px-2 py-1 text-[10px] font-medium ${
                        action === "View PR"
                          ? "bg-teal-600 text-white"
                          : "border border-gray-200 bg-white text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Ecosystem Demo - GitHub PR Window
function GitHubPRDemoWindow() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-white shadow-2xl ring-1 ring-black/10 dark:bg-[#1e1e1e] dark:ring-white/10">
      {/* Window Chrome */}
      <div className="flex h-7 items-center justify-between border-b border-black/10 px-3 dark:border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/20" />
        </div>
        <span className="text-xs text-black/50 dark:text-white/50">
          GitHub Pull Request
        </span>
        <div className="w-12" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3 overflow-auto p-4">
        {/* Review Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
            <svg
              className="h-3.5 w-3.5 text-gray-500 dark:text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="font-semibold text-gray-900 dark:text-white">
              cursor
            </span>
            <span className="rounded-full border border-gray-200 px-1.5 py-0.5 text-[9px] font-medium text-gray-500 dark:border-white/20 dark:text-white/50">
              bot
            </span>
            <span className="text-gray-500 dark:text-white/40">
              reviewed 1m ago
            </span>
          </div>
        </div>

        {/* File Path */}
        <div className="rounded-t-md border border-b-0 border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-[10px] text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-white/50">
          src/vs/workbench/composer/browser/components/ComposerUnifiedDropdown.tsx
        </div>

        {/* Diff */}
        <div className="-mt-3 overflow-hidden rounded-b-md border border-gray-200 dark:border-white/10">
          <div className="flex font-mono text-[10px]">
            <div className="w-10 bg-red-50 px-2 py-1 text-center text-red-600 dark:bg-red-900/20 dark:text-red-400">
              3292
            </div>
            <div className="flex-1 bg-red-50 px-3 py-1 text-red-700 dark:bg-red-900/20 dark:text-red-400">
              <span className="mr-1">-</span>
              {"{"}selectedMode().keybinding{"}"}
            </div>
          </div>
          <div className="flex font-mono text-[10px]">
            <div className="w-10 bg-green-50 px-2 py-1 text-center text-green-600 dark:bg-green-900/20 dark:text-green-400">
              3293
            </div>
            <div className="flex-1 bg-green-50 px-3 py-1 text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <span className="mr-1">+</span>
              {"{"}composerOpenModeToggleKeybinding{"}"}
            </div>
          </div>
        </div>

        {/* Comment */}
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3 dark:border-white/10 dark:bg-white/5">
          <div className="flex gap-2">
            <img
              src={IMAGES.avatarCursor}
              alt=""
              className="h-5 w-5 rounded-md"
            />
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-1.5 text-[10px]">
                <span className="font-semibold text-gray-900 dark:text-white">
                  cursor
                </span>
                <span className="rounded-full border border-gray-200 px-1.5 py-0.5 text-[9px] font-medium text-gray-500 dark:border-white/20 dark:text-white/50">
                  bot
                </span>
                <span className="text-gray-500 dark:text-white/40">1m ago</span>
              </div>
              <div className="space-y-1 text-[11px] leading-relaxed text-gray-700 dark:text-white/70">
                <div className="font-semibold">
                  Bug: Function Returns Object Instead of String (Logic bug)
                </div>
                <div>
                  The{" "}
                  <code className="rounded bg-gray-200 px-1 font-mono text-[10px] dark:bg-white/10">
                    composerOpenModeToggleKeybinding
                  </code>{" "}
                  is a function that needs to be called to get its value. Using
                  it directly causes the keybinding display condition to always
                  be truthy.
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <button className="flex items-center gap-1.5 rounded border border-gray-200 bg-white px-2 py-1 text-[10px] font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 20 22"
                    fill="currentColor"
                  >
                    <path d="M19.162 5.452 10.698.565a.88.88 0 0 0-.879 0L1.356 5.452a.74.74 0 0 0-.37.64v9.853a.74.74 0 0 0 .37.64l8.464 4.887a.879.879 0 0 0 .879 0l8.464-4.886a.74.74 0 0 0 .37-.64V6.091a.74.74 0 0 0-.37-.64Z" />
                  </svg>
                  Fix in Cursor
                </button>
                <button className="rounded border border-gray-200 bg-white px-2 py-1 text-[10px] font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                  Fix in Web
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  feature,
  isDark,
  reversed = false,
  children,
}: {
  feature: (typeof FEATURES)[number];
  isDark: boolean;
  reversed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mb-7 px-4 lg:px-6">
      <a
        href={feature.linkHref}
        className={`relative block overflow-hidden rounded-sm p-7 transition-colors ${
          isDark
            ? "bg-[#141414] hover:bg-[#1a1a1a]"
            : "bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <div
          className={`grid grid-cols-1 items-center gap-6 lg:grid-cols-24 lg:gap-0`}
        >
          {/* Text Content */}
          <div
            className={`${reversed ? "order-1 lg:order-2 lg:col-start-17 lg:col-end-25 lg:pl-12" : "order-1 lg:col-start-1 lg:col-end-9 lg:pr-12"}`}
          >
            <div className="max-w-prose">
              <h3
                className={`text-lg font-normal md:text-xl ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {feature.title}
              </h3>
              <p
                className={`mt-2 text-lg md:text-xl ${isDark ? "text-white/60" : "text-gray-600"}`}
              >
                {feature.description}
              </p>
              <div className="mt-6">
                <span
                  className={`text-sm font-medium ${isDark ? "text-white/80" : "text-gray-700"}`}
                >
                  {feature.link}
                </span>
              </div>
            </div>
          </div>

          {/* Media Content */}
          <div
            className={`${reversed ? "order-2 lg:order-1 lg:col-start-1 lg:col-end-17" : "order-2 lg:col-start-9 lg:col-end-25"}`}
          >
            {/* Media Border Container */}
            <div
              className={`relative grid grid-cols-1 grid-rows-1 overflow-hidden rounded-sm ${
                isDark ? "bg-[#1a1a1a]" : "bg-gray-100"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function CursorComFeature2({
  mode = "dark",
}: CursorComFeature2Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-20 ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"}`}
    >
      {/* Feature 1: Agent */}
      <FeatureCard feature={FEATURES[0]} isDark={isDark}>
        <div
          className="relative w-full select-none overflow-hidden"
          style={{ height: "min(780px, 70vh)", minHeight: "650px" }}
        >
          {/* Background Image */}
          <img
            src={IMAGES.agentBg}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 transform object-cover brightness-[0.6]"
          />

          {/* Demo Window */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-[560px] w-[680px]"
              style={{
                boxShadow:
                  "0 28px 70px rgba(0, 0, 0, 0.14), 0 14px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <AgentDemoWindow />
            </div>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 2: Tab */}
      <FeatureCard feature={FEATURES[1]} isDark={isDark} reversed>
        <div
          className="relative w-full select-none overflow-hidden"
          style={{ height: "min(780px, 70vh)", minHeight: "650px" }}
        >
          {/* Background Image */}
          <img
            src={isDark ? IMAGES.tabBgDark : IMAGES.tabBgLight}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 transform object-cover brightness-[0.6]"
          />

          {/* Demo Window */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-[560px] w-[680px]"
              style={{
                boxShadow:
                  "0 28px 70px rgba(0, 0, 0, 0.14), 0 14px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <TabDemoWindow />
            </div>
          </div>
        </div>
      </FeatureCard>

      {/* Feature 3: Ecosystem */}
      <FeatureCard feature={FEATURES[2]} isDark={isDark}>
        <div
          className="relative w-full select-none overflow-hidden"
          style={{ height: "min(780px, 70vh)", minHeight: "650px" }}
        >
          {/* Background Image */}
          <img
            src={IMAGES.ecosystemBg}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 transform object-cover brightness-[0.6]"
          />

          {/* Demo Windows */}
          <div className="absolute inset-0">
            {/* Slack Window */}
            <div
              className="absolute h-[340px] w-[520px]"
              style={{
                left: "15%",
                top: "10%",
                boxShadow:
                  "0 28px 70px rgba(0, 0, 0, 0.14), 0 14px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,0.1)",
                zIndex: 10,
              }}
            >
              <SlackDemoWindow />
            </div>

            {/* GitHub PR Window */}
            <div
              className="absolute h-[300px] w-[520px]"
              style={{
                right: "10%",
                bottom: "10%",
                boxShadow:
                  "0 28px 70px rgba(0, 0, 0, 0.14), 0 14px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,0.1)",
                zIndex: 15,
              }}
            >
              <GitHubPRDemoWindow />
            </div>
          </div>
        </div>
      </FeatureCard>
    </section>
  );
}
