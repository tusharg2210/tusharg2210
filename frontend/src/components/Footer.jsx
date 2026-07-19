import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-[var(--line)] bg-black">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
        <div>© {new Date().getFullYear()} — Tushar Gupta. Built with intent.</div>
        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--volt)]">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--volt)]">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--volt)]">Email</a>
        </div>
      </div>
    </footer>
  );
}
