import SectionHeading from './SectionHeading.jsx';
import { galleryImages } from '../data/gallery.js';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Gallery" title="Colorful moments from playful celebrations">
          Kids playing games, inflatable fun, birthday energy, and premium event setups made to look fantastic in real life and on camera.
        </SectionHeading>
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className={`group relative overflow-hidden rounded-[1.7rem] shadow-2xl ${index === 0 || index === 5 ? 'lg:row-span-2' : ''} ${index === 2 ? 'lg:col-span-2' : ''}`}>
              <img src={image.src} alt={image.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 font-display text-lg font-black">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
