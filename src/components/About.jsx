import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-sunshine/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="rounded-[2.5rem] border border-white bg-gradient-to-br from-aqua/20 via-white to-coral/20 p-5 shadow-premium">
          <div className="overflow-hidden rounded-[2rem]">
            <img src="/images/photo-booth.jpg" alt="ALL KINDS PLAY event setup" className="aspect-[4/5] h-full w-full object-cover" />
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="About ALL KINDS PLAY" title="We build fun zones that parents trust and kids remember" align="left">
            ALL KINDS PLAY delivers unforgettable entertainment experiences for birthday parties, schools, family events, festivals and corporate programs. We specialize in inflatable games, fun attractions, interactive activities and premium entertainment setups designed for all age groups.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['30+', 'Game options'],
              ['All ages', 'Kids, adults, teams'],
              ['Fast', 'Setup support'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl bg-ink p-5 text-white shadow-lg">
                <p className="font-display text-3xl font-black text-sunshine">{value}</p>
                <p className="mt-1 text-sm font-bold text-white/75">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
