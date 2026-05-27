import SectionHeading from './SectionHeading.jsx';
import { categories } from '../data/games.js';

function GameCard({ game }) {
  const message = encodeURIComponent(`Hi ALL KINDS PLAY, I want to book ${game.title}. Please share availability and pricing.`);

  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-white/45 bg-white/62 shadow-premium backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:shadow-glow">
      <div className="relative aspect-[4/3] overflow-hidden bg-aqua/10">
        <img src={game.image} alt={game.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent opacity-80" />
        <h3 className="absolute bottom-4 left-4 right-4 font-display text-2xl font-black leading-tight text-white drop-shadow-lg">{game.title}</h3>
      </div>
      <div className="p-5">
        <p className="min-h-[84px] text-sm font-medium leading-7 text-ink/70">{game.description}</p>
        <a href={`https://wa.me/917276630392?text=${message}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-coral">
          Book This Game
        </a>
      </div>
    </article>
  );
}

export default function Games() {
  return (
    <section id="games" className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_50%,#FFF6D6_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute -left-28 top-40 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
      <div className="absolute -right-24 bottom-80 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Games catalog" title="Premium games for every kind of crowd">
          Pick one highlight attraction or build a full entertainment zone with inflatables, wooden games, activity games, and play-and-win counters.
        </SectionHeading>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-ink/45">Category</p>
                  <h3 className={`mt-2 bg-gradient-to-r ${category.accent} bg-clip-text font-display text-3xl font-black text-transparent sm:text-4xl`}>{category.name}</h3>
                </div>
                <a href="#booking" className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-black text-ink shadow-lg transition hover:-translate-y-1 hover:bg-sunshine">
                  Book category
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.games.map((game) => (
                  <GameCard key={game.title} game={game} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
