export default function SectionHeading({ eyebrow, title, children, align = 'center' }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="mb-3 font-display text-sm font-black uppercase tracking-[0.2em] text-coral">{eyebrow}</p>
      <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-base font-medium leading-8 text-ink/70 sm:text-lg">{children}</p>}
    </div>
  );
}
