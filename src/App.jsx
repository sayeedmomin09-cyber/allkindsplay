import About from './components/About.jsx';
import Booking from './components/Booking.jsx';
import Contact from './components/Contact.jsx';
import Features from './components/Features.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Games from './components/Games.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Testimonials from './components/Testimonials.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Games />
        <Gallery />
        <About />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
