import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#games', label: 'Games' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-3 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/45 bg-white/70 px-4 py-3 shadow-premium backdrop-blur-2xl sm:px-5">
        <a href="#home" className="flex items-center gap-3" aria-label="ALL KINDS PLAY home">
          <img src="/logo.png" alt="ALL KINDS PLAY logo" className="h-11 w-11 rounded-full object-contain shadow-md" />
          <div className="leading-tight">
            <p className="font-display text-sm font-black tracking-wide text-ink sm:text-base">ALL KINDS PLAY</p>
            <p className="hidden text-xs font-semibold text-coral sm:block">Where Every Kind of Fun Begins</p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-ink/75 transition hover:text-coral">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#booking" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-coral lg:inline-flex">
          Book Now
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/50 bg-white/90 p-4 shadow-premium backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-ink transition hover:bg-sunshine/40">
                {link.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="rounded-2xl bg-coral px-4 py-3 text-center font-extrabold text-white shadow-lg">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
