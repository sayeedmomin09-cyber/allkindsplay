import { Instagram, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { allGames } from '../data/games.js';
import SectionHeading from './SectionHeading.jsx';

export default function Booking() {
  const [selectedGames, setSelectedGames] = useState([]);

  function toggleGame(game) {
    setSelectedGames((current) => current.includes(game) ? current.filter((item) => item !== game) : [...current, game]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!selectedGames.length) {
      alert('Please select at least one game.');
      return;
    }

    const form = new FormData(event.currentTarget);
    const details = [
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Event Date: ${form.get('date')}`,
      `Event Type: ${form.get('type')}`,
      `Selected Games: ${selectedGames.join(', ')}`,
      `Location: ${form.get('location')}`,
    ].join('\n');
    window.open(`https://wa.me/917276630392?text=${encodeURIComponent(`Hi ALL KINDS PLAY, I want to book an event.\n\n${details}`)}`, '_blank');
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#FFFFFF_0%,#E9FDFF_42%,#FFF1B8_100%)] px-4 py-20 text-ink sm:px-6 lg:px-8">
      <div className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-aqua/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Book now" title="Tell us about your event and we will help plan the fun" align="left">
            Share the event basics and select any number of games. Our team will connect on WhatsApp with availability, suggestions, and setup details.
          </SectionHeading>
          <div className="mt-8 grid gap-4">
            <a href="tel:7276630392" className="flex items-center gap-4 rounded-3xl bg-white/80 p-5 font-bold text-ink shadow-lg backdrop-blur transition hover:bg-white">
              <Phone className="text-coral" /> 7276630392
            </a>
            <a href="https://wa.me/917276630392" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-white/80 p-5 font-bold text-ink shadow-lg backdrop-blur transition hover:bg-white">
              <MessageCircle className="text-aqua" /> WhatsApp booking support
            </a>
            <a href="https://www.instagram.com/allkindsplay" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-white/80 p-5 font-bold text-ink shadow-lg backdrop-blur transition hover:bg-white">
              <Instagram className="text-coral" /> @allkindsplay
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2.2rem] border border-white bg-white/82 p-5 shadow-premium backdrop-blur-2xl sm:p-8">
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
                <option>Wedding Event</option>
                <option>Corporate Program</option>
                <option>School Event</option>
                <option>Family Event</option>
                <option>Festival</option>
                <option>Other Event</option>
              </select>
            </label>
            <div className="field sm:col-span-2">
              Select Games
              <div className="max-h-72 overflow-y-auto rounded-3xl border border-ink/10 bg-white p-3 shadow-inner">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {allGames.map((game) => (
                    <label key={game} className="flex cursor-pointer items-center gap-3 rounded-2xl bg-ink/[0.04] px-3 py-2 text-sm font-bold text-ink transition hover:bg-sunshine/30">
                      <input
                        type="checkbox"
                        checked={selectedGames.includes(game)}
                        onChange={() => toggleGame(game)}
                        className="h-4 w-4 accent-coral"
                      />
                      <span>{game}</span>
                    </label>
                  ))}
                </div>
              </div>
              <p className="text-xs font-bold text-ink/55">Selected: {selectedGames.length || 'None yet'}</p>
            </div>
            <label className="field sm:col-span-2">
              Location
              <input name="location" required placeholder="Venue or area" />
            </label>
          </div>
          <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-coral px-6 py-4 font-display text-base font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-ink">
            <Send size={19} /> Submit Booking Request
          </button>
        </form>
      </div>
    </section>
  );
}
