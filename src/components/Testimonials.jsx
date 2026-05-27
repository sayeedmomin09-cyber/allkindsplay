import SectionHeading from './SectionHeading.jsx';

const reviews = [
  {
    name: 'Riya S.',
    role: 'Birthday parent',
    text: 'The setup looked beautiful and the kids stayed busy for hours. The team was punctual, friendly, and handled everything smoothly.',
  },
  {
    name: 'Amit P.',
    role: 'School event organizer',
    text: 'Great mix of games for different ages. The inflatable and interactive games became the main attraction of our annual day.',
  },
  {
    name: 'Nisha K.',
    role: 'Family celebration host',
    text: 'Premium look, clean equipment, and very easy coordination. Guests loved the photo booth and the giant games.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,#E9FDFF_0,#FFFFFF_42%,#FFF5CA_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Reviews" title="Loved by parents, schools, and event hosts" />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-white/70 bg-white/72 p-7 shadow-premium backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-glow">
              <div className="mb-5 flex gap-1 text-xl text-coral" aria-label="5 star review">*****</div>
              <p className="text-base font-medium leading-8 text-ink/75">"{review.text}"</p>
              <div className="mt-7">
                <p className="font-display text-lg font-black text-ink">{review.name}</p>
                <p className="text-sm font-bold text-coral">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
