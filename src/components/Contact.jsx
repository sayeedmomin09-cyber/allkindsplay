import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-ink p-8 text-white shadow-premium lg:col-span-1">
          <Phone className="mb-5 text-sunshine" size={34} />
          <h2 className="font-display text-3xl font-black">Call ALL KINDS PLAY</h2>
          <a href="tel:7276630392" className="mt-4 block text-3xl font-black text-aqua">7276630392</a>
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-coral to-grape p-8 text-white shadow-premium">
          <Instagram className="mb-5" size={34} />
          <h3 className="font-display text-2xl font-black">Instagram</h3>
          <a href="https://www.instagram.com/allkindsplay" target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-white px-5 py-3 font-black text-ink transition hover:-translate-y-1">
            Follow @allkindsplay
          </a>
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-aqua to-sunshine p-8 text-ink shadow-premium">
          <MapPin className="mb-5" size={34} />
          <h3 className="font-display text-2xl font-black">Business Location</h3>
          <p className="mt-4 font-semibold leading-7">Available for birthdays, schools, festivals, family events, and corporate programs. Contact us for service area and venue planning.</p>
        </div>
      </div>
    </section>
  );
}
