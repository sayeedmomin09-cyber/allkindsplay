import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/917276630392"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.45)] transition hover:-translate-y-1 hover:scale-105 sm:bottom-7"
      >
        <MessageCircle size={27} />
      </a>
      <a
        href="#booking"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-coral px-6 py-4 text-center font-display text-sm font-black text-white shadow-[0_18px_45px_rgba(255,77,94,0.38)] transition hover:-translate-y-1 hover:bg-ink sm:left-auto sm:right-24 sm:w-auto"
      >
        Book Now
      </a>
    </>
  );
}
