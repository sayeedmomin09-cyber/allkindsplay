import { Instagram, MessageCircle, Phone } from 'lucide-react';

const links = ['Home', 'Games', 'Gallery', 'About', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-ink px-4 pb-10 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="ALL KINDS PLAY logo" className="h-16 w-16 rounded-full bg-white object-contain p-1" />
              <div>
                <p className="font-display text-2xl font-black">ALL KINDS PLAY</p>
                <p className="font-bold text-sunshine">Where Every Kind of Fun Begins</p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-white/70">Premium games, inflatable activities, and event entertainment for celebrations that feel colorful, safe, and unforgettable.</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-black">Quick links</h3>
            <div className="mt-4 grid gap-3">
              {links.map((link) => (
                <a key={link} href={`#${link === 'Home' ? 'home' : link.toLowerCase()}`} className="font-semibold text-white/70 transition hover:text-sunshine">{link}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-black">Connect</h3>
            <div className="mt-4 flex gap-3">
              <a aria-label="Call" href="tel:7276630392" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:bg-sunshine hover:text-ink"><Phone size={19} /></a>
              <a aria-label="WhatsApp" href="https://wa.me/917276630392" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:bg-aqua hover:text-ink"><MessageCircle size={19} /></a>
              <a aria-label="Instagram" href="https://www.instagram.com/allkindsplay" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 transition hover:bg-coral"><Instagram size={19} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm font-semibold text-white/55">
          Copyright {new Date().getFullYear()} ALL KINDS PLAY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
