const techs = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="2.05" />
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5.6 15.3L9.2 6.8H7v10.4h1.7V9l8.6 10.1a8.4 8.4 0 0 1-1.7-1.8ZM15.6 14V6.8h1.7v8.9L15.6 14Z" />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c-3 0-3 1.3-3 1.3v1.7h3v.4H6.5S4 5.2 4 8.7s2.2 3.5 2.2 3.5H8v-2s0-2.2 2.2-2.2h4.6s2 0 2-2V4S17 2 12 2ZM10.5 3.2a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8ZM12 22c3 0 3-1.3 3-1.3V19h-3v-.4h5.5s2.5.2 2.5-3.3-2.2-3.5-2.2-3.5H16v2s0 2.2-2.2 2.2H9.2s-2 0-2 2v3.4S7 22 12 22Zm1.5-1.2a.8.8 0 1 1 .8-.8.8.8 0 0 1-.8.8Z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 10.5h-3.3v3H22a4 4 0 0 1-4 4h-.8a5.5 5.5 0 0 1-5-3H2.3a8.5 8.5 0 0 0 8.4 6 8.7 8.7 0 0 0 8.5-5.4A4.5 4.5 0 0 0 22 10.5ZM4 10h3v3H4Zm4 0h3v3H8Zm4 0h3v3h-3ZM8 6h3v3H8Zm4 0h3v3h-3Zm0-4h3v3h-3Z" />
      </svg>
    ),
  },
  {
    name: ".NET",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2 20h2v-2H2Zm4.5 0h1.7v-7.6L14 20h2V6h-1.7v7.5L8.5 6H6.5Zm12 0h1.8v-1.8h-1.8Zm3.5-12h-2v1.7h-2V11h2v2.3h1.7V11H22V9.7h-2Z" />
      </svg>
    ),
  },
  {
    name: "Gemini API",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2 13.6 8.5A6 6 0 0 0 18 12.9L22 12l-4.4 1.1A6 6 0 0 0 13.6 17.5L12 22l-1.6-4.5A6 6 0 0 0 6 13.1L2 12l4.4-1.1A6 6 0 0 0 10.4 6.5Z" />
      </svg>
    ),
  },
];

export function TechMarquee() {
  const loop = [...techs, ...techs];
  return (
    <section className="relative py-10 border-y border-border/40 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            <span className="size-7 shrink-0">{t.svg}</span>
            <span className="font-display text-lg tracking-tight">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
