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
    name: ".NET",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2 20h2v-2H2Zm4.5 0h1.7v-7.6L14 20h2V6h-1.7v7.5L8.5 6H6.5Zm12 0h1.8v-1.8h-1.8Zm3.5-12h-2v1.7h-2V11h2v2.3h1.7V11H22V9.7h-2Z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.8 2 2 7.7v8.6l9.8 5.7 9.8-5.7V7.7L11.8 2Zm0 1.7 8.3 4.8-3.7 2.1-4.6-2.7V5.5L10 6.6v2.5L5.4 6.4 11.8 3.7Zm-8.3 5 3.7 2.1v5.4l-3.7-2.1V8.7Zm4.7 2.7 4.6 2.7v5.4l-4.6-2.7v-5.4Zm1 8.2v-2.5l4.6 2.7-4.6-2.7V9.7l3.7-2.1v7.6l-3.7 2.2Zm8.4-1.2-3.7 2.1-1-5.7 4.7 3.6Z" />
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
    name: "SQL",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.5 2 2 4.2 2 7c0 2.2 3 4.1 7.2 4.8V13C5.2 12.3 2 10.6 2 8.5v3.3c0 2.8 4.5 5 10 5s10-2.2 10-5V8.5C22 10.6 18.8 12.3 14.8 13V11.8c4.2-.7 7.2-2.6 7.2-4.8 0-2.8-4.5-5-10-5Zm0 1.5c4.7 0 8.5 1.7 8.5 3.5S16.7 10.5 12 10.5 3.5 8.8 3.5 7 7.3 3.5 12 3.5ZM2 13.7v3.3c0 2.8 4.5 5 10 5s10-2.2 10-5v-3.3c-2.3 1.2-5.9 2-10 2s-7.7-.8-10-2Z" />
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
  }
];

export function TechMarquee() {
  const loop = [...techs, ...techs];
  return (
    <section className="relative py-10 border-y border-zinc-800 overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="size-7 shrink-0">{t.svg}</span>
            <span className="font-display text-lg tracking-tight">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
