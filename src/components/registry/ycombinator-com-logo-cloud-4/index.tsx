"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#F26625",
    beige: "#F5F1EB",
  },
  dark: {
    accent: "#F26625",
    beige: "#2D2A26",
  },
} as const;

/**
 * 회사 로고 데이터
 */
const COMPANY_LOGOS = [
  { name: "Stripe", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/stripe-d1d72c19fe7fbfd9514ffbc26f1c5922a1b77fd7445c78a34fe319c03b986713.png" },
  { name: "Airbnb", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/airbnb-423deceb57ea913e2f3a39a1c2b6ecb690f019933b4d767ac91121777aa59107.png" },
  { name: "Instacart", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/instacart-81d147c59ca98d84b72f606de3af981da477423738120d3b2baec64c3162ba14.png" },
  { name: "DoorDash", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/doordash-f41c839bb0522ead71e8d99ed3ae0495c04271f6f3f3edc6b0effbbff172bc1d.png" },
  { name: "Cruise", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/cruise-38dda623d4f317a49a65099cd460bd1c6b3e4b91ffeccb6df0ec02284345b338.png" },
  { name: "Twitch", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/twitch-1b4772b83a73b6fa827ef467ecc17023a2bfbbf936633bffb5e93674690e74d6.png" },
  { name: "Coinbase", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/coinbase-5c8bfb41c875bb6163cebf467fe6afa1cbaf092c16ea7711034e32218965ff93.png" },
  { name: "PagerDuty", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/pagerduty-dc361aab31ef341eaed4d0a5a420c42f4d557745c67ffc5999c7b556c408d150.png" },
  { name: "Faire", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/faire-3113845be6506be7761eaef7257e882b6e0c94081653c0f7459f8ed0c0596338.png" },
  { name: "Brex", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/brex-a76f83603a430f266cddacaceaf525080d91c3febf04ea8000ae1b4c67e8786f.png" },
  { name: "Deel", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/deel-2eb5105300f66ebfa07b0ea805b6680d71c0b6de0272c3f75eebf6d2ae3077cf.png" },
  { name: "Rippling", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/rippling-100bc0c1cdabd9e38c671420ba16ba8f6d1af656dc3bc32eeeaa029f1bec257a.png" },
  { name: "Reddit", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/reddit-d5ed3340e70326e6a372be76e2ec1b761a4d757954ae69311671f82f59afbedb.png" },
  { name: "Gusto", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/gusto-b3f56f64a500a85cb44a2621db217778c9c698f83da59921e41c732dacdb3f35.png" },
  { name: "Flexport", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/flexport-ace3180f9926a45ed72eea63ed4c5a1a0aeb4e14ec7eb3ffff7c513aba07d0a9.png" },
  { name: "Dropbox", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/dropbox-83b803aca663267bc2c480efca454ea8f9d31c39dd2ccba3856104a987e2692d.png" },
  { name: "Razorpay", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/razorpay-7b4097215fa2d028e821d34bd3d1558309acd87ac5599e8164545e3a7fda5b95.png" },
  { name: "Scale AI", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/scale_ai-09562d62f19867f7e4af006fb0003148d1f0dff4ad32fa23e283c98a88044443.png" },
  { name: "GitLab", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/gitlab-9998d8cb37a75de7004d679606bb8c5517d8c82848fb3e6ff13f8587143545b3.png" },
  { name: "Benchling", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/benchling-cabc6ab6f92c92af620210d56c5cb872d5a2b77d3244924a4b35c0fba03aa411.png" },
  { name: "Fivetran", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/fivetran-80f044801357e31b679f1c6adb33cd674b80a6fba2eef509dcb930f57118d324.png" },
  { name: "Rappi", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/rappi-58eceb42cb4e6ba589842600cba0a0448e2ebe42a8ad4d0b9e26f1e6ccd9f36d.png" },
  { name: "Checkr", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/checkr-dfe048bab6c8869e0faa186c947e1f8ba70fe25468952d432d6730bc7c64b557.png" },
  { name: "Zapier", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/zapier-a571989e13599601b2555b75551ee1cee4161f77df939d8f9d99ef750d6c9851.png" },
  { name: "Whatnot", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/whatnot-44d4dfd2add836c788c42baa567fa4769b88f6e4da07d8f8eaf79d321b9be41c.png" },
  { name: "Podium", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/podium-403d2cf6edcf8bd760845e1a356161d69df559a59aeda2e36bf90b0454d75c85.png" },
  { name: "Webflow", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/webflow-e0f324025f848a85519e046dfcffa3c517ad4470106e8ee54f697df16be929ce.png" },
  { name: "Zepto", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/zepto-ed94889c5a2c2128ca2a39d5ce829a68cc792ed3e1b479089d2cbd3e03fa6483.png" },
  { name: "Groww", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/groww-b94b5a87bc987c7fa70ef04790d93b54fdca1d9edcf3d4d104865d740542fd4f.png" },
  { name: "Segment", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/segment-bc64ab58b63ec0bdb1aa5888ca7771acabc39db12e9c30b4a5215014b766ffc4.png" },
  { name: "Ironclad", logo: "https://bookface-static.ycombinator.com/assets/ycdc/startups/ironclad-7ea21638879d20154e44f1614042b2fc93babefe9059a42835874975f73106d1.png" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComLogoCloud4Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComLogoCloud4({
  mode = "light",
}: YcombinatorComLogoCloud4Props) {
  const colors = COLORS[mode];

  return (
    <section style={{ backgroundColor: colors.beige }} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-medium text-gray-900">
          Top YC companies
        </h2>
        <div className="grid grid-cols-2 gap-4 gap-y-8 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {COMPANY_LOGOS.map((company) => (
            <a
              key={company.name}
              href="#"
              className="flex items-center justify-center rounded-lg bg-white px-3 py-4 transition-shadow hover:shadow-md"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="inline-block max-h-6 max-w-full"
              />
            </a>
          ))}
          <a
            href="#"
            className="flex items-center justify-center rounded-lg bg-white px-3 py-4 font-bold"
          >
            <span className="mr-0.5 max-h-6 text-2xl">+</span>
          </a>
        </div>
      </div>
    </section>
  );
}
