"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 추천사 데이터
 */
const TESTIMONIALS = [
  {
    quote: "Y Combinator is the best program for creating top-end entrepreneurs that has ever existed.",
    name: "Marc Andreessen",
    title: "General Partner, Andreessen Horowitz",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Y Combinator is the best startup accelerator in the world. YC helps their companies a lot, and the YC community is a huge asset for the companies that go through the program.",
    name: "Ron Conway",
    title: "Founder, SV Angel",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    quote: "At YC, we were challenged to do things that don't scale - to start with the perfect experience for one person, then work backwards and scale it to 100 people who love us.",
    name: "Brian Chesky",
    title: "Founder, Airbnb (YC W09)",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    quote: "I doubt that Stripe would have worked without YC. It's that simple. Acquiring early customers, figuring out who to hire, closing deals with banks, raising money - YC's partners were closely involved and crucially helpful.",
    name: "Patrick Collison",
    title: "Founder, Stripe (YC S09)",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComTestimonial6Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComTestimonial6({
  mode = "light",
}: YcombinatorComTestimonial6Props) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-medium">
          Hear more from the community.
        </h2>
        <div className="space-y-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="flex flex-row">
              <div
                className="mr-5 h-[60px] w-[60px] min-w-[60px] rounded-lg bg-stone-200"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="flex flex-col">
                <p className="text-lg">"{testimonial.quote}"</p>
                <div className="flex flex-row flex-wrap gap-x-2">
                  <div>
                    <b>{testimonial.name}</b>,
                  </div>
                  <span>{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
