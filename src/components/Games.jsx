import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionHeading from './SectionHeading.jsx';
import { categories, getCategoryGames } from '../data/games.js';

function GameCard({ game }) {
  const message = encodeURIComponent(`Hi ALL KINDS PLAY, I want to book ${game.title}. Please share availability and pricing.`);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/45 bg-white/72 shadow-premium backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:shadow-glow sm:rounded-[1.7rem]">
      <div className="relative aspect-[4/3] overflow-hidden bg-aqua/10">
        <img src={game.image} alt={game.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-transparent to-transparent opacity-85" />
        <h3 className="absolute bottom-3 left-3 right-3 font-display text-base font-black leading-tight text-white drop-shadow-lg sm:bottom-4 sm:left-4 sm:right-4 sm:text-2xl">{game.title}</h3>
      </div>
      <div className="p-3 sm:p-5">
        <p className="hidden min-h-[84px] text-sm font-medium leading-7 text-ink/70 sm:block">{game.description}</p>
        <a href={`https://wa.me/917276630392?text=${message}`} target="_blank" rel="noreferrer" className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-ink px-3 py-2.5 text-xs font-extrabold text-white shadow-lg transition hover:bg-coral sm:mt-5 sm:px-5 sm:py-3 sm:text-sm">
          Book This Game
        </a>
      </div>
    </article>
  );
}

function GameGrid({ games, query, categoryName }) {
  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(query));

  if (!filteredGames.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
      {filteredGames.map((game) => (
        <GameCard key={`${categoryName}-${game.title}`} game={game} />
      ))}
    </div>
  );
}

export default function Games() {
  const [search, setSearch] = useState('');
  const query = search.trim().toLowerCase();

  const visibleCategories = useMemo(() => {
    if (!query) return categories;
    return categories.filter((category) => getCategoryGames(category).some((game) => game.title.toLowerCase().includes(query)));
  }, [query]);

  return (
    <section id="games" className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFF_50%,#FFF6D6_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute -left-28 top-40 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
      <div className="absolute -right-24 bottom-80 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Games catalogue" title="Premium games for every kind of event">
          Search, compare, and book the perfect attractions for birthdays, weddings, corporate programs, carnivals, indoor events, and outdoor celebrations.
        </SectionHeading>

        <div className="mx-auto mb-12 max-w-2xl rounded-full border border-white bg-white/85 p-2 shadow-premium backdrop-blur-xl">
          <label className="flex items-center gap-3 rounded-full bg-white px-4 py-3">
            <Search className="text-coral" size={22} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search games and activities"
              className="w-full bg-transparent text-base font-bold text-ink outline-none placeholder:text-ink/40"
            />
          </label>
        </div>

        <div className="space-y-16">
          {visibleCategories.map((category) => (
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

              {category.groups ? (
                <div className="space-y-10">
                  {category.groups.map((group) => {
                    const hasMatches = group.games.some((game) => game.title.toLowerCase().includes(query));
                    if (query && !hasMatches) return null;
                    return (
                      <div key={group.name} className="rounded-[2rem] border border-white/70 bg-white/45 p-4 shadow-premium backdrop-blur-xl sm:p-6">
                        <h4 className="mb-5 font-display text-2xl font-black text-ink">{group.name}</h4>
                        <GameGrid games={group.games} query={query} categoryName={`${category.name}-${group.name}`} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <GameGrid games={category.games} query={query} categoryName={category.name} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
