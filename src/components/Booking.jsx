import { CalendarDays, Instagram, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { allGames } from '../data/games.js';
import SectionHeading from './SectionHeading.jsx';

export default function Booking() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const details = [
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Event Date: ${form.get('date')}`,
      `Event Type: ${form.get('type')}`,
      `Selected Game: ${form.get('game')}`,
      `Location: ${form.get('location')}`,
    ].join('\n');
    window.open(`https://wa.me/917276630392?text=${encodeURIComponent(`Hi ALL KINDS PLAY, I want to book an event.\n\n${details}`)}`, '_blank');
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-coral/30 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-aqua/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Book now" title="Tell us about your event and we will help plan the fun" align="left">
            Share the event basics and our team will connect on WhatsApp with availability, game suggestions, and setup details.
          </SectionHeading>
          <div className="mt-8 grid gap-4">
            <a href="tel:7276630392" className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 font-bold text-white backdrop-blur transition hover:bg-white/16">
              <Phone className="text-sunshine" /> 7276630392
            </a>
            <a href="https://wa.me/917276630392" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 font-bold text-white backdrop-blur transition hover:bg-white/16">
              <MessageCircle className="text-aqua" /> WhatsApp booking support
            </a>
            <a href="https://www.instagram.com/allkindsplay" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 font-bold text-white backdrop-blur transition hover:bg-white/16">
              <Instagram className="text-coral" /> @allkindsplay
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2.2rem] border border-white/20 bg-white/12 p-5 shadow-glow backdrop-blur-2xl sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field sm:col-span-1">
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label className="field sm:col-span-1">
              Phone
              <input name="phone" required inputMode="tel" placeholder="Phone number" />
            </label>
            <label className="field">
              Event Date
              <input name="date" required type="date" />
            </label>
            <label className="field">
              Event Type
              <select name="type" required defaultValue="">
                <option value="" disabled>Select type</option>
                <option>Birthday Party</option>
                <option>School Event</option>
                <option>Family Event</option>
                <option>Festival</option>
                <option>Corporate Program</option>
                <option>Other Event</option>
              </select>
            </label>
            <label className="field sm:col-span-2">
              Selected Game
              <select name="game" required defaultValue="">
                <option value="" disabled>Choose a game</option>
                {allGames.map((game) => <option key={game}>{game}</option>)}
              </select>
            </label>
            <label className="field sm:col-span-2">
              Location
              <input name="location" required placeholder="Venue or area" />
            </label>
          </div>
          <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-sunshine px-6 py-4 font-display text-base font-black text-ink shadow-lg transition hover:-translate-y-1 hover:bg-white">
            <Send size={19} /> Submit Booking Request
          </button>
        </form>
      </div>
    </section>
  );
}
