import { ShieldCheck, TimerReset, UsersRound, Trees, SmilePlus, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const features = [
  { title: 'Safe & Secure', icon: ShieldCheck, text: 'Checked setups, guided play zones, and equipment selected for dependable family entertainment.' },
  { title: 'Quick Setup', icon: TimerReset, text: 'Fast arrival, clean installation, and tidy pack-up so your event schedule stays smooth.' },
  { title: 'Professional Team', icon: UsersRound, text: 'Friendly event handlers who understand kids, guests, crowd flow, and premium service.' },
  { title: 'Indoor & Outdoor', icon: Trees, text: 'Flexible game formats for banquet halls, lawns, schools, apartments, malls, and corporate venues.' },
  { title: 'Kids & Adults', icon: SmilePlus, text: 'A broad catalog that keeps toddlers, teens, parents, and teams happily involved.' },
  { title: 'Premium Equipment', icon: Sparkles, text: 'Bright, photo-ready attractions that make your event look polished from every angle.' },
];

export default function Features() {
  return (
    <section className="relative bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why families choose us" title="Event entertainment that looks great and runs smoothly">
          Premium service, colorful attractions, and games that feel joyful from the first guest arrival.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, icon: Icon, text }) => (
            <article key={title} className="group rounded-[2rem] border border-white bg-gradient-to-br from-white to-aqua/10 p-6 shadow-premium transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white shadow-lg transition group-hover:rotate-3 group-hover:bg-coral">
                <Icon size={26} />
              </div>
              <h3 className="font-display text-xl font-black text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
