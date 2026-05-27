export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,#FFE14D_0,#FF7A59_24%,#7B5CFF_54%,#13D5FF_100%)] px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
      <div className="blob left-[8%] top-[18%] bg-sunshine/55" />
      <div className="blob right-[8%] top-[20%] bg-aqua/55 animation-delay-2" />
      <div className="blob bottom-[12%] left-[35%] bg-coral/50 animation-delay-4" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(16,20,58,0.56),rgba(16,20,58,0.08)_48%,rgba(16,20,58,0.45))]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/20 px-4 py-2 text-sm font-black shadow-lg backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-sunshine shadow-[0_0_18px_rgba(255,225,77,0.9)]" />
            Where Every Kind of Fun Begins
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-normal text-white drop-shadow-xl sm:text-6xl lg:text-7xl xl:text-8xl">
            MAKE EVERY EVENT UNFORGETTABLE
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/90 sm:text-2xl lg:mx-0">
            Premium Fun Games, Inflatable Activities & Event Entertainment
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="#booking" className="rounded-full bg-white px-8 py-4 text-center font-display text-base font-black text-ink shadow-premium transition hover:-translate-y-1 hover:scale-105">
              Book Now
            </a>
            <a href="#games" className="rounded-full border border-white/60 bg-white/15 px-8 py-4 text-center font-display text-base font-black text-white shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/25">
              Explore Games
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-8 rounded-full bg-white/30 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-white/45 bg-white/20 p-7 shadow-glow backdrop-blur-2xl">
            <img src="/logo.png" alt="ALL KINDS PLAY" className="mx-auto aspect-square w-full max-w-[390px] object-contain drop-shadow-2xl" />
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-ink">
              {['Inflatables', 'Games', 'Events'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 px-3 py-4 text-sm font-black shadow-lg backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
